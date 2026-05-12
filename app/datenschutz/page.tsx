import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-margin py-xl">
        <div className="max-w-3xl">
          <h1 className="font-display-xl text-display-xl text-on-background mb-lg">Datenschutzerklärung</h1>

          <div className="space-y-lg">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">1. Verantwortlicher</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p className="font-body-md text-on-background font-bold mt-sm">Sport Club Unna e.V.</p>
                <p className="font-body-md text-secondary">Stralsunder Str. 63, 59427 Unna</p>
                <p className="font-body-md text-secondary">Telefon: 02303 / 21960</p>
                <a href="mailto:info@scunna.de" className="font-body-md text-secondary hover:text-primary transition-colors">
                  info@scunna.de
                </a>
              </div>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">2. Hosting</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient space-y-sm">
                <p className="font-body-md text-secondary">
                  Diese Website wird über <strong className="text-on-background">Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet. Beim Aufruf der Website werden technisch notwendige Zugriffsdaten (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browsertyp) in Server-Logfiles gespeichert. Diese Daten sind für den sicheren Betrieb der Website erforderlich und werden nicht mit anderen Datenquellen zusammengeführt.
                </p>
                <p className="font-body-md text-secondary">
                  Da Vercel in den USA ansässig ist, kann es zur Übertragung personenbezogener Daten in Drittländer kommen. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert und bietet damit ein angemessenes Datenschutzniveau. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
                </p>
                <p className="font-body-md text-secondary">
                  Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-primary hover:underline">vercel.com/legal/privacy-policy</a>
                </p>
              </div>
            </section>

            {/* 3. Externe Dienste */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">3. Externe Dienste</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient space-y-md">
                <div>
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Google Fonts / Material Symbols</p>
                  <p className="font-body-md text-secondary">
                    Diese Website lädt Schriftarten (Manrope via Next.js, keine externe Anfrage) sowie Symbole (Google Material Symbols) von Servern von <strong className="text-on-background">Google LLC</strong>, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Beim Laden der Symbole wird Ihre IP-Adresse an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-primary hover:underline">policies.google.com/privacy</a>
                  </p>
                </div>
                <div className="border-t border-surface-container-high pt-md">
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Unsplash</p>
                  <p className="font-body-md text-secondary">
                    Einige Bilder auf dieser Website werden vom CDN von <strong className="text-on-background">Unsplash Inc.</strong> geladen. Beim Laden der Bilder wird Ihre IP-Adresse übertragen. Datenschutzerklärung: <a href="https://unsplash.com/privacy" target="_blank" rel="noopener" className="text-primary hover:underline">unsplash.com/privacy</a>
                  </p>
                </div>
                <div className="border-t border-surface-container-high pt-md">
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Google Maps</p>
                  <p className="font-body-md text-secondary">
                    Links auf dieser Website führen zu Google Maps (Google LLC). Beim Aufrufen von Google Maps gelten die Datenschutzbestimmungen von Google. Die Links sind rein verweisend – wir binden keine Kartendaten direkt ein.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Keine Cookies */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">4. Cookies und Tracking</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Diese Website setzt keine eigenen Cookies und verwendet kein Web-Tracking, keine Analyse-Tools (z. B. Google Analytics) und keine Social-Media-Plugins. Es werden keine Nutzerprofile erstellt.
                </p>
              </div>
            </section>

            {/* 5. Kontakt */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">5. Kontaktaufnahme per E-Mail</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Ihr Name sowie der Inhalt Ihrer Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / berechtigtes Interesse).
                </p>
              </div>
            </section>

            {/* 6. Ihre Rechte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">6. Ihre Rechte</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary mb-sm">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                </p>
                <ul className="space-y-xs font-body-md text-secondary list-none">
                  {[
                    "Recht auf Auskunft (Art. 15 DSGVO)",
                    "Recht auf Berichtigung (Art. 16 DSGVO)",
                    "Recht auf Löschung (Art. 17 DSGVO)",
                    "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                    "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                    "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                  ].map((right) => (
                    <li key={right} className="flex items-start gap-xs">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">check_circle</span>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body-md text-secondary mt-sm">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@scunna.de" className="text-primary hover:underline">info@scunna.de</a>
                </p>
              </div>
            </section>

            {/* 7. Beschwerderecht */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">7. Beschwerderecht</h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständige Behörde für Nordrhein-Westfalen ist:
                </p>
                <p className="font-body-md text-on-background font-bold mt-sm">Landesbeauftragte für Datenschutz und Informationsfreiheit NRW</p>
                <p className="font-body-md text-secondary">Postfach 20 04 44, 40102 Düsseldorf</p>
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener" className="font-body-md text-primary hover:underline">
                  www.ldi.nrw.de
                </a>
              </div>
            </section>

            <p className="font-body-md text-secondary text-sm">Stand: Mai 2026</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
