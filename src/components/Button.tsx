"use client";

import React from "react";
import Link from "next/link";
import Flourish from "@/components/Flourish";

// "Wax-seal plate" button — docs/DESIGN.md §7. Replaces TerminalButton for
// migrated pages; TerminalButton itself is untouched and still used by
// pages not yet migrated.
type ButtonColor = "brass" | "verdigris" | "rubric";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  color?: ButtonColor;
  className?: string;
  disabled?: boolean;
}

// Full literal class strings per variant — Tailwind's build-time scanner
// needs the complete class name to appear as text somewhere in the file,
// so these can't be assembled at runtime (e.g. via string concatenation).
const VARIANTS: Record<ButtonColor, { border: string; text: string; fill: string }> = {
  brass: { border: "border-brass", text: "text-brass", fill: "bg-brass" },
  verdigris: { border: "border-verdigris", text: "text-verdigris", fill: "bg-verdigris" },
  rubric: { border: "border-rubric", text: "text-rubric", fill: "bg-rubric" },
};

// Crafted-object bevel + banded groove (docs/DESIGN.md §7 ornamental
// addendum) — the emboss layers from before, plus an inset ink channel and
// a thin inner brass line reading as a machined double-edge rather than a
// single hairline. All in one shadow value (can't split the groove into a
// separate CSS class without it fighting this one over which box-shadow
// wins — see the note removed from globals.css). Deeper inset on :active
// reads as a physical press.
const BEVEL =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.5),inset_0_0_0_4px_rgba(13,11,8,0.95),inset_0_0_0_6px_rgba(230,196,110,0.6),0_2px_5px_rgba(0,0,0,0.4)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]";

const Button = ({
  href,
  children,
  external = false,
  type = "button",
  onClick,
  color = "brass",
  className,
  disabled,
}: ButtonProps) => {
  const v = VARIANTS[color];
  const classes = `group relative inline-flex items-center justify-center gap-2
    plaque plaque-fill font-label text-sm sm:text-base tracking-[0.02em] uppercase
    px-6 py-3 sm:px-7 sm:py-3.5 border-2 ${v.border} ${v.text} ${BEVEL}
    transition-colors duration-300 hover:text-ink
    active:scale-[0.97] active:translate-y-px
    ${disabled ? "opacity-40 pointer-events-none" : ""}
    ${className ?? ""}`;

  const fill = (
    <span
      aria-hidden
      className={`absolute inset-0 -z-10 ${v.fill} origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}
    />
  );

  const content = (
    <>
      {fill}
      <Flourish size="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};

export default Button;
