import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import { ROUTES } from '../constants/routes';
import '../styles/Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Carousel />

        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>关于深聆科技</h2>
                <p>深聆科技是一家专注于智能语音芯片研发与应用的高科技企业，致力于为全球客户提供可靠、省心的智能语音交互解决方案。</p>
                <Link to={ROUTES.aboutCompany} className="btn btn-primary">了解更多</Link>
              </div>
              <div className="about-image">
                <img
                  src="/images/shouye1.jpeg"
                  alt="深聆科技公司"
                  className="about-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

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
                  loading="lazy"
                />
                <h3>软件算法方案</h3>
                <p>通过纯软件升级的方案赋能传统设备智能化语音识别交互能力</p>
                <Link to={ROUTES.softwareSolution} className="solution-link">查看详情 →</Link>
              </div>

              <div className="solution-item">
                <img
                  src="/images/shouye3.jpeg"
                  alt="智能硬件方案"
                  className="solution-image"
                  loading="lazy"
                />
                <h3>智能硬件方案</h3>
                <p>集成语音识别芯片的智能硬件方案，提供完整的设计和生产支持</p>
                <Link to={ROUTES.intelligentHardwareSolution} className="solution-link">查看详情 →</Link>
              </div>

              <div className="solution-item">
                <img
                  src="/images/shouye2.jpeg"
                  alt="设备云平台方案"
                  className="solution-image"
                  loading="lazy"
                />
                <h3>设备云平台方案</h3>
                <p>连接智能设备的云平台解决方案，实现设备管理、数据分析和远程控制</p>
                <Link to={ROUTES.deviceCloudPlatformSolution} className="solution-link">查看详情 →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
