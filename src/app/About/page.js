/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicBackground from "@/components/DynamicBackground";
import Typewriter from "@/components/Typewriter";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";

const AboutPage = () => {
  return (
    <DynamicBackground
      circleCount={5}
      lineCount={5}
      triangleCount={4}
      codeCount={8}
    >
      <div className="snap-y snap-mandatory h-screen overflow-scroll text-gray-800 dark:text-white">
        {/* Hero / Intro */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold mb-6 text-green-500 dark:text-green-300 font-mono">
              <Typewriter text="Amanullah Malik" delay={120} />
            </h1>
            <HighlightWords text="The Code That Works!" />
            <p className="text-lg mb-8">
              <Typewriter
                text="Full-stack developer specialized in Next.js, React, and Blockchain. I build secure, performant apps that scale — from dApps to AI tools."
                delay={20}
              />
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <TerminalButton href="/projects">See My Projects</TerminalButton>
              <TerminalButton href="/resume.pdf" external>
                Download Resume
              </TerminalButton>
            </div>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-green-500 dark:text-green-300 font-mono">
              About Me
            </h2>
            <p className="text-lg mb-6">
              I am The Amanullah Developer. Hence the name AmanullahDev.com
            </p>
            <p className="text-lg mb-6">
              I&apos;m a developer who blends creativity and precision. My work
              spans modern web frameworks, smart contracts, and open-source
              projects. Whether it&apos;s designing secure blockchain apps or
              crafting smooth React UIs, I focus on solutions that last.
            </p>
            <TerminalButton href="https://github.com/theamanullahdev" external>
              Explore My GitHub
            </TerminalButton>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center">
          <h2 className="text-4xl font-bold mb-10 text-green-500 dark:text-green-300 font-mono">
            Skills & Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "JavaScript",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
              },
              {
                name: "React",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
              },
              {
                name: "Next.js",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Node.js",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Electron",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
              },
              {
                name: "Solidity",
                logo: "https://logowik.com/content/uploads/images/solidity-programming-language881.logowik.com.webp",
              },
              {
                name: "CosmWasm",
                logo: "https://avatars.githubusercontent.com/u/56747695?s=200&v=4",
              },
              {
                name: "Bash",
                logo: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
              },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="p-6 border-4 border-green-400 rounded-xl shadow-lg bg-black text-green-400 font-mono flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg shadow-md mb-4 overflow-hidden p-2">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <TerminalButton href="/MsgMe">Let&apos;s Connect</TerminalButton>
          </div>
        </section>

        {/* Philosophy / Motto */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center">
          <motion.img
            src="/AD_logo.png"
            alt="AD Logo"
            className="w-32 h-32 mb-6"
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-3xl font-bold mb-4 text-green-500 dark:text-green-300 font-mono">
            “The Code That Works!”
          </h2>
          <p className="text-lg max-w-xl mb-6">
            I believe good code is simple, reliable, and built to last.
            That&apos;s the philosophy behind every project I ship.
          </p>
          <TerminalButton href="/MsgMe">Message Me</TerminalButton>
        </section>

        {/* Outro / Contact */}
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
                className="text-4xl text-green-400 hover:text-green-200 transition"
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
                className="text-4xl text-green-400 hover:text-green-200 transition"
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
                className="text-4xl text-green-400 hover:text-green-200 transition"
              />
            </Link>
          </motion.div>

          <h2 className="text-3xl font-semibold mb-4 text-green-500 dark:text-green-300 font-mono">
            Get in Touch
          </h2>
          <p className="text-lg max-w-xl mb-6">
            I&apos;m open to collaborations, freelance gigs, and exciting new
            roles. Let&apos;s build something amazing together.
          </p>
          <TerminalButton href="/resume.pdf" external>
            Download Resume
          </TerminalButton>
        </section>
      </div>
    </DynamicBackground>
  );
};

export default AboutPage;
