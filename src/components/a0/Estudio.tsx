import Image from "next/image";
import SectionHead from "./SectionHead";

const STATS = [
  { value: "28+", label: "Proyectos producidos" },
  { value: "500+", label: "Horas de grabación" },
  { value: "12", label: "Piezas por sesión" },
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
          label="El estudio"
          title="Un ático, no un"
          accent="plató"
          lead="Ronda de Atocha 16, planta 7. Terraza con vistas al skyline, sala polivalente, set de podcast, luz natural trabajada y equipo profesional. Una sola sesión al día para que el espacio sea tuyo."
        />

        {/* Cifras — un solo bloque con filetes compartidos, no cuatro cajas sueltas */}
        <div className="reveal grid-hair grid-hair--2 grid-hair--4 mt-14 grid grid-cols-1 sm:mt-[clamp(3.5rem,5vw,5rem)] md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="figure text-[clamp(2rem,4vw,2.9rem)] text-foreground">{s.value}</p>
              <p className="meta mt-4">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Founder — bloque editorial. La columna de imagen lleva relación fija
            para que no sea la foto la que decide la altura de la fila. */}
        <div className="reveal mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="panel relative aspect-[4/5] overflow-hidden lg:aspect-auto">
            <Image
              src="/me.webp"
              alt="Dani Acero, fundador y filmmaker de A0 Studios"
              width={640}
              height={640}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <span className="badge absolute bottom-4 left-4">Dani Acero · Filmmaker</span>
          </div>

          <div className="panel flex flex-col justify-between gap-8 px-6 py-9 sm:px-11 sm:py-12">
            <div className="flex flex-col gap-7">
              <p className="text-[1.02rem] leading-[1.75] text-foreground/88 sm:text-[1.2rem] sm:leading-[1.7]">
                Seis años produciendo audiovisual para marcas como{" "}
                <span className="accent-italic">IFEMA, Cinesa</span> y la Cámara de Comercio de
                Madrid. Monté A0 Studios para que empresas y creadores pudieran grabar contenido
                profesional sin los costes ni la logística de un rodaje tradicional.
              </p>
              <p className="prose-body max-w-[56ch] text-[0.93rem]">
                Superviso personalmente cada sesión: preparo el set, dirijo la grabación y entrego el
                material editado. Calidad de producción corporativa con la agilidad que pide el
                contenido de redes.
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
