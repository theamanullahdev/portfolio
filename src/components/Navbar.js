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
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/Styles/Navbar.module.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const toggleMobileMenu = () => {
    if (!overlayVisible) {
      setOverlayVisible(true);
      setTimeout(() => setNavbarVisible(true), 600);
      setTimeout(() => setMobileExpanded(true), 1000);
    } else {
      setMobileExpanded(false);
      setNavbarVisible(false);
      setTimeout(() => setOverlayVisible(false), 400);
    }
  };

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
    <>
      <button className={styles.hamburgerBtn} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={overlayVisible ? faTimes : faBars} />
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
          {icons.map((icon, index) => (
            <div
              key={index}
              className={styles.iconParent}
              style={{
                transform: isExpanded
                  ? `translate(${iconPositions[index].x}px, ${iconPositions[index].y}px)`
                  : "none",
                paddingLeft:
                  index === 3 ? "17px" : index === 4 ? "12px" : "0px",
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

      {overlayVisible && (
        <div className={`${styles.mobileOverlay} ${styles.showOverlay}`}>
          <aside
            className={`${styles.mobileNavbar} ${
              navbarVisible ? styles.showNavbar : ""
            }`}
          >
            <div
              className={`${styles.iconWrapper} ${
                mobileExpanded ? styles.expanded : ""
              }`}
            >
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className={styles.iconParent}
                  style={{
                    transform: mobileExpanded
                      ? `translate(${iconPositions[index].x}px, ${iconPositions[index].y}px)`
                      : "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <Link href={links[index]} className={styles.navIcon}>
                    <FontAwesomeIcon icon={icon} />
                  </Link>
                  <span className={styles.iconLabel}>{labels[index]}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
