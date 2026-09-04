"use client";

import Image from "next/image";

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

      {/* Wordmark */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4">
        <div className="relative flex w-full min-w-0 select-none justify-center">
          <div className="relative w-[clamp(9rem,42vw,34rem)] max-w-full min-w-0">
            <Image
              src="/optimized/wordmark-hero.webp"
              alt="A0 Studios"
              width={1257}
              height={252}
              priority
              fetchPriority="high"
              className="relative h-auto w-full object-contain"
            />
          </div>
        </div>

        <p className="mt-11 max-w-[30ch] text-center text-[0.95rem] leading-[1.7] text-foreground/70 sm:mt-14 sm:max-w-none sm:text-[1.02rem]">
          <span className="block">Estudio de grabación · Ático en Madrid centro</span>
          <span className="block">Contenido para semanas, en una mañana</span>
        </p>

        <p className="sr-only">
          A0 Studios es un estudio de grabación de contenido audiovisual en Madrid centro, en un ático
          en Ronda de Atocha 16. Sesiones de podcast, reels, vídeo corporativo, cursos online y anuncios
          con filmmaker, equipo técnico y dirección creativa incluidos. Entrega editada en 24-48 horas.
          Clientes: IFEMA, Cinesa y Cámara de Comercio de Madrid.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row">
          <a href="#contacto" className="btn btn-solid">
            Pedir presupuesto
          </a>
          <a href="#espacio" className="btn btn-outline">
            Ver el espacio
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
