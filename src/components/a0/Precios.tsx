import SectionHead from "./SectionHead";

// Sin precios publicados: el presupuesto se hace a medida según los
// entregables (p. ej. 12 reels) y siempre con dos opciones para que el
// cliente elija. Nunca se vende tiempo de estudio ni el espacio por separado.
type Opcion = {
  name: string;
  tag: string;
  desc: string;
  incluye: string[];
  destacado: boolean;
};

const OPCIONES: Opcion[] = [
  {
    name: "Llave en mano",
    tag: "Te llevas los vídeos",
    desc: "Grabamos contigo y nos encargamos de la edición: te llevas las piezas terminadas, listas para publicar en redes o para lanzar como anuncio.",
    incluye: [
      "Todo lo de Solo grabación",
      "Edición con estructura de anuncio, VSL o reel",
      "Subtítulos y formato para cada plataforma",
      "Listo para publicar en 24-48h",
    ],
    destacado: true,
  },
  {
    name: "Solo grabación",
    tag: "Te llevas los brutos",
    desc: "Vienes al estudio, grabamos todas las piezas con el equipo montado y la sesión dirigida, y sales con los brutos listos para que los edite tu equipo.",
    incluye: [
      "Guion de cada pieza antes de venir",
      "Estudio con iluminación y cámaras",
      "Sonido profesional y teleprompter",
      "Dirección durante toda la grabación",
      "Brutos del día, listos para editar",
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
          label="Presupuesto"
          title="Un presupuesto a tu"
          accent="medida"
          lead="Dime qué necesitas grabar, por ejemplo 12 reels y dos anuncios, y te doy siempre dos precios: llave en mano o solo grabación. Tú eliges."
        />

        {/* Dos columnas comparables dentro de un mismo bloque: se leen como una
            tabla de servicios, no como tarjetas sueltas. */}
        <div className="reveal mt-14 grid overflow-hidden rounded-[12px] border border-line sm:mt-[clamp(3.5rem,5vw,5rem)] lg:grid-cols-2">
          {OPCIONES.map((op, i) => (
            <div
              key={op.name}
              className={`relative flex h-full flex-col p-7 sm:p-10 ${
                i > 0 ? "border-t border-line lg:border-t-0 lg:border-l" : ""
              } ${op.destacado ? "bg-[var(--color-raised)]" : "bg-[var(--color-card)]"}`}
            >
              {/* Barra de 2 px: la única jerarquía cromática de la sección */}
              {op.destacado ? (
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-foreground" />
              ) : null}

              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-heading text-[1.4rem] leading-[1.15] tracking-[-0.028em] text-foreground sm:text-[1.6rem]">
                  {op.name}
                </h3>
                <span className={`badge shrink-0 ${op.destacado ? "badge-solid" : ""}`}>{op.tag}</span>
              </div>

              <p className="font-heading mt-5 text-[1.05rem] text-foreground/85">
                Presupuesto según lo que grabes
              </p>

              <p className="prose-body mt-3 max-w-[46ch] text-[0.92rem]">{op.desc}</p>

              <div className="mt-8 rule" />

              <ul className="mt-6 flex flex-col gap-3.5">
                {op.incluye.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-[0.9rem] leading-[1.45] text-foreground/85"
                  >
                    <span className="mt-[9px] h-px w-3.5 shrink-0 bg-foreground/45" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a
                  href="#contacto"
                  className={`btn w-full justify-center ${op.destacado ? "btn-solid" : "btn-outline"}`}
                >
                  Pedir presupuesto
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Claim boutique + recurrencia mensual */}
        <div className="reveal mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="panel flex flex-col gap-3 px-6 py-7 sm:px-10 sm:py-8">
            <p className="meta">Estudio boutique · Una única sesión al día</p>
            <p className="prose-body max-w-[60ch] text-[0.92rem]">
              Solo agendo una sesión al día. Ese día el estudio y yo estamos dedicados solo a ti, sin
              prisas y sin reloj. Por eso no cobro por tiempo de estudio: el presupuesto depende de lo
              que te llevas.
            </p>
          </div>
          <div className="panel flex flex-col justify-between gap-5 px-6 py-7 sm:px-10 sm:py-8">
            <div className="flex flex-col gap-3">
              <p className="meta">¿Vienes cada mes?</p>
              <p className="prose-body text-[0.92rem]">
                Te reservo una fecha fija y preparamos contigo el guion del mes, para tener el
                orgánico al día y renovar los anuncios antes de que se quemen.
              </p>
            </div>
            <a href="#contacto" className="link-rule data w-fit">
              Quiero una fecha fija
            </a>
          </div>
        </div>

        <p className="reveal meta mt-8 text-center normal-case tracking-[0.02em] text-[0.9rem] leading-[1.8] sm:mt-10">
          Anuncios · VSLs · Reels · Podcast · Cursos — una única sesión al día, reserva con antelación.
        </p>
      </div>
    </section>
  );
}
