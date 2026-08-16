/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // rgb(var(--x) / <alpha-value>) is Tailwind's documented pattern for
        // CSS-variable colors that still support opacity modifiers
        // (bg-brass/30, border-ink-3/50, etc.) — see docs/DESIGN.md §2.
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2) / <alpha-value>)",
        "ink-3": "rgb(var(--ink-3) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-dim": "rgb(var(--paper-dim) / <alpha-value>)",
        brass: {
          DEFAULT: "rgb(var(--brass) / <alpha-value>)",
          bright: "rgb(var(--brass-bright) / <alpha-value>)",
        },
        verdigris: "rgb(var(--verdigris) / <alpha-value>)",
        rubric: "rgb(var(--rubric) / <alpha-value>)",
      },
      screens: {
        xs: "380px", // Ultra-small phones
        "2xs": "320px", // Very small phones (150px covered by fluid scaling)
      },
      fontSize: {
        "2xs": "0.625rem", // 10px for very small text on mobile
      },
      fontFamily: {
        // Almanac type system (docs/DESIGN.md §3) — additive, doesn't touch
        // Tailwind's default sans/serif/mono so old, not-yet-migrated pages
        // render exactly as before.
        display: ["var(--font-display)", "Georgia", "serif"],
        reading: ["var(--font-body)", "Georgia", "serif"],
        technical: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(34, 197, 94, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" },
        },
        "float-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow: "0 0 10px rgba(34, 197, 94, 0.7), 0 0 20px rgba(34, 197, 94, 0.4)"
          },
          "20%, 24%, 55%": {
            textShadow: "0 0 5px rgba(34, 197, 94, 0.3), 0 0 10px rgba(34, 197, 94, 0.2)"
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(50px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(50px) rotate(-360deg)" },
        },
        // Almanac ambient layer (docs/DESIGN.md §5) — one shared, cheap,
        // near-imperceptible drift for the whole star-chart SVG.
        "star-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(2.5%, -2%)" },
        },
        // The Route's one-shot arrival ping (docs/DESIGN.md §5) — plays a
        // fixed number of times (see the `animate-[..._2]` iteration count
        // where it's used), not an infinite loop.
        "route-arrive": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float-up": "float-up 1s ease-out forwards",
        "neon-flicker": "neon-flicker 1.5s infinite",
        "shimmer": "shimmer 2s infinite",
        "orbit": "orbit 20s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "star-drift": "star-drift 50s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
