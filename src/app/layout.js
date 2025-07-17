import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@Comps/Navbar";
import CursorTrail from "@/components/CursorTrail";
// Only once globally
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

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
  description: "I build modern websites and dApps on any blockchain.",
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
          <main className="ml-20 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
