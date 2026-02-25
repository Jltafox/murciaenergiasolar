/**
 * LocationPage — Componente reutilizable para las 19 Location Pages de Murcia Energía Solar
 * Diseño: Claridad Solar Mediterránea
 * Paleta: Naranja solar #E8650A + Azul profundo #1B3A5C + Blanco arena
 * Tipografía: Sora (títulos) + Inter (cuerpo)
 * CRO: Hero con CTA, tabla de incentivos, bloque de confianza, FAQ, sticky CTA móvil
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  Sun,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Euro,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface IncentiveRow {
  ayuda: string;
  importe: string;
  quien: string;
}

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export interface RelatedPage {
  label: string;
  href: string;
}

export interface LocationPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  slug: string;

  // Hero
  h1: string;
  heroSubtitle: string;
  heroIntro: string; // 2–3 párrafos de copy hiper-local

  // Savings block
  savingsMonthly: string; // ej. "80–120€/mes"
  savingsAnnual: string; // ej. "1.100€/año"
  paybackYears: string; // ej. "6–8 años"
  coveragePercent: string; // ej. "80%"

  // Incentives table
  incentives: IncentiveRow[];

  // Trust block
  trustTitle: string;
  trustBody: string; // párrafo de confianza hiper-local
  installationsCount: string; // ej. "180+"

  // FAQ
  faqs: FAQItem[];

  // Related pages
  relatedPages: RelatedPage[];

  // Local landmarks (for hiper-local copy)
  landmarks?: string; // texto libre mencionando hitos locales
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[#1B3A5C]/15 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#FFF8F3] transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`loc-faq-answer-${i}`}
            id={`loc-faq-question-${i}`}
          >
            <span className="font-semibold text-[#1B3A5C] text-sm md:text-base pr-4">
              {faq.pregunta}
            </span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-[#E8650A] shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#E8650A] shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div
              id={`loc-faq-answer-${i}`}
              role="region"
              aria-labelledby={`loc-faq-question-${i}`}
              className="px-5 pb-4 bg-[#FFF8F3] text-[#1B3A5C]/80 text-sm leading-relaxed"
            >
              {faq.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LocationPage(props: LocationPageProps) {
  const {
    h1,
    heroSubtitle,
    heroIntro,
    savingsMonthly,
    savingsAnnual,
    paybackYears,
    coveragePercent,
    incentives,
    trustTitle,
    trustBody,
    installationsCount,
    faqs,
    relatedPages,
    landmarks,
  } = props;

  const whatsappUrl = "https://wa.me/34968000000";
  const phoneUrl = "tel:+34968000000";
  const phoneDisplay = "968 000 000";

  return (
    <div className="min-h-screen bg-white font-sans" lang="es">
      {/* ── NAVBAR GLOBAL ── */}
      <Navbar />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Ruta de navegación" className="bg-[#F8F4F0] border-b border-[#1B3A5C]/10 mt-[64px]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-xs text-[#1B3A5C]/60">
          <Link href="/" className="hover:text-[#E8650A] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[#E8650A] font-medium truncate">{h1}</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#1B3A5C] via-[#1B3A5C] to-[#0F2540] text-white py-14 md:py-20 relative overflow-hidden">
        {/* decorative sun */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E8650A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8650A]/20 border border-[#E8650A]/30 rounded-full px-3 py-1 text-xs text-[#F59E0B] font-semibold mb-4">
                <MapPin className="w-3 h-3" />
                Instalador local certificado
              </div>
              <h1 className="font-bold text-2xl md:text-4xl leading-tight mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                {h1}
              </h1>
              <p className="text-[#E8650A] font-semibold text-lg mb-4">{heroSubtitle}</p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                {heroIntro}
              </p>
              {landmarks && (
                <p className="text-white/60 text-sm italic mb-6">{landmarks}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-2 bg-[#E8650A] hover:bg-[#D4580A] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#E8650A]/30"
                >
                  <Sun className="w-5 h-5" />
                  Estudio solar gratuito
                </a>
                <a
                  href={phoneUrl}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right: savings cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Euro, label: "Ahorro mensual", value: savingsMonthly, color: "from-[#E8650A] to-[#F59E0B]" },
                { icon: Zap, label: "Ahorro anual", value: savingsAnnual, color: "from-[#1B3A5C] to-[#2A5580]" },
                { icon: Clock, label: "Amortización", value: paybackYears, color: "from-[#059669] to-[#10B981]" },
                { icon: Sun, label: "Consumo cubierto", value: coveragePercent, color: "from-[#7C3AED] to-[#A855F7]" },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-4 flex flex-col gap-2 shadow-lg`}
                >
                  <card.icon className="w-6 h-6 text-white/80" />
                  <div className="text-xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {card.value}
                  </div>
                  <div className="text-white/70 text-xs">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INCENTIVOS FISCALES ── */}
      <section className="py-12 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Subvenciones y ayudas disponibles
            </h2>
            <p className="text-[#1B3A5C]/60 text-sm">Gestionamos todos los trámites sin coste adicional para ti</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#1B3A5C]/10 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-2xl">Ayuda</th>
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
        </div>
      </section>

      {/* ── BLOQUE DE CONFIANZA ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C] mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {trustTitle}
              </h2>
              <p className="text-[#1B3A5C]/70 leading-relaxed mb-6">{trustBody}</p>
              <div className="flex flex-col gap-3">
                {[
                  "Instaladores certificados por el IDAE",
                  "Tramitamos todas las subvenciones por ti",
                  "Garantía de producción solar 25 años",
                  "Equipo técnico propio — no subcontratamos",
                  "Presupuesto gratuito en menos de 24 horas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8650A] shrink-0" />
                    <span className="text-[#1B3A5C]/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: installationsCount, label: "Instalaciones realizadas", icon: Sun },
                { value: "4.9★", label: "Valoración en Google", icon: Shield },
                { value: "24h", label: "Respuesta garantizada", icon: Clock },
                { value: "25 años", label: "Garantía de producción", icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="bg-[#F8F4F0] rounded-2xl p-5 text-center border border-[#1B3A5C]/10">
                  <stat.icon className="w-6 h-6 text-[#E8650A] mx-auto mb-2" />
                  <div className="font-bold text-xl text-[#1B3A5C]" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-[#1B3A5C]/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO DE CONTACTO ── */}
      <section id="contacto" className="py-14 bg-gradient-to-br from-[#1B3A5C] to-[#0F2540]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-bold text-2xl md:text-3xl text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
            Solicita tu estudio solar gratuito
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Sin compromiso · Respuesta en menos de 24 horas · Presupuesto personalizado
          </p>
          <form
            className="bg-white rounded-2xl p-6 md:p-8 text-left shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = phoneUrl;
            }}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Nombre *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Teléfono *</label>
                <input
                  type="tel"
                  required
                  placeholder="6XX XXX XXX"
                  className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#1B3A5C] mb-1">Tipo de propiedad</label>
              <select className="w-full border border-[#1B3A5C]/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8650A] transition-colors text-[#1B3A5C]">
                <option value="">Selecciona una opción</option>
                <option>Vivienda unifamiliar / Chalet</option>
                <option>Piso / Apartamento</option>
                <option>Comunidad de vecinos</option>
                <option>Local / Empresa</option>
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
            <button
              type="submit"
              className="w-full bg-[#E8650A] hover:bg-[#D4580A] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E8650A]/30"
            >
              <Sun className="w-5 h-5" />
              Solicitar estudio solar gratuito
            </button>
            <p className="text-center text-xs text-[#1B3A5C]/40 mt-3">
              O llama directamente:{" "}
              <a href={phoneUrl} className="text-[#E8650A] font-semibold">
                {phoneDisplay}
              </a>
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

      {/* ── BLOQUE DE SERVICIOS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-[#E8650A]/10 text-[#E8650A] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
              <Sun className="w-3.5 h-3.5" />Nuestros servicios
            </span>
            <h2 className="font-bold text-2xl md:text-3xl text-[#1B3A5C]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Todo lo que necesitas para pasarte a la energía solar
            </h2>
            <p className="text-[#1B3A5C]/55 text-sm mt-2 max-w-xl mx-auto">
              Desde el estudio inicial hasta la tramitación de subvenciones. Un único instalador, todo incluido.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Instalación solar residencial",
                desc: "Viviendas unifamiliares y chalets. Ahorra hasta 1.200€/año.",
                href: "/servicios/instalacion-solar-residencial",
                badge: "Más solicitado",
              },
              {
                label: "Instalación solar industrial",
                desc: "Empresas, naves y explotaciones agrícolas. Amortización en 4–6 años.",
                href: "/servicios/instalacion-solar-industrial",
                badge: null,
              },
              {
                label: "Autoconsumo colectivo",
                desc: "Comunidades de vecinos y edificios. Reparto de ahorro entre propietarios.",
                href: "/servicios/autoconsumo-colectivo",
                badge: null,
              },
              {
                label: "Baterías de almacenamiento",
                desc: "Almacena la energía sobrante y úsala de noche o en días nublados.",
                href: "/servicios/baterias-almacenamiento-solar",
                badge: null,
              },
              {
                label: "Mantenimiento y revisión",
                desc: "Revisión anual, limpieza y monitoreo de rendimiento 24/7.",
                href: "/servicios/mantenimiento-placas-solares",
                badge: null,
              },
              {
                label: "Subvenciones y tramitación",
                desc: "Gestionamos IRPF 20%, bonificación IBI y Next Generation EU por ti.",
                href: "/servicios/subvenciones-placas-solares",
                badge: "Gratis",
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group relative flex flex-col gap-3 bg-[#F8F4F0] hover:bg-white border border-[#1B3A5C]/8 hover:border-[#E8650A]/30 hover:shadow-md rounded-2xl p-5 transition-all"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 text-[10px] bg-[#E8650A] text-white font-bold px-2 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="w-9 h-9 bg-[#E8650A]/10 group-hover:bg-[#E8650A]/20 rounded-xl flex items-center justify-center transition-colors">
                  <Sun className="w-5 h-5 text-[#E8650A]" />
                </div>
                <div>
                  <div className="font-bold text-[#1B3A5C] text-sm group-hover:text-[#E8650A] transition-colors mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {s.label}
                  </div>
                  <div className="text-[#1B3A5C]/60 text-xs leading-relaxed">{s.desc}</div>
                </div>
                <div className="mt-auto flex items-center gap-1 text-[#E8650A] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver servicio <ArrowLeft className="w-3 h-3 rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PÁGINAS RELACIONADAS ── */}
      {relatedPages.length > 0 && (
        <section className="py-10 bg-white border-t border-[#1B3A5C]/10">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-semibold text-[#1B3A5C] text-sm mb-4">
              También instalamos en zonas cercanas:
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="inline-flex items-center gap-1 bg-[#F8F4F0] hover:bg-[#E8650A]/10 border border-[#1B3A5C]/15 hover:border-[#E8650A]/30 text-[#1B3A5C] hover:text-[#E8650A] text-xs font-medium px-3 py-2 rounded-lg transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER GLOBAL ── */}
      <Footer />

      {/* ── STICKY CTA MÓVIL ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#1B3A5C]/10 shadow-2xl px-4 py-3 flex gap-3">
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1B3A5C] text-white font-bold py-3 rounded-xl text-sm"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#E8650A] text-white font-bold py-3 rounded-xl text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
