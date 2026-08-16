import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function LetterSmithDetails() {
  return (
    <ProjectDossier
      number="03"
      title="LetterSmith"
      description="An AI-powered cover letter generator that transforms job applications — upload a CV, paste a job description, and get a professionally crafted cover letter instantly."
      image="/LTsmith1.png"
      tags={["Next.js", "React", "AI"]}
      cta={[
        { href: "https://github.com/theamanullahdev/lettersmith", label: "View on GitHub", color: "verdigris", external: true },
        { href: "https://lettersmithai.vercel.app/", label: "Live Demo", color: "rubric", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="Technologies" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Next.js &amp; React</li>
            <li>TailwindCSS</li>
            <li>REST APIs</li>
            <li>Real-time AI processing</li>
          </ul>
        </Panel>
        <Panel title="Key Features" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Seamless file upload and document parsing</li>
            <li>Real-time AI processing with user feedback</li>
            <li>Responsive UI with smooth transitions</li>
            <li>Production deployment on Vercel</li>
          </ul>
        </Panel>
      </div>

      <Panel title="Project Overview" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>
            LetterSmith demonstrates full-stack development by combining AI
            capabilities with an intuitive interface — automating cover
            letter creation to streamline the job application process.
          </p>
          <p>This project showcases the ability to integrate multiple technologies, build user-centric solutions, and deploy applications to production.</p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
