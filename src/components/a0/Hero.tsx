"use client";

import Image from "next/image";
import { SITE_NAME_SPOKEN, SITE_NAME_TRADEMARKED } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-28 sm:pt-32">
      {/* Fondo: vídeo real del estudio, muy atenuado — solo textura */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/optimized/hero-poster-v2.webp"
          className="h-full w-full object-cover opacity-[0.3]"
        >
          <source src="/optimized/hero-desktop.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        {/* Viñeta para asegurar contraste del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 42%, rgba(11,10,9,0.32) 0%, rgba(11,10,9,0.82) 56%, #0B0A09 100%)",
          }}
        />
      </div>

      {/* Marcas de encuadre — las cuatro esquinas del visor */}
      <div className="pointer-events-none absolute inset-x-5 inset-y-24 hidden lg:block">
        <span className="absolute left-0 top-0 h-5 w-px bg-foreground/22" />
        <span className="absolute left-0 top-0 h-px w-5 bg-foreground/22" />
        <span className="absolute right-0 top-0 h-5 w-px bg-foreground/22" />
        <span className="absolute right-0 top-0 h-px w-5 bg-foreground/22" />
        <span className="absolute bottom-0 left-0 h-5 w-px bg-foreground/22" />
        <span className="absolute bottom-0 left-0 h-px w-5 bg-foreground/22" />
        <span className="absolute bottom-0 right-0 h-5 w-px bg-foreground/22" />
        <span className="absolute bottom-0 right-0 h-px w-5 bg-foreground/22" />
      </div>

      {/* Wordmark — es el h1 semántico de la home (único por página).
          Se mantiene visualmente idéntico: la imagen del logo hace de
          título visible y el texto descriptivo real va sr-only dentro
          del propio h1, para que el DOM tenga un h1 con contenido textual
          real (no solo el alt de una imagen). */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="relative m-0 flex w-full min-w-0 select-none justify-center p-0 text-[0] font-normal leading-none">
          <div className="relative w-[clamp(9rem,42vw,34rem)] max-w-full min-w-0">
            <Image
              src="/optimized/wordmark-hero.webp"
              alt={SITE_NAME_TRADEMARKED}
              width={1876}
              height={304}
              priority
              fetchPriority="high"
              className="relative h-auto w-full object-contain"
            />
          </div>
          <span className="sr-only">
            {SITE_NAME_TRADEMARKED} ({SITE_NAME_SPOKEN}) — estudio boutique de grabación de
            contenido audiovisual en un ático en Madrid centro: anuncios, VSLs, reels y podcast que
            convierten, dirigidos por Dani Acero.
          </span>
        </h1>

        <div className="mt-7 flex items-center gap-2 sm:mt-9">
          <span className="text-[12px] tracking-[0.02em] text-foreground/45">por</span>
          <a
            href="https://www.instagram.com/daniaceros/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3.5 text-[12.5px] text-foreground/85 transition-colors hover:text-foreground"
          >
            <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/25">
              <Image
                src="/optimized/avatar-daniaceros.webp"
                alt="Daniel Acero"
                fill
                sizes="24px"
                className="object-cover"
              />
            </span>
            <span className="font-medium tracking-[0.01em]">@daniaceros</span>
          </a>
        </div>

        <p className="mt-7 max-w-[22ch] text-balance text-center font-heading text-[clamp(1.55rem,3.6vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-foreground sm:mt-9">
          Contenido que <span className="accent-italic tracking-normal">convierte</span>
        </p>
        <p className="mt-4 max-w-[34ch] text-balance text-center text-[0.95rem] leading-[1.65] text-foreground/65 sm:max-w-[48ch] sm:text-[1.02rem]">
          En ventas, en clientes o en seguidores. Estudio de grabación en Madrid centro para
          anuncios, VSLs, reels y podcast.
        </p>
        <p className="meta mt-5 text-center">Estudio boutique · Una única sesión al día</p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row">
          <a href="#contacto" className="btn btn-solid">
            Pedir presupuesto
          </a>
          <a href="#resultados" className="btn btn-outline">
            Ver resultados
          </a>
        </div>
      </div>

      {/* Pie: ficha técnica sobre filete */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 pb-14 sm:px-6 sm:pb-2 lg:px-8">
        <div className="rule" />
        <div className="flex items-center justify-between gap-8 pt-4">
          <p className="meta">Ronda de Atocha 16 · Planta 7 · Madrid</p>
          <p className="meta hidden lg:block">
            Est. 2025 — por{" "}
            <a
              href="https://www.instagram.com/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground"
            >
              @daniaceros
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
