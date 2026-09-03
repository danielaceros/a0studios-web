"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type WorkItem = {
  slug: string;
  title: string;
  credits: string;
  desc: string;
  video: string;
  videoHD?: string;
  cover: string;
  alt: string;
};

export default function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // Carga el vídeo solo cuando la fila se acerca al viewport
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || load) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [load]);

  // Cierra el modal con Escape y bloquea el scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const flip = index % 2 === 1;

  return (
    <div ref={wrapRef} className="reveal">
      <div
        className={`grid items-center gap-6 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Media */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ver el vídeo de ${item.title}`}
          className="group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/12 bg-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.cover}
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {load && (
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            >
              <track kind="captions" />
            </video>
          )}

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Play en glass */}
          <span className="glass pointer-events-none absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 sm:bottom-5 sm:right-5">
            <svg width="13" height="15" viewBox="0 0 13 15" aria-hidden="true">
              <path d="M0 0L13 7.5L0 15V0Z" fill="white" />
            </svg>
          </span>
        </button>

        {/* Texto */}
        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-baseline gap-4">
            <span className="label text-foreground/35">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="font-heading text-[clamp(1.7rem,4vw,3.1rem)] leading-[0.95] tracking-tight text-foreground">
              {item.title}
            </h3>
          </div>

          <p className="accent-italic mt-3 text-[1.05rem] text-foreground/65 sm:text-[1.2rem]">
            {item.credits}
          </p>

          <p className="mt-5 max-w-[44ch] text-[0.95rem] leading-[1.75] text-muted">{item.desc}</p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label mt-7 border-b border-white/25 pb-1 text-foreground transition-colors hover:border-white"
          >
            Ver el vídeo
          </button>
        </div>
      </div>

      <div className="rule" />

      {/* Modal HD */}
      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-6 sm:px-8"
              style={{ background: "rgba(5,5,5,0.86)", backdropFilter: "blur(18px)" }}
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Vídeo de ${item.title}`}
            >
              <div
                className="glass relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar vídeo"
                  className="glass meta absolute right-3 top-3 z-10 flex h-11 items-center rounded-full px-5 text-foreground"
                >
                  Cerrar
                </button>
                <video
                  src={item.videoHD || item.video}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setReady(true)}
                  className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                >
                  <track kind="captions" />
                </video>
                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    ready ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="h-8 w-8 animate-spin rounded-full border border-white/50 border-t-transparent" />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
