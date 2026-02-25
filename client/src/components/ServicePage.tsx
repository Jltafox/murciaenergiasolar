/**
 * ServicePage — Componente reutilizable para las Páginas de Servicio
 * Murcia Energía Solar
 *
 * Diseño: Claridad Solar Mediterránea
 * Paleta: Naranja solar #E8650A + Azul profundo #1B3A5C + Blanco arena
 * Tipografía: Sora (títulos) + Inter (cuerpo)
 *
 * Secciones CRO:
 * 1. Hero con H1 magnético + subtítulo + CTA primario
 * 2. Beneficios Rápidos (3 columnas)
 * 3. USPs / "Por qué con nosotros" (diferenciadores vs competencia europea)
 * 4. Cómo lo hacemos (proceso en 4 pasos)
 * 5. Tabla de incentivos fiscales
 * 6. Formulario de contacto (Pregunta de Cierre / CTA)
 * 7. FAQ con acordeón
 * 8. Servicios relacionados
 * Schema JSON-LD de Service inyectado en <head>
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Sun,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  Euro,
  Users,
  Award,
  Wrench,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ── Types ──────────────────────────────────────────────────────────────────

export interface QuickBenefit {
  icon: "zap" | "euro" | "shield" | "clock" | "sun" | "users" | "award" | "wrench";
  title: string;
  description: string;
}

export interface USP {
  title: string;
  body: string;
  badge?: string; // ej. "Enpal lo hace así", "Diferencial vs competencia"
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface IncentiveRow {
  ayuda: string;
  importe: string;
  quien: string;
}

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export interface RelatedService {
  label: string;
  href: string;
  description: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
  priceRange: string;
  url: string;
}

export interface ServicePageProps {
  // SEO + Schema
  metaTitle: string;
  metaDescription: string;
  slug: string;
  schema: ServiceSchemaData;

  // Hero
  h1: string;
  h1Accent?: string; // parte del H1 en color naranja
  heroSubtitle: string;
  heroIntro: string;
  heroBadge?: string;

  // Quick Benefits (3 items)
  quickBenefits: QuickBenefit[];

  // USPs — "Por qué con nosotros"
  uspsTitle: string;
  usps: USP[];

  // Process — "Cómo lo hacemos"
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];

  // Incentives table
  incentivesTitle: string;
  incentives: IncentiveRow[];

  // CTA / Closing Question
  ctaTitle: string;
  ctaSubtitle: string;

  // FAQ
  faqs: FAQItem[];

  // Related services
  relatedServices: RelatedService[];

  // Stats bar
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

// ── Icon resolver ──────────────────────────────────────────────────────────

function BenefitIcon({ name, className }: { name: QuickBenefit["icon"]; className?: string }) {
  const props = { className: className ?? "w-7 h-7" };
  switch (name) {
    case "zap": return <Zap {...props} />;
    case "euro": return <Euro {...props} />;
    case "shield": return <Shield {...props} />;
    case "clock": return <Clock {...props} />;
    case "sun": return <Sun {...props} />;
    case "users": return <Users {...props} />;
    case "award": return <Award {...props} />;
    case "wrench": return <Wrench {...props} />;
    default: return <Sun {...props} />;
  }
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#1B3A5C]/15 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#FFF8F3] transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-[#1B3A5C] text-sm md:text-base pr-4">
              {faq.pregunta}
            </span>
            {openIndex === i
              ? <ChevronUp className="w-5 h-5 text-[#E8650A] shrink-0" />
              : <ChevronDown className="w-5 h-5 text-[#E8650A] shrink-0" />}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 bg-[#FFF8F3] text-[#1B3A5C]/80 text-sm leading-relaxed">
              {faq.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ServicePage(props: ServicePageProps) {
  const {
    h1, h1Accent, heroSubtitle, heroIntro, heroBadge,
    quickBenefits,
    uspsTitle, usps,
    processTitle, processSubtitle, processSteps,
    incentivesTitle, incentives,
    ctaTitle, ctaSubtitle,
    faqs,
    relatedServices,
    stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label,
    schema,
  } = props;

  const phoneUrl = "tel:+34968000000";
  const phoneDisplay = "968 000 000";
  const whatsappUrl = "https://wa.me/34968000000";

  // Inject Schema JSON-LD
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": schema.name,
      "description": schema.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": schema.provider,
        "telephone": "+34968000000",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Murcia",
          "addressRegion": "Región de Murcia",
          "addressCountry": "ES"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "312"
        }
      },
      "areaServed": schema.areaServed,
      "serviceType": schema.serviceType,
      "priceRange": schema.priceRange,
      "url": schema.url,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": schema.name,
        "itemListElement": incentives.map((inc) => ({
          "@type": "Offer",
          "name": inc.ayuda,
          "description": `${inc.importe} — ${inc.quien}`,
        })),
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `schema-service-${props.slug}`;
    script.textContent = JSON.stringify(schemaData);
    // Remove previous if exists
    const prev = document.getElementById(`schema-service-${props.slug}`);
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById(`schema-service-${props.slug}`);
      if (s) s.remove();
    };
  }, [props.slug]);

  // Render H1 with optional accent
  const renderH1 = () => {
    if (!h1Accent) return <>{h1}</>;
    const parts = h1.split(h1Accent);
    return (
      <>
        {parts[0]}
        <span className="text-[#E8650A]">{h1Accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAVBAR GLOBAL ── */}
      <Navbar />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-[#F8F4F0] border-b border-[#1B3A5C]/10 mt-[64px]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-xs text-[#1B3A5C]/60">
          <Link href="/" className="hover:text-[#E8650A] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />Inicio
          </Link>
          <span>/</span>
          <Link href="/servicios/instalacion-solar-residencial" className="hover:text-[#E8650A] transition-colors">Servicios</Link>
          <span>/</span>
          <span className="text-[#E8650A] font-medium truncate">{h1}</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#1B3A5C] via-[#1B3A5C] to-[#0F2540] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E8650A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {heroBadge && (
              <div className="inline-flex items-center gap-2 bg-[#E8650A]/20 border border-[#E8650A]/30 rounded-full px-3 py-1 text-xs text-[#F59E0B] font-semibold mb-5">
                <Star className="w-3 h-3 fill-[#F59E0B]" />
                {heroBadge}
              </div>
            )}
            <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              {renderH1()}
            </h1>
            <p className="text-[#E8650A] font-semibold text-lg md:text-xl mb-5">{heroSubtitle}</p>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line max-w-2xl">
              {heroIntro}
            </p>
            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-white/10">
              {[
                { v: stat1Value, l: stat1Label },
                { v: stat2Value, l: stat2Label },
                { v: stat3Value, l: stat3Label },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-bold text-2xl text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{s.v}</div>
                  <div className="text-white/50 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="flex items-center justify-center gap-2 bg-[#E8650A] hover:bg-[#D4580A] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-[#E8650A]/30">
                <Sun className="w-5 h-5" />Presupuesto gratuito
              </a>
              <a href={phoneUrl} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                <Phone className="w-5 h-5" />{phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS RÁPIDOS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {quickBenefits.map((b, i) => (
              <div key={i} className="bg-[#F8F4F0] rounded-2xl p-6 border border-[#1B3A5C]/8 hover:border-[#E8650A]/30 transition-colors group">
                <div className="w-12 h-12 bg-[#E8650A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8650A]/20 transition-colors">
                  <BenefitIcon name={b.icon} className="w-6 h-6 text-[#E8650A]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {b.title}
                </h3>
                <p className="text-[#1B3A5C]/65 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USPs — POR QUÉ CON NOSOTROS ── */}
      <section className="py-14 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              {uspsTitle}
            </h2>
            <p className="text-[#1B3A5C]/55 text-sm max-w-xl mx-auto">
              Aplicamos las mejores prácticas de los líderes europeos — adaptadas al mercado de Murcia
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {usps.map((usp, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#1B3A5C]/10 shadow-sm hover:shadow-md transition-shadow">
                {usp.badge && (
                  <span className="inline-block bg-[#E8650A]/10 text-[#E8650A] text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    {usp.badge}
                  </span>
                )}
                <h3 className="font-bold text-[#1B3A5C] text-base mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {usp.title}
                </h3>
                <p className="text-[#1B3A5C]/65 text-sm leading-relaxed">{usp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO — CÓMO LO HACEMOS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              {processTitle}
            </h2>
            <p className="text-[#1B3A5C]/55 text-sm">{processSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#E8650A]/20 via-[#E8650A] to-[#E8650A]/20" />
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E8650A] to-[#F59E0B] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#E8650A]/25 z-10">
                  <span className="font-bold text-white text-xl" style={{ fontFamily: "'Sora', sans-serif" }}>{step.number}</span>
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-base mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-[#1B3A5C]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCENTIVOS FISCALES ── */}
      <section className="py-12 bg-[#F8F4F0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              {incentivesTitle}
            </h2>
            <p className="text-[#1B3A5C]/55 text-sm">Gestionamos todos los trámites sin coste adicional</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#1B3A5C]/10 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-2xl">Ayuda / Incentivo</th>
                  <th className="text-left px-5 py-3 font-semibold">Importe</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-2xl">Quién puede solicitarla</th>
                </tr>
              </thead>
              <tbody>
                {incentives.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF8F3]"}>
                    <td className="px-5 py-3 font-medium text-[#1B3A5C]">{row.ayuda}</td>
                    <td className="px-5 py-3 text-[#E8650A] font-bold">{row.importe}</td>
                    <td className="px-5 py-3 text-[#1B3A5C]/70">{row.quien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-[#1B3A5C]/40 mt-4">
            * Incentivos vigentes en 2025. Consulta disponibilidad en tu municipio.
          </p>
        </div>
      </section>

      {/* ── CTA / PREGUNTA DE CIERRE ── */}
      <section id="contacto" className="py-16 bg-gradient-to-br from-[#1B3A5C] to-[#0F2540]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-bold text-2xl md:text-3xl text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
            {ctaTitle}
          </h2>
          <p className="text-white/60 text-sm mb-8">{ctaSubtitle}</p>
          <form
            className="bg-white rounded-2xl p-6 md:p-8 text-left shadow-2xl"
            onSubmit={(e) => { e.preventDefault(); window.location.href = phoneUrl; }}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Nombre *</label>
                <input type="text" required placeholder="Tu nombre" className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Teléfono *</label>
                <input type="tel" required placeholder="6XX XXX XXX" className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Tipo de propiedad</label>
              <select className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors text-[#1B3A5C]">
                <option value="">Selecciona una opción</option>
                <option>Vivienda unifamiliar / Chalet</option>
                <option>Piso / Apartamento</option>
                <option>Comunidad de vecinos</option>
                <option>Local / Empresa / Nave industrial</option>
                <option>Explotación agrícola</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Factura mensual aproximada</label>
              <select className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors text-[#1B3A5C]">
                <option value="">Selecciona un rango</option>
                <option>Menos de 60€/mes</option>
                <option>60€ – 100€/mes</option>
                <option>100€ – 150€/mes</option>
                <option>150€ – 250€/mes</option>
                <option>Más de 250€/mes</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-[#E8650A] hover:bg-[#D4580A] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E8650A]/30">
              <Sun className="w-5 h-5" />Solicitar presupuesto gratuito
            </button>
            <p className="text-center text-xs text-[#1B3A5C]/40 mt-3">
              O llama directamente:{" "}
              <a href={phoneUrl} className="text-[#E8650A] font-semibold">{phoneDisplay}</a>
            </p>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="py-12 bg-[#F8F4F0]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-8 text-center" style={{ fontFamily: "'Sora', sans-serif" }}>
              Preguntas frecuentes
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* ── SERVICIOS RELACIONADOS ── */}
      {relatedServices.length > 0 && (
        <section className="py-10 bg-white border-t border-[#1B3A5C]/10">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-bold text-[#1B3A5C] text-lg mb-5">Otros servicios que pueden interesarte</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedServices.map((s, i) => (
                <Link key={i} href={s.href} className="group flex items-start gap-3 bg-[#F8F4F0] hover:bg-[#E8650A]/5 border border-[#1B3A5C]/10 hover:border-[#E8650A]/30 rounded-xl p-4 transition-colors">
                  <div className="w-8 h-8 bg-[#E8650A]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#E8650A]/20 transition-colors">
                    <Sun className="w-4 h-4 text-[#E8650A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B3A5C] text-sm group-hover:text-[#E8650A] transition-colors flex items-center gap-1">
                      {s.label}<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[#1B3A5C]/55 text-xs mt-0.5">{s.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ZONAS DE SERVICIO — Enlazado interno Servicios→Barrios ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-[#E8650A]/10 text-[#E8650A] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
              <Sun className="w-3.5 h-3.5" />Zonas donde instalamos
            </span>
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Instalación de placas solares en toda la Región de Murcia
            </h2>
            <p className="text-[#1B3A5C]/55 text-sm mt-2 max-w-xl mx-auto">
              Cubrimos Murcia capital y todos los municipios de la región. Presupuesto gratuito en 24h.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {[
              { label: "Placas solares Cartagena", href: "/murcia/instalacion-placas-solares-cartagena", badge: "IBI 50%" },
              { label: "Instalación solar Lorca", href: "/murcia/instalacion-placas-solares-lorca", badge: null },
              { label: "Placas solares Molina de Segura", href: "/murcia/instalacion-placas-solares-molina-de-segura", badge: "IBI 40%" },
              { label: "Solar Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco", badge: "IBI 50%" },
              { label: "Placas solares San Javier", href: "/murcia/instalacion-placas-solares-san-javier", badge: "IBI 50%" },
              { label: "Instalación solar Yecla", href: "/murcia/instalacion-placas-solares-yecla", badge: "IBI 50%" },
              { label: "Placas solares Jumilla", href: "/murcia/instalacion-placas-solares-jumilla", badge: "IBI 50%" },
              { label: "Solar Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla", badge: null },
              { label: "Placas solares Cieza", href: "/murcia/instalacion-placas-solares-cieza", badge: null },
              { label: "Solar Espinardo Murcia", href: "/murcia/instalacion-placas-solares-espinardo", badge: null },
              { label: "Placas solares La Flota", href: "/murcia/instalacion-placas-solares-la-flota", badge: null },
              { label: "Solar El Carmen Murcia", href: "/murcia/instalacion-placas-solares-el-carmen", badge: null },
              { label: "Placas solares Churra", href: "/murcia/instalacion-placas-solares-churra", badge: null },
              { label: "Solar La Alberca Murcia", href: "/murcia/instalacion-placas-solares-la-alberca", badge: null },
              { label: "Placas solares Vistabella", href: "/murcia/instalacion-placas-solares-vistabella", badge: null },
            ].map((z, i) => (
              <Link
                key={i}
                href={z.href}
                className="group flex items-center justify-between gap-2 bg-[#F8F4F0] hover:bg-[#E8650A]/10 border border-[#1B3A5C]/8 hover:border-[#E8650A]/30 rounded-xl px-3 py-2.5 transition-all"
              >
                <span className="text-xs font-medium text-[#1B3A5C] group-hover:text-[#E8650A] transition-colors leading-tight">{z.label}</span>
                {z.badge
                  ? <span className="text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full shrink-0">{z.badge}</span>
                  : <ArrowRight className="w-3 h-3 text-[#1B3A5C]/30 group-hover:text-[#E8650A] transition-colors shrink-0" />
                }
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-8 bg-[#1B3A5C]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { icon: Award, text: "Instaladores certificados IDAE" },
              { icon: Shield, text: "Garantía de producción 25 años" },
              { icon: CheckCircle, text: "Tramitamos todas las subvenciones" },
              { icon: Star, text: "4.9★ valoración en Google" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <item.icon className="w-4 h-4 text-[#E8650A]" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER GLOBAL ── */}
      <Footer />

      {/* ── STICKY CTA MÓVIL ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#1B3A5C]/10 shadow-2xl px-4 py-3 flex gap-3">
        <a href={phoneUrl} className="flex-1 flex items-center justify-center gap-2 bg-[#1B3A5C] text-white font-bold py-3 rounded-xl text-sm">
          <Phone className="w-4 h-4" />Llamar
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#E8650A] text-white font-bold py-3 rounded-xl text-sm">
          <MessageCircle className="w-4 h-4" />WhatsApp
        </a>
      </div>
    </div>
  );
}
