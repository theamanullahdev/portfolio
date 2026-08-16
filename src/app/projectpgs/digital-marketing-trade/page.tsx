import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

const CHALLENGES = [
  {
    title: "Scalable Multi-Service Architecture",
    desc: "Designed infrastructure supporting multiple service categories within a unified platform while maintaining clean code separation and scalability.",
  },
  {
    title: "Conversion-Focused User Flows",
    desc: "Engineered conversion pipelines for lead capture and client onboarding, balancing marketing objectives with smooth user experience.",
  },
  {
    title: "Production Reliability",
    desc: "Implemented monitoring, error handling, and performance optimization ensuring 24/7 operational stability for live clients.",
  },
  {
    title: "Business-Level Decision Making",
    desc: "Balanced technical implementation with commercial requirements, delivering solutions that support real revenue operations.",
  },
];

const SERVICES = [
  "Custom Website Development",
  "Ecommerce Platform Deployment",
  "Web3 & Blockchain Solutions",
  "Digital Advertising Campaigns",
  "Social Media Marketing",
  "Brand Identity & Design",
];

export default function DigitalMarketingTradeDetails() {
  return (
    <ProjectDossier
      number="05"
      title="Digital Marketing Trade"
      description="Built and led the technical infrastructure of a multi-service digital agency delivering web development, ecommerce, Web3 platforms, and performance marketing — in a real production environment."
      iframeSrc="https://alhijaz.agency"
      tags={["Production System", "Enterprise Scale", "Live Deployment"]}
      cta={[
        { href: "https://alhijaz.agency", label: "Visit Live Platform", color: "rubric", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="My Role" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>System Architecture Design</li>
            <li>Full-Stack Development</li>
            <li>Technology Leadership</li>
            <li>Production Deployment</li>
            <li>Service Workflow Design</li>
            <li>Performance Optimization</li>
          </ul>
        </Panel>
        <Panel title="Technology Stack" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Next.js &amp; React</li>
            <li>TailwindCSS</li>
            <li>Backend Integration</li>
            <li>API Architecture</li>
            <li>Analytics Systems</li>
            <li>Performance Monitoring</li>
          </ul>
        </Panel>
      </div>

      <Panel title="Services Supported" color="rubric">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((service) => (
            <div key={service} className="font-reading text-sm text-paper-dim border-l-2 border-rubric/40 pl-3 py-1">
              {service}
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Engineering Challenges" color="brass">
        <div className="space-y-4">
          {CHALLENGES.map((c) => (
            <div key={c.title} className="border-l-2 border-brass/40 pl-4">
              <h4 className="font-label text-sm text-brass-bright mb-1">{c.title}</h4>
              <p className="font-reading text-sm text-paper-dim">{c.desc}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Real-World Impact" color="verdigris">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>Unlike experimental or educational projects, this system operates in a live business environment serving real clients with commercial requirements.</p>
          <ul className="space-y-1.5 ml-2">
            <li>Supports live agency operations and service delivery</li>
            <li>Processes real client inquiries and leads</li>
            <li>Manages multi-domain service workflows</li>
            <li>Functions as primary commercial infrastructure</li>
            <li>Demonstrates production deployment experience</li>
          </ul>
          <p>This project reflects hands-on experience with enterprise systems, operational challenges, and commercial-scale engineering.</p>
        </div>
      </Panel>

      <Panel title="Why This Project Matters" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-2 leading-relaxed">
          <p>It demonstrates the ability to design and execute production-ready systems at enterprise scale — technical leadership, system thinking, and practical experience working within real commercial constraints.</p>
          <p className="text-brass-bright font-label text-xs tracking-wide">
            It reflects how I approach complex technical challenges when real users and business outcomes are at stake.
          </p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
