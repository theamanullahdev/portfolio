import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function ChainPresenceDetails() {
  return (
    <ProjectDossier
      number="01"
      title="ChainPresence AI"
      description="An on-chain attendance system — check in with a wallet transaction to a Solidity contract on Sepolia, then AI reads the on-chain log and writes a plain-English trend summary. Built at a hackathon."
      iframeSrc="https://chain-presence-next-gamma.vercel.app"
      tags={["Solidity", "Next.js", "Gemini AI"]}
      cta={[
        { href: "https://github.com/theamanullahdev/ChainPresence", label: "View on GitHub", color: "verdigris", external: true },
        { href: "https://chain-presence-next-gamma.vercel.app", label: "Live Demo", color: "rubric", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="Technologies" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Solidity ^0.8.24, Hardhat</li>
            <li>Deployed to Ethereum Sepolia testnet</li>
            <li>Next.js (App Router, TypeScript, Tailwind)</li>
            <li>Wallet connection via ethers.js / viem</li>
            <li>Google Gemini AI SDK</li>
          </ul>
        </Panel>
        <Panel title="How It Works" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>User checks in via a wallet transaction</li>
            <li>Contract logs the entry on-chain, no admin trust needed</li>
            <li>Frontend reads the on-chain attendance log</li>
            <li>Gemini summarizes the trend in two sentences</li>
          </ul>
        </Panel>
      </div>

      <Panel title="The Contract" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>
            The core is deliberately small — a single Solidity contract with
            two entry points: <code className="font-technical text-2xs text-brass-bright">checkIn(string status)</code> writes
            a log entry (address, timestamp, status); <code className="font-technical text-2xs text-brass-bright">getAttendanceLogs()</code> reads
            the full on-chain history back out.
          </p>
          <p>
            No spreadsheet to fudge, no admin to trust blindly — every
            check-in is a transaction, verifiable by anyone against the
            chain itself. The AI layer on top doesn&apos;t touch the record;
            it only reads it and narrates what it sees.
          </p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
