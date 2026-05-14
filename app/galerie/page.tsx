import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Fotogalerie" };

type Album = {
  title: string;
  date: string;
  fotoAnzahl: number;
  coverUrl: string;
  flickrUrl: string;
  beschreibung?: string;
};

// Seed-Daten: 3 aktuellste Alben von flickr.com/photos/148750664@N03/albums
// Wird später durch Sanity-Dokumente ersetzt
const alben: Album[] = [
  {
    title: "\"Los geht's Skifoan\" 2018",
    date: "November 2018",
    fotoAnzahl: 22,
    coverUrl: "https://live.staticflickr.com/4859/46285066392_319fed6487_z.jpg",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157674561357557",
    beschreibung: "Eindrücke von der Skifreizeit des Ski-Clubs Unna 2018.",
  },
  {
    title: "Sommerfest 2018",
    date: "Sommer 2018",
    fotoAnzahl: 19,
    coverUrl: "https://live.staticflickr.com/1822/42515880585_be2a86e2cb_z.jpg",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157671196011278",
    beschreibung: "Sommerfest im Bornekampbad — Spaß, Sport und Geselligkeit.",
  },
  {
    title: "Skischleifen 2017",
    date: "November 2017",
    fotoAnzahl: 10,
    coverUrl: "https://live.staticflickr.com/802/26025705287_d0e1539e41.jpg",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157688947368050",
    beschreibung: "Training und Spaß beim Skischleifen der Skiabteilung.",
  },
];

export default function GaleriePage() {
  return (
    <>
      <Navbar current="galerie" />
      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">

        {/* Header */}
        <div>
          <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Fotogalerie</h1>
          <p className="font-body-lg text-secondary max-w-2xl">
            Bilder aus dem Vereinsleben des Sport Club Unna e.V. — Freizeiten, Veranstaltungen und Sport.
          </p>
        </div>

        {/* Album-Grid */}
        <section>
          <p className="font-label-bold text-primary uppercase tracking-wider text-[10px] mb-md">Fotoalben</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {alben.map((album) => (
              <a
                key={album.flickrUrl}
                href={album.flickrUrl}
                target="_blank"
                rel="noopener"
                className="group bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Cover-Bild */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={album.coverUrl}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Foto-Anzahl Badge */}
                  <div className="absolute bottom-sm right-sm bg-black/60 text-white font-label-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">photo_library</span>
                    {album.fotoAnzahl} Fotos
                  </div>
                </div>

                {/* Info */}
                <div className="p-md flex flex-col flex-1">
                  <p className="text-[10px] font-label-bold uppercase tracking-wider text-secondary mb-xs">{album.date}</p>
                  <h3 className="font-extrabold text-on-background text-base leading-snug mb-xs">{album.title}</h3>
                  {album.beschreibung && (
                    <p className="text-sm text-secondary font-body-md leading-relaxed flex-1">{album.beschreibung}</p>
                  )}
                  <div className="mt-md pt-md border-t border-surface-container-high flex items-center gap-xs text-primary font-label-bold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    Album auf Flickr ansehen
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Alle Alben CTA */}
        <section className="bg-primary text-on-primary rounded-xl p-md shadow-ambient relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[180px]">photo_library</span>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md">
            <div>
              <p className="font-label-bold text-[10px] uppercase tracking-widest opacity-80 mb-xs">Vollständiges Fotoarchiv</p>
              <h2 className="font-headline-lg text-on-primary">Alle Alben auf Flickr</h2>
              <p className="font-body-md opacity-85 mt-xs">
                Skifreizeiten, Sommerfeste, Wandertouren und mehr — das komplette Vereinsarchiv.
              </p>
            </div>
            <a
              href="https://www.flickr.com/photos/148750664@N03/albums"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-xs bg-on-primary text-primary font-label-bold text-xs uppercase px-5 py-3 rounded hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Zur Flickr-Galerie
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
