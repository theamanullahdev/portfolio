import React from "react";

// Full ornamental perimeter frame — docs/DESIGN.md §7. Replaces Flourish
// (corner-only curved accents, which read as basically unchanged against
// the ornamental-banner reference). This traces the plaque's chamfered
// silhouette with a thick outer band + thin inner band (double-border,
// same language as the box-shadow groove but drawn as real linework), a
// diamond stud at each corner, and a short fretwork tick at each edge
// midpoint — the literal elements from the reference (corner gems, banded
// double border, bracket ticks). Uses `currentColor` so hover/active state
// is driven by the parent's text-color classes, same convention as every
// other icon here. `vector-effect="non-scaling-stroke"` + `preserveAspectRatio
// ="none"` let one 0-100 viewBox stretch to any button/panel size without
// the strokes themselves warping. Requires a `relative` ancestor.
export default function Frame({
  chamfer = 12,
  className = "",
}: {
  chamfer?: number;
  className?: string;
}) {
  const c = chamfer;
  const outer = `M ${c} 2 L ${100 - c} 2 L 98 ${c} L 98 ${100 - c} L ${100 - c} 98 L ${c} 98 L 2 ${100 - c} L 2 ${c} Z`;
  const off = c / 2 + 1;
  const corners: [number, number][] = [
    [off, off],
    [100 - off, off],
    [off, 100 - off],
    [100 - off, 100 - off],
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    >
      <g transform="translate(5 5) scale(0.9)">
        <path
          d={outer}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <path d={outer} fill="none" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      {corners.map(([cx, cy], i) => (
        <rect
          key={i}
          x={cx - 3}
          y={cy - 3}
          width="6"
          height="6"
          fill="currentColor"
          transform={`rotate(45 ${cx} ${cy})`}
        />
      ))}
      <line x1="50" y1="2" x2="50" y2="7.5" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <line x1="50" y1="98" x2="50" y2="92.5" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <line x1="2" y1="50" x2="7.5" y2="50" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <line x1="98" y1="50" x2="92.5" y2="50" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
