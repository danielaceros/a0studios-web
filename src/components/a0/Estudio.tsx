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
    <section id="estudio" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          num="01"
          label="El estudio"
          title="Un ático, no un"
          accent="plató"
          lead="Ronda de Atocha 16, planta 7. Terraza con vistas al skyline, sala polivalente, set de podcast, luz natural trabajada y equipo profesional. Una sola sesión al día para que el espacio sea tuyo."
        />

        {/* Cifras en glass */}
        <div className="reveal mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-7 sm:px-7 sm:py-9">
              <p className="font-heading text-[clamp(1.9rem,4.5vw,3rem)] leading-none tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="label mt-3 !tracking-[0.18em] text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Founder — bloque editorial */}
        <div className="reveal mt-4 grid gap-4 sm:mt-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <div className="glass relative overflow-hidden rounded-2xl">
            <Image
              src="/me.webp"
              alt="Dani Acero, fundador y filmmaker de A0 Studios"
              width={640}
              height={640}
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[360px]"
            />
            <span className="glass absolute bottom-4 left-4 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
              Dani Acero · Filmmaker
            </span>
          </div>

          <div className="glass flex flex-col justify-center gap-5 rounded-2xl px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-[1rem] leading-[1.8] text-foreground/85 sm:text-[1.15rem] sm:leading-[1.85]">
              Seis años produciendo audiovisual para marcas como{" "}
              <span className="accent-italic">FIFA, IFEMA, Cinesa</span> y la Cámara de Comercio de
              Madrid. Monté A0 Studios para que empresas y creadores pudieran grabar contenido
              profesional sin los costes ni la logística de un rodaje tradicional.
            </p>
            <p className="text-[0.92rem] leading-[1.8] text-muted">
              Superviso personalmente cada sesión: preparo el set, dirijo la grabación y entrego el
              material editado. Calidad de producción corporativa con la agilidad que pide el
              contenido de redes.
            </p>
            <a
              href="https://www.instagram.com/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className="label w-fit border-b border-white/25 pb-1 text-foreground transition-colors hover:border-white"
            >
              @daniaceros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
