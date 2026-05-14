export type GalerieAlbum = {
  slug: string;
  title: string;
  date: string;
  fotoAnzahl: number;
  coverUrl: string;
  beschreibung?: string;
  flickrUrl: string;
  // _z.jpg (640px) URLs — Lightbox zeigt _b.jpg (1024px), wird per replace abgeleitet
  fotos: string[];
};

// Foto-URLs: live.staticflickr.com/{server}/{id}_{secret}_z.jpg
// Lightbox-Größe (_b.jpg) wird in der Komponente per String-Replace abgeleitet
const album1Fotos = [
  "https://live.staticflickr.com/4817/46285072502_5161d818fd_z.jpg",
  "https://live.staticflickr.com/4824/32463533208_acdabe91bc_z.jpg",
  "https://live.staticflickr.com/4828/45612207254_7daf1c2848_z.jpg",
  "https://live.staticflickr.com/4832/44518894610_4bbe090132_z.jpg",
  "https://live.staticflickr.com/4844/45612207694_eb72e0fc34_z.jpg",
  "https://live.staticflickr.com/4855/32463532958_ea09f7d676_z.jpg",
  "https://live.staticflickr.com/4858/32463533268_0cefc40e5c_z.jpg",
  "https://live.staticflickr.com/4859/46285066392_319fed6487_z.jpg",
  "https://live.staticflickr.com/4862/32463533078_f6c4d8547b_z.jpg",
  "https://live.staticflickr.com/4862/46285070882_a4468c52f8_z.jpg",
  "https://live.staticflickr.com/4865/45612207034_1431e5017b_z.jpg",
  "https://live.staticflickr.com/4865/46285066792_a013122865_z.jpg",
  "https://live.staticflickr.com/4869/46335580221_938e0d2a95_z.jpg",
  "https://live.staticflickr.com/4883/46335584861_89dcd5c1d3_z.jpg",
  "https://live.staticflickr.com/4884/46285066552_fb45d50506_z.jpg",
  "https://live.staticflickr.com/4888/32463537108_edd3dfd796_z.jpg",
  "https://live.staticflickr.com/4890/46285071742_38c8d2b006_z.jpg",
  "https://live.staticflickr.com/4899/45612208844_5c227c852d_z.jpg",
  "https://live.staticflickr.com/4900/45612207134_7e4899f90d_z.jpg",
  "https://live.staticflickr.com/4906/46335585871_166322228b_z.jpg",
  "https://live.staticflickr.com/4918/45612208224_a52c9d768b_z.jpg",
  "https://live.staticflickr.com/4918/46285070272_d916fdfbae_z.jpg",
];

const album2Fotos = [
  "https://live.staticflickr.com/1761/42515850445_63f3fb5b24_z.jpg",
  "https://live.staticflickr.com/1763/42703842964_377c31259f_z.jpg",
  "https://live.staticflickr.com/1768/41612398370_58a132235f_z.jpg",
  "https://live.staticflickr.com/1783/43372870742_d9694a496b_z.jpg",
  "https://live.staticflickr.com/1786/41612407560_fd3a971ea1_z.jpg",
  "https://live.staticflickr.com/1790/42703829954_0bc41a1d3e_z.jpg",
  "https://live.staticflickr.com/1801/41612396710_1096c57aeb_z.jpg",
  "https://live.staticflickr.com/1801/42703850564_9373c5c4b6_z.jpg",
  "https://live.staticflickr.com/1803/41612410450_32b721604c_z.jpg",
  "https://live.staticflickr.com/1805/43420346991_b52e1a22d1_z.jpg",
  "https://live.staticflickr.com/1806/29549785388_bc02ab9020_z.jpg",
  "https://live.staticflickr.com/1806/29549804628_4cd078fd48_z.jpg",
  "https://live.staticflickr.com/1807/29549801878_209617eafe_z.jpg",
  "https://live.staticflickr.com/1809/43372843662_8474fbe569_z.jpg",
  "https://live.staticflickr.com/1822/42515880585_be2a86e2cb_z.jpg",
  "https://live.staticflickr.com/1824/29549815418_f0bc92b057_z.jpg",
  "https://live.staticflickr.com/837/28550636067_b29a7b536a_z.jpg",
  "https://live.staticflickr.com/841/42703846684_bcc0cb8ee3_z.jpg",
  "https://live.staticflickr.com/920/43420315041_7a730ed96f_z.jpg",
];

const album3Fotos = [
  "https://live.staticflickr.com/4771/26025705387_8a2ce6fe14_z.jpg",
  "https://live.staticflickr.com/4773/26025706177_025eb540bf_z.jpg",
  "https://live.staticflickr.com/4777/39088529400_53a4c96289_z.jpg",
  "https://live.staticflickr.com/4783/39088529620_c4db28924f_z.jpg",
  "https://live.staticflickr.com/784/26025705997_e0f33f5476_z.jpg",
  "https://live.staticflickr.com/786/39088529240_af3c0ab597_z.jpg",
  "https://live.staticflickr.com/802/26025705287_d0e1539e41_z.jpg",
  "https://live.staticflickr.com/803/26025705617_57e1221b09_z.jpg",
  "https://live.staticflickr.com/812/39088528980_48c2847909_z.jpg",
  "https://live.staticflickr.com/817/39088528700_86417434ff_z.jpg",
];

export const allAlben: GalerieAlbum[] = [
  {
    slug: "skifoan-2018",
    title: "\"Los geht's Skifoan\" 2018",
    date: "November 2018",
    fotoAnzahl: album1Fotos.length,
    coverUrl: "https://live.staticflickr.com/4859/46285066392_319fed6487_z.jpg",
    beschreibung: "Eindrücke von der Skifreizeit des Ski-Clubs Unna 2018.",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157674561357557",
    fotos: album1Fotos,
  },
  {
    slug: "sommerfest-2018",
    title: "Sommerfest 2018",
    date: "Sommer 2018",
    fotoAnzahl: album2Fotos.length,
    coverUrl: "https://live.staticflickr.com/1822/42515880585_be2a86e2cb_z.jpg",
    beschreibung: "Sommerfest im Bornekampbad — Spaß, Sport und Geselligkeit.",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157671196011278",
    fotos: album2Fotos,
  },
  {
    slug: "skischleifen-2017",
    title: "Skischleifen 2017",
    date: "November 2017",
    fotoAnzahl: album3Fotos.length,
    coverUrl: "https://live.staticflickr.com/802/26025705287_d0e1539e41_z.jpg",
    beschreibung: "Training und Spaß beim Skischleifen der Skiabteilung.",
    flickrUrl: "https://www.flickr.com/photos/148750664@N03/albums/72157688947368050",
    fotos: album3Fotos,
  },
];

export function getAlbumBySlug(slug: string): GalerieAlbum | undefined {
  return allAlben.find((a) => a.slug === slug);
}
