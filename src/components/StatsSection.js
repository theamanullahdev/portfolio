"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { STATS_DATA } from "@/data/experience";

const AnimatedCounter = ({ end, unit = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 50; // 50 frames
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {unit}
    </span>
  );
};

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const colorMap = {
    green: "border-green-400/30 hover:border-green-400/70 text-green-400",
    orange: "border-orange-400/30 hover:border-orange-400/70 text-orange-400",
    cyan: "border-cyan-400/30 hover:border-cyan-400/70 text-cyan-400",
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-2 xs:px-4 sm:px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-green-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Quantifying My Developer Journey
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
            >
              <div
                className={`relative group bg-black/50 border rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all overflow-hidden h-full ${
                  colorMap[stat.color]
                }`}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3"
                  >
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <motion.div
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-1 sm:mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter end={stat.value} unit={stat.unit || ""} />
                  </motion.div>

                  {/* Label */}
                  <p className="text-xs xs:text-sm sm:text-base font-mono text-gray-400 group-hover:text-current transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
