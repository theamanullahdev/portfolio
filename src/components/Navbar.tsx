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

// "The Bookmark" — docs/DESIGN.md §6. All 4 destinations show as icons at
// rest (reads unambiguously as a menu, not a single logo-like icon), the
// rail widens on hover/focus to reveal numerals + labels. Pure CSS
// transition, one useState for the mobile overlay only — no framer-motion,
// no timers.
const NAV_ITEMS = [
  { label: "Home", numeral: "01", icon: faHome, href: "/" },
  { label: "About", numeral: "02", icon: faUser, href: "/About" },
  { label: "Projects", numeral: "03", icon: faFolderOpen, href: "/MyProjects" },
  { label: "Contact", numeral: "04", icon: faEnvelope, href: "/MsgMe" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: vertical icon rail, shaped like a ribbon bookmark (fishtail
          notch at the bottom), widens to reveal labels on hover/focus */}
      <aside
        className="group hidden md:flex fixed left-0 top-0 h-screen z-20 flex-col justify-center
                   w-20 hover:w-60 focus-within:w-60 transition-[width] duration-300 ease-out
                   bg-gradient-to-b from-ink-2 via-ink-2 to-ink-3 border-r border-brass/30 overflow-hidden
                   [clip-path:polygon(0_0,100%_0,100%_93%,50%_100%,0_93%)]"
      >
        {/* Stitch line — reads as ribbon seam, not a plain panel */}
        <span
          aria-hidden
          className="absolute inset-y-10 left-10 w-px border-l border-dashed border-brass/20"
        />

        {NAV_ITEMS.map((item, i) => {
          const active = item.href === pathname;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex items-center gap-4 h-16 pl-6 shrink-0"
            >
              {active && (
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] bg-brass-bright"
                />
              )}
              <FontAwesomeIcon
                icon={item.icon}
                className={`w-4 h-4 shrink-0 transition-colors ${
                  active ? "text-brass-bright" : "text-brass/60 group-hover:text-brass"
                }`}
              />
              <span
                className="flex items-baseline gap-2 whitespace-nowrap opacity-0 -translate-x-1 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-technical text-2xs text-brass">§{item.numeral}</span>
                <span
                  className={`font-reading text-base ${
                    active ? "text-brass-bright" : "text-paper"
                  }`}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </aside>

      {/* Mobile: corner tab + full-screen index overlay */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 w-11 h-11 flex items-center justify-center rounded border border-brass/60 bg-ink-2 text-brass"
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
          className="h-full flex flex-col items-center justify-center gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 font-reading text-2xl ${
                  active ? "text-brass-bright" : "text-paper"
                }`}
              >
                <span className="font-technical text-sm text-brass">§{item.numeral}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
