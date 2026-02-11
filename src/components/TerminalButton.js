"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TerminalButton = ({ href, children, external, type, onClick, color }) => {
  const colorThemes = {
    green:
      "text-green-400 border-green-400 hover:bg-green-900/50 hover:text-green-200 hover:shadow-lg hover:shadow-green-400/30",
    orange:
      "text-orange-400 border-orange-400 hover:bg-orange-900/50 hover:text-orange-200 hover:shadow-lg hover:shadow-orange-400/30",
    cyan: "text-cyan-400 border-cyan-400 hover:bg-cyan-900/50 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-400/30",
  };

  const colorClass = colorThemes[color] || colorThemes.green;

  const classes = `font-mono bg-black/70 backdrop-blur-sm px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg sm:rounded-lg shadow-md border-2 transition text-xs xs:text-sm sm:text-base ${colorClass}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  // Case 1: External link
  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  // Case 2: Internal Next.js link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Case 3: Button (form or action)
  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

TerminalButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["green", "orange", "cyan"]), 
};

TerminalButton.defaultProps = {
  href: null,
  external: false,
  type: "button",
  onClick: undefined,
  color: "green", // default to terminal green
};

export default TerminalButton;
