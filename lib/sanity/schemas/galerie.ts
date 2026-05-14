// Sanity-Schema für Galerie-Alben
// Einbinden in sanity.config.ts sobald das Studio eingerichtet ist
export const galerieSchema = {
  name: "galerie",
  title: "Galerie-Album",
  type: "document",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "datum",
      title: "Datum",
      type: "date",
      options: { dateFormat: "DD.MM.YYYY" },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
      rows: 3,
    },
    {
      name: "titelbild",
      title: "Titelbild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "flickrLink",
      title: "Flickr-Album-Link",
      type: "url",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "fotoAnzahl",
      title: "Anzahl Fotos",
      type: "number",
    },
  ],
  preview: {
    select: { title: "titel", subtitle: "datum", media: "titelbild" },
  },
  orderings: [
    {
      title: "Datum, neueste zuerst",
      name: "datumDesc",
      by: [{ field: "datum", direction: "desc" }],
    },
  ],
};
