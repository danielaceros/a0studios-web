import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Política de Cookies — A0 Studios",
};

export default function PoliticaCookies() {
  return (
    <>
      <main className="px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <h1 className="mb-12 font-heading text-[clamp(2rem,7vw,4rem)] uppercase leading-[0.9] text-foreground">
            Política de Cookies
          </h1>

          <p>
            Esta web, titularidad de Daniel Acero Sagredo (KLIP), utiliza
            cookies propias y de terceros para mejorar la experiencia de
            navegación, analizar el uso del sitio y ofrecer contenidos adaptados
            a los intereses del usuario.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo del usuario cuando visita una página web. Permiten
            recordar información sobre su visita, como el idioma preferido u
            otras opciones de configuración.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            2. Tipos de cookies utilizadas
          </h2>
          <ul className="mt-4 space-y-2">
            <li><strong className="text-foreground">Cookies técnicas:</strong> necesarias para el funcionamiento del sitio web y la prestación de los servicios ofrecidos.</li>
            <li><strong className="text-foreground">Cookies de análisis:</strong> permiten analizar el comportamiento de los usuarios para mejorar la web (por ejemplo, Google Analytics).</li>
            <li><strong className="text-foreground">Cookies publicitarias:</strong> gestionan los espacios publicitarios en base a criterios como el contenido editado o la frecuencia con la que se muestran los anuncios.</li>
            <li><strong className="text-foreground">Cookies de redes sociales:</strong> permiten interactuar con plataformas como Instagram, Facebook o TikTok.</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            3. Cookies de terceros
          </h2>
          <p>
            Este sitio web puede utilizar servicios de terceros que recopilan
            información con fines estadísticos, de uso del sitio web y para la
            prestación de otros servicios relacionados con la actividad del sitio
            web.
          </p>
          <ul className="mt-4 space-y-1">
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>Meta (Facebook Pixel)</li>
            <li>Microsoft Clarity</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            4. Gestión y configuración de cookies
          </h2>
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies
            instaladas en su equipo mediante la configuración de las opciones del
            navegador instalado en su dispositivo:
          </p>
          <ul className="mt-4 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-foreground underline transition-colors hover:text-amber">Chrome</a></li>
            <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-foreground underline transition-colors hover:text-amber">Safari</a></li>
            <li><a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies" target="_blank" rel="noopener noreferrer" className="text-foreground underline transition-colors hover:text-amber">Firefox</a></li>
            <li><a href="https://support.microsoft.com/es-es/help/4027947" target="_blank" rel="noopener noreferrer" className="text-foreground underline transition-colors hover:text-amber">Edge</a></li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            5. Consentimiento
          </h2>
          <p>
            Al acceder a este sitio web por primera vez, el usuario verá un
            aviso sobre el uso de cookies. Si continúa navegando, se considerará
            que acepta su uso conforme a lo descrito en la presente política.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            6. Actualización de la política de cookies
          </h2>
          <p>
            El titular de este sitio web se reserva el derecho a modificar la
            presente política de cookies en función de exigencias legales o
            técnicas. Se recomienda al usuario revisar periódicamente esta
            política.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
