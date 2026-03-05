import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p>
                De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, informamos sobre el tratamiento de datos personales en nuestro sitio web.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Responsable del Tratamiento</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identidad:</strong> Murcia Energía Solar</li>
                <li><strong>Dirección:</strong> 8 Av. San Pedro del Pinatar, 30001 Murcia</li>
                <li><strong>Teléfono:</strong> 868 35 36 92</li>
                <li><strong>Correo electrónico:</strong> info@murciaenergiasolar.es</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Finalidad del Tratamiento de los Datos Personales</h2>
              <p>
                Los datos personales facilitados serán tratados para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gestionar solicitudes de información y elaborar presupuestos personalizados de instalaciones fotovoltaicas.</li>
                <li>Prestar el servicio solicitado y gestionar la facturación del mismo.</li>
                <li>Envío de comunicaciones comerciales sobre nuestros productos y servicios relacionados con la energía solar (solo con el consentimiento expreso).</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Legitimación para el Tratamiento</h2>
              <p>
                La base legal para el tratamiento de los datos es la ejecución de un contrato o la aplicación de medidas precontractuales. Para el envío de comunicaciones comerciales, la base legitimadora será el consentimiento explícito del usuario, que puede ser revocado en cualquier momento.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Destinatarios</h2>
              <p>
                Los datos no serán comunicados a terceros ajenos a la prestación del servicio, salvo obligación legal, ni se realizarán transferencias internacionales sin el consentimiento previo.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Plazo de Conservación</h2>
              <p>
                Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales derivadas de los servicios prestados.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Ejercicio de Derechos</h2>
              <p>
                El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, limitación al tratamiento, portabilidad y oposición dirigiéndose mediante correo electrónico a <strong>info@murciaenergiasolar.es</strong>, adjuntando una copia de su DNI o documento equivalente para verificar su identidad.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                <Link href="/">
                  <Button variant="outline" className="px-8">Volver al inicio</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
