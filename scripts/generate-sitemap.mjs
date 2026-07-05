import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = process.env.VITE_SITE_URL ?? 'https://www.deeplisten.cn'

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/solutions/software-solution', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/intelligent-hardware-solution', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/device-cloud-platform-solution', priority: '0.8', changefreq: 'monthly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/industry-applications', priority: '0.8', changefreq: 'monthly' },
  { path: '/resource-center', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/company', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/team', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/news', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
]

const lastmod = new Date().toISOString().split('T')[0]

const urls = routes
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '../public/sitemap.xml')

writeFileSync(outputPath, sitemap, 'utf-8')
console.log(`Sitemap written to ${outputPath}`)

export { routes as PRERENDER_ROUTES }
