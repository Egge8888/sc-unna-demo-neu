import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Galerie" };

const placeholderImages = [
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=70",
];

export default function GaleriePage() {
  return (
    <>
      <Navbar current="galerie" />
      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">

        <div>
          <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Galerie</h1>
          <p className="font-body-lg text-secondary max-w-2xl">
            Bilder aus dem Vereinsleben des Sport Club Unna e.V. — Freizeiten, Veranstaltungen und Sport.
          </p>
        </div>

        {/* Flickr-Hinweis */}
        <section className="bg-primary text-on-primary rounded-xl p-md shadow-ambient relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <span className="material-symbols-outlined text-[200px]">photo_library</span>
          </div>
          <div className="relative z-10">
            <p className="font-label-bold text-[10px] uppercase tracking-widest opacity-80 mb-sm">Fotoarchiv</p>
            <h2 className="font-headline-lg text-on-primary mb-sm">Vollständige Bildergalerie auf Flickr</h2>
            <p className="font-body-md opacity-90 mb-md max-w-xl">
              Das komplette Fotoarchiv des Vereins findest du auf unserem Flickr-Album. Dort sind alle Bilder aus Skifreizeiten, Sommerreisen und Vereinsveranstaltungen gesammelt.
            </p>
            <a
              href="https://www.flickr.com/photos/148750664@N03/albums"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-xs bg-on-primary text-primary font-label-bold text-xs uppercase px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Zur Flickr-Galerie
            </a>
          </div>
        </section>

        {/* Vorschau */}
        <section>
          <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-md">Impressionen</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-sm">
            {placeholderImages.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-ambient">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <p className="text-xs text-secondary font-body-md mt-sm italic">
            Platzhalterbilder — echte Vereinsfotos folgen nach Integration des CMS.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
