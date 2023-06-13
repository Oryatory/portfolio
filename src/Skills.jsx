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
                  <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 1 1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath
                      id="work__image__wrapper"
                      clipPathUnits="objectBoundingBox"
                    >
                      <path d="M.486.043C.582.007.719.063.753.191.915.197 1.033.401.981.683.887.93.788.793.536.837.355.853.3.922.204.773.077.784.031.666.017.535.035.247.05.136.182.046.313-.017.371.101.484.04Z"></path>
                    </clipPath>
                  </svg>
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
