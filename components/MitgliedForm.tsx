"use client";

import { useState } from "react";

// ── Daten aus PDFs ───────────────────────────────────────────────────────────

const BEITRAEGE = [
  { id: "einzeln",    label: "Einzelmitglied (über 18 Jahre)",                 value: "50,00 €" },
  { id: "ehepaar",    label: "Ehepaar / Lebensgemeinschaft",                    value: "75,00 €" },
  { id: "familie",    label: "Familie (inkl. Kinder bis 18 J.)",               value: "85,00 €" },
  { id: "kind",       label: "Kind / Jugendliche (bis 18 Jahre)",              value: "35,00 €" },
  { id: "ausbildung", label: "Familienangehörige in Ausbildung (18–27 J.)",    value: "30,00 €" },
];

const SPORTANGEBOTE = [
  { id: "ski",             label: "Ski / Wintersport",  icon: "downhill_skiing",  badge: "Abteilung" },
  { id: "badminton",       label: "Badminton",           icon: "sports_tennis",    badge: "Abteilung" },
  { id: "radfahren",       label: "Radfahren",           icon: "directions_bike",  badge: null },
  { id: "yoga",            label: "Yoga",                icon: "self_improvement", badge: null },
  { id: "pilates",         label: "Pilates",             icon: "fitness_center",   badge: null },
  { id: "wassergymnastik", label: "Wassergymnastik",     icon: "pool",             badge: null },
  { id: "wandern",         label: "Wandern",             icon: "hiking",           badge: null },
];

const FREIZEITEN = [
  {
    id: "skifreizeit-zell-2027",
    label: "Skifreizeit Zell am See – Jan. 2027",
    datum: "09. – 16. Januar 2027",
    ort: "Sportresort Alpenblick, Zell am See / Kaprun",
    anreise: "Eigene Anreise",
    preise: [
      { label: "DZ inkl. Skipass (6 Tage)",         value: "1.440 € p.P." },
      { label: "DZ ohne Skipass",                    value: "1.010 € p.P." },
      { label: "DZ mit Wanderpass 3in8",             value: "1.120 € p.P." },
      { label: "EZ-Zuschlag",                        value: "+ 112 €" },
    ],
    kinderpreise: "0–2 J.: 100 € · 3–5 J.: 304 € · 6–11 J.: 720 € · 12–14 J.: 1.014 €",
    anzahlung: "200 € / Person",
    anmeldeschluss: "30. November 2026",
    zimmerTypen: ["DZ", "EZ", "Appartement"],
    hasBus: false,
  },
  {
    id: "skifreizeit-st-ulrich-2027",
    label: "Bus-Skifreizeit St. Ulrich – Jan. 2027",
    datum: "16. – 23. Januar 2027",
    ort: "Hotel Rodes, St. Ulrich im Grödnertal (Südtirol)",
    anreise: "Busanreise ab Unna, Parkplatz AOK – Abfahrt 15.01.2027 um 21:00 Uhr",
    preise: [
      { label: "DZ Busanreise",                     value: "1.265 € p.P." },
      { label: "DZ Busanreise (ab Jg. 1961)",       value: "1.225 € p.P." },
      { label: "EZ Busanreise",                     value: "1.440 € p.P." },
      { label: "EZ Busanreise (ab Jg. 1961)",       value: "1.400 € p.P." },
    ],
    kinderpreise: null,
    anzahlung: "200 € / Person",
    anmeldeschluss: "—",
    zimmerTypen: ["DZ", "EZ"],
    hasBus: true,
  },
  {
    id: "osterfreizeit-zell-2027",
    label: "Osterfreizeit Zell am See – März/April 2027",
    datum: "27. März – 3. April 2027",
    ort: "Sportresort Alpenblick, Zell am See",
    anreise: "Eigene Anreise",
    preise: [
      { label: "DZ inkl. Skipass (5 Tage)",         value: "1.190 € p.P." },
      { label: "EZ",                                 value: "1.310 € p.P." },
    ],
    kinderpreise: "0–2 J.: 100 € · 3–5 J.: 240 € · 6–11 J.: 400 € · 12–14 J.: 640 €",
    anzahlung: "200 € / Person",
    anmeldeschluss: "—",
    zimmerTypen: ["DZ", "EZ", "Appartement"],
    hasBus: false,
  },
  {
    id: "sommerfreizeit-zell-2026",
    label: "Sommerfreizeit Zell am See – Juni/Juli 2026",
    datum: "28. Juni – 5. Juli 2026",
    ort: "Sportresort Alpenblick, Zell am See",
    anreise: "Eigene Anreise",
    preise: [],
    kinderpreise: null,
    anzahlung: "—",
    anmeldeschluss: "Letzte Plätze!",
    zimmerTypen: ["DZ", "EZ"],
    hasBus: false,
  },
  {
    id: "sonstiges",
    label: "Sonstiges / Andere Aktivität",
    datum: "—",
    ort: "—",
    anreise: "—",
    preise: [],
    kinderpreise: null,
    anzahlung: "—",
    anmeldeschluss: "—",
    zimmerTypen: [],
    hasBus: false,
  },
];

// ── Styles ────────────────────────────────────────────────────────────────────

const inputClass =
  "w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-md py-sm text-on-background font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";

const labelClass = "block font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-xs";

// ── Hilfskomponenten ──────────────────────────────────────────────────────────

function SectionHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-sm mb-lg">
      <span
        className="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-0.5"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <div>
        <h2 className="font-headline-lg text-headline-lg text-on-background">{title}</h2>
        {subtitle && <p className="text-sm text-secondary mt-xs">{subtitle}</p>}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-secondary mt-xs">{hint}</p>}
    </div>
  );
}

// ── Hauptkomponente ───────────────────────────────────────────────────────────

type FormData = {
  // Kontakt (immer)
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  // Mitglied
  geburtsdatum: string;
  strasse: string;
  plz: string;
  ort: string;
  sportangebote: string[];
  beitragsart: string;
  // Freizeit
  freizeit: string;
  zimmertyp: string;
  personenanzahl: string;
  kinderInfo: string;
  anmerkungen: string;
  // SEPA
  iban: string;
  kreditinstitut: string;
  kontoinhaber: string;
  abbuchungAb: string;
  // Einwilligungen
  sepaMandat: boolean;
  satzung: boolean;
  datenschutz: boolean;
  bildrechte: boolean;
};

const INITIAL: FormData = {
  vorname: "", nachname: "", email: "", telefon: "",
  geburtsdatum: "", strasse: "", plz: "", ort: "",
  sportangebote: [], beitragsart: "",
  freizeit: "", zimmertyp: "", personenanzahl: "1", kinderInfo: "", anmerkungen: "",
  iban: "", kreditinstitut: "", kontoinhaber: "", abbuchungAb: "",
  sepaMandat: false, satzung: false, datenschutz: false, bildrechte: false,
};

export default function MitgliedForm() {
  const [wantMitglied, setWantMitglied] = useState(true);
  const [wantFreizeit, setWantFreizeit] = useState(false);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  function toggleSport(id: string) {
    set(
      "sportangebote",
      form.sportangebote.includes(id)
        ? form.sportangebote.filter((s) => s !== id)
        : [...form.sportangebote, id]
    );
  }

  function toggleWant(which: "mitglied" | "freizeit") {
    if (which === "mitglied") {
      if (wantMitglied && !wantFreizeit) return; // mind. eines aktiv
      setWantMitglied((v) => !v);
    } else {
      if (wantFreizeit && !wantMitglied) return;
      setWantFreizeit((v) => !v);
    }
  }

  const selectedFreizeit = FREIZEITEN.find((f) => f.id === form.freizeit);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!wantMitglied && !wantFreizeit) {
      setErrorMsg("Bitte wähle mindestens eine Option aus.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/mitglied-werden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wantMitglied, wantFreizeit, ...form }),
      });
      const json = await res.json();
      if (json.success) setStatus("success");
      else { setStatus("error"); setErrorMsg(json.error || "Unbekannter Fehler."); }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte später erneut versuchen.");
    }
  }

  const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

  // ── Erfolg ────────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-lg shadow-ambient text-center space-y-md max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-green-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Vielen Dank!</h2>
          <p className="font-body-lg text-secondary">
            Deine Anfrage ist eingegangen, {form.vorname}. Wir melden uns in Kürze per E-Mail.
          </p>
        </div>
        <div className="bg-surface-container rounded-xl p-md text-left space-y-xs text-sm">
          <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-sm">Zusammenfassung</p>
          <p><span className="text-secondary">Name:</span> <strong>{form.vorname} {form.nachname}</strong></p>
          <p><span className="text-secondary">E-Mail:</span> {form.email}</p>
          {wantMitglied && form.beitragsart && (
            <p><span className="text-secondary">Beitragsart:</span> {BEITRAEGE.find(b => b.id === form.beitragsart)?.label}</p>
          )}
          {wantFreizeit && form.freizeit && (
            <p><span className="text-secondary">Freizeit:</span> {selectedFreizeit?.label}</p>
          )}
        </div>
        <p className="text-xs text-secondary">
          Fragen? Schreib uns:{" "}
          <a href="mailto:info@scunna.de" className="text-primary hover:underline font-label-bold">info@scunna.de</a>
        </p>
      </div>
    );
  }

  // ── Formular ──────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-lg">

      {/* ── Was möchtest du tun? ──────────────────────────────────────────── */}
      <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-md">
          Was möchtest du tun? <span className="text-primary">(Mehrfachauswahl möglich)</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          {[
            {
              which: "mitglied" as const,
              active: wantMitglied,
              icon: "group_add",
              title: "Vereinsmitglied werden",
              desc: "Mitgliedsantrag stellen, Sportangebot wählen, Beitrag per SEPA.",
            },
            {
              which: "freizeit" as const,
              active: wantFreizeit,
              icon: "luggage",
              title: "Freizeit anmelden",
              desc: "Skifreizeit, Osterfreizeit oder Sommerfreizeit buchen — unabhängig von Mitgliedschaft.",
            },
          ].map(({ which, active, icon, title, desc }) => (
            <button
              key={which}
              type="button"
              onClick={() => toggleWant(which)}
              className={`flex items-start gap-sm p-md rounded-xl border-2 text-left transition-colors ${
                active
                  ? "border-primary bg-primary/5"
                  : "border-surface-container-highest bg-surface-container hover:border-primary/40"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${active ? "bg-primary" : "bg-surface-container-highest"}`}>
                {active ? (
                  <span className="material-symbols-outlined text-on-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                ) : (
                  <span className="material-symbols-outlined text-secondary text-base">{icon}</span>
                )}
              </div>
              <div>
                <p className={`font-extrabold text-sm leading-snug mb-xs ${active ? "text-primary" : "text-on-background"}`}>{title}</p>
                <p className="text-xs text-secondary leading-relaxed">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ══ Sektion 1: Vereinsmitgliedschaft ════════════════════════════════ */}
      {wantMitglied && (
        <section className="space-y-md">
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
            <SectionHeader
              icon="group_add"
              title="Vereinsmitgliedschaft"
              subtitle="Bitte alle Felder ausfüllen. Die Kündigung ist 3 Monate vor Jahresende möglich."
            />

            {/* Beitragssätze Info-Box */}
            <div className="bg-surface-container rounded-xl p-md mb-lg">
              <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-sm">Mitgliedsbeiträge (jährlich)</p>
              <div className="divide-y divide-surface-container-highest">
                {BEITRAEGE.map((b) => (
                  <div key={b.id} className="flex items-center justify-between py-xs">
                    <span className="text-sm text-secondary">{b.label}</span>
                    <span className="font-extrabold text-on-background text-sm">{b.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Persönliche Daten */}
            <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-md">Persönliche Daten</p>
            <div className="space-y-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <Field label="Vorname(n)" required>
                  <input
                    type="text" autoComplete="given-name"
                    value={form.vorname} onChange={(e) => set("vorname", e.target.value)}
                    required={wantMitglied} className={inputClass} placeholder="Max"
                  />
                </Field>
                <Field label="Nachname" required>
                  <input
                    type="text" autoComplete="family-name"
                    value={form.nachname} onChange={(e) => set("nachname", e.target.value)}
                    required={wantMitglied} className={inputClass} placeholder="Mustermann"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <Field label="Geburtsdatum" required>
                  <input
                    type="date"
                    value={form.geburtsdatum} onChange={(e) => set("geburtsdatum", e.target.value)}
                    required={wantMitglied} className={inputClass}
                  />
                </Field>
                <Field label="Telefon">
                  <input
                    type="tel" autoComplete="tel"
                    value={form.telefon} onChange={(e) => set("telefon", e.target.value)}
                    className={inputClass} placeholder="02303 / 12345"
                  />
                </Field>
              </div>

              <Field label="E-Mail-Adresse (für Newsletter)" required>
                <input
                  type="email" autoComplete="email"
                  value={form.email} onChange={(e) => set("email", e.target.value)}
                  required={wantMitglied} className={inputClass} placeholder="max@beispiel.de"
                />
              </Field>

              <Field label="Straße und Hausnummer" required>
                <input
                  type="text" autoComplete="street-address"
                  value={form.strasse} onChange={(e) => set("strasse", e.target.value)}
                  required={wantMitglied} className={inputClass} placeholder="Musterstraße 12"
                />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                <Field label="PLZ" required>
                  <input
                    type="text" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5}
                    value={form.plz} onChange={(e) => set("plz", e.target.value)}
                    required={wantMitglied} className={inputClass} placeholder="59423"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Ort" required>
                    <input
                      type="text" autoComplete="address-level2"
                      value={form.ort} onChange={(e) => set("ort", e.target.value)}
                      required={wantMitglied} className={inputClass} placeholder="Unna"
                    />
                  </Field>
                </div>
              </div>

              {/* Beitragsart */}
              <div>
                <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-sm">
                  Beitragsart <span className="text-primary">*</span>
                </p>
                <div className="space-y-xs">
                  {BEITRAEGE.map((b) => (
                    <label
                      key={b.id}
                      className={`flex items-center justify-between gap-sm p-sm rounded-xl border cursor-pointer transition-colors ${
                        form.beitragsart === b.id
                          ? "border-primary bg-primary/5"
                          : "border-surface-container-highest bg-surface-container hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center gap-sm">
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${form.beitragsart === b.id ? "border-primary" : "border-surface-container-highest"}`}>
                          {form.beitragsart === b.id && <span className="w-2 h-2 rounded-full bg-primary block" />}
                        </span>
                        <input type="radio" name="beitragsart" value={b.id} required={wantMitglied}
                          checked={form.beitragsart === b.id}
                          onChange={() => set("beitragsart", b.id)}
                          className="sr-only"
                        />
                        <span className={`text-sm ${form.beitragsart === b.id ? "text-primary font-label-bold" : "text-on-background"}`}>{b.label}</span>
                      </div>
                      <span className={`font-extrabold text-sm flex-shrink-0 ${form.beitragsart === b.id ? "text-primary" : "text-secondary"}`}>{b.value}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sportangebot */}
              <div>
                <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-xs">Sportangebot (Mehrfachauswahl)</p>
                <p className="text-xs text-secondary mb-sm">Für welche Angebote interessierst du dich?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
                  {SPORTANGEBOTE.map((s) => {
                    const checked = form.sportangebote.includes(s.id);
                    return (
                      <label
                        key={s.id}
                        className={`flex items-center gap-sm px-sm py-xs rounded-xl border cursor-pointer transition-colors ${
                          checked ? "border-primary bg-primary/5" : "border-surface-container-highest bg-surface-container hover:border-primary/40"
                        }`}
                      >
                        <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleSport(s.id)} />
                        <span className={`material-symbols-outlined text-lg flex-shrink-0 ${checked ? "text-primary" : "text-secondary"}`}>{s.icon}</span>
                        <span className={`text-sm flex-1 ${checked ? "text-primary font-label-bold" : "text-on-background"}`}>{s.label}</span>
                        {s.badge && (
                          <span className="text-[9px] font-label-bold uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">{s.badge}</span>
                        )}
                        {checked && (
                          <span className="material-symbols-outlined text-primary text-base flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ Sektion 2: Freizeit-Anmeldung ═══════════════════════════════════ */}
      {wantFreizeit && (
        <section className="space-y-md">
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
            <SectionHeader
              icon="luggage"
              title="Freizeit-Anmeldung"
              subtitle="Für eine Freizeit anmelden — unabhängig von der Vereinsmitgliedschaft. Alle Freizeiten erfordern mind. 1 Jahr SCU-Mitgliedschaft."
            />

            {/* Kontakt (falls kein Mitglied-Abschnitt ausgefüllt) */}
            {!wantMitglied && (
              <div className="space-y-md mb-lg">
                <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-sm">Deine Kontaktdaten</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                  <Field label="Vorname" required>
                    <input type="text" value={form.vorname} onChange={(e) => set("vorname", e.target.value)}
                      required className={inputClass} placeholder="Max" />
                  </Field>
                  <Field label="Nachname" required>
                    <input type="text" value={form.nachname} onChange={(e) => set("nachname", e.target.value)}
                      required className={inputClass} placeholder="Mustermann" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                  <Field label="E-Mail" required>
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                      required className={inputClass} placeholder="max@beispiel.de" />
                  </Field>
                  <Field label="Telefon">
                    <input type="tel" value={form.telefon} onChange={(e) => set("telefon", e.target.value)}
                      className={inputClass} placeholder="02303 / 12345" />
                  </Field>
                </div>
              </div>
            )}

            {/* Freizeit Auswahl */}
            <Field label="Freizeit auswählen" required>
              <select
                value={form.freizeit}
                onChange={(e) => { set("freizeit", e.target.value); set("zimmertyp", ""); }}
                required={wantFreizeit}
                className={inputClass}
              >
                <option value="">— Bitte wählen —</option>
                {FREIZEITEN.map((f) => (
                  <option key={f.id} value={f.id}>{f.label}</option>
                ))}
              </select>
            </Field>

            {/* Details basierend auf gewählter Freizeit */}
            {selectedFreizeit && (
              <div className="mt-lg space-y-md">
                {/* Info-Card */}
                <div className="bg-surface-container rounded-xl p-md">
                  <div className="flex items-start gap-sm mb-md">
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                    <div>
                      <p className="font-extrabold text-on-background text-sm">{selectedFreizeit.label}</p>
                      <p className="text-xs text-secondary">{selectedFreizeit.datum} · {selectedFreizeit.ort}</p>
                      <p className="text-xs text-secondary mt-xs">{selectedFreizeit.anreise}</p>
                    </div>
                  </div>
                  {selectedFreizeit.preise.length > 0 && (
                    <div className="divide-y divide-surface-container-highest">
                      {selectedFreizeit.preise.map((p) => (
                        <div key={p.label} className="flex items-center justify-between py-xs">
                          <span className="text-xs text-secondary">{p.label}</span>
                          <span className="font-extrabold text-sm text-on-background">{p.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedFreizeit.kinderpreise && (
                    <p className="text-xs text-secondary mt-sm pt-sm border-t border-surface-container-highest">
                      <span className="font-label-bold">Kinder (im Zimmer der Eltern):</span> {selectedFreizeit.kinderpreise}
                    </p>
                  )}
                  {selectedFreizeit.anzahlung !== "—" && (
                    <div className="mt-sm pt-sm border-t border-surface-container-highest flex items-center justify-between">
                      <span className="text-xs text-secondary">Anzahlung zur Platzsicherung</span>
                      <span className="font-extrabold text-primary text-sm">{selectedFreizeit.anzahlung}</span>
                    </div>
                  )}
                  {selectedFreizeit.anmeldeschluss !== "—" && (
                    <div className="flex items-center justify-between mt-xs">
                      <span className="text-xs text-secondary">Anmeldefrist</span>
                      <span className="font-label-bold text-sm text-on-background">{selectedFreizeit.anmeldeschluss}</span>
                    </div>
                  )}
                </div>

                {/* Zimmertyp */}
                {selectedFreizeit.zimmerTypen.length > 0 && (
                  <Field label="Zimmertyp" required>
                    <div className="flex flex-wrap gap-sm mt-xs">
                      {selectedFreizeit.zimmerTypen.map((z) => (
                        <label key={z} className={`flex items-center gap-xs px-md py-sm rounded-xl border cursor-pointer transition-colors ${form.zimmertyp === z ? "border-primary bg-primary/5" : "border-surface-container-highest bg-surface-container hover:border-primary/40"}`}>
                          <input type="radio" name="zimmertyp" value={z} required={wantFreizeit && selectedFreizeit.zimmerTypen.length > 0}
                            checked={form.zimmertyp === z} onChange={() => set("zimmertyp", z)} className="sr-only" />
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${form.zimmertyp === z ? "border-primary" : "border-surface-container-highest"}`}>
                            {form.zimmertyp === z && <span className="w-2 h-2 rounded-full bg-primary block" />}
                          </span>
                          <span className={`font-label-bold text-sm ${form.zimmertyp === z ? "text-primary" : "text-on-background"}`}>{z}</span>
                        </label>
                      ))}
                    </div>
                  </Field>
                )}

                {/* Anzahl Personen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                  <Field label="Anzahl Erwachsene" required>
                    <input type="number" min="1" max="10"
                      value={form.personenanzahl} onChange={(e) => set("personenanzahl", e.target.value)}
                      required={wantFreizeit} className={inputClass} />
                  </Field>
                  {(selectedFreizeit.kinderpreise) && (
                    <Field label="Kinder (Alter angeben)" hint="z.B. 1 Kind, 8 Jahre">
                      <input type="text"
                        value={form.kinderInfo} onChange={(e) => set("kinderInfo", e.target.value)}
                        className={inputClass} placeholder="z.B. 1 Kind, 8 Jahre" />
                    </Field>
                  )}
                </div>

                {/* Anmerkungen */}
                <Field label="Anmerkungen / besondere Wünsche">
                  <textarea
                    rows={3}
                    value={form.anmerkungen} onChange={(e) => set("anmerkungen", e.target.value)}
                    className={inputClass + " resize-none"} placeholder="z.B. Zimmerwunsch, Diätwünsche, Behindertengerechtes Zimmer…"
                  />
                </Field>

                {/* Anzahlungshinweis */}
                {selectedFreizeit.anzahlung !== "—" && (
                  <div className="flex items-start gap-sm bg-amber-50 border border-amber-200 rounded-xl p-sm">
                    <span className="material-symbols-outlined text-amber-600 text-base flex-shrink-0 mt-0.5">payments</span>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Anzahlung {selectedFreizeit.anzahlung}</strong> per Überweisung nach Anmeldebestätigung durch Rainer Nordhaus. Bei Absage nach der Anmeldefrist wird die Anzahlung nicht zurückgezahlt.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ══ Sektion 3: SEPA-Lastschrift ═════════════════════════════════════ */}
      {wantMitglied && (
        <section>
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
            <SectionHeader icon="account_balance" title="SEPA-Lastschriftmandat" />

            <div className="bg-surface-container rounded-xl p-md mb-lg text-sm space-y-xs">
              <p><span className="font-label-bold text-secondary text-[10px] uppercase tracking-wider block mb-xs">Zahlungsempfänger</span>Sport Club Unna e.V. · c/o Anne Hentrich · Stralsunder Str. 63 · 59427 Unna</p>
              <p className="pt-xs border-t border-surface-container-highest">
                <span className="font-label-bold text-secondary text-[10px] uppercase tracking-wider block mb-xs">Gläubiger-Identifikationsnummer</span>
                <span className="font-mono font-extrabold text-on-background tracking-wider">DE50SCU00000715414</span>
              </p>
              <p className="text-xs text-secondary pt-xs border-t border-surface-container-highest">
                Die Mandatsreferenz wird nach Aufnahme separat mitgeteilt. Jährliche Abbuchung.
              </p>
            </div>

            <div className="space-y-md">
              <Field label="IBAN" required hint="z.B. DE12 3456 7890 1234 5678 90">
                <input type="text" maxLength={34}
                  value={form.iban} onChange={(e) => set("iban", e.target.value.toUpperCase())}
                  required={wantMitglied} className={inputClass + " font-mono tracking-wider"} placeholder="DE00 0000 0000 0000 0000 00"
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <Field label="Kreditinstitut / Bankname" required>
                  <input type="text"
                    value={form.kreditinstitut} onChange={(e) => set("kreditinstitut", e.target.value)}
                    required={wantMitglied} className={inputClass} placeholder="Sparkasse Unna" />
                </Field>
                <Field label="Kontoinhaber (falls abweichend)" hint="Nur ausfüllen, wenn abweichend vom oben genannten Namen">
                  <input type="text"
                    value={form.kontoinhaber} onChange={(e) => set("kontoinhaber", e.target.value)}
                    className={inputClass} placeholder="Nur wenn abweichend" />
                </Field>
              </div>

              <Field label="Jährliche Abbuchung ab (Monat/Jahr)" hint="z.B. 01/2025">
                <input type="text"
                  value={form.abbuchungAb} onChange={(e) => set("abbuchungAb", e.target.value)}
                  className={inputClass} placeholder="01/2025" />
              </Field>
            </div>
          </div>
        </section>
      )}

      {/* ══ Sektion 4: Einwilligungen + Absenden ════════════════════════════ */}
      <section>
        <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient space-y-md">
          <SectionHeader icon="fact_check" title="Einwilligungen" />

          <div className="space-y-sm">
            {wantMitglied && (
              <label className="flex items-start gap-sm cursor-pointer group">
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${form.sepaMandat ? "bg-primary border-primary" : "border-surface-container-highest bg-surface-container"}`}>
                  {form.sepaMandat && <span className="material-symbols-outlined text-on-primary text-sm">check</span>}
                </div>
                <input type="checkbox" className="sr-only" required={wantMitglied}
                  checked={form.sepaMandat} onChange={(e) => set("sepaMandat", e.target.checked)} />
                <p className="text-sm text-secondary leading-relaxed">
                  Ich erteile dem Sport Club Unna e.V. ein SEPA-Lastschriftmandat zum jährlichen Einzug des Mitgliedsbeitrags von meinem Konto. Ich kann innerhalb von 8 Wochen ab Belastungsdatum Erstattung verlangen. <span className="text-primary">*</span>
                </p>
              </label>
            )}

            {wantMitglied && (
              <label className="flex items-start gap-sm cursor-pointer">
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${form.satzung ? "bg-primary border-primary" : "border-surface-container-highest bg-surface-container"}`}>
                  {form.satzung && <span className="material-symbols-outlined text-on-primary text-sm">check</span>}
                </div>
                <input type="checkbox" className="sr-only" required={wantMitglied}
                  checked={form.satzung} onChange={(e) => set("satzung", e.target.checked)} />
                <p className="text-sm text-secondary leading-relaxed">
                  Ich erkläre meinen Beitritt zum Sport Club Unna e.V. und erkenne die Satzung des Vereins an. Die Kündigung kann 3 Monate vor Jahresende ausgesprochen werden. <span className="text-primary">*</span>
                </p>
              </label>
            )}

            <label className="flex items-start gap-sm cursor-pointer">
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${form.datenschutz ? "bg-primary border-primary" : "border-surface-container-highest bg-surface-container"}`}>
                {form.datenschutz && <span className="material-symbols-outlined text-on-primary text-sm">check</span>}
              </div>
              <input type="checkbox" className="sr-only" required
                checked={form.datenschutz} onChange={(e) => set("datenschutz", e.target.checked)} />
              <p className="text-sm text-secondary leading-relaxed">
                Ich habe die{" "}
                <a href="/datenschutz" target="_blank" className="text-primary hover:underline font-label-bold">Datenschutzerklärung</a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten gemäß DSGVO zur Mitgliederverwaltung zu. <span className="text-primary">*</span>
              </p>
            </label>

            {wantMitglied && (
              <label className="flex items-start gap-sm cursor-pointer">
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${form.bildrechte ? "bg-primary border-primary" : "border-surface-container-highest bg-surface-container"}`}>
                  {form.bildrechte && <span className="material-symbols-outlined text-on-primary text-sm">check</span>}
                </div>
                <input type="checkbox" className="sr-only"
                  checked={form.bildrechte} onChange={(e) => set("bildrechte", e.target.checked)} />
                <p className="text-sm text-secondary leading-relaxed">
                  Ich bin damit einverstanden, dass bei SC Unna Veranstaltungen gemachte Fotos zum Zweck der Öffentlichkeitsarbeit auf www.scunna.de erscheinen dürfen. <span className="text-xs">(freiwillig)</span>
                </p>
              </label>
            )}
          </div>

          {/* Datum */}
          <div className="flex items-center gap-xs pt-sm border-t border-surface-container-high text-sm text-secondary">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Datum: <strong className="text-on-background ml-xs">{today}</strong>
          </div>

          {/* Fehler */}
          {status === "error" && (
            <div className="flex items-start gap-sm bg-red-50 border border-red-200 rounded-xl p-md">
              <span className="material-symbols-outlined text-red-600 text-xl flex-shrink-0">error</span>
              <p className="text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary text-on-primary font-label-bold uppercase tracking-wider py-md rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-sm text-sm"
          >
            {status === "loading" ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                Wird gesendet…
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                {wantMitglied && wantFreizeit
                  ? "Mitgliedsantrag + Freizeit absenden"
                  : wantMitglied
                  ? "Mitgliedsantrag absenden"
                  : "Freizeit-Anmeldung absenden"}
              </>
            )}
          </button>

          <p className="text-xs text-secondary text-center">* Pflichtfeld</p>
        </div>
      </section>
    </form>
  );
}
