"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import SectionHead from "./SectionHead";
import { getFormatosByOrientation, type FormatoItem, type FormatoOrientation } from "@/data/formatos";

const ORIENTATIONS: { value: FormatoOrientation; label: string }[] = [
  { value: "vertical", label: "Vertical" },
  { value: "horizontal", label: "Horizontal" },
];

const SOURCE_LABEL: Record<FormatoItem["source"], string> = {
  bts: "Detrás de cámaras",
  resultado: "Resultado final",
};

export default function Espacio() {
  const [orientation, setOrientation] = useState<FormatoOrientation>("vertical");
  const [active, setActive] = useState<FormatoItem | null>(null);

  const items = useMemo(() => getFormatosByOrientation(orientation), [orientation]);

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

        {/* Picker Horizontal / Vertical */}
        <div className="reveal mt-14 flex items-center gap-2 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1">
            {ORIENTATIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setOrientation(o.value)}
                aria-pressed={orientation === o.value}
                className={`meta rounded-full px-4 py-2 transition-colors duration-300 ${
                  orientation === o.value
                    ? "bg-foreground text-background"
                    : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <p className="meta hidden text-foreground/40 sm:block">
            BTS del ático mezclado con el resultado ya editado
          </p>
        </div>

        {/* Mosaico mixto: BTS + resultado final, foto + vídeo intercalados */}
        <div className="reveal mt-6 columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Ampliar: ${item.alt}`}
              className="group relative mb-3 block w-full cursor-pointer overflow-hidden rounded-[12px] border border-line sm:mb-4"
            >
              <Image
                src={item.kind === "video" ? item.poster! : item.src}
                alt={item.alt}
                width={800}
                height={item.orientation === "vertical" ? 1400 : 600}
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                unoptimized
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A09]/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0A09]/55 to-transparent" />
              <span className="badge pointer-events-none absolute left-3 top-3">
                {SOURCE_LABEL[item.source]}
              </span>
              {item.kind === "video" ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-foreground">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              ) : null}
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

      {/* Lightbox — foto o vídeo según el item */}
      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-6 sm:px-10"
              style={{ background: "rgba(11,10,9,0.92)", backdropFilter: "blur(18px)" }}
              onClick={() => setActive(null)}
              role="dialog"
              aria-modal="true"
              aria-label={active.alt}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar"
                className="glass meta absolute right-4 top-4 z-10 flex h-11 items-center rounded-full px-5 text-foreground"
              >
                Cerrar
              </button>
              {active.kind === "video" ? (
                <video
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="max-h-[86svh] w-auto max-w-[94vw] rounded-[12px] object-contain"
                  onClick={(e) => e.stopPropagation()}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1800}
                  height={1200}
                  unoptimized
                  className="max-h-[86svh] w-auto max-w-[94vw] rounded-[12px] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
