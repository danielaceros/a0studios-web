"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open (iOS-safe)
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[10000] flex h-11 w-11 items-center justify-center"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed left-0 top-0 z-[9999] flex h-[100dvh] w-full flex-col items-center justify-center overflow-y-auto bg-[#080808] px-6 pb-12 pt-24"
        >
          <nav className="flex flex-col items-center gap-6 text-center">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-[clamp(2.2rem,8vw,3.5rem)] uppercase tracking-[0.06em] text-foreground transition-colors hover:text-accent"
                style={{
                  opacity: 0,
                  animation: `menu-fade-in 0.4s ease-out ${i * 0.08}s forwards`,
                }}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 border border-accent/40 px-8 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent hover:text-background"
              style={{
                opacity: 0,
                animation: `menu-fade-in 0.4s ease-out ${NAV_LINKS.length * 0.08}s forwards`,
              }}
            >
              Pedir Presupuesto
            </Link>
          </nav>

          <style>{`
            @keyframes menu-fade-in {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
