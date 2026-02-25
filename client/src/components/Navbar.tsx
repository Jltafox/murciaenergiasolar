/**
 * NAVBAR — Componente global reutilizable
 * Design: "Claridad Solar Mediterránea"
 * Usado en: Home, LocationPage, ServicePage
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, Phone, ChevronDown, Menu, X
} from "lucide-react";

export default function Navbar() {
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
          <a href="/#presupuesto" className="btn-solar text-sm py-2.5 px-5">
            Presupuesto Gratis
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.28 0.07 245)" }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              <a href="/#presupuesto" className="btn-solar text-center justify-center" onClick={() => setMenuOpen(false)}>
                Solicitar Presupuesto Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
