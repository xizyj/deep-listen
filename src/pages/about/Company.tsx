import React from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/About.css';

const Company: React.FC = () => {
  return (
    <div className="about-company">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1>关于深聆科技</h1>
          <p>可靠、省心的智能语音方案专家</p>
        </div>
      </header>
      
      {/* 公司简介 */}
      <section className="company-overview fade-in-section visible">
        <div className="container">
          <div className="overview-content fade-in-section visible">
            <div className="overview-text">
              <h2>公司背景</h2>
              <p>浙江深聆科技有限公司是专注于AI语音识别解决方案提供商，致力于为智能设备提供自然的人工智能语音交互体验。团队有15年以上的嵌入式智能设计开发经验人员组成，并有来自国内知名AI上市企业的经验。</p>
              
              <h2>人员团队</h2>
              <p>团队成员平均有15年的嵌入式、物联网平台、AI语音方面的开发产品设计经验。</p>
              
              <h2>企业文化</h2>
              <p>秉承"落实行业价值，真诚成就伙伴"的经营理念，为社会、客户、员工、股东谋求多赢合作。</p>
              <p><strong>价值观：</strong>落实行业价值，真诚成就伙伴。</p>
              <p><strong>企业文化：</strong>分享、协作、共赢，责任担当。</p>
              <p><strong>愿景：</strong>普及智能的人机交互方案领导者。</p>
              <p><strong>使命：</strong>以科技创新为行业创造价值。</p>
            </div>
            
            <div className="overview-image">
              {/* 这里可以放置公司图片 */}
              <div className="image-placeholder">
                <img style={{width:'600px',height:'auto'}} src="/images/gongsiwenhua.jpeg" alt="公司文化图片" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* 联系我们 */}
      <section className="contact-section fade-in-section visible">
        <div className="container">
          <h2>联系我们</h2>
          <div className="contact-info">
            <p>地址：浙江省杭州市滨江区越达巷82号房天下大厦</p>
            <p>电话：18626895139</p>
            <p>邮箱：support@deeplisten.cn</p>
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

export default Company;