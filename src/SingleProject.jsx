import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SingleProject = ({
  id,
  name,
  technologies,
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
      <div className="button-container">
        <motion.button
          className="work__button"
          onClick={() => toggleWork(id)}
          onTapEnd={() => setAnimate(!animate)}
          onHoverStart={() => setAnimate(true)}
          onHoverEnd={() => (!isActive ? setAnimate(false) : setAnimate(true))}
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
        style={{ overflow: "hidden" }}
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="technologies-container">
          {technologies.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <p className="work__description">{description}</p>
        <div className="work__button-container">
          <a href={pageLink} target="_blank">
            <button className="links-button">Live site</button>
          </a>
          <a href={codeLink} target="_blank">
            <button className="links-button">Source code</button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default SingleProject;
