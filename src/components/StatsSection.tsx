"use client";

import { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "@/data/experience";

// Home-only. No longer renders its own Heading/section — folded into the
// "The Work" waypoint in page.tsx as one composed unit alongside the
// skills ledger, instead of a separate full-width stacked section.
// Reversible, not mount-triggered: counts up on scroll-into-view, resets
// to 0 on scroll-out, so it replays instead of firing once and going inert.
const AnimatedCounter = ({ end, unit = "" }: { end: number; unit?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (timer) clearInterval(timer);
        if (!entry.isIntersecting) {
          setCount(0);
          return;
        }
        let current = 0;
        const increment = end / 40;
        timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            if (timer) clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {unit}
    </span>
  );
};

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border border-brass/30 divide-y divide-brass/20 lg:divide-y-0 lg:divide-x">
      {STATS_DATA.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-2 py-6 px-3 text-center"
        >
          <span className="font-display text-2xl sm:text-3xl text-brass-bright">
            <AnimatedCounter end={stat.value} unit={stat.unit || ""} />
          </span>
          <span className="font-technical text-2xs tracking-widest uppercase text-paper-dim">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
