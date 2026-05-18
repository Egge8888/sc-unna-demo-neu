import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, telefon, betreff, nachricht } = await req.json();

    if (!name || !email || !nachricht) {
      return NextResponse.json({ success: false, error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    const subject = betreff
      ? `Kontaktanfrage: ${betreff} – ${name}`
      : `Kontaktanfrage von ${name}`;

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto">
        <div style="background:#C8102E;color:#fff;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Neue Kontaktanfrage</h1>
          <p style="margin:4px 0 0;opacity:.85;font-size:13px">Sport Club Unna e.V. · Eingang über scunna.de</p>
        </div>
        <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            ${row("Name", name)}
            ${row("E-Mail", email)}
            ${row("Telefon", telefon)}
            ${row("Betreff", betreff)}
          </table>
          <h3 style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;margin:24px 0 8px;padding-top:16px;border-top:1px solid #e5e7eb">Nachricht</h3>
          <p style="font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap">${nachricht.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          <p style="font-size:11px;color:#aaa;margin-top:32px;border-top:1px solid #f3f4f6;padding-top:16px">
            Automatisch übermittelt über das Kontaktformular auf scunna.de
          </p>
        </div>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("[kontakt] Kein RESEND_API_KEY — Demo-Modus");
      console.info("[kontakt] Daten:", { name, email, betreff });
      return NextResponse.json({ success: true, demo: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SC Unna Kontakt <onboarding@resend.dev>",
        to: ["info@scunna.de"],
        reply_to: email,
        subject,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("[kontakt] Resend Fehler:", err);
      return NextResponse.json(
        { success: false, error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[kontakt]", err);
    return NextResponse.json({ success: false, error: "Interner Fehler." }, { status: 500 });
  }
}

function row(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:8px 0;color:#666;width:120px;font-size:13px;vertical-align:top">${label}</td>
      <td style="padding:8px 0;font-weight:600;color:#111;font-size:13px">${value}</td>
    </tr>`;
}
