"use client";

import React, { useState } from "react";
import Panel from "@/components/Panel";
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

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {RESUME_SECTIONS.map((section, idx) => {
            if (section.type === "heading")
              return (
                <h1 key={idx} className="font-display text-3xl sm:text-4xl md:text-5xl text-paper">
                  {section.text}
                </h1>
              );
            if (section.type === "subheading")
              return (
                <p key={idx} className="font-label text-brass-bright text-sm sm:text-base tracking-wide">
                  {section.text}
                </p>
              );
            if (section.type === "section")
              return (
                <Panel key={idx} title={section.title}>
                  <ul className="font-reading text-sm sm:text-base text-paper-dim space-y-1.5 list-disc list-inside">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Panel>
              );
            return null;
          })}
        </div>
      </div>

      <div className="flex-none border-t border-brass/20 bg-ink-2 flex flex-col sm:flex-row px-4 py-4 gap-2">
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
