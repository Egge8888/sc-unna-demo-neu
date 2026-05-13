"use client";

import { useState } from "react";
import Link from "next/link";

type NavPage = "home" | "aktuelles" | "badminton" | "vorstand" | "stammtisch" | "impressum" | "datenschutz" | "";

export default function MobileMenu({ current = "" }: { current?: NavPage }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass = (active: boolean) =>
    `block px-md py-sm font-label-bold text-label-bold uppercase transition-colors border-b border-surface-container-high ${
      active ? "text-primary" : "text-on-surface hover:text-primary"
    }`;

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-on-surface flex items-center"
        aria-expanded={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
      >
        <span className="material-symbols-outlined text-[24px]">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-surface border border-surface-container-highest rounded-lg shadow-ambient z-50 overflow-hidden">
          <Link href="/" className={linkClass(current === "home")} onClick={close}>Start</Link>

          {/* Sportl. Aktivitäten group */}
          <div className="border-b border-surface-container-high">
            <p className="px-md py-xs font-label-bold text-[10px] text-primary uppercase tracking-wider bg-surface-container-low">
              Sportl. Aktivitäten
            </p>
            <Link href="/badminton" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "badminton" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>
              Badminton
            </Link>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Ski / Wintersport</a>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Radfahren</a>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Yoga</a>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Pilates</a>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Wassergymnastik</a>
            <a href="#" className="block px-md py-sm font-body-md text-sm text-secondary border-t border-surface-container-high" onClick={close}>Wandern</a>
          </div>

          <Link href="/aktuelles" className={linkClass(current === "aktuelles")} onClick={close}>Aktuelles</Link>
          <a href="#" className={linkClass(false)} onClick={close}>Termine</a>
          <Link href="/vorstand" className={linkClass(current === "vorstand")} onClick={close}>Vorstand</Link>
          <a href="#" className={linkClass(false)} onClick={close}>Freizeiten</a>
          <Link href="/stammtisch" className={linkClass(current === "stammtisch")} onClick={close}>Stammtisch</Link>
          <a href="#" className={linkClass(false)} onClick={close}>Galerie</a>
          <Link href="/impressum" className={linkClass(current === "impressum")} onClick={close}>Impressum</Link>

          <div className="p-md">
            <button className="w-full bg-primary text-on-primary font-label-bold text-label-bold py-sm rounded hover:opacity-90 transition-opacity text-xs">
              Mitglied werden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
