import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交延迟
    setTimeout(() => {
      toast.success('表单提交成功！我们将尽快与您联系。');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  // 常见问题数据
  const faqs = [
    {
      question: "深聆智能的语音识别准确率是多少？",
      answer: "深聆智能的语音识别算法在标准环境下准确率可达98%以上，在噪声环境下也能保持较高的识别率。我们持续优化算法，不断提升识别准确率和鲁棒性。"
    },
    {
      question: "如何开始集成深聆智能的语音解决方案？",
      answer: "集成深聆智能的语音解决方案非常简单。您可以联系我们的销售团队获取评估版SDK或硬件模块，我们提供详细的开发文档和技术支持，帮助您快速完成集成。"
    },
    {
      question: "深聆智能的解决方案支持哪些语言和方言？",
      answer: "目前我们支持普通话、英语、日语、韩语等多种语言，同时支持粤语、四川话、上海话等多种汉语方言识别。我们可以根据客户需求定制特定语言和方言的识别模型。"
    },
    {
      question: "是否提供离线语音识别功能？",
      answer: "是的，深聆智能提供离线语音识别解决方案，支持在无网络环境下进行基本的语音指令识别。对于复杂的语音识别任务，我们也提供本地+云端混合识别方案。"
    }
  ];
  
  return (
    <Layout className="py-16">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 mt-18 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            无论您是想了解更多关于我们的产品和解决方案，还是寻求合作机会，我们都期待与您联系
          </p>
        </div>
      </section>
      
      {/* 联系信息 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "公司地址",
              content: "浙江省杭州市滨江区越达巷82号房天下大厦6楼",
              icon: "fa-map-marker-alt"
            },
            {
              title: "联系电话",
              content: "18626895139",
              subcontent: "周一至周五 9:00-18:00",
              icon: "fa-phone"
            },
            {
              title: "电子邮箱",
              content: "support@deeplien.cn",
              subcontent: "24小时内回复",
              icon: "fa-envelope"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <i className={`fa-solid ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.content}</p>
              {item.subcontent && <p className="text-gray-500 text-sm">{item.subcontent}</p>}
            </div>
          ))}
        </div>
      </section>
      
      {/* 联系表单和地图 */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">请选择...</option>
                  <option value="solution">解决方案咨询</option>
                  <option value="product">产品购买咨询</option>
                  <option value="cooperation">商务合作</option>
                  <option value="support">技术支持</option>
                  <option value="other">其他问题</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '发送中...' : '发送消息'}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="h-64 bg-gray-200 flex items-center justify-center mb-8">
                {/* 这里使用图片代替实际地图 */}
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Office%20building%20location%20map&sign=2eb9b04b68eef947a9aac86a7193bcde" 
                  alt="公司位置地图" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 合作伙伴 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">合作伙伴</h2>
          <p className="text-gray-600 mb-12 text-center">深聆智能与众多行业领先企业建立了战略合作关系</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-bold">合作伙伴 {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}