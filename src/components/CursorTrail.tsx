"use client";
import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLSpanElement | HTMLDivElement)[]>([]);
  const rafIdRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const applyMove = () => {
      rafIdRef.current = null;
      const pending = pendingRef.current;
      if (!pending) return;
      const { x, y } = pending;

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

    const moveCursor = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      // Only one DOM update + particle spawn per animation frame,
      // no matter how many mousemove events fire in between.
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(applyMove);
      }
    };

    const spawnChar = (x: number, y: number) => {
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

    const spawnDot = (x: number, y: number) => {
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
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const getRandomChar = () => {
    const chars = [";", "{", "}", ">", "_", "$", "#", "=", "+", "|"];
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <div ref={circleRef} className="cursor-trail"></div>;
};

export default CursorTrail;
