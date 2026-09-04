import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Founder() {
  return (
    <section className="bg-zinc-900 px-5 py-10 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-16">
          {/* Photo */}
          <ScrollReveal>
            <div className="shrink-0">
              <Image
                src="/me.webp"
                alt="Dani Acero — Founder & Filmmaker de A0 Studios"
                width={320}
                height={320}
                className="h-24 w-24 rounded-xl object-cover sm:h-36 sm:w-36 lg:h-60 lg:w-60 lg:rounded-2xl"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-xl">
              <p className="text-[0.85rem] leading-[1.8] text-muted sm:text-[0.9rem] sm:leading-[1.8] lg:text-base lg:leading-[1.85]">
                Daniel Acero es filmmaker corporativo con m&aacute;s de 6 a&ntilde;os de experiencia produciendo contenido audiovisual para marcas como IFEMA, Cinesa y la C&aacute;mara de Comercio de Madrid. Fund&oacute; A0 Studios con un objetivo claro: crear un espacio donde empresas y creadores pudieran producir contenido profesional de forma eficiente, sin los costes ni la log&iacute;stica de un rodaje tradicional.
              </p>
              <p className="mt-3 hidden text-[0.85rem] leading-[1.8] text-muted sm:block sm:text-[0.9rem] sm:leading-[1.8] lg:mt-4 lg:text-base lg:leading-[1.85]">
                Con formaci&oacute;n t&eacute;cnica en producci&oacute;n audiovisual y experiencia en direcci&oacute;n creativa, Daniel supervisa personalmente cada sesi&oacute;n en el estudio &mdash; desde la preparaci&oacute;n del set hasta la entrega del material editado. Su enfoque combina la calidad visual de la producci&oacute;n corporativa con la agilidad que exige el contenido para redes sociales.
              </p>
              <a
                href="https://www.instagram.com/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent transition-colors duration-300 hover:text-accent-light lg:mt-6 lg:gap-2 lg:text-[12px]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="lg:h-4 lg:w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @daniaceros
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
