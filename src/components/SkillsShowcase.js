"use client";

import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/data/skills";

export default function SkillsShowcase() {
  const categories = Object.entries(SKILLS_DATA);

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // Removed unused progressVariants

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
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Technologies & Tools I&apos;ve Mastered
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map(([category, skills]) => (
            <motion.div
              key={category}
              className="relative"
              variants={itemVariants}
            >
              {/* Category Card */}
              <div className="bg-black/50 border border-green-400/30 hover:border-green-400/60 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all h-full">
                {/* Category Header */}
                <motion.h3
                  className="text-base sm:text-lg font-bold text-green-400 mb-4 sm:mb-6 capitalize flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg sm:text-xl">{">"}</span>
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </motion.h3>

                {/* Skills List */}
                <div className="space-y-3 sm:space-y-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={`${category}-${idx}`}
                      variants={itemVariants}
                      className="group"
                    >
                      {/* Skill Name + Icon + Level */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-base sm:text-lg flex-shrink-0">
                            {skill.icon}
                          </span>
                          <span className="text-xs sm:text-sm font-mono text-gray-300 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-green-400/70 font-bold ml-2 flex-shrink-0">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar - Fixed */}
                      <div className="relative h-1.5 sm:h-2 bg-gray-700/40 rounded-full overflow-hidden border border-green-400/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
