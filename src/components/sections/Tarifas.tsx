"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { use3DTilt } from "@/hooks/use3DTilt";

const OPTIONS = [
  {
    label: "Grabación",
    name: "Solo Grabación",
    description:
      "Vienes al ático y grabas con mi equipo técnico. Sales con los brutos del día listos para editar.",
    includes: [
      "Ático privado con vistas a Madrid",
      "Iluminación de estudio",
      "Cámaras y equipo técnico",
      "Sonido profesional",
      "Teleprompter",
    ],
    highlighted: false,
  },
  {
    label: "Más elegido",
    name: "Grabación + Edición",
    description:
      "Vienes, grabas conmigo y en 48h tienes el contenido listo para publicar. Sin gestionar nada.",
    includes: [
      "Todo lo de Solo Grabación",
      "Filmmaker con dirección creativa",
      "Edición profesional",
      "Subtítulos y formato por plataforma",
      "Entrega en 24-48h",
    ],
    highlighted: true,
  },
  {
    label: "Todo incluido",
    name: "Producción Completa",
    description:
      "Grabación, edición, estrategia y distribución. Tú solo apareces delante de la cámara. Yo me encargo del resto.",
    includes: [
      "Todo lo de Grabación + Edición",
      "Estrategia de contenido",
      "Distribución multiplataforma",
      "Seguimiento y optimización",
    ],
    highlighted: false,
  },
] as const;

function OptionCard({ option, index }: { option: (typeof OPTIONS)[number]; index: number }) {
  const { ref, lightRef, onMouseMove, onMouseLeave } = use3DTilt(6);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`group glass glass-hover relative flex h-full flex-col rounded-2xl p-5 transition-all duration-500 sm:p-7 md:p-9 lg:p-10 ${
          option.highlighted ? "border-accent/30" : ""
        }`}
        style={{ transition: "transform 0.6s ease, box-shadow 0.5s ease" }}
      >
        {/* Light highlight overlay */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        />

        {/* Name + Label badge */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            {option.name}
          </p>
          <span className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] ${
            option.highlighted ? "text-accent" : "text-muted"
          }`}>
            {option.label}
          </span>
        </div>

        {/* Description */}
        <p className="relative z-10 mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {option.description}
        </p>

        {/* Includes */}
        <ul className="relative z-10 mt-8 flex flex-col gap-3">
          {option.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-[1.4] text-foreground/80 sm:leading-snug">
              <span className="mt-[7px] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative z-10 mt-auto pt-10">
          <a
            href="#contacto"
            data-cursor-text="RESERVAR"
            className={`inline-block w-full min-h-[44px] px-8 py-4 text-center font-mono text-[12px] uppercase tracking-[0.15em] transition-all duration-300 sm:px-10 sm:text-[11px] ${
              option.highlighted
                ? "bg-accent text-background hover:bg-accent-light"
                : "border border-foreground/30 text-foreground hover:border-accent hover:bg-accent hover:text-background"
            }`}
          >
            Pedir Presupuesto
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Tarifas() {
  return (
    <section id="tarifas" className="bg-[#0e0e0e] px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            07 · OPCIONES
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-6 sm:leading-[0.85]">
            Elige lo que <span className="accent-italic normal-case tracking-normal">Necesitas</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mt-8 max-w-xl text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
            Presupuesto personalizado en menos de 1 hora. Sin compromiso.
          </p>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {OPTIONS.map((option, index) => (
            <OptionCard key={option.name} option={option} index={index} />
          ))}
        </div>

        <p className="sr-only">
          A0 Studios ofrece tres modalidades de servicio. Solo Grabación incluye acceso al ático con equipo técnico completo, cámaras Sony, iluminación LED, sonido profesional y teleprompter. Grabación más Edición añade filmmaker con dirección creativa, edición profesional, subtítulos y formato por plataforma con entrega en 24-48 horas. Producción Completa incorpora además estrategia de contenido, distribución multiplataforma y seguimiento. Todas las sesiones tienen una duración mínima de 2 horas. El presupuesto es personalizado según el proyecto, con respuesta en menos de 1 hora.
        </p>

        {/* Bottom note */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 text-center font-mono text-[12px] text-muted sm:mt-14">
            Sesiones desde 2 horas · Reels, YouTube, podcast, VSLs, cursos · Presupuesto sin compromiso
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
