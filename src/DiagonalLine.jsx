import React from "react";
import { motion } from "framer-motion";

const DiagonalLine = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      whileHover={{ pathLength: 0 }}
      viewBox="0 0 100 100"
    >
      <motion.line
        x1="0"
        y1="100"
        x2="100"
        y2="0"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        animate={{ pathLength: 1 }}
      />
    </motion.svg>
  );
};

export default DiagonalLine;
