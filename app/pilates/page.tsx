import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Pilates" };

export default function PilatesPage() {
  return (
    <>
      <Navbar current="pilates" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "340px" }}>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
            alt="Pilates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-surface-container text-on-surface font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Sportl. Aktivität
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Pilates</h1>
            <p className="font-body-lg text-white/80">
              Kräftigung, Körperkontrolle und Beweglichkeit — jeden Freitag in der Sporthalle Falkschule.
            </p>
          </div>
        </section>

        {/* Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
          <div className="md:col-span-2 space-y-md">
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Über das Angebot</p>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-sm">Pilates im SC Unna</h2>
              <div className="space-y-sm font-body-lg text-secondary leading-relaxed">
                <p>
                  Pilates ist eine ganzheitliche Trainingsmethode, die Körpermitte, Haltung und Beweglichkeit stärkt — schonend und effektiv für alle Altersgruppen.
                </p>
                <p>
                  Die Stunde findet im Rahmen von „Sport am Freitag" statt und wird von Katja Schröer geleitet. Keine Vorkenntnisse erforderlich — Sportmatte mitbringen.
                </p>
              </div>
            </div>

            {/* Zeit & Ort */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">calendar_today</span>
                <div>
                  <p className="font-label-bold text-on-background uppercase">Freitag</p>
                  <p className="text-sm font-body-md text-secondary">18:30 – 19:30 Uhr</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">location_on</span>
                <div>
                  <p className="font-label-bold text-on-background">Sporthalle Falkschule</p>
                  <p className="text-sm font-body-md text-secondary">Falkstraße 5, 59423 Unna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leitung */}
          <div className="space-y-gutter">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-md">Kursleitung</p>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-extrabold text-primary text-lg">KS</span>
                </div>
                <div>
                  <p className="font-extrabold text-on-background">Katja Schröer</p>
                  <p className="text-xs text-secondary">Pilates-Trainerin</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-sm">
              <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">info</span>
              <p className="text-sm text-secondary font-body-md leading-relaxed">
                Weitere Details (Ferienplan, Anmeldung) im{" "}
                <a href="/aktuelles" className="text-primary hover:underline font-label-bold">Bereich Aktuelles</a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
