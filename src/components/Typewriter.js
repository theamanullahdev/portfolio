"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, delay, color }) => {
  const [displayed, setDisplayed] = useState("");

  // Define terminal color themes
  const colorThemes = {
    green: "text-green-400",
    orange: "text-orange-400",
    cyan: "text-cyan-400",
    white: "text-white",
  };

  // Default to white if invalid or not provided
  const colorClass = colorThemes[color] || colorThemes.white;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className={`font-mono ${colorClass}`}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
  color: PropTypes.oneOf(["green", "orange", "cyan", "white"]),
};

Typewriter.defaultProps = {
  delay: 100,
  color: "white", // safer default for non-terminal pages
};

export default Typewriter;
