"use client";

import { useState } from "react";
import Link from "next/link";

type NavPage = "home" | "aktuelles" | "termine" | "freizeiten" | "galerie" | "ski" | "badminton" | "radfahren" | "yoga" | "pilates" | "wassergymnastik" | "wandern" | "vorstand" | "stammtisch" | "impressum" | "datenschutz" | "kontakt" | "";

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
            <Link href="/ski" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "ski" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Ski / Wintersport</Link>
            <Link href="/radfahren" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "radfahren" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Radfahren</Link>
            <Link href="/yoga" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "yoga" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Yoga</Link>
            <Link href="/pilates" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "pilates" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Pilates</Link>
            <Link href="/wassergymnastik" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "wassergymnastik" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Wassergymnastik</Link>
            <Link href="/wandern" className={`block px-md py-sm font-body-md text-sm transition-colors border-t border-surface-container-high ${current === "wandern" ? "text-primary" : "text-on-surface hover:text-primary"}`} onClick={close}>Wandern</Link>
          </div>

          <Link href="/aktuelles" className={linkClass(current === "aktuelles")} onClick={close}>Aktuelles</Link>
          <Link href="/termine" className={linkClass(current === "termine")} onClick={close}>Termine</Link>
          <Link href="/vorstand" className={linkClass(current === "vorstand")} onClick={close}>Vorstand</Link>
          <Link href="/freizeiten" className={linkClass(current === "freizeiten")} onClick={close}>Freizeiten</Link>
          <Link href="/stammtisch" className={linkClass(current === "stammtisch")} onClick={close}>Stammtisch</Link>
          <Link href="/galerie" className={linkClass(current === "galerie")} onClick={close}>Galerie</Link>
          <Link href="/impressum" className={linkClass(current === "impressum")} onClick={close}>Impressum</Link>

          <div className="p-md space-y-xs">
            <Link href="/kontakt" onClick={close} className={`block w-full border font-label-bold text-label-bold py-sm rounded transition-colors text-xs text-center ${current === "kontakt" ? "border-primary text-primary bg-primary/5" : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"}`}>
              Kontakt
            </Link>
            <Link href="/mitglied-werden" onClick={close} className="block w-full bg-primary text-on-primary font-label-bold text-label-bold py-sm rounded hover:opacity-90 transition-opacity text-xs text-center">
              Mitglied werden
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
