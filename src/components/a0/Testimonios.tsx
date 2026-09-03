"use client";

import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";

type T = { src: string; poster: string; name: string; role: string; quote: string };

const TESTIMONIOS: T[] = [
  { src: "/AXZ.webm", poster: "/optimized/poster-axz.webp", name: "Guillermo", role: "Founder, Geko Marketing", quote: "En tres horas grabamos contenido para todo el equipo. Volveremos." },
  { src: "/TCARLOS.webm", poster: "/optimized/poster-tcarlos.webp", name: "Carlos Niño", role: "CFO, Wifiads", quote: "Te sientes como en casa. La comodidad, los equipos, las innovaciones… Para mí un diez." },
  { src: "/TJAVI.webm", poster: "/optimized/poster-tjavi.webp", name: "Javi", role: "CEO & Founder, ECOM Advisory", quote: "Es la segunda vez que venimos. La primera fue un éxito y ahora vamos a por el segundo." },
  { src: "/TALEXANDRA.webm", poster: "/optimized/poster-talexandra.webp", name: "Alexandra", role: "Creadora de contenido", quote: "Todo muy profesional. Buena calidad, buena luz, buen ambiente. Este es tu sitio." },
  { src: "/TNARRO.webm", poster: "/optimized/poster-tnarro.webp", name: "Narro Machetti", role: "CEO, GoalGuiders IA", quote: "Brutal. Gente cercana, profesional. Grabamos anuncios, podcast, VSL y contenido orgánico." },
  { src: "/C5694.webm", poster: "/optimized/poster-c5694.webp", name: "Almudena", role: "Content Creator, Geko Marketing", quote: "El espacio es súper cómodo. Cinco estrellas." },
];

function Card({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [load]);

  return (
    <div ref={ref} className="w-[78vw] shrink-0 snap-start sm:w-[340px]">
      <div className="relative aspect-[9/13] overflow-hidden rounded-2xl border border-white/12 bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        {load && (
          <video
            ref={videoRef}
            src={t.src}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <track kind="captions" />
          </video>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="accent-italic text-[1.02rem] leading-[1.5] text-white">“{t.quote}”</p>
          <p className="label mt-4 !tracking-[0.18em] text-white/90">{t.name}</p>
          <p className="mt-1.5 font-mono text-[10px] leading-relaxed text-white/50">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <SectionHead label="Testimonios" title="Lo dicen" accent="ellos" />
      </div>

      <div className="no-scrollbar reveal mt-14 flex snap-x snap-proximity scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mt-20 sm:gap-4 sm:px-6 lg:px-8">
        {TESTIMONIOS.map((t) => (
          <Card key={t.src} t={t} />
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>

      <p className="label mt-8 px-4 text-foreground/35 sm:px-6 lg:px-8">Desliza para ver más →</p>
    </section>
  );
}
