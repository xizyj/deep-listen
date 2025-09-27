import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-10">
            <i className="fa-solid fa-exclamation-triangle text-5xl"></i>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">页面未找到</h1>
          <p className="text-lg text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移动。请检查您输入的URL或返回首页。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              返回首页
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-md transition-colors"
            >
              联系我们
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">热门链接</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "解决方案", link: "/solutions" },
                { label: "产品介绍", link: "/products" },
                { label: "行业应用", link: "/industries" },
                { label: "资源中心", link: "/resources" },
                { label: "关于我们", link: "/about" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.link}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}