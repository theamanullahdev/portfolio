/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
  <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">

      {/* Home Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center  text-white">
        <motion.div
          className="w-48 h-48 mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build modern websites and dApps on any blockchain. Let&apos;s create something amazing together!
        </motion.p>
      </section>

      {/* About Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center ">
        <motion.div
          className="mb-6 flex gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-36 h-36 border-4 border-yellow-500 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-all"
            >
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt={"About Img " + i}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
        <h2 className="text-3xl font-semibold mb-4 text-yellow-700 dark:text-yellow-300">
          About Me
        </h2>
        <p className="text-lg max-w-xl">
          I&apos;m a versatile developer who can build any website, specializing in dApps on any blockchain. I bring ideas to life with modern and efficient solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center ">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
          Projects
        </h2>
        <motion.div
          className="flex gap-6 overflow-x-auto pb-2 max-w-full px-4 hide-scrollbar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            justifyContent: "center",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-72 flex-shrink-0 border-4 border-blue-400 rounded-xl p-4 shadow-xl bg-white dark:bg-gray-800 transition-transform hover:scale-105 scroll-snap-align-start"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt={"Project " + i}
                className="object-cover w-full h-36 mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Project {i}</h3>
              <p className="text-sm mb-2">Short description of what this project does.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
                See More
              </button>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-lg max-w-xl mt-6">
          Check out some of the awesome websites and dApps I&apos;ve built!
        </p>
      </section>

      {/* Contact Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="mb-6 flex gap-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
            />
          </a>
        </motion.div>
        <h2 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-300">
          Get in Touch
        </h2>
        <p className="text-lg max-w-xl">
          Let&apos;s collaborate or just say hi! I&apos;m always open to interesting projects and ideas.
        </p>
      </section>
    </div>
  );
}
