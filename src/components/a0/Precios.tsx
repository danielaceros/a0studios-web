import SectionHead from "./SectionHead";

const PLANES = [
  {
    tag: "Grabación",
    name: "Solo grabación",
    desc: "Vienes al ático y grabas con mi equipo técnico. Sales con los brutos del día listos para editar.",
    incluye: [
      "Ático privado con vistas a Madrid",
      "Iluminación de estudio",
      "Cámaras y equipo técnico",
      "Sonido profesional",
      "Teleprompter",
    ],
    destacado: false,
  },
  {
    tag: "Más elegido",
    name: "Grabación + edición",
    desc: "Vienes, grabas conmigo y en 48h tienes el contenido listo para publicar. Sin gestionar nada.",
    incluye: [
      "Todo lo de Solo grabación",
      "Filmmaker con dirección creativa",
      "Edición profesional",
      "Subtítulos y formato por plataforma",
      "Entrega en 24-48h",
    ],
    destacado: true,
  },
  {
    tag: "Todo incluido",
    name: "Producción completa",
    desc: "Grabación, edición, estrategia y distribución. Tú solo apareces delante de la cámara.",
    incluye: [
      "Todo lo de Grabación + edición",
      "Estrategia de contenido",
      "Distribución multiplataforma",
      "Seguimiento y optimización",
    ],
    destacado: false,
  },
];

export default function Precios() {
  return (
    <section
      id="precios"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="Opciones"
          title="Elige lo que"
          accent="necesitas"
          lead="Presupuesto personalizado en menos de 1 hora, sin compromiso. Sesiones desde 2 horas."
        />

        {/* Tres columnas comparables dentro de un mismo bloque: se lee como una
            tabla de servicios, no como tres tarjetas sueltas. */}
        <div className="reveal mt-14 grid overflow-hidden rounded-[12px] border border-line sm:mt-[clamp(3.5rem,5vw,5rem)] lg:grid-cols-3">
          {PLANES.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col p-7 sm:p-9 ${
                i > 0 ? "border-t border-line lg:border-t-0 lg:border-l" : ""
              } ${plan.destacado ? "bg-[var(--color-raised)]" : "bg-[var(--color-card)]"}`}
            >
              {/* Barra de 2 px: la única jerarquía cromática de la sección */}
              {plan.destacado ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] bg-foreground"
                />
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-[1.32rem] leading-[1.15] tracking-[-0.028em] text-foreground sm:text-[1.45rem]">
                  {plan.name}
                </h3>
                <span
                  className={`badge shrink-0 ${plan.destacado ? "badge-solid" : ""}`}
                >
                  {plan.tag}
                </span>
              </div>

              <p className="prose-body mt-5 text-[0.92rem]">{plan.desc}</p>

              <div className="mt-8 rule" />

              <ul className="mt-6 flex flex-col gap-3.5">
                {plan.incluye.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-[0.9rem] leading-[1.45] text-foreground/85"
                  >
                    <span
                      className="mt-[9px] h-px w-3.5 shrink-0 bg-foreground/45"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a
                  href="#contacto"
                  className={`btn w-full justify-center ${
                    plan.destacado ? "btn-solid" : "btn-outline"
                  }`}
                >
                  Pedir presupuesto
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal meta mt-8 text-center normal-case tracking-[0.02em] text-[0.9rem] leading-[1.8] sm:mt-10">
          Reels · YouTube · Podcast · VSLs · Cursos — una sola sesión al día, reserva con antelación.
        </p>
      </div>
    </section>
  );
}
