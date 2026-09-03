"use client";

import { useEffect, useState } from "react";

export default function FlashOffer() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("rcs_flash_dismissed")) {
      setDismissed(true);
    }
    setMounted(true);
  }, []);

  if (!mounted || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("rcs_flash_dismissed", "1");
  };

  return (
    <div className="relative z-[61] flex w-full items-center justify-center gap-3 bg-accent px-4 py-2 sm:gap-4 sm:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-background sm:text-[11px]">
          Primera sesión: dirección creativa incluida sin coste · Presupuesto personalizado
        </span>

        <a
          href="#contacto"
          className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-background underline underline-offset-2 transition-opacity hover:opacity-80 sm:text-[11px]"
        >
          Reservar primera sesión
        </a>
      </div>

      {/* Dismiss */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-background/60 transition-colors hover:text-background sm:right-4"
        aria-label="Cerrar oferta"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l8 8M9 1l-8 8" />
        </svg>
      </button>
    </div>
  );
}
