import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useNoIndex } from "@/hooks/useNoIndex";

export default function Cookies() {
  useNoIndex();

  return (
    <div className="min-h-screen flex flex-col font-sans">

      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p>
                Este sitio web, propiedad de <strong>Murcia Energía Solar</strong>, utiliza cookies para mejorar la experiencia del usuario y ofrecer un servicio más personalizado. Al continuar navegando, consideramos que acepta su uso, conforme a la presente Política de Cookies.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. ¿Qué son las cookies?</h2>
              <p>
                Una cookie es un fichero que se descarga en su dispositivo al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Tipos de Cookies que utilizamos</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Cookies Técnicas (Estrictamente Necesarias):</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan. Son imprescindibles para el correcto funcionamiento de nuestra web.</li>
                <li><strong>Cookies Analíticas:</strong> Nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestro servicio. Analizamos su navegación en nuestra web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
                <li><strong>Cookies de Personalización:</strong> Permiten recordar información para que el usuario acceda al servicio con determinadas características (por ejemplo, el idioma o la configuración regional).</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. ¿Cómo configurar o deshabilitar las cookies?</h2>
              <p>
                El usuario tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su terminal. A continuación, indicamos cómo acceder a la configuración de cookies en los navegadores más frecuentes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
                <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
              </ul>
              <p>
                Tenga en cuenta que, si deshabilita las cookies técnicas, es posible que algunas funciones de nuestro sitio web dejen de estar disponibles o no funcionen correctamente.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Actualizaciones de la Política de Cookies</h2>
              <p>
                Es posible que actualicemos la Política de Cookies de nuestro sitio web. Por ello, le recomendamos revisar esta política cada vez que acceda a nuestra web para estar adecuadamente informado sobre cómo y para qué usamos las cookies.
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
