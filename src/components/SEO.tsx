import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getSeoForPath,
} from '../constants/seo'

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://www.deeplisten.cn'

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '浙江深聆科技有限公司',
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-18626895139',
      email: 'support@deeplisten.cn',
      contactType: 'customer service',
      areaServed: 'CN',
      availableLanguage: ['Chinese', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '越达巷82号房天下大厦',
      addressLocality: '杭州市滨江区',
      addressRegion: '浙江省',
      addressCountry: 'CN',
    },
  }
}

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: '浙江深聆科技有限公司',
    },
  }
}

function buildBreadcrumbSchema(labels: string[], pathname: string) {
  const segments = pathname.split('/').filter(Boolean)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: labels.map((name, index) => {
      const itemPath = index === 0 ? '/' : `/${segments.slice(0, index).join('/')}`
      return {
        '@type': 'ListItem',
        position: index + 1,
        name,
        item: `${SITE_URL}${itemPath === '/' ? '' : itemPath}`,
      }
    }),
  }
}

const SEO = () => {
  const { pathname } = useLocation()
  const seo = getSeoForPath(pathname)
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`

  const jsonLd: object[] = [buildOrganizationSchema()]
  if (pathname === '/') {
    jsonLd.push(buildWebSiteSchema())
  }
  if (seo.breadcrumb && seo.breadcrumb.length > 1) {
    jsonLd.push(buildBreadcrumbSchema(seo.breadcrumb, pathname))
  }

  return (
    <Helmet key={pathname}>
      <html lang="zh-CN" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="zh_CN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
export { SITE_URL }
