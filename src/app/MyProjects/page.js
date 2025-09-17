/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";

const PROJECTS = [
  {
    title: "Wine-Locker",
    description:
      "A Linux security utility that lets you lock Wine so only root can run it thus blocking random `.exe` files from executing. Unlock temporarily (e.g., 60s) or toggle access with one command.",
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
      "An AI-powered tool that generates tailored cover letters. Input your CV, job post, and prompt — instantly download a polished cover letter.",
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
      "A decentralized chat application deployed on Injective/Solana. Full profiles, messaging, and identity stored on-chain.",
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
      "A platform to launch NFT collections seamlessly, complete with minting dashboard, whitelist, and blockchain integration.",
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
      "The site you are looking at right now! Built with Next.js, TailwindCSS, and framer-motion for animations.",
    // preview: "https://amanullahdev.com",
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
