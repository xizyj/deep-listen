import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { websiteData } from '@/data/websiteData';

export default function Solutions() {
  const { software } = websiteData.solutions;
  
  // 解决方案数据
  const solutionTypes = [
    {
      id: "software-solution",
      title: "软件算法方案",
      description: "通过纯软件升级的方案赋能传统设备智能化语音识别交互能力，无需硬件改动。",
      features: ["中文语音识别", "外文语音识别", "特定声音识别", "低资源占用"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Software%20solution%20for%20voice%20recognition%20system&sign=74aec7bc348aa25703da2772bef9b4f4"
    },
    {
      id: "hardware-solution",
      title: "智能硬件方案",
      description: "在设备中嵌入智能模块，提供单Mic和多Mic识别模组方案，赋能智能交互能力。",
      features: ["单Mic识别模组方案", "多Mic识别模组方案", "贴片模块", "端子模块"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20hardware%20module%20for%20voice%20interaction&sign=f71d227c51a2ce0f5cbeb31f97326580"
    },
    {
      id: "cloud-platform",
      title: "设备云平台方案",
      description: "提供设备管理云平台，实现设备远程管理、智能配置和数据分析。",
      features: ["设备状态监控", "远程配置管理", "数据分析报表", "OTA升级"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Cloud%20platform%20for%20device%20management&sign=a7ddcfc414d4711f2f8f0f99b24bef1a"
    },
    {
      id: "online-speech",
      title: "在线语音方案",
      description: "基于云端的语音识别解决方案，提供高精度、多语种的语音识别能力。",
      features: ["单mic物联网语音模块", "云端语音处理", "实时语音转文字", "语音指令识别"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Online%20voice%20recognition%20technology&sign=b70fedc4bd8bc7200daad7084d0b8057"
    },
    {
      id: "local-online-speech",
      title: "本地+在线语音方案",
      description: "结合本地识别和云端处理的混合语音解决方案，兼顾响应速度和识别精度。",
      features: ["单mic物联网语音模块", "多mic物联网语音模块", "本地离线识别", "云端增强识别"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Hybrid%20local%20and%20online%20voice%20solution&sign=9c98df06568338d4f136d26a9cfd7e4b"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">方案介绍</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            深聆智能提供全方位的智能语音交互解决方案，满足不同设备和场景的需求，帮助客户快速实现产品智能化升级
          </p>
        </div>
      </section>
      
      {/* 解决方案概述 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">智能语音交互解决方案</h2>
          <p className="text-lg text-gray-700 mb-8">
            深聆智能解决方案通过纯软件升级或硬件模块集成的方式，为传统设备赋能智能化语音识别交互能力。我们的方案具有识别准确率高、集成便捷、成本优化等特点，已广泛应用于智能家居、工业控制、消费电子等多个领域。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <i className="fa-solid fa-microchip text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">技术领先</h3>
              <p className="text-gray-600">自主研发的语音识别算法，识别准确率达98%以上，支持多语种识别</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <i className="fa-solid fa-cubes text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">灵活部署</h3>
              <p className="text-gray-600">提供纯软件升级和硬件模块集成两种方案，满足不同客户需求</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <i className="fa-solid fa-rocket text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">快速集成</h3>
              <p className="text-gray-600">标准化API接口和SDK，客户可在7-15天内完成产品集成</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 解决方案类型 */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">解决方案类型</h2>
        
        {solutionTypes.map((solution) => (
          <div key={solution.id} className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img 
                  src={solution.imageUrl} 
                  alt={solution.title} 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{solution.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">核心功能</h4>
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fa-solid fa-check text-blue-600 mr-3"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <Link 
                  to={`/solutions/${solution.id}`}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  了解详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* 应用场景 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">应用场景</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            深聆智能解决方案已广泛应用于多个领域，为不同行业客户创造价值
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["智能家居", "智能工业", "智能安防", "消费电子", "智能工具", "医疗设备", "车载系统", "机器人"].map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <i className="fa-solid fa-industry text-xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900">{scenario}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">需要定制化解决方案？</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          我们的专家团队将根据您的具体需求，为您提供量身定制的智能语音交互解决方案
        </p>
        <Link 
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
        >
          联系我们获取方案
        </Link>
      </section>
    </Layout>
  );
}