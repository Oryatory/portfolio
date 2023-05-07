import { TbTopologyStar3 } from "react-icons/tb";
import html from "../src/assets/images/htmlIcon.png";
import css from "../src/assets/images/cssIcon.png";
import js from "../src/assets/images/jsIcon.png";
import sass from "../src/assets/images/sassIcon.png";
import react from "../src/assets/images/reactIcon.png";
import vite from "../src/assets/images/viteIcon.png";
import jsx from "../src/assets/images/jsxIcon.png";
import figma from "../src/assets/images/figmaIcon.png";
import ps from "../src/assets/images/psIcon.png";
import ts from "../src/assets/images/typescripticon.png";
import { Fragment } from "react";

const images = [html, css, js, sass, react, vite, ts, figma, ps];

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
                  <img src={image} alt="css" className="skills__icon" />
                  {index < images.length - 1 && (
                    <TbTopologyStar3 className="skills__star" />
                  )}
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
