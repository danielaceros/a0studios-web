import SectionHead from "./SectionHead";
import { TARIFA_PIEZAS, formatEuros } from "@/lib/constants";

// La unidad de venta es la pieza entregada, nunca el tiempo de estudio.
// Dos opciones con los mismos tramos: el cliente elige qué se lleva.
type Opcion = {
  name: string;
  tag: string;
  desc: string;
  precio: "grabacion" | "llave";
  incluye: string[];
  destacado: boolean;
};

const OPCIONES: Opcion[] = [
  {
    name: "Solo grabación",
    tag: "Te llevas los brutos",
    desc: "Grabamos contigo todas las piezas y te entregamos los brutos organizados, listos para que los edite tu equipo.",
    precio: "grabacion",
    incluye: [
      "Guion de cada pieza antes de venir",
      "Estudio, iluminación y cámaras",
      "Sonido y teleprompter",
      "Dirección durante toda la grabación",
      "Brutos organizados en 24-48h",
    ],
    destacado: false,
  },
  {
    name: "Llave en mano",
    tag: "Te llevas los vídeos",
    desc: "Todo lo anterior y además la edición: te llevas las piezas terminadas, listas para publicar o para lanzar como anuncio.",
    precio: "llave",
    incluye: [
      "Todo lo de Solo grabación",
      "Edición con estructura de anuncio o de reel",
      "Subtítulos y música",
      "Formato para cada plataforma",
      "Una ronda de ajustes",
    ],
    destacado: true,
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
          label="Precios"
          title="Pagas por lo que te"
          accent="llevas"
          lead="Cuéntame qué quieres conseguir y te propongo las piezas. Después eliges: solo los brutos o los vídeos terminados."
        />

        {/* Dos columnas comparables dentro de un mismo bloque, con los mismos
            tramos a la misma altura: se leen como una tabla, no como tarjetas. */}
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

              <p className="prose-body mt-4 max-w-[46ch] text-[0.92rem]">{op.desc}</p>

              {/* Tramos por número de piezas */}
              <div className="mt-8">
                <div className="rule" />
                {TARIFA_PIEZAS.map((t) => (
                  <div key={t.piezas}>
                    <div className="flex items-baseline justify-between gap-6 py-4">
                      <div className="flex flex-col gap-1">
                        <p className="font-heading text-[1.02rem] tracking-[-0.018em] text-foreground">
                          {t.piezas} piezas
                        </p>
                        <p className="meta normal-case tracking-[0.02em]">{t.uso}</p>
                      </div>
                      <p className="figure shrink-0 text-[clamp(1.5rem,2.6vw,1.95rem)] tabular-nums text-foreground">
                        {formatEuros(t[op.precio])}
                      </p>
                    </div>
                    <div className="rule" />
                  </div>
                ))}
              </div>

              <ul className="mt-8 flex flex-col gap-3.5">
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

        {/* Definición de la unidad + recurrencia mensual */}
        <div className="reveal mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="panel flex flex-col gap-3 px-6 py-7 sm:px-10 sm:py-8">
            <p className="meta">Qué es una pieza</p>
            <p className="prose-body max-w-[60ch] text-[0.92rem]">
              Un vídeo de hasta 60 segundos, vertical u horizontal. Los VSLs y los vídeos largos se
              presupuestan aparte. Precios sin IVA.
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
          Anuncios · VSLs · Lanzamientos · Reels — una sola sesión al día, reserva con antelación.
        </p>
      </div>
    </section>
  );
}
