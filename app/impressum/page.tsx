import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-margin py-xl">
        <div className="max-w-3xl">
          <h1 className="font-display-xl text-display-xl text-on-background mb-lg">Impressum</h1>

          <div className="space-y-lg">
            {/* Angaben §5 TMG */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient space-y-sm">
                <div>
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Verein</p>
                  <p className="font-body-md text-on-background font-bold">Sport Club Unna e.V.</p>
                  <p className="font-body-md text-secondary">Stralsunder Str. 63</p>
                  <p className="font-body-md text-secondary">59427 Unna</p>
                  <p className="font-body-md text-secondary">Deutschland</p>
                </div>
                <div className="border-t border-surface-container-high pt-sm">
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Vertreten durch</p>
                  <p className="font-body-md text-secondary">1. Vorsitzender: Erwin Mittmann</p>
                </div>
                <div className="border-t border-surface-container-high pt-sm">
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Kontakt</p>
                  <p className="font-body-md text-secondary">Telefon: 02303 / 21960</p>
                  <a href="mailto:info@scunna.de" className="font-body-md text-secondary hover:text-primary transition-colors">
                    info@scunna.de
                  </a>
                </div>
                <div className="border-t border-surface-container-high pt-sm">
                  <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Vereinsregister</p>
                  <p className="font-body-md text-secondary">Registergericht: Amtsgericht Unna</p>
                  <p className="font-body-md text-secondary">Registernummer: VR [Nummer ergänzen]</p>
                </div>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">
                Haftung für Inhalte
              </h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="font-body-md text-secondary mt-sm">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">
                Haftung für Links
              </h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="font-body-md text-secondary mt-sm">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-md">
                Urheberrecht
              </h2>
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
                <p className="font-body-md text-secondary">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="font-body-md text-secondary mt-sm">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
