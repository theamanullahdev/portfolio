/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            className="w-48 h-48 mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg"
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
          <div className="text-5xl font-bold mb-4 drop-shadow-lg">
            <HighlightWords text="Welcome to my portfolio" color="green" />
          </div>

          {/* Tagline */}
          <motion.div
            className="text-lg max-w-xl font-medium mb-4"
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

          <div className="text-xl font-semibold mb-6">
            <Typewriter
              text="The Amanullah Developer!"
              delay={20}
              color="green"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center ">
          <motion.div
            className="mb-6 flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-36 h-36 border-4 border-orange-500 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all"
              >
                <img
                  src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  alt={"About Img " + i}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </motion.div>

          <div className="text-3xl font-semibold mb-4">
            <HighlightWords text="About Me" color="orange" />
          </div>

          <div className="text-lg max-w-xl">
            Im a versatile developer who can build any website, specializing in
            dApps on any blockchain. I bring ideas to life with modern and
            efficient solutions.
          </div>
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="text-3xl font-semibold mb-6">
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

          <div className="mt-6">
            <TerminalButton href="/MyProjects" color="blue">
              See More
            </TerminalButton>
          </div>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center">
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

          <div className="text-3xl font-semibold mb-4">
            <HighlightWords text="Get in Touch" color="green" />
          </div>

          <div className="text-lg max-w-xl mb-6">
            Let&apos;s collaborate or just say hi! Im always open to interesting
            projects and ideas.
          </div>

          <div className="mt-6">
            <TerminalButton href="/resume.pdf" external color="orange">
              Download Resume
            </TerminalButton>
          </div>
        </section>
      </div>
    </DynamicBackground>
  );
}
