import React from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/About.css';

const News: React.FC = () => {
  // 新闻数据
  const newsItems = [
    {
      id: 1,
      title: '深聆科技完成C轮融资，估值超20亿元',
      date: '2025-09-15',
      summary: '深聆科技宣布完成C轮融资，本轮融资由某知名投资机构领投，多家投资机构跟投，融资总额达5亿元，公司估值超过20亿元。本轮融资将主要用于技术研发、产品线扩展和市场推广。',
      category: '融资动态'
    },
    {
      id: 2,
      title: '深聆科技发布新一代智能语音芯片，性能提升30%',
      date: '2025-08-20',
      summary: '深聆科技正式发布新一代智能语音芯片DL600系列，该芯片采用最新工艺制程，功耗降低40%，性能提升30%，支持更复杂的语音识别和语义理解任务。',
      category: '产品发布'
    },
    {
      id: 3,
      title: '深聆科技与某知名家电品牌达成战略合作',
      date: '2025-07-10',
      summary: '深聆科技与某知名家电品牌签署战略合作协议，双方将共同开发智能家电产品，深聆科技将提供智能语音解决方案，助力家电品牌实现产品智能化升级。',
      category: '合作动态'
    },
    {
      id: 4,
      title: '深聆科技荣获"2025年度智能语音技术创新奖"',
      date: '2025-06-05',
      summary: '在2025年度智能语音技术峰会上，深聆科技凭借其在智能语音芯片领域的技术创新和市场表现，荣获"2025年度智能语音技术创新奖"。',
      category: '公司荣誉'
    },
    {
      id: 5,
      title: '深聆科技智能语音模组出货量突破500万片',
      date: '2025-05-18',
      summary: '深聆科技宣布其智能语音模组出货量突破500万片，产品已广泛应用于智能家居、智能汽车、工业物联网等领域，客户遍布全球20多个国家和地区。',
      category: '业务动态'
    },
    {
      id: 6,
      title: '深聆科技发布《2025智能语音技术白皮书》',
      date: '2025-04-25',
      summary: '深聆科技发布《2025智能语音技术白皮书》，对智能语音技术的发展趋势、应用场景和挑战进行了深入分析，为行业发展提供了参考。',
      category: '技术动态'
    }
  ];

  // 新闻分类
  const categories = ['全部', '融资动态', '产品发布', '合作动态', '公司荣誉', '业务动态', '技术动态'];

  return (
    <div className="about-news">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1>新闻动态</h1>
          <p>了解深聆科技的最新动态</p>
        </div>
      </header>
      
      {/* 新闻列表 */}
      <section className="news-section fade-in-section visible">
        <div className="container">
          {/* 分类筛选 */}
          <div className="news-categories">
            {categories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
          
          {/* 新闻列表 */}
          <div className="news-list">
            {newsItems.map((item) => (
              <div key={item.id} className="news-item">
                <div className="news-content">
                  <div className="news-header">
                    <h3>{item.title}</h3>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <p className="news-summary">{item.summary}</p>
                  <div className="news-footer">
                    <span className="news-category">{item.category}</span>
                    <a href="#" className="news-link">查看详情 →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 分页 */}
          <div className="pagination">
            <button className="pagination-button">上一页</button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <span>...</span>
            <button className="pagination-button">10</button>
            <button className="pagination-button">下一页</button>
          </div>
        </div>
      </section>
      
      {/* 媒体报道 */}
      <section className="media-section fade-in-section visible">
        <div className="container">
          <h2>媒体报道</h2>
          <div className="media-grid">
            <div className="media-item">
              <h3>《科技日报》：深聆科技引领智能语音芯片技术创新</h3>
              <p>2025-08-10</p>
            </div>
            <div className="media-item">
              <h3>《经济观察报》：智能语音市场迎来新机遇</h3>
              <p>2025-07-25</p>
            </div>
            <div className="media-item">
              <h3>《中国电子报》：深聆科技推动智能语音技术在工业领域的应用</h3>
              <p>2025-06-15</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系我们 */}
      <section className="contact-section fade-in-section visible">
        <div className="container">
          <h2>新闻媒体联系</h2>
          <div className="contact-info">
            <p>如果您是媒体朋友，想要了解更多关于深聆科技的信息，请联系我们的公关团队。</p>
            <p>邮箱：pr@deeplisten.cn</p>
            <p>电话：0571-88888888</p>
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

export default News;