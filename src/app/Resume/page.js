/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function ResumePage() {
  const resumeRef = useRef();

  const [pdfBtnText, setPdfBtnText] = useState("Download PDF");
  const [docxBtnText, setDocxBtnText] = useState("Download DOCX");
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const resumeSections = [
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
        "Twitter: @theamanullahdev",
      ],
    },
    {
      type: "section",
      title: "Summary",
      items: [
        "Full-Stack Developer specializing in blockchain, smart contracts, decentralized applications, web development, and cybersecurity.",
        "Experienced in building scalable, secure, and maintainable applications using Next.js, React, TailwindCSS, framer-motion, Node.js, JavaScript, Python, Rust.",
        "Skilled in backend development, database design and optimization (MongoDB, SQL, PostgreSQL, SQLite), server deployment (VPS, Nginx), code refactoring, legacy code cleanup, and system optimization.",
      ],
    },
    {
      type: "section",
      title: "Skills",
      items: [
        "Frontend: Next.js, React, TailwindCSS, framer-motion, Responsive UI/UX, Interactive Interfaces",
        "Backend: Node.js, Express.js, RESTful APIs, Server-side Logic, VPS Deployment, Nginx Configuration",
        "Databases: MongoDB, SQL, PostgreSQL, SQLite, Database Design, Query Optimization",
        "Blockchain & dApps: Smart Contracts, Solidity, Ethereum, Binance Smart Chain, Web3.js, Decentralized Applications",
        "Security: Linux Security Hardening, Cybersecurity, Application Security, Penetration Testing",
        "Programming & Tools: JavaScript, Python, Rust, Git Version Control, Agile Methodologies",
        "Code Quality & Optimization: Maintainable Code, Code Refactoring, Performance Tuning, Scalability, Legacy Code Cleanup",
      ],
    },
    {
      type: "section",
      title: "Projects",
      items: [
        "Wine-Locker: Linux security utility restricting Wine execution to root to prevent unauthorized .exe files.",
        "LetterSmith: AI-powered cover-letter generator.",
        "Portfolio Website: Built with Next.js, TailwindCSS, and framer-motion for animations.",
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

  const downloadPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    let y = 40;

    resumeSections.forEach((section) => {
      if (section.type === "heading") {
        doc.setFontSize(22);
        doc.setFont(undefined, "bold");
        doc.text(section.text, 40, y);
        y += 28;
      } else if (section.type === "subheading") {
        doc.setFontSize(14);
        doc.setFont(undefined, "normal");
        doc.text(section.text, 40, y);
        y += 22;
      } else if (section.type === "section") {
        doc.setFontSize(14);
        doc.setFont(undefined, "bold");
        doc.text(section.title, 40, y);
        y += 18;
        doc.setFontSize(12);
        doc.setFont(undefined, "normal");
        section.items.forEach((item) => {
          const splitText = doc.splitTextToSize("- " + item, 500);
          splitText.forEach((line) => {
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
    setPdfBtnText("Downloaded PDF");
    setTimeout(() => setPdfBtnText("Download PDF"), 3000);
  };

  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: resumeSections.flatMap((section) => {
            if (section.type === "heading") {
              return [new Paragraph({ text: section.text, heading: "Title" })];
            } else if (section.type === "subheading") {
              return [
                new Paragraph({ text: section.text, heading: "Subtitle" }),
              ];
            } else if (section.type === "section") {
              const titlePara = new Paragraph({
                text: section.title,
                bold: true,
              });
              const itemsPara = section.items.map(
                (item) => new Paragraph({ text: "- " + item })
              );
              return [titlePara, ...itemsPara, new Paragraph({ text: "" })];
            }
            return [];
          }),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "resume.docx");
    setDocxBtnText("Downloaded DOCX");
    setTimeout(() => setDocxBtnText("Download DOCX"), 3000);
  };

  const copyResume = () => {
    const text = resumeSections
      .flatMap((section) => {
        if (section.type === "heading" || section.type === "subheading")
          return [section.text];
        if (section.type === "section")
          return [section.title, ...section.items, ""];
        return [];
      })
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopyBtnText("Copied!");
    setTimeout(() => setCopyBtnText("Copy"), 3000);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Scrollable resume */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4">
        <div ref={resumeRef} className="max-w-4xl mx-auto space-y-6">
          {resumeSections.map((section, idx) => {
            if (section.type === "heading")
              return (
                <h1
                  key={idx}
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  }}
                >
                  {section.text}
                </h1>
              );
            if (section.type === "subheading")
              return (
                <h2
                  key={idx}
                  className="font-semibold mb-4"
                  style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  }}
                >
                  {section.text}
                </h2>
              );
            if (section.type === "section")
              return (
                <div key={idx} className="mb-6">
                  <h3
                    className="font-bold mb-2"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                  >
                    {section.title}
                  </h3>
                  <ul
                    className="list-disc list-inside space-y-1"
                    style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                  >
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            return null;
          })}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex-none border-t border-white bg-gray-100 dark:bg-gray-900 flex px-4 py-2 gap-2">
        <button
          onClick={downloadPDF}
          className="flex-1 font-mono border-2 border-green-400 bg-black text-green-400 rounded-lg shadow-md transition hover:bg-green-900 hover:text-green-200 px-4 py-3"
        >
          {pdfBtnText}
        </button>
        <button
          onClick={downloadDOCX}
          className="flex-1 font-mono border-2 border-orange-400 bg-black text-orange-400 rounded-lg shadow-md transition hover:bg-orange-900 hover:text-orange-200 px-4 py-3"
        >
          {docxBtnText}
        </button>
        <button
          onClick={copyResume}
          className="flex-1 font-mono border-2 border-cyan-400 bg-black text-cyan-400 rounded-lg shadow-md transition hover:bg-cyan-900 hover:text-cyan-200 px-4 py-3"
        >
          {copyBtnText}
        </button>
      </div>
    </div>
  );
}
