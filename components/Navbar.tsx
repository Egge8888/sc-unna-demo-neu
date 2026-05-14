import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

type NavPage = "home" | "aktuelles" | "termine" | "freizeiten" | "galerie" | "ski" | "badminton" | "radfahren" | "yoga" | "pilates" | "wassergymnastik" | "wandern" | "vorstand" | "stammtisch" | "impressum" | "datenschutz" | "";

export default function Navbar({ current = "" }: { current?: NavPage }) {
  const link = (page: NavPage, always = false) =>
    always || current === page
      ? "text-primary font-label-bold text-label-bold uppercase transition-colors whitespace-nowrap"
      : "text-secondary font-label-bold text-label-bold uppercase hover:text-primary transition-colors whitespace-nowrap";

  return (
    <nav className="bg-surface shadow-sm sticky top-0 z-50 w-full relative">
      <div className="flex justify-between items-center w-full px-margin py-3 max-w-7xl mx-auto gap-4">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/sc-unna-logo.jpg"
            alt="SC Unna"
            width={40}
            height={40}
            className="rounded-full border border-surface-container-highest"
          />
          <span className="font-extrabold text-primary tracking-tight text-lg hidden xl:block">
            Sport Club Unna
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-5 text-xs">
          <div className="nav-dropdown relative">
            <button
              className={`${["badminton","ski","radfahren","yoga","pilates","wassergymnastik","wandern"].includes(current) ? "text-primary" : "text-secondary hover:text-primary"} font-label-bold text-label-bold uppercase transition-colors flex items-center gap-1 py-2 whitespace-nowrap`}
            >
              Sportl. Aktivitäten
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="nav-dropdown-menu w-52 bg-surface-container-lowest border border-surface-container-highest rounded-b-lg shadow-ambient">
              <Link
                href="/badminton"
                className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "badminton" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`}
                aria-current={current === "badminton" ? "page" : undefined}
              >
                Badminton
              </Link>
              <Link
                href="/ski"
                className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "ski" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`}
                aria-current={current === "ski" ? "page" : undefined}
              >
                Ski / Wintersport
              </Link>
              <Link href="/radfahren" className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "radfahren" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`} aria-current={current === "radfahren" ? "page" : undefined}>Radfahren</Link>
              <Link href="/yoga" className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "yoga" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`} aria-current={current === "yoga" ? "page" : undefined}>Yoga</Link>
              <Link href="/pilates" className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "pilates" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`} aria-current={current === "pilates" ? "page" : undefined}>Pilates</Link>
              <Link href="/wassergymnastik" className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors border-b border-surface-variant ${current === "wassergymnastik" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`} aria-current={current === "wassergymnastik" ? "page" : undefined}>Wassergymnastik</Link>
              <Link href="/wandern" className={`block px-4 py-2.5 font-label-bold uppercase text-xs transition-colors ${current === "wandern" ? "text-primary bg-surface-container-low" : "text-on-surface hover:text-primary hover:bg-surface-container-low"}`} aria-current={current === "wandern" ? "page" : undefined}>Wandern</Link>
            </div>
          </div>

          <Link className={link("aktuelles")} href="/aktuelles" aria-current={current === "aktuelles" ? "page" : undefined}>Aktuelles</Link>
          <Link className={link("termine")} href="/termine" aria-current={current === "termine" ? "page" : undefined}>Termine</Link>
          <Link className={link("vorstand")} href="/vorstand" aria-current={current === "vorstand" ? "page" : undefined}>Vorstand</Link>
          <Link className={link("freizeiten")} href="/freizeiten" aria-current={current === "freizeiten" ? "page" : undefined}>Freizeiten</Link>
          <Link className={link("stammtisch")} href="/stammtisch" aria-current={current === "stammtisch" ? "page" : undefined}>Stammtisch</Link>
          <Link className={link("galerie")} href="/galerie" aria-current={current === "galerie" ? "page" : undefined}>Galerie</Link>
          <Link className={link("impressum")} href="/impressum">Impressum</Link>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="bg-primary text-on-primary font-label-bold text-label-bold py-2 px-5 rounded hover:opacity-90 transition-opacity hidden md:block whitespace-nowrap text-xs">
            Mitglied werden
          </button>
          <MobileMenu current={current} />
        </div>
      </div>
    </nav>
  );
}
