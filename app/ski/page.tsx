import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ski & Wintersport",
};

const freizeiten = [
  {
    title: "Sommerfreizeit Zell am See",
    dates: "28. Juni – 5. Juli 2026",
    location: "Zell am See, Österreich",
    type: "Sommerfreizeit",
    icon: "wb_sunny",
    description:
      "Sportfreizeit am Zeller See mit Wandern, Radfahren, Baden und Ausflügen in die Alpenregion.",
    prospektUrl: "/dokumente/skifreizeit-zell-2027-ausschreibung.pdf",
  },
  {
    title: "Skifreizeit Zell am See",
    dates: "9. – 16. Januar 2027",
    location: "Zell am See / Kaprun, Österreich",
    type: "Skifreizeit",
    icon: "downhill_skiing",
    description:
      "Eigene Anreise. Skigebiet Schmittenhöhe & Kitzsteinhorn mit über 130 km präparierten Pisten.",
    prospektUrl: "/dokumente/skifreizeit-zell-2027-ausschreibung.pdf",
  },
  {
    title: "Bus-Skifreizeit St. Ulrich",
    dates: "16. – 23. Januar 2027",
    location: "St. Ulrich im Grödnertal, Südtirol",
    type: "Skifreizeit",
    icon: "directions_bus",
    description:
      "Organisierte Busanreise. Zugang zum Dolomiti Superski mit über 1.200 km Pistenkilometern.",
    prospektUrl: "/dokumente/skifreizeit-st-ulrich-2027-ausschreibung.pdf",
  },
];

const aktivitaeten = [
  {
    icon: "downhill_skiing",
    title: "Skifreizeiten",
    text: "Jährlich organisiert die Abteilung Gruppenreisen in die Alpen – in renommierte Skigebiete in Österreich und Südtirol.",
  },
  {
    icon: "wb_sunny",
    title: "Sommerfreizeiten",
    text: "Neben dem Wintersport lädt der Verein zu Sommerreisen ein – zuletzt ins Salzburger Land rund um Zell am See.",
  },
  {
    icon: "landscape",
    title: "Tagesausflüge",
    text: "Gelegentliche Tagesfahrten z.B. zum Skifahren ins Sauerland (Winterberg). Details im jeweils aktuellen Infobrief.",
  },
  {
    icon: "groups",
    title: "Gemeinschaft",
    text: "Gesellige Vereinsabende, Doppelkopf-Turniere und das Osterfeuer gehören zur Tradition der Ski-Abteilung.",
  },
];

export default function SkiPage() {
  return (
    <>
      <Navbar current="ski" />

      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "380px" }}>
          <img
            src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=1600&q=80"
            alt="Skifahren in den Alpen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-primary text-on-primary font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Abteilung
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">
              Ski &amp; Wintersport
            </h1>
            <p className="font-body-lg text-white/80">
              Seit 1963 organisiert die Ski-Abteilung des SC Unna e.V. unvergessliche Freizeiten und verbindet Sportbegeisterung mit Gemeinschaft.
            </p>
          </div>
        </section>

        {/* Über die Abteilung */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
          <div className="md:col-span-2 space-y-md">
            <div>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Über die Abteilung</p>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-sm">
                Tradition seit 1963
              </h2>
              <div className="space-y-sm font-body-lg text-secondary leading-relaxed">
                <p>
                  Die Ski-Abteilung des Sport Club Unna e.V. blickt auf eine über 60-jährige Geschichte zurück. Gegründet 1963 als eigenständiger Ski-Club Unna, hat sie sich zu einer festen Größe im Vereinsleben entwickelt.
                </p>
                <p>
                  Mit dem Zusammenschluss von Ski-Club Unna und Badminton-Sport-Club Unna zum Sport Club Unna e.V. am 1. April 2026 ist die Ski-Abteilung Teil eines modernen Mehrspartenvereins geworden – mit gewachsener Gemeinschaft und noch mehr sportlicher Vielfalt.
                </p>
                <p>
                  Herzstück der Abteilung sind die jährlichen Skifreizeiten in die Alpen sowie Sommerreisen für die ganze Familie. Wer mitmachen möchte, meldet sich beim Abteilungsleiter.
                </p>
              </div>
            </div>
          </div>

          {/* Ansprechpartner */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient">
            <div className="h-48 relative bg-surface-container-high">
              <Image
                src="/vorstand/rainer-nordhaus.jpg"
                alt="Rainer Nordhaus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-md">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-1">
                Abteilungsleiter Ski
              </p>
              <h3 className="font-extrabold text-on-background text-base leading-tight mb-sm">
                Rainer Nordhaus
              </h3>
              <div className="space-y-1">
                <div className="text-xs text-secondary flex items-start gap-1">
                  <span className="material-symbols-outlined text-xs mt-0.5">location_on</span>
                  <span>Augustin-Wibbelt-Str. 27, 59423 Unna</span>
                </div>
                <div className="text-xs text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">smartphone</span>
                  <span>0171 7719531</span>
                </div>
                <a
                  href="mailto:rainer.nordhaus@scunna.de"
                  className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1 mt-1"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span className="break-all">rainer.nordhaus@scunna.de</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Aktivitäten */}
        <section>
          <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Was wir machen</p>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md">Aktivitäten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {aktivitaeten.map((a) => (
              <div
                key={a.title}
                className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient"
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-sm block">
                  {a.icon}
                </span>
                <h3 className="font-label-bold uppercase text-on-background mb-xs">{a.title}</h3>
                <p className="text-sm text-secondary font-body-md leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Freizeiten */}
        <section>
          <div className="flex items-start justify-between flex-wrap gap-sm mb-md">
            <div>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Kommende Reisen</p>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Freizeiten 2026 / 2027</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {freizeiten.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient shadow-ambient-hover flex flex-col"
              >
                <div className="bg-primary/5 border-b border-surface-container-highest px-md py-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">{f.icon}</span>
                  <span className="text-[10px] font-label-bold uppercase tracking-wider text-primary">{f.type}</span>
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
                  <a
                    href={f.prospektUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-md inline-flex items-center gap-xs font-label-bold text-xs uppercase text-primary hover:underline tracking-wider"
                  >
                    <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                    Ausschreibung / Anmeldung
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platzhalter: weitere Infos */}
        <section className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md">
          <div className="flex items-start gap-sm">
            <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 mt-0.5">info</span>
            <div>
              <p className="font-label-bold text-on-surface text-sm mb-xs">Weitere Informationen folgen</p>
              <p className="text-sm text-secondary font-body-md leading-relaxed">
                Infos zu Mitgliedsbeiträgen, Tagesfahrten und weiteren Vereinsaktivitäten der Ski-Abteilung werden hier ergänzt. Aktuell findest du alle Neuigkeiten im Bereich{" "}
                <a href="/aktuelles" className="text-primary hover:underline font-label-bold">Aktuelles</a>{" "}
                oder im Infobrief des Vereins.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
