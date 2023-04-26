import { links } from "./data";
import { TbArrowRight } from "react-icons/tb";
import { Link, animateScroll as scroll } from "react-scroll";
import ThemeBtn from "./ThemeBtn";

const Header = ({ toggleTheme, getStorageTheme }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
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
                    duration={(index + 1) * 700}
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
  );
};
export default Header;
