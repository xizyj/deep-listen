import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { websiteData } from '@/data/websiteData';

// 导航菜单组件
const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭所有下拉菜单
  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  // 切换下拉菜单
  const toggleMenu = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DL</span>
            </div> */}
              <img className='h-10' src="/img/logo.png" alt="" />
            <span className={`text-xl font-bold text-gray-700 hidden sm:block`}>深聆智能</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {websiteData.mainNav.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  className={`flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors py-2`}
                  onClick={() => toggleMenu(item.id)}
                >
                  {item.label}
                  {item.children && (
                    <i className="fa-solid fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                  )}
                </button>

                {/* 下拉菜单 */}
                {item.children && (
                  <div 
                    className={cn(
                      "absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100",
                      activeMenu === item.id ? "opacity-100 visible scale-100" : ""
                    )}
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {item.children.map((child) => (
                      // <Link
                      //   key={child.id}
                      //   to={child.path}
                      //   className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors`}
                      //   onClick={closeAllMenus}
                      // >
                      //   {child.label}
                      // </Link>
                      <span
                        key={child.id}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors`}
                      >
                         {child.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 联系按钮 */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              联系我们
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {websiteData.mainNav.map((item) => (
              <div key={item.id} className="border-b border-gray-100">
                <div className="flex items-center justify-between py-2">
                  <button 
                    className="text-left text-gray-700 font-medium w-full flex items-center justify-between"
                    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                  >
                    <span>{item.label}</span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`}></i>
                  </button>
                </div>
                
                {item.children && activeMenu === item.id && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        to={child.path}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                        onClick={() => {
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-3">
              <Link 
                to="/contact" 
                className="block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-center transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavMenu;