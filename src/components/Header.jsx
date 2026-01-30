import { useEffect, useState } from "react";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Sidebar } from "./Sidebar";
import "../styles/header.css";
import { useLocation } from "react-router-dom";
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 990);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 990);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
};

export const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDesktop = useIsDesktop();

  // const handleToggle = () => setShowMenu(!showMenu);
  const handleToggle = () => {
    if (!isDesktop) {
      setShowMenu((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`top-header 
      ${isHome ? "header-home" : "header-default"}
        ${scrolled ? "scrolled" : ""}`}
      >
        <div className={`left-section ${scrolled ? "left-scroll" : ""}`}>
          <div className="menu-icon" onClick={handleToggle}>
            {showMenu ? (
              <IoClose className="close" />
            ) : (
              <IoReorderThreeOutline />
            )}
          </div>
          {(isDesktop || !showMenu) && <h1 className="logo">Krupa Maria</h1>}
        </div>
        <IoMdSearch
          className={`search-icon ${scrolled ? "scrolled-search" : ""}`}
        />
      </header>

      <Sidebar showMenu={showMenu} handleToggle={handleToggle} />
    </>
  );
};
