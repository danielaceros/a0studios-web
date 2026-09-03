"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const CONTENT_TYPES = [
  { title: "Podcast & Entrevistas", desc: "Sets preparados para grabación en solitario o con invitados.", num: "01" },
  { title: "Reels / TikToks / Shorts", desc: "Contenido vertical optimizado para redes sociales.", num: "02" },
  { title: "Vídeo Corporativo & Marca Personal", desc: "Para LinkedIn, web, presentaciones y VSLs.", num: "03" },
  { title: "Cursos & Formación Online", desc: "Graba módulos completos en una sola sesión.", num: "04" },
];

const STATS = [
  { value: "28+", label: "Proyectos completados" },
  { value: "500+", label: "Horas de grabación" },
  { value: "12", label: "Piezas editadas / sesión" },
  { value: "1", label: "Sesión exclusiva al día" },
];

export default function QueEs() {
  return (
    <section id="estudio" className="px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-10 lg:py-40 xl:px-14 2xl:px-16">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">01 · EL ESTUDIO</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Qué puedes <span className="accent-italic normal-case tracking-normal">Grabar</span>.
          </h2>
        </ScrollReveal>

        {/* Stat tiles — glass */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-6 sm:px-6 sm:py-8">
              <p className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-foreground">{s.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content types — glass grid */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {CONTENT_TYPES.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.06}>
              <div className="glass glass-hover flex h-full flex-col gap-4 rounded-2xl p-5 sm:p-6">
                <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/30">{item.num}</span>
                <h3 className="font-heading text-[1.05rem] uppercase leading-tight tracking-wide text-foreground sm:text-[1.15rem]">
                  {item.title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="sr-only">
          A0 Studios es un estudio de producción de contenido audiovisual ubicado en Ronda de Atocha 16, planta 7, en el centro de Madrid, a 5 minutos a pie del Metro Atocha Renfe y Cercanías Atocha. El estudio ocupa un ático de uso exclusivo con terraza con vistas al skyline de Madrid, sala polivalente con set de podcast, iluminación profesional LED, equipo de cámaras Sony, micrófonos y teleprompter incluidos en todas las sesiones con filmmaker. Desde su apertura, el estudio ha completado más de 28 proyectos de producción, acumulado más de 500 horas de grabación y generado más de 12 piezas editadas por sesión de media. Entre sus clientes se encuentran FIFA, IFEMA, Cinesa y la Cámara de Comercio de Madrid. Solo se realiza una sesión por día para garantizar disponibilidad exclusiva del espacio. El servicio incluye grabación, dirección creativa y opcionalmente edición con entrega en 24-48 horas.
        </p>
      </div>
    </section>
  );
}
