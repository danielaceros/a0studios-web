import ContactFormEmbed from "@/components/sections/ContactFormEmbed";
import { CONTACT_INFO } from "@/lib/constants";

const FICHA = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    external: false,
  },
  {
    label: "Teléfono",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    label: "Estudio",
    value: "Ronda de Atocha 16, P7",
    href: "https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid",
    external: true,
  },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16 xl:gap-24">
          {/* Izquierda */}
          <div className="reveal lg:sticky lg:top-32 lg:self-start">
            <div className="rule" />
            <div className="flex items-center gap-3 pt-4">
              <span className="tick" aria-hidden="true" />
              <p className="meta">Contacto</p>
            </div>

            <h2 className="display mt-9 max-w-[13ch] text-foreground sm:mt-11">
              Cuéntame qué quieres{" "}
              <span className="accent-italic normal-case tracking-normal">grabar</span>
            </h2>

            <p className="lead mt-7 max-w-[40ch]">
              Te respondo con disponibilidad y presupuesto personalizado en menos de 1 hora. Sin
              compromiso.
            </p>

            {/* Ficha de contacto: etiqueta izquierda, dato derecha, filete entre medias */}
            <div className="mt-11 max-w-[34rem]">
              <div className="rule" />
              {FICHA.map((row) => (
                <div key={row.label}>
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-baseline justify-between gap-6 py-4 transition-colors"
                  >
                    <span className="meta">{row.label}</span>
                    <span className="data transition-colors group-hover:text-foreground/60">
                      {row.value}
                    </span>
                  </a>
                  <div className="rule" />
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal relative">
            <span className="badge badge-solid absolute -top-3 right-5 z-20">
              Respuesta en 1h
            </span>
            <div className="panel overflow-hidden">
              <ContactFormEmbed loadDelay={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
