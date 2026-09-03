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
    <section
      id="espacio"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="El espacio"
          title="Dónde vas a"
          accent="grabar"
          lead="Terraza con skyline, sala polivalente y set de podcast. Todo en la misma planta, a cinco minutos andando de Atocha."
        />

        {/* Mosaico */}
        <div className="reveal mt-14 columns-2 gap-3 sm:mt-[clamp(3.5rem,5vw,5rem)] sm:gap-4 lg:columns-3 xl:columns-4">
          {SHOTS.map((shot) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(shot)}
              aria-label={`Ampliar: ${shot.caption}`}
              className="group relative mb-3 block w-full cursor-pointer overflow-hidden rounded-[12px] border border-line sm:mb-4"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A09]/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0A09]/55 to-transparent" />
              <span className="badge pointer-events-none absolute left-3 top-3">{shot.zone}</span>
              <span className="meta pointer-events-none absolute bottom-3.5 left-3.5 right-3.5 text-left normal-case tracking-[0.01em] text-[12.5px] text-foreground/90">
                {shot.caption}
              </span>
            </button>
          ))}
        </div>

        {/* Ficha de ubicación — datos sobre filetes, como una hoja de rodaje */}
        <div className="reveal panel mt-4 flex flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="meta">Dónde estamos</p>
            <p className="mt-4 font-heading text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.03em] text-foreground">
              Ronda de Atocha 16 · Planta 7
            </p>
            <div className="mt-6 flex flex-col gap-0 sm:max-w-[30rem]">
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Barrio</span>
                <span className="data">Madrid centro</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Metro</span>
                <span className="data">Atocha Renfe (L1) · 5 min</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Cercanías</span>
                <span className="data">Atocha · 5 min</span>
              </div>
              <div className="rule" />
            </div>
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
              style={{ background: "rgba(11,10,9,0.92)", backdropFilter: "blur(18px)" }}
              onClick={() => setActive(null)}
              role="dialog"
              aria-modal="true"
              aria-label={active.caption}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar imagen"
                className="glass meta absolute right-4 top-4 z-10 flex h-11 items-center rounded-full px-5 text-foreground"
              >
                Cerrar
              </button>
              <Image
                src={active.src}
                alt={active.alt}
                width={1800}
                height={1200}
                className="max-h-[86svh] w-auto max-w-[94vw] rounded-[12px] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
