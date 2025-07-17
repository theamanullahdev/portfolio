"use client";
import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 25}px`;
        cursorRef.current.style.top = `${y - 25}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-trail"></div>;
};

export default CursorTrail;
