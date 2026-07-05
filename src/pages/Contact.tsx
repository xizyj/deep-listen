import Layout from '../components/Layout';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Layout>
    <div className="contact-page">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1>联系我们</h1>
          <p>如有任何问题或需求，请随时与我们联系</p>
        </div>
      </header>
      
      {/* 联系信息 */}
      <section className="contact-info-section fade-in-section visible">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L12 16L21 11M12 16V21M12 16L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>公司地址</h3>
              <p>浙江省杭州市滨江区越达巷82号房天下大厦</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.75C22 20.4404 21.4404 21 20.75 21H16.92C16.6207 21 16.3375 20.8826 16.125 20.6768L15.88 20.43C15.6682 20.2242 15.55 19.941 15.55 19.64V16.92C15.55 16.6207 15.6682 16.3375 15.88 16.125C16.0925 15.9125 16.3757 15.8 16.675 15.8H19.4C19.6993 15.8 19.9825 15.9125 20.195 16.125L20.44 16.37C20.6458 16.5818 20.7632 16.865 20.7632 17.1643V19.89" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.01 21L5.99 19C5.99 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H11M8 21H16C17.0609 21 18.0783 20.5686 18.8284 19.8185C19.5786 19.0683 20 18.0509 20 17V12M8 21V9C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5H16M8 21H6C4.89543 21 4 20.1046 4 19V17C4 15.8954 4.89543 15 6 15H8M8 8H5M19 8H16M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>联系电话</h3>
              <p>18626895139</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10 13L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>电子邮箱</h3>
              <p>support@deeplisten.cn</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系表单 */}
      <section className="contact-form-section fade-in-section visible">
        <div className="container">
          <div className="form-container">
            <h2>发送消息</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">姓名</label>
                  <input type="text" id="name" name="name" placeholder="请输入您的姓名" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input type="email" id="email" name="email" placeholder="请输入您的邮箱" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">电话</label>
                  <input type="tel" id="phone" name="phone" placeholder="请输入您的电话"/>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">主题</label>
                  <select id="subject" name="subject" required>
                    <option value="">请选择主题</option>
                    <option value="product">产品咨询</option>
                    <option value="cooperation">商务合作</option>
                    <option value="support">技术支持</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">留言内容</label>
                <textarea id="message" name="message" rows={5} placeholder="请输入您的留言内容" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">提交留言</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* 地图 */}
      <section className="map-section fade-in-section visible">
        <div className="container">
          <div className="map-container">
            {/* 这里可以嵌入地图，暂时用占位符 */}
            <div className="map-placeholder">
              <svg width="100%" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="400" fill="#f0f0f0"/>
                <circle cx="400" cy="200" r="10" fill="#e74c3c"/>
                <circle cx="400" cy="200" r="30" stroke="#e74c3c" strokeWidth="2" strokeDasharray="5 5"/>
                <text x="400" y="260" textAnchor="middle" fontSize="16" fill="#333">浙江省杭州市滨江区越达巷82号房天下大厦</text>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* 业务咨询 */}
      <section className="consultation-section fade-in-section visible">
        <div className="container">
          <div className="consultation-content">
            <h2>需要专业的业务咨询？</h2>
            <p>我们的专业团队随时为您提供咨询和支持，帮助您选择最适合的解决方案。</p>
            <a href="#" className="btn btn-primary">预约咨询</a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Contact;