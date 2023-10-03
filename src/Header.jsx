import { links } from "./data";
import { TbArrowRight } from "react-icons/tb";
import { Link, animateScroll as scroll } from "react-scroll";
import ThemeBtn from "./ThemeBtn";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "./Background";

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
        <div
          className={`header__container ${
            scrollTop > 0 ? "header__container--fixed" : ""
          }`}
          style={{
            backgroundColor:
              scrollTop > 0 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          }}
        >
          {scrollTop > 0 && (
            <Background
              theme={theme}
              position="absolute"
              // style={{ zIndex: 11 }}
            />
          )}

          <div className="container" style={{ zIndex: 10 }}>
            <div
              className={`${
                scrollTop > 0
                  ? "header__wrapper header__wrapper--fixed"
                  : "header__wrapper"
              }`}
            >
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
