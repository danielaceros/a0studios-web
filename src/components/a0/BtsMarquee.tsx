"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BTS_ITEMS, type FormatoItem } from "@/data/formatos";

/**
 * Tira ambiental de BTS del ático — 100% pasiva, sin ninguna interacción:
 * los vídeos van muted/autoPlay/loop/playsInline igual que el vídeo de
 * fondo del Hero (ver Hero.tsx), sin botón de play ni lightbox. Solo es
 * textura visual en bucle infinito mientras se hace scroll.
 *
 * Mecánica de scroll continuo (translate3d + rAF, lista duplicada para
 * loop sin salto) tomada del mismo patrón que PortfolioMarquee /
 * ContactPortfolioMarquee en daniaceros.com — aquí sin el modo "modal".
 */
const SPEED = 0.28;

export default function BtsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const xRef = useRef(0);
  const runningRef = useRef(false);

  useEffect(() => {
    const animate = () => {
      if (!runningRef.current) return;
      if (trackRef.current) {
        xRef.current -= SPEED;
        const width = trackRef.current.scrollWidth / 2;
        if (-xRef.current >= width) xRef.current = 0;
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    const stop = () => {
      runningRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
        else stop();
      },
      { threshold: 0.05 },
    );

    if (trackRef.current) observer.observe(trackRef.current);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" role="presentation" aria-hidden="true">
      <div ref={trackRef} className="flex w-max gap-3 will-change-transform sm:gap-4">
        {[...BTS_ITEMS, ...BTS_ITEMS].map((item, i) => (
          <BtsTile key={`${item.id}-${i}`} item={item} />
        ))}
      </div>

      {/* Fade en los dos bordes — se note el bucle infinito */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B0A09] via-[#0B0A09]/60 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B0A09] via-[#0B0A09]/60 to-transparent sm:w-28" />
    </div>
  );
}

function BtsTile({ item }: { item: FormatoItem }) {
  return (
    <div className="relative h-[120px] w-[90px] shrink-0 overflow-hidden rounded-[10px] border border-line bg-black sm:h-[150px] sm:w-[112px] lg:h-[180px] lg:w-[135px]">
      {item.kind === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="135px"
          unoptimized
          className="pointer-events-none object-cover"
        />
      )}
    </div>
  );
}
