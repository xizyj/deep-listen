import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function Products() {
  // 产品数据
  const products = [
    {
      id: "voice-remote",
      title: "语音遥控器",
      description: "智能语音遥控器，支持语音控制各类家电设备，解放双手，便捷操控。",
      features: ["远场语音识别", "多设备控制", "离线语音指令", "学习功能"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Smart%20voice%20remote%20control&sign=828ddb29bd49b69dfed896576d29af83"
    },
    {
      id: "voice-fan",
      title: "语音风扇",
      description: "集成语音识别功能的智能风扇，支持语音控制开关、风速、模式等。",
      features: ["语音控制", "多档风速", "自然风模式", "低噪运行"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Smart%20voice%20controlled%20fan&sign=64d0b790bc0b28a41977bb03b4c582c2"
    },
    {
      id: "voice-panel",
      title: "语音面板",
      description: "智能语音控制面板，可嵌入墙壁或家具，实现对智能家居系统的集中控制。",
      features: ["语音交互", "触摸控制", "场景模式", "联动控制"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Smart%20voice%20control%20panel&sign=1f83751940e803fa47323268cba08070"
    },
    {
      id: "smart-speaker",
      title: "智能语音箱",
      description: "高性能智能语音箱，支持语音交互、音乐播放、信息查询等多种功能。",
      features: ["360°语音识别", "高品质音效", "智能家居控制", "内容服务"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Smart%20voice%20speaker&sign=f7f1dabe2109cdd6080e2afa3f0a55ee"
    },
    {
      id: "voice-body",
      title: "语音智能体",
      description: "模块化语音智能处理单元，可集成到各类设备中，提供核心语音交互能力。",
      features: ["小尺寸设计", "低功耗", "高性能识别", "易于集成"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Voice%20processing%20module&sign=63932c3c4f9158fb111c681bfbdeb994"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">产品介绍</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            深聆智能提供一系列集成语音识别技术的智能产品，为用户带来便捷、智能的交互体验
          </p>
        </div>
      </section>
      
      {/* 产品列表 */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">产品系列</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-5">{product.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-900 mb-2">核心功能</h4>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  查看详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 产品特点 */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">我们的产品优势</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            深聆智能产品融合先进的语音识别技术，为用户提供卓越的智能交互体验
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fa-solid fa-microphone text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">精准识别</h3>
              <p className="text-gray-600">98%以上的语音识别准确率，支持多种方言和口音</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fa-solid fa-wifi text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">远场交互</h3>
              <p className="text-gray-600">5-10米远距离语音识别，无需靠近设备即可操控</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fa-solid fa-cloud text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">云边协同</h3>
              <p className="text-gray-600">云端AI能力与本地处理相结合，兼顾识别率和响应速度</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fa-solid fa-cogs text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">灵活定制</h3><p className="text-gray-600">支持定制唤醒词、指令集和对话流程，满足个性化需求</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 应用场景 */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">应用场景</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          深聆智能产品广泛应用于家庭、办公、酒店等多种场景
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "智慧家庭",
              description: "打造全屋智能语音交互系统，实现家电、照明、安防等设备的语音控制",
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20home%20with%20voice%20control&sign=4c9cea5c6708b8e604d2ec045081bb4f"
            },
            {
              title: "智能办公",
              description: "提升办公效率，通过语音控制会议设备、查询信息、设置日程等",
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20office%20with%20voice%20assistant&sign=51c9ae362ffa5796b63d9f83b26bde8d"
            },
            {
              title: "智慧酒店",
              description: "为酒店客房提供智能语音交互服务，提升客户体验和运营效率",
              imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20hotel%20room%20with%20voice%20control&sign=e6a76e537832014086c5c70d7f57f2fe"
            }
          ].map((scenario, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={scenario.imageUrl} 
                  alt={scenario.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className="container mx-auto px-4 py-16 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">对我们的产品感兴趣？</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          联系我们获取产品手册或申请样品测试
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            联系销售
          </Link>
          <Link 
            to="/resources/download"
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            下载产品手册
          </Link>
        </div>
      </section>
    </Layout>
  );
}