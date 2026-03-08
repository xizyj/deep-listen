import React from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/About.css';

const Team: React.FC = () => {
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
    <div className="about-team">
      {/* 导航栏 */}
      <Navbar />
      
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
                  <img style={{width:'600px',height:'auto'}} src="/images/gongsiwenhua.jpeg" alt="公司文化图片" />
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
              <a href="/contact" className="btn btn-primary">联系我们</a>
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
                <li><a href="/resource-center">资源中心</a></li>
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

export default Team;