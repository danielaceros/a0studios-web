"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full transition-all duration-500" style={{ top: "var(--promo-banner-h, 0px)" }}>
      <nav
        className="mx-auto mt-3 flex max-w-[1600px] items-center justify-between px-4 sm:mt-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo mark — glass badge, always visible */}
        <Link
          href="/"
          className="glass flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 sm:gap-3 sm:py-2 sm:pl-2 sm:pr-5"
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
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/50 sm:text-[10px]">
            by @daniaceros
          </span>
        </Link>

        {/* Center links — desktop only, own glass pill */}
        <div
          className={`glass hidden items-center gap-7 rounded-full px-7 py-2.5 transition-opacity duration-500 md:flex lg:gap-9 ${
            scrolled ? "opacity-100" : "opacity-90"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-foreground/65 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — desktop */}
        <Link
          href="/#contacto"
          className="glass glass-hover hidden rounded-full px-6 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-foreground md:inline-block"
        >
          Pedir Presupuesto
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
