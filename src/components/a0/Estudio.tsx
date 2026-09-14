import Image from "next/image";
import SectionHead from "./SectionHead";

// Lo que diferencia al estudio no es el espacio sino quién dirige la sesión:
// la comparativa enfrenta el estudio al uso con el criterio de marketing.
const COMPARATIVA = [
  {
    label: "Lo habitual",
    items: [
      "Te alquilan el espacio y el equipo",
      "Grabas lo que traigas preparado",
      "Se cuida que se vea bien",
      "Te entregan los archivos y listo",
    ],
    destacado: false,
  },
  {
    label: "En A0Studios",
    items: [
      "Te dirige alguien que hace marketing",
      "Cada pieza llega con guion y un objetivo",
      "Se cuida que se vea bien y que funcione donde se publica",
      "Te llevas piezas listas para anuncio, orgánico o web",
    ],
    destacado: true,
  },
];

const STATS = [
  { value: "6 años", label: "Produciendo para marcas" },
  { value: "12", label: "Piezas de media por sesión" },
  { value: "1", label: "Sesión al día" },
  { value: "24-48h", label: "Entrega con edición" },
];

export default function Estudio() {
  return (
    <section
      id="estudio"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="El método"
          title="Sabemos para qué"
          accent="grabas"
          lead="Casi todos los estudios de grabación de Madrid te ofrecen buena luz y buena cámara. Aquí además te dirige alguien que monta anuncios, construye funnels y mide lo que cuesta conseguir cada cliente."
        />

        {/* Comparativa — dos columnas sobre filetes compartidos */}
        <div className="reveal grid-hair grid-hair--2 mt-14 grid grid-cols-1 sm:mt-[clamp(3.5rem,5vw,5rem)] md:grid-cols-2">
          {COMPARATIVA.map((col) => (
            <div
              key={col.label}
              className={`px-6 py-8 sm:px-10 sm:py-11 ${col.destacado ? "bg-[var(--color-raised)]" : ""}`}
            >
              <p className={`meta ${col.destacado ? "text-foreground" : ""}`}>{col.label}</p>
              <ul className="mt-7 flex flex-col gap-4">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3.5 text-[0.95rem] leading-[1.5] sm:text-[1.02rem] ${
                      col.destacado ? "text-foreground" : "text-foreground/45"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[11px] h-px w-3.5 shrink-0 ${
                        col.destacado ? "bg-foreground" : "bg-foreground/25"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cifras — un solo bloque con filetes compartidos, no cuatro cajas sueltas */}
        <div className="reveal grid-hair grid-hair--2 grid-hair--4 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="figure text-[clamp(2rem,4vw,2.9rem)] text-foreground">{s.value}</p>
              <p className="meta mt-4">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Founder — el estudio no se entiende sin quien lo dirige */}
        <div className="reveal mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="panel relative aspect-[4/5] overflow-hidden lg:aspect-auto">
            <Image
              src="/me.webp"
              alt="Dani Acero, fundador y filmmaker de A0Studios"
              width={640}
              height={640}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <span className="badge absolute bottom-4 left-4">Dani Acero · Fundador</span>
          </div>

          <div className="panel flex flex-col justify-between gap-8 px-6 py-9 sm:px-11 sm:py-12">
            <div className="flex flex-col gap-7">
              <p className="text-[1.02rem] leading-[1.75] text-foreground/88 sm:text-[1.2rem] sm:leading-[1.7]">
                Soy filmmaker, pero ante todo{" "}
                <span className="accent-italic">emprendedor</span>. Llevo seis años produciendo para
                marcas como IFEMA, Cinesa y la Cámara de Comercio de Madrid, y en paralelo gestiono
                anuncios, trabajo el SEO y el posicionamiento en IA y monto funnels de venta.
              </p>
              <p className="prose-body max-w-[56ch] text-[0.93rem]">
                Por eso con mis clientes acabo hablando antes de captación, de coste por lead y de
                coste por cliente que de cámaras. En la sesión no solo cuido la luz: te digo qué
                pregunta va a funcionar como reel, cómo arrancar un anuncio para que no lo pasen de
                largo y qué necesita tu VSL para llevar a la llamada.
              </p>
            </div>

            <div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 pt-4">
                <span className="meta">Fundador</span>
                <a
                  href="https://www.instagram.com/daniaceros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule data"
                >
                  @daniaceros
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
