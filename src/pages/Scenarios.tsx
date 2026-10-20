import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { SCENARIO_PAGES } from '../constants/geo'
import { ROUTES } from '../constants/routes'
import '../styles/Scenarios.css'

const Scenarios = () => {
  return (
    <Layout>
      <div className="scenarios-page">
        <header className="page-header">
          <div className="container">
            <h1>场景方案</h1>
            <p>
              一个场景一页：浴霸、油烟机、风扇等家电离线语音控制方案，含噪声特征、结构开孔建议与典型指令集，便于硬件与产品同学直接评估。
            </p>
          </div>
        </header>

        <section className="scenarios-list">
          <div className="container">
            <div className="scenarios-cards">
              {SCENARIO_PAGES.map((scenario) => (
                <Link key={scenario.slug} to={scenario.path} className="scenario-card">
                  <span className="scenario-card-tag">{scenario.searchIntent}</span>
                  <h2>{scenario.headline}</h2>
                  <p>{scenario.summary}</p>
                  <span className="scenario-card-link">查看方案详情 →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="scenario-cta">
          <div className="container">
            <h2>还需要窗帘、马桶、集成灶等场景？</h2>
            <p>告诉我们产品形态与主控接口，可评估离线语音模块选型与定制开发周期。</p>
            <Link to={ROUTES.contact} className="btn btn-primary">
              咨询场景方案
            </Link>
            {' '}
            <Link to={ROUTES.insights} className="btn" style={{ marginLeft: 12 }}>
              看选型文章
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Scenarios
