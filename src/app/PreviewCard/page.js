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

export default function PreviewCard() {
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
      </div>
    </DynamicBackground>
  );
}
