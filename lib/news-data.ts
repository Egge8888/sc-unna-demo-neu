export type NewsItem =
  | ArticleItem
  | NewsletterItem;

export type ArticleItem = {
  type: "article";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string[];
  attachmentUrl?: string;
  attachmentLabel?: string;
};

export type NewsletterItem = {
  type: "newsletter";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  pdfUrl: string;
};

export const newsItems: NewsItem[] = [
  {
    type: "article",
    slug: "oster-skifreizeit-2026",
    title: "Oster-Skifreizeit 2026",
    date: "2026-04-22",
    excerpt: "Der SC Unna war wieder auf Skiern unterwegs – die diesjährige Oster-Skifreizeit war ein voller Erfolg. Alle Details findet ihr im Infobrief 26/1.",
    tags: ["Ski", "Freizeit"],
    content: [
      "Der Sport Club Unna war auch in diesem Jahr wieder mit einer Gruppe begeisterter Skifahrerinnen und Skifahrer auf Piste. Die Oster-Skifreizeit 2026 brachte Mitglieder für gemeinsame Tage in den Schnee.",
      "Alle Informationen zur Freizeit – Termin, Ort, Programm und Anmeldung – findet ihr im aktuellen Infobrief 26/1 vom 25. März 2026.",
    ],
  },
  {
    type: "newsletter",
    slug: "infobrief-2026-1",
    title: "Infobrief 26/1",
    date: "2026-03-25",
    excerpt: "Der erste Infobrief des Sport Club Unna nach der Fusion: Radeltermine, Zusammenkomm-Party, Saisoneröffnung, Bowling, Stadtmeisterschaften Badminton und mehr.",
    topics: [
      "Radeltermine",
      "Zusammenkomm-Party",
      "Saisoneröffnung",
      "Bowling",
      "Doppelkopfturnier",
      "Skifahren Winterberg",
      "Oster-Skifreizeit",
      "Osterfeuer",
      "Stadtmeisterschaften Badminton",
      "Ski- & Sommerfreizeiten",
    ],
    pdfUrl: "/downloads/newsletter/2026-1-infobrief.pdf",
  },
  {
    type: "article",
    slug: "aus-scu-und-bsc-wird-ein-verein",
    title: "Aus SCU und BSC wird ein Verein",
    date: "2026-02-23",
    excerpt: "Nach langer Vorplanung ist es nun soweit: Der Ski-Club Unna und der Badminton-Sport-Club Unna fusionieren zum 1. April 2026 zum Sport Club Unna e.V.",
    tags: ["Vereinsnews"],
    content: [
      "Nach langer Vorplanung ist es nun soweit: Der Ski-Club Unna (SCU) und der Badminton-Sport-Club Unna (BSC) schließen sich zusammen. Zum 1. April 2026 entsteht unter dem Namen Sport Club Unna e.V. ein gemeinsamer Verein.",
      "Für die Fusion war die Zustimmung der Mitglieder beider Vereine erforderlich. Die gemeinsame Jahreshauptversammlung fand am 17. März 2026 um 18:00 Uhr in der Neuen Schmiede auf dem Breitenbachgelände statt.",
      "Der Vorstand freut sich auf die neue gemeinsame Zukunft mit einem breiten Sportangebot – von Badminton und Ski über Radfahren, Yoga, Pilates und Wassergymnastik bis hin zu Wandern und Stammtisch.",
    ],
    attachmentUrl: "/downloads/newsletter/2026-02-einladung-jhv.pdf",
    attachmentLabel: "Einladung zur gemeinsamen JHV (PDF)",
  },
  {
    type: "newsletter",
    slug: "newsletter-2025-2",
    title: "Newsletter 2025/2",
    date: "2025-10-21",
    excerpt: "Neue Yoga-Trainerin, Badminton-Neuigkeiten, Bowlingabend, Skifreizeiten, Sommerfreizeit und alle wichtigen Termine.",
    topics: [
      "Neue Yoga-Trainerin",
      "Badminton",
      "Bowlingabend",
      "Skifreizeiten",
      "Sommerfreizeit",
      "Termine",
    ],
    pdfUrl: "/downloads/newsletter/2025-2-newsletter.pdf",
  },
  {
    type: "article",
    slug: "doppelkopf-turnier-2025",
    title: "Doppelkopf-Turnier",
    date: "2025-10-21",
    excerpt: "Am 15. November 2025 veranstaltet der Verein ein Doppelkopf-Turnier – offen für alle Mitglieder. Startgeld 5 €, Verpflegung vor Ort.",
    tags: ["Veranstaltung"],
    content: [
      "Der Sport Club Unna lädt zum Doppelkopf-Turnier ein! Am Samstag, 15. November 2025 von 11:00 bis 17:00 Uhr treffen sich Kartenspiel-Enthusiasten in der Iserlohner Str. 128 (Museum, Eingang hinter dem Innenhof).",
      "Das Startgeld von 5,– € wird vor Ort kassiert. Der Verein sorgt für Speisen und Getränke zu günstigen Preisen. Wer möchte, kann gerne Salate, Kuchen oder Kekse mitbringen.",
      "Anmeldung bei Lisa Schürmann: lisa-schuermann@gmx.de oder 015739051970.",
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return newsItems.find(
    (item): item is ArticleItem => item.type === "article" && item.slug === slug
  );
}
