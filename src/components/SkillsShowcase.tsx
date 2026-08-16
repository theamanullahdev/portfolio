"use client";

import { useEffect, useRef, useState } from "react";
import { SKILLS_DATA } from "@/data/skills";

// Home-only. No longer renders its own Heading/section — folded into the
// "The Work" waypoint in page.tsx alongside the bio + stats strip.
// Reversible: fills to `level` on scroll-into-view, retracts to 0 on
// scroll-out, so it replays instead of firing once and going inert.
const SkillBar = ({ level }: { level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setWidth(entry.isIntersecting ? level : 0),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="h-[3px] bg-ink-3">
      <div
        className="h-full bg-verdigris transition-[width] duration-700 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default function SkillsShowcase() {
  const categories = Object.entries(SKILLS_DATA);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brass/20 border border-brass/30">
      {categories.map(([category, skills]) => (
        <div key={category} className="bg-ink-2 p-4">
          <h3 className="font-technical text-xs tracking-widest uppercase text-verdigris mb-3">
            {category.replace(/([A-Z])/g, " $1").trim()}
          </h3>
          <div className="space-y-2.5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-reading text-sm text-paper">{skill.name}</span>
                  <span className="font-technical text-2xs text-paper-dim">{skill.level}%</span>
                </div>
                <SkillBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
