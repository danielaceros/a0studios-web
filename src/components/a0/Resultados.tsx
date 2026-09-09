"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import SectionHead from "./SectionHead";
import { getResultadosByCategory, type FormatoItem, type ResultadoCategory } from "@/data/formatos";

const CATEGORIES: { value: ResultadoCategory; label: string }[] = [
  { value: "reel", label: "Reels" },
  { value: "ad", label: "Ads" },
  { value: "vsl", label: "VSL" },
];

export default function Resultados() {
  const [category, setCategory] = useState<ResultadoCategory>("reel");
  const [active, setActive] = useState<FormatoItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const items = useMemo(() => getResultadosByCategory(category), [category]);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    // Vuelve al principio de la fila cada vez que se cambia de categoría
    trackRef.current?.scrollTo({ left: 0 });
    // El resize/scroll observer de abajo no dispara solo al cambiar de
    // categoría (el contenido cambia sin evento de scroll), así que
    // recalculamos las flechas a mano tras el cambio.
    requestAnimationFrame(updateArrows);
  }, [category]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 220) + 16;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

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
      id="resultados"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="Resultados"
          title="Lo que sale de"
          accent="aquí"
          lead="Piezas ya editadas y publicadas, grabadas en A0Studios: reels, anuncios verticales y VSL."
        />

        {/* Picker Reels / Ads / VSL */}
        <div className="reveal mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setCategory(c.value)}
                aria-pressed={category === c.value}
                className={`meta rounded-full px-4 py-2 transition-colors duration-300 ${
                  category === c.value
                    ? "bg-foreground text-background"
                    : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fila única con scroll horizontal + flechas — click abre lightbox con sonido */}
        <div className="reveal relative mt-6">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 sm:gap-4"
          >
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                data-card
                onClick={() => setActive(item)}
                aria-label={`Reproducir: ${item.alt}`}
                className={`group relative shrink-0 snap-start cursor-pointer overflow-hidden rounded-[12px] border border-line ${
                  item.orientation === "vertical"
                    ? "aspect-[9/16] w-[150px] sm:w-[190px] lg:w-[220px]"
                    : "aspect-[16/9] w-[280px] sm:w-[380px] lg:w-[460px]"
                }`}
              >
                <Image
                  src={item.poster!}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1280px) 30vw, 22vw"
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A09]/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0A09]/55 to-transparent" />
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
              </button>
            ))}
          </div>

          {/* Flechas — navegación manual, sin auto-scroll */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Ver anteriores"
            className="glass absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-opacity duration-300 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M15.5 4.5 8 12l7.5 7.5 1.4-1.4L10.8 12l6.1-6.1z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Ver siguientes"
            className="glass absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full text-foreground transition-opacity duration-300 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M8.5 4.5 16 12l-7.5 7.5-1.4-1.4L13.2 12 7.1 5.9z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox — vídeo con controles y sonido */}
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
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
