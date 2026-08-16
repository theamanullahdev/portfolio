import React from "react";

// Corner ornament (docs/DESIGN.md §7 ornamental addendum) — an actual
// curled, tapered-stroke flourish (thick primary curve + thin secondary
// curve + a tip stud), not a plain dot. Replaces the first attempt
// (Rivets.tsx, straight corner dots) after feedback that it read as
// basically unchanged — too small, and geometric rather than curved. One
// path, mirrored per corner via scale-x/-y instead of four hand-drawn
// variants. Requires a `relative` ancestor.
const CORNER_TRANSFORM: Record<string, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0 -scale-x-100",
  bl: "bottom-0 left-0 -scale-y-100",
  br: "bottom-0 right-0 -scale-x-100 -scale-y-100",
};

type Corner = "tl" | "tr" | "bl" | "br";

export default function Flourish({
  corners = ["tl", "br"],
  size = "w-6 h-6 sm:w-7 sm:h-7",
}: {
  corners?: Corner[];
  size?: string;
}) {
  return (
    <>
      {corners.map((corner) => (
        <svg
          key={corner}
          aria-hidden
          viewBox="0 0 32 32"
          className={`absolute ${size} text-brass-bright pointer-events-none ${CORNER_TRANSFORM[corner]}`}
        >
          <path
            d="M2 30 C2 15 8 3 23 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M2 21 C5 12 12 6 20 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="23" cy="2" r="1.8" fill="currentColor" />
        </svg>
      ))}
    </>
  );
}
