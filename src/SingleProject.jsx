import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SingleProject = ({
  id,
  name,
  technologies,
  image,
  type,
  description,
  pageLink,
  codeLink,
  toggleWork,
  activeId,
  width,
  theme,
}) => {
  const [animate, setAnimate] = useState(false);
  const isActive = id === activeId;
  useEffect(() => {
    isActive ? setAnimate(true) : setAnimate(false);
  }, [activeId]);

  const clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };

  return (
    <motion.div className="work">
      <div
        className="work__button-container"
        onClick={() => {
          toggleWork(id);
        }}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => !isActive && setAnimate(false)}
      >
        <motion.button
          className="work__button"
          animate={{
            x: animate ? -clamp(73, width / 5, 100) : 0,
            opacity: activeId && !isActive ? 0.5 : 1,
            transition: {
              x: { delay: 0.9 },
            },
          }}
          initial={{ x: 50 }}
        >
          <motion.svg
            className="work__svg"
            width="58px"
            height="58px"
            viewBox="0 0 58 58"
          >
            {/* diagonal */}
            <motion.line
              x1="-2"
              y1="-2"
              x2="58"
              y2="58"
              stroke={theme === "light-theme" ? "black" : "white"}
              strokeWidth="4"
              strokeLinecap="square"
              initial={{ pathLength: 1 }}
              animate={{
                pathLength: animate ? 0 : 1,
                transition: { delay: 0.6 },
                color: activeId && !isActive ? "#808080" : "#000000",
              }}
            />
            {/* horizontal */}
            <motion.line
              x1="-2"
              y1="56"
              x2="58"
              y2="56"
              stroke={theme === "light-theme" ? "black" : "white"}
              strokeWidth="4"
              strokeLinecap="square"
              initial={{ pathLength: 1 }}
              animate={{
                pathLength: animate ? 0 : 1,
                transition: { delay: 0.3 },
                color: activeId && !isActive ? "#808080" : "#000000",
              }}
            />
            {/* vertical */}
            <motion.line
              x1="56"
              y1="-2"
              x2="56"
              y2="56"
              stroke={theme === "light-theme" ? "black" : "white"}
              strokeWidth="4"
              strokeLinecap="square"
              initial={{ pathLength: 1 }}
              animate={{
                pathLength: animate ? 0 : 1,
                color: activeId && !isActive ? "#808080" : "#000000",
              }}
            />
          </motion.svg>

          {name}
        </motion.button>
        <motion.div
          animate={{
            opacity: animate ? 1 : 0,
            transition: { delay: animate ? 0.9 : 0.3 },
          }}
          className="work__info"
        >
          <p>{type}</p>
        </motion.div>
      </div>

      <motion.div
        style={{ overflow: "hidden", marginBottom: "5px" }}
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="technologies-container">
          {technologies.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="work__row">
          <div className="work__image">
            <svg
              id="sw-js-blob-svg"
              style={{ position: "absolute" }}
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
            <img src={image} alt="image" />
          </div>
          <div className="work__col">
            <p className="work__description">{description}</p>
            <div className="work__links-container">
              <a className="work__link" href={pageLink} target="_blank">
                <button className="work__links-button">Live site</button>
              </a>
              <a className="work__link" href={codeLink} target="_blank">
                <button className="work__links-button">Source code</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default SingleProject;
