import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ime, prezime, email, telefon, datum, vreme, poruka, vozilo } = await req.json();

  if (!ime || !email || !telefon || !datum || !vreme) {
    return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
  }

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`
        ).toString("base64"),
    },
    body: JSON.stringify({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER,
            Name: "B Auto – Web upit",
          },
          To: [{ Email: process.env.SITE_MAIL_RECEIVER }],
          ReplyTo: { Email: email, Name: `${ime} ${prezime}`.trim() },
          Subject: `Zakaži test vožnju – ${vozilo}`,
          HTMLBody: `
            <h2>Zahtev za test vožnju: ${vozilo}</h2>
            <table cellpadding="6" style="border-collapse:collapse;">
              <tr><td><strong>Ime:</strong></td><td>${ime}</td></tr>
              <tr><td><strong>Prezime:</strong></td><td>${prezime || "—"}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Telefon:</strong></td><td>${telefon}</td></tr>
              <tr><td><strong>Željeni datum:</strong></td><td>${datum}</td></tr>
              <tr><td><strong>Željeno vreme:</strong></td><td>${vreme}</td></tr>
              <tr><td><strong>Poruka:</strong></td><td>${poruka || "—"}</td></tr>
            </table>
          `,
        },
      ],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Greška pri slanju." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
