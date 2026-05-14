import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Wandern" };

const highlights = [
  { icon: "hiking",     title: "Gruppentouren",    text: "Organisierte Wanderungen in der Umgebung — vom Sauerland bis ins Ruhrtal." },
  { icon: "forest",     title: "Natur erleben",    text: "Abseits des Alltags gemeinsam draußen sein — Wandern verbindet Bewegung mit Natur." },
  { icon: "calendar_month", title: "Saisonal",     text: "Wandertermine werden saisonal geplant und im Infobrief des Vereins angekündigt." },
  { icon: "groups",     title: "Gemeinschaft",     text: "Für alle Mitglieder offen — keine besonderen Vorkenntnisse oder Ausrüstung nötig." },
];

export default function WandernPage() {
  return (
    <>
      <Navbar current="wandern" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "340px" }}>
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80"
            alt="Wandern in der Natur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-surface-container text-on-surface font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Sportl. Aktivität
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Wandern</h1>
            <p className="font-body-lg text-white/80">
              Gemeinsam durch Wald und Natur — saisonale Wandertouren für alle Mitglieder des SC Unna e.V.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section>
          <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Das Angebot</p>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md">Wandern im SC Unna</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {highlights.map((h) => (
              <div key={h.title} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <span className="material-symbols-outlined text-3xl text-primary mb-sm block">{h.icon}</span>
                <h3 className="font-label-bold uppercase text-on-background mb-xs">{h.title}</h3>
                <p className="text-sm text-secondary font-body-md leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tradition: Weihnachtsbaumwanderung */}
        <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
          <div className="flex items-start gap-md">
            <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">park</span>
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Vereinstradition</p>
              <h3 className="font-headline-md text-on-background mb-xs">Weihnachtsbaumwanderung</h3>
              <p className="text-sm text-secondary font-body-md leading-relaxed">
                Die Weihnachtsbaumwanderung gehört zur guten Tradition des SC Unna — eine gesellige Tour kurz vor den Feiertagen. Termin und Details werden rechtzeitig im Infobrief bekanntgegeben.
              </p>
            </div>
          </div>
        </section>

        {/* Platzhalter */}
        <section className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-sm">
          <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 mt-0.5">info</span>
          <div>
            <p className="font-label-bold text-on-surface text-sm mb-xs">Ansprechpartner und Termine folgen</p>
            <p className="text-sm text-secondary font-body-md leading-relaxed">
              Konkrete Tourentermine und Anmeldemodalitäten werden hier ergänzt. Aktuelle Ankündigungen findest du im{" "}
              <a href="/aktuelles" className="text-primary hover:underline font-label-bold">Bereich Aktuelles</a>{" "}
              und im Infobrief des Vereins.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
