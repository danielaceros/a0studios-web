"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface NeonFlowProps {
  children?: ReactNode;
  className?: string;
}

const CDN =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const PALETTES = [
  ["#f59e0b", "#d97706", "#92400e"],
  ["#fbbf24", "#f59e0b", "#b45309"],
  ["#d97706", "#92400e", "#78350f"],
];
let paletteIndex = 0;
const nextPalette = () => PALETTES[paletteIndex++ % PALETTES.length];

export default function NeonFlow({ children, className = "" }: NeonFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import TubesCursor from "${CDN}";
      window.__TubesCursor = TubesCursor;
      window.dispatchEvent(new CustomEvent("__tubesLoaded"));
    `;

    const canvas = canvasRef.current;

    const onLoaded = () => {
      const TubesCursor = (window as any).__TubesCursor;
      if (!TubesCursor || !canvas) return;

      try {
        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#f59e0b", "#d97706", "#92400e"],
            lights: {
              intensity: 200,
              colors: ["#f59e0b", "#fbbf24", "#ff008a", "#d97706"],
            },
          },
        });
        tubesRef.current = app;
      } catch (e) {
        console.error("TubesCursor init failed:", e);
      }
    };

    if ((window as any).__TubesCursor) {
      onLoaded();
    } else {
      window.addEventListener("__tubesLoaded", onLoaded, { once: true });
      document.head.appendChild(script);
    }

    // Fallback if CDN fails to load after 3s
    const fallbackTimer = setTimeout(() => {
      if (!tubesRef.current && containerRef.current) {
        containerRef.current.style.background =
          "radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.08) 0%, transparent 70%)";
      }
    }, 3000);

    return () => {
      window.removeEventListener("__tubesLoaded", onLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleClick = () => {
    if (!tubesRef.current) return;
    const palette = nextPalette();
    tubesRef.current.tubes.setColors(palette);
    tubesRef.current.tubes.setLightsColors([...palette, "#fbbf24"]);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ touchAction: "none" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Top fade — smooth transition from the section above */}
      <div className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background via-background/80 to-transparent sm:h-56 lg:h-72" />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
