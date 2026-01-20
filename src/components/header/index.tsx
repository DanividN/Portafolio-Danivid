import { menuList, menuListDark } from "@/lib/mockData/menuList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import SidebarContact from "./sidebarContact";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  // Usar menuListDark o menuList según el estado del tema
  const newMenuList = isDarkMode ? menuListDark : menuList;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 105) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aplicar clase al body cuando cambie el tema
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header
        className={`header-section ${
          isFixed ? "menu-fixed animated" : "slideInUp"
        }`}
      >
        <div className="container">
          <div className="header-wrapper">
            <div className="main-logo">
              <Link to="/" className="logo">
                <h4>
                  D<span className="txt-orange">ani</span>vid
                </h4>
              </Link>
            </div>
            <div className="d-lg-block d-none">
              <Navigation data={newMenuList} />
            </div>
            <div className="d-lg-none d-block">
              <MobileNavigation
                data={newMenuList}
                mobileNavigationOpen={mobileNavigationOpen}
              />
            </div>
            <div className="menu-components d-flex align-items-center">
              {/* Botón de toggle tema */}
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn d-flex align-items-center justify-content-center "
                aria-label="Toggle theme"
                style={{
                  color: 'currentColor',
                  background: 'transparent',
                  border: '2px solid currentColor',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  marginRight: '15px',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className={`bi ${isDarkMode ? 'bi-sun-fill text-white' : 'bi-moon-fill'}`}
                   style={{ fontSize: '18px' }} />
              </button>

              <Link
                to="#contact"
                className="d-none d-xl-flex lets-talk align-items-center"
              >
                <span className="get-text">Contacto&nbsp;</span>
                <span>
                  <i className="bi bi-arrow-up-right" />
                </span>
              </Link>
              <div
                className={`header-bar d-lg-none ${
                  mobileNavigationOpen ? "active" : ""
                }`}
                onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
              >
                <span />
                <span />
                <span />
              </div>
              <div
                onClick={() => setIsSidebarOpen(true)}
                className="remove-click"
              >
                <div className="hamburger-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <SidebarContact
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;