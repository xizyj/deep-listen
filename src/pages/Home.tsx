import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { websiteData } from '@/data/websiteData';

export default function Home() {
  const { hero, about, coreAdvantages, featuredSolutions, industries, testimonials } = websiteData.home;
  
  return (
    <Layout>
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span dangerouslySetInnerHTML={{ __html: hero.title }}></span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg">
                {hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={hero.ctaLink}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {hero.ctaText}
                </Link>
                <Link 
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
                >
                  联系我们
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-t from-blue-400 to-purple-500 rounded-lg blur opacity-30 animate-blob"></div>
                <img 
                  src={hero.imageUrl} 
                  alt="智能语音交互技术" 
                  className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* 关于我们 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src={about.imageUrl} 
                alt="关于深聆智能" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {about.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {about.content}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-600 mb-2">50+</span>
                  <span className="text-gray-600">技术研发人员</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-600 mb-2">100+</span>
                  <span className="text-gray-600">成功案例</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-600 mb-2">98%</span>
                  <span className="text-gray-600">语音识别准确率</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-blue-600 mb-2">30+</span>
                  <span className="text-gray-600">合作伙伴</span>
                </div>
              </div>
              
              <Link 
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                了解更多公司信息
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 核心优势 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心优势</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              深聆智能凭借领先的技术实力和丰富的行业经验，为客户提供卓越的智能语音交互解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <i className={`fa-solid ${advantage.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 解决方案展示 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">解决方案</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们提供全方位的智能语音交互解决方案，满足不同场景和需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => (
              <div 
                key={solution.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={solution.imageUrl} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <Link 
                        to={solution.link}
                        className="text-white font-medium inline-flex items-center"
                      >
                        查看详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/solutions"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg border-b-2 border-blue-600 pb-1"
            >
              查看全部解决方案 <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 行业应用 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">行业应用</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              深聆智能解决方案已广泛应用于多个行业领域，为客户创造价值
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <i className={`fa-solid ${industry.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 客户评价 */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              听听我们的客户如何评价深聆智能的产品和服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 shadow-sm relative"
              >
                <div className="text-5xl text-blue-200 absolute top-4 left-4 opacity-50">"</div>
                <blockquote className="relative z-10">
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <footer>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA区域 */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好为您的产品赋能智能语音交互能力了吗？</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            联系我们，获取专属解决方案，让您的产品在智能化浪潮中脱颖而出
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </Layout>
  );
}