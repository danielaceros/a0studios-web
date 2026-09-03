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
    <section id="precios" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          label="Opciones"
          title="Elige lo que"
          accent="necesitas"
          lead="Presupuesto personalizado en menos de 1 hora, sin compromiso. Sesiones desde 2 horas."
        />

        <div className="mt-14 grid gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-3">
          {PLANES.map((plan) => (
            <div
              key={plan.name}
              className={`reveal glass glass-hover flex h-full flex-col rounded-2xl p-7 sm:p-9 ${
                plan.destacado ? "!border-white/30" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="label text-muted">{plan.name}</p>
                <span
                  className={`label !tracking-[0.2em] ${
                    plan.destacado ? "text-foreground" : "text-foreground/35"
                  }`}
                >
                  {plan.tag}
                </span>
              </div>

              <p className="mt-7 text-[0.95rem] leading-[1.75] text-muted">{plan.desc}</p>

              <ul className="mt-8 flex flex-col gap-3.5">
                {plan.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-snug text-foreground/85">
                    <span className="mt-[9px] h-px w-4 shrink-0 bg-white/50" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a
                  href="#contacto"
                  className={`btn w-full justify-center ${plan.destacado ? "btn-solid" : "btn-outline"}`}
                >
                  Pedir presupuesto
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center font-mono text-[11px] leading-[1.9] text-muted sm:mt-12">
          Reels · YouTube · Podcast · VSLs · Cursos — una sola sesión al día, reserva con antelación.
        </p>
      </div>
    </section>
  );
}
