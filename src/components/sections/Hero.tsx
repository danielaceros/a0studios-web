"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";
import ContactFormEmbed from "./ContactFormEmbed";

const LOGOS_SRC = "/optimized/logos-banner.png";

const TESTIMONIALS = [
  { quote: "En tres horas grabamos contenido para todo el equipo. Volveremos.", name: "Guillermo", role: "Geko Marketing" },
  { quote: "El espacio es super cómodo. Cinco estrellas.", name: "Almudena", role: "Geko Marketing" },
  { quote: "Te sientes como en casa. La comodidad, los equipos, las innovaciones... Para mí un diez.", name: "Carlos Niño", role: "Wifiads" },
  { quote: "Es la segunda vez que venimos. La primera fue un éxito y ahora vamos a por el segundo.", name: "Javi", role: "ECOM Advisory" },
  { quote: "Todo muy profesional. Buena calidad, buena luz, buen ambiente. Este es tu sitio.", name: "Alexandra", role: "Creadora de Contenido" },
  { quote: "Brutal. Gente cercana, profesional. Grabamos anuncios, podcast, VSL y contenido orgánico.", name: "Narro Machetti", role: "GoalGuiders IA" },
];

const LINES = [
  { text: "Tu Contenido.", accent: false },
  { text: "Tu Marca.", accent: false },
  { text: "Un Día.", accent: true },
];

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Layer 3: headline floats up slightly on scroll (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const headline = headlineRef.current;
    if (!headline) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        headline.style.transform = `translateY(${window.scrollY * -0.1}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden md:min-h-screen" aria-label="Hero">
      {/* Video — absolute fullscreen on all viewports */}
      <div className="absolute inset-0">
        <VideoBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:min-h-screen lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-40 lg:text-left xl:gap-16 2xl:px-20">
        {/* Headline — centered on mobile, left on desktop */}
        <div
          ref={headlineRef}
          className="flex min-h-[100svh] flex-1 flex-col justify-end pb-16 px-5 sm:px-8 md:justify-center md:pb-0 lg:min-h-0 lg:w-[55%] lg:px-0 lg:pb-12"
          style={{ willChange: "transform" }}
        >
          {/* Terminal-style label — visually reinforced */}
          <div className="hero-line-wrapper mb-4 sm:mb-5">
            <p
              className="hero-line font-mono text-sm uppercase leading-relaxed tracking-wide text-accent sm:text-base md:tracking-[0.2em]"
              style={{ animationDelay: "0.2s" }}
            >
              [ Graba contenido para semanas. En una mañana. En un ático en Madrid. ]
            </p>
          </div>

          {/* Cinematic line-by-line reveal */}
          <h1 className="max-w-[1100px] font-heading text-[clamp(2.2rem,11vw,6.5rem)] uppercase leading-[0.95] tracking-tight text-foreground [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:text-[clamp(2.8rem,7vw,6.5rem)] sm:leading-[0.86] md:leading-[0.85]">
            {LINES.map((line, i) => (
              <span key={i} className="hero-line-wrapper inline-block w-full">
                <span
                  className={`hero-line inline-block ${line.accent ? "accent-italic normal-case tracking-normal" : ""}`}
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                >
                  {line.text}
                </span>
                {i < LINES.length - 1 && " "}
              </span>
            ))}
          </h1>

          <p className="sr-only">
            Estudio de grabación de contenido audiovisual en Madrid centro. Ubicado en un ático en Ronda de Atocha 16, ofrece sesiones de grabación de podcast, reels, vídeo corporativo, cursos online y anuncios con filmmaker, equipo técnico y dirección creativa incluidos. Entrega de contenido editado en 24-48 horas. Clientes: FIFA, IFEMA, Cinesa, Cámara de Comercio de Madrid.
          </p>

          <div className="hero-line-wrapper mt-5 sm:mt-6">
            <p
              className="hero-line max-w-[540px] text-base leading-[1.7] text-foreground/65 sm:text-[1.05rem] sm:leading-[1.8] lg:text-[1.1rem]"
              style={{ animationDelay: "0.9s" }}
            >
              Ático en Madrid centro. Equipo, filmmaker y dirección incluidos. Entrega en 24-48h.
            </p>
          </div>

          {/* CTA button on mobile instead of form */}
          <div className="hero-line-wrapper mt-8 lg:hidden">
            <a
              href="#contacto"
              className="hero-line inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
              style={{ animationDelay: "1.1s" }}
            >
              Pide tu Presupuesto →
            </a>
            <p className="hero-line mt-2 text-center text-xs text-foreground/40" style={{ animationDelay: "1.2s" }}>
              Sin compromiso · Respuesta en menos de 1h
            </p>
            <a
              href="https://www.instagram.com/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-line mt-3 block text-center font-mono text-xs uppercase tracking-wider text-muted/60 transition-colors hover:text-accent"
              style={{ animationDelay: "1.3s" }}
            >
              por @daniaceros · filmmaker
            </a>
          </div>

          {/* Mini-testimonio rotativo */}
          <div className="hero-line-wrapper mt-5 lg:mt-6">
            <div
              className="hero-line relative h-[3.8em] sm:h-[3.2em] md:h-[2.8em] overflow-hidden"
              style={{ animationDelay: "1.25s" }}
            >
              {TESTIMONIALS.map((t, i) => (
                <p
                  key={i}
                  className="absolute inset-0 text-sm leading-relaxed text-foreground/50 transition-opacity duration-700 ease-in-out lg:text-[0.9rem]"
                  style={{ opacity: i === activeTestimonial ? 1 : 0 }}
                >
                  ★★★★★ &ldquo;{t.quote}&rdquo; — {t.name}, {t.role}
                </p>
              ))}
            </div>
          </div>

          {/* Social proof logos — mobile */}
          <div className="hero-line-wrapper mt-8 lg:hidden">
            <div
              className="hero-line"
              style={{ animationDelay: "1.3s" }}
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/30">
                Empresas que han confiado en m&iacute;
              </p>
              <div
                className="w-[95%] overflow-hidden sm:w-[85%]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <Image
                  src={LOGOS_SRC}
                  alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa"
                  width={1200}
                  height={56}
                  className="h-6 w-auto max-w-none scale-[1.15] brightness-0 invert opacity-40 sm:h-9"
                  draggable={false}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form block — ONLY on desktop */}
        <div className="hero-form-reveal hidden lg:block lg:w-[380px] lg:shrink-0 lg:pb-12 xl:w-[420px]">
          <div className="glass overflow-hidden rounded-2xl">
            <ContactFormEmbed loadDelay={0} signalReady />
          </div>
        </div>
      </div>

      {/* Marquee — static on mobile, absolute on desktop */}
      <div className="relative z-10 w-full lg:absolute lg:bottom-0 lg:left-0">
        <Marquee />
      </div>

      <style>{`
        .hero-line-wrapper {
          overflow: hidden;
        }
        .hero-line {
          transform: translateY(110%);
          animation: heroRevealLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-form-reveal {
          opacity: 0;
          animation: heroFadeIn 0.8s ease-out 0.9s forwards;
        }
        @keyframes heroRevealLine {
          to { transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-line {
            transform: translateY(0);
            animation: none;
          }
          .hero-form-reveal {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
