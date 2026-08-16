import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function AhtashamWorkPortfolioDetails() {
  return (
    <ProjectDossier
      number="04"
      title="Ahatasham Work Portfolio"
      description="A professional portfolio for Ahatasham, an expert in Shopify, ecommerce, and digital marketing with his own agency — showcasing high-performing online stores and data-driven marketing strategies."
      iframeSrc="https://ahtashamwork.com"
      tags={["Shopify", "Ecommerce", "Marketing"]}
      cta={[{ href: "https://ahtashamwork.com", label: "Visit Portfolio", color: "rubric", external: true }]}
    >
      <Panel title="Key Features" color="brass">
        <ul className="font-reading text-sm text-paper-dim space-y-2">
          <li>Professional portfolio showcasing Shopify expertise and agency services</li>
          <li>Case studies and portfolio pieces demonstrating ecommerce success stories</li>
          <li>Service offerings: Shopify store setup, optimization, and digital marketing</li>
          <li>Professional brand presentation and client testimonials</li>
          <li>Conversion-optimized design for lead generation</li>
        </ul>
      </Panel>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Panel color="brass" className="text-center !p-4">
          <div className="font-label text-brass-bright">Shopify</div>
          <div className="font-technical text-2xs text-paper-dim mt-1">Platform</div>
        </Panel>
        <Panel color="brass" className="text-center !p-4">
          <div className="font-label text-brass-bright">Ecommerce</div>
          <div className="font-technical text-2xs text-paper-dim mt-1">Focus</div>
        </Panel>
        <Panel color="brass" className="text-center !p-4">
          <div className="font-label text-brass-bright">Agency</div>
          <div className="font-technical text-2xs text-paper-dim mt-1">Type</div>
        </Panel>
      </div>
    </ProjectDossier>
  );
}
