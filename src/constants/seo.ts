export interface SeoEntry {
  title: string
  description: string
  keywords: string
  breadcrumb?: string[]
}

export const SITE_NAME = '深聆科技'
export const DEFAULT_OG_IMAGE = '/logo.png'

export const SEO_CONFIG: Record<string, SeoEntry> = {
  '/': {
    title: '深聆科技 - 智能语音方案专家',
    description:
      '深聆科技专注于 AI 语音识别与智能语音交互，提供语音芯片、算法、智能硬件与设备云平台一站式解决方案，服务智能家居、工业物联网等行业。',
    keywords: '深聆科技,语音识别,智能语音,AI语音芯片,语音交互,智能家居,工业物联网',
  },
  '/solutions': {
    title: '解决方案 - 深聆科技',
    description:
      '深聆科技为不同行业提供定制化的智能语音解决方案，涵盖软件算法、智能硬件与设备云平台，助力企业快速实现产品智能化。',
    keywords: '语音解决方案,软件算法方案,智能硬件方案,设备云平台,深聆科技',
    breadcrumb: ['首页', '解决方案'],
  },
  '/solutions/software-solution': {
    title: '软件算法方案 - 深聆科技',
    description:
      '深聆科技软件算法方案提供中文语音识别、外文语音识别与特定声音识别能力，适用于智能家居、工业控制、医疗设备等多场景。',
    keywords: '语音识别算法,中文语音识别,外文语音识别,声音识别,深聆科技',
    breadcrumb: ['首页', '解决方案', '软件算法方案'],
  },
  '/solutions/intelligent-hardware-solution': {
    title: '智能硬件方案 - 深聆科技',
    description:
      '深聆科技智能硬件方案在设备中嵌入智能模块，赋能语音交互能力，支持快速集成与量产落地。',
    keywords: '智能硬件,语音模块,嵌入式语音,深聆科技',
    breadcrumb: ['首页', '解决方案', '智能硬件方案'],
  },
  '/solutions/device-cloud-platform-solution': {
    title: '设备云平台方案 - 深聆科技',
    description:
      '深聆科技设备云平台提供设备接入、数据采集、数据分析与应用服务，帮助企业快速构建物联网应用。',
    keywords: '设备云平台,物联网平台,设备管理,数据采集,深聆科技',
    breadcrumb: ['首页', '解决方案', '设备云平台方案'],
  },
  '/products': {
    title: '智能产品 - 深聆科技',
    description:
      '深聆科技智能产品包括语音门锁、语音遥控器、语音风扇、语音面板、智能拾音器与语音智能体，覆盖多场景语音交互需求。',
    keywords: '语音门锁,语音遥控器,语音面板,智能拾音器,语音智能体,深聆科技',
    breadcrumb: ['首页', '智能产品'],
  },
  '/industry-applications': {
    title: '行业应用 - 深聆科技',
    description:
      '深聆科技智能语音方案已应用于智能工业、智能工具、智能安防、智能家居家电与智能消费电子等行业，提供成熟落地案例。',
    keywords: '行业应用,智能工业,智能安防,智能家居,消费电子,深聆科技',
    breadcrumb: ['首页', '行业应用'],
  },
  '/resource-center': {
    title: '资源中心 - 深聆科技',
    description:
      '深聆科技资源中心提供产品技术文档、SDK 下载、开发教程与案例分析，助力开发者快速集成语音能力。',
    keywords: '技术文档,SDK下载,开发教程,语音开发,深聆科技',
    breadcrumb: ['首页', '资源中心'],
  },
  '/about/company': {
    title: '关于深聆科技 - 公司简介',
    description:
      '浙江深聆科技有限公司是专注于 AI 语音识别解决方案的提供商，团队拥有丰富的嵌入式智能设计开发经验。',
    keywords: '深聆科技,公司简介,AI语音识别,智能语音',
    breadcrumb: ['首页', '关于我们', '公司简介'],
  },
  '/about/team': {
    title: '团队介绍 - 深聆科技',
    description:
      '深聆科技团队由具备 15 年以上嵌入式智能设计开发经验的专业人员组成，致力于提供可靠、省心的智能语音方案。',
    keywords: '深聆科技,团队介绍,语音技术团队',
    breadcrumb: ['首页', '关于我们', '团队介绍'],
  },
  '/about/news': {
    title: '新闻动态 - 深聆科技',
    description:
      '了解深聆科技最新动态，包括产品发布、融资进展、行业合作与技术创新等资讯。',
    keywords: '深聆科技,新闻动态,语音技术,行业资讯',
    breadcrumb: ['首页', '关于我们', '新闻动态'],
  },
  '/contact': {
    title: '联系我们 - 深聆科技',
    description:
      '联系深聆科技获取智能语音方案咨询与合作支持。地址：浙江省杭州市滨江区越达巷82号房天下大厦。',
    keywords: '联系我们,深聆科技,语音方案咨询',
    breadcrumb: ['首页', '联系我们'],
  },
}

export const DEFAULT_SEO: SeoEntry = {
  title: '深聆科技 - 智能语音方案专家',
  description:
    '深聆科技专注于 AI 语音识别与智能语音交互，提供芯片、算法、硬件、云平台一站式解决方案。',
  keywords: '深聆科技,语音识别,智能语音,AI语音芯片',
}

export function getSeoForPath(pathname: string): SeoEntry {
  return SEO_CONFIG[pathname] ?? DEFAULT_SEO
}
