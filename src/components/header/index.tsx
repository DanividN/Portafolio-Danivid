import { menuList, menuListDark } from "@/lib/mockData/menuList";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import SidebarContact from "./sidebarContact";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathName = useLocation().pathname;
  const newMenuList =
    pathName === "/home-2" || pathName.endsWith("dark")
      ? menuListDark
      : menuList;

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
                  P<span className="txt-orange">e</span>rtest
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
              <Link
                to="#contact"
                className="d-none d-xl-flex lets-talk align-items-center"
              >
                <span className="get-text">Let's Talk&nbsp;</span>
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
