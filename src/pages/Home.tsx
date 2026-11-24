import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import { HOME_FAQS, KEY_FACTS, SCENARIO_PAGES, SITE_POSITIONING } from '../constants/geo'
import { ROUTES } from '../constants/routes'
import '../styles/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Carousel />

        <section className="facts-section" aria-label="核心指标">
          <div className="container">
            <div className="facts-grid">
              {KEY_FACTS.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <div className="fact-value">{fact.value}</div>
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-note">{fact.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>离线语音识别方案商</h2>
                <p>{SITE_POSITIONING}</p>
                <p>
                  开发者与整机厂真正在搜的是「离线语音模块」「语音控制模块」「自定义唤醒词」——我们按这些意图提供模组选型、场景方案与定制开发，而不是空泛的营销概念。
                </p>
                <Link to={ROUTES.aboutCompany} className="btn btn-primary">
                  了解深聆
                </Link>
                {' '}
                <Link to={ROUTES.contact} className="btn" style={{ marginLeft: 12 }}>
                  询价打样
                </Link>
              </div>
              <div className="about-image">
                <img
                  src="/images/shouye1.jpeg"
                  alt="深聆科技离线语音识别方案"
                  className="about-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="promo-video-section" aria-label="语音交互应用演示">
          <div className="container">
            <div className="promo-video-inner">
              <div className="promo-video-copy">
                <p className="promo-video-eyebrow">PRODUCT DEMO</p>
                <h2>语音交互应用演示</h2>
                <p>
                  得力智能交互地球仪实拍：唤醒后语音提问，球体点亮定位并播报地理知识——
                  端侧离线语音识别在智能硬件上的真实落地。
                </p>
                <ul className="promo-video-points">
                  <li>语音唤醒 · 开口即问</li>
                  <li>点亮定位 · 球体高亮对应国家</li>
                  <li>地理播报 · 首都、面积与概况</li>
                </ul>
                <Link to={ROUTES.intelligentHardwareSolution} className="btn btn-primary">
                  了解硬件方案
                </Link>
              </div>
              <div className="promo-video-media">
                <video
                  className="promo-video"
                  src="/video/smart-globe-demo.mp4"
                  poster="/video/smart-globe-demo-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  title="得力智能交互地球仪 · 语音操控演示"
                >
                  您的浏览器不支持视频播放
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="mic-array-preview" aria-label="语音识别拾音阵列">
          <div className="container">
            <div className="mic-array-preview-inner">
              <div className="mic-array-preview-copy">
                <p className="mic-array-preview-eyebrow">AUDIO FRONT END</p>
                <h2>语音识别拾音阵列</h2>
                <p>
                  面向高噪声语音识别与远场语音交互，提供环形六麦与线性四麦阵列模组，
                  支持波束成型、AEC 回声消除与端侧语音识别。
                </p>
                <ul className="mic-array-preview-points">
                  <li>环形六麦 · 360° 声源定位</li>
                  <li>线性四麦 · 动态波束成型</li>
                  <li>远场拾音 · 端侧语音识别</li>
                </ul>
                <Link to={ROUTES.microphoneArray} className="btn btn-primary">
                  查看规格详情
                </Link>
              </div>
              <Link to={ROUTES.microphoneArray} className="mic-array-preview-media">
                <div className="mic-array-preview-shot mic-array-preview-shot--dark">
                  <img
                    src="/images/microphone-array/circular-6mic-hero.png"
                    alt="环形六麦阵列模组"
                    loading="lazy"
                  />
                  <span>环形六麦阵列</span>
                </div>
                <div className="mic-array-preview-shot mic-array-preview-shot--light">
                  <img
                    src="/images/microphone-array/linear-4mic-hero.png"
                    alt="线性四麦阵列模组"
                    loading="lazy"
                  />
                  <span>线性四麦阵列</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="container">
            <h2 className="section-title">核心技术能力</h2>
            <p className="section-subtitle">
              面向工程选型：唤醒词、降噪、误唤醒与方言——搜这些词的人手里往往已有项目
            </p>

            <div className="tech-cards">
              <div className="tech-card">
                <div className="tech-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5Z" stroke="#0066CC" strokeWidth="2"/>
                    <path d="M22 30L26 34L34 26" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>离线语音识别</h3>
                <p>本地完成命令词识别，断网可用、数据不上云，适合出口与隐私敏感场景。</p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 20L45 20" stroke="#0066CC" strokeWidth="2"/>
                    <path d="M15 30L45 30" stroke="#0066CC" strokeWidth="2"/>
                    <path d="M15 40L45 40" stroke="#0066CC" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>自定义唤醒词</h3>
                <p>支持品牌唤醒词定制，兼顾灵敏度与误唤醒率，适配整机交互定义。</p>
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
                <h3>强噪声 / 降噪</h3>
                <p>面向油烟机、浴霸等风机噪声场景，配合双麦与 AEC 提升开风机时识别率。</p>
              </div>

              <div className="tech-card">
                <div className="tech-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="20" height="20" rx="2" stroke="#0066CC" strokeWidth="2"/>
                    <path d="M25 30H35" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>低功耗语音唤醒</h3>
                <p>低功耗常监听与语音模组方案，便于挂载现有主控，减少重画板成本。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="scenarios-preview">
          <div className="container">
            <h2 className="section-title">场景方案</h2>
            <p className="section-subtitle">
              护城河在场景词：浴霸、油烟机、风扇、晾衣架、照明等品类页，含噪声特征、开孔建议与指令集
            </p>
            <div className="scenarios-preview-grid">
              {SCENARIO_PAGES.slice(0, 3).map((scenario) => (
                <Link key={scenario.slug} to={scenario.path} className="scenario-preview-card">
                  <span className="scenario-preview-tag">{scenario.searchIntent}</span>
                  <h3>{scenario.name}</h3>
                  <p>{scenario.summary}</p>
                  <span className="scenario-preview-link">查看详情 →</span>
                </Link>
              ))}
            </div>
            <div className="scenarios-preview-more">
              <Link to={ROUTES.scenarios}>全部场景方案（含晾衣架 / 照明）→</Link>
              <Link to={ROUTES.insights}>技术文章 →</Link>
            </div>
          </div>
        </section>

        <section className="solutions-preview">
          <div className="container">
            <h2 className="section-title">解决方案</h2>
            <p className="section-subtitle">算法、离线语音模块与设备云，按项目阶段灵活组合</p>

            <div className="solutions-grid">
              <div className="solution-item">
                <img
                  src="/images/shouye4.jpeg"
                  alt="语音识别算法与自定义唤醒词方案"
                  className="solution-image"
                  loading="lazy"
                />
                <h3>软件算法方案</h3>
                <p>离线识别、唤醒词定制、降噪与方言等算法能力，快速赋能现有设备</p>
                <Link to={ROUTES.softwareSolution} className="solution-link">查看详情 →</Link>
              </div>

              <div className="solution-item">
                <img
                  src="/images/shouye3.jpeg"
                  alt="离线语音模块与语音控制模块"
                  className="solution-image"
                  loading="lazy"
                />
                <h3>智能硬件方案</h3>
                <p>离线语音模块 / 串口语音模组，接口、功耗与量产交付一站支持</p>
                <Link to={ROUTES.intelligentHardwareSolution} className="solution-link">查看详情 →</Link>
              </div>

              <div className="solution-item">
                <img
                  src="/images/shouye2.jpeg"
                  alt="设备云与离在线语音方案"
                  className="solution-image"
                  loading="lazy"
                />
                <h3>设备云平台方案</h3>
                <p>离在线一体：本地指令走离线，复杂能力走云，设备可管可控</p>
                <Link to={ROUTES.deviceCloudPlatformSolution} className="solution-link">查看详情 →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container">
            <h2 className="section-title">常见问题</h2>
            <p className="section-subtitle">选型与落地中的高频问句——也是检索与生成式引擎常引用的内容形态</p>
            <div className="faq-list">
              {HOME_FAQS.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="faq-cta">
              <Link to={ROUTES.contact} className="btn btn-primary">
                获取报价与开发周期
              </Link>
              {' '}
              <Link to={ROUTES.insights} className="btn" style={{ marginLeft: 12 }}>
                阅读技术文章
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
