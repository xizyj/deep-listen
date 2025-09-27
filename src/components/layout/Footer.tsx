import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 公司简介 */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DL</span>
              </div> */}
              <img src="/img/logo.png" className='h-10' alt="" />
              <span className="text-xl font-bold">深聆科技</span>
            </div>
            <p className="text-gray-400 mb-6">
              专注于智能语音交互技术的研发与应用，为传统设备赋能智能化语音识别交互能力，致力于成为语音及智能人机交互方案领导者。
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
            </div> */}
          </div>

          {/* 快速链接 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">方案介绍</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">产品介绍</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">行业应用</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">资源中心</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
            </ul>
          </div> */}

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-blue-500 mt-1 mr-3"></i>
                <span className="text-gray-400">浙江省杭州市滨江区越达巷82号房天下大厦6楼</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-blue-500 mr-3"></i>
                <span className="text-gray-400">18626895139</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-blue-500 mr-3"></i>
                <span className="text-gray-400">support@deeplisten.cn</span>
              </li>
            </ul>
          </div>

          {/* 订阅通讯 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">订阅通讯</h3>
            <p className="text-gray-400 mb-4">订阅我们的通讯，获取最新产品和技术资讯</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  订阅
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              订阅即表示您同意我们的隐私政策和服务条款
            </p>
          </div> */}
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 浙江深聆科技有限公司. 保留所有权利. 浙ICP备2025193072号-1
            </p>
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">网站地图</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;