import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Solutions.css';

const Solutions: React.FC = () => {
  return (
    <div className="solutions-page">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1>解决方案</h1>
          <p>为不同行业提供定制化的智能语音解决方案</p>
        </div>
      </section>
      
      {/* 解决方案列表 */}
      <section className="solutions-list">
        <div className="container">
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-card-image">
                <img 
                  src="/images/ruanjian1.jpeg" 
                  alt="软件算法方案" 
                  className="solution-img"
                />
              </div>
              <div className="solution-card-content">
                <h2>软件算法方案</h2>
                <p>通过纯软件升级的方案赋能传统设备智能化语音识别交互能力，无需硬件改造，快速实现设备的智能化升级。</p>
                <div className="solution-features">
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>中文语音识别</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>外文语音识别</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>特定声音识别</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-card-image">
                <img 
                  src="/images/yingjian1.jpeg" 
                  alt="智能硬件方案" 
                  className="solution-img"
                />
              </div>
              <div className="solution-card-content">
                <h2>智能硬件方案</h2>
                <p>集成语音识别芯片的智能硬件方案，提供完整的设计和生产支持，帮助客户快速推出高品质的智能语音产品。</p>
                <div className="solution-features">
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>低功耗设计</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>高性能语音处理</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>完整参考设计</span>
                  </div>
                </div>
                <Link to="/solutions/intelligent-hardware-solution" className="btn btn-primary">了解详情</Link>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-card-image">
                <img 
                  src="/images/shebei1.jpeg" 
                  alt="设备云平台方案" 
                  className="solution-img"
                />
              </div>
              <div className="solution-card-content">
                <h2>设备云平台方案</h2>
                <p>连接智能设备的云平台解决方案，实现设备管理、数据分析和远程控制，为客户提供全方位的设备智能化服务。</p>
                <div className="solution-features">
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>设备远程管理</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>语音数据统计</span>
                  </div>
                  <div className="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>OTA固件升级</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 行业案例 */}
      <section className="industry-cases">
        <div className="container">
          <h2 className="section-title">成功案例</h2>
          <p className="section-subtitle">我们的解决方案已在多个行业得到成功应用</p>
          
          <div className="cases-grid">
            <div className="case-item">
              <img 
                src="/images/zhinengjiaju1.jpeg" 
                alt="智能家居" 
                className="case-image"
              />
              <div className="case-overlay">
                <h3>智能家居</h3>
                <p>为智能家居设备提供语音控制方案</p>
              </div>
            </div>
            
            <div className="case-item">
              <img 
                src="/images/zhinengqiche1.jpeg" 
                alt="智能汽车" 
                className="case-image"
              />
              <div className="case-overlay">
                <h3>智能汽车</h3>
                <p>车载语音交互系统解决方案</p>
              </div>
            </div>
            
            <div className="case-item">
              <img 
                src="/images/gongyewulianwang1.jpeg" 
                alt="工业物联网" 
                className="case-image"
              />
              <div className="case-overlay">
                <h3>工业物联网</h3>
                <p>工业场景下的智能语音交互解决方案</p>
              </div>
            </div>
            
            <div className="case-item">
              <img 
                src="/images/zhinengjiaoyu1.jpeg" 
                alt="智能教育" 
                className="case-image"
              />
              <div className="case-overlay">
                <h3>智能教育</h3>
                <p>教育设备的语音交互解决方案</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 咨询支持 */}
      <section className="consultation">
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-text">
              <h2 style={{color:'#fff'}}>需要定制解决方案？</h2>
              <p>我们的技术专家将为您提供一对一的咨询服务，帮助您选择最适合的解决方案。</p>
            </div>
            <div className="consultation-button">
              <a href="/contact" className="btn btn-primary">立即咨询</a>
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

export default Solutions;