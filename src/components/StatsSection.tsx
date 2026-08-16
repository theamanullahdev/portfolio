"use client";

import { useEffect, useState } from "react";
import { STATS_DATA } from "@/data/experience";

// Home-only. No longer renders its own Heading/section — folded into the
// "The Work" waypoint in page.tsx as one composed unit alongside the
// skills ledger, instead of a separate full-width stacked section.
const AnimatedCounter = ({ end, unit = "" }: { end: number; unit?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
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
