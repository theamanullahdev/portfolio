/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Link from "next/link";

const PLACEHOLDER =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const ITEM_FALLBACK = {
  picture: PLACEHOLDER,
  title: "Untitled",
  description: "No description provided.",
  link: "#",
  buttonText: "See More",
};

function normalizeItems(items) {
  return (Array.isArray(items) && items.length ? items : [ITEM_FALLBACK]).map(
    (it) => ({ ...ITEM_FALLBACK, ...(it || {}) })
  );
}

const Cards = ({ items }) => {
  const safeItems = normalizeItems(items);
  const [layout, setLayout] = useState("row"); // "row", "two-rows", "scroll"

  useEffect(() => {
    function updateLayout() {
      const vw = window.innerWidth;
      const cardWidth = 288; // ~w-72 px
      const gap = 24; // tailwind gap-6
      const totalCards = safeItems.length;

      if (vw < 560) {
        setLayout("scroll"); // small screens always horizontal scroll
        return;
      }

      const availableWidth = vw * 0.8; // 80vw container
      const maxPerRow = Math.floor((availableWidth + gap) / (cardWidth + gap));

      if (totalCards <= maxPerRow) {
        setLayout("row"); // fits one row
      } else if (totalCards <= maxPerRow * 2) {
        setLayout("two-rows"); // fits two rows
      } else {
        setLayout("scroll"); // force scroll
      }
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [safeItems]);

  return (
    <div className="cards-wrapper flex justify-center">
      <motion.div
        className={`
          flex gap-6 justify-center
          max-w-[90vw] md:max-w-[80vw]
          hide-scrollbar
          ${
            layout === "scroll"
              ? "overflow-x-auto flex-nowrap"
              : "overflow-visible"
          }
          ${layout === "two-rows" ? "flex-wrap" : ""}
        `}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          scrollSnapType: layout === "scroll" ? "x mandatory" : "none",
          WebkitOverflowScrolling: layout === "scroll" ? "touch" : "auto",
        }}
      >
        {safeItems.map((card, idx) => (
          <motion.div
            key={idx}
            className={`relative isolate z-0 ${
              layout === "scroll" && window.innerWidth < 560
                ? "w-[80vw]" // small screens: big card
                : "w-72" // normal cards
            } flex-shrink-0`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{
              transformOrigin: "center",
              overflow: "visible",
              willChange: "transform",
              zIndex: 0,
            }}
          >
            <div className="border-4 border-blue-400 rounded-xl p-4 shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl">
              <img
                src={card.picture}
                alt={card.title}
                className="object-cover w-full h-36 mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm mb-2">{card.description}</p>
              
              <Link
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded"
              >
                {card.buttonText}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .cards-wrapper {
          max-width: 100%;
          padding: 1rem;
        }
        .isolate:hover {
          z-index: 50;
        }
      `}</style>
    </div>
  );
};

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      buttonText: PropTypes.string,
    })
  ),
};

Cards.defaultProps = {
  items: [],
};

export default Cards;
