import React from "react";

// "Stamp" — docs/DESIGN.md §7.
type TagColor = "brass" | "verdigris" | "rubric";

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  className?: string;
}

const COLOR_CLASS: Record<TagColor, string> = {
  brass: "border-brass/50 text-brass",
  verdigris: "border-verdigris/50 text-verdigris",
  rubric: "border-rubric/50 text-rubric",
};

const Tag = ({ children, color = "brass", className }: TagProps) => (
  <span
    className={`inline-flex items-center font-technical text-2xs sm:text-xs tracking-widest uppercase px-2.5 py-1 border ${COLOR_CLASS[color]} ${className ?? ""}`}
  >
    {children}
  </span>
);

export default Tag;
