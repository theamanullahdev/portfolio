/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Cards from "@/components/Cards";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import HighlightWords from "@/components/HighlightWords";
import Typewriter from "@/components/Typewriter";
import TerminalButton from "@/components/TerminalButton";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DynamicBackground
      circleCount={5}
      lineCount={5}
      triangleCount={4}
      codeCount={8}
    >
      {/* Scroll Progress Bar */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )`,
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white relative z-10">
        {/* Home Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative overflow-hidden">
          {/* Glowing orb background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
          </div>

          <motion.div
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-4 sm:mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg relative group"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Rotating border gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />
            <div className="absolute inset-1 rounded-full bg-gray-900 z-10" />

            <img
              src="/piclogo.png"
              alt="Hero"
              className="object-cover w-full h-full relative z-20 rounded-full"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-green-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Title with glitch effect */}
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="glitch-wrapper">
              <HighlightWords text="Welcome to my portfolio" color="green" />
            </div>
          </motion.div>

          {/* Tagline with better animation */}
          <motion.div
            className="text-sm sm:text-base md:text-lg max-w-xl font-medium mb-2 sm:mb-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-400/30">
              <Typewriter
                text="I build modern websites and dApps on any blockchain. Let's create something amazing together!"
                delay={20}
                color="white"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <Typewriter
              text="The Amanullah Developer!"
              delay={20}
              color="green"
            />
          </motion.div>

          {/* Animated arrow pointing down */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="text-green-400 text-3xl">↓</div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative">
          {/* Section divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

          <motion.div
            className="mb-4 sm:mb-6 flex gap-3 sm:gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all relative group"
              whileHover={{ rotate: 5 }}
            >
              <img
                src="https://www.ccn.com/wp-content/uploads/2023/10/how-does-the-bitcoin-source-code-define-its-21-million-cap.webp"
                alt="About Img 1"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 transition-colors duration-300" />
            </motion.div>

            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all relative group"
              whileHover={{ rotate: -5 }}
            >
              <img
                src="https://www.finoit.com/wp-content/uploads/2022/09/java-coding-best-practices.jpg"
                alt="About Img 2"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 transition-colors duration-300" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-2 sm:mb-4">
              <HighlightWords text="About Me" color="orange" />
            </div>
          </motion.div>

          <motion.div
            className="text-sm sm:text-base md:text-lg max-w-xl space-y-2 sm:space-y-3 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-orange-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
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
            <p className="text-orange-400 font-mono">
              I write Code, That works!
            </p>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/About" color="orange">
              See More
            </TerminalButton>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HighlightWords text="Projects" color="blue" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/MyProjects" color="blue">
              See More
            </TerminalButton>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />

          <motion.div
            className="mb-4 sm:mb-6 flex gap-4 sm:gap-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="https://github.com/theamanullahdev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="relative group"
              >
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl sm:text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition relative z-10"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="https://twitter.com/theamanullahdev"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="relative group"
              >
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-3xl sm:text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition relative z-10"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HighlightWords text="Get in Touch" color="green" />
          </motion.div>

          <motion.div
            className="text-sm sm:text-base md:text-lg max-w-xl mb-4 sm:mb-6 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-green-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let&apos;s collaborate or just say hi! I&apos;m always open to
            interesting projects and ideas. My email:{" "}
            <span className="font-semibold text-green-500">
              theamanullahdev@gmail.com
            </span>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/Resume" color="orange">
              Download Resume
            </TerminalButton>
          </motion.div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .glitch-wrapper {
          position: relative;
        }

        .glitch-wrapper:hover::before,
        .glitch-wrapper:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-wrapper:hover::before {
          animation: glitch-1 0.3s infinite;
          color: #22c55e;
          z-index: -1;
        }

        .glitch-wrapper:hover::after {
          animation: glitch-2 0.3s infinite;
          color: #f97316;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, -2px);
          }
          40% {
            transform: translate(2px, 2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(-2px, 2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </DynamicBackground>
  );
}
