import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useNoIndex } from "@/hooks/useNoIndex";

export default function AvisoLegal() {
  useNoIndex();

  return (
    <div className="min-h-screen flex flex-col font-sans">

      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>

            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p>
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), Murcia Energía Solar informa que es titular del sitio web <strong>murciaenergiasolar.es</strong>.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Datos Identificativos</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Denominación Social:</strong> Murcia Energía Solar</li>
                <li><strong>Domicilio Social:</strong> 8 Av. San Pedro del Pinatar, 30001 Murcia</li>
                <li><strong>CIF/NIF:</strong> B-XXXXXXXX</li>
                <li><strong>Teléfono:</strong> 868 35 36 92</li>
                <li><strong>Email:</strong> info@murciaenergiasolar.es</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Objeto y Ámbito de Aplicación</h2>
              <p>
                Las presentes Condiciones Generales regulan el acceso, navegación y uso del sitio web, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, gráficos, dibujos, diseños, códigos, software, fotografías, música, vídeos, sonidos, bases de datos, imágenes, expresiones e informaciones).
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Derechos de Propiedad Intelectual e Industrial</h2>
              <p>
                Murcia Energía Solar por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                Murcia Energía Solar no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Modificaciones</h2>
              <p>
                Murcia Energía Solar se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
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
