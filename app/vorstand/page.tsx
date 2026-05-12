import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vorstand",
};

type VorstandMember = {
  role: string;
  name: string;
  initials?: string;
  photo?: string;
  address?: string;
  phone?: string;
  mobile?: string;
  fax?: string;
  email: string;
};

const members: VorstandMember[] = [
  {
    role: "1. Vorsitzender",
    name: "Erwin Mittmann",
    photo: "/vorstand/erwin-mittmann.jpg",
    address: "Peukinger Weg 4, 59423 Unna",
    phone: "02303 / 21960",
    email: "erwin.mittmann@scunna.de",
  },
  {
    role: "2. Vorsitzender",
    name: "Matthias Fischer",
    initials: "MF",
    email: "matthias.fischer@scunna.de",
  },
  {
    role: "Finanzen",
    name: "Anne Hentrich",
    photo: "/vorstand/anne-hentrich.jpg",
    address: "Stralsunder Straße 63, 59427 Unna",
    phone: "02303 / 538150",
    mobile: "0152 / 24822743",
    email: "anne.hentrich@scunna.de",
  },
  {
    role: "Schriftführer",
    name: "Nils Holt",
    initials: "NH",
    email: "nils.holt@scunna.de",
  },
  {
    role: "Ski Sport",
    name: "Rainer Nordhaus",
    photo: "/vorstand/rainer-nordhaus.jpg",
    address: "Augustin-Wibbelt-Str. 27, 59423 Unna",
    phone: "0171 7719531",
    email: "rainer.nordhaus@scunna.de",
  },
  {
    role: "Badminton",
    name: "Ingo Filbrandt",
    photo: "/vorstand/ingo-filbrandt.jpg",
    address: "Im Winkel 3a, 59174 Kamen",
    phone: "02307 / 967931",
    mobile: "0174 / 4116177",
    fax: "03212 / 1361080",
    email: "ingo.filbrandt@scunna.de",
  },
  {
    role: "Jugend",
    name: "Luke Colin Finke",
    initials: "LF",
    email: "like.finke@scunna.de",
  },
  {
    role: "Allgemeinsport / Veranstaltungen",
    name: "Oliver Knieling",
    photo: "/vorstand/oliver-knieling.jpg",
    phone: "02303 / 63298",
    email: "oliver.knieling@scunna.de",
  },
  {
    role: "Presse",
    name: "Rolf Stüwe",
    photo: "/vorstand/rolf-stuewe.jpg",
    address: "Beethovenweg 4, 59439 Holzwickede",
    phone: "02301 / 9450938",
    email: "rolf.stuewe@scunna.de",
  },
  {
    role: "Soziales",
    name: "Sylvia Oberwörder",
    photo: "/vorstand/sylvia-oberwoerder.jpg",
    email: "sylvia.oberwoerder@scunna.de",
  },
];

export default function VorstandPage() {
  return (
    <>
      <Navbar current="vorstand" />

      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">
        <section>
          <div className="mb-lg">
            <h1 className="font-display-xl text-display-xl text-on-background mb-sm">Der Vorstand des Ski Clubs</h1>
            <p className="font-body-lg text-secondary max-w-2xl">
              10 engagierte Vorstandsmitglieder leiten ehrenamtlich den Sport Club Unna e.V. Hier finden Sie Aufgabenbereiche, Anschriften, Telefonnummern und E-Mail-Adressen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {members.map((m) => (
              <div
                key={m.email}
                className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient shadow-ambient-hover transition-all"
              >
                <div className="h-48 overflow-hidden bg-surface-container-high relative">
                  {m.photo ? (
                    <Image src={m.photo} alt={m.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-5xl font-extrabold text-primary/30">{m.initials}</span>
                    </div>
                  )}
                </div>
                <div className="p-md">
                  <p className="text-[10px] font-label-bold text-primary uppercase tracking-wider mb-1">{m.role}</p>
                  <h3 className="font-headline-md text-base font-extrabold text-on-background leading-tight">{m.name}</h3>
                  {m.address && (
                    <div className="text-xs text-secondary flex items-start gap-1 mt-2">
                      <span className="material-symbols-outlined text-xs mt-0.5">location_on</span>
                      <span>{m.address}</span>
                    </div>
                  )}
                  {m.phone && (
                    <div className="text-xs text-secondary flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-xs">phone</span>
                      <span>{m.phone}</span>
                    </div>
                  )}
                  {m.mobile && (
                    <div className="text-xs text-secondary flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-xs">smartphone</span>
                      <span>{m.mobile}</span>
                    </div>
                  )}
                  {m.fax && (
                    <div className="text-xs text-secondary flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-xs">print</span>
                      <span>{m.fax}</span>
                    </div>
                  )}
                  <a
                    href={`mailto:${m.email}`}
                    className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1 mt-2"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    <span className="break-all">{m.email}</span>
                  </a>
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
