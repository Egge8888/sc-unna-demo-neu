import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      vorname, nachname, geburtsdatum,
      strasse, plz, ort,
      telefon, email,
      sportangebote,
      sepaLastschrift, iban,
    } = data;

    const sportList =
      Array.isArray(sportangebote) && sportangebote.length > 0
        ? sportangebote.join(", ")
        : "—";

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
        <div style="background:#C8102E;color:#fff;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:22px">Neue Mitgliedsanmeldung</h1>
          <p style="margin:4px 0 0;opacity:.85;font-size:14px">Sport Club Unna e.V.</p>
        </div>
        <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <h2 style="font-size:15px;color:#666;text-transform:uppercase;letter-spacing:1px;margin:0 0 16px">Persönliche Daten</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666;width:200px">Vorname</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${vorname}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">Nachname</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${nachname}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">Geburtsdatum</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${geburtsdatum}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">Adresse</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${strasse}, ${plz} ${ort}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">Telefon</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${telefon || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">E-Mail</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${email}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">Sportangebot</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${sportList}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#666">SEPA-Lastschrift</td>
              <td style="padding:10px 0;font-weight:600;color:#111">${sepaLastschrift === "ja" ? "Ja" : "Nein"}</td>
            </tr>
            ${
              sepaLastschrift === "ja"
                ? `<tr><td style="padding:10px 0;color:#666">IBAN</td><td style="padding:10px 0;font-weight:600;color:#111">${iban}</td></tr>`
                : ""
            }
          </table>
          <p style="font-size:12px;color:#999;margin-top:32px;border-top:1px solid #f3f4f6;padding-top:16px">
            Diese E-Mail wurde automatisch über das Online-Formular auf scunna.de gesendet.
          </p>
        </div>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Demo-Modus: kein API-Key gesetzt — E-Mail nicht versendet, aber Erfolg simulieren
      console.warn("[mitglied-werden] RESEND_API_KEY nicht gesetzt — Demo-Modus aktiv");
      console.info("[mitglied-werden] Formulardaten:", { vorname, nachname, email, sportList });
      return NextResponse.json({ success: true, demo: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SC Unna Mitgliedsformular <onboarding@resend.dev>",
        to: ["info@scunna.de"],
        reply_to: email,
        subject: `Neue Mitgliedsanmeldung: ${vorname} ${nachname}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error("[mitglied-werden] Resend Fehler:", errData);
      return NextResponse.json(
        { success: false, error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[mitglied-werden] Fehler:", err);
    return NextResponse.json(
      { success: false, error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
