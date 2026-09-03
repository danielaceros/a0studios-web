"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Estudio", href: "#estudio" },
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
          className="mx-auto mt-3 flex max-w-[1440px] items-center justify-between gap-3 px-3 sm:mt-4 sm:px-5 lg:px-7"
          aria-label="Navegación principal"
        >
          {/* Marca */}
          <Link
            href="/"
            className="glass flex shrink-0 items-center rounded-full py-2 pl-4 pr-4 sm:py-2.5 sm:pr-5"
          >
            <Image
              src="/optimized/logo.webp"
              alt="A0 Studios"
              width={1257}
              height={252}
              className="h-4 w-auto object-contain sm:h-[18px]"
              priority
              fetchPriority="high"
            />
          </Link>

          {/* Enlaces — escritorio */}
          <div className="glass hidden items-center gap-7 rounded-full px-7 py-3 md:flex lg:gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="meta text-foreground/60 transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="btn btn-solid btn-sm hidden md:inline-flex"
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
        style={{ background: "rgba(11,10,9,0.94)", backdropFilter: "blur(24px)" }}
      >
        <nav className="flex flex-col gap-1" aria-label="Menú móvil">
          <div className="rule" />
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-heading text-[1.7rem] leading-none tracking-[-0.03em] text-foreground"
            >
              <span className="index mr-5 align-middle text-foreground/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="btn btn-solid mt-10 justify-center"
        >
          Pedir presupuesto
        </a>
      </div>
    </>
  );
}
