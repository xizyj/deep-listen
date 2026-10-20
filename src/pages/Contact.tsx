import Layout from '../components/Layout';
import '../styles/Contact.css';

/** 房天下大厦（越达巷82号）坐标，GCJ-02 / 高德 */
const OFFICE = {
  name: '深聆科技',
  address: '浙江省杭州市滨江区越达巷82号房天下大厦',
  lng: 120.1869,
  lat: 30.1889,
}

const amapUrl = `https://uri.amap.com/marker?position=${OFFICE.lng},${OFFICE.lat}&name=${encodeURIComponent(OFFICE.name)}&src=deeplisten&coordinate=gaode&callnative=1`
const baiduUrl = `https://api.map.baidu.com/marker?location=${OFFICE.lat},${OFFICE.lng}&title=${encodeURIComponent(OFFICE.name)}&content=${encodeURIComponent(OFFICE.address)}&output=html&coord_type=gcj02&src=deeplisten`
/** OpenStreetMap 嵌入（无需 Key，国内可访问；坐标按展示用） */
const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${OFFICE.lng - 0.012}%2C${OFFICE.lat - 0.008}%2C${OFFICE.lng + 0.012}%2C${OFFICE.lat + 0.008}&layer=mapnik&marker=${OFFICE.lat}%2C${OFFICE.lng}`

const Contact = () => {
  return (
    <Layout>
    <div className="contact-page">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1>询价 / 定制开发</h1>
          <p>离线语音模块价格、打样、MOQ 与开发周期——说明产品场景与接口需求，我们反馈报价区间与交期</p>
        </div>
      </header>

      <section className="contact-info-section fade-in-section visible">
        <div className="container">
          <div className="contact-info-grid" style={{ marginBottom: 8 }}>
            <div className="contact-info-item">
              <h3>标准模块打样</h3>
              <p>常见约 2 周出样，具体以规格与唤醒词定制为准</p>
            </div>
            <div className="contact-info-item">
              <h3>报价与 MOQ</h3>
              <p>按模块规格与用量给价格区间与起订量，不兜圈子</p>
            </div>
            <div className="contact-info-item">
              <h3>OEM / ODM</h3>
              <p>支持语音方案定制、烧录贴片与量产交付协作</p>
            </div>
          </div>
        </div>
      </section>
      
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
      
      {/* 地图 */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">公司位置</h2>
          <p className="map-address">{OFFICE.address}</p>
          <div className="map-container">
            <iframe
              title={`${OFFICE.name}位置地图`}
              className="map-iframe"
              src={osmEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="map-actions">
            <a href={amapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              高德地图导航
            </a>
            <a href={baiduUrl} target="_blank" rel="noopener noreferrer" className="btn map-btn-secondary">
              百度地图导航
            </a>
          </div>
        </div>
      </section>
      
      {/* 业务咨询 */}
      <section className="consultation-section fade-in-section visible">
        <div className="container">
          <div className="consultation-content">
            <h2>需要专业的业务咨询？</h2>
            <p>我们的专业团队随时为您提供咨询和支持，帮助您选择最适合的解决方案。</p>
            <a href="tel:18626895139" className="btn btn-primary">电话咨询 18626895139</a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Contact;