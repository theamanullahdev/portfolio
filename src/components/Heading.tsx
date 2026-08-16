"use client";

import React, { useEffect, useRef, useState } from "react";

// "Entry numeral + rule-draw" heading — docs/DESIGN.md §7. Replaces
// HighlightWords for migrated pages. The rule-draw is IntersectionObserver-
// driven (one-shot, disconnects after firing) rather than CSS
// animation-timeline — simpler and reliably supported everywhere, which
// DESIGN.md §5 treats as an acceptable fallback; using it as the primary
// implementation is a deliberate simplification, not a missed feature.
type HeadingColor = "brass" | "verdigris" | "rubric";

interface HeadingProps {
  number: string;
  text: string;
  color?: HeadingColor;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const TEXT_CLASS: Record<HeadingColor, string> = {
  brass: "text-brass",
  verdigris: "text-verdigris",
  rubric: "text-rubric",
};

const BG_CLASS: Record<HeadingColor, string> = {
  brass: "bg-brass",
  verdigris: "bg-verdigris",
  rubric: "bg-rubric",
};

const Heading = ({ number, text, color = "brass", as: Tag = "h2", className }: HeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`inline-flex flex-col gap-2 ${className ?? ""}`}>
      <div className="flex items-baseline gap-3">
        <span className={`font-technical text-xs sm:text-sm tracking-widest ${TEXT_CLASS[color]}`}>
          §{number}
        </span>
        <Tag className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight text-paper">
          {text}
        </Tag>
      </div>
      <span
        aria-hidden
        className={`h-px w-full origin-left ${BG_CLASS[color]} transition-transform duration-700 ease-out motion-reduce:scale-x-100 ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
};

export default Heading;
