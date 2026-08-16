/* eslint-disable react/no-array-index-key */
"use client";

import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

type ShapeType = "circle" | "line" | "triangle" | "code";

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

function FloatingElement({ type }: { type: ShapeType }) {
  // Generate all random values ONCE per client render
  const {
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

    let bs: React.CSSProperties = {};
    let txt: string | null = null;

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

// Halves whatever count each page passes in, cutting shape/animation
// render cost across the board without touching every call site.
const scaleDown = (n: number) => Math.ceil(n / 2);

interface DynamicBackgroundProps {
  children: React.ReactNode;
  circleCount?: number;
  lineCount?: number;
  triangleCount?: number;
  codeCount?: number;
}

const DynamicBackground = ({
  children,
  circleCount = 6,
  lineCount = 6,
  triangleCount = 6,
  codeCount = 6,
}: DynamicBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    // Fade the shapes in on the next tick instead of popping in abruptly.
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted || reducedMotion) {
    // Nothing renders on server → no hydration mismatch.
    // Also skip shapes entirely when the OS asks for reduced motion.
    return <>{children}</>;
  }

  const shapes: ShapeType[] = [
    ...Array.from({ length: scaleDown(circleCount) }, (): ShapeType => "circle"),
    ...Array.from({ length: scaleDown(lineCount) }, (): ShapeType => "line"),
    ...Array.from({ length: scaleDown(triangleCount) }, (): ShapeType => "triangle"),
    ...Array.from({ length: scaleDown(codeCount) }, (): ShapeType => "code"),
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {shapes.map((type, idx) => (
          <FloatingElement key={idx} type={type} />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DynamicBackground;
