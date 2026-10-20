import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { getScenarioBySlug } from '../constants/geo'
import { getSeoForPath } from '../constants/seo'
import { ROUTES } from '../constants/routes'
import '../styles/Scenarios.css'

const ScenarioDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const scenario = slug ? getScenarioBySlug(slug) : undefined

  if (!scenario) {
    return <Navigate to={ROUTES.scenarios} replace />
  }

  const seo = getSeoForPath(scenario.path)

  return (
    <Layout>
      <div className="scenario-detail-page">
        <header className="page-header">
          <div className="container">
            <h1>{scenario.headline}</h1>
            <p>{scenario.summary}</p>
          </div>
        </header>

        <div className="scenario-body">
          <div className="container">
            <section className="scenario-section">
              <h2>为什么适合做离线语音</h2>
              <div className="scenario-benefits">
                {scenario.benefits.map((item) => (
                  <div key={item.title} className="scenario-benefit">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="scenario-section">
              <h2>该场景的噪声与声学特征</h2>
              <ul className="scenario-bullets">
                {scenario.noiseProfile.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="scenario-section">
              <h2>结构开孔与安装建议</h2>
              <ul className="scenario-bullets">
                {scenario.installTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="scenario-section">
              <h2>典型指令集（可定制）</h2>
              <div className="scenario-commands">
                {scenario.typicalCommands.wake && (
                  <p className="wake-word">
                    唤醒词示例：<strong>{scenario.typicalCommands.wake}</strong>
                  </p>
                )}
                <div className="command-chips">
                  {scenario.typicalCommands.commands.map((cmd) => (
                    <span key={cmd} className="command-chip">
                      {cmd}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {seo.faqs && seo.faqs.length > 0 && (
              <section className="scenario-section scenario-faqs">
                <h2>常见问题</h2>
                {seo.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            )}
          </div>
        </div>

        <section className="scenario-cta">
          <div className="container">
            <h2>获取 {scenario.name} 方案与打样评估</h2>
            <p>说明主控接口、预估用量与是否需要定制唤醒词，我们反馈模块选型、交期与报价区间。</p>
            <Link to={ROUTES.contact} className="btn btn-primary">
              询价 / 定制开发
            </Link>
            {' '}
            <Link to={ROUTES.scenarios} className="btn" style={{ marginLeft: 12 }}>
              返回场景列表
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ScenarioDetail
