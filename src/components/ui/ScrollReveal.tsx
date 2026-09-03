"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Shared IntersectionObserver for all ScrollReveal instances
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            sharedObserver?.unobserve(entry.target);
          }
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );
  return sharedObserver;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 30,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const conn = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
    const isSlow = conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";
    if (prefersReduced || isSlow) {
      setVisible(true);
      return;
    }

    const observer = getObserver();
    callbacks.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className ?? ""}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: visible
          ? `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
