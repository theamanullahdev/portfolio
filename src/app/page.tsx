import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Tag from "@/components/Tag";
import Plate from "@/components/Plate";
import AmbientBackground from "@/components/AmbientBackground";
import { RouteMarker } from "@/components/Route";
import StatsSection from "@/components/StatsSection";
import SkillsShowcase from "@/components/SkillsShowcase";

// Four waypoints along the Route (docs/DESIGN.md §5, §8) instead of six
// thin stacked sections — hero content is unchanged, everything after it
// is reimagined per the v2 rework plan.
export default function Home() {
  return (
    <AmbientBackground>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Waypoint 1 — Hero (content unchanged) */}
        <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-20 sm:py-28 border-b border-brass/20">
          <RouteMarker number="01" />
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                {/* Slow-rotating instrument ring — one continuous
                    transform-only loop, ~90s per turn. */}
                <svg
                  aria-hidden
                  viewBox="0 0 100 100"
                  className="absolute -inset-6 sm:-inset-8 text-brass/50 animate-[spin_90s_linear_infinite] motion-reduce:animate-none"
                >
                  <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    const long = i % 6 === 0;
                    return (
                      <line
                        key={i}
                        x1="50"
                        y1={long ? "2" : "4.5"}
                        x2="50"
                        y2={long ? "7" : "7.5"}
                        stroke="currentColor"
                        strokeWidth={long ? "0.7" : "0.35"}
                        transform={`rotate(${angle} 50 50)`}
                      />
                    );
                  })}
                </svg>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-brass/50">
                  <Image
                    src="/piclogo.png"
                    alt="Amanullah"
                    fill
                    sizes="(max-width: 639px) 160px, 192px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="font-technical text-2xs text-paper-dim">Fig. 1 — Amanullah, 2026</span>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
              <span className="font-technical text-xs tracking-widest text-brass">§ 01 — HOME</span>
              <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-paper">
                The Amanullah
                <br />
                Developer
              </h1>
              <p className="font-reading text-base sm:text-lg text-paper-dim max-w-xl">
                I build modern websites and dApps on any blockchain. Let&apos;s create something
                amazing together.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/About" color="brass">
                  Explore
                </Button>
                <Button href="/MsgMe" color="verdigris">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Waypoint 2 — The Work (bio + skills ledger + stats, composed) */}
        <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-16 sm:py-20 border-b border-brass/20">
          <RouteMarker number="02" />
          <div>
            <Heading number="02" text="The Work" />

            <div className="mt-8 grid lg:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="font-reading text-base text-paper-dim space-y-4 max-w-[65ch]">
                  <p>
                    Full-stack development and blockchain systems are where I spend most of my
                    time — smart contracts, decentralized applications, and production web
                    platforms built to hold up under real traffic, not just demos.
                  </p>
                  <p>
                    Security isn&apos;t an add-on; it&apos;s how I build. And when a codebase has
                    gotten away from a team, I&apos;m usually the one brought in to make sense of
                    it again — clarity first, then speed.
                  </p>
                  <p className="text-brass">theamanullahdev@gmail.com</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  <Tag>Blockchain</Tag>
                  <Tag color="verdigris">Security</Tag>
                  <Tag color="rubric">Full-Stack</Tag>
                </div>

                <div className="mt-8">
                  <StatsSection />
                </div>

                <Button href="/About" color="brass" className="mt-8 self-start">
                  See More
                </Button>
              </div>

              <SkillsShowcase />
            </div>
          </div>
        </section>

        {/* Waypoint 3 — Field Notes (featured projects, data unchanged) */}
        <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-16 sm:py-20 border-b border-brass/20">
          <RouteMarker number="03" />
          <div>
            <Heading number="03" text="Field Notes" color="rubric" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Plate
                image="/winlock.png"
                figure="Fig. 2"
                title="Wine-Locker"
                description="A Linux security utility that lets you lock Wine so only root can run it, blocking random .exe files from executing."
                tags={["Security", "Linux"]}
                href="https://github.com/theamanullahdev/wine-locker"
                external
              />
              <Plate
                image="/LTsmith1.png"
                figure="Fig. 3"
                title="LetterSmith"
                description="An AI-powered tool that generates tailored cover letters. Input your CV, job post, and prompt — instantly download a polished letter."
                tags={["Next.js", "AI"]}
                href="https://github.com/theamanullahdev/lettersmith"
                external
              />
              <Plate
                image="/portfolio.png"
                figure="Fig. 4"
                title="Portfolio Website"
                description="The site you're looking at right now — built with Next.js, TailwindCSS, and a rebuilt Almanac design system."
                tags={["Next.js", "Design"]}
                href="https://github.com/theamanullahdev/portfolio"
                external
              />
            </div>
            <Button href="/MyProjects" color="brass" className="mt-8">
              See All Projects
            </Button>
          </div>
        </section>

        {/* Waypoint 4 — Get in Touch (Route's destination) */}
        <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-16 sm:py-20">
          <RouteMarker number="04" final />
          <div className="text-center lg:text-left">
            <Heading number="04" text="Get in Touch" />
            <p className="mt-6 font-reading text-base text-paper-dim max-w-xl mx-auto lg:mx-0">
              Let&apos;s collaborate or just say hi! I&apos;m always open to interesting projects
              and ideas.
            </p>
            <p className="mt-2 font-technical text-sm text-brass">theamanullahdev@gmail.com</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6 items-center">
              <Link
                href="https://github.com/theamanullahdev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-paper-dim hover:text-brass-bright transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </Link>
              <Link
                href="https://twitter.com/theamanullahdev"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-paper-dim hover:text-brass-bright transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              <Button href="/Resume" color="verdigris">
                Resume
              </Button>
              <Button href="/MsgMe" color="brass">
                Message
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AmbientBackground>
  );
}
