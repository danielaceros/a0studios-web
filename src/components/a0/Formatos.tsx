import SectionHead from "./SectionHead";

const FORMATOS = [
  {
    title: "Podcast & entrevistas",
    desc: "Sets listos para grabar en solitario o con invitados, en audio y vídeo.",
  },
  {
    title: "Reels, TikToks & Shorts",
    desc: "Vertical optimizado por plataforma. Varias piezas en una misma mañana.",
  },
  {
    title: "Vídeo corporativo & marca personal",
    desc: "LinkedIn, web, presentaciones comerciales y VSLs.",
  },
  {
    title: "Cursos & formación online",
    desc: "Módulos completos grabados en una sola sesión, con teleprompter.",
  },
];

const INCLUYE = [
  { title: "Semanas de contenido en una mañana", desc: "Vienes un día. Sales con material para meses." },
  { title: "Espacio real, no decorado", desc: "Un ático con luz natural y vistas, no un ciclorama." },
  { title: "Dirección y equipo incluidos", desc: "Tú traes el mensaje, del resto me encargo yo." },
  { title: "Listo para publicar en 24-48h", desc: "Editado, subtitulado y en formato por plataforma." },
];

export default function Formatos() {
  return (
    <section
      id="formatos"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead label="Formatos" title="Qué puedes" accent="grabar" />

        {/* Lista editorial sobre filetes */}
        <div className="mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="rule" />
          {FORMATOS.map((f, i) => (
            <div key={f.title} className="reveal">
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 py-7 sm:py-9 md:grid-cols-[4rem_minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-x-10">
                <span className="index text-foreground/30 transition-colors duration-300 group-hover:text-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.08] tracking-[-0.028em] text-foreground">
                  {f.title}
                </h3>

                <p className="prose-body col-span-2 max-w-[44ch] text-[0.92rem] md:col-span-1 md:col-start-3">
                  {f.desc}
                </p>
              </div>
              <div className="rule" />
            </div>
          ))}
        </div>

        {/* Qué incluye — pares dato/apoyo, sin cajas: aire y filete */}
        <div className="reveal mt-14 grid gap-x-10 gap-y-10 sm:mt-[clamp(3.5rem,5vw,5rem)] md:grid-cols-2 xl:grid-cols-4">
          {INCLUYE.map((b) => (
            <div key={b.title} className="flex flex-col gap-3.5">
              <span className="tick" aria-hidden="true" />
              <h4 className="font-heading text-[1.02rem] leading-[1.3] tracking-[-0.018em] text-foreground">
                {b.title}
              </h4>
              <p className="prose-body text-[0.89rem]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
