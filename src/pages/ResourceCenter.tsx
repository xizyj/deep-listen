import { useState } from 'react';
import Layout from '../components/Layout';
import { useIntersectionFadeIn } from '../hooks/useIntersectionFadeIn';
import type { DownloadResource, ResourceTab, Resources, TutorialResource, CaseStudyResource } from '../types/resource';
import './ResourceCenter.css';

const ResourceCenter = () => {
  const [activeTab, setActiveTab] = useState<ResourceTab>('documents');
  const [searchTerm, setSearchTerm] = useState('');

  useIntersectionFadeIn({ selector: '.resource-list', visibleClass: 'fade-in' });

  const resources: Resources = {
    documents: [
      {
        title: '深聆科技产品技术规格书',
        category: '技术文档',
        date: '2023-11-15',
        downloadCount: 1256,
        fileSize: '5.2MB',
        description: '详细介绍深聆科技各类产品的技术规格、参数和性能指标。'
      },
      {
        title: 'AI语音芯片用户手册',
        category: '用户手册',
        date: '2023-10-28',
        downloadCount: 892,
        fileSize: '3.8MB',
        description: '提供AI语音芯片的使用方法、配置指南和常见问题解答。'
      },
      {
        title: '智能硬件开发指南',
        category: '开发文档',
        date: '2023-09-10',
        downloadCount: 1563,
        fileSize: '8.7MB',
        description: '详细介绍智能硬件的开发流程、API使用和调试方法。'
      },
      {
        title: '云平台API接口说明',
        category: 'API文档',
        date: '2023-08-22',
        downloadCount: 2145,
        fileSize: '4.3MB',
        description: '提供设备云平台API的详细接口说明和调用示例。'
      }
    ],
    software: [
      {
        title: '深聆科技SDK v3.0',
        category: 'SDK',
        date: '2023-11-05',
        downloadCount: 3251,
        fileSize: '256MB',
        description: '包含完整的开发工具包、示例代码和文档。'
      },
      {
        title: '模型训练工具 v2.5',
        category: '开发工具',
        date: '2023-10-18',
        downloadCount: 987,
        fileSize: '189MB',
        description: '用于训练和优化AI语音识别模型的专业工具。'
      },
      {
        title: '固件更新工具 v1.2',
        category: '工具软件',
        date: '2023-09-30',
        downloadCount: 1456,
        fileSize: '12MB',
        description: '用于设备固件升级和管理的桌面工具。'
      },
      {
        title: '数据可视化分析工具',
        category: '分析工具',
        date: '2023-08-15',
        downloadCount: 876,
        fileSize: '45MB',
        description: '用于分析设备运行数据和用户行为的可视化工具。'
      }
    ],
    tutorials: [
      {
        title: 'AI语音识别入门教程',
        category: '入门教程',
        date: '2023-11-20',
        viewCount: 5689,
        duration: '45分钟',
        description: '从零开始学习AI语音识别技术和应用开发。'
      },
      {
        title: '智能硬件开发实战',
        category: '实战教程',
        date: '2023-10-25',
        viewCount: 4321,
        duration: '60分钟',
        description: '通过实际项目学习智能硬件的开发和调试过程。'
      },
      {
        title: '设备云平台集成指南',
        category: '集成教程',
        date: '2023-09-18',
        viewCount: 3256,
        duration: '50分钟',
        description: '详细介绍如何将设备接入深聆科技云平台。'
      },
      {
        title: '深度学习模型优化技巧',
        category: '高级教程',
        date: '2023-08-10',
        viewCount: 2789,
        duration: '65分钟',
        description: '学习如何优化深度学习模型以提高性能和降低功耗。'
      }
    ],
    caseStudies: [
      {
        title: '智能家居解决方案案例分析',
        category: '智能家居',
        date: '2023-11-10',
        viewCount: 4567,
        description: '详细介绍深聆科技在智能家居领域的成功案例和解决方案。'
      },
      {
        title: '智能汽车语音交互系统实践',
        category: '智能汽车',
        date: '2023-10-15',
        viewCount: 3890,
        description: '分享智能汽车语音交互系统的设计思路和实施经验。'
      },
      {
        title: '工业物联网设备监控解决方案',
        category: '工业物联网',
        date: '2023-09-25',
        viewCount: 2678,
        description: '介绍如何利用深聆科技的解决方案实现工业设备的智能监控。'
      },
      {
        title: '教育行业智能终端应用案例',
        category: '智能教育',
        date: '2023-08-28',
        viewCount: 3214,
        description: '分享深聆科技在教育行业的智能终端应用案例和效果。'
      }
    ]
  };

  const filteredResources = resources[activeTab].filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDownloadResource = (resource: DownloadResource, index: number) => (
    <div key={index} className="resource-item">
      <div className="resource-info">
        <div className="resource-header-info">
          <h3>{resource.title}</h3>
          <span className="resource-category">{resource.category}</span>
        </div>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-meta">
          <span className="resource-date">发布日期：{resource.date}</span>
          <span className="resource-downloads">下载次数：{resource.downloadCount}</span>
          <span className="resource-size">文件大小：{resource.fileSize}</span>
        </div>
      </div>
      <div className="resource-actions">
        <a href="#" className="btn btn-primary">下载资源</a>
      </div>
    </div>
  );

  const renderTutorialResource = (resource: TutorialResource, index: number) => (
    <div key={index} className="resource-item">
      <div className="resource-info">
        <div className="resource-header-info">
          <h3>{resource.title}</h3>
          <span className="resource-category">{resource.category}</span>
        </div>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-meta">
          <span className="resource-date">发布日期：{resource.date}</span>
          <span className="resource-views">浏览次数：{resource.viewCount}</span>
          <span className="resource-duration">时长：{resource.duration}</span>
        </div>
      </div>
      <div className="resource-actions">
        <a href="#" className="btn btn-primary">观看视频</a>
      </div>
    </div>
  );

  const renderCaseStudyResource = (resource: CaseStudyResource, index: number) => (
    <div key={index} className="resource-item">
      <div className="resource-info">
        <div className="resource-header-info">
          <h3>{resource.title}</h3>
          <span className="resource-category">{resource.category}</span>
        </div>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-meta">
          <span className="resource-date">发布日期：{resource.date}</span>
          <span className="resource-views">浏览次数：{resource.viewCount}</span>
        </div>
      </div>
      <div className="resource-actions">
        <a href="#" className="btn btn-primary">查看详情</a>
      </div>
    </div>
  );

  return (
    <Layout>
    <div className="resource-center-page">
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1>资源中心</h1>
          <p>为开发者和合作伙伴提供丰富的技术文档、开发工具、视频教程和案例分析</p>
        </div>
      </section>
      
      {/* 主要内容 */}
      <section className="resource-content">
        <div className="container">
          {/* 搜索和标签页导航 */}
          <div className="resource-header">
            <div className="search-box">
              <input
                type="text"
                placeholder="搜索资源..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="resource-tabs">
              <button 
                className={`tab-button ${activeTab === 'documents' ? 'active' : ''}`}
                onClick={() => setActiveTab('documents')}
              >
                技术文档
              </button>
              <button 
                className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                软件工具
              </button>
              <button 
                className={`tab-button ${activeTab === 'tutorials' ? 'active' : ''}`}
                onClick={() => setActiveTab('tutorials')}
              >
                视频教程
              </button>
              <button 
                className={`tab-button ${activeTab === 'caseStudies' ? 'active' : ''}`}
                onClick={() => setActiveTab('caseStudies')}
              >
                案例分析
              </button>
            </div>
          </div>
          
          {/* 资源列表 */}
          <div className="resource-list">
            {filteredResources.length > 0 ? (
              <>
                {(activeTab === 'documents' || activeTab === 'software') &&
                  (filteredResources as DownloadResource[]).map(renderDownloadResource)}
                {activeTab === 'tutorials' &&
                  (filteredResources as TutorialResource[]).map(renderTutorialResource)}
                {activeTab === 'caseStudies' &&
                  (filteredResources as CaseStudyResource[]).map(renderCaseStudyResource)}
              </>
            ) : (
              <div className="no-results">
                <p>未找到相关资源，请尝试其他搜索关键词。</p>
              </div>
            )}
          </div>
          
          {/* 分页 */}
          {filteredResources.length > 0 && (
            <div className="pagination">
              <button className="page-button prev">上一页</button>
              <button className="page-button active">1</button>
              <button className="page-button">2</button>
              <button className="page-button">3</button>
              <span>...</span>
              <button className="page-button">10</button>
              <button className="page-button next">下一页</button>
            </div>
          )}
        </div>
      </section>
      
      {/* 热门资源 */}
      <section className="popular-resources">
        <div className="container">
          <h2>热门资源</h2>
          <div className="popular-grid">
            <div className="popular-item">
              <div className="popular-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 17H8" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 9H8" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="popular-info">
                <h3>AI语音芯片技术规格书</h3>
                <p>详细介绍AI语音芯片的技术参数和性能指标</p>
                <a href="#" className="popular-link">查看详情</a>
              </div>
            </div>
            
            <div className="popular-item">
              <div className="popular-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V12Z" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21V19C17 18.4477 16.5523 18 16 18H8C7.44772 18 7 18.4477 7 19V21" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V12" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="popular-info">
                <h3>智能硬件开发实战视频</h3>
                <p>通过实际项目学习智能硬件的开发和调试</p>
                <a href="#" className="popular-link">观看视频</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 开发者社区 */}
      <section className="developer-community">
        <div className="container">
          <h2>加入开发者社区</h2>
          <p>与全球开发者交流经验，获取最新技术动态和资源</p>
          <div className="community-links">
            <a href="#" className="community-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="#" className="community-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V20H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V20H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                <path d="M6 9H2V20H6V9Z" fill="currentColor"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
              </svg>
              <span>CSDN</span>
            </a>
            <a href="#" className="community-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22V12M12 12L5 19M12 12L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>知乎</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default ResourceCenter;