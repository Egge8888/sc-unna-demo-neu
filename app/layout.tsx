import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sport Club Unna e.V.",
    template: "%s – Sport Club Unna e.V.",
  },
  description:
    "Der Sport Club Unna e.V. – Ski, Badminton, Radfahren, Yoga, Wassergymnastik, Wandern. Gegründet 1963, Fusion 01.04.2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={manrope.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-background antialiased">
        {children}
      </body>
    </html>
  );
}
