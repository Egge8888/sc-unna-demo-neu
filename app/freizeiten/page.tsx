import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Freizeiten" };

type Freizeit = {
  title: string;
  dates: string;
  location: string;
  type: "Skifreizeit" | "Sommerfreizeit" | "Osterfreizeit";
  icon: string;
  description: string;
  past?: boolean;
  ausschreibung?: string;
  anmeldung?: string;
};

const freizeiten: Freizeit[] = [
  {
    title: "Sommerfreizeit Zell am See",
    dates: "28. Juni – 5. Juli 2026",
    location: "Zell am See, Österreich",
    type: "Sommerfreizeit",
    icon: "wb_sunny",
    description: "Sportfreizeit am Zeller See — Wandern, Radfahren, Baden und Ausflüge in die Alpenregion. Eigene Anreise.",
    ausschreibung: "/dokumente/sommerfreizeit-zell-2026-ausschreibung.pdf",
    anmeldung: "/dokumente/sommerfreizeit-zell-2026-anmeldung.pdf",
  },
  {
    title: "Skifreizeit Zell am See 2027",
    dates: "9. – 16. Januar 2027",
    location: "Zell am See / Kaprun, Österreich",
    type: "Skifreizeit",
    icon: "downhill_skiing",
    description: "Familien- und Jedermann-Skisportfreizeit. Eigene Anreise. Skigebiet Schmittenhöhe & Kitzsteinhorn.",
    ausschreibung: "/dokumente/skifreizeit-zell-2027-ausschreibung.pdf",
    anmeldung: "/dokumente/skifreizeit-zell-2027-anmeldung.pdf",
  },
  {
    title: "Bus-Skifreizeit St. Ulrich 2027",
    dates: "16. – 23. Januar 2027",
    location: "St. Ulrich im Grödnertal, Südtirol",
    type: "Skifreizeit",
    icon: "directions_bus",
    description: "Organisierte Busfahrt — Zugang zum Dolomiti Superski mit über 1.200 km Pistenkilometern.",
    ausschreibung: "/dokumente/skifreizeit-st-ulrich-2027-ausschreibung.pdf",
    anmeldung: "/dokumente/skifreizeit-st-ulrich-2027-anmeldung.pdf",
  },
  {
    title: "Oster-Skifreizeit Zell am See 2027",
    dates: "April 2027",
    location: "Zell am See / Kaprun, Österreich",
    type: "Osterfreizeit",
    icon: "egg",
    description: "Osterfreizeit für die ganze Familie. Eigene Anreise. Genaue Daten folgen.",
    ausschreibung: "/dokumente/osterfreizeit-zell-2027-ausschreibung.pdf",
    anmeldung: "/dokumente/osterfreizeit-zell-2027-anmeldung.pdf",
  },
  {
    title: "Oster-Skifreizeit Zell am See 2028",
    dates: "April 2028",
    location: "Zell am See / Kaprun, Österreich",
    type: "Osterfreizeit",
    icon: "egg",
    description: "Vorausplanung für Ostern 2028. Genaue Daten folgen.",
    ausschreibung: "/dokumente/osterfreizeit-zell-2028-ausschreibung.pdf",
    anmeldung: "/dokumente/osterfreizeit-zell-2028-anmeldung.pdf",
  },
  {
    title: "Oster-Skifreizeit Zell am See 2026",
    dates: "28. März – 4. April 2026",
    location: "Zell am See / Kaprun, Österreich",
    type: "Osterfreizeit",
    icon: "egg",
    description: "Osterfreizeit 2026 — bereits stattgefunden.",
    past: true,
  },
  {
    title: "Skifreizeit Zell am See 2026",
    dates: "3. – 10. Januar 2026",
    location: "Zell am See / Kaprun, Österreich",
    type: "Skifreizeit",
    icon: "downhill_skiing",
    description: "Familien- und Jedermann-Skisportfreizeit 2026 — bereits stattgefunden.",
    past: true,
  },
  {
    title: "Bus-Skifreizeit St. Ulrich 2026",
    dates: "10. – 17. Januar 2026",
    location: "St. Ulrich im Grödnertal, Südtirol",
    type: "Skifreizeit",
    icon: "directions_bus",
    description: "Bus-Skifreizeit 2026 — bereits stattgefunden.",
    past: true,
  },
];

const upcoming = freizeiten.filter((f) => !f.past);
const past = freizeiten.filter((f) => f.past);

const TYPE_COLOR: Record<Freizeit["type"], string> = {
  Skifreizeit:   "text-blue-700 bg-blue-50",
  Sommerfreizeit:"text-amber-700 bg-amber-50",
  Osterfreizeit: "text-green-700 bg-green-50",
};

export default function FreizeitenPage() {
  return (
    <>
      <Navbar current="freizeiten" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "320px" }}>
          <img
            src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=1600&q=80"
            alt="Alpenlandschaft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Freizeiten</h1>
            <p className="font-body-lg text-white/80">
              Ski-, Sommer- und Osterfreizeiten des SC Unna e.V. — gemeinsam unterwegs in den schönsten Regionen Europas.
            </p>
          </div>
        </section>

        {/* Anstehende Freizeiten */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>luggage</span>
            Kommende Freizeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {upcoming.map((f) => (
              <div key={f.title} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient shadow-ambient-hover flex flex-col">
                <div className="bg-primary/5 border-b border-surface-container-highest px-md py-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">{f.icon}</span>
                  <span className={`text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${TYPE_COLOR[f.type]}`}>{f.type}</span>
                </div>
                <div className="p-md flex flex-col flex-1">
                  <h3 className="font-extrabold text-on-background text-base leading-snug mb-xs">{f.title}</h3>
                  <div className="flex items-center gap-xs text-secondary text-xs mb-xs">
                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                    <span>{f.dates}</span>
                  </div>
                  <div className="flex items-center gap-xs text-secondary text-xs mb-sm">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span>{f.location}</span>
                  </div>
                  <p className="text-sm text-secondary font-body-md leading-relaxed flex-1">{f.description}</p>
                  {(f.ausschreibung || f.anmeldung) && (
                    <div className="mt-md pt-md border-t border-surface-container-high flex flex-wrap gap-sm">
                      {f.ausschreibung && (
                        <a href={f.ausschreibung} target="_blank" rel="noopener"
                          className="inline-flex items-center gap-xs font-label-bold text-xs uppercase text-primary hover:underline tracking-wider">
                          <span className="material-symbols-outlined text-sm">picture_as_pdf</span>Ausschreibung
                        </a>
                      )}
                      {f.anmeldung && (
                        <a href={f.anmeldung} target="_blank" rel="noopener"
                          className="inline-flex items-center gap-xs bg-primary text-on-primary font-label-bold text-xs uppercase px-3 py-1.5 rounded hover:opacity-90 transition-opacity">
                          <span className="material-symbols-outlined text-sm">download</span>Anmeldung
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
          <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">contact_support</span>
          <div>
            <p className="font-label-bold text-on-surface mb-xs">Fragen zu Freizeiten?</p>
            <p className="text-sm text-secondary font-body-md leading-relaxed">
              Für alle Fragen rund um Ski- und Sommerfreizeiten wende dich an Abteilungsleiter Rainer Nordhaus:{" "}
              <a href="mailto:rainer.nordhaus@scunna.de" className="text-primary hover:underline font-label-bold">
                rainer.nordhaus@scunna.de
              </a>{" "}
              · 0171 7719531
            </p>
          </div>
        </section>

        {/* Vergangene Freizeiten */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary">history</span>
            Vergangene Freizeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter opacity-60">
            {past.map((f) => (
              <div key={f.title} className="bg-surface-container-low border border-surface-container-highest rounded-xl p-md">
                <span className="material-symbols-outlined text-secondary text-2xl mb-sm block">{f.icon}</span>
                <p className={`text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-xs bg-surface-container text-secondary`}>{f.type}</p>
                <h3 className="font-label-bold text-on-background text-sm">{f.title}</h3>
                <p className="text-xs text-secondary">{f.dates}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
