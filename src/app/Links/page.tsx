import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";
import AmbientBackground from "@/components/AmbientBackground";

const LINKS = [
  { href: "/Resume", icon: faFile, label: "Resume", external: false },
  { href: "https://github.com/theamanullahdev", icon: faGithub, label: "GitHub", external: true },
  { href: "https://twitter.com/theAmanullahDev", icon: faTwitter, label: "Twitter", external: true },
  { href: "mailto:theamanullahdev@gmail.com", icon: faEnvelope, label: "Email", external: true },
  { href: "https://amanullahdev.com", icon: faGlobe, label: "Portfolio", external: true },
];

export default function LandingPage() {
  return (
    <AmbientBackground>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 sm:py-20 text-center">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-brass mb-6">
          <Image src="/piclogo.png" alt="Amanullah" fill sizes="(max-width: 639px) 112px, 144px" className="object-cover" priority />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-paper mb-2">Amanullah</h1>
        <p className="font-reading text-sm sm:text-base text-paper-dim max-w-xl mb-8">
          Full-Stack Developer — Blockchain — dApps — Security — Smart Contracts
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          {LINKS.map((link) => (
            <Button key={link.label} href={link.href} external={link.external} color="brass" className="w-full !justify-start !px-5">
              <span className="inline-flex items-center gap-3">
                <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                {link.label}
              </span>
            </Button>
          ))}
        </div>

        <p className="font-technical text-2xs text-paper-dim mt-10">
          &copy; {new Date().getFullYear()} Amanullah. All rights reserved.
        </p>
      </div>
    </AmbientBackground>
  );
}
