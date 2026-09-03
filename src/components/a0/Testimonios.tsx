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
    <div ref={ref} className="w-[78vw] shrink-0 snap-start sm:w-[330px]">
      <div className="relative aspect-[9/13] overflow-hidden rounded-[12px] border border-line bg-card">
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
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0B0A09 0%, rgba(11,10,9,0.94) 30%, rgba(11,10,9,0.55) 52%, rgba(11,10,9,0) 78%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="accent-italic text-[1.05rem] leading-[1.5] text-foreground">
            “{t.quote}”
          </p>
          <div className="mt-5 rule" />
          <p className="meta mt-3.5 text-foreground/90">{t.name}</p>
          <p className="meta mt-1.5 tracking-[0.02em] normal-case text-foreground/45">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-[clamp(4.5rem,8vw,7.5rem)]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <SectionHead label="Testimonios" title="Lo dicen" accent="ellos" />
      </div>

      {/* El carril sangra a la derecha pero arranca alineado con la retícula:
          la primera tarjeta cuelga de la misma vertical que el titular. */}
      <div className="no-scrollbar reveal mt-14 flex snap-x snap-proximity scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mt-[clamp(3.5rem,5vw,5rem)] sm:gap-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-1360px)/2+2rem))] lg:pr-8">
        {TESTIMONIOS.map((t) => (
          <Card key={t.src} t={t} />
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>

      <div className="mx-auto mt-8 max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="rule" />
        <p className="meta pt-4">Desliza para ver más →</p>
      </div>
    </section>
  );
}
