/** GEO / 检索推广：可被搜索引擎与生成式引擎引用的事实与问句内容 */

export const SITE_POSITIONING =
  '深聆科技是离线语音识别与语音控制模块方案商，为家电、厨电、照明等整机厂提供免联网语音模组、自定义唤醒词与定制开发。'

export const KEY_FACTS = [
  { label: '命令词条', value: '200+', note: '可按产品定制扩展' },
  { label: '识别准确率', value: '95%+', note: '实验室标准话术测试' },
  { label: '出样周期', value: '约 2 周', note: '标准模块打样' },
] as const

export interface FaqItem {
  question: string
  answer: string
}

/** 首页 FAQ：承接长尾问句，利于 GEO 引用 */
export const HOME_FAQS: FaqItem[] = [
  {
    question: '不联网能不能做语音识别？',
    answer:
      '可以。深聆提供纯离线语音识别方案：命令词与唤醒词在设备本地完成，断网可用、数据不上云，适合出口产品、适老家电与对隐私要求高的场景。也可按需做成离在线一体，本地指令走离线、复杂对话走云。',
  },
  {
    question: '离线语音识别模块怎么选？',
    answer:
      '建议优先看六项：接口（UART/I2C 等是否匹配主控）、尺寸与供电（如 5V）、词条数量、是否支持自定义唤醒词、噪声环境能力（降噪/双麦/远场）、单价与交期。深聆可提供选型对比与样机打样。',
  },
  {
    question: '油烟机、浴霸这种强噪声环境，语音识别怎么做才准？',
    answer:
      '强噪声场景需要针对性声学方案：拾音开孔与腔体设计、双麦阵列与 AEC 回声消除、针对风机/电机噪声的降噪模型，以及合理的唤醒词与指令集设计以降低误唤醒。深聆已有浴霸、油烟机等厨卫场景落地经验。',
  },
  {
    question: '语音方案从立项到量产一般要多久？',
    answer:
      '标准离线语音模块打样通常约 2 周出样；含结构开孔、唤醒词定制与联调的整机项目，常见周期为数周到数月，取决于结构改动与认证要求。欢迎联系获取针对您产品的交期评估。',
  },
  {
    question: '语音模块打样要多少钱，MOQ 一般多少？',
    answer:
      '打样费用与模块规格、是否定制唤醒词/词条有关，量产有起订量（MOQ）要求。具体价格区间与 MOQ 请通过官网询盘或电话沟通，我们会按场景给出报价区间与开发周期说明。',
  },
]

export interface ScenarioCommand {
  wake?: string
  commands: string[]
}

export interface ScenarioPageContent {
  slug: string
  path: string
  name: string
  headline: string
  summary: string
  searchIntent: string
  noiseProfile: string[]
  installTips: string[]
  typicalCommands: ScenarioCommand
  benefits: { title: string; desc: string }[]
}

export const SCENARIO_PAGES: ScenarioPageContent[] = [
  {
    slug: 'bathroom-heater',
    path: '/scenarios/bathroom-heater',
    name: '浴霸语音控制',
    headline: '浴霸离线语音控制方案',
    summary:
      '面向浴霸 / 暖风机整机厂的离线语音识别方案：免联网、低误唤醒，适配卫生间高湿、风机噪声环境，支持照明、暖风、换气、吹风等典型指令定制。',
    searchIntent: '浴霸 语音控制',
    noiseProfile: [
      '卫生间相对封闭，风机与暖风开启后噪声常在中高分贝，易掩盖人声',
      '水汽、瓷砖反射造成混响，远场拾音易出现拖尾与误触发',
      '用户常在淋浴中远距离喊指令，需要稳定唤醒与抗噪声识别',
    ],
    installTips: [
      '拾音孔避开出风口直吹，优先靠近用户常用站位一侧',
      '开孔直径与腔体深度按模组规格预留，避免密封胶堵塞声腔',
      '模组尽量远离强电磁干扰源（电源板、电机驱动）',
      '建议双麦时保持阵列朝向与面板平面一致，减少结构遮挡',
    ],
    typicalCommands: {
      wake: '小聆小聆（可定制品牌唤醒词）',
      commands: [
        '打开暖风 / 关闭暖风',
        '打开照明 / 关闭照明',
        '打开换气 / 关闭换气',
        '打开吹风 / 关闭吹风',
        '全部关闭',
      ],
    },
    benefits: [
      { title: '免联网离线识别', desc: '卫生间弱网或无网也能声控，无云服务费' },
      { title: '强噪声适配', desc: '针对风机噪声做降噪与词条优化，降低误唤醒' },
      { title: '快速出样', desc: '标准方案约 2 周出样，支持 UART 等常见接口对接主控' },
    ],
  },
  {
    slug: 'range-hood',
    path: '/scenarios/range-hood',
    name: '油烟机语音方案',
    headline: '油烟机离线语音控制方案',
    summary:
      '油烟机强噪声、油污与开合门场景下的离线语音识别方案：支持档位、灯光、延时关机等指令，可定制唤醒词，减少油手操作不便。',
    searchIntent: '油烟机 语音控制 方案',
    noiseProfile: [
      '高速风机噪声突出，人声信噪比低，是语音识别的难点场景',
      '炒菜时环境噪声突变，且伴随锅具碰撞等突发声',
      '油烟与油污影响拾音孔长期可靠性，需结构与防护设计',
    ],
    installTips: [
      '拾音开孔避开油烟直冲路径，可配合防油网或隐藏式开孔',
      '模组安装位置优先选用户站位正前方或斜上方，兼顾远场',
      '做好开孔密封与可清洁设计，避免油污堵塞影响灵敏度',
      '若带显示/按键蜂鸣，需配合 AEC 抑制本机发声干扰',
    ],
    typicalCommands: {
      wake: '小聆小聆（可定制）',
      commands: [
        '打开油烟机 / 关闭油烟机',
        '一档 / 二档 / 三档 / 自动档',
        '打开灯光 / 关闭灯光',
        '延时关机',
        '加强吸力',
      ],
    },
    benefits: [
      { title: '强噪声语音识别', desc: '面向厨电风机噪声优化，提升开风机状态下的指令成功率' },
      { title: '自定义唤醒词', desc: '可按品牌定制唤醒词，控制误唤醒率' },
      { title: 'OEM / ODM 友好', desc: '模块化接入，支持打样、烧录与量产交付' },
    ],
  },
  {
    slug: 'fan',
    path: '/scenarios/fan',
    name: '风扇离线语音',
    headline: '风扇 / 循环扇离线语音控制方案',
    summary:
      '为落地扇、塔扇、循环扇等提供离线语音控制模块方案：开关、风速、摇头、定时等指令本地识别，成本可控，适合家电语音升级与出口不上云需求。',
    searchIntent: '风扇 离线语音',
    noiseProfile: [
      '风扇运转本身有风噪与电机噪声，近场相对可控、远场需注意',
      '客厅/卧室场景有电视、对话等背景声，需平衡灵敏度与误唤醒',
      '用户可能隔空喊控，拾音方向与开孔位置影响体验',
    ],
    installTips: [
      '面板开孔朝向用户常用区域，避免被网罩完全遮挡',
      '模组远离电机与电源模块，降低电磁与振动耦合',
      '若产品自带提示音，建议开启回声消除（AEC）',
      '出口机可强调本地识别、数据不出设备，便于合规说明',
    ],
    typicalCommands: {
      wake: '小聆小聆（可定制）',
      commands: [
        '打开风扇 / 关闭风扇',
        '增大风速 / 减小风速',
        '一档 / 二档 / 三档',
        '打开摇头 / 关闭摇头',
        '定时一小时 / 取消定时',
      ],
    },
    benefits: [
      { title: '离线语音模块', desc: '免流量费，断网可用，适合内外销机型统一方案' },
      { title: '低成本加语音', desc: '模块化升级，减少主控重画板成本' },
      { title: '指令可定制', desc: '词条与唤醒词按产品定义，支持多语言扩展' },
    ],
  },
  {
    slug: 'clothes-dryer',
    path: '/scenarios/clothes-dryer',
    name: '晾衣架语音模组',
    headline: '电动晾衣架离线语音控制方案',
    summary:
      '电动晾衣架 / 升降晾衣机离线语音模组方案：升起、降落、停止、照明、风干等指令本地识别，阳台弱网也能用，支持品牌唤醒词定制。',
    searchIntent: '晾衣架 语音模组',
    noiseProfile: [
      '阳台相对空旷，有回声与窗外环境声，远场拾音需兼顾灵敏度',
      '电机升降时机械噪声明显，运动过程中喊「停止」是关键体验点',
      '南方阳台潮湿，模组与开孔需考虑防潮与冷凝',
    ],
    installTips: [
      '主机箱开孔朝向用户常用站位（室内侧），避免被晾杆衣物长期遮挡',
      '模组远离大功率电机驱动与开关电源，降低电磁干扰',
      '升降过程若有提示音/蜂鸣，建议开启 AEC，避免自己喊停听不清',
      '注意防水防潮：密封圈、开孔朝下或隐蔽开孔，延长拾音可靠性',
    ],
    typicalCommands: {
      wake: '小聆小聆（可定制）',
      commands: [
        '升起 / 降落 / 停止',
        '打开照明 / 关闭照明',
        '打开风干 / 关闭风干',
        '打开烘干 / 关闭烘干',
        '消毒开 / 消毒关',
      ],
    },
    benefits: [
      { title: '阳台弱网可用', desc: '纯离线识别，不依赖 Wi-Fi，升降控制更稳' },
      { title: '运动中可打断', desc: '针对电机噪声优化「停止」等紧急指令识别' },
      { title: '模组化升级', desc: '对接现有晾衣架主控，缩短语音功能上市周期' },
    ],
  },
  {
    slug: 'lighting',
    path: '/scenarios/lighting',
    name: '照明语音控制',
    headline: '照明 / 开关面板离线语音控制方案',
    summary:
      '灯具、开关面板、吸顶灯等照明场景的离线语音控制模块：开关灯、调光、调色温、场景模式本地识别，适合智能家居与酒店工程批量交付。',
    searchIntent: '照明 语音控制模块',
    noiseProfile: [
      '客厅/卧室常有电视、对话与空调噪声，误唤醒控制比极限远场更重要',
      '多灯多回路场景指令相似度高（开灯/关灯/全开），需词条区分清晰',
      '面板安装位置偏低或靠墙时，声腔与开孔方向影响拾音一致性',
    ],
    installTips: [
      '开关面板模组开孔朝向室内，避免被装饰面板完全封死',
      '若面板自带按键音/继电器声，联调时验证 AEC 与防误触发',
      '多路照明建议指令命名带区域或序号，降低「开灯」歧义',
      '酒店工程批量机型可统一唤醒词与词条包，便于烧录与售后',
    ],
    typicalCommands: {
      wake: '小聆小聆（可定制）',
      commands: [
        '打开灯光 / 关闭灯光',
        '调亮一点 / 调暗一点',
        '暖光 / 冷光 / 中性光',
        '阅读模式 / 观影模式',
        '全部关闭',
      ],
    },
    benefits: [
      { title: '开关面板可集成', desc: '语音控制模块适配面板结构，支持离线本地控灯' },
      { title: '低误唤醒优先', desc: '家居场景强调「不乱开灯」，可调灵敏度与唤醒词' },
      { title: '工程可复制', desc: '词条包与烧录流程适合批量交付与售后替换' },
    ],
  },
]

export function getScenarioBySlug(slug: string): ScenarioPageContent | undefined {
  return SCENARIO_PAGES.find((s) => s.slug === slug)
}
