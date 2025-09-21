"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HighlightWords from "@/components/HighlightWords";
import Typewriter from "@/components/Typewriter";
import TerminalButton from "@/components/TerminalButton";
import DynamicBackground from "@/components/DynamicBackground";
import Link from "next/link";

export default function MsgMePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const FORMSUBMIT_URL = `https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_KEY}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("_replyto", form.email);
      formData.append("_subject", `New message from ${form.name}`);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const text = await res.text();
        setStatus("error");
        setError(text || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <DynamicBackground
      circleCount={4}
      lineCount={3}
      triangleCount={2}
      codeCount={5}
    >
      <section className="snap-start min-h-screen flex flex-col items-center justify-start sm:justify-center px-4 sm:px-8 pt-20 sm:pt-28 text-center space-y-12">
        {/* Top Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 dark:text-green-300 font-mono">
          <HighlightWords text="Let's Connect" />
        </div>
        <div className="mb-6 text-base sm:text-lg md:text-xl text-green-400 dark:text-green-200 font-mono">
          <Typewriter text="Drop me a message, reach me directly, or check my resume!" />
        </div>

        {/* Contact & Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-black border-4 border-green-400 rounded-xl shadow-lg text-green-400 font-mono flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">Email Me</h3>
            <p className="mb-4 text-sm sm:text-base">
              theamanullahdev@gmail.com
            </p>
            <TerminalButton href="mailto:theamanullahdev@gmail.com" external>
              Send Email
            </TerminalButton>
          </motion.div>

          {/* Twitter Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-black border-4 border-green-400 rounded-xl shadow-lg text-green-400 font-mono flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              DM Me on Twitter (X)
            </h3>
            <p className="mb-4 text-sm sm:text-base">@theAmanullahDev</p>
            <TerminalButton href="https://twitter.com/theAmanullahDev" external>
              Open Twitter
            </TerminalButton>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-black border-4 border-green-400 rounded-xl shadow-lg text-green-400 font-mono flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">View Resume</h3>
            <p className="mb-4 text-sm sm:text-base">
              Check my full resume and download options
            </p>
            <Link href="/Resume">
              <TerminalButton>Open Resume</TerminalButton>
            </Link>
          </motion.div>
        </div>

        {/* Form or Success */}
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md bg-black border-4 border-green-400 rounded-xl shadow-lg p-6 text-center text-green-400 font-mono"
          >
            <p className="text-base sm:text-lg">
              ✅ Thanks! Your message has been sent.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md bg-black border-4 border-green-400 rounded-xl shadow-lg p-6 flex flex-col gap-4 text-left text-green-400 font-mono"
          >
            <label className="flex flex-col">
              <span className="mb-1 text-sm sm:text-base">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-2 rounded-md bg-white text-black outline-none text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm sm:text-base">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-2 rounded-md bg-white text-black outline-none text-sm sm:text-base"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm sm:text-base">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="p-2 rounded-md bg-white text-black outline-none resize-none text-sm sm:text-base"
              />
            </label>

            {status === "error" && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <div className="flex justify-center mt-4">
              <TerminalButton type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </TerminalButton>
            </div>
          </motion.form>
        )}
      </section>
    </DynamicBackground>
  );
}
