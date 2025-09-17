/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PROJECTS = [
  {
    title: "Wine-Locker",
    description:
      "A Linux security utility that lets you lock Wine so only root can run it thus blocking random `.exe` files from executing. Unlock temporarily (e.g., 60s) or toggle access with one command.",
    picture: "/winlock.png",
    link: "https://github.com/theamanullahdev/wine-locker",
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
    link: "/ComingSoon",
    buttonText: "Coming Soon",
  },
  {
    title: "NFT Launchpad",
    description:
      "A platform to launch NFT collections seamlessly, complete with minting dashboard, whitelist, and blockchain integration.",
    picture: "/next.svg",
    link: "/ComingSoon",
    buttonText: "Coming Soon",
  },
  {
    title: "Portfolio Website",
    description:
      "The site you are looking at right now! Built with Next.js, TailwindCSS, and framer-motion for animations.",
    picture: "/vercel.svg",
    link: "/ComingSoon",
    buttonText: "Coming Soon",
  },
];

const Page = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
      {/* Hero Section */}
      <section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-300">
            Welcome to My Projects
          </h1>
          <p className="text-lg max-w-xl mb-6">
            I love building tools that blend <strong>AI</strong>,{" "}
            <strong>blockchain</strong>, and{" "}
            <strong>open-source software</strong>. Scroll down to see some
            highlights of my work!
          </p>
          <Link
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Explore Projects
          </Link>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/globe.svg"
            alt="Hero Illustration"
            className="w-72 h-72 md:w-96 md:h-96"
          />
        </motion.div>
      </section>

      {/* Talking Section */}
      <section
        id="projects"
        className="snap-start h-screen flex flex-col items-center justify-center px-8"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-300">
          What I Build
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <motion.div
            className="p-6 border-4 border-blue-400 rounded-xl shadow-lg bg-white dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">🔒 Security</h3>
            <p>Projects like Wine-Locker that secure your Linux environment.</p>
          </motion.div>
          <motion.div
            className="p-6 border-4 border-green-400 rounded-xl shadow-lg bg-white dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">🤖 AI</h3>
            <p>AI apps like LetterSmith to simplify job applications.</p>
          </motion.div>
          <motion.div
            className="p-6 border-4 border-purple-400 rounded-xl shadow-lg bg-white dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">🌐 Blockchain</h3>
            <p>
              On-chain chat apps, NFT launchpads, and dApps on Solana/Injective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Sections */}
      {PROJECTS.map((proj, idx) => (
        <section
          key={idx}
          className="snap-start h-screen grid md:grid-cols-2 items-center px-8 gap-8"
        >
          {idx % 2 === 0 ? (
            <>
              {/* Image */}
              <motion.div
                className="w-full h-80 border-4 border-blue-500 rounded-xl shadow-lg overflow-hidden"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={proj.picture}
                  alt={proj.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4">{proj.title}</h2>
                <p className="text-lg mb-6">{proj.description}</p>
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  {proj.buttonText}
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              {/* Text first */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4">{proj.title}</h2>
                <p className="text-lg mb-6">{proj.description}</p>
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  {proj.buttonText}
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full h-80 border-4 border-blue-500 rounded-xl shadow-lg overflow-hidden"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={proj.picture}
                  alt={proj.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </>
          )}
        </section>
      ))}

      {/* Outro Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center text-center px-8">
        <motion.div
          className="mb-6 flex gap-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="https://github.com/theamanullahdev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </Link>
          <Link
            href="https://twitter.com/theamanullahdev"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </Link>
        </motion.div>

        <h2 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-300">
          Get in Touch
        </h2>
        <p className="text-lg max-w-xl">
          Let&apos;s collaborate or just say hi! I&apos;m always open to
          interesting projects and ideas.
        </p>
      </section>
    </div>
  );
};

export default Page;
