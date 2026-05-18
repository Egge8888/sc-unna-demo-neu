"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormState = {
  name: string;
  email: string;
  telefon: string;
  betreff: string;
  nachricht: string;
  datenschutz: boolean;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  telefon: "",
  betreff: "",
  nachricht: "",
  datenschutz: false,
};

export default function KontaktPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormState, v: string | boolean) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Unbekannter Fehler");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler – bitte erneut versuchen.");
    }
  };

  const inputClass =
    "w-full border border-surface-container-highest rounded-lg px-md py-sm font-body-md text-body-md text-on-surface bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-secondary";

  return (
    <>
      <Navbar current="kontakt" />

      <main className="max-w-7xl mx-auto px-margin py-xl">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-xl">
            <h1 className="font-display-xl text-display-xl text-on-background mb-sm">
              Kontakt
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              Fragen, Anregungen oder einfach Hallo? Schreib uns — wir melden uns
              so schnell wie möglich.
            </p>
          </div>

          {/* Contact info strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm mb-xl">
            {[
              { icon: "location_on", label: "Adresse", value: "Stralsunder Str. 63, 59427 Unna" },
              { icon: "mail", label: "E-Mail", value: "info@scunna.de" },
              { icon: "call", label: "Telefon", value: "02303 / 21960" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-sm bg-surface-container-low rounded-xl p-md border border-surface-container-highest"
              >
                <span className="material-symbols-outlined text-primary text-[20px] mt-[2px] flex-shrink-0">
                  {icon}
                </span>
                <div>
                  <p className="font-label-bold text-[10px] uppercase tracking-wide text-secondary mb-[2px]">
                    {label}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {status === "success" ? (
            <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl p-xl text-center space-y-sm">
              <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <h2 className="font-headline-md text-headline-md text-on-background">
                Nachricht gesendet
              </h2>
              <p className="font-body-md text-body-md text-secondary">
                Vielen Dank! Wir melden uns in Kürze bei dir.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-sm text-primary font-label-bold text-sm hover:underline"
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-md">
              {/* Name + E-Mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <div className="space-y-xs">
                  <label className="font-label-bold text-xs uppercase tracking-wide text-on-surface-variant">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Vor- und Nachname"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-xs uppercase tracking-wide text-on-surface-variant">
                    E-Mail <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="deine@email.de"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Telefon + Betreff */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <div className="space-y-xs">
                  <label className="font-label-bold text-xs uppercase tracking-wide text-on-surface-variant">
                    Telefon <span className="text-secondary font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => set("telefon", e.target.value)}
                    placeholder="0123 / 456789"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-xs uppercase tracking-wide text-on-surface-variant">
                    Betreff <span className="text-secondary font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.betreff}
                    onChange={(e) => set("betreff", e.target.value)}
                    placeholder="Worum geht es?"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Nachricht */}
              <div className="space-y-xs">
                <label className="font-label-bold text-xs uppercase tracking-wide text-on-surface-variant">
                  Nachricht <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.nachricht}
                  onChange={(e) => set("nachricht", e.target.value)}
                  placeholder="Deine Nachricht an den SC Unna …"
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
              </div>

              {/* Datenschutz */}
              <label className="flex items-start gap-sm cursor-pointer group">
                <div className="relative mt-[2px] flex-shrink-0">
                  <input
                    type="checkbox"
                    required
                    checked={form.datenschutz}
                    onChange={(e) => set("datenschutz", e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${form.datenschutz ? "bg-primary border-primary" : "border-surface-container-highest group-hover:border-primary"}`}>
                    {form.datenschutz && (
                      <span className="material-symbols-outlined text-on-primary text-[12px]">check</span>
                    )}
                  </div>
                </div>
                <span className="font-body-md text-body-md text-secondary text-sm leading-tight">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-primary hover:underline" target="_blank">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{" "}
                  <span className="text-primary">*</span>
                </span>
              </label>

              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-md py-sm">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary text-on-primary font-label-bold text-label-bold py-sm px-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center gap-xs"
              >
                {status === "sending" ? (
                  <>
                    <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                    Wird gesendet …
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Nachricht senden
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
