"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Panel from "@/components/Panel";

export default function MsgMePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const FORMSUBMIT_URL = `https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_KEY}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      const res = await fetch(FORMSUBMIT_URL, { method: "POST", body: formData });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const text = await res.text();
        setStatus("error");
        setError(text || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  };

  const inputClasses =
    "plaque bg-ink-2 border border-brass/30 focus:border-brass-bright outline-none text-paper font-reading text-sm px-4 py-2.5 transition-colors duration-300";

  return (
    <div className="min-h-screen px-4 sm:px-8 pt-16 sm:pt-20 pb-20 max-w-3xl mx-auto">
      <Heading number="04" text="Let's Connect" color="brass" />
      <p className="font-reading text-paper-dim mt-4 mb-10 max-w-xl">
        Drop me a message, reach me directly, or check my resume.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Panel title="Email Me" color="brass" className="flex flex-col items-start gap-3">
          <p className="font-reading text-sm text-paper-dim">theamanullahdev@gmail.com</p>
          <Button href="mailto:theamanullahdev@gmail.com" external color="brass" size="sm">
            Send Email
          </Button>
        </Panel>
        <Panel title="Twitter" color="verdigris" className="flex flex-col items-start gap-3">
          {/* <p className="font-reading text-sm text-paper-dim">@theAmanullahDev</p>
          <Button href="https://twitter.com/theAmanullahDev" external color="verdigris" size="sm">
            Open Twitter
          </Button> */}
          <p className="font-reading text-sm text-paper-dim">@amanullah_bhlm</p>
          <Button href="https://twitter.com/amanullah_bhlm" external color="verdigris" size="sm">
            Open Twitter
          </Button>
        </Panel>
        <Panel title="Resume" color="brass" className="flex flex-col items-start gap-3">
          <p className="font-reading text-sm text-paper-dim">Full resume and download options</p>
          <Button href="/Resume" color="brass" size="sm">
            Open Resume
          </Button>
        </Panel>
      </div>

      {status === "success" ? (
        <Panel color="verdigris" className="text-center">
          <p className="font-reading text-paper">Thanks — your message has been sent.</p>
        </Panel>
      ) : (
        <form onSubmit={handleSubmit}>
          <Panel color="brass" className="flex flex-col gap-4 text-left">
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-2xs tracking-wide text-paper-dim uppercase">Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClasses} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-2xs tracking-wide text-paper-dim uppercase">Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClasses} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-2xs tracking-wide text-paper-dim uppercase">Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className={`${inputClasses} resize-none`} />
            </label>

            {status === "error" && <p className="text-rubric text-sm font-reading">{error}</p>}

            <Button type="submit" disabled={status === "submitting"} color="brass" className="self-start mt-2">
              {status === "submitting" ? "Sending…" : "Send Message"}
            </Button>
          </Panel>
        </form>
      )}
    </div>
  );
}
