import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

interface SubMenu {
  title: string;
  path: string;
}

interface MenuItem {
  title: string;
  path: string;
  subMenus?: SubMenu[];
}

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 定义菜单项 - 只包含实际存在的页面
  const menuItems: MenuItem[] = [
    {
      title: '解决方案',
      path: '/solutions',
      subMenus: [
        {
          title: '软件算法方案',
          path: '/solutions'
        },
        {
          title: '智能硬件方案',
          path: '/solutions/intelligent-hardware-solution'
        },
        {
          title: '设备云平台解决方案',
          path: '/solutions'
        }
      ]
    },
    {
      title: '智能产品',
      path: '/products',
      subMenus: [
        {
          title: '语音门锁',
          path: '/products#voice-lock'
        },
        {
          title: '语音遥控器',
          path: '/products#voice-remote'
        },
        {
          title: '语音风扇',
          path: '/products#voice-fan'
        },
        {
          title: '语音面板',
          path: '/products#voice-panel'
        },
        {
          title: '智能拾音器',
          path: '/products#smart-microphone'
        },
        {
          title: '语音智能体',
          path: '/products#voice-agent'
        }
      ]
    },
      {
        title: '行业应用',
        path: '/industry-applications',
        subMenus: [
          {
            title: '智能工业',
            path: '/industry-applications#smart-industry'
          },
          {
            title: '智能工具',
            path: '/industry-applications#smart-tools'
          },
          {
            title: '智能安防',
            path: '/industry-applications#smart-security'
          },
          {
            title: '智能家居家电',
            path: '/industry-applications#smart-home-appliance'
          },
          {
            title: '智能消费电子',
            path: '/industry-applications#smart-consumer-electronics'
          }
        ]
      },
    // {
    //   title: '资源中心',
    //   path: '/resource-center',
    //   subMenus: [
    //     {
    //       title: '资料下载',
    //       path: '/resource-center#documents'
    //     },
    //     {
    //       title: '技术支持',
    //       path: '/resource-center#technical-support'
    //     },
    //     {
    //       title: '开发者社区',
    //       path: '/resource-center#developer-community'
    //     }
    //   ]
    // },
    {      title: '关于我们',
      path: '/about/company',
      subMenus: [
        {          title: '公司简介',
          path: '/about/company'
        },
        {          title: '团队介绍',
          path: '/about/team'
        },
        // {          title: '新闻动态',
        //   path: '/about/news'
        // },
        {          title: '联系我们',
          path: '/contact'
        }
      ]
    }
  ];

  // 处理菜单项悬停
  const handleMenuHover = (title: string | null) => {
    setActiveMenu(title);
  };

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <h1>
            <img style={{ width: '150px',verticalAlign: 'middle',marginRight: '8px'}} src='/logo.png' alt="深聆科技" />
              深聆科技</h1>
          </Link>
        </div>
        
        {/* 桌面端导航 */}
        <div className="navbar-desktop">
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li 
                key={item.title} 
                className={`navbar-item ${activeMenu === item.title ? 'active' : ''}`}
                onMouseEnter={() => handleMenuHover(item.title)}
                onMouseLeave={() => handleMenuHover(null)}
              >
                <Link to={item.path} className="navbar-link">
                  {item.title}
                </Link>
                
                {item.subMenus && (
                  <div 
                    className={`navbar-dropdown ${activeMenu === item.title ? 'show' : ''}`}
                  >
                    <div className="navbar-dropdown-content">
                      {item.subMenus.map((subMenu) => (
                        <div key={subMenu.title} className="navbar-dropdown-item">
                          <Link to={subMenu.path} className="navbar-dropdown-link">
                            <h4>{subMenu.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="navbar-mobile-toggle">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            <span className={`menu-icon-bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`menu-icon-bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`menu-icon-bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
        
        {/* 移动端菜单 */}
        <div 
          className={`navbar-mobile ${isMobileMenuOpen ? 'open' : ''}`}
          ref={mobileMenuRef}
        >
          <ul className="mobile-menu">
            {menuItems.map((item) => (
              <li key={item.title} className="mobile-menu-item">
                <Link 
                  to={item.path} 
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                
                {item.subMenus && (
                  <div className="mobile-submenu">
                    {item.subMenus.map((subMenu) => (
                      <Link 
                        key={subMenu.title} 
                        to={subMenu.path} 
                        className="mobile-submenu-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;