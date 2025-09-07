"use client";

import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const HighlightWords = ({ text, color }) => {
  const words = text.split(" ");

  // Define terminal color themes
  const colorThemes = {
    green: {
      text: "text-green-500 dark:text-green-300",
      border: "border-green-400 dark:border-green-300",
    },
    orange: {
      text: "text-orange-500 dark:text-orange-300",
      border: "border-orange-400 dark:border-orange-300",
    },
    cyan: {
      text: "text-cyan-500 dark:text-cyan-300",
      border: "border-cyan-400 dark:border-cyan-300",
    },
    white: {
      text: "text-white dark:text-gray-200",
      border: "border-white dark:border-gray-200",
    },
  };

  // Fallback to white
  const theme = colorThemes[color] || colorThemes.white;

  return (
    <h2 className={`text-2xl font-semibold mb-6 font-mono ${theme.text}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="relative inline-block mx-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.8 }}
        >
          <span className="relative z-10">{word}</span>

          {/* corners */}
          <motion.span
            className={`absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 ${theme.border}`}
            initial={{ opacity: 0, x: -5, y: -5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.8, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 ${theme.border}`}
            initial={{ opacity: 0, x: 5, y: -5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.8 + 0.1, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 ${theme.border}`}
            initial={{ opacity: 0, x: -5, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.8 + 0.2, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 ${theme.border}`}
            initial={{ opacity: 0, x: 5, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.8 + 0.3, duration: 0.3 }}
          />
        </motion.span>
      ))}
    </h2>
  );
};

HighlightWords.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["green", "orange", "cyan", "white"]),
};

HighlightWords.defaultProps = {
  color: "green", // terminal default
};

export default HighlightWords;
