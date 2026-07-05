import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { existsSync } from 'node:fs'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const distDir = join(rootDir, 'dist')
const port = 4173

const SYSTEM_CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
]

function getChromeExecutablePath() {
  return SYSTEM_CHROME_PATHS.find((path) => existsSync(path))
}

const routes = [
  '/',
  '/solutions',
  '/solutions/software-solution',
  '/solutions/intelligent-hardware-solution',
  '/solutions/device-cloud-platform-solution',
  '/products',
  '/industry-applications',
  '/resource-center',
  '/about/company',
  '/about/team',
  '/about/news',
  '/contact',
]

function getOutputPath(route) {
  if (route === '/') {
    return join(distDir, 'index.html')
  }
  return join(distDir, route, 'index.html')
}

async function prerenderRoute(page, baseUrl, route) {
  const url = `${baseUrl}${route === '/' ? '' : route}`
  const expectedCanonical = `https://www.deeplisten.cn${route === '/' ? '' : route}`

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.waitForSelector('h1', { timeout: 15000 })
  await page.waitForFunction(
    (canonical) => {
      const links = document.querySelectorAll('link[rel="canonical"]')
      return Array.from(links).some((link) => link.getAttribute('href') === canonical)
    },
    { timeout: 15000 },
    expectedCanonical,
  )

  await page.evaluate((canonical) => {
    document.querySelectorAll('link[rel="canonical"]').forEach((link) => {
      if (link.getAttribute('href') !== canonical) {
        link.remove()
      }
    })

    const titles = [...document.querySelectorAll('title')]
    if (titles.length > 1) {
      const keep = titles[0]
      titles.slice(1).forEach((title) => title.remove())
    }

    const metaKeys = new Map()
    ;[...document.head.querySelectorAll('meta[name], meta[property]')].forEach((meta) => {
      const key = meta.getAttribute('name') ?? meta.getAttribute('property')
      if (!key) return
      if (metaKeys.has(key)) {
        metaKeys.get(key).remove()
      }
      metaKeys.set(key, meta)
    })
  }, expectedCanonical)

  const html = await page.content()
  const outputPath = getOutputPath(route)
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, html, 'utf-8')
  console.log(`  ✓ ${route || '/'} → ${outputPath.replace(rootDir, '')}`)
}

async function main() {
  console.log('Starting preview server for prerender...')

  const previewServer = await preview({
    root: rootDir,
    preview: {
      port,
      strictPort: true,
    },
  })

  const baseUrl = `http://localhost:${port}`
  console.log(`Preview server running at ${baseUrl}`)
  console.log(`Prerendering ${routes.length} routes...`)

  const chromePath = getChromeExecutablePath()
  const browser = await puppeteer.launch({
    headless: true,
    ...(chromePath ? { executablePath: chromePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    for (const route of routes) {
      await prerenderRoute(page, baseUrl, route)
    }
    await page.close()
  } finally {
    await browser.close()
    previewServer.close()
  }

  console.log('Prerender complete.')
}

main().catch((error) => {
  console.error('Prerender failed:', error)
  process.exit(1)
})
