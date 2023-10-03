import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const setScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  useEffect(() => {
    setScrollTop(0);
    window.addEventListener("scroll", setScroll);
  }, []);

  return (
    <motion.div
      className="about"
      style={{
        paddingTop: scrollTop > 0 ? "140px" : "0px",
      }}
    >
      <div className="container">
        <div className="about-wrapper">
          <h1>
            Ilya <br /> larin
          </h1>
          <p>
            Creative front end developer. Helping your ideas go digital
            maintaining performance and accessibility.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
