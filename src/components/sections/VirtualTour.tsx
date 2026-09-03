"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ─── Zone data ─── */
interface ZonePhoto {
  src: string;
  alt: string;
  caption: string;
}

interface Zone {
  id: string;
  name: string;
  subtitle: string;
  photos: ZonePhoto[];
  connections: string[];
  comingSoon?: boolean;
}

const ZONES: Zone[] = [
  {
    id: "terraza",
    name: "Chillout",
    subtitle: "Rooftop con vistas al skyline de Madrid",
    photos: [
      { src: "/optimized/studio-3.webp", alt: "Vista panorámica del skyline de Madrid desde la terraza", caption: "Skyline de Madrid" },
      { src: "/optimized/studio/dsc09925.webp", alt: "Cámara en la terraza rooftop con vistas a los tejados de Madrid", caption: "Cámara lista en la terraza" },
      { src: "/optimized/terraza-img_8051.webp", alt: "Vistas al skyline de Madrid desde la terraza del estudio", caption: "Vistas al skyline" },
      { src: "/optimized/terraza-img_8052.webp", alt: "Panorámica de los tejados de Madrid desde el rooftop", caption: "Tejados de Madrid" },
      { src: "/optimized/terraza-img_8054.webp", alt: "Terraza del estudio con vistas a los edificios de Madrid centro", caption: "Terraza con vistas" },
      { src: "/optimized/terraza-img_8055.webp", alt: "Vista aérea de los edificios del barrio de Atocha desde la terraza", caption: "Barrio de Atocha" },
      { src: "/optimized/terraza-img_8061.webp", alt: "Atardecer sobre los tejados de Madrid desde la terraza rooftop", caption: "Atardecer en el rooftop" },
    ],
    connections: ["salon"],
  },
  {
    id: "salon",
    name: "Salón / Set",
    subtitle: "Escenario principal de grabación",
    photos: [],
    connections: ["terraza", "podcast", "foto"],
    comingSoon: true,
  },
  {
    id: "foto",
    name: "Sala Polivalente",
    subtitle: "Espacio flexible · Foto, vídeo y más",
    photos: [
      { src: "/IMG_7346.webp", alt: "Vista amplia del set con iluminación ambiente", caption: "Vista completa del set" },
      { src: "/IMG_7352.webp", alt: "Detalle de invitada hablando al micrófono", caption: "Micrófono y detalle" },
      { src: "/IMG_7368.webp", alt: "Dos presentadores mirándose en el set", caption: "Conexión entre presentadores" },
      { src: "/1_1.webp", alt: "Entrevista en set de podcast con iluminación cálida", caption: "Entrevista con iluminación cálida" },
      { src: "/3_1 (1).webp", alt: "Invitada en el set de podcast con micrófono profesional", caption: "Invitada en el set" },
      { src: "/4_1.webp", alt: "Sesión de podcast con iluminación ambiente púrpura", caption: "Set con iluminación púrpura" },
      { src: "/optimized/tour-podcast-1.webp", alt: "Invitado grabando podcast con micrófono profesional", caption: "Grabación de podcast" },
      { src: "/optimized/tour-podcast-2.webp", alt: "Setup de grabación con teleprompter y cámara", caption: "Setup con teleprompter" },
      { src: "/optimized/tour-podcast-3.webp", alt: "Entrevista entre dos personas en la sala de podcast", caption: "Entrevista en la sala" },
      { src: "/optimized/tour-podcast-4.webp", alt: "Invitado en la sala de podcast con iluminación cálida", caption: "Invitado en el set" },
      { src: "/optimized/sala-polivalente-7774.webp", alt: "Entrevista de podcast con dos personas y micrófonos profesionales", caption: "Entrevista en el set" },
      { src: "/optimized/sala-polivalente-7761.webp", alt: "Sesión de grabación en la sala polivalente con iluminación cálida", caption: "Sesión en sala polivalente" },
    ],
    connections: ["salon", "podcast"],
  },
  {
    id: "podcast",
    name: "Sala de Podcast",
    subtitle: "Espacio íntimo para conversaciones",
    photos: [],
    connections: ["salon", "foto"],
    comingSoon: true,
  },
];

/* ─── Spatial positions for directional transitions ─── */
const ZONE_POS: Record<string, { x: number; y: number }> = {
  terraza: { x: 440, y: 47 },
  salon:   { x: 440, y: 170 },
  foto:    { x: 135, y: 90 },
  podcast: { x: 265, y: 90 },
};

/* ─── Route waypoints through hallway ─── */
const HALLWAY_Y = 225;
const ZONE_HALLWAY_ENTRY: Record<string, { x: number; y: number }> = {
  terraza: { x: 440, y: 90 },  // enters via salon
  salon:   { x: 420, y: 225 },
  foto:    { x: 110, y: 200 },
  podcast: { x: 260, y: 200 },
};

function buildRoutePath(from: string, to: string): string {
  // Direct connections that don't need hallway
  if ((from === "salon" && to === "terraza") || (from === "terraza" && to === "salon")) {
    const p1 = ZONE_POS[from];
    const p2 = ZONE_POS[to];
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  }
  if ((from === "foto" && to === "podcast") || (from === "podcast" && to === "foto")) {
    const p1 = ZONE_POS[from];
    const p2 = ZONE_POS[to];
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  }
  // Route through hallway
  const entry1 = ZONE_HALLWAY_ENTRY[from];
  const entry2 = ZONE_HALLWAY_ENTRY[to];
  const p1 = ZONE_POS[from];
  const p2 = ZONE_POS[to];
  return `M${p1.x},${p1.y} L${entry1.x},${entry1.y} L${entry1.x},${HALLWAY_Y} L${entry2.x},${HALLWAY_Y} L${entry2.x},${entry2.y} L${p2.x},${p2.y}`;
}

/* ─── SVG Floor Plan ─── */
function FloorPlan({
  activeZone,
  prevZone,
  routeKey,
  onZoneClick,
}: {
  activeZone: string;
  prevZone: string;
  routeKey: number;
  onZoneClick: (id: string) => void;
}) {
  const zoneStyle = (id: string) => ({
    fill: activeZone === id ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.03)",
    stroke: activeZone === id ? "#FFFFFF" : "rgba(255,255,255,0.12)",
    strokeWidth: activeZone === id ? 1.5 : 0.75,
    cursor: "pointer" as const,
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  const labelStyle = (id: string): React.CSSProperties => ({
    fill: activeZone === id ? "#FFFFFF" : "rgba(255,255,255,0.4)",
    fontSize: 8,
    fontFamily: "'DM Mono', monospace",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    pointerEvents: "none",
    transition: "fill 0.5s ease",
  });

  const subtitleStyle = (id: string): React.CSSProperties => ({
    fill: activeZone === id ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
    fontSize: 5.5,
    fontFamily: "'DM Sans', sans-serif",
    pointerEvents: "none",
    transition: "fill 0.5s ease",
  });

  const dotCx: Record<string, number> = { terraza: 435, salon: 435, foto: 140, podcast: 260 };
  const dotCy: Record<string, number> = { terraza: 50, salon: 175, foto: 95, podcast: 95 };

  const routePath = prevZone !== activeZone ? buildRoutePath(prevZone, activeZone) : "";
  // Estimate path length for animation
  const pathLen = prevZone !== activeZone ? 600 : 0;

  return (
    <svg viewBox="0 0 560 320" className="w-full h-auto" style={{ maxHeight: "100%" }}>
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="routeGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="560" height="320" fill="url(#grid)" />

      {/* ── Hallway ── */}
      <rect x="40" y="200" width="380" height="50" rx="1"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <text x="200" y="230" style={{ fill: "rgba(255,255,255,0.15)", fontSize: 6, fontFamily: "'DM Mono', monospace", letterSpacing: "0.3em", textTransform: "uppercase" } as React.CSSProperties}>
        Pasillo
      </text>

      {/* ── Entry marker ── */}
      <line x1="40" y1="215" x2="20" y2="215" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 2" />
      <polygon points="18,211 10,215 18,219" fill="rgba(255,255,255,0.25)" />
      <text x="8" y="228" style={{ fill: "rgba(255,255,255,0.3)", fontSize: 5, fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase" } as React.CSSProperties}>
        Entrada
      </text>

      {/* ── Kitchen ── */}
      <rect x="70" y="140" width="80" height="60" rx="1"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="88" y="175" style={{ fill: "rgba(255,255,255,0.15)", fontSize: 6, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" } as React.CSSProperties}>
        Cocina
      </text>

      {/* ── Sala de Fotografía ── */}
      <rect x="70" y="40" width="130" height="100" rx="1"
        style={zoneStyle("foto")}
        onClick={() => onZoneClick("foto")}
        data-cursor-hover="true" data-cursor-text="Ver"
      />
      <text x="82" y="82" style={labelStyle("foto")}>Polivalente</text>
      <text x="87" y="95" style={subtitleStyle("foto")}>Próximamente</text>
      <line x1="110" y1="140" x2="110" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* ── Sala de Podcast (próximamente) ── */}
      <rect x="210" y="40" width="110" height="100" rx="1"
        fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 2"
      />
      <text x="225" y="90" style={{ fill: "rgba(255,255,255,0.12)", fontSize: 6, fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase", pointerEvents: "none" } as React.CSSProperties}>Próximamente</text>

      {/* ── Salón / Set (próximamente) ── */}
      <rect x="350" y="90" width="180" height="160" rx="1"
        fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 2"
      />
      <line x1="350" y1="210" x2="350" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1" style={{ transition: "stroke 0.4s ease" }} />
      <text x="393" y="170" style={{ fill: "rgba(255,255,255,0.12)", fontSize: 6, fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase", pointerEvents: "none" } as React.CSSProperties}>Próximamente</text>

      {/* ── Terraza ── */}
      <rect x="350" y="10" width="180" height="75" rx="1"
        style={zoneStyle("terraza")}
        onClick={() => onZoneClick("terraza")}
        data-cursor-hover="true" data-cursor-text="Ver"
      />
      <line x1="400" y1="85" x2="480" y2="85" stroke={activeZone === "terraza" ? "#FFFFFF" : "rgba(255,255,255,0.15)"} strokeWidth="2" strokeDasharray="6 3" style={{ transition: "stroke 0.4s ease" }} />
      <text x="402" y="48" style={labelStyle("terraza")}>Terraza</text>
      <text x="389" y="61" style={subtitleStyle("terraza")}>Rooftop · Skyline</text>

      {/* ── Cambiador + Descanso ── */}
      <rect x="330" y="100" width="20" height="50" rx="1"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 2" />
      <rect x="330" y="150" width="20" height="50" rx="1"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="290" y="128" style={{ fill: "rgba(255,255,255,0.1)", fontSize: 4.5, fontFamily: "'DM Mono', monospace" } as React.CSSProperties}>Cambiador</text>
      <text x="290" y="178" style={{ fill: "rgba(255,255,255,0.1)", fontSize: 4.5, fontFamily: "'DM Mono', monospace" } as React.CSSProperties}>Descanso</text>

      {/* ── Animated route path ── */}
      {routePath && (
        <path
          key={`route-${routeKey}`}
          d={routePath}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#routeGlow)"
          strokeDasharray={pathLen}
          strokeDashoffset={pathLen}
          opacity="0.7"
        >
          <animate attributeName="stroke-dashoffset" from={pathLen} to="0" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
          <animate attributeName="opacity" values="0.7;0.7;0" dur="2s" fill="freeze" keyTimes="0;0.6;1" />
        </path>
      )}

      {/* ── Active zone pulsing dot ── */}
      <circle cx={dotCx[activeZone]} cy={dotCy[activeZone]} r="3" fill="#FFFFFF" filter="url(#glow)">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* ── Scale indicator ── */}
      <line x1="440" y1="290" x2="530" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <line x1="440" y1="287" x2="440" y2="293" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <line x1="530" y1="287" x2="530" y2="293" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <text x="470" y="302" style={{ fill: "rgba(255,255,255,0.12)", fontSize: 5, fontFamily: "'DM Mono', monospace" } as React.CSSProperties}>~5m</text>

      {/* ── North arrow ── */}
      <g transform="translate(30, 50)">
        <line x1="0" y1="15" x2="0" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
        <polygon points="-3,5 0,0 3,5" fill="rgba(255,255,255,0.2)" />
        <text x="-2" y="22" style={{ fill: "rgba(255,255,255,0.15)", fontSize: 5, fontFamily: "'DM Mono', monospace" } as React.CSSProperties}>N</text>
      </g>
    </svg>
  );
}

/* ─── Photo Viewer with 3D tilt + letterbox + directional transitions ─── */
function PhotoViewer({
  zone,
  photoIndex,
  slideDirection,
  zoneChangeKey,
  onPrev,
  onNext,
  onGoTo,
}: {
  zone: Zone;
  photoIndex: number;
  slideDirection: { x: number; y: number };
  zoneChangeKey: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}) {
  const photo = zone.photos[photoIndex] ?? null;
  const total = zone.photos.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isDesktop = useRef(false);

  // Zone info overlay
  const [showZoneInfo, setShowZoneInfo] = useState(false);
  const prevZoneChangeKey = useRef(zoneChangeKey);

  useEffect(() => {
    if (zoneChangeKey !== prevZoneChangeKey.current) {
      prevZoneChangeKey.current = zoneChangeKey;
      setShowZoneInfo(true);
      const t = setTimeout(() => setShowZoneInfo(false), 2000);
      return () => clearTimeout(t);
    }
  }, [zoneChangeKey]);

  useEffect(() => {
    isDesktop.current = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDesktop.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current = { x, y };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
      }
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    tiltRef.current = { x: 0, y: 0 };
    containerRef.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Compute directional slide offset for zone change
  const dirX = slideDirection.x;
  const dirY = slideDirection.y;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ borderRadius: 2 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* 3D tilt wrapper */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden"
        style={{
          backgroundColor: "#0a0a0a",
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Cinematic letterbox bars — thinner on mobile */}
        <div className="absolute inset-x-0 top-0 z-[5] pointer-events-none h-[3%] sm:h-[5%] lg:h-[6%]" style={{ background: "linear-gradient(180deg, #000 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-[5] pointer-events-none h-[3%] sm:h-[5%] lg:h-[6%]" style={{ background: "linear-gradient(0deg, #000 0%, transparent 100%)" }} />

        {/* Photos with directional zone transition */}
        <div
          key={`zone-${zone.id}-${zoneChangeKey}`}
          className="absolute inset-0"
          style={{
            animation: zoneChangeKey > 0 ? "vtZoneEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
            // CSS custom properties for direction
            ["--vt-dir-x" as string]: `${dirX * 15}%`,
            ["--vt-dir-y" as string]: `${dirY * 15}%`,
          }}
        >
          {zone.photos.map((p, i) => (
            <div
              key={p.src}
              className="absolute inset-0"
              style={{
                opacity: i === photoIndex ? 1 : 0,
                transition: "opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
                zIndex: i === photoIndex ? 1 : 0,
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                style={{
                  transform: i === photoIndex ? "scale(1.06)" : "scale(1)",
                  transition: "transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                priority={i === 0}
              />
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background: "linear-gradient(180deg, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 30%, rgba(8,8,8,0.65) 100%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Zone info overlay — typewriter */}
        <div
          className="absolute inset-0 z-[6] flex items-center justify-center pointer-events-none"
          style={{
            opacity: showZoneInfo ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div className="text-center">
            <p
              className="font-heading text-[clamp(1.5rem,4vw,3rem)] uppercase leading-none"
              style={{
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                animation: showZoneInfo ? "vtTypeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
              }}
            >
              {zone.name}
            </p>
            <p
              className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] sm:text-[11px]"
              style={{
                color: "rgba(255,255,255,0.8)",
                textShadow: "0 1px 10px rgba(0,0,0,0.8)",
                animation: showZoneInfo ? "vtTypeIn 0.5s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both" : "none",
              }}
            >
              {zone.subtitle}
            </p>
          </div>
        </div>

        {/* Coming soon overlay */}
        {zone.comingSoon && (
          <div className="absolute inset-0 z-[7] flex items-center justify-center" style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(8px)" }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Próximamente
            </p>
          </div>
        )}

        {/* Caption — bottom left (above dots) */}
        <div className="absolute bottom-10 left-4 z-[4] sm:bottom-14 sm:left-6 lg:bottom-16 lg:left-7">
          <p
            className="font-mono text-[9px] uppercase sm:text-[10px] lg:text-[11px]"
            style={{ letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)" }}
          >
            {zone.name}
          </p>
          <p
            className="mt-0.5 font-sans text-[11px] font-medium sm:text-[13px] lg:text-[14px]"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {photo?.caption}
          </p>
        </div>

        {/* Counter — bottom right (above dots) */}
        <div
          className="absolute bottom-10 right-4 z-[4] font-mono sm:bottom-14 sm:right-6 lg:bottom-16 lg:right-7"
          style={{ letterSpacing: "0.2em" }}
        >
          <span className="text-[11px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.9)" }}>
            {String(photoIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {" / "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation arrows — visible on mobile */}
        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 z-[4] flex -translate-y-1/2 items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100 active:opacity-100"
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(8,8,8,0.6)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)", fontSize: 14,
              }}
            >
              &#8249;
            </button>
            <button
              onClick={onNext}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 z-[4] flex -translate-y-1/2 items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100 active:opacity-100"
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(8,8,8,0.6)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)", fontSize: 14,
              }}
            >
              &#8250;
            </button>
          </>
        )}

        {/* Photo dots — at bottom */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 z-[4] flex -translate-x-1/2 gap-0.5 sm:bottom-5 sm:gap-1 lg:bottom-7">
            {zone.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className="flex items-center justify-center"
                style={{ minWidth: 32, minHeight: 32 }}
                aria-label={`Ir a foto ${i + 1}`}
              >
                <span
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === photoIndex ? 14 : 4,
                    height: 4,
                    backgroundColor: i === photoIndex ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Film grain overlay */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.04,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function VirtualTour() {
  const [activeZoneId, setActiveZoneId] = useState("foto");
  const [prevZoneId, setPrevZoneId] = useState("foto");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [routeKey, setRouteKey] = useState(0);
  const [zoneChangeKey, setZoneChangeKey] = useState(0);
  const [slideDirection, setSlideDirection] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const touchStartRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoStarted = useRef(false);

  const activeZone = ZONES.find((z) => z.id === activeZoneId)!;

  const selectZone = useCallback((id: string) => {
    if (id === activeZoneId) return;
    // Calculate spatial direction
    const from = ZONE_POS[activeZoneId];
    const to = ZONE_POS[id];
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;

    // Batch all state updates in a single render via React 18 auto-batching
    // Use requestAnimationFrame to defer heavy work off the interaction
    clearInterval(autoPlayRef.current);
    requestAnimationFrame(() => {
      setSlideDirection({ x: dx / len, y: dy / len });
      setPrevZoneId(activeZoneId);
      setActiveZoneId(id);
      setPhotoIndex(0);
      setRouteKey((k) => k + 1);
      setZoneChangeKey((k) => k + 1);
      setIsAutoPlaying(false);
    });
  }, [activeZoneId]);

  const goPrev = useCallback(() => {
    setPhotoIndex((prev) => (prev - 1 + activeZone.photos.length) % activeZone.photos.length);
  }, [activeZone.photos.length]);

  const goNext = useCallback(() => {
    setPhotoIndex((prev) => (prev + 1) % activeZone.photos.length);
  }, [activeZone.photos.length]);

  const startAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
    let zoneIdx = ZONES.findIndex((z) => z.id === activeZoneId);
    let pIdx = photoIndex;

    const playableZones = ZONES.filter((z) => !z.comingSoon);
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      const pZoneIdx = playableZones.findIndex((z) => z.id === ZONES[zoneIdx].id);
      const zone = ZONES[zoneIdx];
      if (!zone.comingSoon && pIdx < zone.photos.length - 1) {
        pIdx++;
        setPhotoIndex(pIdx);
      } else {
        const prevIdx = zoneIdx;
        const nextPlayable = playableZones[(pZoneIdx + 1) % playableZones.length];
        zoneIdx = ZONES.findIndex((z) => z.id === nextPlayable.id);
        pIdx = 0;
        const from = ZONE_POS[ZONES[prevIdx].id];
        const to = ZONE_POS[ZONES[zoneIdx].id];
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        // Defer heavy state updates off the interval tick
        requestAnimationFrame(() => {
          setSlideDirection({ x: dx / len, y: dy / len });
          setPrevZoneId(ZONES[prevIdx].id);
          setActiveZoneId(ZONES[zoneIdx].id);
          setPhotoIndex(0);
          setRouteKey((k) => k + 1);
          setZoneChangeKey((k) => k + 1);
        });
      }
    }, 3000);
  }, [activeZoneId, photoIndex]);

  const stopAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    return () => clearInterval(autoPlayRef.current);
  }, []);

  // Auto-start tour when section becomes visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoStarted.current) {
          hasAutoStarted.current = true;
          startAutoPlay();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAutoPlay]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartRef.current - e.changedTouches[0].clientX;
      const threshold = Math.min(50, window.innerWidth * 0.12);
      if (Math.abs(delta) > threshold) {
        // Defer navigation off the touch event to reduce INP
        requestAnimationFrame(() => {
          if (delta > 0) goNext();
          else goPrev();
        });
      }
    },
    [goNext, goPrev],
  );

  // Only listen for keyboard when section is visible
  const isVisibleRef = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isVisibleRef.current) return;
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  return (
    <section
      ref={sectionRef}
      id="tour-virtual"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            04 · TOUR VIRTUAL
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Recorre el Estudio
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p className="mt-4 max-w-xl text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
            Explora cada rincón del ático. Haz clic en las zonas del plano para
            ver cómo es el espacio donde grabarás.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <button
            onClick={isAutoPlaying ? stopAutoPlay : startAutoPlay}
            className="mt-6 flex min-h-[44px] items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300"
            style={{ color: isAutoPlaying ? "#FFFFFF" : "rgba(255,255,255,0.4)" }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300"
              style={{
                borderColor: isAutoPlaying ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                boxShadow: isAutoPlaying ? "0 0 12px rgba(255,255,255,0.3)" : "none",
              }}
            >
              {isAutoPlaying ? (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <rect x="1" y="1" width="2" height="6" />
                  <rect x="5" y="1" width="2" height="6" />
                </svg>
              ) : (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <polygon points="2,1 7,4 2,7" />
                </svg>
              )}
            </span>
            {isAutoPlaying ? "Pausar tour" : "Tour automático"}
          </button>
        </ScrollReveal>

        {/* Main layout */}
        <ScrollReveal delay={0.22}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4 lg:mt-14 lg:flex-row lg:gap-6 lg:min-h-[min(70vh,600px)]">
            {/* Left panel */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:w-[38%] lg:gap-4">
              <div
                className="relative hidden rounded-sm border p-2.5 sm:p-4 md:block"
                style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <p
                  className="mb-2 font-mono text-[8px] uppercase tracking-[0.35em]"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Plano del ático · Planta 7
                </p>
                <FloorPlan activeZone={activeZoneId} prevZone={prevZoneId} routeKey={routeKey} onZoneClick={selectZone} />
              </div>

              {/* Zone chips — horizontal scroll on mobile with fade mask */}
              <div className="relative">
              <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1 scrollbar-none lg:grid lg:grid-cols-2 lg:snap-none lg:overflow-visible lg:pb-0" style={{ WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}>
                {ZONES.filter((z) => !z.comingSoon).map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => selectZone(zone.id)}
                    className="group relative flex-shrink-0 snap-start overflow-hidden rounded-sm px-3 py-2.5 text-left transition-all duration-300 lg:px-4 lg:py-3"
                    style={{
                      backgroundColor: zone.comingSoon
                        ? "rgba(255,255,255,0.01)"
                        : activeZoneId === zone.id ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${zone.comingSoon
                        ? "rgba(255,255,255,0.04)"
                        : activeZoneId === zone.id ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                      boxShadow: !zone.comingSoon && activeZoneId === zone.id ? "0 0 20px rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    {zone.comingSoon ? (
                      <>
                        <p
                          className="font-mono text-[9px] uppercase tracking-[0.2em]"
                          style={{ color: "rgba(255,255,255,0.15)", filter: "blur(4px)", userSelect: "none" }}
                        >
                          {zone.name}
                        </p>
                        <p
                          className="absolute inset-0 flex items-center justify-center font-mono text-[8px] uppercase tracking-[0.3em]"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          Próximamente
                        </p>
                      </>
                    ) : (
                      <>
                        <p
                          className="font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-300"
                          style={{ color: activeZoneId === zone.id ? "#FFFFFF" : "rgba(255,255,255,0.5)" }}
                        >
                          {zone.name}
                        </p>
                        <p
                          className="mt-0.5 hidden text-[11px] lg:block"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          {zone.photos.length} foto{zone.photos.length !== 1 ? "s" : ""}
                        </p>
                      </>
                    )}
                  </button>
                ))}
              </div>
              {/* Fade mask for scroll hint — mobile only */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 lg:hidden" style={{ background: "linear-gradient(90deg, transparent, #080808)" }} />
              </div>

              {/* Zone connections — desktop */}
              <div className="hidden lg:block">
                <p
                  className="mb-2 font-mono text-[8px] uppercase tracking-[0.3em]"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Zonas conectadas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeZone.connections.map((connId) => {
                    const conn = ZONES.find((z) => z.id === connId)!;
                    return (
                      <button
                        key={connId}
                        onClick={() => selectZone(connId)}
                        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] transition-all duration-300 hover:border-accent/40 hover:text-accent"
                        style={{
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        <span style={{ fontSize: 10 }}>→</span>
                        {conn.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right panel — Photo viewer */}
            <div
              className="flex-1 overflow-hidden rounded-sm"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <PhotoViewer
                zone={activeZone}
                photoIndex={photoIndex}
                slideDirection={slideDirection}
                zoneChangeKey={zoneChangeKey}
                onPrev={goPrev}
                onNext={goNext}
                onGoTo={setPhotoIndex}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile zone connections */}
        <div className="mt-3 flex flex-wrap gap-1.5 lg:hidden">
          <p
            className="w-full font-mono text-[8px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Ir a
          </p>
          {activeZone.connections.map((connId) => {
            const conn = ZONES.find((z) => z.id === connId)!;
            return (
              <button
                key={connId}
                onClick={() => selectZone(connId)}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <span style={{ fontSize: 10 }}>→</span>
                {conn.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <ScrollReveal delay={0.2}>
        <div className="mx-auto mt-12 max-w-7xl text-center sm:mt-16">
          <a
            href="#contacto"
            className="inline-block bg-accent px-10 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light"
          >
            Pide tu Presupuesto →
          </a>
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes vtZoneEnter {
          from {
            opacity: 0;
            transform: translate(var(--vt-dir-x), var(--vt-dir-y)) scale(1.08);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }
        @keyframes vtTypeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
