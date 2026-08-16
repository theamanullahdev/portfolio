"use client";

import React, { useEffect, useRef, useState } from "react";

// "The Route" — docs/DESIGN.md §5. One RouteMarker per waypoint, placed as
// the first item in a `lg:grid lg:grid-cols-[2rem_1fr]` row alongside that
// waypoint's content — CSS Grid's default stretch alignment gives the
// marker a definite height equal to the row (the waypoint), so its line
// fills exactly that waypoint's height with no JS measurement. Consecutive
// waypoints (no vertical gap between them) chain into what reads as one
// continuous track. Reveal reuses Heading's one-shot IntersectionObserver
// pattern — no scroll-percentage listener, no resize edge cases.
interface RouteMarkerProps {
  number: string;
  final?: boolean;
}

export function RouteMarker({ number, final = false }: RouteMarkerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className="hidden lg:flex h-full flex-col items-center">
      <span className="relative w-2.5 h-2.5 shrink-0 rounded-full border border-brass">
        <span
          className={`absolute inset-0 rounded-full transition-colors duration-500 ${
            revealed ? "bg-brass-bright" : "bg-ink-2"
          }`}
        />
        {/* one-shot arrival ping — plays twice, then stops (not a loop) */}
        {revealed && (
          <span className="absolute inset-0 rounded-full bg-brass-bright animate-[route-arrive_1.6s_ease-out_2] motion-reduce:animate-none" />
        )}
      </span>
      <span className="font-technical text-[0.55rem] text-brass/70 mt-1.5">§{number}</span>
      {!final && (
        <span className="relative w-px flex-1 mt-2">
          <span aria-hidden className="absolute inset-0 bg-brass/15" />
          <span
            aria-hidden
            className={`absolute inset-0 bg-brass-bright origin-top transition-transform duration-700 ease-out ${
              revealed ? "scale-y-100" : "scale-y-0"
            }`}
          />
        </span>
      )}
    </div>
  );
}
