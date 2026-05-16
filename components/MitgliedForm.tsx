"use client";

import { useState } from "react";

const SPORTANGEBOTE = [
  { id: "ski", label: "Ski / Wintersport", icon: "downhill_skiing" },
  { id: "badminton", label: "Badminton", icon: "sports_tennis" },
  { id: "radfahren", label: "Radfahren", icon: "directions_bike" },
  { id: "yoga", label: "Yoga", icon: "self_improvement" },
  { id: "pilates", label: "Pilates", icon: "fitness_center" },
  { id: "wassergymnastik", label: "Wassergymnastik", icon: "pool" },
  { id: "wandern", label: "Wandern", icon: "hiking" },
];

const inputClass =
  "w-full bg-surface-container-lowest border border-surface-container-highest rounded-lg px-md py-sm text-on-background font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";

const labelClass =
  "block font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-xs";

function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-sm mb-md">
      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-extrabold text-xs flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <h2 className="font-headline-lg text-headline-lg text-on-background">{title}</h2>
    </div>
  );
}

export default function MitgliedForm() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    strasse: "",
    plz: "",
    ort: "",
    telefon: "",
    email: "",
    sportangebote: [] as string[],
    sepaLastschrift: "",
    iban: "",
    datenschutz: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleSport(id: string) {
    setForm((prev) => ({
      ...prev,
      sportangebote: prev.sportangebote.includes(id)
        ? prev.sportangebote.filter((s) => s !== id)
        : [...prev.sportangebote, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/mitglied-werden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Unbekannter Fehler.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte versuche es später erneut.");
    }
  }

  const today = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // ── Erfolgsseite ──────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-lg shadow-ambient text-center space-y-md max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-green-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
            Anmeldung erfolgreich!
          </h2>
          <p className="font-body-lg text-secondary">
            Vielen Dank, {form.vorname}! Deine Mitgliedsanmeldung ist bei uns eingegangen. Wir melden uns in Kürze bei dir.
          </p>
        </div>
        <div className="bg-surface-container rounded-xl p-md text-left space-y-xs">
          <p className="font-label-bold text-[10px] uppercase tracking-wider text-secondary mb-sm">Deine Angaben</p>
          <p className="text-sm text-on-background"><span className="text-secondary">Name:</span> {form.vorname} {form.nachname}</p>
          <p className="text-sm text-on-background"><span className="text-secondary">E-Mail:</span> {form.email}</p>
          {form.sportangebote.length > 0 && (
            <p className="text-sm text-on-background">
              <span className="text-secondary">Sportangebot:</span> {form.sportangebote.join(", ")}
            </p>
          )}
        </div>
        <p className="text-xs text-secondary">
          Bei Fragen erreichst du uns unter{" "}
          <a href="mailto:info@scunna.de" className="text-primary hover:underline font-label-bold">
            info@scunna.de
          </a>
          .
        </p>
      </div>
    );
  }

  // ── Formular ──────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-lg">

      {/* 1. Persönliche Daten */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <SectionHeader number={1} title="Persönliche Daten" />
        <div className="space-y-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div>
              <label className={labelClass}>Vorname *</label>
              <input
                type="text"
                required
                autoComplete="given-name"
                value={form.vorname}
                onChange={(e) => set("vorname", e.target.value)}
                className={inputClass}
                placeholder="Max"
              />
            </div>
            <div>
              <label className={labelClass}>Nachname *</label>
              <input
                type="text"
                required
                autoComplete="family-name"
                value={form.nachname}
                onChange={(e) => set("nachname", e.target.value)}
                className={inputClass}
                placeholder="Mustermann"
              />
            </div>
          </div>
          <div className="max-w-xs">
            <label className={labelClass}>Geburtsdatum *</label>
            <input
              type="date"
              required
              value={form.geburtsdatum}
              onChange={(e) => set("geburtsdatum", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* 2. Adresse */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <SectionHeader number={2} title="Adresse" />
        <div className="space-y-md">
          <div>
            <label className={labelClass}>Straße und Hausnummer *</label>
            <input
              type="text"
              required
              autoComplete="street-address"
              value={form.strasse}
              onChange={(e) => set("strasse", e.target.value)}
              className={inputClass}
              placeholder="Musterstraße 12"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
            <div>
              <label className={labelClass}>PLZ *</label>
              <input
                type="text"
                required
                autoComplete="postal-code"
                pattern="[0-9]{5}"
                title="5-stellige Postleitzahl"
                value={form.plz}
                onChange={(e) => set("plz", e.target.value)}
                className={inputClass}
                placeholder="59423"
                maxLength={5}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Ort *</label>
              <input
                type="text"
                required
                autoComplete="address-level2"
                value={form.ort}
                onChange={(e) => set("ort", e.target.value)}
                className={inputClass}
                placeholder="Unna"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kontakt */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <SectionHeader number={3} title="Kontakt" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          <div>
            <label className={labelClass}>Telefon</label>
            <input
              type="tel"
              autoComplete="tel"
              value={form.telefon}
              onChange={(e) => set("telefon", e.target.value)}
              className={inputClass}
              placeholder="0 2303 / 12345"
            />
          </div>
          <div>
            <label className={labelClass}>E-Mail *</label>
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputClass}
              placeholder="max@beispiel.de"
            />
          </div>
        </div>
      </section>

      {/* 4. Sportangebot */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <SectionHeader number={4} title="Sportangebot" />
        <p className="font-body-md text-secondary text-sm mb-md">
          Für welche Angebote interessierst du dich? (Mehrfachauswahl möglich)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
          {SPORTANGEBOTE.map((sport) => {
            const checked = form.sportangebote.includes(sport.id);
            return (
              <label
                key={sport.id}
                className={`flex items-center gap-sm p-sm rounded-xl border cursor-pointer transition-colors ${
                  checked
                    ? "border-primary bg-primary/5"
                    : "border-surface-container-highest bg-surface-container hover:border-primary/50"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleSport(sport.id)}
                />
                <span
                  className={`material-symbols-outlined text-xl flex-shrink-0 ${checked ? "text-primary" : "text-secondary"}`}
                >
                  {sport.icon}
                </span>
                <span
                  className={`font-label-bold text-sm ${checked ? "text-primary" : "text-on-background"}`}
                >
                  {sport.label}
                </span>
                {checked && (
                  <span className="material-symbols-outlined text-primary text-base ml-auto" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </section>

      {/* 5. Zahlung / SEPA */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient">
        <SectionHeader number={5} title="Zahlungsweise" />
        <div className="space-y-md">
          <div>
            <p className={labelClass}>Einverständnis SEPA-Lastschrift *</p>
            <p className="text-xs text-secondary mb-sm">
              Erteilst du dem SC Unna e.V. ein SEPA-Lastschriftmandat für den Jahresbeitrag?
            </p>
            <div className="flex gap-gutter">
              {[
                { value: "ja", label: "Ja, SEPA-Lastschrift" },
                { value: "nein", label: "Nein, Überweisung" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-sm px-md py-sm rounded-xl border cursor-pointer transition-colors ${
                    form.sepaLastschrift === opt.value
                      ? "border-primary bg-primary/5"
                      : "border-surface-container-highest bg-surface-container hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="sepa"
                    required
                    value={opt.value}
                    checked={form.sepaLastschrift === opt.value}
                    onChange={() => set("sepaLastschrift", opt.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      form.sepaLastschrift === opt.value
                        ? "border-primary"
                        : "border-surface-container-highest"
                    }`}
                  >
                    {form.sepaLastschrift === opt.value && (
                      <span className="w-2 h-2 rounded-full bg-primary block" />
                    )}
                  </span>
                  <span className={`font-label-bold text-sm ${form.sepaLastschrift === opt.value ? "text-primary" : "text-on-background"}`}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {form.sepaLastschrift === "ja" && (
            <div>
              <label className={labelClass}>IBAN *</label>
              <input
                type="text"
                required={form.sepaLastschrift === "ja"}
                value={form.iban}
                onChange={(e) => set("iban", e.target.value.toUpperCase())}
                className={inputClass}
                placeholder="DE00 1234 5678 9012 3456 78"
                maxLength={34}
              />
              <p className="text-xs text-secondary mt-xs">
                Dein IBAN wird ausschließlich für den Einzug des Vereinsbeitrags verwendet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 6. Bestätigung + Absenden */}
      <section className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md shadow-ambient space-y-md">
        <SectionHeader number={6} title="Bestätigung" />

        <div className="bg-surface-container rounded-xl p-md text-sm text-secondary space-y-xs">
          <p className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-base text-primary">calendar_today</span>
            <span>Datum der Anmeldung: <strong className="text-on-background">{today}</strong></span>
          </p>
          <p className="text-xs leading-relaxed">
            Mit dem Absenden dieses Formulars erkläre ich meinen Beitritt zum Sport Club Unna e.V. und erkenne die Satzung des Vereins an. Die Anmeldung gilt als rechtsgültig eingereicht. Ich erhalte nach erfolgreicher Bearbeitung eine Bestätigung per E-Mail.
          </p>
        </div>

        <label className="flex items-start gap-sm cursor-pointer group">
          <div
            className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
              form.datenschutz ? "bg-primary border-primary" : "border-surface-container-highest bg-surface-container"
            }`}
          >
            {form.datenschutz && (
              <span className="material-symbols-outlined text-on-primary text-sm">check</span>
            )}
          </div>
          <input
            type="checkbox"
            required
            className="sr-only"
            checked={form.datenschutz}
            onChange={(e) => set("datenschutz", e.target.checked)}
          />
          <span className="text-sm text-secondary leading-relaxed">
            Ich habe die{" "}
            <a href="/datenschutz" target="_blank" className="text-primary hover:underline font-label-bold">
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zum Zweck der Mitgliederverwaltung zu. *
          </span>
        </label>

        {status === "error" && (
          <div className="flex items-start gap-sm bg-red-50 border border-red-200 rounded-xl p-md">
            <span className="material-symbols-outlined text-red-600 text-xl flex-shrink-0">error</span>
            <p className="text-sm text-red-700 font-body-md">{errorMsg}</p>
          </div>
        )}

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
              Jetzt Mitglied werden
            </>
          )}
        </button>
        <p className="text-xs text-secondary text-center">* Pflichtfelder</p>
      </section>
    </form>
  );
}
