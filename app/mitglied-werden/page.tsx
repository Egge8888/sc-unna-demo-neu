import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MitgliedForm from "@/components/MitgliedForm";

export const metadata: Metadata = {
  title: "Mitglied werden – Sport Club Unna e.V.",
  description: "Online-Mitgliedsantrag für den Sport Club Unna e.V. — Ski, Badminton, Radfahren, Yoga, Pilates, Wassergymnastik, Wandern.",
};

export default function MitgliedWerdenPage() {
  return (
    <>
      <Navbar current="" />

      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="bg-primary text-on-primary rounded-xl px-lg py-lg shadow-ambient relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[220px]">group_add</span>
          </div>
          <div className="relative z-10">
            <span className="bg-on-primary text-primary font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-sm">
              Mitmachen
            </span>
            <h1 className="font-display-xl text-display-xl leading-tight mb-sm">Mitglied werden</h1>
            <p className="font-body-lg opacity-90 max-w-2xl">
              Werde Teil des Sport Club Unna e.V. — oder melde dich direkt für eine Ski-, Oster- oder Sommerfreizeit an. Beides geht auch zusammen.
            </p>
            <div className="flex flex-wrap items-center gap-md mt-md">
              {[
                { icon: "downhill_skiing", text: "Ski" },
                { icon: "sports_tennis",   text: "Badminton" },
                { icon: "directions_bike", text: "Radfahren" },
                { icon: "self_improvement",text: "Yoga" },
                { icon: "fitness_center",  text: "Pilates" },
                { icon: "pool",            text: "Wassergymnastik" },
                { icon: "hiking",          text: "Wandern" },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-xs text-sm opacity-80">
                  <span className="material-symbols-outlined text-base">{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Prozess-Hinweis */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {[
            { icon: "edit_document",   title: "Formular ausfüllen",   text: "Mitgliedschaft, Freizeit oder beides — alles in einem Schritt." },
            { icon: "mail",            title: "Bestätigung erhalten",  text: "Wir prüfen deinen Antrag und melden uns per E-Mail." },
            { icon: "sports",          title: "Direkt loslegen",       text: "Nach Bestätigung kannst du sofort an allen Angeboten teilnehmen." },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
              <div>
                <p className="font-label-bold text-on-background text-sm">{item.title}</p>
                <p className="text-xs text-secondary mt-xs leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Formular — zentriert, max-w-3xl */}
        <section className="max-w-3xl mx-auto w-full">
          <MitgliedForm />
        </section>

        {/* PDF-Alternative */}
        <section className="max-w-3xl mx-auto w-full">
          <div className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-md">
            <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">picture_as_pdf</span>
            <div>
              <p className="font-label-bold text-on-surface text-sm mb-xs">Lieber per Post?</p>
              <p className="text-sm text-secondary leading-relaxed">
                Du kannst die Beitrittserklärung als PDF{" "}
                <a href="/dokumente/beitrittserklaerung-2026.pdf" target="_blank" rel="noopener"
                  className="text-primary hover:underline font-label-bold">herunterladen</a>,
                ausdrucken und an{" "}
                <span className="font-label-bold text-on-background">Sport Club Unna e.V., c/o Anne Hentrich, Stralsunder Str. 63, 59427 Unna</span>{" "}
                schicken.
                Fragen? <Link href="/vorstand" className="text-primary hover:underline font-label-bold">Vorstand kontaktieren</Link>.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
