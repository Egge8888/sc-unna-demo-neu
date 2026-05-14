import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allTermine, isPast, formatDateRange, categoryLabel, categoryColor } from "@/lib/termine-data";

export const metadata: Metadata = { title: "Termine" };

function DateBadge({ iso }: { iso: string }) {
  const d = new Date(iso + "T00:00:00");
  const day = d.toLocaleDateString("de-DE", { day: "2-digit" });
  const month = d.toLocaleDateString("de-DE", { month: "short" });
  const year = d.getFullYear();
  return (
    <div className="bg-surface-container-highest rounded-lg p-sm text-center min-w-[56px] flex-shrink-0">
      <span className="block font-extrabold text-primary text-lg leading-none">{day}</span>
      <span className="block text-secondary text-xs font-label-bold uppercase">{month}</span>
      <span className="block text-secondary text-[10px]">{year}</span>
    </div>
  );
}

function RecurringBadge() {
  return (
    <div className="bg-surface-container-highest rounded-lg p-sm text-center min-w-[56px] flex-shrink-0">
      <span className="material-symbols-outlined text-primary text-xl leading-none block">repeat</span>
      <span className="block text-secondary text-xs font-label-bold uppercase leading-tight mt-0.5">Sa.</span>
      <span className="block text-secondary text-[10px]">Bedarf</span>
    </div>
  );
}

export default function TerminePage() {
  const recurring = allTermine.filter((t) => t.recurring);
  const upcoming = allTermine.filter((t) => !isPast(t) && !t.recurring);
  const past = allTermine.filter((t) => isPast(t)).reverse();

  return (
    <>
      <Navbar current="termine" />
      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">

        <div>
          <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Termine & Jahresprogramm</h1>
          <p className="font-body-lg text-secondary max-w-2xl">
            Alle Veranstaltungen, Reisen und Vereinstermine des Sport Club Unna e.V. auf einen Blick.
          </p>
        </div>

        {/* Upcoming */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
            Kommende Termine
          </h2>

          {upcoming.length === 0 && (
            <p className="text-secondary font-body-md">Aktuell sind keine weiteren Termine eingetragen.</p>
          )}

          <div className="space-y-xs">
            {recurring.map((t) => (
              <div key={t.id} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex gap-md items-start">
                <RecurringBadge />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-sm flex-wrap mb-xs">
                    <span className={`text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColor(t.category)}`}>
                      {categoryLabel(t.category)}
                    </span>
                    <span className="text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-container text-secondary">
                      Dauereintrag
                    </span>
                  </div>
                  <h3 className="font-extrabold text-on-background text-base leading-snug">{t.title}</h3>
                  <p className="text-sm text-secondary font-body-md mt-0.5 flex items-center gap-xs">
                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                    Samstags bei Bedarf
                  </p>
                  <p className="text-sm text-secondary font-body-md mt-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-xs">chat</span>
                    Kurzfristige Ankündigung über WhatsApp — beim Vorstand für den Verteiler melden.
                  </p>
                </div>
              </div>
            ))}
            {upcoming.map((t) => (
              <div key={t.id} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient flex gap-md items-start">
                <DateBadge iso={t.startDate} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-sm flex-wrap mb-xs">
                    <span className={`text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColor(t.category)}`}>
                      {categoryLabel(t.category)}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-on-background text-base leading-snug">{t.title}</h3>
                  <p className="text-sm text-secondary font-body-md mt-0.5">{formatDateRange(t)}{t.time ? ` · ${t.time}` : ""}</p>
                  {t.location && (
                    <p className="text-xs text-secondary flex items-center gap-xs mt-1">
                      <span className="material-symbols-outlined text-xs">location_on</span>{t.location}
                    </p>
                  )}
                  {t.description && (
                    <p className="text-sm text-secondary font-body-md mt-sm leading-relaxed">{t.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-on-background flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary">history</span>
            Vergangene Termine
          </h2>
          <div className="space-y-xs">
            {past.map((t) => (
              <div key={t.id} className="bg-surface-container-low border border-surface-container-highest rounded-xl p-md flex gap-md items-start opacity-60">
                <DateBadge iso={t.startDate} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-sm flex-wrap mb-xs">
                    <span className="text-[10px] font-label-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-container text-secondary">
                      {categoryLabel(t.category)}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-on-background text-base leading-snug">{t.title}</h3>
                  <p className="text-sm text-secondary font-body-md mt-0.5">{formatDateRange(t)}{t.time ? ` · ${t.time}` : ""}</p>
                  {t.location && (
                    <p className="text-xs text-secondary flex items-center gap-xs mt-1">
                      <span className="material-symbols-outlined text-xs">location_on</span>{t.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
