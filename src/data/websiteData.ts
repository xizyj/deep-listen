export const websiteData = {
  // 网站基本信息
  siteInfo: {
    title: "深聆智能 - 智能语音交互解决方案领导者",
    description: "深聆智能专注于为传统设备赋能智能化语音识别交互能力，提供软件算法方案、智能硬件方案和设备云平台方案。",
    keywords: "智能语音, 语音识别, 交互方案, 智能硬件, 云平台"
  },
  
  // 导航菜单数据
  mainNav: [
    {
      id: "solutions",
      label: "方案介绍",
      path: "/solutions",
      children: [
        { id: "software-solution", label: "软件算法方案", path: "/solutions/software" },
        { id: "hardware-solution", label: "智能硬件方案", path: "/solutions/hardware" },
        { id: "cloud-platform", label: "设备云平台方案", path: "/solutions/cloud" },
        { id: "online-speech", label: "在线语音方案", path: "/solutions/online-speech" },
        { id: "local-online-speech", label: "本地+在线语音方案", path: "/solutions/local-online-speech" }
      ]
    },
    {
      id: "products",
      label: "产品介绍",
      path: "/products",
      children: [
        { id: "voice-remote", label: "语音遥控器", path: "/products/voice-remote" },
        { id: "voice-fan", label: "语音风扇", path: "/products/voice-fan" },
        { id: "voice-panel", label: "语音面板", path: "/products/voice-panel" },
        { id: "smart-speaker", label: "智能语音箱", path: "/products/smart-speaker" },
        { id: "voice-body", label: "语音智能体", path: "/products/voice-body" }
      ]
    },
    {
      id: "industries",
      label: "行业应用",
      path: "/industries",
      children: [
        { id: "smart-industry", label: "智能工业", path: "/industries/smart-industry" },
        { id: "smart-tool", label: "智能工具", path: "/industries/smart-tool" },
        { id: "smart-security", label: "智能安防", path: "/industries/smart-security" },
        { id: "smart-home", label: "智能家居家电", path: "/industries/smart-home" },
        { id: "smart-consumer", label: "智能消费电子", path: "/industries/smart-consumer" }
      ]
    },
    {
      id: "resources",
      label: "资源中心",
      path: "/resources",
      children: [
        { id: "data-download", label: "资料下载", path: "/resources/download" },
        { id: "tech-forum", label: "技术论坛", path: "/resources/forum" },
        { id: "sample-purchase", label: "样机申购", path: "/resources/sample" },
        { id: "enterprise-media", label: "企业媒体中心", path: "/resources/media" }
      ]
    },
    {
      id: "about",
      label: "关于我们",
      path: "/about",
      children: [
        { id: "company-background", label: "公司背景", path: "/about/background" },
        { id: "team", label: "人员团队", path: "/about/team" },
        { id: "culture", label: "企业文化", path: "/about/culture" },
        { id: "news", label: "新闻中心", path: "/about/news" }
      ]
    }
  ],
  
  // 首页内容数据
  home: {
    hero: {
      title: "赋能传统设备<br />智能化语音交互",
      subtitle: "深聆智能提供领先的语音识别与交互解决方案，让您的产品拥有智能语音交互能力",
      ctaText: "了解解决方案",
      ctaLink: "/solutions",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20voice%20interaction%20technology%20concept%20illustration%2C%20modern%20tech%20style&sign=5c6827ac1a6a4042c744f0212bea283c"
    },
    
    about: {
      title: "关于深聆智能",
      content: "浙江深聆智能科技有限公司是一家专注于智能语音交互技术研发与应用的高科技企业。我们致力于通过纯软件升级或硬件模块集成的方式，为传统设备赋能智能化语音识别交互能力，帮助客户快速实现产品智能化升级。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Modern%20tech%20company%20office%20environment%2C%20professional%20team%20working&sign=d9d61d9bb2981a9d00a725d07ae5f055"
    },
    
    coreAdvantages: [
      {
        title: "技术领先",
        description: "拥有自主研发的语音识别算法，识别准确率达98%以上，支持多语种识别。",
        icon: "fa-microchip"
      },
      {
        title: "灵活部署",
        description: "提供纯软件升级和硬件模块集成两种方案，满足不同客户需求。",
        icon: "fa-cubes"
      },
      {
        title: "快速集成",
        description: "标准化API接口和SDK，客户可在7-15天内完成产品集成。",
        icon: "fa-bolt"
      },
      {
        title: "云端管理",
        description: "提供设备管理云平台，支持远程配置、OTA升级和数据分析。",
        icon: "fa-cloud"
      }
    ],
    
    featuredSolutions: [
      {
        id: "software-solution",
        title: "软件算法方案",
        description: "通过纯软件升级的方案赋能传统设备智能化语音识别交互能力，无需硬件改动。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Software%20solution%20for%20voice%20recognition&sign=df5f657ae75bc6aecf980d14da034d4c",
        link: "/solutions/software"
      },
      {
        id: "hardware-solution",
        title: "智能硬件方案",
        description: "在设备中嵌入智能模块，提供单Mic和多Mic识别模组方案，赋能智能交互能力。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Smart%20hardware%20module%20for%20voice%20interaction&sign=4bb719321135751f2fe795f62a030702",
        link: "/solutions/hardware"
      },
      {
        id: "cloud-platform",
        title: "云平台方案",
        description: "提供设备管理云平台，实现设备远程管理、智能配置和数据分析。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cloud%20platform%20for%20device%20management&sign=279f4500db69345fb9a5a1afeddcad72",
        link: "/solutions/cloud"
      }
    ],
    
    industries: [
      {
        name: "智能家居",
        icon: "fa-home",
        description: "为家电产品提供智能语音交互解决方案"
      },
      {
        name: "智能工业",
        icon: "fa-industry",
        description: "工业设备语音控制与状态监测"
      },
      {
        name: "智能安防",
        icon: "fa-shield-alt",
        description: "安防设备语音控制与异常报警"
      },
      {
        name: "消费电子",
        icon: "fa-mobile-alt",
        description: "各类消费电子产品语音交互功能"
      },
      {
        name: "智能工具",
        icon: "fa-wrench",
        description: "专业工具智能化升级解决方案"
      }
    ],
    
    testimonials: [
      {
        quote: "深聆智能的语音解决方案帮助我们的家电产品快速实现了智能化升级，用户反馈非常好。",
        author: "张总",
        company: "某知名家电企业"
      },
      {
        quote: "集成深聆智能的语音模块后，我们的工业设备操作更加便捷，大大提高了工作效率。",
        author: "李工",
        company: "某工业自动化公司"
      },
      {
        quote: "深聆智能的技术团队响应迅速，解决方案稳定可靠，是我们值得信赖的合作伙伴。",
        author: "王经理",
        company: "某消费电子品牌"
      }
    ]
  },
  
  // 解决方案内容数据
  solutions: {
    software: {
      title: "软件算法方案",
      description: "通过纯软件升级的方案赋能传统设备智能化语音识别交互能力，无需更改硬件设计。",
      features: [
        {
          title: "中文语音识别",
          description: "高精度中文语音识别引擎，支持多种方言和口音识别。"
        },
        {
          title: "外文语音识别",
          description: "支持英语、日语、韩语等多种外语语音识别。"
        },
        {
          title: "特定声音识别",
          description: "可定制特定声音识别，如设备异常声音检测等。"
        },
        {
          title: "低资源占用",
          description: "优化算法设计，适用于各类嵌入式设备，资源占用低。"
        }
      ],
      applicationScenarios: [
        "智能家电控制",
        "车载信息娱乐系统",
        "智能穿戴设备",
        "工业控制终端",
        "医疗设备交互"
      ],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Software%20solution%20for%20voice%20recognition%20system&sign=eafdebdec22772d6879d7a6adc83b29d"
    },
    
    // 其他解决方案数据将在具体页面组件中定义
  }
};