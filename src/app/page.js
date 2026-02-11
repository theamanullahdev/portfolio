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
import SkillsShowcase from "@/components/SkillsShowcase";
import StatsSection from "@/components/StatsSection";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    // Track mouse for interactive elements
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <DynamicBackground
      circleCount={8}
      lineCount={7}
      triangleCount={6}
      codeCount={12}
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
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 text-center relative overflow-hidden">
          {/* Multiple glowing orbs for depth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-green-500/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-orange-500/10 rounded-full blur-[90px] animate-pulse animation-delay-1000" style={{ animationDelay: "1s" }} />
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/8 rounded-full blur-[110px] animate-pulse animation-delay-2000" style={{ animationDelay: "2s" }} />
          </div>

          {/* Animated floating particles */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full"
            animate={{ 
              y: [0, 25, 0],
              x: [0, -15, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 25, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <motion.div
            className="w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg relative group"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ scale: 1.15, rotate: 5 }}
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
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg relative"
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
            className="text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-xl font-medium mb-3 sm:mb-4 md:mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-black/50 backdrop-blur-md px-3 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-green-400/40 hover:border-green-400/70 transition-all shadow-lg shadow-green-400/10">
              <Typewriter
                text="I build modern websites and dApps on any blockchain. Let's create something amazing together!"
                delay={20}
                color="white"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <span className="inline-block bg-gradient-to-r from-green-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent font-mono font-bold">
              <Typewriter
                text="The Amanullah Developer!"
                delay={20}
                color="green"
              />
            </span>
          </motion.div>

          {/* CTA Buttons - Responsive */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <TerminalButton href="/About" color="green">
              → Explore
            </TerminalButton>
            <TerminalButton href="/MsgMe" color="orange">
              → Connect
            </TerminalButton>
          </motion.div>

          {/* Animated arrow pointing down */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-b from-green-400 to-orange-400 bg-clip-text font-bold">
              ↓
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 text-center relative">
          {/* Section divider */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

          <motion.div
            className="mb-4 sm:mb-6 md:mb-8 flex gap-2 xs:gap-3 sm:gap-4 md:gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg sm:rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all relative group"
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
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg sm:rounded-xl border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all relative group"
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
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
              <HighlightWords text="About Me" color="orange" />
            </div>
          </motion.div>

          <motion.div
            className="text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-xl space-y-2 sm:space-y-3 bg-black/30 backdrop-blur-md p-4 xs:p-5 sm:p-6 rounded-lg sm:rounded-xl border border-orange-400/30 hover:border-orange-400/60 transition-all shadow-lg shadow-orange-400/5"
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
              <span className="font-semibold text-green-500 animate-pulse">
                theamanullahdev@gmail.com
              </span>
            </p>
            <p className="text-orange-400 font-mono text-xs xs:text-sm">
              &gt;_ I write Code, That works!
            </p>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/About" color="orange">
              → See More
            </TerminalButton>
          </motion.div>
        </section>

        {/* Skills Showcase Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
          <SkillsShowcase />
        </section>

        {/* Stats Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <StatsSection />
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

          <motion.div
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HighlightWords text="Featured Projects" color="green" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
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
            className="mt-4 sm:mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/MyProjects" color="green">
              → See All Projects
            </TerminalButton>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />

          <motion.div
            className="mb-4 sm:mb-6 md:mb-8 flex gap-3 sm:gap-4 md:gap-6"
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
                className="relative group inline-block"
              >
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity w-16 h-16" />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-green-800 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400 transition relative z-10"
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
                className="relative group inline-block"
              >
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity w-16 h-16" />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-green-800 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400 transition relative z-10"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HighlightWords text="Get in Touch" color="green" />
          </motion.div>

          <motion.div
            className="text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-xl mb-4 sm:mb-6 md:mb-8 bg-black/30 backdrop-blur-md p-4 xs:p-5 sm:p-6 rounded-lg sm:rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all shadow-lg shadow-green-400/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Let&apos;s collaborate or just say hi! I&apos;m always open to
            interesting projects and ideas.</p>
            <p className="mt-2 font-semibold text-green-500 animate-pulse">
              📧 theamanullahdev@gmail.com
            </p>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6 md:mt-8 flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalButton href="/Resume" color="orange">
              ⬇️ Resume
            </TerminalButton>
            <TerminalButton href="/MsgMe" color="green">
              💬 Message
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
