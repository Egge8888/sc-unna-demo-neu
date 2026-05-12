import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Badminton",
};

export default function BadmintonPage() {
  return (
    <>
      <Navbar current="badminton" />

      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">
        {/* Page Header */}
        <div>
          <div className="flex items-center gap-sm mb-sm">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_tennis</span>
            <span className="font-label-bold text-label-bold text-primary uppercase tracking-wider">Abteilung</span>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Badminton</h1>
          <p className="font-body-lg text-secondary max-w-2xl">
            Wir trainieren in zwei Sporthallen in Unna und starten mit drei Mannschaften im Spielbetrieb. Einsteiger sind herzlich willkommen – Leihschläger stehen bereit.
          </p>
        </div>

        {/* Training */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md">Training</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-lg">
            {/* Junioren */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
                <h3 className="font-headline-md text-on-background">Juniorentraining – U19</h3>
              </div>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-sm">Kinder / Schüler · 7–13 Jahre</p>
              <div className="space-y-xs mb-md">
                <div className="flex items-center gap-md text-body-md">
                  <span className="font-label-bold text-label-bold w-6 text-on-surface">Di</span>
                  <span className="text-on-surface">17:30 – 19:00</span>
                  <span className="text-secondary">SpH SZ Süd</span>
                </div>
                <div className="flex items-center gap-md text-body-md">
                  <span className="font-label-bold text-label-bold w-6 text-on-surface">Fr</span>
                  <span className="text-on-surface">17:30 – 19:00</span>
                  <span className="text-secondary">SpH SZ Süd</span>
                </div>
              </div>
              <div className="border-t border-surface-container-high pt-md">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-sm">Schüler / Jugendliche · 14–18 Jahre</p>
                <div className="space-y-xs">
                  <div className="flex items-center gap-md text-body-md">
                    <span className="font-label-bold text-label-bold w-6 text-on-surface">Di</span>
                    <span className="text-on-surface">18:30 – 20:00</span>
                    <span className="text-secondary">SpH SZ Süd</span>
                  </div>
                  <div className="flex items-center gap-md text-body-md">
                    <span className="font-label-bold text-label-bold w-6 text-on-surface">Fr</span>
                    <span className="text-on-surface">17:30 – 19:00</span>
                    <span className="text-secondary">SpH SZ Süd</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Senioren */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_tennis</span>
                <h3 className="font-headline-md text-on-background">Seniorentraining – O19</h3>
              </div>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-sm">Mannschafts- / Turnierspieler</p>
              <div className="space-y-xs mb-md">
                <div className="flex items-center gap-md text-body-md flex-wrap">
                  <span className="font-label-bold text-label-bold w-6 text-on-surface">Di</span>
                  <span className="text-on-surface">20:00 – 22:00</span>
                  <span className="text-secondary">SpH SZ Süd</span>
                  <span className="bg-surface-container text-secondary font-label-bold text-[10px] uppercase tracking-wider px-xs py-[2px] rounded-full">derzeit pausiert</span>
                </div>
                <div className="flex items-center gap-md text-body-md">
                  <span className="font-label-bold text-label-bold w-6 text-on-surface">Fr</span>
                  <span className="text-on-surface">20:00 – 22:00</span>
                  <span className="text-secondary">SpH SZ Süd</span>
                </div>
              </div>
              <div className="border-t border-surface-container-high pt-md">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-sm">Hobby- / Freizeitspieler</p>
                <div className="space-y-xs">
                  <div className="flex items-center gap-md text-body-md">
                    <span className="font-label-bold text-label-bold w-6 text-on-surface">Mo</span>
                    <span className="text-on-surface">19:00 – 22:00</span>
                    <span className="text-secondary">TH Friedrichsborn</span>
                  </div>
                  <div className="flex items-center gap-md text-body-md">
                    <span className="font-label-bold text-label-bold w-6 text-on-surface">Do</span>
                    <span className="text-on-surface">19:00 – 22:00</span>
                    <span className="text-secondary">TH Friedrichsborn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sporthallen */}
          <h3 className="font-headline-md text-headline-md text-on-background mb-md">Sporthallen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-lg">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
              <span className="material-symbols-outlined text-primary text-3xl mt-xs flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-xs">SpH SZ Süd · Unna-Mitte</p>
                <p className="font-headline-md text-on-background mb-xs">Sporthalle Schulzentrum Süd</p>
                <p className="font-body-md text-secondary text-sm mb-xs">Peter-Weiß-Gesamtschule</p>
                <p className="font-body-md text-secondary text-sm mb-md">Herderstraße 16, 59423 Unna</p>
                <a href="https://maps.google.com/?q=Herderstraße+16,+59423+Unna" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-label-bold text-label-bold text-primary text-xs uppercase tracking-wider hover:underline">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Google Maps öffnen
                </a>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
              <span className="material-symbols-outlined text-primary text-3xl mt-xs flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[11px] mb-xs">TH Friedrichsborn · Unna-Königsborn</p>
                <p className="font-headline-md text-on-background mb-xs">Turnhalle Grundschule Friedrichsborn</p>
                <p className="font-body-md text-secondary text-sm mb-xs">Unna-Königsborn</p>
                <p className="font-body-md text-secondary text-sm mb-md">Hubert-Biernat-Straße, 59427 Unna-Königsborn</p>
                <a href="https://maps.google.com/?q=Hubert-Biernat-Straße,+59427+Unna-Königsborn" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-label-bold text-label-bold text-primary text-xs uppercase tracking-wider hover:underline">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Google Maps öffnen
                </a>
              </div>
            </div>
          </div>

          {/* Ansprechpartner */}
          <h3 className="font-headline-md text-headline-md text-on-background mb-md">Ansprechpartner</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
            {[
              {
                role: "Senioren – Mannschaftsspieler",
                name: "Ingo Filbrandt",
                phone: { href: "tel:0174411677", label: "0174 411677" },
                email: { href: "mailto:ingofilbrandt@aol.com", label: "ingofilbrandt@aol.com" },
              },
              {
                role: "Senioren – Hobbyspieler",
                name: "Peter Weber",
                phone: { href: "tel:01608289204", label: "0160 8289204" },
                email: { href: "mailto:peter.weber@bscunna.de", label: "peter.weber@bscunna.de" },
              },
              {
                role: "Junioren & Trainer",
                name: "Luke Colin Finke",
                phone: { href: "tel:017624645426", label: "0176 24645426" },
                email: { href: "mailto:luke.finke@bscunna.de", label: "luke.finke@bscunna.de" },
              },
            ].map((p) => (
              <div key={p.name} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-md">{p.role}</p>
                <div className="flex items-center gap-sm mb-md">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  <h4 className="font-headline-md text-on-background">{p.name}</h4>
                </div>
                <div className="space-y-xs">
                  <a href={p.phone.href} className="flex items-center gap-xs text-secondary font-body-md text-sm hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">phone</span>{p.phone.label}
                  </a>
                  <a href={p.email.href} className="flex items-center gap-xs text-secondary font-body-md text-sm hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">mail</span>{p.email.label}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trainer */}
          <h3 className="font-headline-md text-headline-md text-on-background mb-md">Trainer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {["Philipp Henke", "Mark Hammerschmidt", "Adrian Brinkel"].map((name) => (
              <div key={name} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-center gap-md">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                <div>
                  <h4 className="font-headline-md text-on-background">{name}</h4>
                  <p className="font-body-md text-secondary text-sm">Trainer</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mannschaften */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-md">Mannschaften</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

            {/* 1. Senioren */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover flex flex-col">
              <div className="mb-md">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Senioren</p>
                <h3 className="font-headline-md text-on-background">1. Senioren</h3>
                <p className="font-body-md text-secondary text-sm">SG Unna 1 · Bezirksliga Nord 2</p>
              </div>
              <div className="space-y-sm border-t border-surface-container-high pt-md mb-md">
                <div>
                  <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-xs">Mannschaftsführer</p>
                  <p className="font-body-md text-on-surface text-sm">Marius Frickenstein · 0172 5189168</p>
                </div>
                <div className="flex items-center justify-between">
                  <a href="https://maps.google.com/?q=Herderstraße+16,+59423+Unna" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-body-md text-primary text-sm hover:underline">
                    <span className="material-symbols-outlined text-sm">location_on</span>SpH SZ Süd
                  </a>
                  <a href="https://dbv.turnier.de/sport/team.aspx?id=925D6245-1FA1-496D-9810-1439487E5801&team=651" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-label-bold text-primary text-xs uppercase hover:underline">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>turnier.de
                  </a>
                </div>
              </div>
              <div className="border-t border-surface-container-high pt-md mt-auto">
                <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-sm">Tabelle · Stand 21.04.2026</p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="text-secondary font-label-bold uppercase text-[10px]">
                      <th className="text-left pb-xs w-5">Pl.</th>
                      <th className="text-left pb-xs">Mannschaft</th>
                      <th className="text-right pb-xs w-6">Sp.</th>
                      <th className="text-right pb-xs w-10">Pkt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">1</td><td className="py-[3px]">Letmather TV 1877</td><td className="text-right py-[3px]">10</td><td className="text-right py-[3px]">18 : 2</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">2</td><td className="py-[3px]">SG Lendringsen/Leck.</td><td className="text-right py-[3px]">10</td><td className="text-right py-[3px]">15 : 5</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">3</td><td className="py-[3px]">BC Herscheid</td><td className="text-right py-[3px]">10</td><td className="text-right py-[3px]">12 : 8</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">4</td><td className="py-[3px]">TV Neheim</td><td className="text-right py-[3px]">10</td><td className="text-right py-[3px]">8 : 12</td></tr>
                    <tr className="border-t border-surface-container-high bg-primary/5 font-bold"><td className="py-[3px] text-primary">5</td><td className="py-[3px] text-primary">SG Unna 1</td><td className="text-right py-[3px] text-primary">10</td><td className="text-right py-[3px] text-primary">6 : 14</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">6</td><td className="py-[3px]">TV Werne</td><td className="text-right py-[3px]">10</td><td className="text-right py-[3px]">1 : 19</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">7</td><td className="py-[3px]">TuS Neuenrade</td><td className="text-right py-[3px]">0</td><td className="text-right py-[3px]">– : –</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Senioren */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover flex flex-col">
              <div className="mb-md">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Senioren</p>
                <h3 className="font-headline-md text-on-background">2. Senioren</h3>
                <p className="font-body-md text-secondary text-sm">SG Unna 2 · Kreisliga Nord 2</p>
              </div>
              <div className="space-y-sm border-t border-surface-container-high pt-md mb-md">
                <div>
                  <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-xs">Mannschaftsführer</p>
                  <p className="font-body-md text-on-surface text-sm">Ingo Filbrandt · 0174 411677</p>
                </div>
                <div className="flex items-center justify-between">
                  <a href="https://maps.google.com/?q=Herderstraße+16,+59423+Unna" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-body-md text-primary text-sm hover:underline">
                    <span className="material-symbols-outlined text-sm">location_on</span>SpH SZ Süd
                  </a>
                  <a href="https://dbv.turnier.de/sport/team.aspx?id=925D6245-1FA1-496D-9810-1439487E5801&team=652" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-label-bold text-primary text-xs uppercase hover:underline">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>turnier.de
                  </a>
                </div>
              </div>
              <div className="border-t border-surface-container-high pt-md mt-auto">
                <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-sm">Tabelle · Stand 21.04.2026</p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="text-secondary font-label-bold uppercase text-[10px]">
                      <th className="text-left pb-xs w-5">Pl.</th>
                      <th className="text-left pb-xs">Mannschaft</th>
                      <th className="text-right pb-xs w-6">Sp.</th>
                      <th className="text-right pb-xs w-10">Pkt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">1</td><td className="py-[3px]">TuWa Bockum-Hövel</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">22 : 6</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">2</td><td className="py-[3px]">TV Jahn Oelde</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">20 : 8</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">3</td><td className="py-[3px]">Soester TV</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">16 : 12</td></tr>
                    <tr className="border-t border-surface-container-high bg-primary/5 font-bold"><td className="py-[3px] text-primary">4</td><td className="py-[3px] text-primary">SG Unna 2</td><td className="text-right py-[3px] text-primary">14</td><td className="text-right py-[3px] text-primary">16 : 12</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">5</td><td className="py-[3px]">Polizei SV Bork</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">12 : 16</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">6</td><td className="py-[3px]">TV Werne 2</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">12 : 16</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">7</td><td className="py-[3px]">Hammer SportClub</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">8 : 20</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">8</td><td className="py-[3px]">Sendenh./Ahlen/Westb.</td><td className="text-right py-[3px]">14</td><td className="text-right py-[3px]">6 : 22</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Junioren */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover flex flex-col">
              <div className="mb-md">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Junioren</p>
                <h3 className="font-headline-md text-on-background">Junioren</h3>
                <p className="font-body-md text-secondary text-sm">BSC Unna M1 · U17 Mini Nord 2</p>
              </div>
              <div className="space-y-sm border-t border-surface-container-high pt-md mb-md">
                <div>
                  <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-xs">Mannschaftsbetreuer</p>
                  <p className="font-body-md text-on-surface text-sm">Daniel Brinkel · 0176 31390516</p>
                </div>
                <div className="flex items-center justify-between">
                  <a href="https://maps.google.com/?q=Herderstraße+16,+59423+Unna" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-body-md text-primary text-sm hover:underline">
                    <span className="material-symbols-outlined text-sm">location_on</span>SpH SZ Süd
                  </a>
                  <a href="https://dbv.turnier.de/sport/team.aspx?id=925D6245-1FA1-496D-9810-1439487E5801&team=1314" target="_blank" rel="noopener" className="inline-flex items-center gap-xs font-label-bold text-primary text-xs uppercase hover:underline">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>turnier.de
                  </a>
                </div>
              </div>
              <div className="border-t border-surface-container-high pt-md mt-auto">
                <p className="font-label-bold text-label-bold text-secondary text-[10px] uppercase mb-sm">Tabelle · Stand 21.04.2026</p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="text-secondary font-label-bold uppercase text-[10px]">
                      <th className="text-left pb-xs w-5">Pl.</th>
                      <th className="text-left pb-xs">Mannschaft</th>
                      <th className="text-right pb-xs w-6">Sp.</th>
                      <th className="text-right pb-xs w-10">Pkt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">1</td><td className="py-[3px]">Warendorfer SU M2</td><td className="text-right py-[3px]">8</td><td className="text-right py-[3px]">16 : 0</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">2</td><td className="py-[3px]">TV Werne M1</td><td className="text-right py-[3px]">8</td><td className="text-right py-[3px]">11 : 5</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">3</td><td className="py-[3px]">TB Leckingsen M1</td><td className="text-right py-[3px]">8</td><td className="text-right py-[3px]">6 : 10</td></tr>
                    <tr className="border-t border-surface-container-high bg-primary/5 font-bold"><td className="py-[3px] text-primary">4</td><td className="py-[3px] text-primary">BSC Unna M1</td><td className="text-right py-[3px] text-primary">8</td><td className="text-right py-[3px] text-primary">4 : 12</td></tr>
                    <tr className="text-secondary border-t border-surface-container-high"><td className="py-[3px]">5</td><td className="py-[3px]">BC Lünen M1</td><td className="text-right py-[3px]">8</td><td className="text-right py-[3px]">3 : 13</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
