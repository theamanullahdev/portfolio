import React from "react";

// "Star-chart drift" — docs/DESIGN.md §5. Replaces DynamicBackground for
// migrated pages. One shared CSS animation on a single SVG layer (not 6-8
// independently-animating elements) — the whole constellation drifts a
// fraction of a percent together. motion-reduce: variant needs no JS gate,
// unlike the old mounted-state pattern DynamicBackground needed for its
// Math.random() shapes — these points are fixed, so there's no hydration
// mismatch to guard against either.
const POINTS = [
  { x: 8, y: 15 },
  { x: 22, y: 40 },
  { x: 45, y: 12 },
  { x: 68, y: 35 },
  { x: 82, y: 18 },
  { x: 55, y: 55 },
  { x: 30, y: 70 },
];

const LINES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [3, 5],
];

const AmbientBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full">
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.12] animate-star-drift motion-reduce:animate-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {LINES.map(([a, b], i) => (
        <line
          key={i}
          x1={POINTS[a].x}
          y1={POINTS[a].y}
          x2={POINTS[b].x}
          y2={POINTS[b].y}
          stroke="rgb(var(--brass))"
          strokeWidth="0.08"
        />
      ))}
      {POINTS.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="0.35" fill="rgb(var(--brass))" />
      ))}
    </svg>
    <div className="relative z-10">{children}</div>
  </div>
);

export default AmbientBackground;
