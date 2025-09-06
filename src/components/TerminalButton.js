"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const TerminalButton = ({ href, children, external }) => {
  const classes =
    "font-mono bg-black text-green-400 border-2 border-green-400 px-6 py-3 rounded-lg shadow-md hover:bg-green-900 hover:text-green-200 transition";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

TerminalButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

TerminalButton.defaultProps = {
  external: false,
};

export default TerminalButton;
