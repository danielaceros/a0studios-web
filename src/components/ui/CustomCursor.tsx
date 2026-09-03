"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const hoverLabel = useRef("");
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    setIsDesktop(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    document.documentElement.style.cursor = "none";

    let hovering = false;
    let clicking = false;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onDown = () => {
      clicking = true;
      // Click flash
      if (ringRef.current) {
        ringRef.current.style.transition = "none";
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.transition = "width 0.2s, height 0.2s, background-color 0.3s";
            ringRef.current.style.width = hovering ? "56px" : "32px";
            ringRef.current.style.height = hovering ? "56px" : "32px";
          }
        }, 50);
      }
    };
    const onUp = () => { clicking = false; };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href], button, [role='button'], [data-cursor-hover]") as HTMLElement | null;
      if (anchor) {
        hovering = true;
        // Determine label
        const cursorText = anchor.getAttribute("data-cursor-text");
        if (cursorText) {
          hoverLabel.current = cursorText;
        } else if (anchor.closest("[data-cursor-text]")) {
          hoverLabel.current = anchor.closest("[data-cursor-text]")!.getAttribute("data-cursor-text") || "";
        } else {
          hoverLabel.current = "";
        }
        if (ringRef.current) {
          ringRef.current.style.width = "56px";
          ringRef.current.style.height = "56px";
          ringRef.current.style.backgroundColor = "rgba(255,255,255,0.08)";
        }
        if (labelRef.current) {
          labelRef.current.textContent = hoverLabel.current;
          labelRef.current.style.opacity = hoverLabel.current ? "1" : "0";
        }
      } else {
        hovering = false;
        hoverLabel.current = "";
        if (ringRef.current) {
          ringRef.current.style.width = "32px";
          ringRef.current.style.height = "32px";
          ringRef.current.style.backgroundColor = "transparent";
        }
        if (labelRef.current) {
          labelRef.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    let raf: number;
    const lerp = 0.07;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 2.5}px, ${mouse.current.y - 2.5}px)`;
      }
      if (ringRef.current) {
        const w = parseFloat(ringRef.current.style.width) || 32;
        const half = w / 2;
        ringRef.current.style.transform = `translate(${ring.current.x - half}px, ${ring.current.y - half}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop, visible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full"
        style={{
          width: 5,
          height: 5,
          backgroundColor: "#FFFFFF",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] flex items-center justify-center rounded-full"
        style={{
          width: 32,
          height: 32,
          border: "1px solid rgba(255, 255, 255, 0.4)",
          backgroundColor: "transparent",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, opacity 0.2s, background-color 0.3s",
          willChange: "transform",
        }}
      >
        <span
          ref={labelRef}
          className="font-mono text-[8px] uppercase tracking-[0.15em] text-accent"
          style={{ opacity: 0, transition: "opacity 0.2s" }}
        />
      </div>
    </>
  );
}
