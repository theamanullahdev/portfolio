/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100/50 dark:bg-gray-900/50 text-gray-800 dark:text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
      >
        🚧 Coming Soon... 🚧
      </motion.div>

      <p className="text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mb-6">
        This project is still cooking. Stay tuned mate, i mean I&apos;m working on
        something exciting!
      </p>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-sm sm:text-base md:text-lg font-semibold text-green-500 dark:text-green-400"
      >
        ⏳ Progress in motion…
      </motion.div>
    </div>
  );
}
