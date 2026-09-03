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
    <section id="formatos" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead num="02" label="Formatos" title="Qué puedes" accent="grabar" />

        {/* Lista editorial */}
        <div className="mt-14 sm:mt-20">
          <div className="rule" />
          {FORMATOS.map((f, i) => (
            <div key={f.title} className="reveal">
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 py-8 transition-colors duration-300 sm:py-10 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)] md:gap-x-10">
                <span className="label text-foreground/35 transition-colors duration-300 group-hover:text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] uppercase leading-[1.05] tracking-tight text-foreground">
                  {f.title}
                </h3>

                <p className="col-span-2 max-w-[46ch] text-[0.95rem] leading-[1.75] text-muted md:col-span-1 md:col-start-3">
                  {f.desc}
                </p>
              </div>
              <div className="rule" />
            </div>
          ))}
        </div>

        {/* Qué incluye — glass */}
        <div className="reveal mt-14 grid gap-3 sm:mt-20 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {INCLUYE.map((b) => (
            <div key={b.title} className="glass glass-hover flex flex-col gap-3 rounded-2xl p-6 sm:p-7">
              <h4 className="font-heading text-[1.02rem] uppercase leading-[1.2] tracking-tight text-foreground">
                {b.title}
              </h4>
              <p className="text-[0.9rem] leading-[1.7] text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
