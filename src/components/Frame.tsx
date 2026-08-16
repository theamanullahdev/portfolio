import React from "react";

// Full ornamental perimeter frame — docs/DESIGN.md §7. Traces the plaque's
// chamfered silhouette with a thick outer band + thin inner band, a
// diamond stud at each corner, and a short fretwork tick at each edge
// midpoint.
//
// The double-band perimeter is one `viewBox="0 0 100 100"` SVG stretched
// with `preserveAspectRatio="none"` — straight chamfer-cut lines tolerate
// non-uniform stretch fine. The corner studs and ticks do NOT live in that
// same stretched SVG: a filled shape's own geometry isn't protected by
// `vector-effect="non-scaling-stroke"` (that only protects stroke width),
// so on a short, wide button a "square" diamond stud stretched along with
// the viewBox comes out as a squashed lozenge, and horizontal vs vertical
// ticks end up visibly different lengths — this is the "ornaments go weird
// on smaller/odd-shaped buttons" bug. Fixed by rendering studs/ticks as
// separate fixed-pixel-size CSS elements positioned at each corner/edge
// instead — their size never depends on the button's own aspect ratio.
export default function Frame({
  chamfer = 12,
  className = "",
  compact = false,
}: {
  chamfer?: number;
  className?: string;
  compact?: boolean;
}) {
  const c = chamfer;
  const outer = `M ${c} 2 L ${100 - c} 2 L 98 ${c} L 98 ${100 - c} L ${100 - c} 98 L ${c} 98 L 2 ${100 - c} L 2 ${c} Z`;

  const studSize = compact ? 4 : 6;
  const inset = compact ? 2 : 3;
  const tickThickness = compact ? 1.5 : 2;
  const tickLength = compact ? 4 : 6;

  const corners: { top?: number; bottom?: number; left?: number; right?: number }[] = [
    { top: inset, left: inset },
    { top: inset, right: inset },
    { bottom: inset, left: inset },
    { bottom: inset, right: inset },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
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
      </svg>

      {corners.map((pos, i) => (
        <span
          key={i}
          className="absolute bg-current"
          style={{ width: studSize, height: studSize, transform: "rotate(45deg)", ...pos }}
        />
      ))}

      {!compact && (
        <>
          <span
            className="absolute bg-current -translate-x-1/2"
            style={{ left: "50%", top: 0, width: tickThickness, height: tickLength }}
          />
          <span
            className="absolute bg-current -translate-x-1/2"
            style={{ left: "50%", bottom: 0, width: tickThickness, height: tickLength }}
          />
          <span
            className="absolute bg-current -translate-y-1/2"
            style={{ top: "50%", left: 0, height: tickThickness, width: tickLength }}
          />
          <span
            className="absolute bg-current -translate-y-1/2"
            style={{ top: "50%", right: 0, height: tickThickness, width: tickLength }}
          />
        </>
      )}
    </div>
  );
}
