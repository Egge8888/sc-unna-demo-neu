import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MitgliedForm from "@/components/MitgliedForm";

export const metadata: Metadata = {
  title: "Mitglied werden – Sport Club Unna e.V.",
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
          <div className="relative z-10 max-w-2xl">
            <span className="bg-on-primary text-primary font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-sm">
              Mitmachen
            </span>
            <h1 className="font-display-xl text-display-xl leading-tight mb-sm">
              Mitglied werden
            </h1>
            <p className="font-body-lg opacity-90">
              Werde Teil des Sport Club Unna e.V. Fülle das Formular aus — wir melden uns direkt bei dir. Ski, Badminton, Radfahren, Yoga, Pilates, Wassergymnastik und Wandern warten auf dich.
            </p>
          </div>
        </section>

        {/* Infostreifen */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {[
            { icon: "edit_document", title: "Formular ausfüllen", text: "Alle Felder online in wenigen Minuten." },
            { icon: "mail", title: "Wir melden uns", text: "Nach Eingang erhältst du eine Bestätigung per E-Mail." },
            { icon: "sports", title: "Sofort dabei", text: "Ab Bestätigung der Mitgliedschaft kannst du direkt mitmachen." },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
              <div>
                <p className="font-label-bold text-on-background text-sm">{item.title}</p>
                <p className="text-xs text-secondary mt-xs">{item.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Formular */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">

          {/* Hauptformular */}
          <div className="lg:col-span-2">
            <MitgliedForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-gutter lg:sticky lg:top-[80px]">

            {/* Beitrag */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="font-label-bold text-[10px] uppercase tracking-wider text-primary mb-sm">Jahresbeitrag</p>
              <div className="space-y-sm">
                {[
                  { label: "Erwachsene", value: "auf Anfrage" },
                  { label: "Jugendliche (bis 18)", value: "auf Anfrage" },
                  { label: "Familien", value: "auf Anfrage" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center justify-between py-xs border-b border-surface-container-highest last:border-0">
                    <span className="text-sm text-secondary">{b.label}</span>
                    <span className="font-label-bold text-on-background text-sm">{b.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-secondary mt-sm leading-relaxed">
                Genaue Beitragshöhe auf Anfrage beim Vereinsbüro.
              </p>
            </div>

            {/* PDF-Download */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="font-label-bold text-[10px] uppercase tracking-wider text-primary mb-sm">Alternativ: PDF-Formular</p>
              <p className="text-sm text-secondary mb-sm leading-relaxed">
                Du kannst die Beitrittserklärung auch als PDF herunterladen, ausdrucken und per Post oder persönlich abgeben.
              </p>
              <a
                href="/dokumente/beitrittserklaerung-2026.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-xs text-primary font-label-bold text-xs uppercase hover:underline tracking-wider"
              >
                <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                Beitrittserklärung 2026 (PDF)
              </a>
            </div>

            {/* Kontakt */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="font-label-bold text-[10px] uppercase tracking-wider text-primary mb-sm">Fragen?</p>
              <p className="text-sm text-secondary mb-sm leading-relaxed">
                Anne Hentrich steht dir für alle Fragen rund um die Mitgliedschaft zur Verfügung.
              </p>
              <div className="space-y-xs">
                <a href="tel:+4915224822743" className="inline-flex items-center gap-xs text-primary text-xs font-label-bold uppercase hover:underline">
                  <span className="material-symbols-outlined text-sm">phone</span>
                  0152 / 24822743
                </a>
                <br />
                <a href="mailto:anne.hentrich@scunna.de" className="inline-flex items-center gap-xs text-primary text-xs font-label-bold uppercase hover:underline">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  anne.hentrich@scunna.de
                </a>
              </div>
            </div>

            {/* Sportangebot-Link */}
            <div className="bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-md flex items-start gap-sm">
              <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">info</span>
              <p className="text-sm text-secondary leading-relaxed">
                Alle Sportangebote und Trainingszeiten findest du auf den jeweiligen{" "}
                <Link href="/" className="text-primary hover:underline font-label-bold">Vereinsseiten</Link>.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
