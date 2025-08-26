/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    title: "Wine-Locker",
    description:
      "A Linux shell script that can lock or unlock Wine execution on demand — preventing random EXEs from running and improving system security.",
    picture: "/file.svg",
    link: "https://github.com",
    buttonText: "GitHub",
  },
  {
    title: "LetterSmith",
    description:
      "An AI-powered tool that generates tailored cover letters. Input your CV, job post, and prompt — instantly download a polished cover letter.",
    picture: "/globe.svg",
    link: "https://github.com",
    buttonText: "GitHub",
  },
  {
    title: "On-Chain Chat App",
    description:
      "A decentralized chat application deployed on Injective/Solana. Full profiles, messaging, and identity stored on-chain.",
    picture: "/window.svg",
    link: "https://example.com",
    buttonText: "Demo",
  },
  {
    title: "NFT Launchpad",
    description:
      "A platform to launch NFT collections seamlessly, complete with minting dashboard, whitelist, and blockchain integration.",
    picture: "/next.svg",
    link: "https://example.com",
    buttonText: "Visit",
  },
  {
    title: "Portfolio Website",
    description:
      "The site you are looking at right now! Built with Next.js, TailwindCSS, and framer-motion for animations.",
    picture: "/vercel.svg",
    link: "https://github.com",
    buttonText: "Source",
  },
  {
    title: "Future Placeholder",
    description:
      "This slot is reserved for upcoming projects — stay tuned for something amazing!",
    picture: "/AD_logo.png",
    link: "#",
    buttonText: "Coming Soon",
  },
];

const Page = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
      {/* Hero Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="w-48 h-48 mb-6 rounded-full border-4 border-blue-600 flex items-center justify-center overflow-hidden shadow-lg bg-white dark:bg-gray-800"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/AD_logo.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome! Here you’ll find the projects I’ve built — ranging from
          security scripts and AI tools to blockchain-powered apps and NFT
          platforms.
        </motion.p>
      </section>

      {/* Talking Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-yellow-700 dark:text-yellow-300"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why I Build These Projects
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Each project I’ve worked on is a step forward in exploring new
          technologies — whether it’s **system security** (Wine-Locker), **AI
          for productivity** (LetterSmith), or **blockchain innovation**
          (on-chain chat apps & NFT launchpads).
          <br />I aim to solve real problems with creative, modern solutions.
        </motion.p>
      </section>

      {/* Projects Sections */}
      {PROJECTS.map((proj, idx) => (
        <section
          key={idx}
          className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            className="w-64 h-64 mb-6 rounded-2xl border-4 border-blue-500 flex items-center justify-center overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={proj.picture}
              alt={proj.title}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {proj.title}
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {proj.description}
          </motion.p>

          <Link
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            {proj.buttonText}
          </Link>
        </section>
      ))}

      {/* Outro Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-green-700 dark:text-green-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thanks for Scrolling!
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          That’s a glimpse into my work. I’m always open to collaborations,
          ideas, or just a chat. Let’s build something amazing together!
        </motion.p>
        <Link
          href="/MsgMe"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Page;
