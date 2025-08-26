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

  // More curved arc positions
  const iconPositions = [
    { x: 10, y: -60 },
    { x: 40, y: -30 },
    { x: 50, y: 20 },
    { x: 40, y: 60 },
    { x: 10, y: 80 },
  ];

  const labels = ["Menu", "Home", "About", "Projects", "Contact"];
  const icons = [faBars, faHome, faUser, faFolderOpen, faEnvelope];
  const links = ["#", "/", "/About", "/MyProjects", "/MsgMe"];

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`${styles.navbar} ${isExpanded ? styles.expanded : ""}`}
    >
      <div
        className={`${styles.iconWrapper} ${isExpanded ? styles.expanded : ""}`}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className={styles.iconParent}
            style={{
              transform: isExpanded
                ? `translate(${iconPositions[index].x}px, ${iconPositions[index].y}px)`
                : "none",
              paddingLeft: index === 3 ? "17px" : index === 4 ? "12px" : "0px", // Additional padding
            }}
          >
            <Link href={links[index]} className={styles.navIcon}>
              <FontAwesomeIcon icon={icon} />
            </Link>
            <span className={styles.iconLabel}>{labels[index]}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Navbar;
