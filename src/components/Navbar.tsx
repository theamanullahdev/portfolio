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

// "The Medallions" — docs/DESIGN.md §6. Four independent crafted objects,
// not one panel: each is a small embossed disc (layered box-shadow faking a
// bevel) rather than a flat bordered circle. Per-item hover reveal, no
// shared expand/collapse state.
const NAV_ITEMS = [
  { label: "Home", numeral: "01", icon: faHome, href: "/" },
  { label: "About", numeral: "02", icon: faUser, href: "/About" },
  { label: "Projects", numeral: "03", icon: faFolderOpen, href: "/MyProjects" },
  { label: "Contact", numeral: "04", icon: faEnvelope, href: "/MsgMe" },
];

// Full literal shadow strings (not assembled at runtime) so Tailwind's
// scanner generates both — see the note on this in Button.tsx.
const MEDALLION_SHADOW =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.18),inset_-2px_-2px_5px_rgba(0,0,0,0.65),0_3px_8px_rgba(0,0,0,0.5)]";
const MEDALLION_SHADOW_ACTIVE =
  "shadow-[inset_1px_1px_2px_rgba(230,196,110,0.25),inset_-2px_-2px_5px_rgba(0,0,0,0.65),0_3px_8px_rgba(0,0,0,0.5),0_0_14px_rgba(230,196,110,0.35)]";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: stacked medallions, vertically centered on the left edge */}
      <aside className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 flex-col gap-5">
        {NAV_ITEMS.map((item) => {
          const active = item.href === pathname;
          return (
            <div key={item.href} className="group/item relative">
              <Link
                href={item.href}
                aria-label={item.label}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full
                  bg-gradient-to-br from-ink-2 to-ink-3 transition-[border-color] duration-300
                  ${active ? `border-2 border-brass-bright ${MEDALLION_SHADOW_ACTIVE}` : `border border-brass/50 hover:border-brass ${MEDALLION_SHADOW}`}`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-4 h-4 ${
                    active ? "text-brass-bright" : "text-brass/70 group-hover/item:text-brass"
                  }`}
                />
              </Link>

              {/* Per-item label flyout */}
              <span
                className="absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap
                  bg-ink-2 border border-brass/40 px-3 py-1.5
                  opacity-0 -translate-x-2 pointer-events-none
                  transition-[opacity,transform] duration-200 ease-out
                  group-hover/item:opacity-100 group-hover/item:translate-x-0
                  group-focus-within/item:opacity-100 group-focus-within/item:translate-x-0"
              >
                <span className="font-technical text-2xs text-brass mr-2">§{item.numeral}</span>
                <span
                  className={`font-reading text-sm ${active ? "text-brass-bright" : "text-paper"}`}
                >
                  {item.label}
                </span>
              </span>
            </div>
          );
        })}
      </aside>

      {/* Mobile: corner tab + full-screen index overlay */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 w-11 h-11 flex items-center justify-center rounded-full
          bg-gradient-to-br from-ink-2 to-ink-3 border border-brass/60 text-brass ${MEDALLION_SHADOW}`}
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
          className="h-full flex flex-col items-center justify-center gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4"
              >
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-ink-2 to-ink-3 ${
                    active
                      ? `border-2 border-brass-bright ${MEDALLION_SHADOW_ACTIVE}`
                      : `border border-brass/50 ${MEDALLION_SHADOW}`
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-4 h-4 ${active ? "text-brass-bright" : "text-brass/70"}`}
                  />
                </span>
                <span className={`font-reading text-2xl ${active ? "text-brass-bright" : "text-paper"}`}>
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
