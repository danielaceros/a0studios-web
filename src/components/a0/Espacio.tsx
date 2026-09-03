"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import SectionHead from "./SectionHead";

type Shot = { src: string; alt: string; zone: string; caption: string };

const SHOTS: Shot[] = [
  { src: "/optimized/terraza-img_8061.webp", zone: "Terraza", caption: "Atardecer sobre Madrid", alt: "Atardecer sobre los tejados de Madrid desde la terraza del ático" },
  { src: "/optimized/tour-podcast-2.webp", zone: "Set", caption: "Setup con teleprompter", alt: "Setup de grabación con teleprompter y cámara" },
  { src: "/optimized/studio/dsc09925.webp", zone: "Terraza", caption: "Cámara lista en la terraza", alt: "Cámara en la terraza con vistas a los tejados de Madrid" },
  { src: "/optimized/sala-polivalente-7774.webp", zone: "Podcast", caption: "Entrevista a dos", alt: "Entrevista de podcast con dos personas y micrófonos profesionales" },
  { src: "/optimized/terraza-img_8052.webp", zone: "Terraza", caption: "Tejados de Atocha", alt: "Panorámica de los tejados de Madrid desde el rooftop" },
  { src: "/1_1.webp", zone: "Podcast", caption: "Luz cálida", alt: "Entrevista en set de podcast con iluminación cálida" },
  { src: "/optimized/studio/dsc09789.webp", zone: "Set", caption: "Rodaje en curso", alt: "Sesión de grabación en el estudio" },
  { src: "/IMG_7368.webp", zone: "Podcast", caption: "Dos presentadores", alt: "Dos presentadores mirándose en el set de podcast" },
  { src: "/optimized/sala-polivalente-7761.webp", zone: "Sala polivalente", caption: "Espacio flexible", alt: "Sesión de grabación en la sala polivalente con iluminación cálida" },
  { src: "/optimized/studio/dsc09877.webp", zone: "Set", caption: "Detalle de equipo", alt: "Detalle del equipo técnico del estudio" },
  { src: "/4_1.webp", zone: "Podcast", caption: "Ambiente púrpura", alt: "Sesión de podcast con iluminación ambiente púrpura" },
  { src: "/optimized/terraza-img_8054.webp", zone: "Terraza", caption: "Vistas al centro", alt: "Terraza del estudio con vistas a los edificios de Madrid centro" },
];

export default function Espacio() {
  const [active, setActive] = useState<Shot | null>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="espacio" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          label="El espacio"
          title="Dónde vas a"
          accent="grabar"
          lead="Terraza con skyline, sala polivalente y set de podcast. Todo en la misma planta, a cinco minutos andando de Atocha."
        />

        {/* Mosaico */}
        <div className="reveal mt-14 columns-2 gap-3 sm:mt-20 sm:gap-4 lg:columns-3 xl:columns-4">
          {SHOTS.map((shot) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(shot)}
              aria-label={`Ampliar: ${shot.caption}`}
              className="group relative mb-3 block w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 sm:mb-4"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="glass pointer-events-none absolute left-3 top-3 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground">
                {shot.zone}
              </span>
              <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-left text-[12px] text-white/85">
                {shot.caption}
              </span>
            </button>
          ))}
        </div>

        {/* Ficha de ubicación */}
        <div className="reveal glass mt-4 flex flex-col gap-6 rounded-2xl px-6 py-8 sm:mt-5 sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label text-foreground/45">Dónde estamos</p>
            <p className="mt-3 font-heading text-[clamp(1.3rem,2.4vw,1.9rem)] leading-tight tracking-tight text-foreground">
              Ronda de Atocha 16 · Planta 7
            </p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              Madrid centro · 5 min a pie de Metro Atocha Renfe (L1) y Cercanías
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-fit shrink-0"
          >
            Abrir en Maps
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-6 sm:px-10"
              style={{ background: "rgba(5,5,5,0.9)", backdropFilter: "blur(18px)" }}
              onClick={() => setActive(null)}
              role="dialog"
              aria-modal="true"
              aria-label={active.caption}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar imagen"
                className="glass absolute right-4 top-4 z-10 flex h-11 items-center rounded-full px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground"
              >
                Cerrar
              </button>
              <Image
                src={active.src}
                alt={active.alt}
                width={1800}
                height={1200}
                className="max-h-[86svh] w-auto max-w-[94vw] rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
