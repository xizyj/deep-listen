import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import '../../styles/SoftwareSolution.css';

const SoftwareSolution: React.FC = () => {
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
    <div className="software-solution-page">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1>软件算法方案</h1>
          <p>通过纯软件升级的方案赋能传统设备智能化语音识别交互能力</p>
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
              方案概述
            </button>
            <button 
              className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              核心特性
            </button>
            <button 
              className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              应用场景
            </button>
            <button 
              className={`tab-button ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              技术参数
            </button>
          </div>
          
          {/* 标签页内容 */}
          <div className="tab-content">
            {/* 方案概述 */}
            {activeTab === 'overview' && (
              <div className={`overview-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="overview-main">
                  <img 
                    src="/images/tech-bg-1920x1080.svg" 
                    alt="软件算法方案" 
                    className="overview-image"
                  />
                  <div className="overview-text">
                    <h2>方案概述</h2>
                    <p>
                      我们的软件算法方案提供了一种灵活、高效的方式，为传统设备添加智能语音识别交互能力，无需硬件改造，大幅降低智能化升级成本。
                    </p>
                    <p>
                      该方案基于我们自主研发的语音识别引擎，支持中文、英文等多种语言识别，以及特定声音识别，可广泛应用于智能家居、工业控制、医疗设备等多个领域。
                    </p>
                    <p>
                      通过SDK和API接口，开发者可以快速将语音识别功能集成到现有产品中，实现语音唤醒、语音命令、语音控制等功能。
                    </p>
                  </div>
                </div>
                
                <div className="overview-benefits">
                  <h3>方案优势</h3>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>无需硬件改造</h4>
                      <p>通过纯软件方式实现，无需更换或改造现有硬件设备</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>快速集成</h4>
                      <p>提供完整的SDK和API接口，支持多种开发语言，快速集成到现有产品中</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>高精度识别</h4>
                      <p>语音识别准确率高达98%以上，支持复杂环境下的语音识别</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>持续升级</h4>
                      <p>支持云端升级，算法持续优化，性能不断提升</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 核心特性 */}
            {activeTab === 'features' && (
              <div className={`features-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="feature-section">
                  <div className="feature-image">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="中文语音识别" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>中文语音识别</h3>
                    <p>
                      支持标准普通话、方言、混合语言等多种中文语音识别模式，覆盖日常生活和工作中的各种场景。具备强大的抗干扰能力，
                      能够在嘈杂环境中准确识别用户语音指令。
                    </p>
                    <ul className="feature-details">
                      <li>支持多种口音和方言识别</li>
                      <li>识别准确率高达98%以上</li>
                      <li>支持离线和在线两种识别模式</li>
                      <li>支持自定义词汇和行业术语</li>
                    </ul>
                  </div>
                </div>
                
                <div className="feature-section">
                  <div className="feature-image">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="外文语音识别" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>外文语音识别</h3>
                    <p>
                      支持英语、日语、韩语等多种外语识别，满足国际化产品的需求。针对不同语言特点进行了优化，
                      确保在各种场景下都能提供高质量的识别效果。
                    </p>
                    <ul className="feature-details">
                      <li>支持10+种外语识别</li>
                      <li>自适应不同语言的发音特点</li>
                      <li>支持多语言混合识别</li>
                      <li>针对特定领域进行优化</li>
                    </ul>
                  </div>
                </div>
                
                <div className="feature-section">
                  <div className="feature-image">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="特定声音识别" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>特定声音识别</h3>
                    <p>
                      支持特定声音类型的识别，如敲门声、玻璃破碎声、婴儿哭声等特殊声音。可应用于安防监控、智能家居、
                      医疗健康等领域，实现智能化的声音监测和预警。
                    </p>
                    <ul className="feature-details">
                      <li>支持多种特定声音类型识别</li>
                      <li>可自定义声音样本进行训练</li>
                      <li>支持声音事件实时监测</li>
                      <li>低误报率设计</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* 应用场景 */}
            {activeTab === 'applications' && (
              <div className={`applications-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="applications-grid">
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="智能家居" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>智能家居</h3>
                      <p>
                        为传统家电设备添加语音控制功能，实现灯光、空调、电视等设备的语音操控，提升家居智能化水平和用户体验。
                      </p>
                    </div>
                  </div>
                  
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="工业控制" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>工业控制</h3>
                      <p>
                        在工业场景中实现语音操控，减少操作人员的手部操作，提高工作效率，降低操作失误率。
                      </p>
                    </div>
                  </div>
                  
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="医疗设备" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>医疗设备</h3>
                      <p>
                        为医疗设备添加语音交互功能，方便医护人员在无菌环境下操作设备，减少交叉感染风险。
                      </p>
                    </div>
                  </div>
                  
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="智能交通" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>智能交通</h3>
                      <p>
                        应用于车载系统，实现语音导航、语音控制多媒体设备等功能，提高驾驶安全性。
                      </p>
                    </div>
                  </div>
                  
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="教育设备" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>教育设备</h3>
                      <p>
                        为教育设备添加语音交互功能，实现语音翻译、语音评测等功能，提升教学效果。
                      </p>
                    </div>
                  </div>
                  
                  <div className="application-item">
                    <div className="application-image">
                      <img 
                        src="/images/tech-bg-1920x1080.svg" 
                        alt="公共服务" 
                      />
                    </div>
                    <div className="application-text">
                      <h3>公共服务</h3>
                      <p>
                        应用于公共服务设备，如自动售货机、信息查询终端等，提供语音交互界面，提升服务质量。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 技术参数 */}
            {activeTab === 'technical' && (
              <div className={`technical-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="technical-table">
                  <table>
                    <thead>
                      <tr>
                        <th>技术指标</th>
                        <th>参数值</th>
                        <th>说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>支持语言</td>
                        <td>中文、英文、日语、韩语等10+种语言</td>
                        <td>支持多语言混合识别</td>
                      </tr>
                      <tr>
                        <td>识别准确率</td>
                        <td>≥98%</td>
                        <td>标准普通话，安静环境下</td>
                      </tr>
                      <tr>
                        <td>响应时间</td>
                        <td>≤300ms</td>
                        <td>在线模式下，网络良好</td>
                      </tr>
                      <tr>
                        <td>唤醒词数量</td>
                        <td>最多支持10个自定义唤醒词</td>
                        <td>支持自定义唤醒词训练</td>
                      </tr>
                      <tr>
                        <td>噪音环境适应</td>
                        <td>≤85dB</td>
                        <td>能在嘈杂环境中正常工作</td>
                      </tr>
                      <tr>
                        <td>支持系统</td>
                        <td>Android, iOS, Windows, Linux</td>
                        <td>支持主流操作系统</td>
                      </tr>
                      <tr>
                        <td>SDK大小</td>
                        <td>≤10MB</td>
                        <td>轻量级设计，占用空间小</td>
                      </tr>
                      <tr>
                        <td>CPU占用</td>
                        <td>≤10%</td>
                        <td>在主流处理器上的占用率</td>
                      </tr>
                      <tr>
                        <td>内存占用</td>
                        <td>≤100MB</td>
                        <td>运行时内存占用</td>
                      </tr>
                      <tr>
                        <td>接口方式</td>
                        <td>RESTful API, WebSocket, SDK</td>
                        <td>多种集成方式可选</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          
          {/* 下载资料按钮 */}
          <div className="download-section">
            <h3>下载技术资料</h3>
            <div className="download-links">
              <a href="#" className="download-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V12M12 12L5 19M12 12L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>软件算法方案白皮书</span>
              </a>
              <a href="#" className="download-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V12M12 12L5 19M12 12L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>SDK开发文档</span>
              </a>
              <a href="#" className="download-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V12M12 12L5 19M12 12L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>API接口说明</span>
              </a>
            </div>
          </div>
          
          {/* 联系我们 */}
          <div className="contact-section">
            <h3>如需进一步了解，请联系我们</h3>
            <Link to="/contact" className="btn btn-primary">联系我们</Link>
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
            </div>
            
            <div className="footer-column">
              <h4>产品与服务</h4>
              <ul className="footer-links">
                <li><a href="/solutions">解决方案</a></li>
                <li><a href="/products">智能产品</a></li>
                <li><a href="/industry-applications">行业应用</a></li>
                <li><a href="/resources">资源中心</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>关于我们</h4>
              <ul className="footer-links">
                <li><a href="/about/company">公司简介</a></li>
                <li><a href="/about/team">团队介绍</a></li>
                {/* <li><a href="/about/news">新闻动态</a></li> */}
                <li><a href="/contact">联系我们</a></li>
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

export default SoftwareSolution;