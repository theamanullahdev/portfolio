import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode, faPython, faRust } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCube, faRocket } from "@fortawesome/free-solid-svg-icons";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Panel from "@/components/Panel";
import { RouteMarker } from "@/components/Route";

const SKILLS = [
  { icon: faJs, label: "JavaScript" },
  { icon: faReact, label: "React" },
  { icon: faNode, label: "Node.js" },
  { icon: faPython, label: "Python" },
  { icon: faRust, label: "Rust" },
  { icon: faDatabase, label: "Databases" },
  { icon: faCube, label: "Blockchain" },
  { icon: faRocket, label: "dApps" },
];

const JOURNEY = [
  {
    year: "2021 — Getting Started",
    text: "Began with web development fundamentals and basic projects, learning the core concepts of coding and software design.",
  },
  {
    year: "2022 — Blockchain Exploration",
    text: "Entered the blockchain world, experimenting with smart contracts and building early dApps on Solana and Ethereum.",
  },
  {
    year: "2023 — Full-Stack Projects",
    text: "Built full-stack CRUD applications, integrated backend services with databases, and optimized code for maintainability.",
  },
  {
    year: "2025 — Present",
    text: "Expanding into AI, blockchain, and modern web development simultaneously, focusing on secure, scalable, and high-performance applications.",
  },
];

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
      {/* §01 Intro */}
      <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-10 sm:py-14 border-b border-brass/20">
        <RouteMarker number="01" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden border-2 border-brass">
            <Image src="/piclogo.png" alt="Amanullah" fill sizes="(max-width: 639px) 112px, 144px" className="object-cover" priority />
          </div>
          <div>
            <Heading number="01" text="About Me" color="brass" />
            <div className="font-reading text-sm sm:text-base text-paper-dim leading-relaxed space-y-4 mt-4">
              <p>
                I&apos;m a full-stack developer with a strong focus on blockchain —
                smart contracts, dApps, and scalable web solutions. Whether it&apos;s
                designing secure blockchain apps or untangling a messy
                codebase, I&apos;m usually the one making sure everything runs
                smoothly and efficiently.
              </p>
              <p>
                My work spans frontend frameworks like React, backend
                services in Node.js, and open-source contributions. Security
                and reliability stay top of mind, especially in decentralized
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §02 Skills */}
      <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-10 sm:py-14 border-b border-brass/20">
        <RouteMarker number="02" />
        <div>
          <Heading number="02" text="Skills" color="verdigris" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {SKILLS.map((skill) => (
              <Panel key={skill.label} color="verdigris" className="flex flex-col items-center gap-2 !p-4">
                <FontAwesomeIcon icon={skill.icon} className="text-2xl text-verdigris" />
                <span className="font-label text-2xs tracking-wide text-paper text-center">{skill.label}</span>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* §03 Journey */}
      <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-10 sm:py-14 border-b border-brass/20">
        <RouteMarker number="03" />
        <div>
          <Heading number="03" text="Journey" color="rubric" />
          <div className="space-y-4 mt-6 max-w-2xl">
            {JOURNEY.map((item) => (
              <div key={item.year} className="border-l-2 border-brass/40 pl-4 py-1">
                <div className="font-label text-sm text-brass-bright mb-1">{item.year}</div>
                <p className="font-reading text-sm text-paper-dim">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §04 CTA */}
      <section className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-10 sm:py-14">
        <RouteMarker number="04" final />
        <div>
          <Heading number="04" text="Let's Work Together" color="brass" />
          <p className="font-reading text-sm sm:text-base text-paper-dim max-w-xl mt-4 mb-6">
            I&apos;m always open to collaborations, freelance work, or consulting
            on blockchain and full-stack projects — from backend to
            frontend, secure and built to last.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="https://github.com/theamanullahdev" external color="brass">
              Connect on GitHub
            </Button>
            <Button href="/Resume" color="verdigris">
              View Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
