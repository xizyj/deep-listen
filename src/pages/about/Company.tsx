import Layout from '../../components/Layout';
import '../../styles/About.css';

const Company = () => {
  return (
    <Layout>
    <div className="about-company">
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
                <img style={{width:'600px',height:'auto'}} src="/images/gongsiwenhua.jpeg" alt="公司文化图片" loading="lazy" />
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
    </div>
    </Layout>
  );
};

export default Company;