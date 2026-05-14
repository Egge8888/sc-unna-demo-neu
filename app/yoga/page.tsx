import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Yoga" };

const zeiten = [
  { tag: "Donnerstag", uhrzeit: "18:00 – 19:00 Uhr", hinweis: "außer in den Schulferien" },
];

export default function YogaPage() {
  return (
    <>
      <Navbar current="yoga" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "340px" }}>
          <img
            src="https://www.scunna.de/wp-content/uploads/2023/11/YOGA-1.jpg"
            alt="Yoga beim SC Unna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-surface-container text-on-surface font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Sportl. Aktivität
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Yoga</h1>
            <p className="font-body-lg text-white/80">
              Geführte Yogastunden für alle Levels — jeden Donnerstag in der Dreifachsporthalle des PWG in Unna.
            </p>
          </div>
        </section>

        {/* Info + Zeiten */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
          <div className="md:col-span-2 space-y-md">
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Über das Angebot</p>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-sm">Yoga im SC Unna</h2>
              <div className="space-y-sm font-body-lg text-secondary leading-relaxed">
                <p>
                  Yoga findet jeden Donnerstag (außer in den Schulferien) um 18:00 Uhr in der 3-fach Halle des PWG statt. Das Angebot richtet sich an alle Mitglieder — egal ob Anfänger oder Fortgeschrittene.
                </p>
                <p>
                  Geleitet wird die Stunde von unserer erfahrenen Trainerin Katrin Koning. Bitte Sportmatte und bequeme Kleidung mitbringen.
                </p>
              </div>
            </div>

            {/* Trainingszeiten */}
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-sm">Trainingszeiten</p>
              <div className="space-y-xs">
                {zeiten.map((z) => (
                  <div key={z.tag} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md flex items-center gap-md shadow-ambient">
                    <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">calendar_today</span>
                    <div>
                      <p className="font-label-bold text-on-background uppercase">{z.tag}</p>
                      <p className="text-sm font-body-md text-secondary">{z.uhrzeit}</p>
                      <p className="text-xs text-secondary italic mt-0.5">{z.hinweis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ort */}
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-sm">Trainingsort</p>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">location_on</span>
                <div>
                  <p className="font-label-bold text-on-background">3-fach Halle PWG</p>
                  <p className="text-sm text-secondary font-body-md">Pestalozzi-Wilhelmi-Gymnasium (PWG), Unna</p>
                  <p className="text-xs text-secondary italic mt-1">Genaue Adresse auf Anfrage beim Vereinsbüro.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trainerin */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
            <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-sm">Trainerin</p>
            <div className="flex items-center gap-sm mb-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-extrabold text-primary text-lg">KK</span>
              </div>
              <div>
                <p className="font-extrabold text-on-background">Katrin Koning</p>
                <p className="text-xs text-secondary">Yoga-Trainerin</p>
              </div>
            </div>
            <div className="border-t border-surface-container-high pt-md">
              <p className="font-label-bold text-[10px] uppercase tracking-wider text-primary mb-xs">Ansprechpartnerin</p>
              <p className="font-extrabold text-on-background text-sm">Anne Hentrich</p>
              <p className="text-xs text-secondary mb-sm">Vorstand Sport Club Unna e.V.</p>
              <div className="flex flex-wrap gap-sm">
                <a href="tel:+4915224822743" className="inline-flex items-center gap-xs text-primary text-xs font-label-bold uppercase hover:underline">
                  <span className="material-symbols-outlined text-sm">phone</span>
                  0152 / 24822743
                </a>
                <a href="mailto:anne.hentrich@scunna.de" className="inline-flex items-center gap-xs text-primary text-xs font-label-bold uppercase hover:underline">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  anne.hentrich@scunna.de
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platzhalter */}
        <section className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-sm">
          <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 mt-0.5">info</span>
          <div>
            <p className="font-label-bold text-on-surface text-sm mb-xs">Aktuelle Infos</p>
            <p className="text-sm text-secondary font-body-md leading-relaxed">
              Aktuelle Änderungen (z.B. Ferienplan, kurzfristige Ausfälle) werden im{" "}
              <a href="/aktuelles" className="text-primary hover:underline font-label-bold">Bereich Aktuelles</a>{" "}
              bekannt gegeben.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
