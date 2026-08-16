"use client";
import React, { useEffect, useRef } from "react";

// Cursor companion — docs/DESIGN.md §7. Replaces the old neon-green
// glyph-spawning trail (`;{}>_$#=+|` particles) with a single brass
// compass that follows the pointer, its needle rotating to track movement
// direction like a real instrument, plus a sparse trail of fading brass
// dots. Icon is Lucide's "compass" (ISC license, https://lucide.dev/icons/
// compass) — picked over a literal weapon for fit: this design's identity
// is an astronomer/cartographer's almanac, not a fantasy armory, and a
// compass echoes the star-chart ambient layer and the instrument-ring
// around the hero avatar already in the system.
// Perf: one rAF loop shared by both the compass follow and the dot spawn
// throttle (no per-mousemove work), pointer-events-none throughout, capped
// live dot count, auto-inert on touch and prefers-reduced-motion.
const MAX_DOTS = 6;
const DOT_INTERVAL_MS = 70;

const CursorTrail = () => {
  const compassRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGGElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const lastDotAt = useRef(0);
  const liveDots = useRef<HTMLSpanElement[]>([]);
  const rafId = useRef<number | null>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) return;

    const onMove = (e: PointerEvent) => {
      const prev = targetRef.current;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      if (dx !== 0 || dy !== 0) {
        angleRef.current = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      }
      targetRef.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      if (now - lastDotAt.current > DOT_INTERVAL_MS && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        lastDotAt.current = now;
        spawnDot(e.clientX, e.clientY);
      }
    };

    const spawnDot = (x: number, y: number) => {
      const layer = layerRef.current;
      if (!layer) return;
      if (liveDots.current.length >= MAX_DOTS) {
        liveDots.current.shift()?.remove();
      }
      const dot = document.createElement("span");
      dot.className = "cursor-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      layer.appendChild(dot);
      liveDots.current.push(dot);
      dot.addEventListener(
        "animationend",
        () => {
          dot.remove();
          liveDots.current = liveDots.current.filter((d) => d !== dot);
        },
        { once: true }
      );
    };

    const tick = () => {
      const p = posRef.current;
      const t = targetRef.current;
      // Lerp toward the pointer — the trailing lag is the "alive" feel,
      // one continuous transform-only loop (same cost class as the ambient
      // star-drift), not per-mousemove DOM writes.
      p.x += (t.x - p.x) * 0.2;
      p.y += (t.y - p.y) * 0.2;
      if (compassRef.current) {
        compassRef.current.style.transform = `translate3d(${p.x - 14}px, ${p.y - 14}px, 0)`;
      }
      if (needleRef.current) {
        needleRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      liveDots.current.forEach((d) => d.remove());
      liveDots.current = [];
    };
  }, []);

  return (
    <>
      <div ref={layerRef} aria-hidden className="cursor-dot-layer" />
      <div ref={compassRef} aria-hidden className="cursor-compass">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgb(var(--brass-bright))" strokeWidth="1.4" opacity="0.9" />
          <g ref={needleRef} style={{ transformOrigin: "12px 12px" }}>
            <path
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
              fill="rgb(var(--brass-bright))"
              stroke="rgb(var(--brass-bright))"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default CursorTrail;
