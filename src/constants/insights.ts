import type { FaqItem } from './geo'

export interface ArticleSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface InsightArticle {
  slug: string
  path: string
  title: string
  description: string
  keywords: string
  category: '选型决策' | '技术实现' | '商务决策'
  date: string
  readMinutes: number
  summary: string
  sections: ArticleSection[]
  faqs?: FaqItem[]
  relatedPaths?: { label: string; path: string }[]
}

/** 首月自然流量优先：技术实现类 + 选型决策类长尾问句 */
export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'offline-voice-without-internet',
    path: '/insights/offline-voice-without-internet',
    title: '不联网能不能做语音识别？三种离线方案对比',
    description:
      '不联网也能做语音识别。对比命令词离线模组、端侧唤醒+本地 ASR、离在线一体三种方案的成本、体验与适用场景，帮整机厂快速判断该买模块还是上芯片。',
    keywords:
      '不联网 语音识别,断网 语音控制,免联网语音模块,离线语音识别,语音识别 不上云 隐私,无网环境 声控',
    category: '技术实现',
    date: '2026-10-19',
    readMinutes: 8,
    summary:
      '可以。家电与嵌入式场景里，绝大多数「开关/档位/场景」指令用纯离线命令词方案就够用；只有复杂对话才需要云。关键是先分清你要的是控制，还是聊天。',
    sections: [
      {
        heading: '结论先说清楚',
        paragraphs: [
          '不联网可以做语音识别，而且在浴霸、油烟机、风扇、晾衣架、开关面板等产品上，离线往往是更优解：断网可用、无云服务费、数据不出设备，出口与适老/医疗场景更好讲合规。',
          '真正要选的不是「要不要 AI」，而是：你的产品需要的是「听懂十几到上百条指令」，还是「自由对话」。前者用离线命令词；后者才考虑云或大模型。',
        ],
      },
      {
        heading: '方案一：离线命令词 / 语音控制模块（最常见）',
        paragraphs: [
          '模组或芯片在本地完成唤醒词 + 命令词识别，通过 UART 等接口把结果传给主控。这是整机厂加语音最快的路径，也是「免联网语音模块」「串口语音模块」检索背后的主力方案。',
        ],
        bullets: [
          '优点：成本可控、延迟低（常可到百毫秒级体感）、无流量费、易量产',
          '局限：词条数量有上限，不适合开放域闲聊',
          '适合：家电、厨电、照明、玩具等「按键语音化」产品',
        ],
      },
      {
        heading: '方案二：端侧唤醒 + 本地 ASR（更重、更贵）',
        paragraphs: [
          '在算力更强的主控或专用芯片上跑更大词汇量的本地识别。体验接近「能说短句」，但 BOM、功耗、调优成本明显高于命令词模组，一般不是小家电第一选择。',
        ],
        bullets: [
          '优点：表达更自由，仍可不上云',
          '局限：资源占用高，开发与测试周期长',
          '适合：高端面板、车载、对交互自然度要求高的品类',
        ],
      },
      {
        heading: '方案三：离在线一体（本地保底 + 云能力扩展）',
        paragraphs: [
          '高频、安全相关指令走本地（开关、停止、全关）；复杂问答、内容服务走云。网络差时核心控制仍可用。适合已经有联网能力、又想讲「断网也能控」的产品。',
        ],
      },
      {
        heading: '怎么选：一张决策表',
        paragraphs: ['按产品目标对号入座即可：'],
        bullets: [
          '只要声控开关/档位/场景 → 优先离线命令词模组',
          '必须数据不上云 / 出口合规 → 纯离线或本地为主',
          '要闲聊、百科、多轮任务 → 离在线一体或云方案',
          '主控已定、不想重画板 → 串口离线语音模块最快',
        ],
      },
      {
        heading: '深聆怎么帮你落地',
        paragraphs: [
          '深聆提供离线语音识别模块与定制开发：自定义唤醒词、场景词条、强噪声优化，标准模块约 2 周出样。若你正在评估「不联网语音识别」，把产品品类和主控接口告诉我们，可以直接给选型建议。',
        ],
      },
    ],
    faqs: [
      {
        question: '离线语音有没有云服务费？',
        answer: '纯离线命令词方案识别在本地完成，不产生按次云识别费用；若后续叠加云能力，云部分才可能有服务费。',
      },
      {
        question: '出口产品用离线语音有助于合规吗？',
        answer: '语音数据不出设备，通常更容易说明隐私与跨境数据风险；具体认证仍需结合目标市场法规评估。',
      },
    ],
    relatedPaths: [
      { label: '询价 / 打样', path: '/contact' },
      { label: '风扇离线语音方案', path: '/scenarios/fan' },
      { label: '离线语音模块怎么选', path: '/insights/how-to-choose-offline-voice-module' },
    ],
  },
  {
    slug: 'how-to-choose-offline-voice-module',
    path: '/insights/how-to-choose-offline-voice-module',
    title: '离线语音识别模块怎么选？看这 6 个参数就够了',
    description:
      '离线语音模块选型不必被参数表淹没。接口、供电尺寸、词条数、唤醒词定制、噪声能力、单价交期这 6 项，足够硬件工程师完成第一轮筛选。',
    keywords:
      '离线语音模块怎么选,离线语音识别模块,语音识别模块,语音控制模块,串口语音模块,语音模块 价格',
    category: '选型决策',
    date: '2026-10-19',
    readMinutes: 7,
    summary:
      '先锁接口与结构，再看词条与噪声，最后看单价与交期。搜「离线语音模块」的人多半主控已定，选型目标是「最快挂上去」，不是追最炫的算法故事。',
    sections: [
      {
        heading: '1. 接口：能不能挂上现有主控',
        paragraphs: [
          '优先确认 UART / I2C / USB 等是否与主控匹配，协议是否清晰（唤醒事件、命令 ID、状态码）。接口不对，后面识别率再好看也要改板。',
        ],
      },
      {
        heading: '2. 供电与尺寸：5V？电池？开孔空间够不够',
        paragraphs: [
          '家电常见 5V 供电；电池类产品要看待机唤醒功耗。结构上预留开孔与声腔，比「芯片算力参数」更能决定量产体验。',
        ],
      },
      {
        heading: '3. 词条数量：你真的需要多少条',
        paragraphs: [
          '风扇、浴霸通常几十条指令足够；复杂面板可能上百条。不要只看「支持 200+」宣传，要看你的产品指令集是否能稳定落在可量产词表内，以及是否支持后期扩词。',
        ],
      },
      {
        heading: '4. 自定义唤醒词与误唤醒',
        paragraphs: [
          '品牌名唤醒词是产品差异点，也是投诉点。问清：能否定制、定制周期、误唤醒率如何测、灵敏度能否按场景调。客厅电视旁的面板和卫生间浴霸，阈值完全不同。',
        ],
      },
      {
        heading: '5. 噪声能力：有没有你这个场景的经验',
        paragraphs: [
          '油烟机、浴霸属于强噪声；晾衣架有电机噪声；照明面板更怕误唤醒。看供应商是否有同场景案例，以及是否提供双麦、AEC、开孔建议——这比实验室安静环境下的 95% 数字更重要。',
        ],
      },
      {
        heading: '6. 单价、打样与交期',
        paragraphs: [
          '问清打样费、MOQ、量产单价区间、交期（标准模块是否约 2 周出样）、是否支持烧录贴片。采购搜「语音模块价格」时，落地页若完全不给区间与流程，询盘会流失。',
        ],
      },
      {
        heading: '模块 vs 芯片：我该买哪个',
        paragraphs: [
          '要快、要稳、主控已定：买离线语音模块。要极致成本、年出货极大且有算法团队：再评估芯片方案。多数中小整机厂第一代产品用模块更划算。',
        ],
      },
    ],
    relatedPaths: [
      { label: '智能硬件 / 语音模块方案', path: '/solutions/intelligent-hardware-solution' },
      { label: '获取报价与交期', path: '/contact' },
    ],
  },
  {
    slug: 'noisy-environment-voice-recognition',
    path: '/insights/noisy-environment-voice-recognition',
    title: '油烟机 / 浴霸强噪声环境，语音识别怎么做才准',
    description:
      '强噪声不是「把麦克风灵敏度开到最大」。从开孔结构、双麦阵列、AEC 回声消除到词条与唤醒词设计，拆解厨电卫生间场景的离线语音落地要点。',
    keywords:
      '强噪声 语音识别,油烟机 语音控制 方案,浴霸 语音控制,语音降噪 回声消除,双麦阵列 语音,AEC 回声消除 算法',
    category: '技术实现',
    date: '2026-10-19',
    readMinutes: 9,
    summary:
      '风机开着还能听懂，靠的是声学结构 + 降噪/AEC + 合理指令设计三件套。只换「识别率更高」的模组、不改开孔，往往徒劳。',
    sections: [
      {
        heading: '强噪声场景难在哪',
        paragraphs: [
          '油烟机高速风机、浴霸暖风机会把人声信噪比打得很低；瓷砖卫生间还有混响。用户又常在远处或手上沾油时喊控，这是「参数词」检索背后的真实痛点。',
        ],
      },
      {
        heading: '第一步：开孔与安装位置',
        paragraphs: [
          '拾音孔避开出风口直吹与油烟直冲路径；模组远离电机驱动；双麦时保持阵列朝向一致、减少遮挡。结构错了，算法很难救回来。',
        ],
        bullets: [
          '浴霸：靠近用户站位一侧，避开出风口',
          '油烟机：防油与可清洁开孔，兼顾站位前方/斜上方',
          '本机蜂鸣/语音播报：必须评估 AEC',
        ],
      },
      {
        heading: '第二步：降噪、双麦与 AEC',
        paragraphs: [
          '双麦阵列有助于定向与抑噪；AEC（回声消除）解决设备自己发声时「听不清用户」；针对风机噪声的模型比通用模型更重要。向供应商要的是「开风机状态下的识别表现」，不是安静实验室数字。',
        ],
      },
      {
        heading: '第三步：唤醒词与词条设计',
        paragraphs: [
          '噪声大时，过短、过于常见的唤醒词更容易误触发或漏唤醒。命令词避免过分相似；紧急指令（如晾衣架「停止」）要单独加强。',
        ],
      },
      {
        heading: '验收怎么测才有用',
        paragraphs: [
          '在目标样机、目标档位噪声下测：固定距离、固定话术、统计成功率与误唤醒。把「70dB 噪声下识别率」这类需求写进测试记录，比口头承诺可靠。',
        ],
      },
    ],
    relatedPaths: [
      { label: '浴霸语音控制方案', path: '/scenarios/bathroom-heater' },
      { label: '油烟机语音方案', path: '/scenarios/range-hood' },
      { label: '唤醒词怎么设计', path: '/insights/wake-word-design' },
    ],
  },
  {
    slug: 'wake-word-design',
    path: '/insights/wake-word-design',
    title: '唤醒词怎么设计才不容易误唤醒（附命名规则）',
    description:
      '自定义唤醒词是品牌差异点，也是误唤醒投诉来源。从音节结构、日常碰撞、噪声场景到灵敏度联调，给出可执行的唤醒词命名规则。',
    keywords:
      '唤醒词怎么设计,自定义唤醒词,语音唤醒词定制,误唤醒率,低功耗 语音唤醒,免发现',
    category: '技术实现',
    date: '2026-10-19',
    readMinutes: 6,
    summary:
      '好唤醒词 = 好记 + 少碰撞 + 可被模型稳定覆盖。别只选「好听」，要在客厅电视旁和卫生间风机旁都测一轮。',
    sections: [
      {
        heading: '误唤醒从哪里来',
        paragraphs: [
          '电视人声、家人对话、短视频口播，都可能撞上与唤醒词相似的音节。灵敏度越高越容易「自己亮了」；调太低又会「怎么喊都没反应」。',
        ],
      },
      {
        heading: '命名规则（可直接用）',
        paragraphs: ['设计品牌唤醒词时，优先满足：'],
        bullets: [
          '2～4 个音节，节奏清晰，避免单字',
          '声母韵母组合不要太常见（少用「小爱」「小度」同类高频碰撞结构去硬撞）',
          '避免与家电自身播报词、提示音谐音相近',
          '中英混用要谨慎，发音不稳定会拉低唤醒率',
          '出口机同步评估当地语言的误触发风险',
        ],
      },
      {
        heading: '和产品经理对齐的三件事',
        paragraphs: [
          '第一，唤醒后是否需要提示音；第二，连续对话窗口多久；第三，误唤醒与漏唤醒的接受度。没有这三条，算法只能盲目调参。',
        ],
      },
      {
        heading: '定制流程建议',
        paragraphs: [
          '定候选词 3～5 个 → 场景噪声试听 → 选 1 个主词 + 1 个备选 → 模组侧定制与联调 → 样机旁路测试（客厅/厨卫）。深聆支持语音唤醒词定制，可按品牌与场景给出建议词与误唤醒调参。',
        ],
      },
    ],
    relatedPaths: [
      { label: '软件算法方案', path: '/solutions/software-solution' },
      { label: '咨询唤醒词定制', path: '/contact' },
    ],
  },
  {
    slug: 'esp32-offline-wake-word',
    path: '/insights/esp32-offline-wake-word',
    title: 'ESP32-S3 跑离线唤醒词，和专用语音芯片差在哪',
    description:
      'ESP32-S3 + ESP-SR 适合原型与创客验证；量产家电更常选专用离线语音芯片/模组。对比算力占用、词条能力、噪声表现、认证与供货，帮你决定自研还是找方案商。',
    keywords:
      'ESP32 离线语音识别,ESP32-S3 唤醒词,ESP-SR 教程,离线语音识别 SDK,关键词识别 KWS,嵌入式语音识别',
    category: '技术实现',
    date: '2026-10-19',
    readMinutes: 8,
    summary:
      'ESP32 路线适合评估与 Demo；要进油烟机/浴霸量产，专用语音模组在噪声、一致性、供货与售后上通常更省心。做不动自研时，回头找方案商是正常路径。',
    sections: [
      {
        heading: 'ESP32-S3 能做什么',
        paragraphs: [
          '借助 ESP-SR 等框架，可以跑唤醒词与一定规模的命令词识别，成本低、资料多，非常适合独立开发者验证「离线语音可不可行」。这是「ESP32 离线语音识别」检索量高的原因。',
        ],
      },
      {
        heading: '和专用语音芯片/模组的差距',
        paragraphs: ['量产决策时重点看这些差：'],
        bullets: [
          '强噪声与远场：专用方案通常有更成熟的前端与场景模型',
          '误唤醒与一致性：家电批次一致性、参数固化、产测流程更完整',
          '主控负担：模组方案可把语音从主控卸掉，系统更简单',
          '供货与认证：模组/芯片的生命周期、认证支持更清晰',
          '定制唤醒词：方案商流程化交付，自研要自己堆数据与调参',
        ],
      },
      {
        heading: '什么时候继续用 ESP32',
        paragraphs: [
          '创客产品、小批量、噪声不极端、团队有嵌入式余力——可以继续。若已进入整机开模、要过安规与年出货，建议并行评估专用离线语音模块，避免量产前推倒重来。',
        ],
      },
      {
        heading: '自研做不动时怎么办',
        paragraphs: [
          '保留你的主控与业务逻辑，把语音交互换成串口离线模组，是常见的「止损升级」路径。深聆可按现有接口给对接建议，并提供场景词条与唤醒词定制。',
        ],
      },
    ],
    relatedPaths: [
      { label: '资源中心', path: '/resource-center' },
      { label: '离线语音模块方案', path: '/solutions/intelligent-hardware-solution' },
      { label: '联系技术咨询', path: '/contact' },
    ],
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug)
}
