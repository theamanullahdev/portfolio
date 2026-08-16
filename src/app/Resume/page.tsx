"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

type ResumeSection =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "section"; title: string; items: string[] };

const RESUME_SECTIONS: ResumeSection[] = [
  { type: "heading", text: "Amanullah" },
  {
    type: "subheading",
    text: "Full-Stack Developer | Blockchain | Cybersecurity | dApps | Smart Contracts",
  },
  {
    type: "section",
    title: "Contact",
    items: [
      "Email: theamanullahdev@gmail.com",
      "Portfolio: amanullahdev.com",
      "GitHub: github.com/theamanullahdev",
      // "Twitter: @theamanullahdev",
      "Twitter: @amanullah_bhlm",
    ],
  },
  {
    type: "section",
    title: "Summary",
    items: [
      "Full-Stack Developer specializing in blockchain, smart contracts, decentralized applications, web development, and cybersecurity.",
      "Experienced in building scalable, secure, and maintainable applications using Next.js, React, Node.js, JavaScript, Python,",
      "Skilled in backend development, database design and optimization (MongoDB, SQL, PostgreSQL, SQLite), server deployment (VPS, Nginx), Code optimization.",
    ],
  },
  {
    type: "section",
    title: "Skills",
    items: [
      "Backend: Node.js, Express.js, RESTful APIs, Server-side Logic, VPS Deployment, Nginx Configuration",
      "Frontend: Next.js, React, TailwindCSS, Responsive UI/UX, Interactive Interfaces",
      "Databases: MongoDB, SQL, PostgreSQL, SQLite, Database Design, Query Optimization",
      "Blockchain & dApps: Smart Contracts, Solidity, CosmWasm, Web3.js, Decentralized Applications",
      "Security: Linux Security Hardening, Cybersecurity, Application Security",
      "Programming & Tools: JavaScript, Python, Rust, Git Version Control, Agile Methodologies",
      "Code Quality & Optimization: Maintainable Code, Performance Tuning, Scalability, Vibe Code Cleanup Specialist",
    ],
  },
  {
    type: "section",
    title: "Projects",
    items: [
      "Wine-Locker: Linux security utility restricting Wine execution to root to prevent unauthorized .exe files.",
      "LetterSmith: AI-powered cover-letter generator.",
      "Portfolio Website: Built with Next.js, TailwindCSS, and a rebuilt Almanac design system.",
    ],
  },
  {
    type: "section",
    title: "Professional Focus",
    items: [
      "End-to-end full-stack development, blockchain, smart contracts, dApps, web applications, backend systems, database design, server deployment, security, code refactoring, performance optimization, maintainability, scalability, and team collaboration.",
      "Recognized for applying a Vibe Code Cleanup approach to improve legacy or complex code while maintaining readability and production readiness.",
    ],
  },
];

export default function ResumePage() {
  const [pdfBtnText, setPdfBtnText] = useState("Download PDF");
  const [docxBtnText, setDocxBtnText] = useState("Download DOCX");
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const downloadPDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    let y = 40;

    RESUME_SECTIONS.forEach((section) => {
      if (section.type === "heading") {
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text(section.text, 40, y);
        y += 28;
      } else if (section.type === "subheading") {
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text(section.text, 40, y);
        y += 22;
      } else if (section.type === "section") {
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text(section.title, 40, y);
        y += 18;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        section.items.forEach((item) => {
          const splitText: string[] = doc.splitTextToSize("- " + item, 500);
          splitText.forEach((line: string) => {
            doc.text(line, 45, y);
            y += 16;
          });
        });
        y += 10;
      }
      if (y > 800) {
        doc.addPage();
        y = 40;
      }
    });

    doc.save("resume.pdf");
    setPdfBtnText("Downloaded");
    setTimeout(() => setPdfBtnText("Download PDF"), 3000);
  };

  const downloadDOCX = async () => {
    const { Document, Packer, Paragraph } = await import("docx");
    const { default: saveAs } = await import("file-saver");
    const doc = new Document({
      sections: [
        {
          children: RESUME_SECTIONS.flatMap((section) => {
            if (section.type === "heading") {
              return [new Paragraph({ text: section.text, heading: "Title" })];
            } else if (section.type === "subheading") {
              return [new Paragraph({ text: section.text, heading: "Heading1" })];
            } else if (section.type === "section") {
              const titlePara = new Paragraph({ text: section.title, run: { bold: true } });
              const itemsPara = section.items.map((item) => new Paragraph({ text: "- " + item }));
              return [titlePara, ...itemsPara, new Paragraph({ text: "" })];
            }
            return [];
          }),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "resume.docx");
    setDocxBtnText("Downloaded");
    setTimeout(() => setDocxBtnText("Download DOCX"), 3000);
  };

  const copyResume = () => {
    const text = RESUME_SECTIONS.flatMap((section) => {
      if (section.type === "heading" || section.type === "subheading") return [section.text];
      if (section.type === "section") return [section.title, ...section.items, ""];
      return [];
    }).join("\n");
    navigator.clipboard.writeText(text);
    setCopyBtnText("Copied");
    setTimeout(() => setCopyBtnText("Copy"), 3000);
  };

  // Ornamental section divider inside the scroll — a small diamond cluster
  // on a rule, instead of a full boxed border. This is what turns the page
  // from "stack of Panel cards" into one continuous surface.
  const Divider = () => (
    <div aria-hidden className="flex items-center gap-2 py-1">
      <span className="h-px flex-1 bg-brass/25" />
      <span className="w-1 h-1 rotate-45 bg-brass/30 shrink-0" />
      <span className="w-2 h-2 rotate-45 border border-brass/60 shrink-0" />
      <span className="w-1 h-1 rotate-45 bg-brass/30 shrink-0" />
      <span className="h-px flex-1 bg-brass/25" />
    </div>
  );

  // A roller — the scroll's dowel end, capped with small brass rivets at
  // each side so it reads as a fitted metal cap, not just a rounded div.
  const Roller = ({ flip }: { flip?: boolean }) => (
    <div
      aria-hidden
      className={`relative h-5 sm:h-6 rounded-full border-2 border-brass/50 z-10 ${flip ? "-mt-1" : "-mb-1"}`}
      style={{ background: "linear-gradient(to bottom, rgb(var(--ink-3)), rgb(var(--ink-2)), rgb(var(--ink-3)))" }}
    >
      <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brass-bright/70" />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brass-bright/70" />
    </div>
  );

  // The unrolled-scroll texture — same diagonal-hatch language as
  // `.plaque-fill` in globals.css, inlined here since this is one
  // continuous rectangle rather than a clip-path plaque, plus a radial
  // vignette so the parchment reads as aged/lit from the center rather
  // than a flat fill.
  const scrollTexture: React.CSSProperties = {
    backgroundImage:
      "radial-gradient(ellipse at center, transparent 40%, rgb(var(--ink)/0.55) 100%), repeating-linear-gradient(115deg, rgb(var(--brass-bright) / 0.035) 0px, rgb(var(--brass-bright) / 0.035) 1px, transparent 1px, transparent 4px), linear-gradient(to bottom, rgb(var(--ink-2)), rgb(var(--ink-3)))",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Desktop: fixed action rail below the nav, always on screen
          regardless of scroll position — also fills what used to be dead
          space under the nav column instead of a full-width bar that only
          shows once you've scrolled to the bottom. */}
      <div className="hidden md:flex fixed left-5 bottom-6 z-20 flex-col gap-2">
        <Button onClick={downloadPDF} color="brass" size="sm">
          {pdfBtnText}
        </Button>
        <Button onClick={downloadDOCX} color="verdigris" size="sm">
          {docxBtnText}
        </Button>
        <Button onClick={copyResume} color="rubric" size="sm">
          {copyBtnText}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <Roller />

          <div className="relative border-x-2 border-brass/30 px-6 sm:px-14 py-10 sm:py-12" style={scrollTexture}>
            {/* Corner rivets — small brass studs pinning the parchment
                down, the "gameified" crafted-object touch the plain
                rectangle was missing. */}
            <span className="absolute top-2 left-2 w-1.5 h-1.5 rotate-45 bg-brass-bright/70" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rotate-45 bg-brass-bright/70" />
            <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rotate-45 bg-brass-bright/70" />
            <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rotate-45 bg-brass-bright/70" />

            <div aria-hidden className="text-center text-brass/50 text-sm mb-1 tracking-[0.3em]">
              ✦
            </div>
            <h1 className="font-label text-4xl sm:text-5xl md:text-6xl text-paper text-center tracking-wide">
              {(RESUME_SECTIONS.find((s) => s.type === "heading") as { text: string })?.text}
            </h1>
            <p className="font-label text-brass-bright text-xs sm:text-sm tracking-wide text-center mt-3">
              {(RESUME_SECTIONS.find((s) => s.type === "subheading") as { text: string })?.text}
            </p>

            <Divider />

            {RESUME_SECTIONS.filter((s) => s.type === "section").map((section, idx) => (
              <React.Fragment key={idx}>
                <div className="py-4">
                  <h2 className="font-label text-brass text-base tracking-widest uppercase mb-3">
                    {(section as { title: string }).title}
                  </h2>
                  <ul className="font-reading text-sm sm:text-base text-paper-dim space-y-2 list-disc list-inside">
                    {(section as { items: string[] }).items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {idx < RESUME_SECTIONS.filter((s) => s.type === "section").length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>

          <Roller flip />
        </div>
      </div>

      {/* Mobile: no left rail to dock into, so the actions stay a
          full-width bar pinned to the viewport bottom. */}
      <div className="md:hidden flex-none border-t border-brass/20 bg-ink-2 flex gap-2 px-4 py-4">
        <Button onClick={downloadPDF} color="brass" className="flex-1">
          {pdfBtnText}
        </Button>
        <Button onClick={downloadDOCX} color="verdigris" className="flex-1">
          {docxBtnText}
        </Button>
        <Button onClick={copyResume} color="rubric" className="flex-1">
          {copyBtnText}
        </Button>
      </div>
    </div>
  );
}
