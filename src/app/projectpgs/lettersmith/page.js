/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function LettermithDetails() {
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
              <HighlightWords text="LetterSmith" color="orange" />
            </motion.div>

            <motion.div
              className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              An AI-powered cover letter generator that transforms job applications. Upload your CV, paste job descriptions, and get professionally crafted cover letters instantly. Built with modern web technologies and optimized for user experience.
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="relative w-full h-48 xs:h-64 sm:h-80 rounded-lg overflow-hidden border-4 border-orange-500/30 mb-6 sm:mb-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ borderColor: "#fb923c" }}
            >
              <img
                src="/LTsmith1.png"
                alt="LetterSmith"
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
                🛠️ Tech Stack
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• Next.js (React Framework)</li>
                <li>• TailwindCSS</li>
                <li>• Framer Motion</li>
                <li>• REST APIs & AI Integration</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-orange-400/20 hover:border-orange-400/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2 sm:mb-3 flex items-center gap-2">
                ✨ Features
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• CV Upload & Parsing</li>
                <li>• Job Description Analysis</li>
                <li>• AI-Powered Generation</li>
                <li>• One-Click Download</li>
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
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">📋 Project Highlights</h3>
            <div className="text-xs sm:text-sm text-gray-300 space-y-3 sm:space-y-4 leading-relaxed">
              <p>
                LetterSmith demonstrates full-stack development expertise by combining AI capabilities with an intuitive user interface. The application streamlines the job application process by automating cover letter creation.
              </p>
              <p>
                Key accomplishments:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Seamless file upload and document parsing</li>
                <li>Real-time AI processing with user feedback</li>
                <li>Beautiful, responsive UI with smooth animations</li>
                <li>Production deployment on Vercel with optimized performance</li>
              </ul>
              <p>
                This project showcases my ability to integrate multiple technologies, build user-centric solutions, and deploy applications to production environments.
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
              href="https://github.com/theamanullahdev/lettersmith"
              color="green"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              View on GitHub
            </TerminalButton>
            <TerminalButton
              href="https://lettersmithai.vercel.app/"
              color="orange"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              Live Demo
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
