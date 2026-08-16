import Image from "next/image";
import AmbientBackground from "@/components/AmbientBackground";

// Standalone mini hero used as an iframe preview embed (see the
// "Portfolio Website" project card in src/app/page.tsx / MyProjects) — not
// reachable via the nav, so it stays deliberately minimal, no chrome.
export default function PreviewCard() {
  return (
    <AmbientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brass mb-5">
          <Image src="/piclogo.png" alt="Amanullah" fill sizes="128px" className="object-cover" priority />
        </div>
        <h1 className="font-display text-2xl sm:text-3xl text-paper mb-3">Welcome to my portfolio</h1>
        <p className="font-reading text-sm sm:text-base text-paper-dim max-w-md mb-2">
          I build modern websites and dApps on any blockchain. Let&apos;s create
          something amazing together.
        </p>
        <p className="font-label text-brass-bright text-sm tracking-wide">The Amanullah Developer</p>
      </div>
    </AmbientBackground>
  );
}
