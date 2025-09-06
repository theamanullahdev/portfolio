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

export default function Home() {
  return (
    <DynamicBackground
      circleCount={5}
      lineCount={5}
      triangleCount={4}
      codeCount={8}
    >
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-gray-100/50 text-gray-800 dark:bg-gray-900/50 dark:text-white">
        {/* Home Section */}

        {/* Home Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            className="w-48 h-48 mb-6 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-lg"
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

          {/* Title with highlight effect */}
          <div className="text-5xl font-bold mb-4 drop-shadow-lg">
            <HighlightWords text={"Welcome to my portfolio"} />
          </div>

          {/* Tagline with the same effect but toned down */}

          <motion.p
            className="text-lg max-w-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build modern websites and dApps on any blockchain. Let&apos;s
            create something amazing together!
          </motion.p>
          <p className="text-xl font-semibold text-green-300 mb-6">
            <Typewriter text="The Amanullah Developer!" delay={20} />
          </p>
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
            I&apos;m a versatile developer who can build any website,
            specializing in dApps on any blockchain. I bring ideas to life with
            modern and efficient solutions.
          </p>
        </section>

        {/* Projects Section */}

        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center ">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
            Projects
          </h2>
          <Cards
            numberOfCards={4}
            items={[
              {
                picture:
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: "My Cool Project",
                description: "This project does something awesome.",
                link: "https://github.com",
                buttonText: "GitHub",
              },
              {
                picture:
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: "My Cool Project",
                description: "This project does something awesome.",
                link: "https://github.com",
                buttonText: "GitHub",
              },

              {
                picture:
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: "Blockchain dApp",
                description: "Smart contracts + React frontend.",
                link: "https://example.com",
                buttonText: "Visit",
              },
              {
                picture:
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: "Blockchain dApp",
                description: "Smart contracts + React frontend.",
                link: "https://example.com",
                buttonText: "Visit",
              },
              {
                picture:
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                title: "Blockchain dApp",
                description: "Smart contracts + React frontend.",
                link: "https://example.com",
                buttonText: "Visit",
              },
            ]}
          />
          <p className="text-lg max-w-xl mt-6">
            Check out some of the awesome websites and dApps I&apos;ve built!
          </p>

          <Link
            href="/MyProjects"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            See More
          </Link>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            className="mb-6 flex gap-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="https://github.com/theamanullahdev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
              />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
              />
            </Link>
            <Link
              href="https://twitter.com/theamanullahdev"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-4xl text-green-800 dark:text-green-300 hover:text-green-600 transition"
              />
            </Link>
          </motion.div>

          <h2 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-300">
            Get in Touch
          </h2>
          <p className="text-lg max-w-xl">
            Let&apos;s collaborate or just say hi! I&apos;m always open to
            interesting projects and ideas.
          </p>
        </section>
      </div>
    </DynamicBackground>
  );
}
