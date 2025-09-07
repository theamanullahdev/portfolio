"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const TerminalButton = ({ href, children, external, type, onClick }) => {
  const classes =
    "font-mono bg-black text-green-400 border-2 border-green-400 px-6 py-3 rounded-lg shadow-md hover:bg-green-900 hover:text-green-200 transition";

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
};

TerminalButton.defaultProps = {
  href: null,
  external: false,
  type: "button",
  onClick: undefined,
};

export default TerminalButton;
