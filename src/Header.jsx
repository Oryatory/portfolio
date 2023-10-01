import { links } from "./data";
import { TbArrowRight } from "react-icons/tb";
import { Link, animateScroll as scroll } from "react-scroll";
import ThemeBtn from "./ThemeBtn";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({ toggleTheme, getStorageTheme, theme }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const setScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
  }, []);

  return (
    <>
      <motion.div
        className={`header ${scrollTop > 0 ? "header header--fixed" : ""}`}
        animate={{ top: scrollTop > 0 && !showNav ? "-128px" : "0px" }}
        onMouseEnter={() => scrollTop > 0 && setShowNav(true)}
        onMouseLeave={() => scrollTop > 0 && setShowNav(false)}
      >
        <div className="container" style={{ zIndex: 10 }}>
          <div
            className={`${
              scrollTop > 0
                ? "header__wrapper header__wrapper--fixed"
                : "header__wrapper"
            }`}
          >
            <div
              className="header__wrapper__bg"
              style={{
                display: scrollTop > 0 ? "block" : "none",
                filter: theme === "light-theme" ? "none" : "invert(100%)",
              }}
            ></div>
            <ThemeBtn
              toggleTheme={toggleTheme}
              getStorageTheme={getStorageTheme}
            />
            <ul className="header__list">
              {links.map((link, index) => {
                return (
                  <li className="list__item" key={index}>
                    {/* <TbArrowRight
                    style={{ fontWeight: "700", fontSize: "1rem" }}
                  /> */}
                    <Link
                      to={link}
                      spy={true}
                      smooth={true}
                      duration={index * 400}
                      style={{ cursor: "pointer" }}
                    >
                      <TbArrowRight
                        style={{ fontWeight: "700", fontSize: "1rem" }}
                      />
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <motion.div
          className="header__overlay"
          animate={{
            opacity: showNav || scrollTop === 0 ? "0%" : "20%",
          }}
        ></motion.div>
      </motion.div>
    </>
  );
};
export default Header;
