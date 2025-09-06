"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, delay }) => {
  const [displayed, setDisplayed] = useState("");

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
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

Typewriter.defaultProps = {
  delay: 100,
};

export default Typewriter;
