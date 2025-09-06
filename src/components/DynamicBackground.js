/* eslint-disable react/no-array-index-key */
"use client";

import React, { useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const randomRange = (min, max) => Math.random() * (max - min) + min;

function FloatingElement({ type }) {
  // Generate all random values ONCE per client render
  const {
    size,
    startX,
    startY,
    delay,
    duration,
    exitEffect,
    fontSize,
    content,
    baseStyle,
  } = useMemo(() => {
    const s = randomRange(20, 80);
    const x = randomRange(0, 100);
    const dly = randomRange(0, 8);
    const dur = randomRange(18, 32);
    const y = randomRange(100, 120);

    let bs = {};
    let txt = null;

    switch (type) {
      case "circle":
        bs = {
          width: s,
          height: s,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.15)",
        };
        break;
      case "line":
        bs = {
          width: s * 2,
          height: 2,
          backgroundColor: "rgba(255,255,255,0.15)",
        };
        break;
      case "triangle":
        bs = {
          width: 0,
          height: 0,
          borderLeft: `${s / 2}px solid transparent`,
          borderRight: `${s / 2}px solid transparent`,
          borderBottom: `${s}px solid rgba(255,255,255,0.15)`,
        };
        break;
      case "code": {
        const symbols = ["{}", "</>", ";", "_", "=>"];
        txt = symbols[Math.floor(Math.random() * symbols.length)];
        break;
      }
      default:
        bs = {
          width: s,
          height: s,
          backgroundColor: "rgba(255,255,255,0.15)",
        };
        break;
    }

    const ee = Math.random();

    return {
      size: s,
      startX: x,
      startY: y,
      delay: dly,
      duration: dur,
      exitEffect: ee,
      fontSize: type === "code" ? `${randomRange(16, 32)}px` : undefined,
      content: txt,
      baseStyle: bs,
    };
  }, [type]);

  // Exit animations chosen once
  let opacityAnim = [1, 0];
  let scaleAnim = [1, 1];
  if (exitEffect < 0.2) {
    opacityAnim = [1, 0.2, 1, 0];
  } else if (exitEffect < 0.4) {
    scaleAnim = [1, 0.5, 0];
  }

  return (
    <motion.div
      className="absolute text-white/20 dark:text-white/20"
      style={{
        left: `${startX}vw`,
        top: `${startY}vh`,
        fontSize,
        ...baseStyle,
      }}
      animate={{
        y: ["0vh", "-150vh"],
        x: [0, randomRange(-50, 50)],
        rotate: [0, 360],
        opacity: opacityAnim,
        scale: scaleAnim,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {type === "code" && content}
    </motion.div>
  );
}

const DynamicBackground = ({
  children,
  circleCount,
  lineCount,
  triangleCount,
  codeCount,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Nothing renders on server → no hydration mismatch
    return <>{children}</>;
  }

  const shapes = [
    ...Array.from({ length: circleCount }, () => "circle"),
    ...Array.from({ length: lineCount }, () => "line"),
    ...Array.from({ length: triangleCount }, () => "triangle"),
    ...Array.from({ length: codeCount }, () => "code"),
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {shapes.map((type, idx) => (
          <FloatingElement key={idx} type={type} />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

DynamicBackground.propTypes = {
  children: PropTypes.node.isRequired,
  circleCount: PropTypes.number,
  lineCount: PropTypes.number,
  triangleCount: PropTypes.number,
  codeCount: PropTypes.number,
};

DynamicBackground.defaultProps = {
  circleCount: 6,
  lineCount: 6,
  triangleCount: 6,
  codeCount: 6,
};

export default DynamicBackground;
