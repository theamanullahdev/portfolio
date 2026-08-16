import React from "react";

// Lightweight cut-corner content box — docs/DESIGN.md §7 crafted-object
// language, but deliberately without the full Frame ornament (Frame is
// reserved for primary interactive/branded elements: buttons, nav, project
// plates). Used for the secondary panels/dossier boxes across About,
// MyProjects, MsgMe, Resume, and the project detail pages — replaces the
// old ad-hoc `bg-black/30 rounded-lg border` pattern used everywhere.
type PanelColor = "brass" | "verdigris" | "rubric";

const BORDER: Record<PanelColor, string> = {
  brass: "border-brass/25 hover:border-brass/50",
  verdigris: "border-verdigris/25 hover:border-verdigris/50",
  rubric: "border-rubric/25 hover:border-rubric/50",
};

const TITLE_COLOR: Record<PanelColor, string> = {
  brass: "text-brass-bright",
  verdigris: "text-verdigris",
  rubric: "text-rubric",
};

export default function Panel({
  title,
  color = "brass",
  className = "",
  children,
}: {
  title?: string;
  color?: PanelColor;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`plaque plaque-fill border ${BORDER[color]} transition-colors duration-300 p-5 sm:p-6 ${className}`}
    >
      {title && (
        <h3 className={`font-label text-sm tracking-wide uppercase mb-3 ${TITLE_COLOR[color]}`}>{title}</h3>
      )}
      {children}
    </div>
  );
}
