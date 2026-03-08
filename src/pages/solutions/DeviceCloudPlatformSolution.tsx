import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/DeviceCloudPlatformSolution.css';

const DeviceCloudPlatformSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  // 处理滚动渐入效果
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-block');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          setVisibleSections((prev) => ({ ...prev, [section.id]: true }));
        }
      });
    };

    // 初始检查
    handleScroll();
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 标签页切换
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // 滚动到对应区域
    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
  };

  // 平台架构数据
  const architectureLayers = [
    {
      id: 'device-layer',
      title: '设备接入层',
      description: '提供多种协议支持，实现各类智能设备的快速接入，包括WiFi、蓝牙、Zigbee、LoRa等无线协议，以及RS485、RS232等有线协议。',
      features: ['多协议支持', '安全认证', '低功耗设计', '断点续传']
    },
    {
      id: 'communication-layer',
      title: '通信传输层',
      description: '构建安全可靠的通信网络，支持消息队列、数据加密传输、流量控制等功能，确保数据的实时性和安全性。',
      features: ['数据加密', '流量控制', '消息队列', '高并发支持']
    },
    {
      id: 'data-layer',
      title: '数据存储层',
      description: '高性能数据存储和管理，支持时序数据、结构化数据和非结构化数据的存储，提供数据备份、恢复和容灾机制。',
      features: ['时序数据库', '数据备份', '分布式存储', '数据压缩']
    },
    {
      id: 'analytics-layer',
      title: '数据分析层',
      description: '提供强大的数据分析能力，支持实时流处理、离线批处理、机器学习模型部署等，帮助用户从海量数据中挖掘价值。',
      features: ['实时分析', '离线处理', '机器学习', '数据可视化']
    },
    {
      id: 'application-layer',
      title: '应用服务层',
      description: '面向不同行业和场景的应用服务，提供丰富的API接口和SDK，支持用户快速开发和部署各类物联网应用。',
      features: ['RESTful API', 'SDK支持', '应用模板', '自定义开发']
    }
  ];

  // 服务内容数据
  const services = [
    {
      id: 'device-management',
      title: '设备管理服务',
      description: '提供设备的全生命周期管理，包括设备注册、配置、升级、监控和维护等功能。',
      features: ['设备注册', '远程配置', '固件升级', '设备监控', '故障诊断']
    },
    {
      id: 'data-collection',
      title: '数据采集服务',
      description: '支持多种数据采集方式，实现设备数据的实时采集、过滤和传输。',
      features: ['多协议采集', '数据过滤', '实时传输', '断点续传', '数据验证']
    },
    {
      id: 'data-analysis',
      title: '数据分析服务',
      description: '提供强大的数据分析能力，包括统计分析、趋势分析、异常检测等功能。',
      features: ['统计分析', '趋势预测', '异常检测', '报表生成', '可视化分析']
    },
    {
      id: 'rule-engine',
      title: '规则引擎服务',
      description: '基于条件触发的规则引擎，支持用户自定义规则，实现设备的智能联动和自动化控制。',
      features: ['可视化规则配置', '实时规则执行', '规则版本管理', '规则监控', '规则优化']
    },
    {
      id: 'security-service',
      title: '安全服务',
      description: '全方位的安全保障，包括设备认证、数据加密、访问控制、安全审计等功能。',
      features: ['设备认证', '数据加密', '访问控制', '安全审计', '漏洞扫描']
    },
    {
      id: 'api-gateway',
      title: 'API网关服务',
      description: '统一的API接口管理，支持接口的创建、发布、监控和管理。',
      features: ['接口管理', '流量控制', '身份认证', '监控告警', '文档管理']
    }
  ];

  // 应用场景数据
  const applicationScenarios = [
    {
      title: '智能家居',
      description: '通过设备云平台实现智能家居设备的集中管理和控制，提供远程控制、场景联动、数据分析等功能。',
      icon: '🏠'
    },
    {
      title: '工业物联网',
      description: '为工业设备提供远程监控、故障诊断、预测性维护等功能，提高生产效率和设备可靠性。',
      icon: '🏭'
    },
    {
      title: '智能农业',
      description: '实现农业环境监测、智能灌溉、精准施肥等功能，提高农业生产效率和农产品质量。',
      icon: '🌾'
    },
    {
      title: '智能医疗',
      description: '支持医疗设备的远程监控和数据管理，提供患者健康数据的实时监测和分析。',
      icon: '🏥'
    },
    {
      title: '智慧城市',
      description: '为城市基础设施提供智能监控和管理，包括智能照明、智能交通、环境监测等。',
      icon: '🏙️'
    },
    {
      title: '智能零售',
      description: '实现零售设备的智能管理和数据分析，提供库存管理、客户行为分析等功能。',
      icon: '🛍️'
    }
  ];

  // 技术参数数据
  const techParams = [
    {
      name: '设备接入能力',
      value: '支持百万级设备并发接入'
    },
    {
      name: '数据传输延迟',
      value: '毫秒级实时传输'
    },
    {
      name: '数据存储能力',
      value: 'PB级数据存储'
    },
    {
      name: '可靠性',
      value: '99.99%服务可用性'
    },
    {
      name: '安全性',
      value: '端到端加密，多重身份认证'
    },
    {
      name: '可扩展性',
      value: '弹性伸缩，按需扩容'
    },
    {
      name: '协议支持',
      value: 'MQTT、CoAP、HTTP、WebSocket等'
    },
    {
      name: '部署方式',
      value: '公有云、私有云、混合云'
    }
  ];

  return (
    <div className="solution-page">
      <Navbar />
      
      {/* 页面标题 */}
      <div className="page-header">
        <div className="container">
          <h1>设备云平台方案</h1>
          <p>为企业提供一站式的智能设备连接、管理和数据服务平台</p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="tabs-navigation">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
            >
              方案概述
            </button>
            <button 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => handleTabChange('features')}
            >
              核心特性
            </button>
            <button 
              className={`tab ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => handleTabChange('architecture')}
            >
              平台架构
            </button>
            <button 
              className={`tab ${activeTab === 'scenarios' ? 'active' : ''}`}
              onClick={() => handleTabChange('scenarios')}
            >
              应用场景
            </button>
            <button 
              className={`tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => handleTabChange('services')}
            >
              服务内容
            </button>
            <button 
              className={`tab ${activeTab === 'params' ? 'active' : ''}`}
              onClick={() => handleTabChange('params')}
            >
              技术参数
            </button>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="solution-content">
        <div className="container">
          {/* 方案概述 */}
          <section 
            id="overview" 
            className={`fade-in-block ${visibleSections['overview'] ? 'visible' : ''}`}
          >
            <h2>方案概述</h2>
            <div className="overview-content">
              <div className="overview-text">
                <p>深聆科技设备云平台是一款专为智能设备打造的一站式连接、管理和数据服务平台。该平台采用先进的云计算和大数据技术，为企业提供设备接入、数据采集、数据分析、设备管理等全方位服务，帮助企业快速构建智能物联网应用。</p>
                <p>平台支持多种通信协议，可接入各类智能设备，包括传感器、控制器、网关等。通过平台提供的丰富API和SDK，企业可以快速开发和部署各类物联网应用，实现设备的远程监控、智能控制和数据分析。</p>
                <p>设备云平台采用高可用架构设计，确保服务的稳定性和可靠性。同时，平台提供多重安全保障，包括设备认证、数据加密、访问控制等，保障用户数据和设备的安全。</p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder" style={{
                  width: '100%',
                  height: '300px',
                  background: 'linear-gradient(135deg, #0066cc, #0099ff)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  设备云平台架构图
                </div>
              </div>
            </div>
          </section>

          {/* 核心特性 */}
          <section 
            id="features" 
            className={`fade-in-block ${visibleSections['features'] ? 'visible' : ''}`}
          >
            <h2>核心特性</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 7.92 7.05 4.56 11 4.07V19.93ZM13.03 17.58L15.11 15.5C15.69 14.92 16.36 14.92 16.94 15.5L18.97 17.58C19.55 18.16 19.55 19.12 18.97 19.7C18.39 20.28 17.43 20.28 16.85 19.7L15.82 18.67L14.79 19.7C14.21 20.28 13.25 20.28 12.67 19.7C12.09 19.12 12.09 18.16 12.67 17.58L13.03 17.58Z" fill="white"/>
                  </svg>
                </div>
                <h3>多协议接入</h3>
                <p>支持MQTT、CoAP、HTTP、WebSocket等多种通信协议，可接入各类智能设备。</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H5V11H19V13Z" fill="white"/>
                    <path d="M19 19H5V5H19V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>海量设备管理</h3>
                <p>支持百万级设备并发接入和管理，提供设备的全生命周期管理功能。</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>实时数据分析</h3>
                <p>提供强大的实时数据分析能力，支持数据的实时处理、统计分析和可视化展示。</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15V17M12 7V13M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>灵活的规则引擎</h3>
                <p>基于条件触发的规则引擎，支持用户自定义规则，实现设备的智能联动和自动化控制。</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>高可用架构</h3>
                <p>采用分布式架构设计，确保服务的高可用性和可靠性，支持弹性伸缩。</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15V17M12 7V13M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>全方位安全保障</h3>
                <p>提供设备认证、数据加密、访问控制、安全审计等多重安全保障机制。</p>
              </div>
            </div>
          </section>

          {/* 平台架构 */}
          <section 
            id="architecture" 
            className={`fade-in-block ${visibleSections['architecture'] ? 'visible' : ''}`}
          >
            <h2>平台架构</h2>
            <p className="section-description">设备云平台采用分层架构设计，包括设备接入层、通信传输层、数据存储层、数据分析层和应用服务层。各层之间通过标准接口进行交互，确保系统的可扩展性和灵活性。</p>
            
            <div className="architecture-layers">
              {architectureLayers.map((layer, index) => (
                <div key={index} className="architecture-layer">
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                  <ul className="layer-features">
                    {layer.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 应用场景 */}
          <section 
            id="scenarios" 
            className={`fade-in-block ${visibleSections['scenarios'] ? 'visible' : ''}`}
          >
            <h2>应用场景</h2>
            <div className="scenarios-grid">
              {applicationScenarios.map((scenario, index) => (
                <div key={index} className="scenario-item">
                  <div className="scenario-icon">{scenario.icon}</div>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 服务内容 */}
          <section 
            id="services" 
            className={`fade-in-block ${visibleSections['services'] ? 'visible' : ''}`}
          >
            <h2>服务内容</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 技术参数 */}
          <section 
            id="params" 
            className={`fade-in-block ${visibleSections['params'] ? 'visible' : ''}`}
          >
            <h2>技术参数</h2>
            <div className="params-table">
              <table>
                <tbody>
                  {techParams.map((param, index) => (
                    <tr key={index}>
                      <td className="param-name">{param.name}</td>
                      <td className="param-value">{param.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* 咨询支持 */}
      <div className="consultation-section fade-in-block">
        <div className="container">
          <div className="consultation-content">
            <h2>需要进一步了解设备云平台方案？</h2>
            <p>我们的技术专家团队随时为您提供咨询和支持，帮助您选择最适合的解决方案。</p>
            <a href="#" className="btn btn-primary">联系咨询</a>
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
              <h4>解决方案</h4>
              <ul className="footer-links">
                <li><a href="/solutions/software">软件算法方案</a></li>
                <li><a href="/solutions/intelligent-hardware-solution">智能硬件方案</a></li>
                <li><a href="/solutions/device-cloud-platform-solution">设备云平台方案</a></li>
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

export default DeviceCloudPlatformSolution;