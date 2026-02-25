/*
 * HOME PAGE — Murcia Energía Solar
 * Design: "Claridad Solar Mediterránea"
 * 
 * Secciones CRO (orden de conversión):
 * 1. Navbar — sticky con CTA click-to-call
 * 2. Hero — asimétrico 60/40 con formulario de captación
 * 3. Trust Bar — logos certificaciones + estadísticas
 * 4. Calculadora de Ahorro — lead magnet interactivo
 * 5. Servicios — residencial, comunidades, industrial, aerotermia
 * 6. Por Qué Elegirnos — USPs del análisis competitivo
 * 7. Subvenciones — tabla IBI por barrio de Murcia
 * 8. Proceso — 4 pasos de instalación
 * 9. Testimonios — prueba social con fotos
 * 10. Zonas de Servicio — arquitectura de silos SEO
 * 11. FAQ — Schema FAQPage
 * 12. CTA Final — urgencia + formulario
 * 13. Footer — NAP + Schema LocalBusiness
 * 14. WhatsApp flotante + Sticky CTA móvil
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sun, Phone, Mail, MapPin, CheckCircle, Star, ChevronDown,
  ArrowRight, Zap, Home as HomeIcon, Building2, Factory as FactoryIcon, Thermometer,
  Shield, Award, Clock, Users, Euro, TrendingDown, Leaf,
  MessageCircle, Menu, X, Calculator, ChevronRight, Loader2
} from "lucide-react";
import { sendContactForm } from "../lib/contactService";

// ─── Image URLs (WebP optimizado, CDN permanente) ────────────────────────────
// hero: 290KB WebP vs 7MB JPG original (96% reducción)
const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318696499/ChOnwAjOYtdFrzKZ.webp";
const HERO_IMG_MOBILE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318696499/NDCDbSheEuhMPtew.webp";
// family: 86KB WebP vs 7MB JPG original (99% reducción)
const FAMILY_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318696499/APAqSGFbIKuZtNnO.webp";
// installer: 25KB WebP
const INSTALLER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318696499/krgviECHiVypiRRN.webp";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("es-ES")}{suffix}
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const servicios = [
    { label: "Instalación Residencial", href: "/servicios/instalacion-solar-residencial", desc: "Viviendas y chalets" },
    { label: "Instalación Industrial", href: "/servicios/instalacion-solar-industrial", desc: "Naves y empresas" },
    { label: "Autoconsumo Colectivo", href: "/servicios/autoconsumo-colectivo", desc: "Comunidades de vecinos" },
    { label: "Baterías de Almacenamiento", href: "/servicios/baterias-almacenamiento-solar", desc: "Tesla · Huawei · BYD" },
    { label: "Mantenimiento y Revisión", href: "/servicios/mantenimiento-placas-solares", desc: "Revisión anual" },
    { label: "Subvenciones y Tramitación", href: "/servicios/subvenciones-placas-solares", desc: "IRPF 20% + IBI + Next Gen" },
  ];

  const murciaCapital = [
    { label: "La Flota", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "El Carmen", href: "/murcia/instalacion-placas-solares-el-carmen" },
    { label: "Espinardo", href: "/murcia/instalacion-placas-solares-espinardo" },
    { label: "Churra", href: "/murcia/instalacion-placas-solares-churra" },
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
    { label: "El Ranero", href: "/murcia/instalacion-placas-solares-el-ranero" },
    { label: "Vistabella", href: "/murcia/instalacion-placas-solares-vistabella" },
    { label: "Juan Carlos I", href: "/murcia/instalacion-placas-solares-juan-carlos-i" },
    { label: "La Alberca", href: "/murcia/instalacion-placas-solares-la-alberca" },
    { label: "El Palmar", href: "/murcia/instalacion-placas-solares-el-palmar" },
  ];

  const municipios = [
    { label: "Cartagena", href: "/murcia/instalacion-placas-solares-cartagena", badge: "IBI 50%" },
    { label: "Lorca", href: "/murcia/instalacion-placas-solares-lorca", badge: null },
    { label: "Molina de Segura", href: "/murcia/instalacion-placas-solares-molina-de-segura", badge: "IBI 40%" },
    { label: "Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla", badge: null },
    { label: "Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco", badge: "IBI 50%" },
    { label: "San Javier", href: "/murcia/instalacion-placas-solares-san-javier", badge: "IBI 50%" },
    { label: "Yecla", href: "/murcia/instalacion-placas-solares-yecla", badge: "IBI 50%" },
    { label: "Jumilla", href: "/murcia/instalacion-placas-solares-jumilla", badge: "IBI 50%" },
    { label: "Cieza", href: "/murcia/instalacion-placas-solares-cieza", badge: null },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.60 0.19 42)" }}>
            <Sun className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-base leading-tight block" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
              Murcia
            </span>
            <span className="text-xs font-semibold leading-tight block" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.60 0.19 42)" }}>
              Energía Solar
            </span>
          </div>
        </a>

        {/* Desktop Nav with Megamenu */}
        <div className="hidden md:flex items-center gap-1">
          {/* Servicios dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("servicios")}>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
              style={{ fontFamily: "Inter, sans-serif", color: "oklch(0.35 0.04 250)" }}
            >
              Servicios <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "servicios" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "servicios" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Nuestros Servicios</p>
                    <div className="flex flex-col gap-1">
                      {servicios.map((s) => (
                        <a key={s.href} href={s.href} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 transition-colors group">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                            <Sun className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">{s.label}</div>
                            <div className="text-xs text-gray-400">{s.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-orange-50 px-4 py-3 border-t border-orange-100">
                    <p className="text-xs text-orange-700 font-semibold">☀ Ahorra hasta 1.200€/año · Presupuesto en 24h</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Zonas dropdown — solo municipios */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("zonas")}>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
              style={{ fontFamily: "Inter, sans-serif", color: "oklch(0.35 0.04 250)" }}
            >
              Zonas <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "zonas" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "zonas" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Municipios</p>
                    <div className="flex flex-col gap-0.5">
                      {municipios.map((z) => (
                        <a key={z.href} href={z.href} className="flex items-center justify-between text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-2 py-1.5 rounded-lg transition-colors">
                          <span>Placas solares {z.label}</span>
                          {z.badge && <span className="text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">{z.badge}</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/servicios/subvenciones-placas-solares" className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50" style={{ fontFamily: "Inter, sans-serif", color: "oklch(0.35 0.04 250)" }}>Subvenciones</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+34968000000"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.28 0.07 245)" }}
          >
            <Phone className="w-4 h-4" />
            968 000 000
          </a>
          <a href="#presupuesto" className="btn-solar text-sm py-2.5 px-5">
            Presupuesto Gratis
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.28 0.07 245)" }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — Drawer con secciones colapsables */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]"
          >
            <div className="container py-4 flex flex-col gap-1">
              {/* Servicios section */}
              <button
                className="flex items-center justify-between py-3 text-sm font-bold border-b border-gray-100"
                style={{ color: "oklch(0.18 0.04 250)", fontFamily: "Sora, sans-serif" }}
                onClick={() => setMobileSection(mobileSection === "servicios" ? null : "servicios")}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "servicios" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "servicios" && (
                <div className="flex flex-col gap-1 pl-3 pb-2">
                  {servicios.map((s) => (
                    <a key={s.href} href={s.href} className="py-2 text-sm text-gray-600 hover:text-orange-600" onClick={() => setMenuOpen(false)}>{s.label}</a>
                  ))}
                </div>
              )}

              {/* Municipios section */}
              <button
                className="flex items-center justify-between py-3 text-sm font-bold border-b border-gray-100"
                style={{ color: "oklch(0.18 0.04 250)", fontFamily: "Sora, sans-serif" }}
                onClick={() => setMobileSection(mobileSection === "municipios" ? null : "municipios")}
              >
                Municipios
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "municipios" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "municipios" && (
                <div className="flex flex-col gap-1 pl-3 pb-2">
                  {municipios.map((z) => (
                    <a key={z.href} href={z.href} className="flex items-center justify-between py-1.5 text-sm text-gray-600 hover:text-orange-600" onClick={() => setMenuOpen(false)}>
                      <span>{z.label}</span>
                      {z.badge && <span className="text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">{z.badge}</span>}
                    </a>
                  ))}
                </div>
              )}

              <a href="/servicios/subvenciones-placas-solares" className="py-3 text-sm font-bold border-b border-gray-100" style={{ color: "oklch(0.18 0.04 250)", fontFamily: "Sora, sans-serif" }} onClick={() => setMenuOpen(false)}>Subvenciones</a>

              <a
                href="tel:+34968000000"
                className="flex items-center gap-2 py-3 text-sm font-semibold mt-2"
                style={{ color: "oklch(0.60 0.19 42)", fontFamily: "Sora, sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Llamar: 968 000 000
              </a>
              <a href="#presupuesto" className="btn-solar text-center justify-center" onClick={() => setMenuOpen(false)}>
                Solicitar Presupuesto Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    municipio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await sendContactForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      alert(result.message || "Error al enviar el formulario. Por favor, inténtelo de nuevo o llámenos directamente.");
    }
  };

  return (
    <section
      className="relative hero-section pt-20 overflow-hidden"
      style={{ background: "oklch(0.28 0.07 245)" }}
      aria-label="Hero principal — Instalación de placas solares en Murcia"
    >
      {/* Background image — LCP element: fetchpriority=high + decoding=sync */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMG}
          srcSet={`${HERO_IMG_MOBILE} 800w, ${HERO_IMG} 1920w`}
          sizes="100vw"
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.06 245 / 0.95) 0%, oklch(0.28 0.07 245 / 0.85) 60%, oklch(0.28 0.07 245 / 0.70) 100%)" }} />
      </div>

      <div className="relative container py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left — Copy (3/5) */}
          <div className="lg:col-span-3">
              <div className="badge-solar mb-5" style={{ background: "oklch(0.60 0.19 42 / 0.2)", color: "oklch(0.85 0.12 42)" }}>
                <Sun className="w-3.5 h-3.5" />
                <span>3.300 horas de sol al año en Murcia</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Deja de pagar de más
                <span className="block" style={{ color: "oklch(0.72 0.16 42)" }}>
                  por la luz.
                </span>
                Produce la tuya.
              </h1>

              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Instalamos placas solares en Murcia con <strong className="text-white">garantía de 25 años</strong>. 
                Ahorra hasta <strong className="text-white">1.200€/año</strong> y recupera tu inversión en 
                <strong className="text-white"> 6–8 años</strong>. Gestionamos todas las subvenciones por ti.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Instaladores certificados" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Subvenciones gestionadas" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Presupuesto en 24h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span style={{ color: "oklch(0.72 0.16 42)" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {[
                  { value: 850, suffix: "+", label: "Instalaciones en Murcia" },
                  { value: 1200, prefix: "", suffix: "€", label: "Ahorro medio anual" },
                  { value: 4.9, suffix: "★", label: "Valoración media" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                      {i === 2 ? (
                        <span>4.9★</span>
                      ) : (
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                      )}
                    </div>
                    <div className="text-xs text-white/60 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                  </div>
                ))}
               </div>
          </div>
          {/* Right — Lead Form (2/5) */}
          <div className="lg:col-span-2">
            <div id="presupuesto" className="bg-white rounded-2xl p-6 shadow-2xl">
              {!submitted ? (
                <>
                  <div className="text-center mb-5">
                    <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                      Estudio Solar Gratuito
                    </h2>
                    <p className="text-sm" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                      Recibe tu presupuesto personalizado en menos de 24 horas
                    </p>
                  </div>

                  <form className="form-solar flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Formulario de solicitud de estudio solar gratuito">
                    <div>
                      <label htmlFor="hero-nombre">Tu nombre</label>
                      <input
                        id="hero-nombre"
                        type="text"
                        placeholder="Ej: Carlos García"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-email">Tu email</label>
                      <input
                        id="hero-email"
                        type="email"
                        placeholder="Ej: carlos@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-telefono">Teléfono de contacto</label>
                      <input
                        id="hero-telefono"
                        type="tel"
                        placeholder="Ej: 600 000 000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-tipo">Tipo de instalación</label>
                      <select
                        id="hero-tipo"
                        value={formData.tipo}
                        onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="unifamiliar">Casa unifamiliar / chalet</option>
                        <option value="comunidad">Comunidad de vecinos</option>
                        <option value="empresa">Empresa / local comercial</option>
                        <option value="industrial">Nave industrial</option>
                        <option value="agricola">Explotación agrícola</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="hero-municipio">Municipio</label>
                      <select
                        id="hero-municipio"
                        value={formData.municipio}
                        onChange={(e) => setFormData({ ...formData, municipio: e.target.value })}
                        required
                      >
                        <option value="">Selecciona tu municipio</option>
                        <option value="murcia">Murcia capital</option>
                        <option value="cartagena">Cartagena</option>
                        <option value="lorca">Lorca</option>
                        <option value="molina">Molina de Segura</option>
                        <option value="alcantarilla">Alcantarilla</option>
                        <option value="yecla">Yecla</option>
                        <option value="jumilla">Jumilla</option>
                        <option value="cieza">Cieza</option>
                        <option value="torre-pacheco">Torre-Pacheco</option>
                        <option value="san-javier">San Javier</option>
                        <option value="otro">Otro municipio</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn-solar w-full justify-center text-base py-3.5 mt-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Sun className="w-5 h-5" />
                      )}
                      {isSubmitting ? "Enviando..." : "Solicitar Estudio Gratuito"}
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="trust-badge">
                      <Shield className="w-4 h-4" />
                      <span>Sin compromiso</span>
                    </div>
                    <div className="trust-badge">
                      <Clock className="w-4 h-4" />
                      <span>Respuesta en 24h</span>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.60 0.19 42 / 0.1)" }}>
                    <CheckCircle className="w-8 h-8" style={{ color: "oklch(0.60 0.19 42)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                    ¡Solicitud recibida!
                  </h3>
                  <p className="text-sm" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                    Te llamaremos en menos de 24 horas con tu estudio solar personalizado y gratuito.
                  </p>
                  <a
                    href="tel:+34968000000"
                    className="btn-solar mt-5 w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    O llámanos ahora: 968 000 000
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const certs = [
    { label: "Instalador Certificado REE", icon: <Award className="w-5 h-5" /> },
    { label: "Empresa Registrada REBT", icon: <Shield className="w-5 h-5" /> },
    { label: "Garantía 25 años paneles", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Gestor subvenciones IDAE", icon: <Euro className="w-5 h-5" /> },
    { label: "+850 instalaciones en Murcia", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "oklch(0.28 0.07 245)", fontFamily: "Inter, sans-serif" }}>
              <span style={{ color: "oklch(0.60 0.19 42)" }}>{cert.icon}</span>
              {cert.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Savings Calculator ───────────────────────────────────────────────────────
function SavingsCalculator() {
  const [bill, setBill] = useState(120);
  const [type, setType] = useState("unifamiliar");

  const savings = Math.round(bill * 0.75 * 12);
  const cost = type === "unifamiliar" ? 7500 : type === "comunidad" ? 18000 : 12000;
  const years = Math.round(cost / savings * 10) / 10;
  const irpf = Math.round(cost * 0.20);

  return (
    <section className="py-20" style={{ background: "oklch(0.98 0.005 80)" }}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-solar mx-auto mb-4">
              <Calculator className="w-3.5 h-3.5" />
              Calculadora de Ahorro
            </div>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              ¿Cuánto puedes ahorrar con placas solares en Murcia?
            </h2>
            <p className="section-subtitle text-lg max-w-2xl mx-auto">
              Introduce tu factura mensual y calcula tu ahorro estimado. Murcia tiene una de las mayores irradiaciones solares de Europa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.28 0.07 245)" }}>
                  Factura eléctrica mensual: <span style={{ color: "oklch(0.60 0.19 42)" }}>{bill}€/mes</span>
                </label>
                <input
                  type="range"
                  min={50}
                  max={500}
                  step={10}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "oklch(0.60 0.19 42)" }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                  <span>50€</span><span>500€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.28 0.07 245)" }}>
                  Tipo de instalación
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "unifamiliar", label: "Casa", icon: <HomeIcon className="w-4 h-4" /> },
                    { value: "comunidad", label: "Comunidad", icon: <Building2 className="w-4 h-4" /> },
                    { value: "empresa", label: "Empresa", icon: <FactoryIcon className="w-4 h-4" /> },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setType(opt.value)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 text-xs font-semibold transition-all ${
                        type === opt.value
                          ? "border-orange-500 text-orange-600"
                          : "border-gray-200 text-gray-500 hover:border-orange-300"
                      }`}
                      style={{ fontFamily: "Sora, sans-serif", background: type === opt.value ? "oklch(0.60 0.19 42 / 0.06)" : "white" }}
                    >
                      {opt.icon}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Ahorro anual estimado",
                  value: `${savings.toLocaleString("es-ES")}€`,
                  sub: "Con la irradiación solar de Murcia",
                  color: "oklch(0.60 0.19 42)",
                  bg: "oklch(0.60 0.19 42 / 0.08)",
                  large: true,
                },
                {
                  label: "Deducción IRPF (20%)",
                  value: `${irpf.toLocaleString("es-ES")}€`,
                  sub: "Deducción fiscal en la declaración",
                  color: "oklch(0.28 0.07 245)",
                  bg: "oklch(0.28 0.07 245 / 0.06)",
                  large: false,
                },
                {
                  label: "Amortización estimada",
                  value: `${years} años`,
                  sub: "Después, 100% de beneficio neto",
                  color: "oklch(0.35 0.15 145)",
                  bg: "oklch(0.35 0.15 145 / 0.06)",
                  large: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl p-5 flex items-center justify-between"
                  style={{ background: item.bg }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                      {item.sub}
                    </div>
                  </div>
                  <div className={`font-bold ${item.large ? "text-3xl" : "text-2xl"}`} style={{ fontFamily: "Sora, sans-serif", color: item.color }}>
                    {item.value}
                  </div>
                </motion.div>
              ))}

              <a href="#presupuesto" className="btn-solar w-full justify-center mt-2">
                Quiero mi estudio personalizado
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      icon: <HomeIcon className="w-7 h-7" />,
      title: "Instalación Residencial",
      desc: "Placas solares para casas unifamiliares y chalets en Murcia. Diseño personalizado según tu tejado y consumo. Incluye legalización y gestión de subvenciones.",
      features: ["Paneles monocristalinos de alta eficiencia", "Inversor híbrido con monitorización", "Instalación en 1–2 días", "Bonificación IBI 50% durante 3 años"],
      href: "/servicios/instalacion-solar-residencial",
      badge: "Más solicitado",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Comunidades de Vecinos",
      desc: "Autoconsumo colectivo para edificios y comunidades en Murcia. Reparte el ahorro entre todos los vecinos de forma proporcional.",
      features: ["Estudio de viabilidad gratuito", "Reparto de excedentes entre vecinos", "Gestión de trámites con la distribuidora", "Financiación colectiva disponible"],
      href: "/servicios/autoconsumo-colectivo",
      badge: null,
    },
    {
      icon: <FactoryIcon className="w-7 h-7" />,
      title: "Industrial y Empresas",
      desc: "Instalaciones fotovoltaicas para naves industriales, empresas y comercios en la Región de Murcia. Reduce tus costes energéticos hasta un 80%.",
      features: ["Instalaciones desde 10 kWp hasta 1 MWp", "Análisis de retorno de inversión", "Financiación empresarial 0% interés", "Deducciones fiscales IS"],
      href: "/servicios/instalacion-solar-industrial",
      badge: "Mayor ahorro",
    },
    {
      icon: <Thermometer className="w-7 h-7" />,
      title: "Aerotermia + Solar",
      desc: "Combina placas solares con aerotermia para climatización y agua caliente. La solución más eficiente para hogares en Murcia.",
      features: ["Hasta 70% de ahorro en climatización", "Compatible con suelo radiante", "Subvenciones específicas aerotermia", "Instalación integral en un solo contrato"],
      href: "/servicios/instalacion-solar-residencial",
      badge: null,
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Baterías de Almacenamiento",
      desc: "Almacena el excedente solar y úsalo de noche. Maximiza tu autoconsumo y reduce al mínimo tu dependencia de la red eléctrica.",
      features: ["Baterías LiFePO4 de larga vida", "Autonomía de 8–12 horas", "Monitorización en tiempo real", "Compatible con cargador de VE"],
      href: "/servicios/baterias-almacenamiento-solar",
      badge: null,
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Agrícola y Regadío",
      desc: "Soluciones solares para explotaciones agrícolas en Murcia. Reduce el coste del bombeo de agua y la climatización de invernaderos.",
      features: ["Bombeo solar directo", "Sistemas de riego solar", "Instalaciones en campo abierto", "Subvenciones FEADER disponibles"],
      href: "/servicios/instalacion-solar-industrial",
      badge: null,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="badge-solar mx-auto mb-4">
            <Sun className="w-3.5 h-3.5" />
            Nuestros Servicios
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Instalación solar en Murcia para cada necesidad
          </h2>
          <p className="section-subtitle text-lg max-w-2xl mx-auto">
            Desde casas unifamiliares hasta grandes instalaciones industriales. Somos especialistas en energía solar fotovoltaica en la Región de Murcia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.href}
              className="card-solar group relative flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {service.badge && (
                <div className="absolute -top-3 left-4">
                  <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: "oklch(0.60 0.19 42)", fontFamily: "Sora, sans-serif" }}>
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: "oklch(0.60 0.19 42 / 0.10)", color: "oklch(0.60 0.19 42)" }}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                {service.desc}
              </p>

              <ul className="flex flex-col gap-2 mb-5">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "oklch(0.35 0.04 250)", fontFamily: "Inter, sans-serif" }}>
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.19 42)" }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1.5 text-sm font-semibold mt-auto" style={{ color: "oklch(0.60 0.19 42)", fontFamily: "Sora, sans-serif" }}>
                Ver más información
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us Section ───────────────────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section className="py-20" style={{ background: "oklch(0.28 0.07 245)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge-solar mb-5" style={{ background: "oklch(0.60 0.19 42 / 0.2)", color: "oklch(0.85 0.12 42)" }}>
              <Award className="w-3.5 h-3.5" />
              Por qué elegirnos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
              El instalador solar de referencia en Murcia
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              No somos una empresa nacional que subcontrata. Somos un equipo de técnicos murcianos que conocen cada tejado, cada municipio y cada subvención disponible en la Región.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Shield className="w-5 h-5" />, title: "Garantía total 25 años", desc: "Cubrimos paneles, inversor e instalación. Sin letra pequeña." },
                { icon: <Clock className="w-5 h-5" />, title: "Instalación en 1–2 días", desc: "Desde la firma del contrato hasta la puesta en marcha." },
                { icon: <Euro className="w-5 h-5" />, title: "Gestión de subvenciones", desc: "Tramitamos el 100% de las ayudas por ti: IDAE, Next Generation, IBI." },
                { icon: <TrendingDown className="w-5 h-5" />, title: "Financiación 0% interés", desc: "Hasta 84 meses sin intereses. La cuota no supera tu ahorro mensual." },
                { icon: <Users className="w-5 h-5" />, title: "+850 clientes en Murcia", desc: "Más de 850 familias y empresas murcianas confían en nosotros." },
                { icon: <Star className="w-5 h-5" />, title: "4.9★ en Google", desc: "Valoración media de 4.9 sobre 5 con más de 300 reseñas verificadas." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "oklch(0.60 0.19 42 / 0.2)", color: "oklch(0.72 0.16 42)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5" style={{ fontFamily: "Sora, sans-serif" }}>{item.title}</div>
                    <div className="text-xs text-white/65 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={INSTALLER_IMG}
              alt="Instalador de placas solares certificado en Murcia"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ height: "500px" }}
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "oklch(0.60 0.19 42 / 0.1)" }}>
                  <Star className="w-6 h-6" style={{ color: "oklch(0.60 0.19 42)" }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>4.9 / 5</div>
                  <div className="text-xs" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>+300 reseñas Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Subsidies Section ────────────────────────────────────────────────────────
function SubsidiesSection() {
  const subsidies = [
    { name: "Deducción IRPF", amount: "20%", desc: "Sobre el coste de la instalación en la declaración de la renta", scope: "Nacional" },
    { name: "Subvenciones Next Generation", amount: "Hasta 3.000€", desc: "Ayudas directas para instalaciones de autoconsumo residencial", scope: "Nacional" },
    { name: "Bonificación IBI Murcia capital", amount: "50% / 3 años", desc: "Reducción del Impuesto de Bienes Inmuebles durante 3 años", scope: "Murcia capital" },
    { name: "Bonificación IBI Cartagena", amount: "50% / 3 años", desc: "Bonificación IBI para instalaciones de energía renovable", scope: "Cartagena" },
    { name: "Bonificación IBI Lorca", amount: "50% / 3 años", desc: "Reducción IBI para propiedades con instalación solar", scope: "Lorca" },
    { name: "Bonificación IBI Molina de Segura", amount: "40% / 3 años", desc: "Bonificación IBI para autoconsumo fotovoltaico", scope: "Molina de Segura" },
    { name: "Bonificación IBI Torre-Pacheco", amount: "50% / 5 años", desc: "Una de las mejores bonificaciones de la Región", scope: "Torre-Pacheco" },
    { name: "Bonificación IBI San Javier", amount: "50% / 3 años", desc: "Bonificación IBI para instalaciones de energía solar", scope: "San Javier" },
    { name: "Ayudas IDAE Región de Murcia", amount: "Variable", desc: "Convocatorias periódicas del IDAE para autoconsumo", scope: "Región de Murcia" },
    { name: "IVA reducido al 10%", amount: "IVA 10%", desc: "Aplicable a instalaciones en viviendas habituales", scope: "Nacional" },
  ];

  return (
    <section id="subvenciones" className="py-20" style={{ background: "oklch(0.98 0.005 80)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge-solar mx-auto mb-4">
            <Euro className="w-3.5 h-3.5" />
            Subvenciones 2025
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Ayudas y subvenciones para placas solares en Murcia
          </h2>
          <p className="section-subtitle text-lg max-w-2xl mx-auto">
            Gestionamos todas las subvenciones disponibles para que pagues el mínimo posible. Tabla actualizada con las bonificaciones IBI por municipio.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "oklch(0.28 0.07 245)" }}>
                  <th className="text-left text-white text-sm font-semibold px-5 py-4" style={{ fontFamily: "Sora, sans-serif" }}>Subvención / Ayuda</th>
                  <th className="text-left text-white text-sm font-semibold px-5 py-4" style={{ fontFamily: "Sora, sans-serif" }}>Importe</th>
                  <th className="text-left text-white text-sm font-semibold px-5 py-4 hidden md:table-cell" style={{ fontFamily: "Sora, sans-serif" }}>Descripción</th>
                  <th className="text-left text-white text-sm font-semibold px-5 py-4" style={{ fontFamily: "Sora, sans-serif" }}>Ámbito</th>
                </tr>
              </thead>
              <tbody>
                {subsidies.map((sub, i) => (
                  <tr key={i} className={`border-b border-gray-50 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                      {sub.name}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm font-bold" style={{ color: "oklch(0.60 0.19 42)", fontFamily: "Sora, sans-serif" }}>
                        {sub.amount}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm hidden md:table-cell" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                      {sub.desc}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "oklch(0.28 0.07 245 / 0.08)", color: "oklch(0.28 0.07 245)", fontFamily: "Inter, sans-serif" }}>
                        {sub.scope}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm mb-4" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
            ¿No encuentras tu municipio? Consúltanos — gestionamos subvenciones en todos los municipios de la Región de Murcia.
          </p>
          <a href="#presupuesto" className="btn-solar inline-flex">
            Consultar subvenciones disponibles para mi caso
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num: "01", title: "Estudio gratuito", desc: "Analizamos tu tejado, consumo y situación fiscal. Te enviamos un informe detallado con el ahorro estimado y las subvenciones aplicables.", icon: <Calculator className="w-6 h-6" /> },
    { num: "02", title: "Diseño y propuesta", desc: "Diseñamos tu instalación personalizada con los mejores paneles del mercado. Presupuesto cerrado sin sorpresas.", icon: <Sun className="w-6 h-6" /> },
    { num: "03", title: "Instalación en 1–2 días", desc: "Nuestro equipo de técnicos certificados instala tu sistema en tiempo récord. Gestionamos todos los permisos y trámites.", icon: <Zap className="w-6 h-6" /> },
    { num: "04", title: "Ahorro desde el día 1", desc: "Tu instalación queda conectada y empiezas a ahorrar. Te enseñamos a monitorizar tu producción desde el móvil.", icon: <TrendingDown className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="badge-solar mx-auto mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            Proceso de instalación
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            De 0 a ahorrando en 4 pasos
          </h2>
          <p className="section-subtitle text-lg max-w-xl mx-auto">
            Nos encargamos de todo. Tú solo tienes que decidir empezar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(to right, oklch(0.60 0.19 42), oklch(0.28 0.07 245))" }} />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative z-10 shadow-lg" style={{ background: i < 2 ? "oklch(0.60 0.19 42)" : "oklch(0.28 0.07 245)", color: "white" }}>
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center bg-white" style={{ color: i < 2 ? "oklch(0.60 0.19 42)" : "oklch(0.28 0.07 245)", fontFamily: "Sora, sans-serif", border: "2px solid currentColor" }}>
                  {i + 1}
                </span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "Murcia capital",
      rating: 5,
      text: "Llevaba años pensándolo y al final me decidí. En 8 meses ya he recuperado más de 800€ en la factura. El equipo fue muy profesional y gestionaron todas las subvenciones sin que yo tuviera que hacer nada.",
      type: "Casa unifamiliar · 6 kWp",
    },
    {
      name: "Ana R.",
      location: "Cartagena",
      rating: 5,
      text: "Instalación en un día y sin ningún problema. La bonificación del IBI fue una sorpresa muy agradable. Ahora produzco más de lo que consumo y vendo el excedente a la red.",
      type: "Chalet · 8 kWp + batería",
    },
    {
      name: "Transportes García S.L.",
      location: "Molina de Segura",
      rating: 5,
      text: "Instalamos 50 kWp en nuestra nave. Ahorramos más de 2.000€ al mes en electricidad. La amortización será en menos de 5 años. Muy recomendable para empresas.",
      type: "Nave industrial · 50 kWp",
    },
    {
      name: "Comunidad Calle Mayor 12",
      location: "Murcia capital",
      rating: 5,
      text: "Somos 18 vecinos y todos ahorramos en la factura del ascensor y zonas comunes. El proceso fue muy sencillo gracias a su gestión. 100% recomendado.",
      type: "Comunidad de vecinos · 15 kWp",
    },
    {
      name: "Pedro L.",
      location: "Torre-Pacheco",
      rating: 5,
      text: "Me sorprendió la bonificación del IBI durante 5 años en Torre-Pacheco. Sumado a la deducción del IRPF, la instalación me salió muy económica. Excelente servicio.",
      type: "Casa unifamiliar · 5 kWp",
    },
    {
      name: "Finca El Pinar",
      location: "Lorca",
      rating: 5,
      text: "Instalación solar para el sistema de riego. Hemos reducido el coste del agua a la mitad. El equipo conoce muy bien las subvenciones agrícolas de la Región.",
      type: "Explotación agrícola · 30 kWp",
    },
  ];

  return (
    <section id="testimonios" className="py-20" style={{ background: "oklch(0.98 0.005 80)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <div className="badge-solar mx-auto mb-4">
            <Star className="w-3.5 h-3.5" />
            Testimonios reales
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Lo que dicen nuestros clientes en Murcia
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="stars text-xl">★★★★★</div>
            <span className="text-lg font-bold" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>4.9/5</span>
            <span className="text-sm" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>basado en +300 reseñas de Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card-solar flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="flex items-center gap-1 mb-3 stars text-sm">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "oklch(0.35 0.04 250)", fontFamily: "Inter, sans-serif" }}>
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="font-semibold text-sm" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "oklch(0.60 0.19 42)", fontFamily: "Inter, sans-serif" }}>{t.location} · {t.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Zones (SEO Silos) ────────────────────────────────────────────────
function ZonesSection() {
  const zones = [
    { name: "Murcia capital", slug: "murcia", desc: "Instalación solar en todos los barrios de Murcia: El Carmen, La Flota, La Paz, Espinardo, Churra..." },
    { name: "Cartagena", slug: "cartagena", desc: "Especialistas en instalaciones solares en Cartagena, Los Dolores, La Manga, Los Alcázares..." },
    { name: "Lorca", slug: "lorca", desc: "Placas solares en Lorca y pedanías. Expertos en instalaciones agrícolas en el Altiplano." },
    { name: "Molina de Segura", slug: "molina-de-segura", desc: "Instalación solar en Molina de Segura, El Llano, La Ribera, Alguazas..." },
    { name: "Alcantarilla", slug: "alcantarilla", desc: "Placas solares en Alcantarilla. Bonificación IBI disponible para instalaciones residenciales." },
    { name: "Torre-Pacheco", slug: "torre-pacheco", desc: "Mejor bonificación IBI de la Región: 50% durante 5 años en Torre-Pacheco." },
    { name: "San Javier", slug: "san-javier", desc: "Instalación solar en San Javier, Santiago de la Ribera, Los Narejos y La Manga." },
    { name: "Yecla", slug: "yecla", desc: "Placas solares en Yecla. Soluciones para viviendas y empresas del Altiplano murciano." },
    { name: "Jumilla", slug: "jumilla", desc: "Instalación solar en Jumilla. Especialistas en instalaciones agrícolas y bodegas." },
    { name: "Cieza", slug: "cieza", desc: "Placas solares en Cieza y la comarca del Noroeste murciano." },
  ];

  return (
    <section id="zonas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge-solar mx-auto mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Zonas de servicio
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Instalamos placas solares en toda la Región de Murcia
          </h2>
          <p className="section-subtitle text-lg max-w-2xl mx-auto">
            Cubrimos todos los municipios de la Región de Murcia con equipo técnico propio. Sin desplazamientos adicionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {zones.map((zone, i) => (
            <motion.a
              key={i}
              href={`/murcia/instalacion-placas-solares-${zone.slug}/`}
              className="group p-4 rounded-xl border border-gray-100 hover:border-orange-300 bg-white hover:bg-orange-50/30 transition-all"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.60 0.19 42)" }} />
                <span className="text-sm font-bold" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                  {zone.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                {zone.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cuánto cuesta instalar placas solares en Murcia?",
      a: "El precio de una instalación solar en Murcia varía según el tamaño y tipo. Para una casa unifamiliar, el coste medio es de 6.000–9.000€ antes de subvenciones. Con la deducción IRPF del 20% y las bonificaciones IBI municipales, el coste real puede reducirse un 30–40%. Solicita un presupuesto gratuito y te daremos un precio exacto para tu caso.",
    },
    {
      q: "¿Cuánto ahorro al mes con placas solares en Murcia?",
      a: "Murcia tiene una de las mayores irradiaciones solares de España, con más de 3.300 horas de sol al año. Una instalación media de 5–6 kWp puede generar entre 7.000 y 8.500 kWh anuales, lo que se traduce en un ahorro de 80–120€ al mes, dependiendo de tu tarifa eléctrica y consumo.",
    },
    {
      q: "¿Qué subvenciones hay para placas solares en Murcia en 2025?",
      a: "En 2025, las principales ayudas son: deducción IRPF del 20% (nacional), subvenciones Next Generation EU (hasta 3.000€), bonificaciones IBI municipales (del 40% al 50% durante 3–5 años según el municipio), e IVA reducido al 10% para viviendas habituales. Gestionamos todas las subvenciones por ti sin coste adicional.",
    },
    {
      q: "¿Cuánto tiempo tarda la instalación?",
      a: "La instalación física se realiza en 1–2 días. Los trámites administrativos (legalización, conexión a red, alta en el IDAE) pueden tardar entre 2 y 6 semanas, dependiendo del municipio. Nos encargamos de todos los trámites para que no tengas que preocuparte de nada.",
    },
    {
      q: "¿Puedo instalar placas solares en un piso o comunidad de vecinos?",
      a: "Sí. El autoconsumo colectivo permite instalar placas solares en edificios y comunidades de vecinos. El ahorro se reparte entre todos los vecinos de forma proporcional a su consumo. Solo se necesita la aprobación de la junta de propietarios por mayoría simple.",
    },
    {
      q: "¿Qué pasa con el excedente de energía que no consumo?",
      a: "El excedente de energía que no consumes se vierte a la red eléctrica y recibes una compensación económica en tu factura. Con la tarifa de compensación simplificada, puedes descontar hasta el 100% de tu factura en los meses de mayor producción.",
    },
    {
      q: "¿Necesito una batería para aprovechar mejor las placas solares?",
      a: "No es obligatorio, pero sí recomendable si quieres maximizar tu autoconsumo. Sin batería, solo aprovechas la energía cuando el sol brilla. Con batería, puedes almacenar el excedente del día y usarlo por la noche. En Murcia, con tanta irradiación solar, la batería puede aumentar el autoconsumo del 30% al 80%.",
    },
    {
      q: "¿Cuántos años dura una instalación solar?",
      a: "Los paneles solares tienen una vida útil de 30–35 años. Los fabricantes garantizan el 80% de la potencia inicial después de 25 años. El inversor tiene una vida útil de 10–15 años. Nosotros ofrecemos garantía total de 25 años sobre toda la instalación.",
    },
  ];

  return (
    <section id="faq" className="py-20" style={{ background: "oklch(0.98 0.005 80)" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-solar mx-auto mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              Preguntas frecuentes
            </div>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              Todo lo que necesitas saber sobre placas solares en Murcia
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="text-sm font-semibold pr-4" style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.18 0.04 250)" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                    style={{ color: "oklch(0.60 0.19 42)" }}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "oklch(0.52 0.02 250)", fontFamily: "Inter, sans-serif" }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20" style={{ background: "oklch(0.60 0.19 42)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
              ¿A qué esperas para empezar a ahorrar?
            </h2>
            <p className="text-white/85 text-lg mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Cada mes que pasa sin placas solares es dinero que regala a la compañía eléctrica. 
              En Murcia, con más de 3.300 horas de sol al año, el potencial de ahorro es enorme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#presupuesto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-base bg-white transition-all hover:bg-gray-50"
                style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.60 0.19 42)" }}
              >
                <Sun className="w-5 h-5" />
                Solicitar estudio gratuito
              </a>
              <a
                href="tel:+34968000000"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-base border-2 border-white text-white transition-all hover:bg-white/10"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                968 000 000
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "320px", minHeight: "320px" }}>
            <img
              src={FAMILY_IMG}
              alt="Familia murciana ahorrando en la factura de la luz con placas solares"
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "800/500" }}
            />
            <div className="absolute inset-0 flex items-end p-6" style={{ background: "linear-gradient(to top, oklch(0.18 0.06 245 / 0.7) 0%, transparent 60%)" }}>
              <div className="text-white">
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "Sora, sans-serif" }}>+850 familias murcianas</div>
                <div className="text-sm text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>ya ahorran con Murcia Energía Solar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Fat Footer Maestro ───────────────────────────────────────────────────────
function Footer() {
  const col = "oklch(0.65 0.02 250)";
  const heading = { fontFamily: "Sora, sans-serif" };
  const body = { fontFamily: "Inter, sans-serif" };
  const linkCls = "text-xs hover:text-orange-400 transition-colors leading-relaxed";

  const servicios = [
    { label: "Instalación placas solares residencial Murcia", href: "/servicios/instalacion-solar-residencial" },
    { label: "Instalación solar industrial Murcia", href: "/servicios/instalacion-solar-industrial" },
    { label: "Autoconsumo colectivo comunidades vecinos", href: "/servicios/autoconsumo-colectivo" },
    { label: "Baterías almacenamiento solar Murcia", href: "/servicios/baterias-almacenamiento-solar" },
    { label: "Mantenimiento placas solares Murcia", href: "/servicios/mantenimiento-placas-solares" },
    { label: "Subvenciones placas solares Murcia 2025", href: "/servicios/subvenciones-placas-solares" },
  ];

  const murciaCapital = [
    { label: "Placas solares La Flota Murcia", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "Instalación solar El Carmen Murcia", href: "/murcia/instalacion-placas-solares-el-carmen" },
    { label: "Placas solares Espinardo Murcia", href: "/murcia/instalacion-placas-solares-espinardo" },
    { label: "Instalación fotovoltaica Churra", href: "/murcia/instalacion-placas-solares-churra" },
    { label: "Placas solares La Paz Murcia", href: "/murcia/instalacion-placas-solares-la-paz" },
    { label: "Instalación solar El Ranero Murcia", href: "/murcia/instalacion-placas-solares-el-ranero" },
    { label: "Placas solares Vistabella Murcia", href: "/murcia/instalacion-placas-solares-vistabella" },
    { label: "Instalación solar Juan Carlos I", href: "/murcia/instalacion-placas-solares-juan-carlos-i" },
    { label: "Placas solares La Alberca Murcia", href: "/murcia/instalacion-placas-solares-la-alberca" },
    { label: "Instalación fotovoltaica El Palmar", href: "/murcia/instalacion-placas-solares-el-palmar" },
  ];

  const municipios = [
    { label: "Instalación placas solares Cartagena", href: "/murcia/instalacion-placas-solares-cartagena", badge: "IBI 50%" },
    { label: "Placas solares Lorca", href: "/murcia/instalacion-placas-solares-lorca", badge: null },
    { label: "Instalación solar Molina de Segura", href: "/murcia/instalacion-placas-solares-molina-de-segura", badge: "IBI 40%" },
    { label: "Placas solares Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla", badge: null },
    { label: "Instalación solar Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco", badge: "IBI 50%" },
    { label: "Placas solares San Javier", href: "/murcia/instalacion-placas-solares-san-javier", badge: "IBI 50%" },
    { label: "Instalación fotovoltaica Yecla", href: "/murcia/instalacion-placas-solares-yecla", badge: "IBI 50%" },
    { label: "Placas solares Jumilla", href: "/murcia/instalacion-placas-solares-jumilla", badge: "IBI 50%" },
    { label: "Instalación solar Cieza", href: "/murcia/instalacion-placas-solares-cieza", badge: null },
  ];

  const subvenciones = [
    { label: "Deducción IRPF 20% placas solares", href: "/servicios/subvenciones-placas-solares" },
    { label: "Subvenciones Next Generation EU Murcia", href: "/servicios/subvenciones-placas-solares" },
    { label: "Bonificación IBI solar Cartagena 50%", href: "/murcia/instalacion-placas-solares-cartagena" },
    { label: "Bonificación IBI solar Yecla 50%", href: "/murcia/instalacion-placas-solares-yecla" },
    { label: "Bonificación IBI solar Jumilla 50%", href: "/murcia/instalacion-placas-solares-jumilla" },
    { label: "Bonificación IBI solar Molina 40%", href: "/murcia/instalacion-placas-solares-molina-de-segura" },
    { label: "Subvenciones solares Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco" },
    { label: "Ayudas instalación solar San Javier", href: "/murcia/instalacion-placas-solares-san-javier" },
  ];

  return (
    <footer style={{ background: "oklch(0.10 0.04 250)" }}>
      {/* NAP Bar */}
      <div className="border-b" style={{ borderColor: "oklch(1 0 0 / 0.06)", background: "oklch(0.13 0.04 250)" }}>
        <div className="container py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+34968000000" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "oklch(0.72 0.16 42)", ...body }}>
              <Phone className="w-4 h-4" />968 000 000
            </a>
            <a href="mailto:info@murciaenergiasolar.es" className="flex items-center gap-2 text-xs" style={{ color: col, ...body }}>
              <Mail className="w-3.5 h-3.5" />info@murciaenergiasolar.es
            </a>
            <div className="flex items-center gap-2 text-xs" style={{ color: col, ...body }}>
              <MapPin className="w-3.5 h-3.5" />Calle Mayor 1, 30001 Murcia
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: col, ...body }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Lun–Vie 8:00–19:00 · Sáb 9:00–14:00
          </div>
        </div>
      </div>

      {/* Main Fat Footer Grid */}
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">

          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.60 0.19 42)" }}>
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm text-white block" style={heading}>Murcia</span>
                <span className="text-xs font-semibold block" style={{ ...heading, color: "oklch(0.72 0.16 42)" }}>Energía Solar</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: col, ...body }}>
              Instaladores certificados IDAE en la Región de Murcia. +850 instalaciones · Garantía 25 años · Presupuesto en 24h.
            </p>
            <a href="#presupuesto" className="btn-solar text-xs py-2.5 px-4 w-full justify-center">
              Estudio Gratuito
            </a>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4" style={heading}>Servicios</h4>
            <ul className="flex flex-col gap-2">
              {servicios.map((s, i) => (
                <li key={i}>
                  <a href={s.href} className={linkCls} style={{ color: col, ...body }}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Murcia Capital */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4" style={heading}>Murcia Capital</h4>
            <ul className="flex flex-col gap-2">
              {murciaCapital.map((z, i) => (
                <li key={i}>
                  <a href={z.href} className={linkCls} style={{ color: col, ...body }}>{z.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Municipios */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4" style={heading}>Municipios</h4>
            <ul className="flex flex-col gap-2">
              {municipios.map((z, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <a href={z.href} className={linkCls} style={{ color: col, ...body }}>{z.label}</a>
                  {z.badge && <span className="text-[10px] bg-green-900 text-green-300 font-bold px-1 py-0.5 rounded shrink-0">{z.badge}</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Subvenciones */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4" style={heading}>Subvenciones</h4>
            <ul className="flex flex-col gap-2">
              {subvenciones.map((s, i) => (
                <li key={i}>
                  <a href={s.href} className={linkCls} style={{ color: col, ...body }}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Empresa */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4" style={heading}>Empresa</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Sobre nosotros", href: "/" },
                { label: "Instaladores certificados", href: "/" },
                { label: "Garantías y certificaciones", href: "/" },
                { label: "Blog solar Murcia", href: "/" },
                { label: "Contacto", href: "/" },
                { label: "Aviso legal", href: "/aviso-legal/" },
                { label: "Política de privacidad", href: "/politica-privacidad/" },
                { label: "Cookies", href: "/cookies/" },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className={linkCls} style={{ color: col, ...body }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "oklch(1 0 0 / 0.07)" }}>
          <p className="text-xs" style={{ color: "oklch(0.45 0.02 250)", ...body }}>
            © 2025 Murcia Energía Solar · Instaladores certificados IDAE · Región de Murcia
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs justify-center" style={{ color: "oklch(0.45 0.02 250)", ...body }}>
            <span>CIF: B-XXXXXXXX</span>
            <span>·</span>
            <span>Calle Mayor 1, 30001 Murcia</span>
            <span>·</span>
            <a href="/aviso-legal/" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="/politica-privacidad/" className="hover:text-white transition-colors">Privacidad</a>
            <a href="/cookies/" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Floating Button ─────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34968000000?text=Hola,%20me%20interesa%20instalar%20placas%20solares%20en%20Murcia.%20¿Podéis%20hacerme%20un%20presupuesto%20gratuito?"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-cta md:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div>
            <div className="text-xs font-semibold text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>¿Tienes dudas?</div>
            <a href="tel:+34968000000" className="text-base font-bold text-white flex items-center gap-1.5" style={{ fontFamily: "Sora, sans-serif" }}>
              <Phone className="w-4 h-4" />
              968 000 000
            </a>
          </div>
          <a href="#presupuesto" className="btn-solar text-sm py-2.5 px-5">
            Presupuesto Gratis
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  // Schema FAQ JSON-LD para rich snippets en Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "¿Cuánto cuesta instalar placas solares en Murcia?", "acceptedAnswer": { "@type": "Answer", "text": "El precio de una instalación solar en Murcia varía según el tamaño y tipo. Para una casa unifamiliar, el coste medio es de 6.000–9.000€ antes de subvenciones. Con la deducción IRPF del 20% y las bonificaciones IBI municipales, el coste real puede reducirse un 30–40%." } },
      { "@type": "Question", "name": "¿Cuánto ahorro al mes con placas solares en Murcia?", "acceptedAnswer": { "@type": "Answer", "text": "Una instalación media de 5–6 kWp puede generar entre 7.000 y 8.500 kWh anuales, lo que se traduce en un ahorro de 80–120€ al mes." } },
      { "@type": "Question", "name": "¿Qué subvenciones hay para placas solares en Murcia en 2025?", "acceptedAnswer": { "@type": "Answer", "text": "En 2025, las principales ayudas son: deducción IRPF del 20%, subvenciones Next Generation EU (hasta 3.000€), bonificaciones IBI municipales (del 40% al 50% durante 3–5 años) e IVA reducido al 10%." } },
      { "@type": "Question", "name": "¿Cuánto tiempo tarda la instalación?", "acceptedAnswer": { "@type": "Answer", "text": "La instalación física se realiza en 1–2 días. Los trámites administrativos pueden tardar entre 2 y 6 semanas." } },
      { "@type": "Question", "name": "¿Puedo instalar placas solares en un piso o comunidad de vecinos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El autoconsumo colectivo permite instalar placas solares en edificios y comunidades de vecinos. Solo se necesita la aprobación de la junta de propietarios por mayoría simple." } },
      { "@type": "Question", "name": "¿Cuántos años dura una instalación solar?", "acceptedAnswer": { "@type": "Answer", "text": "Los paneles solares tienen una vida útil de 30–35 años. Los fabricantes garantizan el 80% de la potencia inicial después de 25 años." } }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SavingsCalculator />
      <ServicesSection />
      <WhyUsSection />
      <SubsidiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ZonesSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
    </>  
  );
}
