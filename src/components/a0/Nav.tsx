"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Estudio", href: "#estudio" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Espacio", href: "#espacio" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body con el menú móvil abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed left-0 right-0 z-50"
        style={{ top: "var(--promo-banner-h, 0px)" }}
      >
        <nav
          className="mx-auto mt-3 flex max-w-[1500px] items-center justify-between gap-3 px-3 sm:mt-4 sm:px-5 lg:px-7"
          aria-label="Navegación principal"
        >
          {/* Marca */}
          <Link
            href="/"
            className="glass flex shrink-0 items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 sm:py-2 sm:pr-5"
          >
            <Image
              src="/optimized/logo.webp"
              alt="A0 Studios"
              width={96}
              height={96}
              className="h-6 w-6 object-contain sm:h-7 sm:w-7"
              priority
              fetchPriority="high"
            />
            <span className="label !tracking-[0.22em] text-foreground/55">A0 Studios</span>
          </Link>

          {/* Enlaces — escritorio */}
          <div className="glass hidden items-center gap-8 rounded-full px-8 py-3 md:flex lg:gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label text-foreground/60 transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden rounded-full bg-foreground px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-background transition-opacity duration-300 hover:opacity-85 md:inline-block"
            >
              Presupuesto
            </a>

            {/* Botón menú — móvil */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="glass flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className="absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300"
                  style={{ top: open ? "6px" : "2px", transform: open ? "rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300"
                  style={{ top: open ? "6px" : "10px", transform: open ? "rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-6 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(5,5,5,0.92)", backdropFilter: "blur(24px)" }}
      >
        <nav className="flex flex-col gap-1" aria-label="Menú móvil">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-heading text-[2rem] uppercase leading-none text-foreground"
            >
              <span className="label mr-4 align-middle text-foreground/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="mt-10 rounded-full bg-foreground px-8 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-background"
        >
          Pedir presupuesto
        </a>
      </div>
    </>
  );
}
