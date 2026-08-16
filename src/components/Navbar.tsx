"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// docs/DESIGN.md §6. Labels are always visible now, not hover-gated — an
// icon-only rail reads as ambiguous regardless of how the icon itself is
// styled (this was flagged twice: once about the single-icon resting state
// in round 1, again about per-item hover-reveal in round 2). A literal
// circular fan-out was considered and deliberately not used here: it kept
// reading as the old terminal nav's shape even re-themed in brass, whereas
// always-visible icon+label plaques solve the actual complaint (icon-only
// is unclear) without reusing that silhouette. Each plaque uses the same
// cut-corner shape as Button/Tag for a consistent object language.
const NAV_ITEMS = [
  { label: "Home", numeral: "01", icon: faHome, href: "/" },
  { label: "About", numeral: "02", icon: faUser, href: "/About" },
  { label: "Projects", numeral: "03", icon: faFolderOpen, href: "/MyProjects" },
  { label: "Contact", numeral: "04", icon: faEnvelope, href: "/MsgMe" },
];

const BEVEL =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.6),0_3px_7px_rgba(0,0,0,0.45)]";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: stacked plaques, icon + label always visible */}
      <aside className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {NAV_ITEMS.map((item) => {
          const active = item.href === pathname;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`plaque flex items-center gap-2.5 pl-3 pr-4 py-2.5
                bg-gradient-to-br from-ink-2 to-ink-3 ${BEVEL}
                transition-colors duration-300
                ${active ? "border-2 border-brass-bright" : "border border-brass/50 hover:border-brass"}`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`w-3.5 h-3.5 shrink-0 ${active ? "text-brass-bright" : "text-brass/70"}`}
              />
              <span
                className={`font-label text-xs tracking-wide whitespace-nowrap ${
                  active ? "text-brass-bright" : "text-paper"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </aside>

      {/* Mobile: corner tab + full-screen index overlay */}
      <button
        className={`md:hidden plaque fixed top-4 left-4 z-50 w-11 h-11 flex items-center justify-center
          bg-gradient-to-br from-ink-2 to-ink-3 border border-brass/60 text-brass ${BEVEL}`}
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
      </button>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-ink transition-[clip-path] duration-300 ease-out ${
          mobileOpen
            ? "[clip-path:circle(150%_at_2.375rem_2.375rem)]"
            : "[clip-path:circle(0%_at_2.375rem_2.375rem)] pointer-events-none"
        }`}
      >
        <nav
          aria-label="Section index"
          className="h-full flex flex-col items-center justify-center gap-5"
        >
          {NAV_ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`plaque flex items-center gap-3 pl-4 pr-6 py-3
                  bg-gradient-to-br from-ink-2 to-ink-3 ${BEVEL}
                  ${active ? "border-2 border-brass-bright" : "border border-brass/50"}`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-4 h-4 ${active ? "text-brass-bright" : "text-brass/70"}`}
                />
                <span
                  className={`font-label text-lg tracking-wide ${
                    active ? "text-brass-bright" : "text-paper"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
