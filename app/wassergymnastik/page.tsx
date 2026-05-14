import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Wassergymnastik" };

const kurse = [
  { becken: "Nichtschwimmerbecken", einlass: "17:15 Uhr", beginn: "17:30 Uhr" },
  { becken: "Nichtschwimmerbecken", einlass: "17:45 Uhr", beginn: "18:00 Uhr" },
  { becken: "Nichtschwimmerbecken", einlass: "18:15 Uhr", beginn: "18:30 Uhr" },
  { becken: "Sprungbecken",         einlass: "18:45 Uhr", beginn: "19:00 Uhr" },
  { becken: "Sprungbecken",         einlass: "19:15 Uhr", beginn: "19:30 Uhr" },
];

export default function WassergymnastikPage() {
  return (
    <>
      <Navbar current="wassergymnastik" />
      <main className="max-w-7xl mx-auto px-margin pb-xl space-y-xl">

        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden" style={{ height: "340px" }}>
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80"
            alt="Wassergymnastik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-md md:p-lg max-w-3xl">
            <span className="inline-block bg-surface-container text-on-surface font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-sm">
              Sportl. Aktivität
            </span>
            <h1 className="font-display-xl text-display-xl text-white leading-tight mb-xs">Wassergymnastik</h1>
            <p className="font-body-lg text-white/80">
              Gelenkschonender Wassersport mit 5 Kurszeiten wöchentlich — in Kooperation mit den Schwimmfreunden Unna.
            </p>
          </div>
        </section>

        {/* Info + Kurse */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
          <div className="md:col-span-2 space-y-md">
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-xs">Über das Angebot</p>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-sm">Wassergymnastik im SC Unna</h2>
              <div className="space-y-sm font-body-lg text-secondary leading-relaxed">
                <p>
                  Die Wassergymnastikkurse finden in Kooperation mit den Schwimmfreunden Unna statt — in der Schwimmsporthalle an der Bergenkampstraße. Das Angebot ist besonders gelenkschonend und für alle Altersgruppen geeignet.
                </p>
                <p>
                  Es stehen fünf Kurszeiten zur Auswahl — sowohl im Nichtschwimmerbecken als auch im Sprungbecken. Anmeldung ist erforderlich.
                </p>
              </div>
            </div>

            {/* Kurszeiten */}
            <div>
              <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-sm">Kurszeiten</p>
              <p className="text-xs text-secondary mb-sm italic">Tag der Woche bitte beim Vereinsbüro erfragen — Einlass jeweils 15 Min. vor Kursbeginn.</p>
              <div className="overflow-hidden rounded-xl border border-surface-container-highest">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-surface-container-highest">
                      <th className="text-left px-md py-sm font-label-bold text-[10px] uppercase tracking-wider text-secondary">Becken</th>
                      <th className="text-left px-md py-sm font-label-bold text-[10px] uppercase tracking-wider text-secondary">Einlass</th>
                      <th className="text-left px-md py-sm font-label-bold text-[10px] uppercase tracking-wider text-secondary">Kursbeginn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kurse.map((k, i) => (
                      <tr key={i} className="border-b border-surface-container-highest last:border-0 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                        <td className="px-md py-sm font-body-md text-on-surface">{k.becken}</td>
                        <td className="px-md py-sm text-secondary">{k.einlass}</td>
                        <td className="px-md py-sm font-label-bold text-on-background">{k.beginn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ort */}
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex items-start gap-md">
              <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">location_on</span>
              <div>
                <p className="font-label-bold text-on-background">Schwimmsporthalle Unna</p>
                <p className="text-sm text-secondary font-body-md">Bergenkamp 7, 59425 Unna</p>
                <a
                  href="https://maps.google.com/?q=Bergenkamp+7,+59425+Unna"
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-xs text-primary text-xs font-label-bold uppercase hover:underline mt-sm"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>

          {/* Trainerinnen + Anmeldung */}
          <div className="space-y-gutter">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-md">Trainerinnen</p>
              {["Alexandra Engler", "Marion Schwittay"].map((name) => (
                <div key={name} className="flex items-center gap-sm mb-sm last:mb-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-extrabold text-primary text-sm">{name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <p className="font-body-md text-on-surface text-sm">{name}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary text-on-primary rounded-xl p-md shadow-ambient">
              <p className="text-[10px] font-label-bold uppercase tracking-wider mb-sm opacity-80">Anmeldung erforderlich</p>
              <p className="text-sm mb-md opacity-90 leading-relaxed">Plätze sind begrenzt — Anmeldung per E-Mail an die Trainerin.</p>
              <a
                href="mailto:schwittaymarion@gmail.com"
                className="inline-flex items-center gap-xs bg-on-primary text-primary font-label-bold text-xs uppercase px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Anmelden
              </a>
            </div>

            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-sm">Ansprechpartnerin</p>
              <div className="flex items-center gap-sm mb-md">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-extrabold text-primary text-sm">AH</span>
                </div>
                <div>
                  <p className="font-extrabold text-on-background text-sm">Anne Hentrich</p>
                  <p className="text-xs text-secondary">Vorstand Sport Club Unna e.V.</p>
                </div>
              </div>
              <div className="space-y-xs">
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

      </main>
      <Footer />
    </>
  );
}
