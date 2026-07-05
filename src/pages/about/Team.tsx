import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ROUTES } from '../../constants/routes';
import '../../styles/About.css';

const Team = () => {
  // 团队成员数据
  

  // 核心价值观数据
  const coreValues = [
    {
      title: '创新',
      description: '不断突破技术边界，为客户提供更优质的产品和服务。',
      icon: '🚀'
    },
    {
      title: '诚信',
      description: '以诚信为本，建立与客户、合作伙伴之间的互信关系。',
      icon: '🤝'
    },
    {
      title: '协作',
      description: '团队协作，共同成长，创造更大的价值。',
      icon: '👥'
    },
    {
      title: '卓越',
      description: '追求卓越，不断提升产品和服务质量。',
      icon: '🏆'
    }
  ];

  return (
    <Layout>
    <div className="about-team">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1>我们的团队</h1>
          <p>由行业顶尖人才组成的专业团队</p>
        </div>
      </header>

      
      {/* 公司文化 */}
      <section className="culture-section fade-in-section visible">
        <div className="container">
          <h2>公司文化</h2>
          <div className="culture-content">
            <div className="culture-values">
              <h3>核心价值观</h3>
              <div className="values-grid">
                {coreValues.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="culture-image">
              {/* 这里可以放置公司文化图片 */}
              <div className="image-placeholder">
                  <img style={{width:'600px',height:'auto'}} src="/images/gongsiwenhua.jpeg" alt="公司文化图片" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 加入我们 */}
      <section className="join-section fade-in-section visible">
        <div className="container">
          <div className="join-content">
            <h2>加入我们</h2>
            <p>我们正在寻找有才华、有激情的人才加入我们的团队，共同推动智能语音技术的发展。</p>
            <div className="join-button">
              <Link to={ROUTES.contact} className="btn btn-primary">联系我们</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Team;