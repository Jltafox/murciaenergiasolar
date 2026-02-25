/**
 * locationPages.ts — Datos centralizados de las 19 Location Pages
 * Murcia Energía Solar
 */

import type { LocationPageProps } from "@/components/LocationPage";

// Incentivos comunes para Murcia capital
const incentivesMurciaCapital = [
  { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios de vivienda habitual" },
  { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
  { ayuda: "Bonificación IBI Murcia capital", importe: "Consultar Ayuntamiento", quien: "Propietarios con instalación solar" },
  { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
];

// FAQs comunes
const faqsComunes = [
  {
    pregunta: "¿Cuánto cuesta instalar placas solares?",
    respuesta: "Una instalación residencial media de 5–6 kWp cuesta entre 7.000€ y 9.000€ antes de subvenciones. Con la deducción IRPF del 20% y las subvenciones Next Generation EU, el coste real puede quedar en 3.500–5.000€.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda la instalación?",
    respuesta: "La instalación física se realiza en 1–2 días. Los trámites administrativos (licencia municipal, legalización ante la Consejería de Industria) tardan entre 4 y 8 semanas. Nos encargamos de todo.",
  },
  {
    pregunta: "¿Qué pasa si produzco más energía de la que consumo?",
    respuesta: "El excedente se vierte a la red eléctrica y recibes una compensación económica en tu factura mediante el sistema de compensación simplificada. En verano, muchos clientes tienen factura cero o incluso compensación positiva.",
  },
  {
    pregunta: "¿Necesito permiso del Ayuntamiento?",
    respuesta: "Sí, en la mayoría de los casos se requiere una comunicación previa o licencia de obras menor al Ayuntamiento. Nosotros gestionamos todos los permisos y trámites sin coste adicional para ti.",
  },
  {
    pregunta: "¿Cuánto duran las placas solares?",
    respuesta: "Los paneles solares de calidad tienen una vida útil de 25–30 años, con una degradación de rendimiento inferior al 0,5% anual. Los fabricantes garantizan el 80% de la potencia nominal a los 25 años.",
  },
];

// ─────────────────────────────────────────────
// MURCIA CAPITAL — 10 BARRIOS
// ─────────────────────────────────────────────

export const laFlotaData: LocationPageProps = {
  metaTitle: "Placas Solares en La Flota, Murcia | Instalación Solar + Subvenciones 2025",
  metaDescription: "Instalamos placas solares en La Flota (Murcia). Ahorra hasta 1.200€/año, bonificación IBI y deducción IRPF 20%. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "la-flota",
  h1: "Instalación de Placas Solares en La Flota, Murcia",
  heroSubtitle: "Ahorra hasta 120€/mes desde el primer mes de instalación",
  heroIntro: "La Flota es uno de los barrios más consolidados de Murcia capital, con urbanizaciones de chalets adosados y bloques modernos perfectos para la energía solar. Con más de 3.300 horas de sol al año, tu tejado es una central eléctrica que todavía no estás aprovechando.\n\nUna instalación de 5–6 kWp genera entre 7.000 y 8.500 kWh anuales, cubriendo el 80% del consumo de una familia de 4 personas. Recuperas la inversión en 6–8 años y ahorras durante 25 años más.",
  landmarks: "Situado entre El Ranero, Vistabella y Juan Carlos I, La Flota combina calidad residencial con una orientación solar excelente.",
  savingsMonthly: "80–120€",
  savingsAnnual: "1.100€/año",
  paybackYears: "6–8 años",
  coveragePercent: "80%",
  incentives: incentivesMurciaCapital,
  trustTitle: "El instalador solar de referencia en La Flota",
  trustBody: "Murcia Energía Solar lleva más de 850 instalaciones en la Región de Murcia. En La Flota, donde la mayoría de las viviendas tienen tejados bien orientados al sur, la viabilidad técnica es excelente. Tramitamos todas las subvenciones por ti, sin coste adicional y sin burocracia.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "El Ranero", href: "/murcia/instalacion-placas-solares-el-ranero" },
    { label: "Vistabella", href: "/murcia/instalacion-placas-solares-vistabella" },
    { label: "Juan Carlos I", href: "/murcia/instalacion-placas-solares-juan-carlos-i" },
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
  ],
};

export const elCarmenData: LocationPageProps = {
  metaTitle: "Placas Solares en El Carmen, Murcia | Instalación + Subvenciones 2025",
  metaDescription: "Instalamos placas solares en El Carmen (Murcia). Ahorra hasta 1.200€/año. Deducción IRPF 20% y subvenciones Next Generation. Presupuesto gratis en 24h.",
  slug: "el-carmen",
  h1: "Placas Solares en El Carmen, Murcia",
  heroSubtitle: "Instalación solar con garantía de 25 años — reducción de hasta el 75%",
  heroIntro: "El Carmen es el barrio más histórico de Murcia capital, a orillas del Río Segura, con el Puente de los Peligros y la Ermita de Jesús como referentes. Sus viviendas tradicionales rehabilitadas y edificios con cubierta plana son candidatos ideales para la energía solar.\n\nLas viviendas antiguas del barrio, construidas entre los años 60 y 80, tienen un aislamiento deficiente que dispara el consumo de climatización. Con placas solares, ese gasto se puede reducir hasta un 75% en las horas de mayor producción solar.",
  landmarks: "A orillas del Río Segura, con el Puente de los Peligros y la Ermita de Jesús como iconos del barrio.",
  savingsMonthly: "70–110€",
  savingsAnnual: "1.000€/año",
  paybackYears: "6–8 años",
  coveragePercent: "75%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Instaladores murcianos — conocemos El Carmen",
  trustBody: "Somos instaladores murcianos, no una empresa nacional que subcontrata. Conocemos El Carmen, sus tipos de tejado, sus comunidades de vecinos y las particularidades de las viviendas del barrio. Hemos instalado placas solares en más de 50 edificios y viviendas en el entorno del Río Segura, con un resultado medio de ahorro del 70%.",
  installationsCount: "50+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
    { label: "Espinardo", href: "/murcia/instalacion-placas-solares-espinardo" },
    { label: "La Flota", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const espinardoData: LocationPageProps = {
  metaTitle: "Placas Solares en Espinardo, Murcia | Instalación Solar Residencial e Industrial",
  metaDescription: "Instalamos placas solares en Espinardo (Murcia). Zona universitaria y residencial con alto potencial solar. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "espinardo",
  h1: "Instalación de Placas Solares en Espinardo, Murcia",
  heroSubtitle: "Energía solar para hogares, empresas y el Parque Científico",
  heroIntro: "Espinardo combina el Campus de la Universidad de Murcia, el Parque Científico y Tecnológico y polígonos industriales con urbanizaciones residenciales de alta calidad. Es una zona en constante crecimiento con un potencial de ahorro energético extraordinario.\n\nLas empresas del Polígono Industrial de Espinardo que han instalado sistemas fotovoltaicos han reducido su factura eléctrica entre un 60% y un 80%. Para una nave con un consumo mensual de 2.000€, eso supone un ahorro de 1.200–1.600€ al mes.",
  landmarks: "Sede del Campus de Espinardo de la Universidad de Murcia y del Parque Científico y Tecnológico.",
  savingsMonthly: "80–130€",
  savingsAnnual: "1.200€/año",
  paybackYears: "5–7 años",
  coveragePercent: "80%",
  incentives: [
    ...incentivesMurciaCapital,
    { ayuda: "Deducción Impuesto de Sociedades", importe: "10% de la inversión", quien: "Empresas y autónomos" },
  ],
  trustTitle: "Especialistas en instalaciones residenciales e industriales en Espinardo",
  trustBody: "Murcia Energía Solar tiene experiencia instalando sistemas fotovoltaicos tanto en el sector residencial de Espinardo como en sus polígonos industriales. Conocemos las ordenanzas municipales de Murcia capital y tramitamos todas las licencias y permisos necesarios.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
    { label: "Churra", href: "/murcia/instalacion-placas-solares-churra" },
    { label: "El Carmen", href: "/murcia/instalacion-placas-solares-el-carmen" },
  ],
};

export const churraData: LocationPageProps = {
  metaTitle: "Placas Solares en Churra, Murcia | Instalación Solar en Urbanizaciones y Chalets",
  metaDescription: "Instalamos placas solares en Churra (Murcia). Urbanizaciones y chalets con alto potencial solar. Ahorra hasta 1.200€/año. Presupuesto gratuito en 24h.",
  slug: "churra",
  h1: "Placas Solares en Churra, Murcia",
  heroSubtitle: "La solución solar para tus urbanizaciones y chalets — factura cero en verano",
  heroIntro: "Churra es una de las pedanías más populares de Murcia capital: a apenas 5 km del centro, bien comunicada por la A-30 y con urbanizaciones de chalets adosados y pareados con tejados a dos aguas perfectos para la energía solar.\n\nEn verano, cuando más calor hace y más necesitas el aire acondicionado, más energía producen tus placas solares. La paradoja solar perfecta: muchos propietarios en Churra tienen factura cero en los meses de julio y agosto.",
  landmarks: "A 5 km del centro de Murcia por la autovía A-30, limita con La Alberca, El Palmar y Sangonera.",
  savingsMonthly: "90–130€",
  savingsAnnual: "1.200€/año",
  paybackYears: "6–8 años",
  coveragePercent: "85%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Más de 5 años instalando en las urbanizaciones de Churra",
  trustBody: "Llevamos más de 5 años instalando placas solares en las urbanizaciones de Churra y pedanías colindantes como La Alberca, El Palmar y Sangonera. Conocemos los tipos de tejado más comunes en la zona, las orientaciones predominantes y las particularidades de cada urbanización.",
  installationsCount: "200+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "La Alberca", href: "/murcia/instalacion-placas-solares-la-alberca" },
    { label: "El Palmar", href: "/murcia/instalacion-placas-solares-el-palmar" },
    { label: "Espinardo", href: "/murcia/instalacion-placas-solares-espinardo" },
  ],
};

export const laPazData: LocationPageProps = {
  metaTitle: "Placas Solares en La Paz, Murcia | Instalación Solar + Subvenciones 2025",
  metaDescription: "Instalamos placas solares en el barrio de La Paz, Murcia. Ahorra en tu factura eléctrica con energía solar. Deducción IRPF 20%. Presupuesto gratis en 24h.",
  slug: "la-paz",
  h1: "Placas Solares en el Barrio de La Paz, Murcia",
  heroSubtitle: "Reduce tu factura hasta un 75% — autoconsumo individual y colectivo",
  heroIntro: "El barrio de La Paz es un distrito residencial consolidado de clase media, con una comunidad vecinal activa y bloques de pisos de los años 70–90. Para este perfil, una instalación solar de 4–5 kWp cubre entre el 60% y el 80% del consumo anual.\n\nMuchos edificios de La Paz tienen cubierta plana con espacio para instalar placas solares en la azotea. Con el autoconsumo colectivo, todos los vecinos se benefician del ahorro en zonas comunes y en sus propias viviendas. Solo se necesita la aprobación de la junta por mayoría simple.",
  landmarks: "Situado al norte del centro urbano, limita con Espinardo y el Campus Universitario.",
  savingsMonthly: "60–100€",
  savingsAnnual: "900€/año",
  paybackYears: "7–9 años",
  coveragePercent: "70%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Especialistas en autoconsumo colectivo en La Paz",
  trustBody: "Hemos instalado sistemas de autoconsumo colectivo en varios edificios del barrio de La Paz y zonas colindantes como El Ranero y Vistabella. Gestionamos todos los trámites con la distribuidora eléctrica para que los vecinos empiecen a ahorrar sin complicaciones.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "El Ranero", href: "/murcia/instalacion-placas-solares-el-ranero" },
    { label: "Espinardo", href: "/murcia/instalacion-placas-solares-espinardo" },
    { label: "Juan Carlos I", href: "/murcia/instalacion-placas-solares-juan-carlos-i" },
  ],
};

export const elRaneroData: LocationPageProps = {
  metaTitle: "Placas Solares en El Ranero, Murcia | Instalación Solar Residencial 2025",
  metaDescription: "Instalamos placas solares en El Ranero (Murcia). Ahorra hasta 1.200€/año. Subvenciones Next Generation y deducción IRPF 20%. Presupuesto gratuito en 24h.",
  slug: "el-ranero",
  h1: "Instalación de Placas Solares en El Ranero, Murcia",
  heroSubtitle: "Ahorro real desde el primer año — factura cero en verano",
  heroIntro: "El Ranero es un barrio residencial tranquilo y bien consolidado de Murcia capital, entre La Flota y Vistabella. Sus urbanizaciones con jardín privado y chalets adosados tienen tejados a dos aguas bien orientados, sin sombras de edificios colindantes — el escenario perfecto para una instalación fotovoltaica de alto rendimiento.\n\nSi tu instalación produce más energía de la que consumes, el excedente se vierte a la red y recibes una compensación económica en tu factura. Muchos propietarios en El Ranero tienen factura de luz prácticamente cero de mayo a septiembre.",
  landmarks: "Situado entre La Flota y Vistabella, al sureste del centro urbano de Murcia.",
  savingsMonthly: "80–120€",
  savingsAnnual: "1.100€/año",
  paybackYears: "6–8 años",
  coveragePercent: "80%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Referentes en el corredor El Ranero–La Flota–Vistabella",
  trustBody: "Murcia Energía Solar es el instalador de referencia en el corredor residencial El Ranero–La Flota–Vistabella. Hemos realizado más de 120 instalaciones en esta zona, con una valoración media de 4.9 sobre 5 en Google.",
  installationsCount: "120+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "La Flota", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "Vistabella", href: "/murcia/instalacion-placas-solares-vistabella" },
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
  ],
};

export const vistabellaData: LocationPageProps = {
  metaTitle: "Placas Solares en Vistabella, Murcia | Instalación Solar + Subvenciones",
  metaDescription: "Instalamos placas solares en Vistabella (Murcia). Urbanización con alto potencial solar. Ahorra hasta 1.200€/año. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "vistabella",
  h1: "Placas Solares en Vistabella, Murcia",
  heroSubtitle: "La urbanización solar de referencia — máximo rendimiento en tejados modernos",
  heroIntro: "Vistabella es una de las urbanizaciones residenciales más modernas de Murcia capital. Sus viviendas unifamiliares de nueva construcción tienen tejados modernos, bien orientados y con amplia superficie disponible, lo que permite instalaciones fotovoltaicas de alta eficiencia.\n\nAl ser construcciones recientes, la estructura del tejado está preparada para soportar el peso de los paneles sin refuerzos adicionales. Las zonas comunes de las urbanizaciones también pueden beneficiarse del autoconsumo colectivo.",
  landmarks: "Urbanización moderna limítrofe con Juan Carlos I y El Ranero, al sureste de Murcia capital.",
  savingsMonthly: "90–130€",
  savingsAnnual: "1.200€/año",
  paybackYears: "6–8 años",
  coveragePercent: "85%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Más de 80 instalaciones en Vistabella y Juan Carlos I",
  trustBody: "Conocemos Vistabella y las urbanizaciones colindantes de Juan Carlos I y El Ranero. Hemos instalado sistemas fotovoltaicos en más de 80 viviendas de la zona, con resultados de ahorro que superan el 70% de la factura eléctrica anual.",
  installationsCount: "80+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Juan Carlos I", href: "/murcia/instalacion-placas-solares-juan-carlos-i" },
    { label: "El Ranero", href: "/murcia/instalacion-placas-solares-el-ranero" },
    { label: "La Flota", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const juanCarlosIData: LocationPageProps = {
  metaTitle: "Placas Solares en Juan Carlos I, Murcia | Instalación Solar 2025",
  metaDescription: "Instalamos placas solares en el barrio Juan Carlos I de Murcia. Ahorra hasta 1.200€/año. Subvenciones gestionadas. Presupuesto gratuito en 24h.",
  slug: "juan-carlos-i",
  h1: "Placas Solares en Juan Carlos I, Murcia",
  heroSubtitle: "Energía solar en el corazón residencial de la ciudad",
  heroIntro: "El barrio Juan Carlos I es uno de los más representativos del Murcia residencial moderno: amplias avenidas, bloques de pisos de calidad y zonas comerciales próximas al Estadio Nueva Condomina. El autoconsumo colectivo es la modalidad solar que más impacto tiene en este barrio.\n\nUna instalación en la azotea del edificio puede reducir la factura de las zonas comunes hasta un 80% y generar un ahorro mensual de 30–60€ por vivienda. Solo se necesita la aprobación de la junta de propietarios.",
  landmarks: "Próximo al Estadio Nueva Condomina y al centro comercial Torre Pacheco.",
  savingsMonthly: "60–100€",
  savingsAnnual: "900€/año",
  paybackYears: "7–9 años",
  coveragePercent: "75%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Especialistas en autoconsumo colectivo en Juan Carlos I",
  trustBody: "Murcia Energía Solar tiene amplia experiencia en instalaciones de autoconsumo colectivo en edificios de Murcia capital. Gestionamos todos los trámites con la distribuidora eléctrica, la legalización ante la Consejería de Industria y la tramitación de las subvenciones Next Generation EU.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Vistabella", href: "/murcia/instalacion-placas-solares-vistabella" },
    { label: "La Flota", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "La Paz", href: "/murcia/instalacion-placas-solares-la-paz" },
  ],
};

export const laAlbercaData: LocationPageProps = {
  metaTitle: "Placas Solares en La Alberca, Murcia | Instalación Solar Chalets y Viviendas",
  metaDescription: "Instalamos placas solares en La Alberca (Murcia). Chalets y viviendas unifamiliares con alto potencial solar. Ahorra hasta 1.200€/año. Presupuesto gratis en 24h.",
  slug: "la-alberca",
  h1: "Instalación de Placas Solares en La Alberca, Murcia",
  heroSubtitle: "Energía solar para tus chalets y viviendas — factura cero en verano",
  heroIntro: "La Alberca es una de las pedanías más queridas de Murcia capital, conocida por su Semana Santa de gran tradición. Sus calles de casas unifamiliares, chalets con jardín y urbanizaciones de baja densidad hacen de La Alberca uno de los mejores escenarios para la instalación de placas solares.\n\nSi tienes piscina en La Alberca, la bomba de filtración es uno de tus mayores consumidores eléctricos. Con placas solares, puedes programar el funcionamiento de la bomba en las horas de mayor producción solar y reducir ese coste a prácticamente cero.",
  landmarks: "Pedanía con fuerte tradición de Semana Santa, entre Churra y El Palmar.",
  savingsMonthly: "100–130€",
  savingsAnnual: "1.300€/año",
  paybackYears: "6–8 años",
  coveragePercent: "90%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Más de 150 instalaciones en La Alberca y El Palmar",
  trustBody: "Murcia Energía Solar tiene presencia consolidada en La Alberca, El Palmar y las pedanías del sur de Murcia capital. Nuestros técnicos conocen los tipos de tejado más comunes en la zona — teja árabe, teja plana, cubierta inclinada — y optimizan la instalación para cada caso.",
  installationsCount: "150+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "El Palmar", href: "/murcia/instalacion-placas-solares-el-palmar" },
    { label: "Churra", href: "/murcia/instalacion-placas-solares-churra" },
    { label: "Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla" },
  ],
};

export const elPalmarData: LocationPageProps = {
  metaTitle: "Placas Solares en El Palmar, Murcia | Instalación Solar + Subvenciones 2025",
  metaDescription: "Instalamos placas solares en El Palmar (Murcia). Pedanía con alto potencial solar. Ahorra hasta 1.200€/año. Deducción IRPF 20%. Presupuesto gratuito en 24h.",
  slug: "el-palmar",
  h1: "Placas Solares en El Palmar, Murcia",
  heroSubtitle: "Instalación solar en la pedanía más soleada del sur — hasta 130€/mes de ahorro",
  heroIntro: "El Palmar es una pedanía del sur de Murcia capital con identidad propia: zona de huerta tradicional, viviendas unifamiliares con amplio terreno y una irradiación solar excepcional. Situada en la llanura aluvial del Segura, sin obstáculos que generen sombra, El Palmar es el escenario ideal para la energía solar.\n\nMuchos propietarios en El Palmar tienen huertos o pequeñas explotaciones agrícolas con sistemas de riego. Una instalación fotovoltaica con batería de almacenamiento permite alimentar el sistema de riego directamente con energía solar, reduciendo el coste del agua a prácticamente cero.",
  landmarks: "Pedanía de huerta tradicional entre La Alberca y Beniaján, en la llanura aluvial del Segura.",
  savingsMonthly: "100–130€",
  savingsAnnual: "1.300€/año",
  paybackYears: "6–8 años",
  coveragePercent: "90%",
  incentives: incentivesMurciaCapital,
  trustTitle: "Instaladores de referencia en El Palmar y pedanías del sur",
  trustBody: "Murcia Energía Solar es el instalador de referencia en las pedanías del sur de Murcia capital: El Palmar, La Alberca, Beniaján, Torreagüera y Sangonera. Más de 200 instalaciones en estas pedanías avalan nuestra experiencia.",
  installationsCount: "200+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "La Alberca", href: "/murcia/instalacion-placas-solares-la-alberca" },
    { label: "Churra", href: "/murcia/instalacion-placas-solares-churra" },
    { label: "Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla" },
  ],
};

// ─────────────────────────────────────────────
// 9 MUNICIPIOS CLAVE
// ─────────────────────────────────────────────

export const cartagenaData: LocationPageProps = {
  metaTitle: "Placas Solares en Cartagena | Bonificación IBI 50% · 3 Años · Instalación Solar 2025",
  metaDescription: "Instalamos placas solares en Cartagena. Bonificación IBI 50% durante 3 años + deducción IRPF 20%. Ahorra hasta 1.200€/año. Presupuesto gratuito en 24h.",
  slug: "cartagena",
  h1: "Instalación de Placas Solares en Cartagena",
  heroSubtitle: "Bonificación IBI 50% durante 3 años — amortización en solo 3,5 años",
  heroIntro: "Cartagena, con más de 2.500 años de historia, mira al futuro con la energía solar. Desde el Teatro Romano y la Muralla Púnica hasta las urbanizaciones costeras de La Manga del Mar Menor, Cartagena tiene más de 3.200 horas de sol al año y uno de los incentivos fiscales más atractivos de la Región: bonificación del 50% en el IBI durante 3 años.\n\nCon la deducción IRPF del 20% y las subvenciones Next Generation EU, el coste real de una instalación de 6 kWp queda en aproximadamente 3.865€, con una amortización de solo 3,5 años.",
  landmarks: "Teatro Romano, Muralla Púnica, Casco Antiguo, La Manga del Mar Menor, Los Alcázares.",
  savingsMonthly: "90–130€",
  savingsAnnual: "1.100€/año",
  paybackYears: "3,5 años",
  coveragePercent: "80%",
  incentives: [
    { ayuda: "Bonificación IBI Cartagena", importe: "50% durante 3 años", quien: "Inmuebles residenciales" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios de vivienda habitual" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Más de 180 instalaciones en Cartagena y su área metropolitana",
  trustBody: "Murcia Energía Solar tiene equipo técnico propio en Cartagena. No somos una empresa de Madrid o Valencia que subcontrata: somos instaladores de la Región que conocen cada barrio, cada tipo de tejado y cada subvención disponible. Hemos realizado más de 180 instalaciones en Cartagena y su área metropolitana, con una valoración media de 4.9 sobre 5 en Google.",
  installationsCount: "180+",
  faqs: [
    ...faqsComunes,
    {
      pregunta: "¿Cómo funciona la bonificación IBI del 50% en Cartagena?",
      respuesta: "El Ayuntamiento de Cartagena aplica una bonificación del 50% sobre la cuota íntegra del IBI durante 3 años para los inmuebles que instalen sistemas de aprovechamiento de energía solar. Nosotros gestionamos la solicitud de la bonificación sin coste adicional.",
    },
  ],
  relatedPages: [
    { label: "Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco" },
    { label: "San Javier", href: "/murcia/instalacion-placas-solares-san-javier" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const lorcaData: LocationPageProps = {
  metaTitle: "Placas Solares en Lorca | Instalación Solar Residencial y Agrícola · 2025",
  metaDescription: "Instalamos placas solares en Lorca. Soluciones para viviendas, empresas y explotaciones agrícolas. Subvenciones gestionadas. Presupuesto gratuito en 24h.",
  slug: "lorca",
  h1: "Placas Solares en Lorca",
  heroSubtitle: "Energía solar para la Ciudad del Sol — residencial, industrial y agrícola",
  heroIntro: "Lorca, la 'Ciudad del Sol', no podría tener un apodo más apropiado para hablar de energía solar. El segundo municipio más extenso de España, con el Castillo de Lorca y la Colegiata de San Patricio como referentes, tiene un potencial fotovoltaico enorme en sus tres perfiles: propietario urbano, agricultor de pedanías y empresario del polígono industrial.\n\nLas pedanías agrícolas de Lorca — Zarcilla de Ramos, Coy, Avilés, La Paca — tienen explotaciones con sistemas de riego que pueden ahorrar entre 8.000 y 15.000€ anuales con una instalación solar.",
  landmarks: "Castillo de Lorca, Colegiata de San Patricio, pedanías de Zarcilla de Ramos, Coy y La Paca.",
  savingsMonthly: "80–120€",
  savingsAnnual: "1.100€/año",
  paybackYears: "6–8 años",
  coveragePercent: "80%",
  incentives: [
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios de vivienda habitual" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "Subvenciones FEADER", importe: "Variable", quien: "Explotaciones agrícolas" },
    { ayuda: "Deducción IS", importe: "10% de la inversión", quien: "Empresas y autónomos" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Especialistas en instalaciones solares en Lorca y sus pedanías",
  trustBody: "Murcia Energía Solar conoce Lorca en profundidad: sus barrios, sus pedanías, sus explotaciones agrícolas y sus polígonos industriales. Hemos realizado instalaciones en el casco urbano, en Sutullena, en La Viña y en pedanías como Zarcilla de Ramos y Coy. Nuestro equipo técnico se desplaza a cualquier punto del municipio sin coste adicional.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "Cartagena", href: "/murcia/instalacion-placas-solares-cartagena" },
    { label: "Cieza", href: "/murcia/instalacion-placas-solares-cieza" },
  ],
};

export const molinaDeSeguraData: LocationPageProps = {
  metaTitle: "Placas Solares en Molina de Segura | Bonificación IBI 40% + Instalación Solar",
  metaDescription: "Instalamos placas solares en Molina de Segura. Bonificación IBI 40% durante 3 años. Soluciones residenciales e industriales. Presupuesto gratuito en 24h.",
  slug: "molina-de-segura",
  h1: "Placas Solares en Molina de Segura",
  heroSubtitle: "Bonificación IBI 40% durante 3 años — residencial e industrial",
  heroIntro: "Molina de Segura es la cuarta ciudad de la Región de Murcia y una de las más dinámicas económicamente. Sede de empresas líderes como Vidal Golosinas y Fini, Molina combina un potente sector industrial con zonas residenciales de alta calidad en El Llano de Molina, Ribera de Molina y Torrealta.\n\nEl Ayuntamiento de Molina incentiva la energía solar con una bonificación del 40% en el IBI durante 3 años. Las empresas del Polígono Industrial El Tapiado pueden ahorrar entre 30.000 y 100.000€ anuales con una instalación fotovoltaica.",
  landmarks: "Parque Regional Sierra de la Pila, Ribera de Molina, Polígono Industrial El Tapiado.",
  savingsMonthly: "90–130€",
  savingsAnnual: "1.200€/año",
  paybackYears: "5–7 años",
  coveragePercent: "80%",
  incentives: [
    { ayuda: "Bonificación IBI Molina de Segura", importe: "40% durante 3 años", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Deducción IS", importe: "10% de la inversión", quien: "Empresas" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "El instalador solar de referencia en Molina de Segura",
  trustBody: "Murcia Energía Solar tiene experiencia instalando sistemas fotovoltaicos tanto en el sector residencial como en el industrial de Molina de Segura. Conocemos las ordenanzas municipales, tramitamos todas las licencias y gestionamos la bonificación IBI del 40% sin coste adicional.",
  installationsCount: "850+",
  faqs: [
    ...faqsComunes,
    {
      pregunta: "¿Cómo funciona la bonificación IBI del 40% en Molina de Segura?",
      respuesta: "El Ayuntamiento de Molina de Segura aplica una bonificación del 40% sobre la cuota íntegra del IBI durante 3 años para los inmuebles que instalen sistemas fotovoltaicos. Nosotros gestionamos la solicitud sin coste adicional.",
    },
  ],
  relatedPages: [
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "Alcantarilla", href: "/murcia/instalacion-placas-solares-alcantarilla" },
    { label: "Cartagena", href: "/murcia/instalacion-placas-solares-cartagena" },
  ],
};

export const alcantarillaData: LocationPageProps = {
  metaTitle: "Placas Solares en Alcantarilla | Instalación Solar Residencial e Industrial 2025",
  metaDescription: "Instalamos placas solares en Alcantarilla. Soluciones para viviendas y empresas del Polígono Industrial Oeste. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "alcantarilla",
  h1: "Instalación de Placas Solares en Alcantarilla",
  heroSubtitle: "Energía solar en el municipio más denso de España — autoconsumo individual y colectivo",
  heroIntro: "Alcantarilla, conocida por la Noria de la Huerta y el Museo Etnológico de la Huerta de Murcia, es el municipio con mayor densidad de población de España. A apenas 7 km de Murcia capital por la A-30, combina un tejido residencial consolidado con el Polígono Industrial Oeste.\n\nLa alta densidad de Alcantarilla hace del autoconsumo colectivo la solución ideal para los edificios de pisos. Las empresas del Polígono Industrial Oeste pueden reducir su factura eléctrica entre un 60% y un 80% con una instalación fotovoltaica.",
  landmarks: "Noria de la Huerta, Museo Etnológico de la Huerta de Murcia, Polígono Industrial Oeste.",
  savingsMonthly: "70–110€",
  savingsAnnual: "1.000€/año",
  paybackYears: "7–9 años",
  coveragePercent: "75%",
  incentives: [
    { ayuda: "Bonificación IBI Alcantarilla", importe: "10% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "Deducción IS", importe: "10% de la inversión", quien: "Empresas" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Instaladores solares en Alcantarilla y el área metropolitana de Murcia",
  trustBody: "Murcia Energía Solar cubre todo el área metropolitana de Murcia, incluyendo Alcantarilla, Sangonera la Verde, Sangonera la Seca y las pedanías colindantes. Nuestro equipo técnico se desplaza sin coste adicional y realiza el estudio de viabilidad en tu ubicación concreta.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
    { label: "Molina de Segura", href: "/murcia/instalacion-placas-solares-molina-de-segura" },
    { label: "La Alberca", href: "/murcia/instalacion-placas-solares-la-alberca" },
  ],
};

export const torrePachecoData: LocationPageProps = {
  metaTitle: "Placas Solares en Torre-Pacheco | Bonificación IBI 50% · Instalación Solar 2025",
  metaDescription: "Instalamos placas solares en Torre-Pacheco. Bonificación IBI 50% + deducción IRPF 20%. Soluciones residenciales, industriales y agrícolas. Presupuesto gratis en 24h.",
  slug: "torre-pacheco",
  h1: "Placas Solares en Torre-Pacheco",
  heroSubtitle: "Bonificación IBI 50% — residencial, industrial y agrícola en el Campo de Cartagena",
  heroIntro: "Torre-Pacheco, con el Cabezo Gordo y los Molinos de Viento de Los Camachos como iconos, lleva siglos aprovechando la energía natural. Hoy, esa tradición se traduce en una apuesta decidida por la energía solar, respaldada por una bonificación del 50% en el IBI para instalaciones en viviendas unifamiliares.\n\nLas explotaciones agrícolas del Campo de Cartagena pueden eliminar prácticamente el coste eléctrico del riego durante los meses de primavera y verano con un sistema de bombeo solar directo.",
  landmarks: "Cabezo Gordo, Molinos de Viento de Los Camachos, pedanías de Roldán, Dolores de Pacheco, El Jimenado y Balsicas.",
  savingsMonthly: "90–130€",
  savingsAnnual: "1.200€/año",
  paybackYears: "4–6 años",
  coveragePercent: "85%",
  incentives: [
    { ayuda: "Bonificación IBI Torre-Pacheco", importe: "50% (mínimo 2 kWp)", quien: "Viviendas unifamiliares" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "Subvenciones FEADER", importe: "Variable", quien: "Explotaciones agrícolas" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "El instalador solar de referencia en Torre-Pacheco y el Campo de Cartagena",
  trustBody: "Murcia Energía Solar tiene equipo técnico propio en el Campo de Cartagena. Cubrimos Torre-Pacheco, Roldán, Dolores de Pacheco, El Jimenado, Balsicas y todas las pedanías del municipio. Conocemos las particularidades de cada zona y gestionamos la bonificación IBI del 50% sin coste adicional.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Cartagena", href: "/murcia/instalacion-placas-solares-cartagena" },
    { label: "San Javier", href: "/murcia/instalacion-placas-solares-san-javier" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const sanJavierData: LocationPageProps = {
  metaTitle: "Placas Solares en San Javier | Instalación Solar Santiago de la Ribera · 2025",
  metaDescription: "Instalamos placas solares en San Javier y Santiago de la Ribera. Chalets y apartamentos con alto potencial solar. Presupuesto gratuito en 24h. ☎ 968 000 000",
  slug: "san-javier",
  h1: "Placas Solares en San Javier",
  heroSubtitle: "Energía solar en el Mar Menor — primera y segunda residencia con garantía de 25 años",
  heroIntro: "San Javier combina la tranquilidad costera de Santiago de la Ribera y Los Narejos con la exclusividad de Roda Golf & Beach Resort y la historia de la Academia General del Aire. Con más de 3.200 horas de sol anuales y un microclima costero excepcional, San Javier es el escenario ideal para la energía solar.\n\nPara las segundas residencias, las placas solares reducen el coste de mantenimiento durante los meses en que no estás. El sistema de autoconsumo con batería garantiza energía disponible en todo momento y compensación de excedentes en tu factura.",
  landmarks: "Paseo marítimo de Santiago de la Ribera, Los Narejos, Roda Golf & Beach Resort, Academia General del Aire.",
  savingsMonthly: "100–150€",
  savingsAnnual: "1.500€/año",
  paybackYears: "5–7 años",
  coveragePercent: "85%",
  incentives: [
    { ayuda: "Bonificación IBI San Javier", importe: "50% durante 1 año", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios de vivienda habitual" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Instaladores solares de confianza en San Javier y el Mar Menor",
  trustBody: "Murcia Energía Solar tiene experiencia instalando sistemas fotovoltaicos en todas las zonas de San Javier. Conocemos las particularidades de los tejados en zona costera — mayor humedad, vientos del Mar Menor — y utilizamos materiales y fijaciones específicos para garantizar la durabilidad de la instalación.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Torre-Pacheco", href: "/murcia/instalacion-placas-solares-torre-pacheco" },
    { label: "Cartagena", href: "/murcia/instalacion-placas-solares-cartagena" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const yeclaData: LocationPageProps = {
  metaTitle: "Placas Solares en Yecla | Bonificación IBI 50% · 5 Años · Instalación Solar 2025",
  metaDescription: "Instalamos placas solares en Yecla. Bonificación IBI 50% durante 5 años. Soluciones para bodegas, industria del mueble y viviendas. Presupuesto gratis en 24h.",
  slug: "yecla",
  h1: "Placas Solares en Yecla",
  heroSubtitle: "Bonificación IBI 50% durante 5 años — la mejor del Altiplano murciano",
  heroIntro: "Yecla, corazón del Altiplano murciano, es conocida por el mueble de Yecla y la uva Monastrell. La Basílica de la Purísima preside el centro histórico, y los viñedos de la Denominación de Origen Yecla se extienden por un paisaje semiárido con más de 3.000 horas de sol al año.\n\nYecla tiene uno de los incentivos fiscales más atractivos de la Región: bonificación del 50% en el IBI durante 5 años. Las empresas del sector del mueble pueden reducir su factura eléctrica entre un 60% y un 80% con una instalación fotovoltaica.",
  landmarks: "Basílica de la Purísima, Ruta del Vino de Yecla, polígonos industriales del mueble, bodegas de la DO Yecla.",
  savingsMonthly: "80–120€",
  savingsAnnual: "1.100€/año",
  paybackYears: "5–7 años",
  coveragePercent: "80%",
  incentives: [
    { ayuda: "Bonificación IBI Yecla", importe: "50% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Deducción IS", importe: "10% de la inversión", quien: "Empresas y autónomos" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Especialistas en instalaciones solares en Yecla y el Altiplano",
  trustBody: "Murcia Energía Solar tiene experiencia instalando sistemas fotovoltaicos en Yecla, Jumilla y el Altiplano murciano. Conocemos las particularidades del clima continental de la zona — veranos calurosos, inviernos fríos, alta irradiación solar — y diseñamos instalaciones optimizadas para maximizar la producción en todas las estaciones.",
  installationsCount: "850+",
  faqs: [
    ...faqsComunes,
    {
      pregunta: "¿Cómo funciona la bonificación IBI del 50% durante 5 años en Yecla?",
      respuesta: "El Ayuntamiento de Yecla aplica una bonificación del 50% sobre la cuota íntegra del IBI durante 5 años consecutivos para los inmuebles que instalen sistemas fotovoltaicos. Es uno de los incentivos más generosos de la Región de Murcia.",
    },
  ],
  relatedPages: [
    { label: "Jumilla", href: "/murcia/instalacion-placas-solares-jumilla" },
    { label: "Cieza", href: "/murcia/instalacion-placas-solares-cieza" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const jumillaData: LocationPageProps = {
  metaTitle: "Placas Solares en Jumilla | Bonificación IBI 50% · 5 Años · Bodegas y Viviendas",
  metaDescription: "Instalamos placas solares en Jumilla. Bonificación IBI 50% durante 5 años. Soluciones para bodegas, explotaciones agrícolas y viviendas. Presupuesto gratis en 24h.",
  slug: "jumilla",
  h1: "Placas Solares en Jumilla",
  heroSubtitle: "Energía solar para la capital del vino Monastrell — IBI 50% durante 5 años",
  heroIntro: "Jumilla vive de cara al sol y al vino. El Castillo de Jumilla domina el horizonte, el Monasterio de Santa Ana del Monte custodia siglos de historia, y los viñedos de la DO Jumilla — con bodegas como Viña Elena, Bodegas Carchelo y Casa Castillo — reciben más de 3.000 horas de sol al año.\n\nEl Ayuntamiento de Jumilla incentiva la energía solar con una bonificación del 50% en el IBI durante 5 años. Una bodega mediana puede ahorrar entre 20.000 y 80.000€ anuales con una instalación fotovoltaica.",
  landmarks: "Castillo de Jumilla, Monasterio de Santa Ana del Monte, Bodegas Carchelo, Viña Elena, Casa Castillo.",
  savingsMonthly: "80–120€",
  savingsAnnual: "1.100€/año",
  paybackYears: "5–7 años",
  coveragePercent: "80%",
  incentives: [
    { ayuda: "Bonificación IBI Jumilla", importe: "50% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Subvenciones FEADER", importe: "Variable", quien: "Explotaciones agrícolas y bodegas" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Instaladores solares de referencia en Jumilla y el Altiplano",
  trustBody: "Murcia Energía Solar tiene experiencia instalando sistemas fotovoltaicos en Jumilla, Yecla y el Altiplano murciano. Conocemos las necesidades específicas del sector vitivinícola y agrícola, y diseñamos soluciones personalizadas para cada tipo de instalación.",
  installationsCount: "850+",
  faqs: [
    ...faqsComunes,
    {
      pregunta: "¿Pueden las bodegas de Jumilla beneficiarse de subvenciones solares?",
      respuesta: "Sí. Las bodegas de la DO Jumilla pueden acceder a subvenciones del FEADER (Fondo Europeo Agrícola de Desarrollo Rural) para instalaciones fotovoltaicas, además de la deducción en el Impuesto de Sociedades. Gestionamos todas las ayudas disponibles.",
    },
  ],
  relatedPages: [
    { label: "Yecla", href: "/murcia/instalacion-placas-solares-yecla" },
    { label: "Cieza", href: "/murcia/instalacion-placas-solares-cieza" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};

export const ciezaData: LocationPageProps = {
  metaTitle: "Placas Solares en Cieza | Instalación Solar + Bonificación IBI · La Perla del Segura",
  metaDescription: "Instalamos placas solares en Cieza. Bonificación IBI 20% durante 5 años. Soluciones para viviendas y explotaciones frutícolas. Presupuesto gratuito en 24h.",
  slug: "cieza",
  h1: "Placas Solares en Cieza",
  heroSubtitle: "Energía solar para la Perla del Segura — frutales, viviendas y turismo rural",
  heroIntro: "Cieza, la 'Perla del Segura', es famosa por la floración de sus frutales — especialmente el melocotón — que tiñe el valle del Segura de blanco y rosa cada febrero. El Cañón de Almadenes, el yacimiento de Siyasa y el Río Segura son los iconos de una ciudad que ahora tiene la oportunidad de vivir también del sol.\n\nLas explotaciones frutícolas de Cieza pueden ahorrar entre 5.000 y 20.000€ anuales con una instalación fotovoltaica. El Ayuntamiento incentiva las instalaciones con una bonificación del 20% en el IBI durante 5 años.",
  landmarks: "Cañón de Almadenes, yacimiento musulmán de Siyasa, Río Segura, floración de los frutales.",
  savingsMonthly: "70–110€",
  savingsAnnual: "1.000€/año",
  paybackYears: "7–9 años",
  coveragePercent: "75%",
  incentives: [
    { ayuda: "Bonificación IBI Cieza", importe: "20% durante 5 años", quien: "Todos los inmuebles" },
    { ayuda: "Deducción IRPF (nacional)", importe: "20% del coste", quien: "Propietarios particulares" },
    { ayuda: "Subvenciones FEADER", importe: "Variable", quien: "Explotaciones agrícolas" },
    { ayuda: "Subvenciones Next Generation EU", importe: "Hasta 3.000€", quien: "Instalaciones residenciales" },
    { ayuda: "IVA reducido", importe: "10% (vs 21%)", quien: "Viviendas habituales" },
  ],
  trustTitle: "Instaladores solares en Cieza y el Noroeste murciano",
  trustBody: "Murcia Energía Solar cubre Cieza y toda la comarca del Noroeste murciano: Calasparra, Abarán, Blanca, Ricote y Archena. Nuestro equipo técnico se desplaza sin coste adicional y conoce las particularidades de las explotaciones agrícolas y las viviendas de la zona.",
  installationsCount: "850+",
  faqs: faqsComunes,
  relatedPages: [
    { label: "Jumilla", href: "/murcia/instalacion-placas-solares-jumilla" },
    { label: "Yecla", href: "/murcia/instalacion-placas-solares-yecla" },
    { label: "Murcia capital", href: "/murcia/instalacion-placas-solares-la-flota" },
  ],
};
