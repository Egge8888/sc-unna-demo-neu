import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Radfahren" };

const highlights = [
  { icon: "directions_bike", title: "Gruppentouren", text: "Geführte Radtouren in der Region rund um Unna — in der Gruppe macht's mehr Spaß." },
  { icon: "wb_sunny",        title: "Sommerangebot", text: "Das Radangebot konzentriert sich auf die wärmeren Monate — von Frühjahr bis Herbst." },
  { icon: "route",           title: "Verschiedene Routen", text: "Flache Strecken im Ruhrtal, hügelige Touren ins Sauerland — für jedes Niveau etwas dabei." },
  { icon: "groups",          title: "Für alle",     text: "Keine Leistungsanforderungen — im Vordergrund stehen Gemeinschaft und Naturerleben." },
];

export default function RadfahrenPage() {
  return (
    <>
      <Navbar current="radfahren" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "340px" }}>
          <img
            src="https://images.unsplash.com/photo-1778655726656-299707575200?auto=format&fit=crop&w=1600&q=80"
            alt="Radfahren"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-surface-container text-on-surface font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Sportl. Aktivität
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Radfahren</h1>
            <p className="font-body-lg text-white/80">
              Gemeinsam auf Rädern durch die Region — saisonale Gruppentouren für Mitglieder des SC Unna e.V.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section>
          <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Das Angebot</p>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md">Radfahren im SC Unna</h2>
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

        {/* Platzhalter */}
        <section className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-sm">
          <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 mt-0.5">info</span>
          <div>
            <p className="font-label-bold text-on-surface text-sm mb-xs">Termine und Details folgen</p>
            <p className="text-sm text-secondary font-body-md leading-relaxed">
              Konkrete Touren-Termine, Treffpunkte und Ansprechpartner werden hier ergänzt. Aktuelle Ankündigungen findest du im{" "}
              <a href="/aktuelles" className="text-primary hover:underline font-label-bold">Bereich Aktuelles</a>{" "}
              und im jeweiligen Infobrief des Vereins.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
