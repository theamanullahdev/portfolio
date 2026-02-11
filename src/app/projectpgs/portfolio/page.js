/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function PortfolioDetails() {
  return (
    <DynamicBackground circleCount={5} lineCount={4} triangleCount={3} codeCount={6}>
      <div className="min-h-screen bg-gray-100/50 dark:bg-gray-900/50 text-gray-800 dark:text-white px-2 xs:px-4 sm:px-6 py-6 sm:py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Link href="/MyProjects">
            <motion.div
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition font-mono text-xs sm:text-sm"
              whileHover={{ x: -5 }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              ← Back to Projects
            </motion.div>
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Hero Section */}
          <div className="mb-8 sm:mb-12">
            <motion.div
              className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <HighlightWords text="Portfolio Website" color="green" />
            </motion.div>

            <motion.div
              className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              My personal portfolio website built with cutting-edge web technologies. This site is a living demonstration of my full-stack capabilities, attention to detail, and commitment to creating engaging, responsive user experiences.
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="relative w-full h-48 xs:h-64 sm:h-80 rounded-lg overflow-hidden border-4 border-green-500/30 mb-6 sm:mb-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ borderColor: "#22c55e" }}
            >
              <img
                src="/portfolio.png"
                alt="Portfolio Website"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <motion.div
              className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-green-400/20 hover:border-green-400/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 sm:mb-3 flex items-center gap-2">
                🛠️ Built With
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• Next.js 15</li>
                <li>• React 19</li>
                <li>• TailwindCSS 3</li>
                <li>• Framer Motion</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-orange-400/20 hover:border-orange-400/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2 sm:mb-3 flex items-center gap-2">
                ✨ Highlights
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• Responsive Design (150px - 8K)</li>
                <li>• Smooth Animations</li>
                <li>• Terminal Theme UI</li>
                <li>• Full-Stack Setup</li>
              </ul>
            </motion.div>
          </div>

          {/* Full Description */}
          <motion.div
            className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-cyan-400/20 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">📋 Project Details</h3>
            <div className="text-xs sm:text-sm text-gray-300 space-y-3 sm:space-y-4 leading-relaxed">
              <p>
                This portfolio is more than just a resume—it's a showcase of my technical capabilities and creative approach to web development. Every component has been carefully crafted to demonstrate best practices in modern web development.
              </p>
              <p>
                Key aspects of this project:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Ultra-responsive design working seamlessly from 150px to 8K displays</li>
                <li>Advanced animations and micro-interactions using Framer Motion</li>
                <li>Terminal-inspired UI with green and orange color scheme</li>
                <li>Mobile-first approach with idle animations for engagement</li>
                <li>Clean code architecture and component reusability</li>
                <li>Performance optimized with Next.js App Router</li>
              </ul>
              <p>
                This site represents my commitment to creating engaging, high-performance web experiences while showcasing my development expertise.
              </p>
            </div>
          </motion.div>

          {/* Links & Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <TerminalButton
              href="https://github.com/theamanullahdev/portfolio"
              color="green"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              View on GitHub
            </TerminalButton>
            <TerminalButton
              href="https://amanullahdev.com"
              color="orange"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              Live Site
            </TerminalButton>
            <TerminalButton href="/MyProjects" color="cyan">
              ← Back to All Projects
            </TerminalButton>
          </motion.div>
        </motion.div>
      </div>
    </DynamicBackground>
  );
}
