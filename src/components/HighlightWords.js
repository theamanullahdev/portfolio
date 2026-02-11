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
      glow: "text-green-400/50",
    },
    orange: {
      text: "text-orange-500 dark:text-orange-300",
      border: "border-orange-400 dark:border-orange-300",
      glow: "text-orange-400/50",
    },
    cyan: {
      text: "text-cyan-500 dark:text-cyan-300",
      border: "border-cyan-400 dark:border-cyan-300",
      glow: "text-cyan-400/50",
    },
    blue: {
      text: "text-blue-500 dark:text-blue-300",
      border: "border-blue-400 dark:border-blue-300",
      glow: "text-blue-400/50",
    },
    white: {
      text: "text-white dark:text-gray-200",
      border: "border-white dark:border-gray-200",
      glow: "text-white/50",
    },
  };

  // Fallback to white
  const theme = colorThemes[color] || colorThemes.white;

  return (
    <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 font-mono ${theme.text}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="relative inline-block mx-1 xs:mx-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Text with subtle glow effect */}
          <motion.span 
            className={`relative z-10 inline-block px-1 ${theme.glow}`}
            animate={{ 
              textShadow: [
                `0 0 0px ${theme.glow}`,
                `0 0 8px ${theme.glow}`,
                `0 0 0px ${theme.glow}`
              ],
              // Idle bounce animation for mobile
              y: [0, -2, 0],
            }}
            transition={{ 
              textShadow: { duration: 2, repeat: Infinity },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
            }}
          >
            {word}
          </motion.span>

          {/* Animated corner brackets */}
          <motion.span
            className={`absolute -top-1 xs:-top-2 -left-1 xs:-left-2 w-2 h-2 border-l-2 border-t-2 ${theme.border}`}
            initial={{ opacity: 0, x: -5, y: -5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.1 + 0.05, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -top-1 xs:-top-2 -right-1 xs:-right-2 w-2 h-2 border-r-2 border-t-2 ${theme.border}`}
            initial={{ opacity: 0, x: 5, y: -5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -bottom-1 xs:-bottom-2 -left-1 xs:-left-2 w-2 h-2 border-l-2 border-b-2 ${theme.border}`}
            initial={{ opacity: 0, x: -5, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.3 }}
          />
          <motion.span
            className={`absolute -bottom-1 xs:-bottom-2 -right-1 xs:-right-2 w-2 h-2 border-r-2 border-b-2 ${theme.border}`}
            initial={{ opacity: 0, x: 5, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
          />
        </motion.span>
      ))}
    </h2>
  );
};

HighlightWords.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["green", "orange", "cyan", "blue", "white"]),
};

HighlightWords.defaultProps = {
  color: "green", // terminal default
};

export default HighlightWords;
