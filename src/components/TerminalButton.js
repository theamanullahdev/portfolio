"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const TerminalButton = ({ href, children, external, type, onClick, color }) => {
  const colorThemes = {
    green:
      "text-green-400 border-green-400 hover:bg-green-900 hover:text-green-200",
    orange:
      "text-orange-400 border-orange-400 hover:bg-orange-900 hover:text-orange-200",
    cyan: "text-cyan-400 border-cyan-400 hover:bg-cyan-900 hover:text-cyan-200",
  };

  const colorClass = colorThemes[color] || colorThemes.green;

  const classes = `font-mono bg-black px-6 py-3 rounded-lg shadow-md border-2 transition ${colorClass}`;

  // Case 1: External link
  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  // Case 2: Internal Next.js link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Case 3: Button (form or action)
  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {children}
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
