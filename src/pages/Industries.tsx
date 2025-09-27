import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function Industries() {
  // 行业数据
  const industries = [
    {
      id: "smart-industry",
      title: "智能工业",
      description: "为工业设备提供语音控制解决方案，提高生产效率，降低操作复杂度，保障生产安全。",
      applications: ["设备语音控制", "生产流程语音导航", "故障语音报警", "远程语音诊断"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20industry%20with%20voice%20control&sign=c0199e42ec968d7309faecc21b7b45bd"
    },
    {
      id: "smart-tool",
      title: "智能工具",
      description: "为各类专业工具集成语音交互功能，解放双手操作，提升工作效率和安全性。",
      applications: ["手持工具语音控制", "测量数据语音播报", "操作步骤语音指导", "安全规范语音提醒"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20tools%20with%20voice%20control&sign=8b2313b0e5df579ecec4c29feae44363"
    },
    {
      id: "smart-security",
      title: "智能安防",
      description: "为安防设备添加语音交互能力，实现语音布防撤防、状态查询和异常报警等功能。",
      applications: ["语音控制安防设备", "异常情况语音报警", "远程语音监听", "语音身份验证"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20security%20system%20with%20voice%20control&sign=0545c0e82560d678536d61c7825cf593"
    },
    {
      id: "smart-home",
      title: "智能家居家电",
      description: "为家电产品提供语音交互解决方案，打造智能、便捷、舒适的现代化家居体验。",
      applications: ["家电语音控制", "场景模式语音激活", "设备状态语音查询", "语音购物"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20home%20appliances%20with%20voice%20control&sign=a8bf183e0b15b2945c072987506c52df"
    },
    {
      id: "smart-consumer",
      title: "智能消费电子",
      description: "为各类消费电子产品添加智能语音交互功能，提升产品竞争力和用户体验。",
      applications: ["可穿戴设备语音交互", "智能玩具语音对话", "健康设备语音报告", "娱乐设备语音控制"],
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Smart%20consumer%20electronics%20with%20voice%20control&sign=127400215277feae04c6542f9d760f6e"
    }
  ];
  
  // 案例数据
  const cases = [
    {
      title: "某知名家电企业智能冰箱语音交互方案",
      industry: "智能家居家电",
      description: "为冰箱产品集成语音识别功能，实现食材管理、菜谱查询、天气播报等功能，提升产品智能化水平。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20refrigerator%20with%20voice%20control&sign=91ebf7aea5faa790249600025ba0eb03"
    },
    {
      title: "某工业设备制造商智能机床语音控制方案",
      industry: "智能工业",
      description: "为数控机床开发语音控制解决方案，实现加工参数语音设置、加工状态语音查询等功能，提高操作安全性。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20CNC%20machine%20with%20voice%20control&sign=faf28a8075f907338220bb3f27356586"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">行业应用</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            深聆科技解决方案已广泛应用于多个行业领域，为不同行业客户提供专业的语音交互解决方案
          </p>
        </div>
      </section>
      
      {/* 行业列表 */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">行业解决方案</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.imageUrl} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-5">{industry.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-900 mb-2">主要应用</h4>
                <ul className="space-y-2 mb-6">
                  {industry.applications.map((app, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fa-solid fa-angle-right text-blue-600 mr-2"></i>
                      <span className="text-gray-600 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/industries/${industry.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  了解行业方案 <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 成功案例 */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">成功案例</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            深聆科技已为众多行业客户提供成功的语音交互解决方案
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {cases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {caseItem.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-6">{caseItem.description}</p>
                    
                    <Link 
                      to="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      查看案例详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="#"
              className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              查看更多案例 <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 行业价值 */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">为行业创造价值</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          深聆科技解决方案为不同行业客户带来显著价值提升
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "提升用户体验",
              description: "通过自然语音交互，简化操作流程，提升产品使用体验和用户满意度",
              icon: "fa-smile"
            },
            {
              title: "提高生产效率",
              description: "解放双手操作，减少操作步骤，提高工作效率和生产力",
              icon: "fa-tachometer-alt"
            },
            {
              title: "降低使用门槛",
              description: "语音交互降低产品使用难度，使各类人群都能轻松使用智能设备",
              icon: "fa-universal-access"
            },
            {
              title: "增加产品竞争力",
              description: "为产品添加智能语音交互功能，提升产品差异化竞争力",
              icon: "fa-trophy"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className={`fa-solid ${value.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">寻找适合您行业的语音交互解决方案？</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            联系我们的行业专家，获取定制化解决方案咨询
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            咨询行业专家
          </Link>
        </div>
      </section>
    </Layout>
  );
}