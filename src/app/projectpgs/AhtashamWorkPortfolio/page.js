/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function AhtashamWorkPortfolioDetails() {
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
              <HighlightWords text="Ahatasham Work Portfolio" color="green" />
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A professional portfolio website for Ahatasham, an expert in Shopify, ecommerce, and digital marketing with his own agency. The site showcases expertise in building high-performing online stores and data-driven marketing strategies.
            </motion.p>

            <motion.div
              className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {["Shopify", "Ecommerce", "Marketing", "Portfolio"].map((tech, i) => (
                <span key={i} className="px-3 py-1 sm:py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded text-xs sm:text-sm font-mono">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            className="mb-8 sm:mb-12 p-4 sm:p-6 bg-green-500/10 border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">Key Features</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-green-400">▸</span>
                <span>Professional portfolio showcasing Shopify expertise and agency services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">▸</span>
                <span>Case studies and portfolio pieces demonstrating ecommerce success stories</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">▸</span>
                <span>Service offerings: Shopify store setup, optimization, and digital marketing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">▸</span>
                <span>Professional brand presentation and client testimonials</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">▸</span>
                <span>Conversion-optimized design for lead generation</span>
              </li>
            </ul>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded text-center">
              <div className="text-lg sm:text-xl font-bold text-green-400">Shopify</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Platform</div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded text-center">
              <div className="text-lg sm:text-xl font-bold text-green-400">Ecommerce</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Focus</div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded text-center">
              <div className="text-lg sm:text-xl font-bold text-green-400">Agency</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Type</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://ahtashamwork.com" target="_blank" rel="noopener noreferrer">
              <TerminalButton
                text="Visit Portfolio"
                icon={faExternalLink}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </DynamicBackground>
  );
}
