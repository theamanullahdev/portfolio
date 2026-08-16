import React from "react";

// Zoomed-out live site preview — docs/DESIGN.md §7. A 1:1 iframe in a small
// card mostly just shows the site's nav bar; instead the iframe is rendered
// at `100/scale` percent size (so the page lays out as if in a much wider
// viewport, showing its real desktop layout rather than a mobile fallback)
// and then visually shrunk back down with `transform: scale()` — the same
// zoomed-out-thumbnail trick devtools device previews use. Interaction and
// scroll both still work: CSS transforms don't change hit-testing.
export default function LivePreview({
  src,
  title,
  scale = 0.42,
}: {
  src: string;
  title: string;
  scale?: number;
}) {
  const inverse = 100 / scale;
  return (
    <div className="relative w-full h-full overflow-hidden">
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 border-0"
        style={{
          width: `${inverse}%`,
          height: `${inverse}%`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
