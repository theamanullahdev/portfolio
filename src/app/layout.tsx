import { Fraunces, Newsreader, Martian_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@Comps/Navbar";
import CursorTrail from "@/components/CursorTrail";
// Only once globally
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const martianMono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Fourth family, deliberately: for button/tag/nav *labels* specifically —
// Roman inscription lettering, literally designed to look carved into
// stone/metal. Answers "buttons still read as generic web UI" in a way the
// bevel shadow alone didn't; everything else (numerals, body, headings)
// keeps using the original three. Not variable on Google Fonts, so request
// explicit weights rather than assuming a wght axis exists.
const cinzel = Cinzel({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "My Developer Portfolio",
  description: "I build modern websites and dApps on any blockchain. A professional vibe code specialist",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${martianMono.variable} ${cinzel.variable} antialiased`}
      >
        <CursorTrail />
        <div className="flex min-h-screen w-full relative z-10">
          <Navbar />
          {/* margin-left only at md (>=768px) — same breakpoint Navbar.tsx uses
              for its own hidden/md:flex switch. Sized for the nav's floating
              icon+label plaques (~180px wide at left-5), not a fixed rail
              width like before — widen this if a label ever gets longer than
              "Projects". */}
          <main className="w-full md:ml-52">{children}</main>
        </div>
      </body>
    </html>
  );
}
