"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/Styles/Navbar.module.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => setIsExpanded(!isExpanded);

  // More curved arc positions without rotation
  const iconPositions = [
    { x: 10, y: -60 },
    { x: 40, y: -30 },
    { x: 50, y: 20 },
    { x: 40, y: 60 },
    { x: 10, y: 80 },
  ];

  const labels = ["Menu", "Home", "About", "Projects", "Contact"];

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`${styles.navbar} ${isExpanded ? styles.expanded : ""}`}
    >
      <div className={styles.iconWrapper}>
        <button
          onClick={toggleNavbar}
          className={styles.navIcon}
          style={{
            transform: isExpanded
              ? `translate(${iconPositions[0].x}px, ${iconPositions[0].y}px)`
              : "none",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
          <span
            className={`${styles.iconLabel} ${
              isExpanded ? styles.showLabel : ""
            }`}
          >
            {labels[0]}
          </span>
        </button>

        <Link
          href="#home"
          className={styles.navIcon}
          style={{
            transform: isExpanded
              ? `translate(${iconPositions[1].x}px, ${iconPositions[1].y}px)`
              : "none",
          }}
        >
          <FontAwesomeIcon icon={faHome} />
          <span
            className={`${styles.iconLabel} ${
              isExpanded ? styles.showLabel : ""
            }`}
          >
            {labels[1]}
          </span>
        </Link>

        <Link
          href="#about"
          className={styles.navIcon}
          style={{
            transform: isExpanded
              ? `translate(${iconPositions[2].x}px, ${iconPositions[2].y}px)`
              : "none",
          }}
        >
          <FontAwesomeIcon icon={faUser} />
          <span
            className={`${styles.iconLabel} ${
              isExpanded ? styles.showLabel : ""
            }`}
          >
            {labels[2]}
          </span>
        </Link>

        <Link
          href="#projects"
          className={styles.navIcon}
          style={{
            transform: isExpanded
              ? `translate(${iconPositions[3].x}px, ${iconPositions[3].y}px)`
              : "none",
          }}
        >
          <FontAwesomeIcon icon={faFolderOpen} />
          <span
            className={`${styles.iconLabel} ${
              isExpanded ? styles.showLabel : ""
            }`}
          >
            {labels[3]}
          </span>
        </Link>

        <Link
          href="#contact"
          className={styles.navIcon}
          style={{
            transform: isExpanded
              ? `translate(${iconPositions[4].x}px, ${iconPositions[4].y}px)`
              : "none",
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span
            className={`${styles.iconLabel} ${
              isExpanded ? styles.showLabel : ""
            }`}
          >
            {labels[4]}
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Navbar;
