/**
 * FOOTER — Componente global reutilizable (Fat Footer 6 columnas)
 * Design: "Claridad Solar Mediterránea"
 * Usado en: Home, LocationPage, ServicePage
 */

import { Sun, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
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
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.60 0.19 42)" }}>
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm text-white block" style={heading}>Murcia</span>
                <span className="text-xs font-semibold block" style={{ ...heading, color: "oklch(0.72 0.16 42)" }}>Energía Solar</span>
              </div>
            </a>
            <p className="text-xs leading-relaxed mb-5" style={{ color: col, ...body }}>
              Instaladores certificados IDAE en la Región de Murcia. +850 instalaciones · Garantía 25 años · Presupuesto en 24h.
            </p>
            <a href="/#presupuesto" className="btn-solar text-xs py-2.5 px-4 w-full justify-center">
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
