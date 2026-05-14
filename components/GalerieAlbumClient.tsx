"use client";

import { useState, useEffect, useCallback } from "react";

type Props = { fotos: string[]; title: string };

export default function GalerieAlbumClient({ fotos, title }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i !== null ? (i - 1 + fotos.length) % fotos.length : null)),
    [fotos.length],
  );
  const next = useCallback(
    () => setSelected((i) => (i !== null ? (i + 1) % fotos.length : null)),
    [fotos.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, close, prev, next]);

  // Lightbox shows _b (1024px) — grid shows _z (640px) from the data
  const bigUrl = (url: string) => url.replace("_z.jpg", "_b.jpg");

  return (
    <>
      {/* Foto-Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-sm">
        {fotos.map((url, i) => (
          <button
            key={url}
            onClick={() => setSelected(i)}
            className="aspect-square overflow-hidden rounded-lg shadow-ambient group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Foto ${i + 1} von ${fotos.length} vergrößern`}
          >
            <img
              src={url}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${selected + 1} von ${fotos.length}: ${title}`}
        >
          {/* Zähler */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 font-label-bold text-sm select-none pointer-events-none">
            {selected + 1} / {fotos.length}
          </div>

          {/* Schließen */}
          <button
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={close}
            aria-label="Schließen"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Zurück */}
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Vorheriges Foto"
          >
            <span className="material-symbols-outlined text-5xl">chevron_left</span>
          </button>

          {/* Bild */}
          <img
            src={bigUrl(fotos[selected])}
            alt={`Foto ${selected + 1}`}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Weiter */}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nächstes Foto"
          >
            <span className="material-symbols-outlined text-5xl">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}
