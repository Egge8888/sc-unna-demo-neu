import { NextRequest, NextResponse } from "next/server";

function row(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:8px 0;color:#666;width:220px;font-size:13px;vertical-align:top">${label}</td>
      <td style="padding:8px 0;font-weight:600;color:#111;font-size:13px">${value}</td>
    </tr>`;
}

function section(title: string, rows: string) {
  return `
    <h3 style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;margin:24px 0 8px;padding-top:16px;border-top:1px solid #e5e7eb">${title}</h3>
    <table style="width:100%;border-collapse:collapse">${rows}</table>`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      wantMitglied, wantFreizeit,
      // Kontakt
      vorname, nachname, email, telefon,
      // Mitglied
      geburtsdatum, strasse, plz, ort, sportangebote, beitragsart,
      // Freizeit
      freizeit, zimmertyp, personenanzahl, kinderInfo, anmerkungen,
      // SEPA
      iban, kreditinstitut, kontoinhaber, abbuchungAb,
      // Einwilligungen
      sepaMandat, satzung, datenschutz, bildrechte,
    } = data;

    const BEITRAG_LABEL: Record<string, string> = {
      einzeln:    "Einzelmitglied (50,00 €)",
      ehepaar:    "Ehepaar / Lebensgemeinschaft (75,00 €)",
      familie:    "Familie (85,00 €)",
      kind:       "Kind / Jugendliche (35,00 €)",
      ausbildung: "Familienangehörige in Ausbildung (30,00 €)",
    };

    const FREIZEIT_LABEL: Record<string, string> = {
      "skifreizeit-zell-2027":    "Skifreizeit Zell am See (09.–16.01.2027)",
      "skifreizeit-st-ulrich-2027": "Bus-Skifreizeit St. Ulrich (16.–23.01.2027)",
      "osterfreizeit-zell-2027":  "Osterfreizeit Zell am See (27.03.–03.04.2027)",
      "sommerfreizeit-zell-2026": "Sommerfreizeit Zell am See (28.06.–05.07.2026)",
      sonstiges:                  "Sonstiges",
    };

    const zweck = [
      wantMitglied ? "Vereinsmitgliedschaft" : null,
      wantFreizeit ? "Freizeit-Anmeldung" : null,
    ].filter(Boolean).join(" + ");

    let htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto">
        <div style="background:#C8102E;color:#fff;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:22px">Neue Anfrage: ${zweck}</h1>
          <p style="margin:4px 0 0;opacity:.85;font-size:13px">Sport Club Unna e.V. · Eingang über scunna.de</p>
        </div>
        <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
    `;

    // ── Kontakt
    htmlBody += section("Kontakt", [
      row("Name",     `${vorname} ${nachname}`),
      row("E-Mail",   email),
      row("Telefon",  telefon),
    ].join(""));

    // ── Mitgliedschaft
    if (wantMitglied) {
      const sports = Array.isArray(sportangebote) && sportangebote.length > 0
        ? sportangebote.join(", ")
        : "—";
      htmlBody += section("Vereinsmitgliedschaft", [
        row("Geburtsdatum",  geburtsdatum),
        row("Adresse",       `${strasse}, ${plz} ${ort}`),
        row("Sportangebot",  sports),
        row("Beitragsart",   BEITRAG_LABEL[beitragsart] ?? beitragsart),
      ].join(""));
    }

    // ── Freizeit
    if (wantFreizeit) {
      htmlBody += section("Freizeit-Anmeldung", [
        row("Freizeit",         FREIZEIT_LABEL[freizeit] ?? freizeit),
        row("Zimmertyp",        zimmertyp),
        row("Personen (Erw.)",  personenanzahl),
        row("Kinder",           kinderInfo),
        row("Anmerkungen",      anmerkungen),
      ].join(""));
    }

    // ── SEPA
    if (wantMitglied) {
      htmlBody += section("SEPA-Lastschrift", [
        row("IBAN",             iban),
        row("Kreditinstitut",   kreditinstitut),
        row("Kontoinhaber",     kontoinhaber || `${vorname} ${nachname}`),
        row("Abbuchung ab",     abbuchungAb),
      ].join(""));
    }

    // ── Einwilligungen
    const checks = [
      wantMitglied && sepaMandat ? "✓ SEPA-Mandat erteilt" : null,
      wantMitglied && satzung    ? "✓ Satzung anerkannt"    : null,
      datenschutz                ? "✓ Datenschutz akzeptiert" : null,
      wantMitglied && bildrechte ? "✓ Bildrechte freigegeben" : null,
    ].filter(Boolean).join("<br/>");

    htmlBody += section("Einwilligungen", `
      <tr><td colspan="2" style="padding:8px 0;font-size:13px;color:#333">${checks}</td></tr>
    `);

    htmlBody += `
          <p style="font-size:11px;color:#aaa;margin-top:32px;border-top:1px solid #f3f4f6;padding-top:16px">
            Automatisch übermittelt über das Online-Formular auf scunna.de
          </p>
        </div>
      </div>
    `;

    const subject = `${zweck}: ${vorname} ${nachname}`;

    // ── E-Mail versenden
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("[mitglied-werden] Kein RESEND_API_KEY — Demo-Modus");
      console.info("[mitglied-werden] Daten:", { zweck, vorname, nachname, email });
      return NextResponse.json({ success: true, demo: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SC Unna Formular <onboarding@resend.dev>",
        to: ["info@scunna.de"],
        reply_to: email,
        subject,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("[mitglied-werden] Resend Fehler:", err);
      return NextResponse.json(
        { success: false, error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[mitglied-werden]", err);
    return NextResponse.json({ success: false, error: "Interner Fehler." }, { status: 500 });
  }
}
