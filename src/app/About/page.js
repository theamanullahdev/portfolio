/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNode,
  faGithub,
  faPython,
  faRust,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCube,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import HighlightWords from "@/components/HighlightWords";

export default function About() {
  return (
    <DynamicBackground
      circleCount={6}
      lineCount={6}
      triangleCount={3}
      codeCount={10}
    >
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
        {/* Intro Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-green-400 mb-6"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            whileHover={{
              scale: 1.15,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src="/piclogo.png"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <HighlightWords text="About Me" color="green" />
          </div>
          <div className="text-base sm:text-lg max-w-2xl leading-relaxed">
            <p className="mb-6">
              I am The Amanullah Developer. Hence the name AmanullahDev.com
            </p>
            <p className="mb-6">
              I&apos;m a developer who blends creativity and precision. My work
              spans modern web frameworks, smart contracts, and open-source
              projects. Whether it&apos;s designing secure blockchain apps or
              crafting smooth React UIs, I focus on solutions that last.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <HighlightWords text="My Skills" color="orange" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: faJs, label: "JavaScript", color: "text-yellow-400" },
              { icon: faReact, label: "React", color: "text-cyan-400" },
              { icon: faNode, label: "Node.js", color: "text-green-500" },
              { icon: faPython, label: "Python", color: "text-blue-400" },
              { icon: faRust, label: "Rust", color: "text-orange-600" },
              {
                icon: faDatabase,
                label: "Databases",
                color: "text-purple-400",
              },
              { icon: faCube, label: "Blockchain", color: "text-indigo-400" },
              { icon: faRocket, label: "dApps", color: "text-pink-500" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md border bg-white/10 dark:bg-gray-800/40"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: idx * 0.2,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-3xl sm:text-4xl mb-2 ${skill.color}`}
                />
                <span className="font-medium text-sm sm:text-base md:text-lg">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Journey / Timeline */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <HighlightWords text="My Journey" color="blue" />
          </div>
          <div className="space-y-6 max-w-2xl text-left text-sm sm:text-base md:text-lg">
            {[
              {
                year: "2021 – Getting Started",
                text: "Began with normal web development, learning the fundamentals of coding.",
                color: "border-green-400",
              },
              {
                year: "2022 – Blockchain Exploration",
                text: "Entered the blockchain world through Solana, experimenting with smart contracts.",
                color: "border-orange-400",
              },
              {
                year: "2023 – First CRUD App",
                text: "Built my first full-stack CRUD application, gaining real-world dev experience.",
                color: "border-blue-400",
              },
              {
                year: "2025 – Present",
                text: "Exploring AI, blockchain, and modern development together to build impactful projects.",
                color: "border-purple-400",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 },
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: idx * 0.3,
                  ease: "easeInOut",
                }}
                className={`p-4 border-l-4 ${item.color} bg-white/10 dark:bg-gray-800/40 rounded`}
              >
                <div className="font-bold text-base sm:text-lg md:text-xl">
                  {item.year}
                </div>
                <p className="text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <HighlightWords text="Let’s Work Together" color="green" />
          </div>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6">
            I&apos;m always open to collaborations, freelance opportunities, or
            just a chat about tech & blockchain. Feel free to reach out and
            let&apos;s build something amazing!
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{
              scale: 1.15,
              rotate: -2,
              transition: { duration: 0.2 },
            }}
          >
            <Link
              href="https://github.com/theamanullahdev"
              target="_blank"
              rel="noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition text-sm sm:text-base md:text-lg"
            >
              Connect on GitHub
            </Link>
          </motion.div>
        </section>
      </div>
    </DynamicBackground>
  );
}
