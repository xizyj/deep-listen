import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import './DeviceCloud.css';

const DeviceCloud: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  // 处理滚动渐入效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // 当页面滚动超过100px时显示内容
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="device-cloud-page">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1>设备云平台方案</h1>
          <p>一站式智能设备管理与数据分析云平台解决方案</p>
        </div>
      </section>
      
      {/* 主要内容 */}
      <section className="solution-content">
        <div className="container">
          {/* 标签页导航 */}
          <div className="solution-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              平台概述
            </button>
            <button 
              className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              核心功能
            </button>
            <button 
              className={`tab-button ${activeTab === 'advantages' ? 'active' : ''}`}
              onClick={() => setActiveTab('advantages')}
            >
              技术优势
            </button>
            <button 
              className={`tab-button ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              系统架构
            </button>
            <button 
              className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              应用场景
            </button>
          </div>
          
          {/* 标签页内容 */}
          <div className="tab-content">
            {/* 平台概述 */}
            {activeTab === 'overview' && (
              <div className={`overview-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="overview-main">
                  <img 
                    src="/images/tech-bg-1920x1080.svg" 
                    alt="设备云平台" 
                    className="overview-image"
                  />
                  <div className="overview-text">
                    <h2>平台概述</h2>
                    <p>
                      深聆科技设备云平台是一款专为智能语音设备打造的云服务平台，提供设备管理、数据采集、远程控制、固件更新、
                      数据分析等全方位功能，帮助企业快速构建智能设备生态系统，提升产品竞争力。
                    </p>
                    <p>
                      平台采用先进的云计算架构，支持海量设备接入，具备高可用性、高安全性和可扩展性，
                      能够满足从智能家居、智能汽车到工业物联网等多个领域的应用需求。
                    </p>
                    <p>
                      我们的设备云平台不仅提供标准化的API接口，还支持定制化开发，帮助企业快速实现设备智能化，
                      为用户提供更好的产品体验。
                    </p>
                  </div>
                </div>
                
                <div className="platform-metrics">
                  <div className="metric-item">
                    <div className="metric-value">10M+</div>
                    <div className="metric-label">支持设备接入量</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">服务可用性</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">毫秒级</div>
                    <div className="metric-label">响应速度</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">全球</div>
                    <div className="metric-label">部署节点</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 核心功能 */}
            {activeTab === 'features' && (
              <div className={`features-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14H8C6.89543 14 6 14.8954 6 16V36C6 37.1046 6.89543 38 8 38H12M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14M12 14V16C12 17.1046 12.8954 18 14 18H34C35.1046 18 36 17.1046 36 16V14M12 14H36M36 14V16C36 17.1046 36.8954 18 38 18V36C38 37.1046 37.1046 38 36 38H32M36 14C36 12.8954 35.1046 12 34 12H14C12.8954 12 12 12.8954 12 14M36 14H32" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>设备管理</h3>
                    <p>
                      提供设备注册、分组、状态监控、远程控制等功能，支持批量操作和设备生命周期管理，
                      帮助企业高效管理海量智能设备。
                    </p>
                    <ul className="feature-details">
                      <li>设备注册与认证</li>
                      <li>设备分组与标签</li>
                      <li>设备状态实时监控</li>
                      <li>远程参数配置</li>
                      <li>设备固件远程升级</li>
                    </ul>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18H8V38H12V18Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 14H18V38H22V14Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M32 22H28V38H32V22Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M42 10H38V38H42V10Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>数据采集与分析</h3>
                    <p>
                      实时采集设备运行数据、用户使用数据和环境数据，通过大数据分析技术，
                      为企业提供产品优化、用户行为分析和运营决策支持。
                    </p>
                    <ul className="feature-details">
                      <li>多维度数据采集</li>
                      <li>实时数据流处理</li>
                      <li>数据可视化分析</li>
                      <li>自定义报表生成</li>
                      <li>智能告警与预测</li>
                    </ul>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4V8M24 40V44M4 24H8M40 24H44M35.4 8.6L39.8 13M8.2 35L12.6 39.4M8.2 8.6L12.6 13M35.4 35L39.8 39.4" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="24" cy="24" r="16" stroke="#0066CC" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3>语音识别服务</h3>
                    <p>
                      提供高性能、低延迟的云端语音识别服务，支持中文、英文等多种语言识别，
                      以及特定领域的词汇优化，提升语音交互体验。
                    </p>
                    <ul className="feature-details">
                      <li>实时语音转文字</li>
                      <li>离线语音识别</li>
                      <li>多语言支持</li>
                      <li>自定义词汇库</li>
                      <li>语音情感分析</li>
                    </ul>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8V40M16 8H40M16 8L8 16L16 24L8 32L16 40" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M32 40V16M32 40H16M32 40L40 32L32 24L40 16L32 8" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>固件更新服务</h3>
                    <p>
                      提供安全、可靠的设备固件远程更新服务，支持增量更新、断点续传、版本回滚等功能，
                      确保设备始终保持最佳状态。
                    </p>
                    <ul className="feature-details">
                      <li>OTA固件更新</li>
                      <li>增量更新技术</li>
                      <li>断点续传</li>
                      <li>版本管理与回滚</li>
                      <li>更新进度监控</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* 技术优势 */}
            {activeTab === 'advantages' && (
              <div className={`advantages-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="advantages-grid">
                  <div className="advantage-item">
                    <div className="advantage-number">01</div>
                    <h3>高可用性架构</h3>
                    <p>
                      采用多地域、多可用区部署架构，支持自动容灾和故障转移，确保服务持续稳定运行，
                      为企业提供7×24小时不间断服务保障。
                    </p>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-number">02</div>
                    <h3>海量设备接入</h3>
                    <p>
                      基于高性能消息队列和分布式数据库技术，支持千万级设备同时接入，
                      能够满足大规模智能设备部署场景的需求。
                    </p>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-number">03</div>
                    <h3>全面的数据安全</h3>
                    <p>
                      采用端到端加密技术，包括设备认证、数据传输加密、存储加密等多重安全机制，
                      确保用户数据和设备信息的安全。
                    </p>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-number">04</div>
                    <h3>灵活的扩展性</h3>
                    <p>
                      基于微服务架构设计，支持按需扩展，能够快速响应业务增长需求，
                      同时降低运维成本和技术风险。
                    </p>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-number">05</div>
                    <h3>低延迟响应</h3>
                    <p>
                      采用边缘计算和智能路由技术，优化数据传输路径，大幅降低响应延迟，
                      提升用户交互体验。
                    </p>
                  </div>
                  
                  <div className="advantage-item">
                    <div className="advantage-number">06</div>
                    <h3>丰富的API接口</h3>
                    <p>
                      提供全面、标准化的RESTful API和SDK，支持多语言开发，
                      帮助企业快速集成和开发应用。
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* 系统架构 */}
            {activeTab === 'architecture' && (
              <div className={`architecture-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="architecture-diagram">
                  <img 
                    src="/images/tech-bg-1920x1080.svg" 
                    alt="系统架构图" 
                    className="architecture-image"
                  />
                </div>
                
                <div className="architecture-layers">
                  <h3>系统架构分层</h3>
                  
                  <div className="architecture-layer">
                    <h4>设备层</h4>
                    <p>
                      包括各类智能语音设备、传感器和控制器，通过MQTT、WebSocket等协议与云平台通信，
                      实现数据采集和指令执行。
                    </p>
                  </div>
                  
                  <div className="architecture-layer">
                    <h4>接入层</h4>
                    <p>
                      提供高可用的设备接入服务，支持设备认证、协议转换、数据加密等功能，
                      确保设备安全可靠地连接云平台。
                    </p>
                  </div>
                  
                  <div className="architecture-layer">
                    <h4>服务层</h4>
                    <p>
                      由多个微服务组成，包括设备管理、数据处理、语音识别、固件更新等核心功能，
                      通过API网关对外提供服务。
                    </p>
                  </div>
                  
                  <div className="architecture-layer">
                    <h4>数据层</h4>
                    <p>
                      采用分布式数据库和数据仓库技术，存储设备数据、用户数据和业务数据，
                      支持实时分析和离线计算。
                    </p>
                  </div>
                  
                  <div className="architecture-layer">
                    <h4>应用层</h4>
                    <p>
                      提供Web管理控制台、移动应用和第三方系统集成接口，
                      方便用户和企业管理设备、查看数据和开发应用。
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* 应用场景 */}
            {activeTab === 'applications' && (
              <div className={`applications-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="application-cases">
                  <div className="case-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="智能家居" 
                      className="case-image"
                    />
                    <div className="case-content">
                      <h3>智能家居</h3>
                      <p>
                        为智能音箱、智能灯泡、智能门锁等智能家居设备提供统一的云平台解决方案，
                        支持设备互联、语音控制、场景联动等功能，打造便捷、舒适的智能生活体验。
                      </p>
                      <ul className="case-features">
                        <li>设备集中管理与控制</li>
                        <li>多场景智能联动</li>
                        <li>用户行为分析与个性化推荐</li>
                        <li>OTA固件升级</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="case-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="智能汽车" 
                      className="case-image"
                    />
                    <div className="case-content">
                      <h3>智能汽车</h3>
                      <p>
                        为车载智能设备提供云平台支持，实现车辆状态监控、远程控制、
                        语音交互、数据分析等功能，提升驾驶安全性和舒适性。
                      </p>
                      <ul className="case-features">
                        <li>车辆状态实时监控</li>
                        <li>远程控制与诊断</li>
                        <li>车载语音助手</li>
                        <li>驾驶行为分析</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="case-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="工业物联网" 
                      className="case-image"
                    />
                    <div className="case-content">
                      <h3>工业物联网</h3>
                      <p>
                        为工业设备提供云平台解决方案，实现设备监控、故障预警、
                        生产优化等功能，提高工业生产效率和安全性。
                      </p>
                      <ul className="case-features">
                        <li>工业设备远程监控</li>
                        <li>故障预警与诊断</li>
                        <li>生产数据采集与分析</li>
                        <li>设备维护管理</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* 客户案例 */}
          <div className="customer-cases">
            <h3>客户案例</h3>
            <div className="cases-grid">
              <div className="customer-case">
                <img 
                  src="/images/tech-bg-1920x1080.svg" 
                  alt="客户案例1" 
                  className="case-logo"
                />
                <p>某知名智能家居品牌通过深聆设备云平台，实现了百万级设备的统一管理和控制。</p>
              </div>
              <div className="customer-case">
                <img 
                  src="/images/tech-bg-1920x1080.svg" 
                  alt="客户案例2" 
                  className="case-logo"
                />
                <p>某汽车制造商利用深聆设备云平台，为其智能车载系统提供稳定可靠的云服务支持。</p>
              </div>
              <div className="customer-case">
                <img 
                  src="/images/tech-bg-1920x1080.svg" 
                  alt="客户案例3" 
                  className="case-logo"
                />
                <p>某大型工业企业通过深聆设备云平台，实现了工厂设备的智能化升级和远程监控。</p>
              </div>
            </div>
          </div>
          
          {/* 联系我们 */}
          <div className="contact-section">
            <h3>如需进一步了解，请联系我们</h3>
            <Link to="/about/contact" className="btn btn-primary">联系我们</Link>
          </div>
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>深聆科技</h3>
              <p>可靠、省心的智能语音方案专家</p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22V12M12 12L5 19M12 12L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>产品与服务</h4>
              <ul className="footer-links">
                <li><a href="/solutions/software-solution">软件算法方案</a></li>
                <li><a href="/solutions/intelligent-hardware">智能硬件方案</a></li>
                <li><a href="/solutions/device-cloud">设备云平台方案</a></li>
                <li><a href="/products">智能产品</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>关于我们</h4>
              <ul className="footer-links">
                <li><a href="/about/company">公司简介</a></li>
                <li><a href="/about/team">团队介绍</a></li>
                {/* <li><a href="/about/news">新闻动态</a></li> */}
                <li><a href="/about/contact">联系我们</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>联系我们</h4>
              <ul className="footer-contact">
                <li>地址：浙江省杭州市滨江区越达巷82号房天下大厦</li>
                <li>电话：18626895139</li>
                <li>邮箱：support@deeplisten.cn</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 浙江深聆科技有限公司 保留所有权利. <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025193072号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=33011302000843" target="_blank">浙公网安备33011302000843号</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeviceCloud;