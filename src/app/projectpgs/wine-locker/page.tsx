import ProjectDossier from "@/components/ProjectDossier";
import Panel from "@/components/Panel";

export default function WineLockerDetails() {
  return (
    <ProjectDossier
      number="01"
      title="Wine-Locker"
      description="A comprehensive Linux security utility designed to prevent unauthorized execution of Windows executables through Wine — system-level security, shell scripting, and backend logic."
      image="/winlock.png"
      tags={["Bash", "Linux", "Security"]}
      cta={[
        { href: "https://github.com/theamanullahdev/wine-locker", label: "View on GitHub", color: "verdigris", external: true },
        { href: "/MyProjects", label: "Back to All Projects", color: "brass" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Panel title="Technologies" color="brass">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Shell Scripting (Bash)</li>
            <li>Linux System Administration</li>
            <li>Process Management</li>
            <li>File System Security</li>
          </ul>
        </Panel>
        <Panel title="Key Features" color="verdigris">
          <ul className="font-reading text-sm text-paper-dim space-y-1.5">
            <li>Root-only execution locking</li>
            <li>Temporary unlock timers</li>
            <li>Toggle access system</li>
            <li>Malware prevention</li>
          </ul>
        </Panel>
      </div>

      <Panel title="Project Overview" color="rubric">
        <div className="font-reading text-sm text-paper-dim space-y-3 leading-relaxed">
          <p>
            Wine-Locker is a security utility built for Linux systems running
            Wine. It prevents unauthorized execution of Windows .exe files by
            implementing kernel-level security checks and user privilege
            validation.
          </p>
          <p>The project showcases:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Low-level Linux security mechanisms</li>
            <li>Bash shell scripting and automation</li>
            <li>System-level process management</li>
            <li>Security protocol implementation</li>
          </ul>
          <p>
            This solo project resulted in a production-ready utility that has
            been deployed in security-conscious environments where strict
            access control is paramount.
          </p>
        </div>
      </Panel>
    </ProjectDossier>
  );
}
