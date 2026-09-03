import ContactFormEmbed from "@/components/sections/ContactFormEmbed";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contacto() {
  return (
    <section id="contacto" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16 xl:gap-24">
          {/* Izquierda */}
          <div className="reveal lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Contacto</p>

            <h2 className="display mt-4 max-w-[14ch] text-foreground sm:mt-5">
              Cuéntame qué quieres{" "}
              <span className="accent-italic normal-case tracking-normal">grabar</span>
            </h2>

            <p className="mt-7 max-w-[42ch] text-[1rem] leading-[1.8] text-muted sm:text-[1.08rem]">
              Te respondo con disponibilidad y presupuesto personalizado en menos de 1 hora. Sin
              compromiso.
            </p>

            <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-2xl">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="glass glass-hover flex items-center justify-between gap-6 px-6 py-5"
              >
                <span className="label text-muted">Email</span>
                <span className="font-mono text-[12px] text-foreground sm:text-[13px]">
                  {CONTACT_INFO.email}
                </span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="glass glass-hover flex items-center justify-between gap-6 px-6 py-5"
              >
                <span className="label text-muted">Teléfono</span>
                <span className="font-mono text-[12px] text-foreground sm:text-[13px]">
                  {CONTACT_INFO.phone}
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover flex items-center justify-between gap-6 px-6 py-5"
              >
                <span className="label text-muted">Estudio</span>
                <span className="font-mono text-[12px] text-foreground sm:text-[13px]">
                  Ronda de Atocha 16, P7
                </span>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal relative">
            <span className="glass absolute -top-3 right-5 z-20 rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground">
              Respuesta en 1h
            </span>
            <div className="glass overflow-hidden rounded-2xl">
              <ContactFormEmbed loadDelay={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
