"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TypewriterColor = "green" | "orange" | "cyan" | "white";

interface TypewriterProps {
  text: string;
  delay?: number;
  color?: TypewriterColor;
}

const Typewriter = ({ text, delay = 100, color = "white" }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Define terminal color themes
  const colorThemes: Record<TypewriterColor, string> = {
    green: "text-green-400",
    orange: "text-orange-400",
    cyan: "text-cyan-400",
    white: "text-white",
  };

  const colorClass = colorThemes[color];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className={`font-mono ${colorClass}`}>
      {displayed}
      <motion.span 
        className="animate-pulse inline-block"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;
