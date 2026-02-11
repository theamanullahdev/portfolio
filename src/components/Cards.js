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
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    function updateLayout() {
      const vw = window.innerWidth;
      const cardWidth = 288; // ~w-72 px
      const gap = 24; // tailwind gap-6
      const totalCards = safeItems.length;

      // Ultra responsive: handle tiny screens
      if (vw < 380) {
        setLayout("scroll"); // small screens always horizontal scroll
        return;
      }

      const availableWidth = vw * 0.85; // 85vw for better mobile experience
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
    <div className="cards-wrapper flex justify-center w-full">
      <motion.div
        className={`
          flex gap-4 sm:gap-6 justify-center
          max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw]
          hide-scrollbar
          ${
            layout === "scroll"
              ? "overflow-x-auto flex-nowrap px-2"
              : "overflow-visible flex-wrap"
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
            className={`relative isolate z-0 flex-shrink-0 ${
              layout === "scroll" && window.innerWidth < 380
                ? "w-[85vw]" // ultra-small: very big card
                : layout === "scroll" && window.innerWidth < 560
                ? "w-[75vw]" // small screens: big card
                : "w-56 sm:w-64 md:w-72" // normal cards
            }`}
            whileHover={{ scale: 1.08, y: -10 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              hover: { type: "spring", stiffness: 300, damping: 25 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              },
            }}
            onHoverStart={() => setActiveCard(idx)}
            onHoverEnd={() => setActiveCard(null)}
            style={{
              transformOrigin: "center",
              overflow: "visible",
              willChange: "transform",
              zIndex: activeCard === idx ? 50 : 0,
            }}
          >
            <motion.div 
              className="border-4 border-blue-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg sm:shadow-xl bg-white dark:bg-gray-800/90 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-300 h-full flex flex-col"
              animate={{
                borderColor: activeCard === idx ? "#00d9ff" : "#60a5fa",
                boxShadow: activeCard === idx 
                  ? "0 0 30px rgba(0, 217, 255, 0.4)"
                  : "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="relative overflow-hidden rounded h-24 sm:h-32 md:h-36 mb-3 sm:mb-4">
                <motion.img
                  src={card.picture}
                  alt={card.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"
                  animate={{ opacity: activeCard === idx ? 1 : 0 }}
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2">{card.title}</h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3 text-gray-700 dark:text-gray-300">{card.description}</p>
              
              <motion.div
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded font-medium transition-all text-xs sm:text-sm font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  {card.buttonText} →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .cards-wrapper {
          max-width: 100%;
          padding: 0.5rem;
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
