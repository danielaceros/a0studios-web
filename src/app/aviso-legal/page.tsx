import Nav from "@/components/a0/Nav";
import Footer from "@/components/a0/Footer";

export const metadata = {
  title: "Aviso Legal — A0 Studios",
};

export default function AvisoLegal() {
  return (
    <>
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <h1 className="display mb-12 text-foreground">
            Aviso Legal
          </h1>

          <p>
            En cumplimiento de lo dispuesto en la Ley 34/2002, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se informa a los usuarios del presente sitio web de los siguientes
            datos:
          </p>

          <ul className="mt-6 space-y-1">
            <li><strong className="text-foreground">Titular del sitio web:</strong> Daniel Acero Sagredo</li>
            <li><strong className="text-foreground">Nombre comercial:</strong> KLIP</li>
            <li><strong className="text-foreground">DNI/NIF:</strong> 06590329R</li>
            <li><strong className="text-foreground">Domicilio:</strong> Calle de Mercedes Arteaga 24, España</li>
            <li><strong className="text-foreground">Correo electrónico de contacto:</strong> work@daniaceros.com</li>
          </ul>

          <h2 className="mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground">
            Condiciones de uso
          </h2>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario,
            que acepta desde dicho acceso y/o uso las presentes condiciones de
            uso.
          </p>
          <p className="mt-4">
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios que el titular ofrece a través de este sitio web, con
            carácter enunciativo pero no limitativo, a no emplearlos para
            actividades ilícitas o contrarias a la buena fe y al orden público.
          </p>

          <h2 className="mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground">
            Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño
            gráfico, código fuente, logos, marcas, etc.) son titularidad de
            Daniel Acero Sagredo o dispone de los derechos de uso necesarios,
            quedando prohibida su reproducción, distribución o comunicación
            pública sin autorización expresa del titular.
          </p>

          <h2 className="mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground">
            Responsabilidad
          </h2>
          <p>
            El titular no se hace responsable de los posibles errores u
            omisiones en los contenidos, ni de la falta de disponibilidad del
            sitio web, aunque se compromete a realizar los esfuerzos necesarios
            para evitar este tipo de situaciones.
          </p>

          <h2 className="mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground">
            Legislación aplicable y jurisdicción
          </h2>
          <p>
            La relación entre el titular del sitio web y el usuario se regirá
            por la normativa vigente en España. Cualquier controversia se
            someterá a los Juzgados y Tribunales del domicilio del titular.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
