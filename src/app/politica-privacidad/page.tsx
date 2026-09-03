import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Política de Privacidad — A0 Studios",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <main className="px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <h1 className="mb-12 font-heading text-[clamp(2rem,7vw,4rem)] uppercase leading-[0.9] text-foreground">
            Política de Privacidad
          </h1>

          <p>
            En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679
            (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y
            garantía de los derechos digitales (LOPDGDD), se informa a los
            usuarios de este sitio web de los siguientes aspectos relacionados
            con el tratamiento de sus datos personales.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            1. Responsable del tratamiento
          </h2>
          <ul className="space-y-1">
            <li><strong className="text-foreground">Responsable:</strong> Daniel Acero Sagredo</li>
            <li><strong className="text-foreground">Nombre comercial:</strong> KLIP</li>
            <li><strong className="text-foreground">DNI/NIF:</strong> 06590329R</li>
            <li><strong className="text-foreground">Domicilio:</strong> Calle de Mercedes Arteaga 24, España</li>
            <li><strong className="text-foreground">Correo electrónico de contacto:</strong> work@daniaceros.com</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            2. Datos personales que se recogen
          </h2>
          <p>
            A través de este sitio web se pueden recoger los siguientes datos
            personales:
          </p>
          <ul className="mt-4 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Información incluida en los mensajes enviados a través de formularios o WhatsApp</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            3. Finalidad del tratamiento de los datos
          </h2>
          <ul className="space-y-1">
            <li>Atender solicitudes de información o presupuestos.</li>
            <li>Gestionar la relación comercial o contractual.</li>
            <li>Responder consultas enviadas a través de los canales de contacto.</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            4. Legitimación para el tratamiento
          </h2>
          <ul className="space-y-1">
            <li>El consentimiento del usuario al enviar sus datos.</li>
            <li>La ejecución de un contrato o precontrato.</li>
          </ul>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            5. Conservación de los datos
          </h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para
            cumplir con la finalidad para la que fueron recabados y para
            determinar posibles responsabilidades derivadas del tratamiento.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            6. Derechos de los usuarios
          </h2>
          <ul className="space-y-1">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la rectificación de los datos inexactos</li>
            <li>Solicitar su supresión</li>
            <li>Solicitar la limitación del tratamiento</li>
            <li>Oponerse al tratamiento</li>
            <li>Solicitar la portabilidad de los datos</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, el usuario puede enviar una solicitud
            al correo{" "}
            <a
              href="mailto:work@daniaceros.com"
              className="text-foreground underline transition-colors hover:text-amber"
            >
              work@daniaceros.com
            </a>
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            7. Medidas de seguridad
          </h2>
          <p>
            El responsable ha adoptado las medidas técnicas y organizativas
            necesarias para garantizar la seguridad de los datos personales y
            evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <h2 className="mb-4 mt-12 font-heading text-2xl uppercase text-foreground">
            8. Cambios en la política de privacidad
          </h2>
          <p>
            El titular se reserva el derecho a modificar la presente política de
            privacidad para adaptarla a novedades legislativas o
            jurisprudenciales. Se recomienda al usuario revisar periódicamente
            esta política.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
