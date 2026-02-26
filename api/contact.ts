import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import 'dotenv/config';

// Helper to escape HTML to prevent injection
const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("Processing contact form submission");
    console.log("SMTP Password configured:", !!process.env.SMTP_PASS);

    const { nombre, email, telefono, tipo, municipio, factura } = req.body;

    // Validate required fields
    if (!nombre || !telefono || !email) {
      return res.status(400).json({ error: "Nombre, email y teléfono son obligatorios" });
    }

    const safeNombre = escapeHtml(String(nombre));
    const safeEmail = escapeHtml(String(email));
    const safeTelefono = escapeHtml(String(telefono));
    const safeTipo = tipo ? escapeHtml(String(tipo)) : "";
    const safeMunicipio = municipio ? escapeHtml(String(municipio)) : "";
    const safeFactura = factura ? escapeHtml(String(factura)) : "";

    // Create transporter
    const smtpUser = process.env.SMTP_USER || "info@murciaenergiasolar.es";
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      console.error("SMTP_PASS is not defined");
      return res.status(500).json({ error: "Configuration error: SMTP Password missing" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.murciaenergiasolar.es",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Web Solar" <${process.env.SMTP_USER || "info@murciaenergiasolar.es"}>`,
      to: "info@murciaenergiasolar.es",
      replyTo: safeEmail,
      subject: `Nuevo contacto web: ${safeNombre}`,
      html: `
        <h2>Nuevo formulario de contacto recibido</h2>
        <p><strong>Nombre:</strong> ${safeNombre}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safeTelefono}</p>
        ${safeTipo ? `<p><strong>Tipo de propiedad:</strong> ${safeTipo}</p>` : ""}
        ${safeMunicipio ? `<p><strong>Municipio:</strong> ${safeMunicipio}</p>` : ""}
        ${safeFactura ? `<p><strong>Factura mensual:</strong> ${safeFactura}</p>` : ""}
        <hr>
        <p>Enviado desde el formulario web.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to info@murciaenergiasolar.es");
    res.status(200).json({ message: "Formulario enviado correctamente" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error al enviar el formulario: " + (error.message || String(error)) });
  }
}
