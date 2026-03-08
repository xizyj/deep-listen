import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 轮播图 */}
      <Carousel />
      
      {/* 公司简介 */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>关于深聆科技</h2>
              <p>深聆科技是一家专注于智能语音芯片研发与应用的高科技企业，致力于为全球客户提供可靠、省心的智能语音交互解决方案。</p>
            
              <a href="/about" className="btn btn-primary">了解更多</a>
            </div>
            <div className="about-image">
              <img 
                src="/images/shouye1.jpeg" 
                alt="深聆科技公司" 
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* 核心技术 */}
      <section className="tech-section">
        <div className="container">
          <h2 className="section-title">核心技术</h2>
          <p className="section-subtitle">我们拥有自主研发的核心技术，为智能语音交互提供强大支持</p>
          
          <div className="tech-cards">
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5Z" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M22 30L26 34L34 26" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>语音识别算法</h3>
              <p>高精度的语音识别算法，支持中文、英文等多种语言，识别准确率高达98%以上。</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 20L45 20" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M15 30L45 30" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M15 40L45 40" stroke="#0066CC" strokeWidth="2"/>
                </svg>
              </div>
              <h3>语音合成技术</h3>
              <p>自然流畅的语音合成技术，支持多种音色和语速，为用户提供沉浸式的语音交互体验。</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="20" width="30" height="20" rx="2" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M22 25H38" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M22 30H35" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M22 35H38" stroke="#0066CC" strokeWidth="2"/>
                </svg>
              </div>
              <h3>语义理解</h3>
              <p>先进的语义理解技术，能够准确识别用户意图，实现自然的人机对话交互。</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="20" height="20" rx="2" stroke="#0066CC" strokeWidth="2"/>
                  <path d="M25 30H35" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>低功耗芯片设计</h3>
              <p>自主研发的低功耗语音识别芯片，在保证性能的同时，显著延长设备续航时间。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 解决方案概览 */}
      <section className="solutions-preview">
        <div className="container">
          <h2 className="section-title">解决方案</h2>
          <p className="section-subtitle">为不同行业提供定制化的智能语音解决方案</p>
          
          <div className="solutions-grid">
            <div className="solution-item">
              <img 
                src="/images/shouye4.jpeg" 
                alt="软件算法方案" 
                className="solution-image"
              />
              <h3>软件算法方案</h3>
              <p>通过纯软件升级的方案赋能传统设备智能化语音识别交互能力</p>
              <a href="/solutions/software" className="solution-link">查看详情 →</a>
            </div>
            
            <div className="solution-item">
              <img 
                src="/images/shouye3.jpeg" 
                alt="智能硬件方案" 
                className="solution-image"
              />
              <h3>智能硬件方案</h3>
              <p>集成语音识别芯片的智能硬件方案，提供完整的设计和生产支持</p>
              <a href="/solutions/intelligent-hardware-solution" className="solution-link">查看详情 →</a>
            </div>
            
            <div className="solution-item">
              <img 
                src="/images/shouye2.jpeg" 
                alt="设备云平台方案" 
                className="solution-image"
              />
              <h3>设备云平台方案</h3>
              <p>连接智能设备的云平台解决方案，实现设备管理、数据分析和远程控制</p>
              <a href="/solutions/device-cloud-platform-solution" className="solution-link">查看详情 →</a>
            </div>
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

export default Home;