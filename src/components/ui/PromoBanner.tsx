"use client";

import { useEffect, useRef, useState } from "react";

const PROMO_END = new Date("2026-03-31T23:59:59").getTime();

function getTimeLeft() {
  const diff = PROMO_END - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [dismissed, setDismissed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Set CSS custom property so Navbar can offset itself
  useEffect(() => {
    const update = () => {
      const h = (!dismissed && timeLeft && bannerRef.current)
        ? bannerRef.current.offsetHeight
        : 0;
      document.documentElement.style.setProperty("--promo-banner-h", `${h}px`);
      document.body.style.paddingTop = `${h}px`;
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      document.documentElement.style.setProperty("--promo-banner-h", "0px");
      document.body.style.paddingTop = "";
      window.removeEventListener("resize", update);
    };
  }, [dismissed, timeLeft]);

  if (!timeLeft || dismissed) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[60] border-b border-foreground/10 bg-foreground px-4 py-3 sm:px-6"
    >
      <a
        href="#contacto"
        className="mx-auto flex max-w-4xl flex-col items-center gap-1.5 pr-8 sm:flex-row sm:justify-center sm:gap-4"
      >
        {/* Indicator + label */}
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background sm:text-[11px]">
            Oferta solo en marzo
          </span>
        </span>

        {/* Price */}
        <span className="flex items-center gap-2">
          <span className="font-heading text-base text-background sm:text-lg">
            Espacio + Filmmaker:
          </span>
          <span className="font-heading text-base text-background/50 line-through decoration-red-500/60 decoration-2 sm:text-lg">
            100€/h
          </span>
          <span className="font-heading text-base text-background sm:text-lg">
            75€/h
          </span>
        </span>

        {/* Countdown */}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/60 sm:text-[11px]">
          Quedan {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m
        </span>
      </a>

      {/* Close */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDismissed(true);
        }}
        className="absolute right-3 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full p-2.5 text-background/40 transition-colors hover:bg-background/10 hover:text-background sm:right-5"
        aria-label="Cerrar oferta"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 2l12 12M14 2L2 14" />
        </svg>
      </button>
    </div>
  );
}
