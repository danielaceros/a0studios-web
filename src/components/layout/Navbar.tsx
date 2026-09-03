"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed z-50 w-full transition-all duration-500"
      style={{
        top: "var(--promo-banner-h, 0px)",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.55)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      {/* Accent line at top */}
      <div
        className="h-px w-full bg-accent transition-opacity duration-500"
        style={{ opacity: scrolled ? 0.4 : 0 }}
      />

      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8 sm:py-3 lg:px-12"
        aria-label="Navegación principal"
      >
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image
            src="/optimized/logo.webp"
            alt="A0 Studios"
            width={128}
            height={128}
            className="h-11 w-11 object-cover object-top sm:h-14 sm:w-14 lg:h-20 lg:w-20"
            priority
            fetchPriority="high"
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted/50">
            by @daniaceros
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            href="/#contacto"
            className="border border-accent/40 px-6 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
          >
            Pedir Presupuesto
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
