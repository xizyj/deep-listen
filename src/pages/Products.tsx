import Layout from '../components/Layout';
import { useIntersectionFadeIn } from '../hooks/useIntersectionFadeIn';
import '../styles/Products.css';

const Products = () => {
  useIntersectionFadeIn({ visibleClass: 'visible' });

  const productCategories = [
    {
      id: 'voice-lock',
      title: '语音门锁',
      description: '前沿语音识别技术与安防门锁深度融合，既是守护家居安全的可靠屏障，也是提升生活便捷度的智能伙伴。',
      features: ['AI 精准语音识别', 'AI 多模态解锁兼容', '安全防护升级', '人性化语音交互', '低耗续航设计', '智能联动拓展'],
      img: '/images/yuyinmensuo.jpeg',
    },
    {
      id: 'voice-remote',
      title: '语音遥控器',
      description: '基于AI语音识别技术的智能遥控器，支持多种设备控制，解放双手，提供更便捷的操作体验。',
      features: ['离线语音识别', '多设备兼容', '自定义语音指令', '低功耗设计', '学习功能', '场景一键切换'],
      img: '/images/yuyinyaokongqi.jpeg',
    },
    {
      id: 'voice-fan',
      title: '语音风扇',
      description: '集成语音控制技术的智能风扇产品，支持风速调节、定时开关、摇头控制等功能，让使用更便捷。',
      features: ['离线语音控制', '自然风模式', '定时功能', '静音设计', '角度调节', '节能设计'],
      img: '/images/yuyinfengshan.jpeg',
    },
    {
      id: 'voice-panel',
      title: '语音面板',
      description: '集成了AI语音识别和控制功能的智能面板，适用于智能家居、工业控制等场景的人机交互需求。',
      features: ['离线语音识别', '触控界面', '场景控制', 'Zigbee/WiFi连接', '多协议支持', '数据分析'],
      img: '/images/yuyinmianban.jpeg',
    },
    {
      id: 'smart-microphone',
      title: '智能拾音器',
      description: '高性能智能拾音设备，集成AI语音处理算法，提供清晰的语音采集和处理功能，适用于多种场景。',
      features: ['远场拾音', '噪音抑制', '回声消除', '声源定位', '定向拾音', '智能降噪'],
      img: '/images/zhinengshiyinqi.jpeg',
    },
    {
      id: 'voice-agent',
      title: '语音智能体',
      description: '基于大语言模型和语音交互技术的智能体产品，提供自然对话、知识问答、任务处理等智能化服务。',
      features: ['多轮对话', '知识图谱', '业务集成', '个性化定制', '多模态交互', '设备控制'],
      img: '/images/yuyinzhinengti.jpeg',
    },
  ];

  return (
    <Layout>
      <div className="products-page">
        <div className="page-header">
          <div className="container">
            <h1>智能产品</h1>
            <p>为您提供全方位的智能硬件产品，从模组到整机，满足不同场景的智能化需求</p>
          </div>
        </div>

        <div className="products-content">
          <div className="container">
            <div className="product-categories">
              {productCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="category-link"
                >
                  {category.title}
                </a>
              ))}
            </div>

            {productCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="product-category fade-in-section"
              >
                <h2>{category.title}</h2>
                <p className="category-description">{category.description}</p>

                <div className="product-overview">
                  <div className="product-image">
                    <img
                      src={category.img}
                      alt={category.title}
                      className="category-img"
                      loading="lazy"
                      style={{
                        height: '300px',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-features-container">
                      <h4>核心功能</h4>
                      <ul className="product-features">
                        {category.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-support fade-in-section" id="support">
          <div className="container">
            <h2>技术支持</h2>
            <p>我们提供全方位的技术支持和服务，帮助您快速集成和部署我们的智能产品</p>
            <div className="support-options">
              <div className="support-option">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 7.92 7.05 4.56 11 4.07V19.93ZM13.03 17.58L15.11 15.5C15.69 14.92 16.36 14.92 16.94 15.5L18.97 17.58C19.55 18.16 19.55 19.12 18.97 19.7C18.39 20.28 17.43 20.28 16.85 19.7L15.82 18.67L14.79 19.7C14.21 20.28 13.25 20.28 12.67 19.7C12.09 19.12 12.09 18.16 12.67 17.58L13.03 17.58Z"/>
                  </svg>
                </div>
                <h3>技术文档</h3>
                <p>提供详细的产品规格书、用户手册和开发文档</p>
              </div>
              <div className="support-option">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"/>
                  </svg>
                </div>
                <h3>开发者社区</h3>
                <p>加入我们的开发者社区，获取技术支持和分享经验</p>
              </div>
              <div className="support-option">
                <div className="support-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM17 15H7V13H17V15Z"/>
                  </svg>
                </div>
                <h3>培训服务</h3>
                <p>提供专业的产品培训和技术认证服务</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section fade-in-section" id="contact">
          <div className="container">
            <h2>联系我们</h2>
            <p>如有任何问题或需求，请联系我们的销售团队</p>
            <a href="#" className="btn btn-primary">联系销售</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
