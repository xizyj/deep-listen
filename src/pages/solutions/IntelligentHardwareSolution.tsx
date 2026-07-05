import Layout from '../../components/Layout';
import { useIntersectionFadeIn } from '../../hooks/useIntersectionFadeIn';
import '../../styles/SoftwareSolution.css';
import '../../styles/IntelligentHardwareSolution.css';

const IntelligentHardwareSolution = () => {
  useIntersectionFadeIn();

  return (
    <Layout>
    <div className="intelligent-hardware-page">
      {/* 页面标题 */}
      <div className="page-header">
        <div className="container">
          <h1>智能硬件方案</h1>
          <p>为您提供一体化的智能硬件方案，从芯片到系统的完整技术支持</p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="solution-content">
        <div className="container">
          {/* 方案概述 */}
          <div className="overview-content fade-in-section" id="overview">
            <div className="overview-main">
              <div className="overview-image">
                {/* 硬件方案主图 */}
                <div style={{
                  height: '400px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  智能硬件方案示意图
                </div>
              </div>
              <div className="overview-text">
                <h2>智能硬件方案</h2>
                <p>
                  深聆科技智能硬件方案在设备中嵌入智能模块，赋能智能化交互的能力。
                  基于自主研发的AI芯片和算法，结合先进的硬件设计理念，为客户提供高性能、低功耗、高集成度的智能硬件产品。
                </p>
                <p>
                  我们的方案采用模块化设计，支持灵活配置，可以根据客户需求进行定制开发，同时提供完善的SDK和开发工具，
                  大大降低开发难度和周期。
                </p>
              </div>
            </div>
          </div>

          {/* 方案系列介绍 */}
          <div className="solution-category fade-in-section" id="solution-category">
            <h2>智能硬件方案系列</h2>
            <p className="solution-description">
              深聆科技智能硬件方案在设备中嵌入智能模块，赋能智能化交互的能力，
              包含以下四个方案系列：
            </p>
          </div>

          {/* 方案优势 */}
          <div className="overview-benefits fade-in-section" id="benefits">
            <h3>方案优势</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon" style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#0066cc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13H13V21H21V13Z"/>
                    <path d="M13 13H3V21H13V13Z"/>
                    <path d="M13 3H3V11H13V3Z"/>
                  </svg>
                </div>
                <h4>高性能</h4>
                <p>搭载自研AI芯片，提供强大的边缘计算能力，满足各类智能应用需求</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#0099ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17.93C7.05 17.44 4 14.08 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 10.33 15.96 10.66 15.88 11H17.93C18.92 12.65 18.44 14.77 16.8 15.76L14.29 17.56C13.48 18.11 12.53 18.11 11.72 17.56L11 17.03V17.93ZM12.8 15.11L15.31 13.31C15.94 12.93 16.21 12.11 15.83 11.47C15.45 10.84 14.63 10.56 13.99 10.94L11.48 12.74C10.84 13.12 10.56 13.94 10.94 14.58C11.32 15.22 12.14 15.5 12.8 15.11Z"/>
                  </svg>
                </div>
                <h4>低功耗</h4>
                <p>优化的电源管理系统，大幅降低设备能耗，延长电池续航时间</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#66cc00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.14 12.94C18.85 12.65 18.85 12.17 19.14 11.88L20.56 10.46C20.85 10.17 20.85 9.69 20.56 9.4C20.27 9.11 19.79 9.11 19.5 9.4L18.08 10.82L15.05 7.79C14.76 7.5 14.28 7.5 13.99 7.79C13.7 8.08 13.7 8.56 13.99 8.85L15.92 10.78L5.92 20.78C5.63 21.07 5.15 21.07 4.86 20.78C4.57 20.49 4.57 20.01 4.86 19.72L19.14 12.94Z"/>
                  </svg>
                </div>
                <h4>高集成度</h4>
                <p>高度集成的硬件设计，缩小设备体积，简化开发流程</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon" style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ff9900',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8 11H11V7H13V11H16L12 15Z"/>
                    <path d="M12 3C16.9706 3 21 6.58172 21 11C21 15.4183 16.9706 19 12 19C7.02944 19 3 15.4183 3 11C3 6.58172 7.02944 3 12 3ZM12 5C8.13401 5 5 7.58172 5 11C5 14.4183 8.13401 17 12 17C15.866 17 19 14.4183 19 11C19 7.58172 15.866 5 12 5Z"/>
                  </svg>
                </div>
                <h4>易扩展</h4>
                <p>模块化设计，支持丰富的接口和扩展功能，满足多样化需求</p>
              </div>
            </div>
          </div>

          {/* 产品系列 */}
          <div className="products-content fade-in-section" id="products">
            <div className="products-grid">
              {/* 单Mic识别模组方案 */}
              <div className="product-item">
                <div className="product-image">
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    单Mic识别模组方案
                  </div>
                </div>
                <div className="product-text">
                  <h3>单Mic识别模组方案</h3>
                  <p>
                    提供近距离语音识别能力，集成高性能语音识别算法和专用AI芯片，
                    适用于各类需要语音交互的智能设备。
                  </p>
                  <div className="sub-products">
                    <div className="sub-product-item">
                      <h4>贴片模块</h4>
                      <p>采用SMD封装，体积小，适合直接焊接在PCB板上，集成度高，提供稳定的语音识别性能</p>
                    </div>
                    <div className="sub-product-item">
                      <h4>端子模块</h4>
                      <p>采用插针端子设计，便于快速集成和调试，支持灵活配置，适合原型开发和小批量生产</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 多Mic识别模组方案 */}
              <div className="product-item">
                <div className="product-image">
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    多Mic识别模组方案
                  </div>
                </div>
                <div className="product-text">
                  <h3>多Mic识别模组方案</h3>
                  <p>
                    采用阵列麦克风设计，具备空间降噪和远场拾音能力，
                    支持360°全方位语音识别，适用于复杂环境。
                  </p>
                  <div className="sub-products">
                    <div className="sub-product-item">
                      <h4>贴片模块</h4>
                      <p>高密度阵列麦克风设计，集成度高，拾音距离远，适合空间受限的产品设计</p>
                    </div>
                    <div className="sub-product-item">
                      <h4>端子模块</h4>
                      <p>提供灵活的麦克风阵列配置，支持自定义麦克风数量和布局，便于根据需求进行调整</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 在线语音方案 */}
              <div className="product-item">
                <div className="product-image">
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    在线语音方案
                  </div>
                </div>
                <div className="product-text">
                  <h3>在线语音方案</h3>
                  <p>
                    结合本地识别和云端AI能力，支持复杂语义理解和多轮对话，
                    提供丰富的语音交互功能。
                  </p>
                  <div className="sub-products">
                    <div className="sub-product-item">
                      <h4>单mic物联网语音模块</h4>
                      <p>集成Wi-Fi/蓝牙通信模块，支持云平台接入，提供完整的语音交互解决方案，适用于需要云端智能支持的场景</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 本地+在线语音方案 */}
              <div className="product-item">
                <div className="product-image">
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    本地+在线语音方案
                  </div>
                </div>
                <div className="product-text">
                  <h3>本地+在线语音方案</h3>
                  <p>
                    融合本地高性能AI处理和云端深度学习能力，
                    即使在断网情况下也能保证核心功能正常运行。
                  </p>
                  <div className="sub-products">
                    <div className="sub-product-item">
                      <h4>单mic物联网语音模块</h4>
                      <p>本地处理核心指令，云端处理复杂任务，平衡性能和功耗，确保在各种网络环境下都能提供稳定的用户体验</p>
                    </div>
                    <div className="sub-product-item">
                      <h4>多mic物联网语音模块</h4>
                      <p>结合阵列麦克风和本地+云端混合AI处理架构，提供远场识别和离线交互能力，适合复杂环境下的语音交互需求</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 核心特性 */}
          <div className="features-content fade-in-section" id="features">
            <h2>核心特性</h2>
            <div className="feature-section">
              <div className="feature-image">
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  自研AI芯片
                </div>
              </div>
              <div className="feature-text">
                <h3>自研AI芯片</h3>
                <p>
                  我们自主研发的AI芯片采用先进工艺制程，集成了高性能神经网络计算单元，
                  支持多种AI算法的高效运行，为智能设备提供强大的边缘计算能力。
                </p>
                <ul className="feature-details">
                  <li>支持多模态识别算法，包括语音、图像、手势等</li>
                  <li>采用低功耗设计，适合电池供电设备长时间运行</li>
                  <li>支持动态电压调节，根据工作负载智能调整性能和功耗</li>
                  <li>提供完整的开发工具链和SDK，方便开发者快速上手</li>
                </ul>
              </div>
            </div>

            <div className="feature-section">
              <div className="feature-image">
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  多模态交互系统
                </div>
              </div>
              <div className="feature-text">
                <h3>多模态交互系统</h3>
                <p>
                  我们的智能硬件方案集成了先进的多模态交互系统，支持语音、触摸、手势、视觉等多种交互方式，
                  为用户提供自然、便捷的交互体验。
                </p>
                <ul className="feature-details">
                  <li>支持离线语音识别和处理，无需依赖云端</li>
                  <li>具备环境噪声抑制和回声消除能力</li>
                  <li>支持手势识别和动作感应</li>
                  <li>支持人脸识别和物体检测</li>
                </ul>
              </div>
            </div>

            <div className="feature-section">
              <div className="feature-image">
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  安全可靠的连接方案
                </div>
              </div>
              <div className="feature-text">
                <h3>安全可靠的连接方案</h3>
                <p>
                  我们的智能硬件方案提供了安全可靠的连接功能，支持Wi-Fi、蓝牙、ZigBee等多种通信协议，
                  确保设备间的数据传输安全稳定。
                </p>
                <ul className="feature-details">
                  <li>支持最新的加密标准，保障数据传输安全</li>
                  <li>具备自动重连和断线续传功能</li>
                  <li>支持本地网络和云端数据同步</li>
                  <li>提供完善的设备管理和固件升级机制</li>
                </ul>
              </div>
            </div>

            <div className="feature-section">
              <div className="feature-image">
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  智能电源管理
                </div>
              </div>
              <div className="feature-text">
                <h3>智能电源管理</h3>
                <p>
                  我们的智能硬件方案采用了先进的电源管理技术，能够根据设备运行状态和用户使用习惯，
                  智能调整功耗，延长电池续航时间。
                </p>
                <ul className="feature-details">
                  <li>支持多种低功耗模式，如休眠、待机等</li>
                  <li>具备智能唤醒功能，支持语音、触摸等唤醒方式</li>
                  <li>提供电池电量监测和健康管理</li>
                  <li>支持快速充电和无线充电</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 应用场景 */}
          <div className="applications-content fade-in-section" id="applications">
            <h2>应用场景</h2>
            <div className="applications-grid">
              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    智能家居
                  </div>
                </div>
                <div className="application-text">
                  <h3>智能家居</h3>
                  <p>
                    为智能家居设备提供语音控制、自动化控制和远程管理功能，
                    打造舒适、便捷、节能的智慧生活环境。
                  </p>
                </div>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    智能汽车
                  </div>
                </div>
                <div className="application-text">
                  <h3>智能汽车</h3>
                  <p>
                    为汽车提供语音交互、手势控制、驾驶员监测和智能辅助驾驶功能，
                    提升驾驶安全性和舒适性。
                  </p>
                </div>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    工业物联网
                  </div>
                </div>
                <div className="application-text">
                  <h3>工业物联网</h3>
                  <p>
                    为工业设备提供智能监测、预测性维护和自动化控制功能，
                    提高生产效率和降低运营成本。
                  </p>
                </div>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    智能教育
                  </div>
                </div>
                <div className="application-text">
                  <h3>智能教育</h3>
                  <p>
                    为教育设备提供语音交互、图像识别和智能辅导功能，
                    打造个性化、互动化的学习体验。
                  </p>
                </div>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #fda4af 0%, #f97316 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    智能安防
                  </div>
                </div>
                <div className="application-text">
                  <h3>智能安防</h3>
                  <p>
                    为安防设备提供人脸识别、行为分析和异常检测功能，
                    提升安全性和监控效率。
                  </p>
                </div>
              </div>

              <div className="application-item">
                <div className="application-image">
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    智慧医疗
                  </div>
                </div>
                <div className="application-text">
                  <h3>智慧医疗</h3>
                  <p>
                    为医疗设备提供智能监测、辅助诊断和远程医疗功能，
                    提高医疗服务质量和可及性。
                  </p>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default IntelligentHardwareSolution;