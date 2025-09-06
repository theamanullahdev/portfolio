"use client";
import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const circleRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      // Move main glowing circle
      if (circleRef.current) {
        circleRef.current.style.left = `${x - 25}px`;
        circleRef.current.style.top = `${y - 25}px`;
      }

      // Random chance: 30% char, 70% dot
      if (Math.random() < 0.3) {
        spawnChar(x, y);
      } else {
        spawnDot(x, y);
      }
    };

    const spawnChar = (x, y) => {
      const span = document.createElement("span");
      span.className = "cursor-particle";
      span.innerText = getRandomChar();
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;

      document.body.appendChild(span);
      particlesRef.current.push(span);

      setTimeout(() => {
        span.remove();
        particlesRef.current = particlesRef.current.filter((el) => el !== span);
      }, 900);
    };

    const spawnDot = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      document.body.appendChild(dot);
      particlesRef.current.push(dot);

      setTimeout(() => {
        dot.remove();
        particlesRef.current = particlesRef.current.filter((el) => el !== dot);
      }, 700);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const getRandomChar = () => {
    const chars = [";", "{", "}", ">", "_", "$", "#", "=", "+", "|"];
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <div ref={circleRef} className="cursor-trail"></div>;
};

export default CursorTrail;
