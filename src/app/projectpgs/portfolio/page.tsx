import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function PortfolioDetails() {
  return (
    <ProjectDossier
      number="02"
      title="Portfolio Website"
      description="My personal portfolio, built with cutting-edge web technologies — a living demonstration of full-stack capability, attention to detail, and a commitment to engaging, responsive experiences."
      image="/portfolio.png"
      tags={["Next.js", "React", "Design"]}
      cta={[
        { href: "https://github.com/theamanullahdev/portfolio", label: "View on GitHub", color: "verdigris", external: true },
        { href: "https://amanullahdev.com", label: "Live Site", color: "rubric", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="Built With" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Next.js 15</li>
            <li>React 19</li>
            <li>TailwindCSS 3</li>
            <li>Custom Almanac design system</li>
          </ul>
        </Panel>
        <Panel title="Highlights" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Responsive design (150px – 8K)</li>
            <li>Scroll-driven, one-shot motion</li>
            <li>Crafted-object component language</li>
            <li>Full-stack setup, no wasted assets</li>
          </ul>
        </Panel>
      </div>

      <Panel title="Project Details" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>
            This portfolio is more than a resume — it&apos;s a showcase of
            technical capability and a considered, deliberate approach to web
            design. Every component was rebuilt from scratch around a single
            visual language.
          </p>
          <p>Key aspects of this project:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Ultra-responsive design working from 150px to 8K displays</li>
            <li>Scroll-linked, one-shot animation — no idle CPU cost</li>
            <li>A distinct brass/ink &quot;Almanac&quot; visual identity</li>
            <li>Mobile-first, with a full-screen index overlay on small screens</li>
            <li>Clean component architecture and reuse</li>
            <li>Performance-tuned with the Next.js App Router</li>
          </ul>
          <p>
            This site represents a commitment to engaging, high-performance
            web experiences that also demonstrate the craft behind them.
          </p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
