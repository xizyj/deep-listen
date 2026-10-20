import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { getInsightBySlug } from '../constants/insights'
import { ROUTES } from '../constants/routes'
import '../styles/Insights.css'

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightBySlug(slug) : undefined

  if (!article) {
    return <Navigate to={ROUTES.insights} replace />
  }

  return (
    <Layout>
      <div className="insight-detail-page">
        <header className="page-header">
          <div className="container">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </header>

        <article className="insight-article">
          <div className="container">
            <div className="insight-article-inner">
              <div className="insight-meta-row">
                <span>{article.category}</span>
                <span>{article.date}</span>
                <span>{article.readMinutes} 分钟阅读</span>
              </div>

              <p className="insight-lead">{article.summary}</p>

              {article.sections.map((section) => (
                <section key={section.heading} className="insight-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p, index) => (
                    <p key={`${section.heading}-${index}`}>{p}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {article.faqs && article.faqs.length > 0 && (
                <section className="insight-section insight-faqs">
                  <h2>相关问答</h2>
                  {article.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </section>
              )}

              {article.relatedPaths && article.relatedPaths.length > 0 && (
                <div className="insight-related">
                  <h2>相关页面</h2>
                  <div className="insight-related-links">
                    {article.relatedPaths.map((item) => (
                      <Link key={item.path} to={item.path}>
                        {item.label}
                      </Link>
                    ))}
                    <Link to={ROUTES.insights}>全部文章</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        <section className="insight-cta">
          <div className="container">
            <h2>需要离线语音模块或场景方案？</h2>
            <p>标准模块约 2 周出样，支持自定义唤醒词与强噪声场景联调。</p>
            <Link to={ROUTES.contact} className="btn btn-primary">
              联系深聆
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default InsightDetail
