import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function About() {
  // 团队成员数据
  const teamMembers = [
    {
      name: "张明",
      position: "创始人 & CEO",
      description: "前阿里巴巴资深工程师，拥有10年以上人工智能和语音识别领域研发经验",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20male%20CEO%2C%20professional%20business%20style&sign=78e25c5a6b28acb5901e2a002fc251f2"
    },
    {
      name: "李华",
      position: "技术总监",
      description: "前百度语音技术负责人，在语音识别算法和自然语言处理领域有深入研究",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20male%20CTO%2C%20technical%20expert%20style&sign=b881851c53ce6fada56499402f5f334b"
    },
    {
      name: "王芳",
      position: "产品总监",
      description: "前华为产品经理，拥有丰富的智能硬件产品规划和设计经验",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20female%20product%20director%2C%20professional%20style&sign=29c665e56fa088f35b16f14c1a2b43cf"
    },
    {
      name: "赵强",
      position: "市场总监",
      description: "前腾讯市场部经理，在科技产品市场营销和品牌建设方面经验丰富",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20male%20marketing%20director%2C%20professional%20style&sign=cec8acfc1ceb1c5076ab3ecbf119eac2"
    }
  ];
  
  // 发展历程数据
  const timeline = [
    {
      year: "2022",
      event: "公司成立，获得天使轮融资"
    },
    {
      year: "2023",
      event: "发布第一代语音识别SDK，签约首批合作伙伴"
    },
    {
      year: "2024",
      event: "完成A轮融资，推出智能硬件模块产品系列"
    },
    {
      year: "2025",
      event: "建立全国销售网络，合作伙伴超过100家"
    }
  ];
  
  // 新闻动态数据
  const news = [
    {
      title: "深聆智能完成B轮融资，估值达10亿元",
      date: "2025-05-10",
      summary: "深聆智能宣布完成1亿元B轮融资，本轮融资将用于技术研发和市场拓展",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20news%20announcement%20finance%20concept&sign=44626ce2a80978b260d3aacb62563abc"
    },
    {
      title: "深聆智能与美的达成战略合作，共同推进智能家居语音交互",
      date: "2025-04-15",
      summary: "双方将在智能家居领域展开深度合作，共同开发新一代智能语音交互产品",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20home%20collaboration%20announcement&sign=09f0127ffa00869997af011612e1fd4a"
    },
    {
      title: "深聆智能发布新一代语音识别芯片，性能提升50%",
      date: "2025-03-22",
      summary: "公司最新发布的语音识别芯片在识别准确率和响应速度上均有显著提升",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=New%20semiconductor%20chip%20product%20release&sign=1c1b2a05110f09d49cf915f6bd33b7ca"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            深聆智能是一家专注于智能语音交互技术研发与应用的高科技企业，致力于为传统设备赋能智能化语音识别交互能力
          </p>
        </div>
      </section>
      
      {/* 公司简介 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">公司简介</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              浙江深聆智能科技有限公司成立于2021年，是一家专注于智能语音交互技术研发与应用的高科技企业。公司核心团队来自阿里巴巴、百度、腾讯等知名科技企业，拥有丰富的人工智能和语音识别领域研发经验。
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              深聆智能致力于通过纯软件升级或硬件模块集成的方式，为传统设备赋能智能化语音识别交互能力，帮助客户快速实现产品智能化升级。公司产品和解决方案已广泛应用于智能家居、工业控制、消费电子等多个领域。
            </p>
            <p className="text-gray-700 leading-relaxed">
              秉承"务实行业价值，真诚成就伙伴"的经营理念，深聆智能为社会、客户、员工、股东谋求融合合作，致力于成为语音及智能人机交互方案领导者。
            </p>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="/img/introduction.png" 
              alt="深聆智能团队" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* 发展历程 */}
      {/* <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">发展历程</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-16 relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 md:pr-12 md:text-right ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                  
                  <div className="z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  <div className={`md:w-1/2 md:pl-12 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      {/* 核心团队 */}
      {/* <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">核心团队</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          深聆智能拥有一支经验丰富的核心团队，在人工智能和语音识别领域拥有深厚的技术积累
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      
      {/* 企业文化 */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">企业文化</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            深聆智能秉承"务实行业价值，真诚成就伙伴"的经营理念，以科技创新为行业创造价值
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "经营理念",
                content: "务实行业价值，真诚成就伙伴",
                icon: "fa-lightbulb"
              },
              {
                title: "价值观",
                content: "落实行业价值，真诚成就伙伴",
                icon: "fa-heart"
              },
              {
                title: "愿景",
                content: "语音及智能人机交互方案领导者",
                icon: "fa-eye"
              },
              {
                title: "使命",
                content: "以科技创新为行业创造价值",
                icon: "fa-rocket"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 italic">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 新闻动态 */}
      {/* <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">新闻动态</h2>
            <p className="text-gray-600">公司最新动态和行业资讯</p>
          </div>
          <Link 
            to="/about/news"
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            查看全部新闻 <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.summary}</p>
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
      </section> */}
      
      {/* 联系我们 */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">与我们合作</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            无论您是想了解更多关于我们的产品和解决方案，还是寻求合作机会，我们都期待与您联系
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </Layout>
  );
}