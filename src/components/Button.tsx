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
    px-5 py-2.5 sm:px-6 sm:py-3 border ${v.border} ${v.text} bg-ink-2
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
