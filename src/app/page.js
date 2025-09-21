/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Cards from "@/components/Cards";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import HighlightWords from "@/components/HighlightWords";
import Typewriter from "@/components/Typewriter";
import TerminalButton from "@/components/TerminalButton";

export default function Home() {
  return (
    <DynamicBackground
      circleCount={5}
      lineCount={5}
      triangleCount={4}
      codeCount={8}
    >
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
        {/* Home Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.div
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-4 sm:mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/piclogo.png"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Title */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
            <HighlightWords text="Welcome to my portfolio" color="green" />
          </div>

          {/* Tagline */}
          <motion.div
            className="text-sm sm:text-base md:text-lg max-w-xl font-medium mb-2 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Typewriter
              text="I build modern websites and dApps on any blockchain. Let's create something amazing together!"
              delay={20}
              color="white"
            />
          </motion.div>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
            <Typewriter
              text="The Amanullah Developer!"
              delay={20}
              color="green"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.div
            className="mb-4 sm:mb-6 flex gap-3 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all">
              <img
                src="https://www.ccn.com/wp-content/uploads/2023/10/how-does-the-bitcoin-source-code-define-its-21-million-cap.webp"
                alt="About Img 1"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all">
              <img
                src="https://www.finoit.com/wp-content/uploads/2022/09/java-coding-best-practices.jpg"
                alt="About Img 2"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-2 sm:mb-4">
            <HighlightWords text="About Me" color="orange" />
          </div>

          <div className="text-sm sm:text-base md:text-lg max-w-xl space-y-2 sm:space-y-3">
            <p>
              I&apos;m a full-stack developer with a strong focus on blockchain.
              I build smart contracts, decentralized applications, and complete
              web solutions that perform reliably in the real world.
            </p>
            <p>
              I also bring a background in cybersecurity, ensuring every project
              is secure, reliable, and resilient. When codebases get messy, I
              step in to clean up and restore clarity so teams can move faster
              with confidence.
            </p>
            <p>
              You can reach me at:{" "}
              <span className="font-semibold text-green-500">
                theamanullahdev@gmail.com
              </span>
            </p>
            <p>I write Code, That works!</p>
          </div>

          <div className="mt-4 sm:mt-6">
            <TerminalButton href="/About" color="orange">
              See More
            </TerminalButton>
          </div>
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
            <HighlightWords text="Projects" color="blue" />
          </div>

          <Cards
            numberOfCards={3}
            items={[
              {
                picture: "/winlock.png",
                title: "Wine-Locker",
                description:
                  "A Linux security utility that lets you lock Wine so only root can run it thus blocking random `.exe` files from executing.",
                link: "https://github.com/theamanullahdev/wine-locker",
                buttonText: "GitHub",
              },
              {
                picture: "/LTsmith1.png",
                title: "LetterSmith",
                description:
                  "An AI-powered tool that generates tailored cover letters. Input your CV, job post, and prompt — instantly download a polished cover letter.",
                link: "https://github.com/theamanullahdev/lettersmith",
                buttonText: "GitHub",
              },
              {
                picture: "/portfolio.png",
                title: "Portfolio Website",
                description:
                  "The site you are looking at right now! Built with Next.js, TailwindCSS, and framer-motion for animations.",
                link: "https://github.com/theamanullahdev/portfolio",
                buttonText: "GitHub",
              },
            ]}
          />

          <div className="mt-4 sm:mt-6">
            <TerminalButton href="/MyProjects" color="blue">
              See More
            </TerminalButton>
          </div>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.div
            className="mb-4 sm:mb-6 flex gap-4 sm:gap-6"
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
                className="text-3xl sm:text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
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
                className="text-3xl sm:text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
              />
            </Link>
          </motion.div>

          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4">
            <HighlightWords text="Get in Touch" color="green" />
          </div>

          <div className="text-sm sm:text-base md:text-lg max-w-xl mb-4 sm:mb-6">
            Let&apos;s collaborate or just say hi! I&apos;m always open to
            interesting projects and ideas. My email:{" "}
            <span className="font-semibold text-green-500">
              theamanullahdev@gmail.com
            </span>
          </div>

          <div className="mt-4 sm:mt-6">
            <TerminalButton href="/Resume" color="orange">
              Download Resume
            </TerminalButton>
          </div>
        </section>
      </div>
    </DynamicBackground>
  );
}
