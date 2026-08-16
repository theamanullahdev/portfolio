"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faScroll,
  faEnvelope,
  faBars,
  faTimes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Frame from "@/components/Frame";

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
  { label: "Resume", numeral: "04", icon: faScroll, href: "/Resume" },
  { label: "Contact", numeral: "05", icon: faEnvelope, href: "/MsgMe" },
];

// Same bevel + banded-groove language as Button.tsx (docs/DESIGN.md §7).
const BEVEL =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.6),inset_0_0_0_4px_rgba(13,11,8,0.95),inset_0_0_0_6px_rgba(230,196,110,0.6),0_3px_7px_rgba(0,0,0,0.45)]";

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
              className={`group plaque plaque-fill relative flex items-center gap-2.5 pl-4 pr-5 py-3 border-2
                ${BEVEL} transition-[color,border-color,transform] duration-300
                ${active ? "border-brass-bright" : "border-brass/25 hover:border-brass/60"}
                hover:translate-x-1`}
            >
              {/* Current-page indicator — a small tab riding the left edge,
                  not just a subtler text color, so "where am I" reads at a
                  glance instead of needing to compare opacity between items. */}
              {active && (
                <span
                  aria-hidden
                  className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-5 bg-brass-bright"
                />
              )}
              {active && <span aria-hidden className="absolute inset-0 -z-10 bg-brass/10" />}
              <Frame
                className={`transition-colors duration-300 ${
                  active ? "text-brass-bright" : "text-brass/50 group-hover:text-brass-bright"
                }`}
              />
              <FontAwesomeIcon
                icon={item.icon}
                className={`w-3.5 h-3.5 shrink-0 transition-colors duration-300 ${
                  active ? "text-brass-bright" : "text-brass/70 group-hover:text-brass-bright"
                }`}
              />
              <span
                className={`font-label text-xs tracking-wide whitespace-nowrap transition-colors duration-300 ${
                  active ? "text-brass-bright" : "text-paper group-hover:text-brass-bright"
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
        className={`group md:hidden plaque plaque-fill fixed top-4 left-4 z-50 w-11 h-11 flex items-center justify-center
          text-brass ${BEVEL}`}
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <Frame className="text-brass/70 group-hover:text-brass-bright transition-colors duration-300" />
        <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
      </button>

      {/* First-glance hint for the hamburger — separate element, not part
          of the button itself, so the button's own shape/behavior stays
          untouched. Hides once the menu is opened. */}
      {!mobileOpen && (
        <div
          aria-hidden
          className="md:hidden fixed top-[1.55rem] left-[4.25rem] z-50 flex items-center gap-1.5 pointer-events-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3 text-brass-bright" />
          <span className="font-label text-2xs tracking-wide text-brass-bright whitespace-nowrap">
            Open menu here
          </span>
        </div>
      )}

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
                className={`group plaque plaque-fill relative flex items-center gap-3 pl-4 pr-6 py-3 border-2 ${BEVEL}
                  transition-colors duration-300 ${active ? "border-brass-bright" : "border-brass/25 active:border-brass/60"}`}
              >
                {active && (
                  <span aria-hidden className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-brass-bright" />
                )}
                {active && <span aria-hidden className="absolute inset-0 -z-10 bg-brass/10" />}
                <Frame className={active ? "text-brass-bright" : "text-brass/50"} />
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
