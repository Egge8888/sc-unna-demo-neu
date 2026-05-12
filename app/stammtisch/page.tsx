import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stammtisch",
};

export default function StammtischPage() {
  return (
    <>
      <Navbar current="stammtisch" />

      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">
        <section>
          <div className="mb-lg">
            <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Stammtisch</h1>
            <p className="font-body-lg text-secondary max-w-2xl">
              Der Stammtisch des SC Unna findet normalerweise jeden{" "}
              <strong>Freitag ab ca. 21 Uhr</strong> statt – ein fester Treffpunkt für alle Vereinsmitglieder und Freunde des Clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-lg">
            <div className="rounded-xl overflow-hidden relative shadow-ambient" style={{ height: "288px" }}>
              <Image
                src="/stammtisch/gasthaus-agethen.jpg"
                alt="Gasthaus Agethen"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                Unser Stammlokal
              </span>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex flex-col justify-center gap-md">
              <p className="font-body-lg text-secondary">
                Der Stammtisch des SC Unna ist ein offenes Treffen für alle Mitglieder und Freunde. Einfach vorbeikommen – keine Anmeldung nötig.
              </p>
              <p className="font-body-md text-secondary">
                Falls das Gasthaus Agethen besetzt sein sollte, wird über die{" "}
                <strong className="text-on-background">SCU-WhatsApp-Gruppe</strong> kurzfristig ein Ausweichlokal bekannt gegeben.
              </p>
              <a
                href="mailto:info@scunna.de"
                className="inline-flex items-center gap-xs bg-primary text-on-primary font-label-bold text-label-bold px-md py-sm rounded hover:opacity-90 transition-opacity w-fit text-xs"
              >
                <span className="material-symbols-outlined text-sm">mail</span> Kontakt aufnehmen
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-md">Wann</p>
              <p className="font-display-xl text-display-xl text-primary leading-none mb-xs">Fr.</p>
              <p className="font-headline-md text-headline-md font-extrabold text-on-background mb-xs">Jeden Freitag</p>
              <p className="font-body-md text-secondary">ab ca. 21:00 Uhr</p>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-md">Wo</p>
              <span className="material-symbols-outlined text-primary text-3xl mb-sm block">location_on</span>
              <p className="font-headline-md text-headline-md font-extrabold text-on-background mb-xs">Gasthaus Agethen</p>
              <p className="font-body-md text-secondary">Hertingerstr. 10, Unna</p>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient shadow-ambient-hover">
              <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-md">Ausweich</p>
              <span className="material-symbols-outlined text-primary text-3xl mb-sm block">forum</span>
              <p className="font-headline-md text-headline-md font-extrabold text-on-background mb-xs">WhatsApp-Gruppe</p>
              <p className="font-body-md text-secondary">Kurzfristige Infos über die SCU-Gruppe</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
