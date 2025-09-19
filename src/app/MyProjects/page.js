/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";

const PROJECTS = [
  {
    title: "Wine-Locker",
    description:
      "A Linux security utility I built solo using shell scripts. Locks Wine so only root can execute .exe files, preventing accidental or malicious execution. Features temporary unlock timers and toggleable access for secure workflows. Demonstrates my expertise in Linux security, system-level scripting, and backend logic.",
    picture: "/winlock.png",
    buttons: [
      {
        link: "https://github.com/theamanullahdev/wine-locker",
        text: "GitHub",
        color: "green",
        external: true,
      },
    ],
  },
  {
    title: "LetterSmith",
    description:
      "An AI-powered cover letter generator I built using Next.js, TailwindCSS, Framer Motion, and REST APIs. Users input their CV, job description, and prompts to instantly get polished cover letters. This project showcases my Full-Stack development skills, API integration expertise, and attention to frontend experience.",
    preview: "https://lettersmithai.vercel.app",
    picture: "/LTsmith1.png",
    buttons: [
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
    title: "On-Chain Chat App",
    description:
      "A decentralized chat application built on Injective using CosmWasm smart contracts. Fully on-chain profiles, messaging, and identity management with a Next.js and Framer Motion frontend. Highlights my blockchain architecture knowledge, smart contract development, and ability to build full-stack dApps independently.",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Solana_logo.png",
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
    title: "NFT Launchpad",
    description:
      "A platform I built to launch NFT collections with minting dashboards, whitelist management, and blockchain integration. Developed with Next.js, smart contracts, and Solana/Ethereum SDKs. This project highlights my Full-Stack and blockchain expertise, smart contract skills, and experience building scalable dApps.",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
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
    title: "Portfolio Website",
    description:
      "This very website is my portfolio, built solo using Next.js, TailwindCSS, and Framer Motion. It demonstrates my frontend and backend skills, attention to detail, and ability to integrate smooth animations and responsive design. It also acts as a live showcase of my coding style and Full-Stack expertise.",
    picture: "/portfolio.png",
    buttons: [
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
];

export default function MyProjects() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
      {/* Hero */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <img
            src="/piclogo.png"
            alt="Projects"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48"
          />
        </motion.div>

        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <HighlightWords text="My Projects" color="green" />
        </div>
        <div className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          From <span className="text-green-500 font-semibold">security</span> to{" "}
          <span className="text-orange-500 font-semibold">AI & blockchain</span>
          , here’s a taste of what I’ve been building.
        </div>
      </section>

      {/* Projects */}
      {PROJECTS.map((proj, idx) => (
        <section
          key={idx}
          className="snap-start h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 text-center md:text-left"
        >
          {idx % 2 === 0 ? (
            <>
              {/* Image / Preview */}
              <motion.div
                className={`w-full max-w-md h-64 rounded-xl shadow-lg overflow-hidden border-4 ${
                  proj.comingSoon ? "border-orange-500" : "border-green-500"
                }`}
                initial={{ x: -60, opacity: 0 }}
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
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-md"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                    proj.comingSoon
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-green-600 dark:text-green-400"
                  }`}
                >
                  {proj.title}
                </div>
                <div className="text-base sm:text-lg mb-6">
                  {proj.description}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
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
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-md"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                    proj.comingSoon
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-green-600 dark:text-green-400"
                  }`}
                >
                  {proj.title}
                </div>
                <div className="text-base sm:text-lg mb-6">
                  {proj.description}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
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
                className={`w-full max-w-md h-64 rounded-xl shadow-lg overflow-hidden border-4 ${
                  proj.comingSoon ? "border-orange-500" : "border-green-500"
                }`}
                initial={{ x: 60, opacity: 0 }}
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
      <section className="snap-start h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <HighlightWords text="More Cooking Soon..." color="orange" />
        </motion.div>
        <div className="text-base sm:text-lg md:text-xl max-w-xl">
          Some ideas are still in progress. Check back later or follow me on
          GitHub to see updates!
        </div>
        <div className="mt-6">
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
  );
}
