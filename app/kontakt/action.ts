"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormState = {
  success: boolean;
  error: string | null;
};

export async function sendContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const telefon = (formData.get("telefon") as string) || "–";
  const betreff = formData.get("betreff") as string;
  const nachricht = formData.get("nachricht") as string;

  // Validierung
  if (!name || !email || !betreff || !nachricht) {
    return {
      success: false,
      error: "Bitte füllen Sie alle Pflichtfelder aus.",
    };
  }

  try {
    await resend.emails.send({
      from: "Sperrzone24 Kontaktformular <info@sperrzone24.de>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Kontaktanfrage: ${betreff}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#333;">Name</td>
            <td style="padding:8px 12px;color:#555;">${name}</td>
          </tr>
          <tr style="background:#f8f8f8;">
            <td style="padding:8px 12px;font-weight:bold;color:#333;">E-Mail</td>
            <td style="padding:8px 12px;color:#555;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#333;">Telefon</td>
            <td style="padding:8px 12px;color:#555;">${telefon}</td>
          </tr>
          <tr style="background:#f8f8f8;">
            <td style="padding:8px 12px;font-weight:bold;color:#333;">Betreff</td>
            <td style="padding:8px 12px;color:#555;">${betreff}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#333;">Nachricht</td>
            <td style="padding:8px 12px;color:#555;white-space:pre-line;">${nachricht}</td>
          </tr>
        </table>
      `,
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error:
        "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    };
  }
}
