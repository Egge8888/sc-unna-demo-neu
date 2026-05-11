import Image from "next/image";
import Link from "next/link";

const designs = [
  {
    id: 1,
    slug: "design-1",
    name: "Athletic Precision",
    subtitle: "Dark Edition",
    description:
      "High-Contrast Minimalism im Swiss-Modernist Stil. Dunkles Theme mit Rot/Weiß-Akzenten, scharfe Kanten, keine Rundungen – Elite Performance Ästhetik.",
    fonts: ["Inter Black", "Lexend"],
    style: "Dark · Sharp · Elite",
    primary: "#D91E18",
    bg: "#121414",
    preview: "/designs/screenshots/design-1.png",
    badge: "Dark Mode",
    badgeColor: "bg-red-700",
  },
  {
    id: 2,
    slug: "design-2",
    name: "Athletic Modernist",
    subtitle: "Light Edition",
    description:
      "Helles, luftiges Design mit sanften Rundungen und ambient Schatten. Verbindet sportliche Energie mit moderner Community-Atmosphäre.",
    fonts: ["Manrope ExtraBold"],
    style: "Light · Rounded · Community",
    primary: "#87131e",
    bg: "#f9f9f9",
    preview: "/designs/screenshots/design-2.png",
    badge: "Light Mode",
    badgeColor: "bg-zinc-700",
  },
  {
    id: 3,
    slug: "design-3",
    name: "SC Unna Classic",
    subtitle: "High Contrast Bold",
    description:
      "Inter Black mit dramatischen Schriftgrößen. Bold 2px Rahmen statt Schatten, kraftvolle Bento-Grid News-Section, maximale Klarheit.",
    fonts: ["Inter Black", "Inter Bold"],
    style: "Light · Bold · Precision",
    primary: "#b10006",
    bg: "#f9f9f9",
    preview: "/designs/screenshots/design-3.png",
    badge: "Bold Grid",
    badgeColor: "bg-zinc-800",
  },
  {
    id: 4,
    slug: "design-4",
    name: "Athletic Modernist",
    subtitle: "Bento Card Style",
    description:
      "Manrope mit Bento-Grid Layout für News und Termine. Ambient Shadows, gerundete Karten, freundlich und modern – Sport für alle.",
    fonts: ["Manrope ExtraBold"],
    style: "Light · Bento · Friendly",
    primary: "#87131e",
    bg: "#f9f9f9",
    preview: "/designs/screenshots/design-4.png",
    badge: "Bento Grid",
    badgeColor: "bg-zinc-700",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/sc-unna-logo.jpg"
              alt="Sport Club Unna e.V. Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="text-white font-black text-sm uppercase tracking-wider">
                Sport Club Unna e.V.
              </div>
              <div className="text-zinc-500 text-xs">Website Design Demo</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-xs uppercase tracking-widest">
              4 Designs · 2026
            </span>
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="text-red-400 text-xs uppercase tracking-widest font-semibold">
            Fusion seit 01.04.2026
          </span>
        </div>
        <div className="flex justify-center mb-6">
          <Image
            src="/sc-unna-logo.jpg"
            alt="Sport Club Unna e.V."
            width={120}
            height={120}
            className="rounded-full border-4 border-red-600/30 shadow-2xl shadow-red-600/20"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-6 leading-none tracking-tighter">
          4 Designs für{" "}
          <span className="text-red-600">SC Unna</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-4">
          Professionelle Website-Konzepte für den Sport Club Unna e.V. –
          entstanden aus der Fusion von Ski-Club Unna und Badminton-Sport-Club
          Unna.
        </p>
        <p className="text-zinc-600 text-sm">
          Stralsunder Str. 63 · 59427 Unna · info@scunna.de · 02303/21960
        </p>
      </section>

      {/* Design Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={`/${design.slug}`}
              target="_blank"
              className="group relative bg-[#111] border border-white/10 overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 block"
            >
              {/* Number */}
              <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white text-xs font-black">
                  0{design.id}
                </span>
              </div>

              {/* Badge */}
              <div
                className={`absolute top-4 right-4 z-20 ${design.badgeColor} px-2 py-1`}
              >
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                  {design.badge}
                </span>
              </div>

              {/* Screenshot Preview */}
              <div className="relative overflow-hidden h-64 bg-zinc-900">
                <Image
                  src={design.preview}
                  alt={`${design.name} Preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-white font-black text-xl uppercase tracking-tight leading-none">
                      {design.name}
                    </h2>
                    <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mt-1">
                      {design.subtitle}
                    </p>
                  </div>
                  <div
                    className="w-3 h-3 mt-1 flex-shrink-0"
                    style={{ backgroundColor: design.primary }}
                  />
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {design.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {design.fonts.map((font) => (
                      <span
                        key={font}
                        className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-500 px-2 py-0.5"
                      >
                        {font}
                      </span>
                    ))}
                  </div>
                  <span className="text-red-600 text-xs uppercase tracking-wider font-bold group-hover:underline">
                    Design ansehen →
                  </span>
                </div>

                {/* Style tag */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                  <div
                    className="w-4 h-4 border"
                    style={{
                      backgroundColor: design.bg,
                      borderColor: design.primary + "40",
                    }}
                  />
                  <span className="text-zinc-600 text-xs tracking-wider">
                    {design.style}
                  </span>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/sc-unna-logo.jpg"
              alt="SC Unna Logo"
              width={24}
              height={24}
              className="rounded-full opacity-60"
            />
            <span className="text-zinc-600 text-sm">
              Sport Club Unna e.V. · Gegründet 1963 · Fusion 01.04.2026
            </span>
          </div>
          <div className="flex items-center gap-6 text-zinc-700 text-xs uppercase tracking-widest">
            <span>Ski</span>
            <span>·</span>
            <span>Badminton</span>
            <span>·</span>
            <span>Radfahren</span>
            <span>·</span>
            <span>Yoga</span>
            <span>·</span>
            <span>Schwimmen</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
