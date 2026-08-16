import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Frame from "@/components/Frame";

// Shared chrome for the 5 project detail pages (docs/DESIGN.md §8) — back
// link, hero (image or live iframe), title/description/tags, then each
// page's own unique body content as children, then a CTA row. Keeps the
// per-project content (services lists, challenge write-ups, stat grids —
// these differ enough page to page that forcing one rigid prop shape would
// just recreate the old generic-template problem) fully custom while
// unifying the frame around it.
type DossierColor = "brass" | "verdigris" | "rubric";

interface CtaButton {
  href: string;
  label: string;
  color?: DossierColor;
  external?: boolean;
}

interface ProjectDossierProps {
  number: string;
  title: string;
  description: string;
  image?: string;
  iframeSrc?: string;
  tags?: string[];
  cta: CtaButton[];
  children?: React.ReactNode;
}

const PLATE_SHADOW =
  "shadow-[inset_0_1px_0_rgba(230,196,110,0.1),inset_0_-1px_0_rgba(0,0,0,0.4),inset_0_0_0_4px_rgba(13,11,8,0.95),inset_0_0_0_6px_rgba(230,196,110,0.55),0_4px_10px_rgba(0,0,0,0.35)]";

export default function ProjectDossier({
  number,
  title,
  description,
  image,
  iframeSrc,
  tags,
  cta,
  children,
}: ProjectDossierProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
      <Link
        href="/MyProjects"
        className="flex w-fit items-center gap-2 font-label text-xs tracking-wide text-brass/70 hover:text-brass-bright transition-colors duration-300 mb-8"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
        Back to Projects
      </Link>

      <Heading number={number} text={title} color="brass" as="h1" />
      <p className="font-reading text-sm sm:text-base text-paper-dim leading-relaxed max-w-2xl mt-5">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      {(image || iframeSrc) && (
        <div
          className={`group plaque plaque-fill relative w-full h-56 xs:h-64 sm:h-96 border border-brass/30 mt-8 ${
            iframeSrc ? "p-2.5 sm:p-3" : ""
          } ${PLATE_SHADOW}`}
        >
          <Frame className="text-brass/40 group-hover:text-brass/80 transition-colors duration-300" />
          {iframeSrc ? (
            // Inset in its own "mat" so the ornament frames the live,
            // scrollable site rather than sitting on top of it — the site
            // keeps its own scroll/interaction, nothing disabled here.
            <div className="relative w-full h-full overflow-hidden bg-ink-2">
              <iframe src={iframeSrc} title={title} className="w-full h-full" sandbox="allow-scripts allow-same-origin" />
            </div>
          ) : (
            <Image src={image!} alt={title} fill sizes="(max-width: 767px) 100vw, 896px" className="object-cover" />
          )}
        </div>
      )}

      <div className="mt-10 space-y-6 sm:space-y-8">{children}</div>

      <div className="flex flex-wrap gap-3 mt-10">
        {cta.map((btn) => (
          <Button key={btn.label} href={btn.href} color={btn.color ?? "brass"} external={btn.external}>
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
