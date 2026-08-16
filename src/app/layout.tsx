import { Fraunces, Newsreader, Martian_Mono } from "next/font/google";
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
        className={`${fraunces.variable} ${newsreader.variable} ${martianMono.variable} antialiased`}
      >
        <CursorTrail />
        <div className="flex min-h-screen w-full relative z-10">
          <Navbar />
          {/* margin-left only at md (>=768px) — same breakpoint Navbar.tsx uses for its own hidden/md:block switch, both driven by Tailwind's md so there's only one breakpoint definition to keep in sync now */}
          <main className="w-full md:ml-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
