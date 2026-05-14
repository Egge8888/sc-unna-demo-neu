import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalerieAlbumClient from "@/components/GalerieAlbumClient";
import { allAlben, getAlbumBySlug } from "@/lib/galerie-data";

export function generateStaticParams() {
  return allAlben.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  return { title: album ? album.title : "Album" };
}

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  return (
    <>
      <Navbar current="galerie" />
      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-xs text-sm text-secondary font-body-md">
          <Link href="/galerie" className="hover:text-primary transition-colors flex items-center gap-xs">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Fotogalerie
          </Link>
          <span>/</span>
          <span className="text-on-background">{album.title}</span>
        </nav>

        {/* Header */}
        <div>
          <h1 className="font-display-xl text-display-xl text-on-background mb-xs">{album.title}</h1>
          <div className="flex items-center gap-md flex-wrap">
            <span className="text-secondary font-body-md text-sm">{album.date}</span>
            <span className="flex items-center gap-xs text-secondary font-body-md text-sm">
              <span className="material-symbols-outlined text-sm">photo_library</span>
              {album.fotoAnzahl} Fotos
            </span>
            {album.beschreibung && (
              <span className="text-secondary font-body-md text-sm">{album.beschreibung}</span>
            )}
          </div>
        </div>

        {/* Hinweis Lightbox */}
        <p className="text-xs text-secondary font-body-md flex items-center gap-xs">
          <span className="material-symbols-outlined text-xs">touch_app</span>
          Foto anklicken zum Vergrößern · Pfeiltasten oder Klick zum Navigieren
        </p>

        {/* Foto-Grid + Lightbox */}
        <GalerieAlbumClient fotos={album.fotos} title={album.title} />

        {/* Flickr-Link */}
        <div className="flex justify-end">
          <a
            href={album.flickrUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-xs text-secondary hover:text-primary font-label-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            Original-Album auf Flickr
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
