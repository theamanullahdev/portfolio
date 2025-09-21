/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import HighlightWords from "@/components/HighlightWords";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function LandingPage() {
  const links = [
    {
      href: "/Resume", 
      icon: faFile,
      label: "Resume",
      color: "text-green-400",
      external: true,
    },
    {
      href: "https://github.com/theamanullahdev",
      icon: faGithub,
      label: "GitHub",
      color: "text-gray-300",
      external: true,
    },
    {
      href: "https://twitter.com/theAmanullahDev",
      icon: faTwitter,
      label: "Twitter",
      color: "text-blue-400",
      external: true,
    },
    {
      href: "mailto:theamanullahdev@gmail.com",
      icon: faEnvelope,
      label: "Email",
      color: "text-orange-400",
      external: true,
    },
    {
      href: "https://amanullahdev.com",
      icon: faGlobe,
      label: "Portfolio",
      color: "text-purple-400",
      external: true,
    },
  ];

  return (
    <DynamicBackground circleCount={5} lineCount={4} triangleCount={2} codeCount={6}>
      <div className="snap-y snap-mandatory h-screen w-full flex flex-col items-center justify-center px-6 text-center overflow-y-auto">
        {/* Logo */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-green-400 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
        >
          <img src="/piclogo.png" alt="Logo" className="object-cover w-full h-full" />
        </motion.div>

        {/* Name / Tagline */}
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-green-500 dark:text-green-300 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HighlightWords text="Amanullah" />
        </motion.div>

        <motion.div
          className="text-base sm:text-lg md:text-xl text-green-400 dark:text-green-200 max-w-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Stack Developer | Blockchain | dApps | Cybersecurity | Smart Contracts
        </motion.div>

        {/* Icon Links */}
        <div className="flex flex-col gap-4 mt-4 w-full max-w-xs">
          {links.map((link, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black border-2 border-green-400 hover:bg-green-900 hover:text-white transition ${link.color}`}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                  <div className="font-mono text-base sm:text-lg">{link.label}</div>
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black border-2 border-green-400 hover:bg-green-900 hover:text-white transition ${link.color}`}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                  <div className="font-mono text-base sm:text-lg">{link.label}</div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-sm sm:text-base text-green-200 dark:text-green-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Amanullah. All rights reserved.
        </motion.div>
      </div>
    </DynamicBackground>
  );
}
