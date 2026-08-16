import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function ClauseLensDetails() {
  return (
    <ProjectDossier
      number="02"
      title="ClauseLens"
      description="Contract review that thinks like a lawyer — upload an original and a revised contract and get every change risk-scored and explained in plain English, powered by Claude."
      iframeSrc="https://clauselensapp.vercel.app"
      tags={["Next.js", "Claude AI", "shadcn/ui"]}
      cta={[
        { href: "https://github.com/theamanullahdev/ClauseLens", label: "View on GitHub", color: "verdigris", external: true },
        { href: "https://clauselensapp.vercel.app", label: "Live Demo", color: "rubric", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="Technologies" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Next.js 14 (App Router)</li>
            <li>React, TailwindCSS, shadcn/ui</li>
            <li>Anthropic Claude for contract analysis</li>
            <li>pdf-parse and mammoth.js for file parsing</li>
            <li>Deployed on Vercel</li>
          </ul>
        </Panel>
        <Panel title="Key Features" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Detects every change between two contract versions</li>
            <li>Risk scoring: Critical / Moderate / Minor</li>
            <li>Plain-English explanations, no legal jargon</li>
            <li>Recommendations: Reject / Negotiate / Acceptable</li>
            <li>PDF, DOCX, and TXT support — no login required</li>
          </ul>
        </Panel>
      </div>

      <Panel title="Project Overview" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>
            Contract redlines are easy to miss in a wall of legal text.
            ClauseLens diffs an original and a revised contract, scores each
            change by risk, and explains what actually changed and why it
            matters — in plain language, not legalese.
          </p>
          <p>
            Upload both versions, click analyze, and get back a structured
            risk report with a clear recommendation per change instead of a
            raw redline you have to interpret yourself.
          </p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
