"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/Styles/Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", icon: faHome, href: "/" },
  { label: "About", icon: faUser, href: "/About" },
  { label: "Projects", icon: faFolderOpen, href: "/MyProjects" },
  { label: "Contact", icon: faEnvelope, href: "/MsgMe" },
];

const DESKTOP_ICON_POSITIONS = [
  { x: 15, y: -65 },
  { x: 45, y: -22 },
  { x: 45, y: 22 },
  { x: 15, y: 65 },
];

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <button
        className={styles.hamburgerBtn}
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
      </button>

      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`${styles.navbar} ${isExpanded ? styles.expanded : ""}`}
      >
        <div
          className={`${styles.iconWrapper} ${
            isExpanded ? styles.expanded : ""
          }`}
        >
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.href}
              className={styles.iconParent}
              style={{
                transform: isExpanded
                  ? `translate(${DESKTOP_ICON_POSITIONS[index].x}px, ${DESKTOP_ICON_POSITIONS[index].y}px)`
                  : "none",
              }}
            >
              <Link href={item.href} className={styles.navIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </Link>
              <span className={styles.iconLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMobileMenu}
          >
            <motion.aside
              className={styles.mobileNavbar}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.iconWrapper}>
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    className={styles.iconParent}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={styles.navIcon}
                      onClick={closeMobileMenu}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </Link>
                    <span className={styles.iconLabel}>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
