/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function DigitalMarketingTradeDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <DynamicBackground circleCount={6} lineCount={5} triangleCount={4} codeCount={8}>
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
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
            <div className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              <HighlightWords
                text="Digital Marketing Trade"
                color="green"
              />
            </div>

            <motion.div
              className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 font-mono"
              variants={itemVariants}
            >
              Built and led the technical infrastructure of a multi-service digital agency
              delivering web development, ecommerce solutions, Web3 platforms, and performance
              marketing services in a real production environment.
            </motion.div>

            <motion.div
              className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 flex flex-wrap gap-2"
              variants={itemVariants}
            >
              <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded border border-green-400/30 font-mono">
                Production System
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded border border-cyan-400/30 font-mono">
                Enterprise Scale
              </span>
              <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded border border-orange-400/30 font-mono">
                Live Deployment
              </span>
            </motion.div>

            {/* Live Preview */}
            <motion.div
              className="relative w-full h-56 xs:h-64 sm:h-96 rounded-lg overflow-hidden border-4 border-green-500/40 hover:border-green-500/70 transition-all"
              variants={itemVariants}
              whileHover={{ borderColor: "#22c55e" }}
            >
              <iframe
                src="https://alhijaz.agency"
                title="Digital Marketing Trade Live Platform"
                className="w-full h-full"
                sandbox="allow-same-origin allow-scripts"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Two Column Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            {/* My Role */}
            <motion.div
              className="bg-black/50 border border-green-400/30 hover:border-green-400/60 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4 flex items-center gap-2">
                🧑‍💻 My Role
              </h3>
              <ul className="text-xs sm:text-sm space-y-2 text-gray-300 font-mono">
                <li>• System Architecture Design</li>
                <li>• Full-Stack Development</li>
                <li>• Technology Leadership</li>
                <li>• Production Deployment</li>
                <li>• Service Workflow Design</li>
                <li>• Performance Optimization</li>
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="bg-black/50 border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
                ⚙️ Technology Stack
              </h3>
              <ul className="text-xs sm:text-sm space-y-2 text-gray-300 font-mono">
                <li>• Next.js & React</li>
                <li>• TailwindCSS & Framer Motion</li>
                <li>• Backend Integration</li>
                <li>• API Architecture</li>
                <li>• Analytics Systems</li>
                <li>• Performance Monitoring</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            className="bg-black/50 border border-orange-400/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-4 sm:mb-6 flex items-center gap-2">
              🎯 Services Supported
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "Custom Website Development",
                "Ecommerce Platform Deployment",
                "Web3 & Blockchain Solutions",
                "Digital Advertising Campaigns",
                "Social Media Marketing",
                "Brand Identity & Design",
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-black/30 border border-orange-400/20 rounded px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-mono text-gray-300 hover:text-orange-400 hover:border-orange-400/50 transition-all"
                  variants={itemVariants}
                >
                  ✦ {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Challenges & Solutions */}
          <motion.div
            className="bg-black/50 border border-green-400/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 sm:mb-6">
              🔧 Engineering Challenges
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Scalable Multi-Service Architecture",
                  desc: "Designed infrastructure supporting multiple service categories within unified platform while maintaining clean code separation and scalability.",
                },
                {
                  title: "Conversion-Focused User Flows",
                  desc: "Engineered conversion pipelines for lead capture and client onboarding, balancing marketing objectives with smooth user experience.",
                },
                {
                  title: "Production Reliability",
                  desc: "Implemented monitoring, error handling, and performance optimization systems ensuring 24/7 operational stability for live clients.",
                },
                {
                  title: "Business-Level Decision Making",
                  desc: "Balanced technical implementation with commercial requirements, delivering solutions that support real revenue operations.",
                },
              ].map((challenge, idx) => (
                <motion.div
                  key={idx}
                  className="border-l-2 border-green-500/40 pl-4 hover:border-green-500/70 transition-colors"
                  variants={itemVariants}
                >
                  <h4 className="text-sm sm:text-base font-bold text-green-300 mb-1">
                    {challenge.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-mono">
                    {challenge.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real-World Impact */}
          <motion.div
            className="bg-black/50 border border-cyan-400/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6">
              🌍 Real-World Impact
            </h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
              <p>
                Unlike experimental or educational projects, this system operates in a live business environment serving real clients with commercial requirements.
              </p>
              <ul className="space-y-2 ml-2">
                <li>✓ Supports live agency operations and service delivery</li>
                <li>✓ Processes real client inquiries and leads</li>
                <li>✓ Manages multi-domain service workflows</li>
                <li>✓ Functions as primary commercial infrastructure</li>
                <li>✓ Demonstrates production deployment experience</li>
              </ul>
              <p>
                This project reflects hands-on experience with enterprise systems, operational challenges, and commercial-scale engineering.
              </p>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-orange-500/10 border border-green-400/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 sm:mb-6">
              ⭐ Why This Project Matters
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono">
              <p>
                This project demonstrates my ability to design and execute production-ready systems at enterprise scale. It shows technical leadership, system thinking, and practical experience working within real commercial constraints.
              </p>
              <p className="text-green-400 font-bold">
                It reflects how I approach complex technical challenges when real users and business outcomes are at stake.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 flex-wrap"
            variants={itemVariants}
          >
            <TerminalButton
              href="https://alhijaz.agency"
              color="orange"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              Visit Live Platform
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
