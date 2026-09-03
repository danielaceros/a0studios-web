"use client";

import { useEffect } from "react";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const start = performance.now();

  const step = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function SmoothScroll() {
  useEffect(() => {
    // Use native smooth scroll on reduced-motion or mobile
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      const navHeight = 110;
      const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight;

      if (prefersReduced) {
        window.scrollTo(0, targetY);
      } else {
        smoothScrollTo(targetY);
      }

      // Update URL without scroll jump
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
