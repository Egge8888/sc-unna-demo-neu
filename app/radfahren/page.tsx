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
            src="/radfahren-hero.png"
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

        {/* Tourentermine */}
        <section className="space-y-sm">
          <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-md">Aktuelle Termine 2026</p>

          {/* Samstags-Radeln */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex gap-md items-start">
            <div className="bg-surface-container-highest rounded-lg p-sm text-center min-w-[56px] flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-xl leading-none block">repeat</span>
              <span className="block text-secondary text-xs font-label-bold uppercase leading-tight mt-0.5">Sa.</span>
              <span className="block text-secondary text-[10px]">laufend</span>
            </div>
            <div>
              <h3 className="font-extrabold text-on-background text-base leading-snug mb-xs">Samstags-Radeln</h3>
              <p className="text-sm text-secondary font-body-md">Meistens 13:00 Uhr · ca. 20–30 km · Treffpunkt wird über WhatsApp bekannt gegeben</p>
              <p className="text-sm text-secondary font-body-md mt-xs flex items-center gap-xs">
                <span className="material-symbols-outlined text-xs">chat</span>
                Aufnahme in die WhatsApp-Gruppe: Anne oder Hella kontaktieren
              </p>
            </div>
          </div>

          {/* Freitags-Radeln Sommerferien */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex gap-md items-start">
            <div className="bg-surface-container-highest rounded-lg p-sm text-center min-w-[56px] flex-shrink-0">
              <span className="block font-extrabold text-primary text-lg leading-none">Fr.</span>
              <span className="block text-secondary text-xs font-label-bold uppercase">2026</span>
              <span className="block text-secondary text-[10px]">Ferien</span>
            </div>
            <div>
              <h3 className="font-extrabold text-on-background text-base leading-snug mb-xs">Freitags-Radeln in den Sommerferien</h3>
              <p className="text-sm text-secondary font-body-md">18:30 Uhr · Bushaltestelle vor dem Rathaus Unna</p>
              <p className="text-sm text-secondary font-body-md mt-xs">
                Termine: 24.7. · 31.7. · 7.8. · 14.8. · 21.8. · 28.8.&nbsp;2026
              </p>
              <p className="text-sm text-secondary font-body-md mt-xs flex items-center gap-xs">
                <span className="material-symbols-outlined text-xs">person</span>
                Einfach erscheinen oder bei Anne Hentrich melden
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
