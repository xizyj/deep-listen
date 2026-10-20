import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getSeoForPath,
} from '../constants/seo'
import { SITE_POSITIONING, type FaqItem } from '../constants/geo'
import { getInsightBySlug } from '../constants/insights'

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://www.deeplisten.cn'

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '浙江深聆科技有限公司',
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description: SITE_POSITIONING,
    knowsAbout: [
      '离线语音识别',
      '离线语音模块',
      '语音控制模块',
      '自定义唤醒词',
      '嵌入式语音识别',
      '语音方案定制',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-18626895139',
      email: 'support@deeplisten.cn',
      contactType: 'sales',
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
    description: SITE_POSITIONING,
    inLanguage: 'zh-CN',
    publisher: {
      '@type': 'Organization',
      name: '浙江深聆科技有限公司',
    },
  }
}

function buildServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '离线语音识别与语音控制模块方案',
    serviceType: '离线语音识别方案',
    provider: {
      '@type': 'Organization',
      name: '浙江深聆科技有限公司',
      url: SITE_URL,
    },
    areaServed: 'CN',
    description: SITE_POSITIONING,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contact`,
    },
  }
}

function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function buildArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: '浙江深聆科技有限公司',
    },
    publisher: {
      '@type': 'Organization',
      name: '浙江深聆科技有限公司',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      },
    },
    mainEntityOfPage: url,
    inLanguage: 'zh-CN',
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
    jsonLd.push(buildServiceSchema())
  }
  if (seo.breadcrumb && seo.breadcrumb.length > 1) {
    jsonLd.push(buildBreadcrumbSchema(seo.breadcrumb, pathname))
  }
  if (seo.faqs && seo.faqs.length > 0) {
    jsonLd.push(buildFaqSchema(seo.faqs))
  }

  if (pathname.startsWith('/insights/')) {
    const article = getInsightBySlug(pathname.replace('/insights/', ''))
    if (article) {
      jsonLd.push(
        buildArticleSchema(article.title, article.description, canonicalUrl, article.date),
      )
    }
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
