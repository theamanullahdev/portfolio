import Button from "@/components/Button";
import AmbientBackground from "@/components/AmbientBackground";

export default function ComingSoon() {
  return (
    <AmbientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <span className="font-technical text-2xs text-paper-dim tracking-widest mb-4">§ — — — UNCHARTED</span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-paper mb-6">Still being drawn</h1>
        <p className="font-reading text-base sm:text-lg text-paper-dim max-w-lg leading-relaxed mb-8">
          This entry hasn&apos;t made it into the almanac yet. Stay tuned — I&apos;m
          working on something exciting.
        </p>
        <Button href="/MyProjects" color="brass">
          Back to Projects
        </Button>
      </div>
    </AmbientBackground>
  );
}
