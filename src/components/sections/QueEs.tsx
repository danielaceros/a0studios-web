"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CONTENT_TYPES = [
  { icon: "🎙️", title: "Podcast & Entrevistas", desc: "Sets preparados para grabación en solitario o con invitados.", num: "01" },
  { icon: "📱", title: "Reels / TikToks / Shorts", desc: "Contenido vertical optimizado para redes sociales.", num: "02" },
  { icon: "🎬", title: "Vídeo Corporativo & Marca Personal", desc: "Para LinkedIn, web, presentaciones y VSLs.", num: "03" },
  { icon: "🎓", title: "Cursos & Formación Online", desc: "Graba módulos completos en una sola sesión.", num: "04" },
];

function ContentCard({ item, index }: { item: (typeof CONTENT_TYPES)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <ScrollReveal delay={0.12 + index * 0.08}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative flex h-full flex-col gap-4 overflow-hidden border border-foreground/[0.06] bg-foreground/[0.02] p-4 transition-all duration-500 hover:border-foreground/[0.12] hover:bg-foreground/[0.04] sm:p-6 md:p-8"
      >
        {/* Hover glow effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04), transparent 60%)",
          }}
        />

        {/* Number + icon row */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/20">
            {item.num}
          </span>
          <span className="text-2xl transition-transform duration-500 group-hover:scale-110 sm:text-3xl">
            {item.icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative z-10 font-heading text-[1.1rem] uppercase leading-tight tracking-wide text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.2rem]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]">
          {item.desc}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
      </div>
    </ScrollReveal>
  );
}

export default function QueEs() {
  return (
    <section
      id="estudio"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            01 · EL ESTUDIO
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Qué puedes Grabar.
          </h2>
        </ScrollReveal>

        {/* Content types grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {CONTENT_TYPES.map((item, i) => (
            <ContentCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <p className="sr-only">
          A0 Studios es un estudio de producción de contenido audiovisual ubicado en Ronda de Atocha 16, planta 7, en el centro de Madrid, a 5 minutos a pie del Metro Atocha Renfe y Cercanías Atocha. El estudio ocupa un ático de uso exclusivo con terraza con vistas al skyline de Madrid, sala polivalente con set de podcast, iluminación profesional LED, equipo de cámaras Sony, micrófonos y teleprompter incluidos en todas las sesiones con filmmaker. Desde su apertura, el estudio ha completado más de 28 proyectos de producción, acumulado más de 500 horas de grabación y generado más de 12 piezas editadas por sesión de media. Entre sus clientes se encuentran FIFA, IFEMA, Cinesa y la Cámara de Comercio de Madrid. Solo se realiza una sesión por día para garantizar disponibilidad exclusiva del espacio. El servicio incluye grabación, dirección creativa y opcionalmente edición con entrega en 24-48 horas.
        </p>
      </div>
    </section>
  );
}
