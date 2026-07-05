import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
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

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      title: '解决方案',
      path: ROUTES.solutions,
      subMenus: [
        { title: '软件算法方案', path: ROUTES.softwareSolution },
        { title: '智能硬件方案', path: ROUTES.intelligentHardwareSolution },
        { title: '设备云平台解决方案', path: ROUTES.deviceCloudPlatformSolution },
      ],
    },
    {
      title: '智能产品',
      path: ROUTES.products,
      subMenus: [
        { title: '语音门锁', path: `${ROUTES.products}#voice-lock` },
        { title: '语音遥控器', path: `${ROUTES.products}#voice-remote` },
        { title: '语音风扇', path: `${ROUTES.products}#voice-fan` },
        { title: '语音面板', path: `${ROUTES.products}#voice-panel` },
        { title: '智能拾音器', path: `${ROUTES.products}#smart-microphone` },
        { title: '语音智能体', path: `${ROUTES.products}#voice-agent` },
      ],
    },
    {
      title: '行业应用',
      path: ROUTES.industryApplications,
      subMenus: [
        { title: '智能工业', path: `${ROUTES.industryApplications}#smart-industry` },
        { title: '智能工具', path: `${ROUTES.industryApplications}#smart-tools` },
        { title: '智能安防', path: `${ROUTES.industryApplications}#smart-security` },
        { title: '智能家居家电', path: `${ROUTES.industryApplications}#smart-home-appliance` },
        { title: '智能消费电子', path: `${ROUTES.industryApplications}#smart-consumer-electronics` },
      ],
    },
    {
      title: '关于我们',
      path: ROUTES.aboutCompany,
      subMenus: [
        { title: '公司简介', path: ROUTES.aboutCompany },
        { title: '团队介绍', path: ROUTES.aboutTeam },
        { title: '联系我们', path: ROUTES.contact },
      ],
    },
  ];

  const handleMenuHover = (title: string | null) => {
    setActiveMenu(title);
  };

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
          <Link to={ROUTES.home}>
            <span className="navbar-brand-text">
              <img style={{ width: '150px', verticalAlign: 'middle', marginRight: '8px' }} src="/logo.png" alt="深聆科技" />
              深聆科技
            </span>
          </Link>
        </div>

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
                  <div className={`navbar-dropdown ${activeMenu === item.title ? 'show' : ''}`}>
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

        <div className={`navbar-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
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
