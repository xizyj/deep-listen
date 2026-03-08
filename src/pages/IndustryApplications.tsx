import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/IndustryApplications.css';

const IndustryApplications: React.FC = () => {
  // 处理滚动渐入效果
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 直接向DOM元素添加fade-in类
            entry.target.classList.add('fade-in');
            // 一旦元素可见，就停止观察它以优化性能
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // 行业应用数据
  const industries = [
    {
      id: 'smart-industry',
      title: '智能工业',
      description: '为工业生产提供智能化解决方案，通过AI语音识别技术实现设备状态监测、异常预警和生产流程优化，提高生产效率和安全性。',
      features: [
        '声源定位',
        '异响检测'
      ],
      caseStudies: [
        {
          title: '工业设备智能监控系统',
          description: '为某大型工厂部署工业设备智能监控系统，通过声源定位和异响检测技术，实现设备故障的早期预警和精准定位。',
          result: '设备故障率降低了35%，维修时间缩短了40%，生产效率提升了25%。'
        },
        {
          title: '工厂环境安全监测平台',
          description: '为某化工企业构建工厂环境安全监测平台，实时监测设备运行声音异常，预防安全事故发生。',
          result: '安全事故发生率降低了60%，提高了生产环境安全性，保障了员工生命健康。'
        }
      ]
    },
    {
      id: 'smart-tools',
      title: '智能工具',
      description: '为各类工具设备提供智能化升级，通过语音识别技术实现人机交互，提升工具使用效率和用户体验。',
      features: [
        '工业设备',
        '语音提示'
      ],
      caseStudies: [
        {
          title: '智能工业工具系统',
          description: '为某工具制造企业开发智能工业工具系统，集成语音提示功能，指导操作人员正确使用工具，减少操作失误。',
          result: '操作失误率降低了50%，工作效率提升了30%，用户满意度显著提高。'
        },
        {
          title: '手持式智能终端设备',
          description: '研发手持式智能终端设备，支持语音控制和语音提示，应用于物流、仓储、巡检等场景。',
          result: '设备操作时间缩短了40%，减轻了操作人员工作负担，提高了工作效率。'
        }
      ]
    },
    {
      id: 'smart-security',
      title: '智能安防',
      description: '利用AI语音识别技术提升安防系统智能化水平，实现语音异常监测和危险行为预警，保障公共安全。',
      features: [
        '危词监测',
        '跌倒监测'
      ],
      caseStudies: [
        {
          title: '公共区域智能安防系统',
          description: '为某城市公共区域部署智能安防系统，通过危词监测技术识别潜在危险语音，及时预警和干预。',
          result: '安全事件响应时间缩短了70%，提高了公共安全保障能力，增强了市民安全感。'
        },
        {
          title: '老年人跌倒监测系统',
          description: '为养老院和社区开发老年人跌倒监测系统，通过声音识别技术检测跌倒声音并自动报警。',
          result: '跌倒救援响应时间从平均30分钟缩短至3分钟以内，显著提高了救援效率。'
        }
      ]
    },
    {
      id: 'smart-home-appliance',
      title: '智能家居家电',
      description: '为家庭生活提供智能化解决方案，通过语音控制技术实现家电设备的智能管理，打造便捷、舒适的智能生活环境。',
      features: [
        '智能家电',
        '智能家居'
      ],
      caseStudies: [
        {
          title: '全屋智能家电控制系统',
          description: '为高端住宅项目提供全屋智能家电控制系统，支持语音控制各种家电设备，实现场景联动和智能管理。',
          result: '用户生活便利度提升了80%，能源消耗降低了20%，获得了用户高度评价。'
        },
        {
          title: '智能家居生态系统',
          description: '构建智能家居生态系统，连接各类智能家居设备，实现统一的语音控制和智能化管理。',
          result: '系统兼容性达到95%以上，用户使用满意度超过90%，市场占有率持续增长。'
        }
      ]
    },
    {
      id: 'smart-consumer-electronics',
      title: '智能消费电子',
      description: '为消费电子领域提供智能化解决方案，通过AI语音交互技术提升产品竞争力，创造全新的用户体验。',
      features: [
        'AI教具',
        'AI文创',
        'AI玩具'
      ],
      caseStudies: [
        {
          title: '智能教育产品系列',
          description: '开发智能教育产品系列，包括AI教具、智能学习机等，通过语音交互提升学习体验和效果。',
          result: '产品销量同比增长150%，用户反馈学习效果提升显著，获得教育部门认可。'
        },
        {
          title: 'AI智能玩具开发',
          description: '为玩具企业开发AI智能玩具，集成语音识别、对话交互、智能学习等功能，提供沉浸式娱乐体验。',
          result: '产品上市后供不应求，市场反响热烈，获得多项行业奖项。'
        }
      ]
    }
  ];

  return (
    <div className="industry-applications-page">
      <Navbar />
      
      {/* 页面标题 */}
      <div className="page-header">
        <div className="container">
          <h1>行业应用</h1>
          <p>为不同行业提供定制化的智能解决方案，助力产业数字化转型和智能化升级</p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="applications-content">
        <div className="container">
          {/* 行业导航 */}
          <div className="industry-nav">
            {industries.map((industry) => (
              <a 
                key={industry.id} 
                href={`#${industry.id}`}
                className="industry-link"
              >
                {industry.title}
              </a>
            ))}
          </div>

          {/* 行业应用区块 */}
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              id={industry.id} 
              className="industry-section fade-in-section show"
            >
              <h2>{industry.title}</h2>
              <p className="industry-description">{industry.description}</p>
              
              {/* 行业特性 */}
              <div className="industry-features">
                <h3>核心功能</h3>
                <div className="features-grid">
                  {industry.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 行业案例 */}
              <div className="industry-cases">
                <h3>成功案例</h3>
                <div className="cases-grid">
                  {industry.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="case-item">
                      <h4>{caseStudy.title}</h4>
                      <p className="case-description">{caseStudy.description}</p>
                      <div className="case-result">
                        <h5>实施效果：</h5>
                        <p>{caseStudy.result}</p>
                      </div>
                      <a href="#" className="case-link">查看详情</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 解决方案优势 */}
      <div className="solutions-advantages fade-in-section show" id="advantages">
        <div className="container">
          <h2>我们的解决方案优势</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>技术领先</h3>
              <p>拥有自主研发的核心技术和算法，保持技术领先优势，为客户提供最先进的解决方案。</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 7V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1551 22.7383 17.3229 22.2426 16.6165C21.7469 15.9101 21.0361 15.353 20.2143 15.0214C19.3924 14.6898 18.4851 14.6087 17.625 14.7873C16.7649 14.9658 15.9813 15.3951 15.3857 16.0214L12 19.5L8.61429 16.0214C8.01874 15.3951 7.23508 14.9658 6.37496 14.7873C5.51484 14.6087 4.60757 14.6898 3.78571 15.0214C2.96386 15.353 2.25311 15.9101 1.75736 16.6165C1.26161 17.3229 1.00072 18.1551 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>定制化服务</h3>
              <p>根据客户需求提供定制化的解决方案，满足不同行业、不同场景的个性化需求。</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>快速实施</h3>
              <p>拥有丰富的项目经验和完善的实施方法论，确保项目快速、高质量地交付。</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10H7.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H7.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10H10.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 10H13.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 14H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>完善的服务</h3>
              <p>提供从咨询、设计、开发、实施到运维的全生命周期服务，确保客户项目成功。</p>
            </div>
          </div>
        </div>
      </div>

    

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>深聆科技</h3>
              <p>为您提供全方位的AI智能解决方案，助力企业数字化转型和智能化升级。</p>
            </div>
            <div className="footer-column">
              <h4>行业应用</h4>
              <ul className="footer-links">
                <li><a href="#smart-home">智能家居</a></li>
                <li><a href="#smart-car">智能汽车</a></li>
                <li><a href="#industrial-iot">工业物联网</a></li>
                <li><a href="#smart-education">智能教育</a></li>
                <li><a href="#smart-healthcare">智慧医疗</a></li>
                <li><a href="#smart-city">智慧城市</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>关于我们</h4>
              <ul className="footer-links">
                <li><a href="#">公司简介</a></li>
                <li><a href="#">团队介绍</a></li>
                {/* <li><a href="#">新闻动态</a></li> */}
                <li><a href="#">加入我们</a></li>
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

export default IndustryApplications;