/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HighlightWords from "@/components/HighlightWords";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function WineLockerDetails() {
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
              <HighlightWords text="Wine-Locker" color="green" />
            </motion.div>

            <motion.div
              className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A comprehensive Linux security utility designed to prevent unauthorized execution of Windows executables through Wine. This project demonstrates system-level security, shell scripting expertise, and backend logic implementation.
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
                src="/winlock.png"
                alt="Wine-Locker"
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
                🛠️ Technologies
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• Shell Scripting (Bash)</li>
                <li>• Linux System Administration</li>
                <li>• Process Management</li>
                <li>• File System Security</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-orange-400/20 hover:border-orange-400/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2 sm:mb-3 flex items-center gap-2">
                ✨ Key Features
              </h3>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                <li>• Root-only execution locking</li>
                <li>• Temporary unlock timers</li>
                <li>• Toggle access system</li>
                <li>• Malware prevention</li>
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
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">📋 Project Overview</h3>
            <div className="text-xs sm:text-sm text-gray-300 space-y-3 sm:space-y-4 leading-relaxed">
              <p>
                Wine-Locker is a sophisticated security utility built for Linux systems running Wine. It prevents unauthorized execution of Windows .exe files by implementing kernel-level security checks and user privilege validation.
              </p>
              <p>
                The project showcases my expertise in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Low-level Linux security mechanisms</li>
                <li>Bash shell scripting and automation</li>
                <li>System-level process management</li>
                <li>Security protocol implementation</li>
              </ul>
              <p>
                This solo project resulted in a production-ready utility that has been deployed in security-conscious environments where strict access control is paramount.
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
              href="https://github.com/theamanullahdev/wine-locker"
              color="green"
              external
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              View on GitHub
            </TerminalButton>
            <TerminalButton href="/MyProjects" color="orange">
              ← Back to All Projects
            </TerminalButton>
          </motion.div>
        </motion.div>
      </div>
    </DynamicBackground>
  );
}
