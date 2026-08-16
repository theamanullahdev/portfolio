"use client";

import React from "react";
import Link from "next/link";

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

// Crafted-object bevel (docs/DESIGN.md §7 addendum) — reads as an embossed
// plate rather than a flat bordered rectangle. Deeper inset on :active
// reads as a physical press.
const BEVEL =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.5),0_2px_5px_rgba(0,0,0,0.4)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]";

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
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden
    font-technical text-xs sm:text-sm tracking-[0.08em] uppercase
    px-5 py-2.5 sm:px-6 sm:py-3 border ${v.border} ${v.text} bg-ink-2 ${BEVEL}
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
