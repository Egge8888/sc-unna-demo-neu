import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sport Club Unna e.V.",
};

export default function HomePage() {
  return (
    <>
      <Navbar current="home" />

      <main className="max-w-7xl mx-auto px-margin pt-gutter pb-xl space-y-xl">
        {/* Hero Split Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Left: 2 stacked tiles */}
          <div className="flex flex-col gap-sm">
            <div
              className="relative rounded-xl overflow-hidden bg-surface-container shadow-ambient shadow-ambient-hover transition-all group cursor-pointer"
              style={{ height: "240px" }}
            >
              <img
                alt="Ski / Wintersport"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-md">
                <h3 className="font-headline-md text-headline-md text-on-primary">Ski / Wintersport</h3>
              </div>
            </div>
            <div
              className="relative rounded-xl overflow-hidden bg-surface-container shadow-ambient shadow-ambient-hover transition-all group cursor-pointer"
              style={{ height: "240px" }}
            >
              <img
                alt="Badminton"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-md">
                <h3 className="font-headline-md text-headline-md text-on-primary">Badminton</h3>
              </div>
            </div>
          </div>

          {/* Right: Club Info */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex flex-col justify-center items-center gap-sm text-center">
            <Image
              src="/sc-unna-logo.jpg"
              alt="Sport Club Unna e.V."
              width={144}
              height={144}
              className="rounded-full border-4 border-surface-container-highest shadow-ambient"
            />
            <div>
              <h1 className="font-display-xl text-display-xl text-on-background leading-tight mb-xs">
                Sport Club Unna e.V.
              </h1>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider">
                Seit 1963 · Ski · Badminton · Yoga · Wandern
              </p>
            </div>
            <p className="font-body-lg text-body-lg text-secondary">
              Willkommen beim Sport Club Unna e.V. Wir verbinden sportliche Höchstleistung mit einer starken Gemeinschaft. Entdecke unser vielfältiges Sportangebot.
            </p>
            <div className="flex space-x-md">
              <button className="bg-primary text-on-primary font-label-bold text-label-bold py-sm px-lg rounded hover:opacity-90 transition-opacity">
                Mitglied werden
              </button>
              <button className="border-2 border-on-background text-on-background font-label-bold text-label-bold py-sm px-lg rounded hover:bg-surface-container transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </section>

        {/* Fusion Module */}
        <section className="bg-primary text-on-primary rounded-xl px-lg py-md shadow-ambient relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 opacity-10">
            <span className="material-symbols-outlined text-[280px]">handshake</span>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
            <div className="md:col-span-2">
              <span className="bg-on-primary text-primary font-label-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
                SEIT 01.04.2026
              </span>
              <h2 className="font-display-xl text-display-xl uppercase mb-md leading-none">
                Eine neue<br />Ära des Sports
              </h2>
              <p className="font-body-lg opacity-90">
                Aus Ski-Club Unna und Badminton-Sport-Club Unna ist Sport Club Unna e.V. entstanden. Mehr Vielfalt, mehr Gemeinschaft.
              </p>
            </div>
            <div className="flex items-center justify-center gap-sm flex-nowrap">
              <div className="bg-on-primary/10 backdrop-blur-sm rounded-xl px-sm py-sm text-center">
                <span className="material-symbols-outlined text-4xl">badminton</span>
                <p className="font-label-bold uppercase text-[10px] mt-1 whitespace-nowrap">BSC Unna</p>
              </div>
              <span className="text-2xl font-extrabold flex-shrink-0">+</span>
              <div className="bg-on-primary/10 backdrop-blur-sm rounded-xl px-sm py-sm text-center">
                <span className="material-symbols-outlined text-4xl">downhill_skiing</span>
                <p className="font-label-bold uppercase text-[10px] mt-1 whitespace-nowrap">Ski-Club</p>
              </div>
              <span className="text-2xl font-extrabold flex-shrink-0">=</span>
              <div className="bg-on-primary text-primary rounded-xl px-sm py-sm text-center">
                <Image src="/sc-unna-logo.jpg" alt="SC Unna" width={44} height={44} className="mx-auto rounded-full" />
                <p className="font-label-bold uppercase text-[10px] mt-1 whitespace-nowrap">SC Unna</p>
              </div>
            </div>
          </div>
        </section>

        {/* Aktuelle News */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center">
            <span className="material-symbols-outlined mr-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
            Aktuelle News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-ambient shadow-ambient-hover transition-all cursor-pointer">
              <div className="w-full h-40 bg-surface-container rounded-md mb-md overflow-hidden relative">
                <Image src="/sc-unna-logo.jpg" alt="" fill className="object-cover" />
              </div>
              <span className="inline-block bg-primary/10 text-primary font-label-bold text-label-bold px-xs py-[2px] rounded mb-xs">Ski / Wintersport</span>
              <h4 className="font-headline-md text-headline-md text-on-background mb-xs">Fusion: SC Unna seit 01.04.2026</h4>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">Der neue Sport Club Unna e.V. vereint alle Mitglieder von SKU und BSC Unna.</p>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-ambient shadow-ambient-hover transition-all cursor-pointer">
              <div className="w-full h-40 rounded-md mb-md overflow-hidden bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
              <span className="inline-block bg-primary/10 text-primary font-label-bold text-label-bold px-xs py-[2px] rounded mb-xs">Badminton</span>
              <h4 className="font-headline-md text-headline-md text-on-background mb-xs">Sommerfreizeit Zell am See 2026</h4>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">Vom 28. Juni bis 5. Juli 2026 Sommerfreizeit in Österreich.</p>
            </div>
          </div>
        </section>

        {/* Sportangebot */}
        <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
          <div className="flex flex-col md:flex-row justify-between gap-md mb-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center">
                <span className="material-symbols-outlined mr-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_gymnastics</span>
                Unser Sportangebot
              </h2>
              <p className="font-body-md text-secondary mt-xs">Die Abteilungen des Sport Club Unna e.V. als kompakte Übersicht.</p>
            </div>
            <a href="#" className="font-label-bold text-label-bold text-primary uppercase flex items-center gap-xs hover:underline">
              Alle Abteilungen <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[130px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">downhill_skiing</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Ski</h3><p className="font-body-md text-xs text-secondary">Freizeiten</p></div>
            </a>
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[130px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">sports_tennis</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Badminton</h3><p className="font-body-md text-xs text-secondary">Halle</p></div>
            </a>
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[130px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">directions_bike</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Radfahren</h3><p className="font-body-md text-xs text-secondary">Touren</p></div>
            </a>
            <a href="#" className="bg-primary text-on-primary rounded-lg p-sm min-h-[130px] flex flex-col justify-between hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-3xl">self_improvement</span>
              <div><h3 className="font-label-bold uppercase">Yoga</h3><p className="font-body-md text-xs opacity-80">Balance</p></div>
            </a>
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[120px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">fitness_center</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Pilates</h3><p className="font-body-md text-xs text-secondary">Kraft</p></div>
            </a>
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[120px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">pool</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Wassergymnastik</h3><p className="font-body-md text-xs text-secondary">Schonend aktiv</p></div>
            </a>
            <a href="#" className="bg-surface-container rounded-lg p-sm min-h-[120px] flex flex-col justify-between hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">hiking</span>
              <div><h3 className="font-label-bold text-on-background uppercase">Wandern</h3><p className="font-body-md text-xs text-secondary">Touren</p></div>
            </a>
            <a href="#" className="bg-on-background text-on-primary rounded-lg p-sm min-h-[120px] flex flex-col justify-center gap-xs">
              <span className="material-symbols-outlined text-3xl text-primary">arrow_forward</span>
              <span className="font-label-bold uppercase text-xs">Übersicht</span>
            </a>
          </div>
        </section>

        {/* Termine */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center">
            <span className="material-symbols-outlined mr-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            Termine / Jahresprogramm
          </h2>
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-ambient">
            <ul className="space-y-sm divide-y divide-surface-container-highest">
              <li className="py-sm flex items-start gap-sm">
                <div className="bg-surface-container-highest rounded p-xs text-center min-w-[50px]">
                  <span className="block font-label-bold text-label-bold text-primary">15</span>
                  <span className="block font-body-md text-body-md text-secondary text-sm">Okt</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-on-background">Sommerfreizeit Zell am See</p>
                  <p className="font-body-md text-body-md text-secondary text-sm">28.06.–05.07.2026</p>
                </div>
              </li>
              <li className="py-sm flex items-start gap-sm">
                <div className="bg-surface-container-highest rounded p-xs text-center min-w-[50px]">
                  <span className="block font-label-bold text-label-bold text-primary">22</span>
                  <span className="block font-body-md text-body-md text-secondary text-sm">Okt</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-on-background">Skifreizeit Zell am See 2027</p>
                  <p className="font-body-md text-body-md text-secondary text-sm">09.–16.01.2027</p>
                </div>
              </li>
              <li className="py-sm flex items-start gap-sm">
                <div className="bg-surface-container-highest rounded p-xs text-center min-w-[50px]">
                  <span className="block font-label-bold text-label-bold text-primary">05</span>
                  <span className="block font-body-md text-body-md text-secondary text-sm">Nov</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-on-background">BUS-Skifreizeit St. Ulrich</p>
                  <p className="font-body-md text-body-md text-secondary text-sm">16.–23.01.2027</p>
                </div>
              </li>
            </ul>
            <button className="mt-md w-full border border-surface-container-highest text-on-background font-label-bold text-label-bold py-sm rounded hover:bg-surface-container transition-colors">
              Alle Termine
            </button>
          </div>
        </section>

        {/* Social Media */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-1 bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-ambient">
            <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center mb-sm">
              <span className="material-symbols-outlined mr-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
              Social
            </h2>
            <p className="font-body-md text-secondary mb-md">Folgt uns für aktuelle Updates aus dem Vereinsleben.</p>
            <div className="space-y-sm">
              <a href="#" className="flex items-center gap-sm bg-surface-container rounded-lg px-sm py-sm hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">photo_camera</span>
                <div className="flex-grow">
                  <div className="font-label-bold text-on-background text-sm">@sc.unna</div>
                  <div className="text-xs text-secondary">Instagram</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-sm bg-surface-container rounded-lg px-sm py-sm hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">thumb_up</span>
                <div className="flex-grow">
                  <div className="font-label-bold text-on-background text-sm">SC Unna e.V.</div>
                  <div className="text-xs text-secondary">Facebook</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-sm bg-surface-container rounded-lg px-sm py-sm hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">chat</span>
                <div className="flex-grow">
                  <div className="font-label-bold text-on-background text-sm">WhatsApp</div>
                  <div className="text-xs text-secondary">Mitgliederchat</div>
                </div>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-sm">
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=70" alt="Ski" /></div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=70" alt="Badminton" /></div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=70" alt="Radfahren" /></div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=400&q=70" alt="Alpen" /></div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=70" alt="Yoga" /></div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-ambient"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=70" alt="Wandern" /></div>
          </div>
        </section>

        {/* Mitglied werden / Dokumente */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-primary text-on-primary rounded-xl p-md shadow-ambient relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10">
              <span className="material-symbols-outlined text-[160px]">group_add</span>
            </div>
            <div className="relative z-10">
              <span className="bg-on-primary text-primary font-label-bold text-[10px] uppercase tracking-widest px-2 py-1 rounded mb-3 inline-block">Mitmachen</span>
              <h3 className="font-display-xl text-2xl uppercase mb-sm leading-tight">Mitglied<br />werden</h3>
              <p className="font-body-md text-sm mb-md opacity-90">Werde Teil unserer Community. Formular runterladen, ausfüllen, absenden.</p>
              <a href="/dokumente/beitrittserklaerung-2026.pdf" target="_blank" className="bg-on-primary text-primary px-4 py-2 font-label-bold uppercase text-xs rounded hover:opacity-90 inline-flex items-center gap-2">
                Beitrittserklärung <span className="material-symbols-outlined text-base">download</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
            <h3 className="font-headline-lg text-headline-lg text-on-background flex items-center mb-sm">
              <span className="material-symbols-outlined mr-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
              Dokumente
            </h3>
            <ul className="divide-y divide-surface-container-highest">
              {[
                { href: "/dokumente/beitrittserklaerung-2026.pdf", name: "Beitrittserklärung 2026", size: "PDF · 761 KB" },
                { href: "/dokumente/skifreizeit-zell-2027-ausschreibung.pdf", name: "Skifreizeit Zell 2027", size: "PDF · 540 KB" },
                { href: "/dokumente/skifreizeit-st-ulrich-2027-ausschreibung.pdf", name: "Skifreizeit St. Ulrich 2027", size: "PDF · 726 KB" },
                { href: "/dokumente/osterfreizeit-zell-2027-ausschreibung.pdf", name: "Osterfreizeit Zell 2027", size: "PDF · 456 KB" },
              ].map((doc) => (
                <li key={doc.href} className="py-sm">
                  <a href={doc.href} target="_blank" className="flex items-center justify-between group">
                    <div>
                      <div className="font-label-bold text-on-background group-hover:text-primary transition-colors">{doc.name}</div>
                      <div className="text-xs text-secondary">{doc.size}</div>
                    </div>
                    <span className="material-symbols-outlined text-secondary group-hover:text-primary">download</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
