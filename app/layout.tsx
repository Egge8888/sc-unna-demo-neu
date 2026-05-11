import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sport Club Unna e.V.",
  description: "Der Sport Club Unna e.V. – Ski, Badminton, Radfahren, Yoga, Wassergymnastik, Wandern. Gegründet 1963, Fusion 01.04.2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.className}>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
