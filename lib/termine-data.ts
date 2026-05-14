export type Termin = {
  id: string;
  title: string;
  startDate: string; // ISO YYYY-MM-DD
  endDate?: string;
  time?: string;
  location?: string;
  category: "ski" | "sommer" | "social" | "vereins" | "sport";
  description?: string;
  recurring?: boolean; // Dauereintrag ohne festes Datum — nie als "vergangen" markiert
};

export const allTermine: Termin[] = [
  {
    id: "radeltouren-samstags",
    title: "Radeltouren",
    startDate: "2099-01-01", // Dummy — wird nicht angezeigt (recurring: true)
    category: "sport",
    description: "Kurzfristige Ankündigung über WhatsApp — einfach beim Vorstand für den Verteiler melden.",
    recurring: true,
  },
  {
    id: "bowling-2025",
    title: "Bowling-Abend",
    startDate: "2025-10-11",
    category: "social",
    description: "Geselliger Bowling-Abend für Mitglieder. Anmeldung bei Rolf Stüwe.",
  },
  {
    id: "saisoneroffnung-2025",
    title: "Ski-Saisoneröffnung",
    startDate: "2025-11-08",
    location: "vor Intersport Leiendecker, Unna",
    category: "ski",
    description: "Traditionelle Eröffnung der Skisaison vor dem Sporthaus Leiendecker.",
  },
  {
    id: "doppelkopf-2025",
    title: "Doppelkopf-Turnier",
    startDate: "2025-11-15",
    time: "11:00 – 17:00 Uhr",
    location: "Iserlohner Str. 128, Unna",
    category: "social",
    description: "Kartenspielturnier für alle Mitglieder. Startgeld 5 €. Anmeldung bei Lisa Schürmann (015739051970).",
  },
  {
    id: "skifreizeit-zell-2026",
    title: "Skifreizeit Zell am See",
    startDate: "2026-01-03",
    endDate: "2026-01-10",
    location: "Zell am See / Kaprun, Österreich",
    category: "ski",
    description: "Familien- und Jedermann-Skisportfreizeit. Eigene Anreise.",
  },
  {
    id: "busfreizeit-stulrich-2026",
    title: "Bus-Skifreizeit St. Ulrich",
    startDate: "2026-01-10",
    endDate: "2026-01-17",
    location: "St. Ulrich im Grödnertal, Südtirol",
    category: "ski",
    description: "Organisierte Busfahrt ins Dolomiti Superski-Gebiet.",
  },
  {
    id: "jhv-2026",
    title: "Jahreshauptversammlung",
    startDate: "2026-03-17",
    time: "18:00 Uhr",
    location: "Neue Schmiede, Breitenbachgelände, Unna",
    category: "vereins",
    description: "Gemeinsame JHV von Ski-Club Unna und BSC Unna zur Abstimmung über die Fusion zum Sport Club Unna e.V.",
  },
  {
    id: "osterfreizeit-2026",
    title: "Oster-Skifreizeit Zell am See",
    startDate: "2026-03-28",
    endDate: "2026-04-04",
    location: "Zell am See / Kaprun, Österreich",
    category: "ski",
    description: "Osterfreizeit für die ganze Familie. Eigene Anreise.",
  },
  {
    id: "osterfeuer-2026",
    title: "Osterfeuer",
    startDate: "2026-04-05",
    category: "social",
    description: "Traditionelles Osterfeuer des Vereins.",
  },
  {
    id: "sommerfreizeit-zell-2026",
    title: "Sommerfreizeit Zell am See",
    startDate: "2026-06-28",
    endDate: "2026-07-05",
    location: "Zell am See, Österreich",
    category: "sommer",
    description: "Sportfreizeit am Zeller See — Wandern, Radfahren, Baden, Ausflüge. Eigene Anreise.",
  },
  {
    id: "skifreizeit-zell-2027",
    title: "Skifreizeit Zell am See 2027",
    startDate: "2027-01-09",
    endDate: "2027-01-16",
    location: "Zell am See / Kaprun, Österreich",
    category: "ski",
    description: "Familien- und Jedermann-Skisportfreizeit. Eigene Anreise. Schmittenhöhe & Kitzsteinhorn.",
  },
  {
    id: "busfreizeit-stulrich-2027",
    title: "Bus-Skifreizeit St. Ulrich 2027",
    startDate: "2027-01-16",
    endDate: "2027-01-23",
    location: "St. Ulrich im Grödnertal, Südtirol",
    category: "ski",
    description: "Organisierte Busfahrt — Dolomiti Superski mit über 1.200 km Pisten.",
  },
];

const CATEGORY_LABEL: Record<Termin["category"], string> = {
  ski:    "Ski / Wintersport",
  sommer: "Sommerfreizeit",
  social: "Gesellschaft",
  vereins:"Vereinsleben",
  sport:  "Sport",
};

const CATEGORY_COLOR: Record<Termin["category"], string> = {
  ski:    "bg-blue-50 text-blue-700",
  sommer: "bg-amber-50 text-amber-700",
  social: "bg-green-50 text-green-700",
  vereins:"bg-primary/10 text-primary",
  sport:  "bg-purple-50 text-purple-700",
};

export function categoryLabel(cat: Termin["category"]) { return CATEGORY_LABEL[cat]; }
export function categoryColor(cat: Termin["category"]) { return CATEGORY_COLOR[cat]; }

export function isPast(t: Termin): boolean {
  if (t.recurring) return false;
  const ref = t.endDate ?? t.startDate;
  return ref < "2026-05-14";
}

export function formatDateRange(t: Termin): string {
  const fmt = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
  if (t.endDate) {
    const s = new Date(t.startDate + "T00:00:00");
    const e = new Date(t.endDate + "T00:00:00");
    const sameYear = s.getFullYear() === e.getFullYear();
    const sameMonth = sameYear && s.getMonth() === e.getMonth();
    if (sameMonth) {
      return `${s.getDate()}. – ${e.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}`;
    }
    if (sameYear) {
      return `${s.toLocaleDateString("de-DE", { day: "numeric", month: "long" })} – ${fmt(t.endDate)}`;
    }
    return `${fmt(t.startDate)} – ${fmt(t.endDate)}`;
  }
  return fmt(t.startDate);
}
