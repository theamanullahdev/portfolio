"use client";

import { useEffect, useState } from "react";
import { SKILLS_DATA } from "@/data/skills";
import Heading from "@/components/Heading";

// Home-only component (not imported elsewhere), rewritten in place.
const SkillBar = ({ level }: { level: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(level));
    return () => cancelAnimationFrame(id);
  }, [level]);

  return (
    <div className="h-[3px] bg-ink-3">
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
    <div className="w-full">
      <Heading number="03" text="Technical Arsenal" color="verdigris" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brass/20 border border-brass/30">
        {categories.map(([category, skills]) => (
          <div key={category} className="bg-ink-2 p-5">
            <h3 className="font-technical text-xs tracking-widest uppercase text-verdigris mb-4">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <div className="space-y-3">
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
    </div>
  );
}
