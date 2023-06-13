import { TbTopologyStar3 } from "react-icons/tb";
import html from "../src/assets/images/htmlIcon.png";
import css from "../src/assets/images/cssIcon.png";
import js from "../src/assets/images/jsIcon.png";
import sass from "../src/assets/images/sassIcon.png";
import react from "../src/assets/images/reactIcon.png";
import vite from "../src/assets/images/viteIcon.png";
import figma from "../src/assets/images/figmaIcon.png";
import ps from "../src/assets/images/psIcon.png";
import ts from "../src/assets/images/typescripticon.png";
import redux from "../src/assets/images/reduxIcon.png";
import { Fragment } from "react";

const images = [html, css, js, react, redux, ts, vite, sass, figma, ps];

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills__wrapper">
          <h1>Skills</h1>
          <p>
            These is my skillset which i’ll use to make your work come to life.
          </p>
          <div className="skills__icons">
            {images.map((image, index) => {
              return (
                <Fragment key={index}>
                  {/* <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="work">
                      <path
                        d="M14.3,-14.1C19.5,-12.7,25.4,-9.1,30,-2.4C34.7,4.4,38.3,14.2,34.7,19.8C31.2,25.3,20.6,26.4,13,24.1C5.4,21.8,0.9,16,-7.9,15.5C-16.6,15,-29.5,19.7,-35.8,16.8C-42.1,13.9,-41.8,3.3,-38.2,-4.9C-34.6,-13.1,-27.7,-18.9,-20.8,-20.1C-13.8,-21.2,-6.9,-17.6,-1.2,-16.2C4.6,-14.8,9.1,-15.5,14.3,-14.1Z"
                        style={{
                          transform: "translate(190%, 60%) scale(300%)",
                          // width: "10vw",
                          // objectFit: "cover",
                        }}
                        // stroke="url(#sw-gradient)"
                      ></path>
                    </clipPath>
                  </svg> */}
                  <img src={image} alt="css" className="skills__icon" />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
