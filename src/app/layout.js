import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@Comps/Navbar";
import CursorTrail from "@/components/CursorTrail";
// Only once globally
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorTrail />
        <div className="flex min-h-screen w-full relative z-10">
          <Navbar />
          {/* 👇 margin-left only on >=500px */}
          <main className="w-full md:ml-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
