import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { INSIGHT_ARTICLES } from '../constants/insights'
import { ROUTES } from '../constants/routes'
import '../styles/Insights.css'

const Insights = () => {
  return (
    <Layout>
      <div className="insights-page">
        <header className="page-header">
          <div className="container">
            <h1>技术与选型文章</h1>
            <p>
              用检索问句写内容：离线语音怎么选、不联网能不能识别、强噪声怎么做、唤醒词怎么设计——给硬件与产品同学可直接落地的答案。
            </p>
          </div>
        </header>

        <section className="insights-list-section">
          <div className="container">
            <div className="insights-grid">
              {INSIGHT_ARTICLES.map((article) => (
                <Link key={article.slug} to={article.path} className="insight-card">
                  <div className="insight-card-meta">
                    <span className="insight-card-category">{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.readMinutes} 分钟阅读</span>
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.summary}</p>
                  <span className="insight-card-link">阅读全文 →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="insight-cta">
          <div className="container">
            <h2>文章看完，直接评估你的产品？</h2>
            <p>告诉我们品类、主控接口与噪声场景，反馈模块选型、交期与报价区间。</p>
            <Link to={ROUTES.contact} className="btn btn-primary">
              询价 / 定制开发
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Insights
