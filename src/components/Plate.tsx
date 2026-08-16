import React from "react";
import Image from "next/image";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Frame from "@/components/Frame";
import LivePreview from "@/components/LivePreview";

// "Illustrated plate" project card — docs/DESIGN.md §7. Replaces Cards.tsx.
// Either a static `image` or a live `preview` iframe (not both) — the
// preview keeps its own scroll/interaction, nothing disabled; a small mat
// inset around it keeps the Frame ornament tracing the card's edge instead
// of sitting on top of the live content.
interface PlateProps {
  image?: string;
  preview?: string;
  figure: string;
  title: string;
  caption?: string;
  description: string;
  tags?: string[];
  href: string;
  external?: boolean;
}

// Same bevel + banded-groove + texture language as Button/Navbar (docs/
// DESIGN.md §7 ornamental addendum) — the plate reads as a mounted,
// riveted plaque, not a flat card.
const PLATE_SHADOW =
  "shadow-[inset_0_1px_0_rgba(230,196,110,0.1),inset_0_-1px_0_rgba(0,0,0,0.4),inset_0_0_0_4px_rgba(13,11,8,0.95),inset_0_0_0_6px_rgba(230,196,110,0.55),0_4px_10px_rgba(0,0,0,0.35)]";

const Plate = ({ image, preview, figure, title, caption, description, tags, href, external }: PlateProps) => (
  <div
    className={`group plaque plaque-fill relative flex flex-col transition-colors duration-300 ${PLATE_SHADOW}`}
  >
    <Frame className="text-brass/40 group-hover:text-brass/80 transition-colors duration-300" />
    <div className={`relative w-full h-48 sm:h-56 border-b border-brass/30 ${preview ? "p-1.5 sm:p-2" : ""}`}>
      {preview ? (
        <div className="relative w-full h-full overflow-hidden bg-ink-2">
          <LivePreview src={preview} title={title} />
        </div>
      ) : (
        <Image src={image!} alt={title} fill sizes="(max-width: 639px) 100vw, 400px" className="object-cover" />
      )}
    </div>
    <div className="px-4 py-2 border-b border-brass/20">
      <span className="font-technical text-2xs text-paper-dim">
        {figure} — {title}
        {caption ? `, ${caption}` : ""}
      </span>
    </div>
    <div className="flex flex-col gap-3 p-4 sm:p-5 flex-1">
      <p className="font-reading text-sm text-paper-dim leading-relaxed flex-1">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
      <Button href={href} external={external} color="brass" className="self-start mt-1">
        {external ? "Visit" : "Details"}
      </Button>
    </div>
  </div>
);

export default Plate;
