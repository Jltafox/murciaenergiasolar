import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Helper to escape HTML to prevent injection
  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Email sending endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { nombre, telefono, tipo, municipio, factura } = req.body;

      // Validate required fields
      if (!nombre || !telefono) {
        return res.status(400).json({ error: "Nombre y teléfono son obligatorios" });
      }

      const safeNombre = escapeHtml(String(nombre));
      const safeTelefono = escapeHtml(String(telefono));
      const safeTipo = tipo ? escapeHtml(String(tipo)) : "";
      const safeMunicipio = municipio ? escapeHtml(String(municipio)) : "";
      const safeFactura = factura ? escapeHtml(String(factura)) : "";

      // Create transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "mail.murciaenergiasolar.es",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || "info@murciaenergiasolar.es",
          pass: process.env.SMTP_PASS,
        },
      });

      // Email content
      const mailOptions = {
        from: `"Web Solar" <${process.env.SMTP_USER || "info@murciaenergiasolar.es"}>`,
        to: "info@murciaenergiasolar.es",
        subject: `Nuevo contacto web: ${safeNombre}`,
        html: `
          <h2>Nuevo formulario de contacto recibido</h2>
          <p><strong>Nombre:</strong> ${safeNombre}</p>
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

      res.status(200).json({ message: "Formulario enviado correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error al enviar el formulario" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
