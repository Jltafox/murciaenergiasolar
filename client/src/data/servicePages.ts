/**
 * servicePages.ts — Datos de las 6 Páginas de Servicio
 * Murcia Energía Solar
 *
 * Servicios:
 * 1. Instalación Solar Residencial
 * 2. Instalación Solar Industrial
 * 3. Baterías de Almacenamiento
 * 4. Mantenimiento y Revisión
 * 5. Subvenciones y Tramitación
 * 6. Autoconsumo Colectivo
 */

import type { ServicePageProps } from "@/components/ServicePage";

const BASE_URL = "https://murciaenergiasolar.es";

// ─── Incentivos comunes ────────────────────────────────────────────────────
const incentivosBase = [
  { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios de vivienda habitual" },
  { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
  { ayuda: "Bonificación IBI (según municipio)", importe: "10%–50% durante 1–5 años", quien: "Propietarios con instalación solar" },
  { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
];

const incentivosIndustrial = [
  { ayuda: "Deducción Impuesto de Sociedades", importe: "10% de la inversión", quien: "Empresas y autónomos" },
  { ayuda: "Amortización acelerada", importe: "100% en el año de instalación", quien: "Pymes y autónomos" },
  { ayuda: "Subvenciones IDAE (PERTE)", importe: "Variable según proyecto", quien: "Instalaciones industriales > 10 kWp" },
  { ayuda: "IVA deducible al 100%", importe: "21% recuperable", quien: "Empresas con actividad económica" },
];

// ─── 1. Instalación Solar Residencial ─────────────────────────────────────
export const instalacionResidencialData: ServicePageProps = {
  metaTitle: "Instalación de Placas Solares Residencial en Murcia | Presupuesto Gratis 2025",
  metaDescription: "Instalamos placas solares en viviendas de Murcia. Ahorra hasta 1.200€/año. Deducción IRPF 20%, bonificación IBI y subvenciones Next Generation. Presupuesto en 24h.",
  slug: "instalacion-solar-residencial",
  schema: {
    name: "Instalación de Placas Solares Residencial",
    description: "Instalación de sistemas fotovoltaicos de autoconsumo para viviendas unifamiliares, chalets y pisos en la Región de Murcia. Incluye diseño, instalación, legalización y tramitación de subvenciones.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Instalación fotovoltaica residencial",
    priceRange: "4.500€ – 12.000€",
    url: `${BASE_URL}/servicios/instalacion-solar-residencial`,
  },
  h1: "Instalación de Placas Solares para tu Hogar en Murcia",
  h1Accent: "Placas Solares",
  heroSubtitle: "Ahorra hasta 1.200€/año desde el primer mes — sin burocracia, sin complicaciones",
  heroIntro: "Con más de 3.300 horas de sol al año, Murcia es la región con mayor irradiación solar de España. Una instalación fotovoltaica de 5–6 kWp genera entre 7.000 y 8.500 kWh anuales, cubriendo el 80% del consumo de una familia de 4 personas.\n\nNosotros nos encargamos de todo: diseño personalizado, instalación en 1–2 días, legalización ante la Consejería de Industria y tramitación de todas las subvenciones disponibles. Tú solo tienes que disfrutar del ahorro.",
  heroBadge: "Instaladores certificados IDAE · +850 instalaciones en Murcia",
  quickBenefits: [
    {
      icon: "euro",
      title: "Ahorra hasta 1.200€/año",
      description: "Una instalación de 5 kWp reduce tu factura eléctrica entre un 70% y un 90% en los meses de mayor producción solar.",
    },
    {
      icon: "clock",
      title: "Instalación en 1–2 días",
      description: "Nuestro equipo técnico propio realiza la instalación física en 1 o 2 días. Nos encargamos de todos los trámites administrativos.",
    },
    {
      icon: "shield",
      title: "Garantía de 25 años",
      description: "Los paneles solares de primera marca garantizan el 80% de la potencia nominal a los 25 años, con degradación inferior al 0,5% anual.",
    },
  ],
  uspsTitle: "Por qué instalamos diferente — lo que aprendimos de los líderes europeos",
  usps: [
    {
      badge: "Inspirado en Enpal (Berlín)",
      title: "Solución energética integral, no solo paneles",
      body: "Como Enpal en Berlín, ofrecemos una solución completa: paneles solares + batería de almacenamiento + cargador de vehículo eléctrico + monitorización en tiempo real. Un solo proveedor, un solo contrato, un solo punto de contacto.",
    },
    {
      badge: "Inspirado en BCN Energía (Barcelona)",
      title: "Calculadora de ahorro personalizada en 4 pasos",
      body: "Antes de darte un presupuesto, calculamos tu ahorro real basándonos en tu consumo actual, la orientación de tu tejado y los incentivos fiscales de tu municipio. Sin sorpresas, sin letra pequeña.",
    },
    {
      badge: "Diferencial vs competencia nacional",
      title: "Equipo técnico propio — no subcontratamos",
      body: "A diferencia de los marketplaces nacionales que subcontratan la instalación, nuestro equipo técnico es propio. Eso significa mayor control de calidad, mayor responsabilidad y un único interlocutor para cualquier incidencia.",
    },
    {
      badge: "Inspirado en Solfy (Madrid)",
      title: "Tabla de bonificaciones IBI por municipio",
      body: "Publicamos y actualizamos las bonificaciones IBI de cada municipio de la Región de Murcia. Cartagena (50%, 3 años), Yecla (50%, 5 años), Jumilla (50%, 5 años), Torre-Pacheco (50%, 1 año)... Gestionamos la solicitud sin coste adicional.",
    },
  ],
  processTitle: "Cómo instalamos tus placas solares",
  processSubtitle: "De la primera llamada a la primera factura reducida en 4–8 semanas",
  processSteps: [
    { number: "01", title: "Estudio gratuito", description: "Analizamos tu consumo, tu tejado y los incentivos disponibles en tu municipio. Presupuesto en menos de 24 horas." },
    { number: "02", title: "Diseño personalizado", description: "Diseñamos la instalación óptima para tu tejado: número de paneles, potencia, orientación y sistema de monitorización." },
    { number: "03", title: "Instalación en 1–2 días", description: "Nuestro equipo técnico propio realiza la instalación. Sin subcontratas, sin sorpresas." },
    { number: "04", title: "Legalización y subvenciones", description: "Tramitamos la legalización ante la Consejería de Industria y gestionamos todas las subvenciones disponibles." },
  ],
  incentivesTitle: "Subvenciones y ayudas para instalación residencial en Murcia",
  incentives: incentivosBase,
  ctaTitle: "¿Cuánto puedes ahorrar con placas solares en tu casa?",
  ctaSubtitle: "Calcula tu ahorro real en menos de 2 minutos. Sin compromiso, sin letra pequeña.",
  faqs: [
    { pregunta: "¿Cuánto cuesta una instalación solar residencial en Murcia?", respuesta: "Una instalación residencial media de 5–6 kWp cuesta entre 7.000€ y 9.000€ antes de subvenciones. Con la deducción IRPF del 20% y las subvenciones Next Generation EU, el coste real puede quedar en 3.500–5.000€." },
    { pregunta: "¿En cuánto tiempo se amortiza la inversión?", respuesta: "Con el ahorro en factura eléctrica y los incentivos fiscales disponibles, la amortización media en Murcia es de 6–8 años. En municipios con bonificación IBI del 50% (Cartagena, Yecla, Jumilla), puede reducirse a 4–5 años." },
    { pregunta: "¿Qué pasa con el excedente de energía que no consumo?", respuesta: "El excedente se vierte a la red eléctrica y recibes una compensación económica en tu factura mediante el sistema de compensación simplificada. En verano, muchos clientes tienen factura cero o compensación positiva." },
    { pregunta: "¿Necesito permiso del Ayuntamiento para instalar placas solares?", respuesta: "Sí, en la mayoría de los casos se requiere una comunicación previa o licencia de obras menor. Nosotros gestionamos todos los permisos y trámites sin coste adicional." },
    { pregunta: "¿Funciona la instalación en días nublados?", respuesta: "Sí. Los paneles solares modernos generan electricidad incluso en días nublados, aunque con menor rendimiento. En Murcia, con más de 3.300 horas de sol anuales, la producción media es muy alta incluso en invierno." },
  ],
  relatedServices: [
    { label: "Baterías de almacenamiento", href: "/servicios/baterias-almacenamiento-solar", description: "Almacena el excedente y úsalo de noche" },
    { label: "Autoconsumo colectivo", href: "/servicios/autoconsumo-colectivo", description: "Para comunidades de vecinos y edificios" },
    { label: "Subvenciones y tramitación", href: "/servicios/subvenciones-placas-solares", description: "Gestión completa de ayudas y bonificaciones" },
  ],
  stat1Value: "850+", stat1Label: "Instalaciones en Murcia",
  stat2Value: "1.200€", stat2Label: "Ahorro medio anual",
  stat3Value: "4.9★", stat3Label: "Valoración en Google",
};

// ─── 2. Instalación Solar Industrial ──────────────────────────────────────
export const instalacionIndustrialData: ServicePageProps = {
  metaTitle: "Instalación Solar Industrial en Murcia | Naves, Empresas y Polígonos 2025",
  metaDescription: "Instalamos placas solares en naves industriales, empresas y polígonos de Murcia. Ahorra hasta el 80% de tu factura. Deducción IS 10%. Presupuesto gratuito en 24h.",
  slug: "instalacion-solar-industrial",
  schema: {
    name: "Instalación de Placas Solares Industrial",
    description: "Instalación de sistemas fotovoltaicos de autoconsumo para naves industriales, empresas, polígonos y explotaciones agrícolas en la Región de Murcia.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Instalación fotovoltaica industrial y comercial",
    priceRange: "15.000€ – 500.000€",
    url: `${BASE_URL}/servicios/instalacion-solar-industrial`,
  },
  h1: "Instalación Solar Industrial en Murcia",
  h1Accent: "Solar Industrial",
  heroSubtitle: "Reduce tu factura eléctrica hasta un 80% — ROI en 3–5 años para naves y empresas",
  heroIntro: "Las empresas y naves industriales de Murcia tienen un perfil de consumo ideal para la energía solar: alto consumo diurno, grandes superficies de cubierta disponibles y facturas eléctricas que pueden superar los 5.000€ mensuales.\n\nUna instalación fotovoltaica industrial de 50–200 kWp puede generar entre 65.000 y 260.000 kWh anuales, reduciendo la factura eléctrica entre un 60% y un 80%. El retorno de la inversión se sitúa entre 3 y 5 años.",
  heroBadge: "Especialistas en instalaciones industriales · Proyectos desde 10 kWp hasta 2 MWp",
  quickBenefits: [
    {
      icon: "euro",
      title: "ROI en 3–5 años",
      description: "Con la deducción en el Impuesto de Sociedades y la amortización acelerada, el retorno de la inversión se sitúa entre 3 y 5 años.",
    },
    {
      icon: "zap",
      title: "Hasta 80% de ahorro",
      description: "Las empresas con alto consumo diurno pueden reducir su factura eléctrica hasta un 80% en los meses de mayor producción solar.",
    },
    {
      icon: "award",
      title: "Proyectos llave en mano",
      description: "Nos encargamos de todo: ingeniería, permisos, instalación, legalización y tramitación de subvenciones IDAE y PERTE.",
    },
  ],
  uspsTitle: "Por qué las empresas de Murcia nos eligen para su instalación solar",
  usps: [
    {
      badge: "Inspirado en Terre Solaire (París)",
      title: "Especialistas en grandes instalaciones industriales",
      body: "Como Terre Solaire en Île-de-France, tenemos capacidad para proyectos desde 10 kWp hasta 2 MWp. Contamos con ingenieros especializados en instalaciones industriales y certificaciones ISO 9001/14001.",
    },
    {
      badge: "Diferencial fiscal",
      title: "Deducción IS del 10% + amortización acelerada",
      body: "Las empresas pueden deducir el 10% de la inversión en el Impuesto de Sociedades y amortizar el 100% del activo en el año de instalación. Nuestros asesores fiscales te ayudan a maximizar el beneficio tributario.",
    },
    {
      badge: "Inspirado en Myenergy (Milán)",
      title: "Gestión interna 100% del proyecto",
      body: "Como Myenergy en Milán, gestionamos internamente todo el proyecto: ingeniería, permisos, instalación y mantenimiento. Sin subcontratas, sin intermediarios, con un único punto de contacto.",
    },
    {
      badge: "Sector agrícola",
      title: "Especialistas en bombeo solar para riego",
      body: "Las explotaciones agrícolas de Murcia pueden eliminar prácticamente el coste eléctrico del riego con un sistema de bombeo solar directo. Diseñamos instalaciones específicas para sistemas de riego por goteo y aspersión.",
    },
  ],
  processTitle: "Cómo ejecutamos tu proyecto solar industrial",
  processSubtitle: "Desde el estudio de viabilidad hasta la puesta en marcha en 6–12 semanas",
  processSteps: [
    { number: "01", title: "Auditoría energética", description: "Analizamos tu consumo histórico, tu perfil de carga y la superficie de cubierta disponible para diseñar la instalación óptima." },
    { number: "02", title: "Ingeniería y permisos", description: "Elaboramos el proyecto técnico, tramitamos los permisos de acceso a la red y las licencias municipales necesarias." },
    { number: "03", title: "Instalación certificada", description: "Nuestro equipo de instaladores industriales ejecuta el proyecto con materiales de primera marca y control de calidad en cada fase." },
    { number: "04", title: "Legalización y subvenciones", description: "Legalizamos la instalación ante la Consejería de Industria y tramitamos las subvenciones IDAE y PERTE disponibles." },
  ],
  incentivesTitle: "Incentivos fiscales para instalaciones industriales en Murcia",
  incentives: incentivosIndustrial,
  ctaTitle: "¿Cuánto puede ahorrar tu empresa con energía solar?",
  ctaSubtitle: "Solicita una auditoría energética gratuita. Calculamos tu ahorro real en 48 horas.",
  faqs: [
    { pregunta: "¿Qué tamaño de instalación necesita mi nave industrial?", respuesta: "Depende de tu consumo eléctrico y la superficie de cubierta disponible. Una nave con una factura de 3.000€/mes y 500 m² de cubierta puede instalar entre 80 y 120 kWp, reduciendo la factura hasta un 70%." },
    { pregunta: "¿Puedo instalar placas solares en una nave de alquiler?", respuesta: "Sí, con el consentimiento del propietario. En muchos casos, el propietario también se beneficia de la instalación mediante la revalorización del inmueble. Podemos ayudarte a negociar el acuerdo." },
    { pregunta: "¿Qué subvenciones están disponibles para empresas?", respuesta: "Las empresas pueden acceder a la deducción del 10% en el IS, la amortización acelerada del 100%, las subvenciones IDAE (PERTE) para instalaciones industriales y el IVA deducible al 100%." },
    { pregunta: "¿Funciona la instalación solar para explotaciones agrícolas?", respuesta: "Sí. Las explotaciones agrícolas de Murcia son uno de los perfiles con mayor potencial de ahorro. Un sistema de bombeo solar directo puede eliminar prácticamente el coste eléctrico del riego durante los meses de primavera y verano." },
  ],
  relatedServices: [
    { label: "Instalación residencial", href: "/servicios/instalacion-solar-residencial", description: "Para viviendas y chalets" },
    { label: "Baterías de almacenamiento", href: "/servicios/baterias-almacenamiento-solar", description: "Almacena el excedente para la noche" },
    { label: "Mantenimiento y revisión", href: "/servicios/mantenimiento-placas-solares", description: "Garantiza el máximo rendimiento" },
  ],
  stat1Value: "50+", stat1Label: "Proyectos industriales",
  stat2Value: "80%", stat2Label: "Reducción media de factura",
  stat3Value: "3–5 años", stat3Label: "ROI medio",
};

// ─── 3. Baterías de Almacenamiento ────────────────────────────────────────
export const bateriasData: ServicePageProps = {
  metaTitle: "Baterías de Almacenamiento Solar en Murcia | Tesla Powerwall · Huawei · 2025",
  metaDescription: "Instalamos baterías de almacenamiento solar en Murcia. Tesla Powerwall, Huawei LUNA y BYD. Factura cero de noche. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "baterias-almacenamiento-solar",
  schema: {
    name: "Instalación de Baterías de Almacenamiento Solar",
    description: "Instalación de baterías de almacenamiento de energía solar para viviendas y empresas en la Región de Murcia. Marcas: Tesla Powerwall, Huawei LUNA, BYD.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Instalación de baterías de almacenamiento solar",
    priceRange: "3.000€ – 15.000€",
    url: `${BASE_URL}/servicios/baterias-almacenamiento-solar`,
  },
  h1: "Baterías de Almacenamiento Solar en Murcia",
  h1Accent: "Baterías de Almacenamiento",
  heroSubtitle: "Usa la energía solar de día y de noche — factura cero las 24 horas",
  heroIntro: "Las placas solares producen energía cuando el sol brilla. Las baterías de almacenamiento guardan el excedente para usarlo cuando más lo necesitas: por la noche, en días nublados o durante los picos de consumo.\n\nCon una batería de 10 kWh y una instalación de 5 kWp, muchas familias en Murcia consiguen una autosuficiencia energética del 90–95%, con facturas de luz prácticamente cero durante todo el año.",
  heroBadge: "Distribuidores oficiales Tesla Powerwall · Huawei LUNA · BYD",
  quickBenefits: [
    {
      icon: "sun",
      title: "Autosuficiencia del 90–95%",
      description: "Combinar placas solares con batería permite alcanzar una autosuficiencia energética de hasta el 95%, con factura de luz casi cero.",
    },
    {
      icon: "shield",
      title: "Protección ante apagones",
      description: "La batería actúa como sistema de respaldo (UPS) ante cortes de suministro eléctrico, manteniendo los equipos críticos en funcionamiento.",
    },
    {
      icon: "euro",
      title: "Aprovecha la tarifa nocturna",
      description: "Carga la batería con energía solar de día y úsala de noche, evitando los precios más altos de la tarifa eléctrica en horas punta.",
    },
  ],
  uspsTitle: "Por qué instalamos las mejores baterías del mercado",
  usps: [
    {
      badge: "Distribuidores oficiales",
      title: "Tesla Powerwall, Huawei LUNA y BYD — las 3 marcas líderes",
      body: "Somos distribuidores oficiales de las tres marcas líderes del mercado. Te asesoramos sobre cuál es la mejor opción para tu instalación según tu consumo, tu presupuesto y tus necesidades de autonomía.",
    },
    {
      badge: "Inspirado en Enpal (Berlín)",
      title: "Solución integral: paneles + batería + wallbox",
      body: "Como Enpal en Berlín, ofrecemos la solución completa: paneles solares + batería de almacenamiento + cargador de vehículo eléctrico. Todo integrado, todo monitorizado desde una sola app.",
    },
    {
      badge: "Diferencial técnico",
      title: "Monitorización en tiempo real con app móvil",
      body: "Todas nuestras instalaciones incluyen un sistema de monitorización en tiempo real. Consulta desde tu móvil cuánta energía estás produciendo, consumiendo, almacenando y vertiendo a la red en cada momento.",
    },
    {
      badge: "Garantía ampliada",
      title: "10 años de garantía en baterías de primera marca",
      body: "Las baterías Tesla Powerwall, Huawei LUNA y BYD tienen 10 años de garantía del fabricante. Nosotros añadimos una garantía de instalación de 5 años sobre la mano de obra y los componentes de conexión.",
    },
  ],
  processTitle: "Cómo instalamos tu batería solar",
  processSubtitle: "Instalación en 1 día para baterías residenciales — sin obras, sin complicaciones",
  processSteps: [
    { number: "01", title: "Análisis de consumo", description: "Estudiamos tu perfil de consumo para determinar la capacidad de batería óptima y la marca más adecuada." },
    { number: "02", title: "Selección de batería", description: "Te presentamos las opciones disponibles (Tesla, Huawei, BYD) con comparativa de precio, capacidad y garantía." },
    { number: "03", title: "Instalación en 1 día", description: "La instalación de una batería residencial se realiza en un solo día, sin obras importantes ni cortes prolongados de suministro." },
    { number: "04", title: "Configuración y formación", description: "Configuramos el sistema de monitorización y te explicamos cómo sacar el máximo partido a tu batería solar." },
  ],
  incentivesTitle: "Ayudas para instalación de baterías de almacenamiento",
  incentives: [
    { ayuda: "Deducción IRPF (batería incluida)", importe: "20% del coste total", quien: "Propietarios de vivienda habitual" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€ (instalación completa)", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
    { ayuda: "Bonificación IBI (según municipio)", importe: "10%–50% durante 1–5 años", quien: "Propietarios con instalación solar" },
  ],
  ctaTitle: "¿Quieres tener factura de luz cero las 24 horas?",
  ctaSubtitle: "Calcula cuántas horas de autonomía necesitas y qué batería es la mejor para ti.",
  faqs: [
    { pregunta: "¿Cuánto cuesta una batería solar para casa?", respuesta: "Una batería residencial de 10 kWh (Tesla Powerwall o equivalente) cuesta entre 6.000€ y 9.000€ instalada. Con la deducción IRPF del 20%, el coste real queda en 4.800–7.200€." },
    { pregunta: "¿Qué capacidad de batería necesito?", respuesta: "Para una familia de 4 personas con un consumo medio de 10–12 kWh/día, una batería de 10 kWh proporciona autonomía nocturna completa. Para mayor autosuficiencia, se pueden instalar 2 baterías en paralelo." },
    { pregunta: "¿Puedo instalar una batería sin tener placas solares?", respuesta: "Sí, aunque no es lo más eficiente. Sin placas solares, la batería se carga con energía de la red en horas de tarifa barata (Valle) y se descarga en horas de tarifa alta (Punta), reduciendo la factura entre un 20% y un 30%." },
    { pregunta: "¿Cuánto dura una batería solar?", respuesta: "Las baterías de litio de primera marca (Tesla, Huawei, BYD) tienen una vida útil de 10–15 años y una garantía de 10 años del fabricante. La degradación de capacidad es inferior al 30% a los 10 años." },
  ],
  relatedServices: [
    { label: "Instalación residencial", href: "/servicios/instalacion-solar-residencial", description: "Paneles solares para tu hogar" },
    { label: "Mantenimiento y revisión", href: "/servicios/mantenimiento-placas-solares", description: "Garantiza el máximo rendimiento" },
    { label: "Subvenciones y tramitación", href: "/servicios/subvenciones-placas-solares", description: "Gestión completa de ayudas" },
  ],
  stat1Value: "10 kWh", stat1Label: "Capacidad media instalada",
  stat2Value: "95%", stat2Label: "Autosuficiencia máxima",
  stat3Value: "10 años", stat3Label: "Garantía de fábrica",
};

// ─── 4. Mantenimiento y Revisión ──────────────────────────────────────────
export const mantenimientoData: ServicePageProps = {
  metaTitle: "Mantenimiento de Placas Solares en Murcia | Revisión Anual · Limpieza · 2025",
  metaDescription: "Servicio de mantenimiento y revisión de placas solares en Murcia. Limpieza, revisión eléctrica y termografía. Garantiza el máximo rendimiento. Presupuesto en 24h.",
  slug: "mantenimiento-placas-solares",
  schema: {
    name: "Mantenimiento y Revisión de Placas Solares",
    description: "Servicio de mantenimiento preventivo y correctivo de instalaciones fotovoltaicas en la Región de Murcia. Incluye limpieza, revisión eléctrica, termografía y monitorización.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Mantenimiento de instalaciones fotovoltaicas",
    priceRange: "150€ – 800€/año",
    url: `${BASE_URL}/servicios/mantenimiento-placas-solares`,
  },
  h1: "Mantenimiento de Placas Solares en Murcia",
  h1Accent: "Mantenimiento de Placas Solares",
  heroSubtitle: "Garantiza el máximo rendimiento de tu instalación — revisión anual desde 150€",
  heroIntro: "Una instalación solar sin mantenimiento puede perder hasta un 25% de su rendimiento en los primeros 5 años. El polvo, la suciedad, las aves y los cambios en la vegetación colindante son los principales enemigos del rendimiento fotovoltaico en Murcia.\n\nNuestro servicio de mantenimiento anual incluye limpieza profesional, revisión eléctrica completa, inspección termográfica y actualización del sistema de monitorización. Garantizamos el máximo rendimiento de tu instalación durante toda su vida útil.",
  heroBadge: "Servicio de mantenimiento preventivo y correctivo · Respuesta en 24h",
  quickBenefits: [
    {
      icon: "zap",
      title: "Recupera hasta el 25% de rendimiento",
      description: "La limpieza y revisión anual puede recuperar hasta un 25% del rendimiento perdido por suciedad, sombras y degradación de conexiones.",
    },
    {
      icon: "wrench",
      title: "Detección temprana de averías",
      description: "La inspección termográfica detecta células defectuosas, puntos calientes y conexiones degradadas antes de que se conviertan en averías graves.",
    },
    {
      icon: "clock",
      title: "Respuesta en 24 horas",
      description: "Ante cualquier incidencia o avería, nuestro equipo técnico se desplaza en menos de 24 horas para diagnosticar y resolver el problema.",
    },
  ],
  uspsTitle: "Por qué el mantenimiento profesional marca la diferencia",
  usps: [
    {
      badge: "Dato técnico",
      title: "El polvo de Murcia reduce el rendimiento hasta un 15%",
      body: "La calima y el polvo del Sahara son especialmente frecuentes en Murcia. Un panel cubierto de polvo puede perder hasta un 15% de su rendimiento. La limpieza profesional con agua desionizada y cepillos específicos restaura el rendimiento original.",
    },
    {
      badge: "Tecnología termográfica",
      title: "Inspección con cámara termográfica de última generación",
      body: "Utilizamos cámaras termográficas de alta resolución para detectar células defectuosas, puntos calientes y conexiones degradadas. Esta tecnología permite identificar problemas invisibles a simple vista antes de que afecten al rendimiento.",
    },
    {
      badge: "Contrato de mantenimiento",
      title: "Contrato anual con prioridad de respuesta garantizada",
      body: "Con nuestro contrato de mantenimiento anual, tienes garantizada la revisión preventiva, la limpieza y la prioridad de respuesta ante averías. Un solo pago al año para tener la tranquilidad de que tu instalación rinde al máximo.",
    },
    {
      badge: "Monitorización remota",
      title: "Alertas automáticas ante caídas de rendimiento",
      body: "Nuestro sistema de monitorización remota detecta automáticamente cualquier caída de rendimiento y nos alerta para que podamos actuar antes de que el problema se agrave. Tú recibes un informe mensual de producción.",
    },
  ],
  processTitle: "Cómo realizamos el mantenimiento de tu instalación",
  processSubtitle: "Revisión completa en 2–4 horas — sin cortes de suministro prolongados",
  processSteps: [
    { number: "01", title: "Inspección visual", description: "Revisamos el estado de los paneles, la estructura de montaje, los cables y las conexiones externas." },
    { number: "02", title: "Limpieza profesional", description: "Limpiamos los paneles con agua desionizada y cepillos específicos para restaurar el rendimiento original." },
    { number: "03", title: "Revisión eléctrica", description: "Comprobamos el estado del inversor, las protecciones eléctricas, las conexiones y el sistema de monitorización." },
    { number: "04", title: "Informe de rendimiento", description: "Entregamos un informe completo con el estado de la instalación, el rendimiento actual y las recomendaciones de mejora." },
  ],
  incentivesTitle: "Costes y modalidades de mantenimiento",
  incentives: [
    { ayuda: "Revisión anual básica (limpieza + inspección visual)", importe: "Desde 150€", quien: "Instalaciones residenciales hasta 10 kWp" },
    { ayuda: "Revisión completa (limpieza + eléctrica + termografía)", importe: "Desde 250€", quien: "Instalaciones residenciales hasta 10 kWp" },
    { ayuda: "Contrato anual con prioridad de respuesta", importe: "Desde 350€/año", quien: "Instalaciones residenciales e industriales" },
    { ayuda: "Mantenimiento industrial (> 20 kWp)", importe: "Presupuesto personalizado", quien: "Naves, empresas y polígonos industriales" },
  ],
  ctaTitle: "¿Tu instalación rinde al máximo?",
  ctaSubtitle: "Solicita una revisión gratuita y te decimos exactamente cuánto rendimiento estás perdiendo.",
  faqs: [
    { pregunta: "¿Con qué frecuencia debo limpiar las placas solares?", respuesta: "En Murcia, con la calima y el polvo del Sahara, se recomienda limpiar los paneles al menos 2 veces al año: en primavera (después de la temporada de calima) y en otoño (antes del invierno). En zonas agrícolas o con mucha vegetación, puede ser necesaria una limpieza trimestral." },
    { pregunta: "¿Puedo limpiar las placas solares yo mismo?", respuesta: "No se recomienda. El acceso al tejado sin los equipos de seguridad adecuados es peligroso. Además, el uso de agua con cal o detergentes inadecuados puede dañar el recubrimiento antirreflectante de los paneles." },
    { pregunta: "¿Qué incluye la inspección termográfica?", respuesta: "La inspección termográfica detecta células defectuosas (puntos calientes), conexiones degradadas y módulos con rendimiento inferior al esperado. Es la única forma de detectar estos problemas antes de que se conviertan en averías graves." },
    { pregunta: "¿Está cubierto el mantenimiento por la garantía del instalador?", respuesta: "La garantía del instalador cubre los defectos de instalación, pero no el mantenimiento preventivo ni las averías causadas por falta de mantenimiento. Un contrato de mantenimiento anual es la mejor forma de proteger tu inversión." },
  ],
  relatedServices: [
    { label: "Instalación residencial", href: "/servicios/instalacion-solar-residencial", description: "Nueva instalación para tu hogar" },
    { label: "Instalación industrial", href: "/servicios/instalacion-solar-industrial", description: "Para naves y empresas" },
    { label: "Baterías de almacenamiento", href: "/servicios/baterias-almacenamiento-solar", description: "Amplía tu autosuficiencia" },
  ],
  stat1Value: "25%", stat1Label: "Rendimiento recuperado",
  stat2Value: "24h", stat2Label: "Tiempo de respuesta",
  stat3Value: "2x/año", stat3Label: "Revisiones recomendadas",
};

// ─── 5. Subvenciones y Tramitación ────────────────────────────────────────
export const subvencionesData: ServicePageProps = {
  metaTitle: "Subvenciones Placas Solares Murcia 2025 | IRPF 20% + IBI + Next Generation",
  metaDescription: "Guía completa de subvenciones para placas solares en Murcia 2025. Deducción IRPF 20%, bonificación IBI, Next Generation EU. Tramitamos todo por ti. Gratis.",
  slug: "subvenciones-placas-solares",
  schema: {
    name: "Tramitación de Subvenciones para Placas Solares",
    description: "Servicio de tramitación y gestión de subvenciones, ayudas y bonificaciones fiscales para instalaciones fotovoltaicas en la Región de Murcia.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Tramitación de subvenciones fotovoltaicas",
    priceRange: "Servicio gratuito incluido en la instalación",
    url: `${BASE_URL}/servicios/subvenciones-placas-solares`,
  },
  h1: "Subvenciones para Placas Solares en Murcia 2025",
  h1Accent: "Subvenciones",
  heroSubtitle: "Ahorra hasta el 40% del coste real — tramitamos todas las ayudas por ti, sin coste",
  heroIntro: "El marco de ayudas para la energía solar en España es uno de los más generosos de Europa. En Murcia, combinando la deducción IRPF del 20%, las subvenciones Next Generation EU y la bonificación IBI de tu municipio, puedes reducir el coste real de tu instalación hasta un 40%.\n\nNosotros tramitamos todas las subvenciones disponibles sin coste adicional. Conocemos cada ayuda, cada plazo y cada requisito para que no pierdas ni un euro de lo que te corresponde.",
  heroBadge: "Tramitación gratuita incluida en todas las instalaciones · Expertos en subvenciones solares",
  quickBenefits: [
    {
      icon: "euro",
      title: "Hasta el 40% de ahorro real",
      description: "Combinando IRPF 20% + Next Generation EU + IBI municipal, el coste real de una instalación de 8.000€ puede quedar en menos de 5.000€.",
    },
    {
      icon: "award",
      title: "Tramitación gratuita incluida",
      description: "Gestionamos todas las subvenciones disponibles sin coste adicional. Tú no tienes que hacer nada: nosotros nos encargamos de todo el papeleo.",
    },
    {
      icon: "shield",
      title: "Expertos en subvenciones solares",
      description: "Conocemos cada ayuda, cada plazo y cada requisito. Maximizamos el ahorro fiscal de cada cliente sin que pierda ninguna ayuda disponible.",
    },
  ],
  uspsTitle: "Cómo maximizamos las subvenciones de cada cliente",
  usps: [
    {
      badge: "Estrategia fiscal",
      title: "Combinamos todas las ayudas disponibles",
      body: "No nos limitamos a tramitar una sola ayuda. Analizamos todas las subvenciones disponibles (nacional, autonómica y municipal) y las combinamos para maximizar el ahorro total. Muchos clientes no saben que pueden acumular varias ayudas.",
    },
    {
      badge: "Inspirado en Solfy (Madrid)",
      title: "Tabla de bonificaciones IBI por municipio actualizada",
      body: "Mantenemos una tabla actualizada de las bonificaciones IBI de todos los municipios de la Región de Murcia. Cartagena (50%, 3 años), Yecla y Jumilla (50%, 5 años), Molina de Segura (40%, 3 años), Alcantarilla (10%, 5 años)...",
    },
    {
      badge: "Gestión completa",
      title: "Desde la solicitud hasta el cobro — sin que muevas un dedo",
      body: "Preparamos toda la documentación, presentamos las solicitudes en los plazos correctos y hacemos el seguimiento hasta el cobro. Si hay alguna incidencia con la administración, la resolvemos nosotros.",
    },
    {
      badge: "Transparencia total",
      title: "Te informamos de cada ayuda antes de instalar",
      body: "Antes de firmar el presupuesto, te explicamos exactamente qué subvenciones puedes solicitar, cuánto recibirás y en qué plazos. Sin sorpresas, sin letra pequeña.",
    },
  ],
  processTitle: "Cómo tramitamos las subvenciones por ti",
  processSubtitle: "Proceso completamente gestionado — tú solo firmas donde te indicamos",
  processSteps: [
    { number: "01", title: "Análisis de ayudas", description: "Identificamos todas las subvenciones disponibles para tu instalación: nacional, autonómica y municipal." },
    { number: "02", title: "Preparación de documentación", description: "Preparamos toda la documentación necesaria: facturas, certificados, proyectos técnicos y formularios de solicitud." },
    { number: "03", title: "Presentación de solicitudes", description: "Presentamos las solicitudes en los plazos correctos y ante los organismos competentes." },
    { number: "04", title: "Seguimiento y cobro", description: "Hacemos el seguimiento de cada solicitud hasta el cobro. Te informamos de cada resolución." },
  ],
  incentivesTitle: "Subvenciones disponibles para instalaciones solares en Murcia 2025",
  incentives: [
    { ayuda: "Deducción IRPF (Agencia Tributaria)", importe: "20% del coste (máx. 15.000€ base)", quien: "Propietarios de vivienda habitual" },
    { ayuda: "Next Generation EU — Rehabilitación energética", importe: "Hasta 3.000€ por vivienda", quien: "Instalaciones residenciales" },
    { ayuda: "Bonificación IBI Cartagena", importe: "50% durante 3 años", quien: "Todos los inmuebles" },
    { ayuda: "Bonificación IBI Yecla / Jumilla", importe: "50% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Bonificación IBI Torre-Pacheco / San Javier", importe: "50% durante 1 año", quien: "Viviendas unifamiliares" },
    { ayuda: "Bonificación IBI Molina de Segura", importe: "40% durante 3 años", quien: "Todos los inmuebles" },
    { ayuda: "Bonificación IBI Cieza", importe: "20% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Bonificación IBI Alcantarilla", importe: "10% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "IVA reducido al 10%", importe: "Ahorro del 11% sobre el coste", quien: "Viviendas habituales" },
  ],
  ctaTitle: "¿Cuánto puedes ahorrar con las subvenciones disponibles?",
  ctaSubtitle: "Calcula tu ahorro real incluyendo todas las subvenciones de tu municipio. Gratis y sin compromiso.",
  faqs: [
    { pregunta: "¿Puedo solicitar la deducción IRPF si ya he instalado las placas?", respuesta: "Sí, siempre que la instalación se haya realizado en el ejercicio fiscal en curso o en los dos anteriores. La deducción se aplica en la declaración de la renta del año en que se realizó la instalación." },
    { pregunta: "¿Son compatibles la deducción IRPF y las subvenciones Next Generation?", respuesta: "Sí, son compatibles. Puedes solicitar ambas ayudas simultáneamente, aunque la base de la deducción IRPF se reduce en el importe de la subvención recibida." },
    { pregunta: "¿Cuándo se aplica la bonificación IBI?", respuesta: "La bonificación IBI se aplica a partir del ejercicio siguiente al de la instalación. Si instalas en 2025, la bonificación se aplica en el IBI de 2026 y los años siguientes según la duración de la bonificación de tu municipio." },
    { pregunta: "¿Qué documentación necesito para solicitar las subvenciones?", respuesta: "La documentación básica incluye: factura de la instalación, certificado de instalación firmado por el instalador, certificado de fin de obra, licencia municipal y DNI del solicitante. Nosotros preparamos y presentamos toda la documentación." },
  ],
  relatedServices: [
    { label: "Instalación residencial", href: "/servicios/instalacion-solar-residencial", description: "Instalación con subvenciones incluidas" },
    { label: "Instalación industrial", href: "/servicios/instalacion-solar-industrial", description: "Deducciones fiscales para empresas" },
    { label: "Autoconsumo colectivo", href: "/servicios/autoconsumo-colectivo", description: "Para comunidades de vecinos" },
  ],
  stat1Value: "40%", stat1Label: "Ahorro máximo con ayudas",
  stat2Value: "9", stat2Label: "Municipios con bonificación IBI",
  stat3Value: "0€", stat3Label: "Coste de tramitación",
};

// ─── 6. Autoconsumo Colectivo ─────────────────────────────────────────────
export const autoconsumoColetivoData: ServicePageProps = {
  metaTitle: "Autoconsumo Colectivo en Murcia | Placas Solares para Comunidades de Vecinos",
  metaDescription: "Instalamos sistemas de autoconsumo colectivo en comunidades de vecinos en Murcia. Ahorra en zonas comunes y en cada piso. Presupuesto gratuito en 24h.",
  slug: "autoconsumo-colectivo",
  schema: {
    name: "Instalación de Autoconsumo Colectivo",
    description: "Instalación de sistemas fotovoltaicos de autoconsumo colectivo para comunidades de vecinos y edificios residenciales en la Región de Murcia.",
    provider: "Murcia Energía Solar",
    areaServed: "Región de Murcia, España",
    serviceType: "Instalación fotovoltaica de autoconsumo colectivo",
    priceRange: "8.000€ – 30.000€",
    url: `${BASE_URL}/servicios/autoconsumo-colectivo`,
  },
  h1: "Autoconsumo Colectivo para Comunidades de Vecinos en Murcia",
  h1Accent: "Autoconsumo Colectivo",
  heroSubtitle: "Todos los vecinos ahorran en su factura — aprobación por mayoría simple en la junta",
  heroIntro: "El autoconsumo colectivo permite que todos los vecinos de un edificio se beneficien de la energía solar instalada en la azotea. La energía producida se reparte entre las zonas comunes y cada vivienda según los coeficientes de participación acordados en la junta.\n\nSolo se necesita la aprobación por mayoría simple en la junta de propietarios. Una instalación de 20–30 kWp en la azotea puede reducir la factura de las zonas comunes hasta un 80% y generar un ahorro mensual de 30–60€ por vivienda.",
  heroBadge: "Especialistas en autoconsumo colectivo · Gestión completa de trámites con la distribuidora",
  quickBenefits: [
    {
      icon: "users",
      title: "Todos los vecinos ahorran",
      description: "La energía solar se reparte entre zonas comunes y viviendas. Cada vecino ve reducida su factura eléctrica mensualmente.",
    },
    {
      icon: "euro",
      title: "30–60€ de ahorro por vivienda",
      description: "Una instalación de 20 kWp en un edificio de 20 viviendas genera un ahorro medio de 30–60€ mensuales por piso.",
    },
    {
      icon: "shield",
      title: "Solo mayoría simple en la junta",
      description: "La Ley de Propiedad Horizontal permite aprobar el autoconsumo colectivo con mayoría simple. No se necesita unanimidad.",
    },
  ],
  uspsTitle: "Por qué el autoconsumo colectivo es la mejor inversión para tu comunidad",
  usps: [
    {
      badge: "Marco legal",
      title: "Real Decreto 244/2019 — el autoconsumo colectivo es legal y sencillo",
      body: "Desde 2019, el Real Decreto 244/2019 regula el autoconsumo colectivo en España. La normativa es clara y permite que cualquier comunidad de vecinos instale un sistema fotovoltaico compartido sin complicaciones legales.",
    },
    {
      badge: "Gestión completa",
      title: "Nos encargamos de todos los trámites con la distribuidora",
      body: "El autoconsumo colectivo requiere tramitar el contrato de acceso con la distribuidora eléctrica y configurar el sistema de reparto de excedentes. Nosotros gestionamos todos estos trámites sin coste adicional.",
    },
    {
      badge: "Inspirado en BCN Energía (Barcelona)",
      title: "Financiación 100% sin intereses para comunidades",
      body: "Como BCN Energía en Barcelona, ofrecemos financiación al 0% de interés para comunidades de vecinos. La cuota mensual de financiación puede ser inferior al ahorro generado desde el primer mes.",
    },
    {
      badge: "Flexibilidad de reparto",
      title: "Configura el reparto de energía como quiera la comunidad",
      body: "El reparto de la energía solar entre los vecinos se puede configurar por coeficientes de participación, por consumo real o por acuerdo de la junta. Nosotros te asesoramos sobre la opción más beneficiosa para tu comunidad.",
    },
  ],
  processTitle: "Cómo instalamos el autoconsumo colectivo en tu edificio",
  processSubtitle: "De la propuesta a la junta hasta el primer ahorro en 8–12 semanas",
  processSteps: [
    { number: "01", title: "Estudio de viabilidad", description: "Analizamos la azotea, el consumo del edificio y las viviendas para diseñar la instalación óptima." },
    { number: "02", title: "Propuesta para la junta", description: "Preparamos una presentación completa para la junta de propietarios con el ahorro estimado por vivienda y el plan de financiación." },
    { number: "03", title: "Instalación y legalización", description: "Instalamos el sistema fotovoltaico y tramitamos todos los permisos y el contrato con la distribuidora eléctrica." },
    { number: "04", title: "Configuración del reparto", description: "Configuramos el sistema de reparto de energía según los coeficientes acordados en la junta y activamos la monitorización." },
  ],
  incentivesTitle: "Subvenciones para autoconsumo colectivo en comunidades de vecinos",
  incentives: [
    { ayuda: "Subvenciones Next Generation EU (comunidades)", importe: "Hasta 3.000€ por vivienda participante", quien: "Comunidades de vecinos" },
    { ayuda: "Deducción IRPF individual", importe: "20% de la parte proporcional", quien: "Cada propietario participante" },
    { ayuda: "Bonificación IBI (según municipio)", importe: "10%–50% durante 1–5 años", quien: "El edificio completo" },
    { ayuda: "IVA reducido al 10%", importe: "Ahorro del 11% sobre el coste", quien: "Edificios residenciales" },
  ],
  ctaTitle: "¿Tu comunidad quiere ahorrar en la factura de la luz?",
  ctaSubtitle: "Solicita un estudio gratuito para tu comunidad. Preparamos la presentación para la junta sin coste.",
  faqs: [
    { pregunta: "¿Cuántos vecinos tienen que votar a favor en la junta?", respuesta: "Desde la reforma de la Ley de Propiedad Horizontal de 2019, el autoconsumo colectivo se puede aprobar con mayoría simple (más votos a favor que en contra). No se necesita unanimidad ni mayoría cualificada." },
    { pregunta: "¿Qué pasa si un vecino no quiere participar?", respuesta: "El vecino que no quiera participar puede excluirse del sistema de reparto. En ese caso, su cuota de energía solar se redistribuye entre los vecinos participantes." },
    { pregunta: "¿Cómo se reparte la energía solar entre los vecinos?", respuesta: "El reparto se puede configurar por coeficientes de participación (igual que los gastos comunes), por consumo real medido con contadores individuales o por acuerdo específico de la junta." },
    { pregunta: "¿Puede la comunidad vender el excedente de energía?", respuesta: "Sí. El excedente de energía solar que no se consume en el edificio se vierte a la red eléctrica y la comunidad recibe una compensación económica que se descuenta de la factura de las zonas comunes." },
  ],
  relatedServices: [
    { label: "Instalación residencial", href: "/servicios/instalacion-solar-residencial", description: "Para viviendas individuales" },
    { label: "Subvenciones y tramitación", href: "/servicios/subvenciones-placas-solares", description: "Gestión completa de ayudas" },
    { label: "Baterías de almacenamiento", href: "/servicios/baterias-almacenamiento-solar", description: "Almacena el excedente colectivo" },
  ],
  stat1Value: "80%", stat1Label: "Ahorro en zonas comunes",
  stat2Value: "30–60€", stat2Label: "Ahorro mensual por vivienda",
  stat3Value: "Mayoría simple", stat3Label: "Para aprobar en junta",
};
