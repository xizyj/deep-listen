import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import './IntelligentHardware.css';

const IntelligentHardware: React.FC = () => {
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
    <div className="intelligent-hardware-page">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1>智能硬件方案</h1>
          <p>集成语音识别芯片的智能硬件方案，提供完整的设计和生产支持</p>
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
              className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              硬件产品
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
                    alt="智能硬件方案" 
                    className="overview-image"
                  />
                  <div className="overview-text">
                    <h2>方案概述</h2>
                    <p>
                      深聆科技的智能硬件方案基于自主研发的语音识别芯片，为客户提供从芯片到模组、从设计到生产的一站式智能硬件方案。
                    </p>
                    <p>
                      我们的智能硬件方案具有低功耗、高性能、易于集成等特点，支持远场语音识别、多轮对话、离线唤醒等功能，
                      可广泛应用于智能家居、智能汽车、工业物联网等多个领域。
                    </p>
                    <p>
                      我们提供完整的技术支持和设计服务，帮助客户快速将产品从概念转化为量产，缩短产品开发周期，降低研发成本。
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
                      <h4>自主研发芯片</h4>
                      <p>基于自主知识产权的语音识别芯片，性能稳定可靠</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>低功耗设计</h4>
                      <p>采用先进的低功耗设计，大幅延长设备续航时间</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>一站式服务</h4>
                      <p>从芯片到模组，从设计到生产，提供全方位技术支持</p>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4>高度集成</h4>
                      <p>集成多种功能模块，简化产品设计，缩短开发周期</p>
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
                      alt="远场语音识别" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>远场语音识别</h3>
                    <p>
                      支持5-10米远场语音识别，结合多麦克风阵列和波束形成技术，能够在嘈杂环境中准确识别用户语音指令。
                    </p>
                    <ul className="feature-details">
                      <li>支持多麦克风阵列</li>
                      <li>内置回声消除和降噪算法</li>
                      <li>支持360°全方位声音采集</li>
                      <li>识别准确率高达95%以上</li>
                    </ul>
                  </div>
                </div>
                
                <div className="feature-section">
                  <div className="feature-image">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="离线唤醒" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>离线唤醒</h3>
                    <p>
                      支持完全离线的语音唤醒功能，无需联网即可响应唤醒词，降低设备功耗，提高响应速度。
                    </p>
                    <ul className="feature-details">
                      <li>支持自定义唤醒词</li>
                      <li>唤醒词识别准确率高达99%</li>
                      <li>误唤醒率低至万分之一</li>
                      <li>支持多唤醒词设置</li>
                    </ul>
                  </div>
                </div>
                
                <div className="feature-section">
                  <div className="feature-image">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="低功耗设计" 
                    />
                  </div>
                  <div className="feature-text">
                    <h3>低功耗设计</h3>
                    <p>
                      采用先进的低功耗设计技术，在保证性能的同时，大幅降低设备功耗，延长电池续航时间。
                    </p>
                    <ul className="feature-details">
                      <li>待机功耗低至微安级</li>
                      <li>支持智能电源管理</li>
                      <li>多级功耗模式切换</li>
                      <li>适配各类电池供电场景</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* 硬件产品 */}
            {activeTab === 'products' && (
              <div className={`products-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="products-grid">
                  <div className="product-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="AI语音芯片" 
                      className="product-image"
                    />
                    <h3>AI语音芯片</h3>
                    <p>
                      自主研发的AI语音识别芯片，集成高性能DSP和神经网络加速器，支持本地语音识别和处理。
                    </p>
                    <Link to="/products/ai-speech-module" className="product-link">查看详情 →</Link>
                  </div>
                  
                  <div className="product-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="语音识别模组" 
                      className="product-image"
                    />
                    <h3>语音识别模组</h3>
                    <p>
                      基于AI语音芯片开发的语音识别模组，集成麦克风、扬声器和天线，提供完整的语音交互功能。
                    </p>
                    <Link to="/products/ai-speech-module" className="product-link">查看详情 →</Link>
                  </div>
                  
                  <div className="product-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="智能控制器" 
                      className="product-image"
                    />
                    <h3>智能控制器</h3>
                    <p>
                      集成语音识别功能的智能控制器，支持多种通信协议，可直接控制各类智能设备。
                    </p>
                    <Link to="/products/smart-controller" className="product-link">查看详情 →</Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* 应用场景 */}
            {activeTab === 'applications' && (
              <div className={`applications-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="applications-grid">
                  <div className="application-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="智能家居" 
                      className="application-image"
                    />
                    <h3>智能家居</h3>
                    <p>
                      为智能音箱、智能电视、智能灯具、智能窗帘等智能家居产品提供语音控制解决方案，
                      实现全屋智能化语音交互体验。
                    </p>
                  </div>
                  
                  <div className="application-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="智能汽车" 
                      className="application-image"
                    />
                    <h3>智能汽车</h3>
                    <p>
                      为车载系统提供语音识别和控制解决方案，支持导航、音乐、电话、空调等功能的语音控制，
                      提高驾驶安全性和便利性。
                    </p>
                  </div>
                  
                  <div className="application-item">
                    <img 
                      src="/images/tech-bg-1920x1080.svg" 
                      alt="工业物联网" 
                      className="application-image"
                    />
                    <h3>工业物联网</h3>
                    <p>
                      为工业设备提供语音操作界面，实现远程监控、设备调试、故障诊断等功能的语音控制，
                      提高工业生产效率和安全性。
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* 技术参数 */}
            {activeTab === 'technical' && (
              <div className={`technical-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="technical-table">
                  <h3>芯片技术参数</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>参数项</th>
                        <th>规格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CPU架构</td>
                        <td>32位RISC-V处理器</td>
                      </tr>
                      <tr>
                        <td>神经网络加速器</td>
                        <td>支持1TOPS@INT8计算能力</td>
                      </tr>
                      <tr>
                        <td>内存</td>
                        <td>内置1MB SRAM，支持外部DDR</td>
                      </tr>
                      <tr>
                        <td>存储</td>
                        <td>内置16MB Flash</td>
                      </tr>
                      <tr>
                        <td>语音识别能力</td>
                        <td>支持1000+条指令，识别准确率98%+</td>
                      </tr>
                      <tr>
                        <td>工作电压</td>
                        <td>3.3V</td>
                      </tr>
                      <tr>
                        <td>工作温度</td>
                        <td>-40℃ ~ 85℃</td>
                      </tr>
                      <tr>
                        <td>封装</td>
                        <td>LQFP64, QFN48</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="technical-table">
                  <h3>模组技术参数</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>参数项</th>
                        <th>规格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>尺寸</td>
                        <td>25mm × 30mm × 2mm</td>
                      </tr>
                      <tr>
                        <td>麦克风</td>
                        <td>2-4个MEMS麦克风，支持阵列</td>
                      </tr>
                      <tr>
                        <td>音频接口</td>
                        <td>I2S, PCM, SPI</td>
                      </tr>
                      <tr>
                        <td>通信接口</td>
                        <td>UART, I2C, SPI, GPIO</td>
                      </tr>
                      <tr>
                        <td>Wi-Fi/Bluetooth</td>
                        <td>可选配Wi-Fi 802.11b/g/n，Bluetooth 4.2/5.0</td>
                      </tr>
                      <tr>
                        <td>工作电压</td>
                        <td>3.3V</td>
                      </tr>
                      <tr>
                        <td>工作电流</td>
                        <td>待机电流&lt;1mA，工作电流&lt;100mA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          
          {/* 开发资源 */}
          <div className="development-resources">
            <h3>开发资源</h3>
            <div className="resources-grid">
              <a href="#" className="resource-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>硬件设计指南</span>
              </a>
              <a href="#" className="resource-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>固件更新工具</span>
              </a>
              <a href="#" className="resource-item">
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
                    <path d="M23 3.00005C22.0484 3.65007 20.9827 4.12294 19.85 4.40005C19.2603 3.84005 18.5267 3.42671 17.73 3.20005C16.9334 2.97339 16.0918 2.94005 15.27 3.10005C14.4482 3.26005 13.7 3.60672 13.07 4.10005C12.4399 4.59339 11.9466 5.22672 11.63 5.95005C11.3134 6.67339 11.19 7.46006 11.27 8.23005C8.56995 8.07005 6.06995 6.97005 4.18995 5.08005C2.30995 3.19005 0.999954 0.690048 0.999954 0.690048C0.999954 0.690048 -0.300046 2.69005 1.49995 5.17005C3.29995 7.65005 6.09995 9.16005 9.07995 9.44005C8.74995 9.93005 8.54995 10.5101 8.54995 11.1301C8.54995 12.4601 9.42995 13.5801 10.63 13.5801C9.73995 13.5801 8.93995 13.1401 8.37995 12.4601C9.71995 12.3301 11.1299 11.7601 12.3599 10.8201C13.5899 11.7501 15.0699 12.3201 16.4799 12.4401C15.8899 13.1301 15.0499 13.5701 14.0999 13.5701C12.8199 13.5701 11.8999 12.4601 11.8999 11.1101C11.8999 10.3401 12.1099 9.63005 12.4899 9.04005C12.8699 8.45005 13.3999 7.97005 14.0099 7.66005C13.4399 7.63005 12.8799 7.48005 12.3399 7.23005C12.8599 7.21005 13.3899 7.16005 13.9299 7.10005C13.3299 6.35005 12.3399 5.82005 11.2999 5.82005C9.34995 5.82005 7.74995 7.42005 7.74995 9.37005C7.74995 9.51005 7.75995 9.66005 7.78995 9.80005C8.55995 13.2401 11.3499 15.6601 14.6599 15.6901C13.4899 16.6001 11.9699 17.1801 10.3299 17.1801C9.99995 17.1801 9.68995 17.1601 9.36995 17.1201C10.6999 18.2501 12.3199 18.9501 14.0799 18.9501C17.7399 18.9501 20.7599 16.3701 20.7599 12.8601C20.7599 12.7001 20.7599 12.5501 20.7499 12.4001C21.5299 11.7401 22.1599 10.9001 22.5999 9.93005C23.3399 8.53005 23.6999 6.90005 23.6999 5.20005C23.6999 4.73005 23.6699 4.27005 23.6199 3.82005C24.4999 3.34005 25.2499 2.58005 25.7499 1.65005C25.7499 1.65005 23.9999 2.89005 23 3.00005Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V20H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V20H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                    <path d="M6 9H2V20H6V9Z" fill="currentColor"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
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

export default IntelligentHardware;