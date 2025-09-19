"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import HighlightWords from "@/components/HighlightWords";
import Typewriter from "@/components/Typewriter";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";

export default function MsgMePage() {
  // Grab form ID from env (must start with NEXT_PUBLIC_)
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formId);

  return (
    <DynamicBackground
      circleCount={4}
      lineCount={3}
      triangleCount={2}
      codeCount={5}
    >
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-8 text-center space-y-12">
        {/* Header */}
        <div className="text-4xl font-bold mb-2 text-green-500 dark:text-green-300 font-mono">
          <HighlightWords text="Let's Connect" />
        </div>
        <div className="mb-6 text-lg text-green-400 dark:text-green-200 font-mono">
          <Typewriter text="Drop me a message or reach me directly!" />
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-black border-4 border-green-400 rounded-xl shadow-lg text-green-400 font-mono flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-2">Email Me</h3>
            <p className="mb-4">theamanullahdev@gmail.com</p>
            <TerminalButton href="mailto:theamanullahdev@gmail.com" external>
              Send Email
            </TerminalButton>
          </motion.div>

          {/* Twitter/X Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-black border-4 border-green-400 rounded-xl shadow-lg text-green-400 font-mono flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-2">DM Me on Twitter (X)</h3>
            <p className="mb-4">@theAmanullahDev</p>
            <TerminalButton href="https://twitter.com/theAmanullahDev" external>
              Open Twitter
            </TerminalButton>
          </motion.div>
        </div>

        {/* Message Form */}
        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md bg-black border-4 border-green-400 rounded-xl shadow-lg p-6 text-center text-green-400 font-mono"
          >
            <p className="text-lg">✅ Thanks! Your message has been sent.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md bg-black border-4 border-green-400 rounded-xl shadow-lg p-6 flex flex-col gap-4 text-left text-green-400 font-mono"
          >
            <label className="flex flex-col">
              <span className="mb-1">Name</span>
              <input
                type="text"
                name="name"
                required
                className="p-2 rounded-md bg-white text-black outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <input
                type="email"
                name="email"
                required
                className="p-2 rounded-md bg-white text-black outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                required
                rows="4"
                className="p-2 rounded-md bg-white text-black outline-none resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </label>

            <div className="flex justify-center mt-4">
              <TerminalButton type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </TerminalButton>
            </div>
          </motion.form>
        )}
      </section>
    </DynamicBackground>
  );
}
