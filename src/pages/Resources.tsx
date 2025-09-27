import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function Resources() {
  // 资料下载数据
  const resources = [
    {
      id: "solution-docs",
      category: "方案资料",
      title: "深聆智能语音交互解决方案白皮书",
      description: "详细介绍深聆智能语音交互解决方案的技术原理、架构设计和应用场景",
      format: "PDF",
      size: "2.5 MB",
      date: "2025-01-15",
      icon: "fa-file-pdf"
    },
    {
      id: "product-manual",
      category: "产品资料",
      title: "语音遥控器用户手册",
      description: "深聆智能语音遥控器的安装、配置和使用指南",
      format: "PDF",
      size: "1.2 MB",
      date: "2025-02-20",
      icon: "fa-file-pdf"
    },
    {
      id: "api-docs",
      category: "开发资料",
      title: "语音识别API接口文档",
      description: "深聆智能语音识别API接口的详细说明和调用示例",
      format: "ZIP",
      size: "3.8 MB",
      date: "2025-03-10",
      icon: "fa-file-archive"
    },
    {
      id: "sdk-docs",
      category: "开发资料",
      title: "语音交互SDK开发指南",
      description: "深聆智能语音交互SDK的集成文档和开发示例",
      format: "PDF",
      size: "2.1 MB",
      date: "2025-03-25",
      icon: "fa-file-pdf"
    },
    {
      id: "case-study",
      category: "案例研究",
      title: "智能家居语音交互解决方案案例研究",
      description: "深聆智能语音交互解决方案在智能家居领域的应用案例分析",
      format: "PDF",
      size: "4.2 MB",
      date: "2025-04-05",
      icon: "fa-file-pdf"
    },
    {
      id: "technical-spec",
      category: "产品资料",
      title: "智能语音模块技术规格书",
      description: "深聆智能语音模块的详细技术参数和规格说明",
      format: "PDF",
      size: "1.8 MB",
      date: "2025-04-20",
      icon: "fa-file-pdf"
    }
  ];
  
  // 技术文章数据
  const articles = [
    {
      id: "article-1",
      title: "语音识别技术的发展趋势与应用前景",
      summary: "分析当前语音识别技术的发展现状、未来趋势以及在各行业的应用前景",
      author: "技术部",
      date: "2025-03-18",
      readTime: "8 分钟",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Voice%20recognition%20technology%20trends&sign=413047a74332d8e30d519ad42c8ecfd8"
    },
    {
      id: "article-2",
      title: "如何为传统设备快速集成语音交互功能",
      summary: "介绍为传统家电、工业设备等集成语音交互功能的最佳实践和注意事项",
      author: "解决方案部",
      date: "2025-04-02",
      readTime: "6 分钟",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Integrating%20voice%20interaction%20into%20devices&sign=43de2d9f36de8086f48e9d6cab8cc159"
    },
    {
      id: "article-3",
      title: "语音交互系统的用户体验设计原则",
      summary: "探讨智能语音交互系统的用户体验设计原则和方法，提升产品易用性",
      author: "UX设计部",
      date: "2025-04-22",
      readTime: "10 分钟",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Voice%20interaction%20UX%20design&sign=45d48f14b85ea245160a234d977fc8e3"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">资源中心</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            提供深聆智能解决方案和产品的相关资料、技术文档、案例研究和开发资源
          </p>
        </div>
      </section>
      
      {/* 资源导航 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "资料下载",
              description: "解决方案白皮书、产品手册、技术规格书等资料下载",
              icon: "fa-download",
              link: "/resources/download"
            },
            {
              title: "技术论坛",
              description: "开发者交流社区，分享技术经验和解决方案",
              icon: "fa-comments",
              link: "/resources/forum"
            },
            {
              title: "样机申购",
              description: "申请深聆智能产品样机进行测试和评估",
              icon: "fa-box-open",
              link: "/resources/sample"
            },
            {
              title: "企业媒体",
              description: "公司新闻、产品发布、活动报道等企业动态",
              icon: "fa-newspaper",
              link: "/resources/media"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-5">
                <i className={`fa-solid ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5">{item.description}</p>
              <Link 
                to={item.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                进入 {item.title} <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* 资料下载 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">资料下载</h2>
            <p className="text-gray-600">获取深聆智能解决方案和产品的相关资料</p>
          </div>
          <Link 
            to="/resources/download"
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            查看全部资料 <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    资料名称
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    分类
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    格式
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    发布日期
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resources.slice(0, 5).map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center text-blue-600">
                          <i className={`fa-solid ${resource.icon}`}></i>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">{resource.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {resource.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {resource.format} ({resource.size})
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {resource.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">
                        下载
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* 技术文章 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">技术文章</h2>
            <p className="text-gray-600">分享语音交互技术的最新发展和应用实践</p>
          </div>
          <Link 
            to="/resources/forum"
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            查看全部文章 <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}阅读</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-5">{article.summary}</p>
                
                <Link 
                  to="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  阅读全文 <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 开发者资源 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">开发者资源</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            为开发者提供丰富的资源和工具，加速语音交互功能的集成和开发
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "API文档",
                description: "详细的API接口文档，帮助开发者快速集成语音识别功能",
                link: "#"
              },
              {
                title: "SDK下载",
                description: "多平台SDK开发包，包含示例代码和开发工具",
                link: "#"
              },
              {
                title: "开发指南",
                description: "从入门到精通的开发教程，帮助开发者解决集成过程中的问题",
                link: "#"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <i className={`fa-solid ${["fa-code", "fa-download", "fa-book"][index]} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a 
                  href={item.link}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  访问资源中心
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}