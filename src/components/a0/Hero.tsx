"use client";

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
          className="h-full w-full object-cover opacity-[0.28]"
        >
          <source src="/optimized/hero-desktop.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        {/* Viñeta para asegurar contraste del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 45%, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.8) 55%, #050505 100%)",
          }}
        />
      </div>

      {/* Marcas de encuadre laterales (referencia Framehaus) */}
      <span className="pointer-events-none absolute left-4 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/25 lg:block" />
      <span className="pointer-events-none absolute right-4 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/25 lg:block" />

      {/* Wordmark con eco */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4">
        <div className="relative w-full select-none text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-[0.62em] block font-heading text-[clamp(3.2rem,15.5vw,13rem)] uppercase leading-[0.8] tracking-[-0.03em] text-white/[0.07]"
          >
            A0 Studios
          </span>

          <h1 className="relative font-heading text-[clamp(3.2rem,15.5vw,13rem)] uppercase leading-[0.8] tracking-[-0.03em] text-foreground">
            A0 Studios
          </h1>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[0.62em] block font-heading text-[clamp(3.2rem,15.5vw,13rem)] uppercase leading-[0.8] tracking-[-0.03em] text-white/[0.07]"
          >
            A0 Studios
          </span>
        </div>

        <p className="mt-10 max-w-[30ch] text-center text-[0.95rem] leading-[1.6] text-foreground/70 sm:mt-14 sm:max-w-none sm:text-[1.05rem]">
          <span className="block">Estudio de grabación · Ático en Madrid centro</span>
          <span className="block">Contenido para semanas, en una mañana</span>
        </p>

        <p className="sr-only">
          A0 Studios es un estudio de grabación de contenido audiovisual en Madrid centro, en un ático
          en Ronda de Atocha 16. Sesiones de podcast, reels, vídeo corporativo, cursos online y anuncios
          con filmmaker, equipo técnico y dirección creativa incluidos. Entrega editada en 24-48 horas.
          Clientes: FIFA, IFEMA, Cinesa y Cámara de Comercio de Madrid.
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

      {/* Pie: metadatos tipo ficha técnica */}
      <div className="relative mx-auto flex w-full max-w-[1500px] items-end justify-between gap-8 px-4 pb-16 text-[0.8rem] text-foreground/40 sm:px-6 sm:pb-0 lg:px-8">
        <p>Ronda de Atocha 16 · Planta 7 · Madrid</p>
        <p className="hidden lg:block">Est. 2025 — por @daniaceros</p>
        <p className="hidden pr-40 text-right sm:block">Una sesión al día</p>
      </div>
    </section>
  );
}
