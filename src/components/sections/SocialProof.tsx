"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: 28, suffix: "+", label: "Proyectos" },
  { value: 500, suffix: "+", label: "Horas Producidas" },
  { value: 24, suffix: "-48h", label: "Entrega con edición" },
];

const LOGOS_SRC = "/optimized/logos-banner.png";

function ScrambleNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(String(target));

  useEffect(() => {
    if (!active) return;

    const totalDuration = 1200;
    const scramblePhase = 800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / totalDuration, 1);

      if (elapsed < scramblePhase) {
        const randomVal = Math.floor(Math.random() * target * 1.5);
        setDisplay(String(randomVal));
      } else {
        const stabilizeProgress = (elapsed - scramblePhase) / (totalDuration - scramblePhase);
        const eased = 1 - Math.pow(1 - stabilizeProgress, 3);
        const value = Math.round(eased * target);
        setDisplay(String(value));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(String(target));
      }
    };

    requestAnimationFrame(animate);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative border-y border-[#FFFFFF]/20 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">
        {/* Desktop: single row — stats left, logos right */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-12">
          {/* Stats */}
          <div className="grid w-full grid-cols-2 gap-y-6 gap-x-2 sm:grid-cols-3 sm:gap-4 lg:w-auto lg:gap-12">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="relative flex flex-col items-center text-center">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#080808]/15 sm:block" />
                )}
                <span className="font-heading text-[clamp(2.4rem,10vw,6rem)] leading-none text-[#080808] sm:text-[clamp(3rem,12vw,6rem)]">
                  <ScrambleNumber target={stat.value} suffix={stat.suffix} active={active} />
                </span>
                <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#080808]/60 sm:mt-3 sm:text-[12px] sm:tracking-[0.3em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="w-full lg:w-auto">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-[#080808]/50 lg:text-right">
              Empresas que han confiado en mí
            </p>
            <div
              className="mx-auto w-[90%] overflow-hidden sm:w-[75%] md:w-[60%] lg:mx-0 lg:w-[320px] xl:w-[380px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <div
                className="flex w-max items-center"
                style={{ animation: "marquee 35s linear infinite" }}
              >
                <Image
                  src={LOGOS_SRC}
                  alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa"
                  width={1200}
                  height={56}
                  className="h-8 w-auto max-w-none opacity-50 sm:h-10 lg:h-11"
                  draggable={false}
                  loading="lazy"
                />
                <Image
                  src={LOGOS_SRC}
                  alt=""
                  aria-hidden={true}
                  width={1200}
                  height={56}
                  className="h-8 w-auto max-w-none opacity-50 sm:h-10 lg:h-11"
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-center font-mono text-xs text-[#080808]/40 lg:text-right">
                FIFA · IFEMA · Cinesa · Cámara de Comercio de Madrid
              </p>
            </div>
          </div>
        </div>

        <p className="sr-only">
          A0 Studios ha completado más de 28 proyectos audiovisuales, producido más de 500 horas de contenido y entrega una media de 12 piezas editadas por sesión. El estudio opera con disponibilidad exclusiva de una sesión diaria con entregas en 24-48 horas. Clientes como FIFA, IFEMA, Cinesa y la Cámara de Comercio de Madrid han grabado en el estudio.
        </p>
      </div>
    </section>
  );
}
