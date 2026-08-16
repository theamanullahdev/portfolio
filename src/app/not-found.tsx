import Button from "@/components/Button";
import Frame from "@/components/Frame";
import AmbientBackground from "@/components/AmbientBackground";

// Global 404 — docs/DESIGN.md §7/§8. Next.js renders this for any unmatched
// route. Deliberately the most ornate single panel on the site (bigger
// chamfer, thicker border, a second inset Frame layer) — a dead end is the
// moment a generic default-Next.js page would otherwise break the whole
// crafted-object identity, so it earns extra ornament rather than less.
const PLATE_SHADOW =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.15),inset_-2px_-2px_6px_rgba(0,0,0,0.6),inset_0_0_0_5px_rgba(13,11,8,0.95),inset_0_0_0_8px_rgba(230,196,110,0.6),0_8px_20px_rgba(0,0,0,0.5)]";

export default function NotFound() {
  return (
    <AmbientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
        <div
          className={`relative plaque plaque-fill border-2 border-brass-bright/70 px-8 py-12 sm:px-16 sm:py-16 max-w-lg w-full ${PLATE_SHADOW}`}
        >
          <Frame chamfer={16} className="text-brass-bright" />
          <div className="absolute inset-3 sm:inset-4 pointer-events-none">
            <Frame chamfer={20} compact className="text-brass/30" />
          </div>

          <span className="font-technical text-2xs tracking-widest text-brass">
            § 404 — UNCHARTED ENTRY
          </span>
          <h1 className="font-display text-7xl sm:text-8xl text-paper mt-4 mb-4">404</h1>
          <p className="font-reading text-sm sm:text-base text-paper-dim leading-relaxed mb-9 max-w-sm mx-auto">
            This page was never recorded in the almanac — or it&apos;s been
            struck from the ledger. Whatever you were looking for isn&apos;t
            filed under this entry.
          </p>
          <Button href="/" color="brass">
            Return Home
          </Button>
        </div>
      </div>
    </AmbientBackground>
  );
}
