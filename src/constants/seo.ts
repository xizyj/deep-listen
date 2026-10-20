import { HOME_FAQS, SITE_POSITIONING, getScenarioBySlug, type FaqItem } from './geo'
import { getInsightBySlug } from './insights'

export interface SeoEntry {
  title: string
  description: string
  keywords: string
  breadcrumb?: string[]
  faqs?: FaqItem[]
}

export const SITE_NAME = '深聆科技'
export const DEFAULT_OG_IMAGE = '/logo.png'

export const SEO_CONFIG: Record<string, SeoEntry> = {
  '/': {
    title: '深聆科技 - 离线语音识别模块与语音方案商',
    description: SITE_POSITIONING,
    keywords:
      '离线语音识别,离线语音模块,离线语音识别模块,语音识别模块,语音控制模块,语音方案商,语音识别方案公司,离线语音方案,嵌入式语音识别,本地语音识别,深聆科技',
    faqs: HOME_FAQS,
  },
  '/solutions': {
    title: '离线语音解决方案 - 算法 / 模组 / 云平台 | 深聆科技',
    description:
      '深聆科技提供离线语音识别方案、智能语音模组与设备云平台，支持自定义唤醒词、强噪声识别与家电语音升级，从打样到量产一站式交付。',
    keywords:
      '离线语音方案,语音交互解决方案,智能家电语音升级,语音方案定制,语音方案开发周期,深聆科技',
    breadcrumb: ['首页', '解决方案'],
  },
  '/solutions/software-solution': {
    title: '语音识别算法方案 - 自定义唤醒词 / 降噪 / 方言 | 深聆科技',
    description:
      '深聆软件算法方案覆盖离线语音识别、自定义唤醒词、语音降噪与回声消除、方言识别等能力，适用于智能家居、工业与医疗设备。',
    keywords:
      '语音识别算法,自定义唤醒词,语音唤醒词定制,语音降噪 回声消除,方言语音识别,误唤醒率,离线语音识别 SDK,深聆科技',
    breadcrumb: ['首页', '解决方案', '软件算法方案'],
  },
  '/solutions/intelligent-hardware-solution': {
    title: '离线语音模块 / 语音控制模块选型 - 深聆科技',
    description:
      '深聆智能硬件方案提供离线语音模块、串口语音模块与嵌入式语音模组，支持 UART 等接口快速对接，含尺寸、功耗、词条与量产交付支持。',
    keywords:
      '离线语音模块,语音识别模块,语音控制模块,串口语音模块,免联网语音模块,智能语音模组,语音模组厂家,深聆科技',
    breadcrumb: ['首页', '解决方案', '智能硬件方案'],
  },
  '/solutions/device-cloud-platform-solution': {
    title: '设备云平台与离在线语音方案 - 深聆科技',
    description:
      '深聆设备云平台支持设备接入与数据分析，可与离线语音模组组成离在线一体方案：本地指令走离线，复杂能力走云。',
    keywords: '设备云平台,离在线语音模组,物联网平台,设备管理,深聆科技',
    breadcrumb: ['首页', '解决方案', '设备云平台方案'],
  },
  '/products': {
    title: '语音控制产品 - 门锁 / 遥控器 / 风扇 / 面板 | 深聆科技',
    description:
      '深聆智能产品包括语音门锁、语音遥控器、语音风扇、语音面板、智能拾音器与语音智能体，覆盖多场景离线语音控制需求。',
    keywords:
      '语音风扇,语音面板,语音遥控器,语音门锁,智能拾音器,远场语音识别,深聆科技',
    breadcrumb: ['首页', '智能产品'],
  },
  '/industry-applications': {
    title: '行业应用 - 家电 / 工业 / 安防离线语音方案 | 深聆科技',
    description:
      '深聆离线语音方案已应用于智能家居家电、智能工业、智能安防与消费电子，覆盖浴霸、油烟机、风扇等场景的语音控制落地。',
    keywords:
      '智能家电语音,工业设备语音操作,适老语音家电,玩具语音识别芯片,车载离线语音,深聆科技',
    breadcrumb: ['首页', '行业应用'],
  },
  '/scenarios': {
    title: '场景方案 - 浴霸 / 油烟机 / 风扇 / 晾衣架 / 照明 | 深聆科技',
    description:
      '按场景交付离线语音控制方案：浴霸、油烟机、风扇、晾衣架、照明开关面板等，含噪声特征、开孔建议与典型指令集。',
    keywords:
      '浴霸 语音控制,油烟机 语音控制 方案,风扇 离线语音,晾衣架 语音模组,照明 语音控制模块,场景语音方案,深聆科技',
    breadcrumb: ['首页', '场景方案'],
  },
  '/scenarios/bathroom-heater': {
    title: '浴霸语音控制方案 - 离线语音识别模块 | 深聆科技',
    description:
      '浴霸 / 暖风机离线语音控制方案：适配卫生间风机噪声与混响，支持暖风、照明、换气等指令定制，免联网、可快速打样。',
    keywords: '浴霸 语音控制,浴霸 离线语音,暖风机 语音模块,卫生间 声控,深聆科技',
    breadcrumb: ['首页', '场景方案', '浴霸语音控制'],
    faqs: [
      {
        question: '浴霸适合做离线语音还是云语音？',
        answer:
          '卫生间网络不稳定且对隐私要求高，优先推荐离线语音识别：断网可用、无云服务费。若需复杂对话再考虑离在线一体。',
      },
      {
        question: '浴霸语音控制容易误唤醒吗？',
        answer:
          '误唤醒与唤醒词设计、灵敏度、噪声模型相关。深聆可定制唤醒词并针对风机噪声调参，在可用性与误唤醒之间做平衡。',
      },
    ],
  },
  '/scenarios/range-hood': {
    title: '油烟机语音控制方案 - 强噪声离线语音识别 | 深聆科技',
    description:
      '油烟机离线语音方案面向强风机噪声场景，支持档位、灯光、延时关机等指令，可定制唤醒词，适合厨电语音升级与 OEM/ODM。',
    keywords: '油烟机 语音控制 方案,油烟机 离线语音,强噪声 语音识别,厨电 语音模块,深聆科技',
    breadcrumb: ['首页', '场景方案', '油烟机语音方案'],
    faqs: [
      {
        question: '油烟机开着强档还能语音识别吗？',
        answer:
          '强档下信噪比差，需要降噪算法、合理开孔与词条设计配合。深聆针对厨电风机噪声做优化，可提供联调与实测建议。',
      },
    ],
  },
  '/scenarios/fan': {
    title: '风扇离线语音控制方案 - 语音控制模块 | 深聆科技',
    description:
      '风扇 / 循环扇离线语音控制模块方案：开关、风速、摇头、定时等本地识别，免流量费，适合家电加语音与出口不上云产品。',
    keywords: '风扇 离线语音,语音风扇,风扇 语音控制模块,循环扇 声控,深聆科技',
    breadcrumb: ['首页', '场景方案', '风扇离线语音'],
    faqs: [
      {
        question: '小家电加语音控制贵不贵？',
        answer:
          '费用与模块规格、词条定制、结构改动有关。风扇类标准离线方案通常以模块化接入为主，可先打样评估体验与成本再量产。',
      },
    ],
  },
  '/scenarios/clothes-dryer': {
    title: '晾衣架语音模组方案 - 电动晾衣架离线语音 | 深聆科技',
    description:
      '电动晾衣架离线语音控制方案：升起、降落、停止、照明、风干等指令本地识别，适配阳台弱网与电机噪声，支持模组化升级。',
    keywords: '晾衣架 语音模组,电动晾衣架 语音控制,晾衣机 离线语音,阳台 声控,深聆科技',
    breadcrumb: ['首页', '场景方案', '晾衣架语音模组'],
    faqs: [
      {
        question: '晾衣架升降过程中喊停止能听清吗？',
        answer:
          '电机噪声下的「停止」是关键体验，需要针对运动噪声优化词条与拾音位置。深聆可按样机联调灵敏度与误触发。',
      },
    ],
  },
  '/scenarios/lighting': {
    title: '照明语音控制模块方案 - 开关面板离线语音 | 深聆科技',
    description:
      '灯具与开关面板离线语音控制方案：开关灯、调光、色温与场景模式本地识别，强调低误唤醒，适合家居与酒店工程批量交付。',
    keywords: '照明 语音控制模块,开关面板 语音,吸顶灯 语音控制,窗帘 语音控制,深聆科技',
    breadcrumb: ['首页', '场景方案', '照明语音控制'],
    faqs: [
      {
        question: '开关面板做语音会不会经常误开灯？',
        answer:
          '家居场景应优先控制误唤醒：合理唤醒词、灵敏度与词条命名。深聆可按客厅/卧室环境给出调参建议。',
      },
    ],
  },
  '/insights': {
    title: '离线语音技术与选型文章 | 深聆科技',
    description:
      '深聆技术文章：不联网语音识别、离线语音模块怎么选、强噪声识别、唤醒词设计、ESP32 离线唤醒词等长尾问句详解。',
    keywords:
      '离线语音模块怎么选,不联网能不能做语音识别,强噪声环境语音识别,唤醒词怎么设计,ESP32 离线唤醒词,深聆科技',
    breadcrumb: ['首页', '技术文章'],
  },
  '/resource-center': {
    title: '开发者资源 - 离线语音 SDK / 文档 | 深聆科技',
    description:
      '深聆资源中心提供离线语音识别相关技术文档、SDK 与集成说明，帮助嵌入式与独立开发者评估语音模组与算法能力。',
    keywords:
      '离线语音识别 SDK,ESP32 离线语音识别,关键词识别 KWS,自定义唤醒词 模型,深聆科技',
    breadcrumb: ['首页', '资源中心'],
  },
  '/about/company': {
    title: '关于深聆科技 - 离线语音方案商',
    description:
      '浙江深聆科技有限公司是专注于离线语音识别与智能语音交互的方案商，团队具备丰富嵌入式与 AI 语音产品经验。',
    keywords: '深聆科技,语音方案商,离线语音识别,语音识别方案公司',
    breadcrumb: ['首页', '关于我们', '公司简介'],
  },
  '/about/team': {
    title: '团队介绍 - 深聆科技',
    description:
      '深聆科技团队由具备 15 年以上嵌入式智能设计开发经验的专业人员组成，致力于提供可靠的离线语音与语音模组方案。',
    keywords: '深聆科技,团队介绍,语音技术团队',
    breadcrumb: ['首页', '关于我们', '团队介绍'],
  },
  '/about/news': {
    title: '新闻动态 - 深聆科技',
    description: '了解深聆科技最新动态，包括产品发布、行业合作与离线语音技术创新等资讯。',
    keywords: '深聆科技,新闻动态,语音技术,行业资讯',
    breadcrumb: ['首页', '关于我们', '新闻动态'],
  },
  '/contact': {
    title: '语音模块询价 / 定制开发 - 联系深聆科技',
    description:
      '咨询离线语音模块价格、语音方案定制开发、打样与开发周期。地址：浙江省杭州市滨江区越达巷82号房天下大厦。电话：18626895139。',
    keywords:
      '语音模块 价格,语音方案 定制开发,语音模块 打样,语音方案 开发周期,语音方案 OEM,语音方案 ODM,深聆科技',
    breadcrumb: ['首页', '联系我们'],
    faqs: [
      {
        question: '如何获取语音模块报价与交期？',
        answer:
          '请通过电话 18626895139 或邮箱 support@deeplisten.cn 说明产品类型、接口需求与预估用量。我们会反馈价格区间、打样费用、MOQ 与开发周期。',
      },
    ],
  },
}

export const DEFAULT_SEO: SeoEntry = {
  title: '深聆科技 - 离线语音识别与语音方案商',
  description: SITE_POSITIONING,
  keywords: '深聆科技,离线语音识别,离线语音模块,语音方案商',
}

export function getSeoForPath(pathname: string): SeoEntry {
  if (SEO_CONFIG[pathname]) {
    return SEO_CONFIG[pathname]
  }

  if (pathname.startsWith('/insights/')) {
    const article = getInsightBySlug(pathname.replace('/insights/', ''))
    if (article) {
      return {
        title: `${article.title} | 深聆科技`,
        description: article.description,
        keywords: article.keywords,
        breadcrumb: ['首页', '技术文章', article.title],
        faqs: article.faqs,
      }
    }
  }

  if (pathname.startsWith('/scenarios/')) {
    const scenario = getScenarioBySlug(pathname.replace('/scenarios/', ''))
    if (scenario) {
      return {
        title: `${scenario.headline} | 深聆科技`,
        description: scenario.summary,
        keywords: `${scenario.searchIntent},${scenario.name},离线语音,深聆科技`,
        breadcrumb: ['首页', '场景方案', scenario.name],
      }
    }
  }

  return DEFAULT_SEO
}
