/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

const PROJECTS = [
  {
    id: "digital-marketing-trade",
    title: "Digital Marketing Trade",
    description:
      "Multi-service digital agency platform delivering Web3, ecommerce, and marketing solutions. Technical infrastructure design, core web platform, service architecture, and client interaction systems. Production-level system demonstrating enterprise architecture, business systems engineering, and real-world deployment at scale.",
    preview: "https://alhijaz.agency",
    picture: "/alhijaz.png",
    techs: ["Full-Stack", "Next.js", "Architecture", "Business Systems"],
    difficulty: "Enterprise",
    featured: true,
    buttons: [
      {
        link: "/projectpgs/digital-marketing-trade",
        text: "Details",
        color: "cyan",
        external: false,
      },
      {
        link: "https://alhijaz.agency",
        text: "Live Platform",
        color: "orange",
        external: true,
      },
    ],
  },
  {
    id: "lettersmith",
    title: "LetterSmith",
    description:
      "AI-powered cover letter generator using Next.js, TailwindCSS, Framer Motion, and REST APIs. Users input CV, job description, and prompts to generate polished cover letters instantly. Full-Stack development showcasing API integration, frontend optimization, and real-time processing.",
    preview: "https://lettersmithai.vercel.app",
    picture: "/LTsmith1.png",
    techs: ["Next.js", "React", "TailwindCSS", "Framer Motion", "APIs"],
    difficulty: "Intermediate",
    buttons: [
      {
        link: "/projectpgs/lettersmith",
        text: "Details",
        color: "cyan",
        external: false,
      },
      {
        link: "https://github.com/theamanullahdev/lettersmith",
        text: "GitHub",
        color: "green",
        external: true,
      },
      {
        link: "https://lettersmithai.vercel.app/",
        text: "Live Demo",
        color: "orange",
        external: true,
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal portfolio website featuring responsive design, smooth animations, and terminal-inspired aesthetics. Built with Next.js, TailwindCSS, and Framer Motion. Demonstrates frontend expertise, component architecture, ultra-responsive design (150px - 8K), and attention to user experience details.",
    preview: "https://www.amanullahdev.com/PreviewCard",  
    picture: "/portfolio.png",
    techs: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    difficulty: "Intermediate",
    buttons: [
      {
        link: "/projectpgs/portfolio",
        text: "Details",
        color: "cyan",
        external: false,
      },
      {
        link: "https://github.com/theamanullahdev/portfolio",
        text: "GitHub",
        color: "green",
        external: true,
      },
      {
        link: "https://amanullahdev.com",
        text: "Live Site",
        color: "orange",
        external: true,
      },
    ],
  },
  {
    id: "wine-locker",
    title: "Wine-Locker",
    description:
      "Linux security utility using shell scripts to lock Wine executables for enhanced system security. Features temporary unlock timers, toggleable access control, and multi-user security workflows. System-level development demonstrating Linux internals expertise and security best practices.",
    picture: "/winlock.png",
    techs: ["Bash", "Linux", "Security", "Scripting"],
    difficulty: "Advanced",
    buttons: [
      {
        link: "/projectpgs/wine-locker",
        text: "Details",
        color: "cyan",
        external: false,
      },
      {
        link: "https://github.com/theamanullahdev/wine-locker",
        text: "GitHub",
        color: "green",
        external: true,
      },
    ],
  },
  {
    id: "ahatasham-work",
    title: "Ahatasham Work Portfolio",
    description:
      "Professional portfolio website for Ahatasham, an expert in Shopify, ecommerce, and digital marketing with his own agency. Showcases expertise in building high-performing online stores and data-driven marketing strategies. Demonstrates full-stack web development with conversion-optimized design for lead generation.",
    preview: "https://ahtashamwork.com",
    picture: "/ahatasham-preview.png",
    techs: ["Shopify", "Ecommerce", "Marketing", "Portfolio"],
    difficulty: "Intermediate",
    buttons: [
      {
        link: "/projectpgs/AhtashamWorkPortfolio",
        text: "Details",
        color: "cyan",
        external: false,
      },
      {
        link: "https://ahtashamwork.com",
        text: "Visit Portfolio",
        color: "orange",
        external: true,
      },
    ],
  },
  {
    id: "on-chain-chat",
    title: "On-Chain Chat App",
    description:
      "Decentralized chat application built on Injective using CosmWasm smart contracts. Fully on-chain profiles, messaging, and identity management with Next.js and Framer Motion frontend. Blockchain architecture and smart contract development for production dApps.",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Solana_logo.png",
    techs: ["CosmWasm", "Solidity", "Next.js", "Web3.js", "Blockchain"],
    difficulty: "Advanced",
    comingSoon: true,
    buttons: [
      {
        link: "/ComingSoon",
        text: "Coming Soon",
        color: "orange",
        external: false,
      },
    ],
  },
  {
    id: "nft-launchpad",
    title: "NFT Launchpad",
    description:
      "NFT collection launch platform featuring minting dashboards, whitelist management, and blockchain integration. Solana/Ethereum SDKs with Next.js frontend. Full-Stack and blockchain expertise demonstrating scalable dApp architecture and Web3 integration.",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
    techs: ["Solidity", "Next.js", "Web3.js", "Smart Contracts"],
    difficulty: "Advanced",
    comingSoon: true,
    buttons: [
      {
        link: "/ComingSoon",
        text: "Coming Soon",
        color: "orange",
        external: false,
      },
    ],
  },
];

export default function MyProjects() {
  return (
    <DynamicBackground
      circleCount={6}
      lineCount={6}
      triangleCount={3}
      codeCount={10}
    >
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
        {/* Hero */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <img
              src="/piclogo.png"
              alt="Projects"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44"
            />
          </motion.div>

          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            <HighlightWords text="My Projects" color="green" />
          </div>
          <div className="text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
            From <span className="text-green-500 font-semibold">security</span>{" "}
            to{" "}
            <span className="text-orange-500 font-semibold">
              AI & blockchain
            </span>
            , here’s a taste of what I’ve been building.
          </div>
        </section>

        {/* Projects */}
        {PROJECTS.map((proj, idx) => (
          <section
            key={idx}
            className="snap-start h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 gap-6 sm:gap-10 text-center md:text-left"
          >
            {idx % 2 === 0 ? (
              <>
                {/* Image / Preview */}
                <motion.div
                  className={`w-full max-w-md h-52 sm:h-64 md:h-64 rounded-xl shadow-lg overflow-hidden border-4 ${
                    proj.comingSoon ? "border-orange-500" : "border-green-500"
                  }`}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {proj.preview ? (
                    <div className="w-full h-full overflow-auto scrollbar-hide">
                      <iframe
                        src={proj.preview}
                        title={proj.title}
                        className="w-full h-full"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  ) : (
                    <img
                      src={proj.picture}
                      alt={proj.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full max-w-md flex flex-col items-center md:items-start"
                >
                  <div
                    className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 ${
                      proj.comingSoon
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {proj.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                    {proj.description}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 sm:mb-6 w-full">
                    {proj.techs.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/15 text-green-400 border border-green-400/40 font-mono font-semibold hover:bg-green-500/25 hover:border-green-400/70 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 w-full">
                    {proj.buttons.map((btn, i) => (
                      <TerminalButton
                        key={i}
                        href={btn.link}
                        color={btn.color}
                        external={btn.external}
                      >
                        {btn.text}
                      </TerminalButton>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* Text */}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full max-w-md flex flex-col items-center md:items-start"
                >
                  <div
                    className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 ${
                      proj.comingSoon
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {proj.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                    {proj.description}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 sm:mb-6 w-full">
                    {proj.techs.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/15 text-green-400 border border-green-400/40 font-mono font-semibold hover:bg-green-500/25 hover:border-green-400/70 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 w-full">
                    {proj.buttons.map((btn, i) => (
                      <TerminalButton
                        key={i}
                        href={btn.link}
                        color={btn.color}
                        external={btn.external}
                      >
                        {btn.text}
                      </TerminalButton>
                    ))}
                  </div>
                </motion.div>

                {/* Image / Preview */}
                <motion.div
                  className={`w-full max-w-md h-52 sm:h-64 md:h-64 rounded-xl shadow-lg overflow-hidden border-4 ${
                    proj.comingSoon ? "border-orange-500" : "border-green-500"
                  }`}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {proj.preview ? (
                    <div className="w-full h-full overflow-auto scrollbar-hide">
                      <iframe
                        src={proj.preview}
                        title={proj.title}
                        className="w-full h-full"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  ) : (
                    <img
                      src={proj.picture}
                      alt={proj.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </motion.div>
              </>
            )}
          </section>
        ))}

        {/* Outro */}
        <section className="snap-start h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <HighlightWords text="More Cooking Soon..." color="orange" />
          </motion.div>
          <div className="text-xs sm:text-sm md:text-base max-w-xl">
            Some ideas are still in progress. Check back later or follow me on
            GitHub to see updates!
          </div>
          <div className="mt-4 sm:mt-6">
            <TerminalButton
              href="https://github.com/theamanullahdev"
              color="green"
              external={true}
            >
              Visit My GitHub
            </TerminalButton>
          </div>
        </section>
      </div>
    </DynamicBackground>
  );
}
