"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_MOBILE = "/optimized/hero-mobile.mp4";
const VIDEO_DESKTOP = "/optimized/hero-desktop.mp4";

type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

export default function VideoBackground() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NavigatorConnection })
      .connection;
    const isSlow =
      conn?.saveData ||
      ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
    const update = () => {
      if (!isSlow) {
        setVideoSrc(window.innerWidth < 768 ? VIDEO_MOBILE : VIDEO_DESKTOP);
      }
    };
    update();
    window.addEventListener("orientationchange", update);
    return () => window.removeEventListener("orientationchange", update);
  }, []);

  // Parallax multicapa — desktop only
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        video.style.transform = `translateY(${scrollY * 0.5}px)`;
        if (overlay) {
          const opacity = Math.min(0.5, 0.15 + scrollY / 1200);
          overlay.style.opacity = String(opacity);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Poster fallback */}
      <img
        src="/optimized/hero-poster-v2.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover hero-video-pos md:h-[130%] md:object-center"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/optimized/hero-poster-v2.webp"
        onCanPlay={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover hero-video-pos transition-opacity duration-1000 will-change-transform md:h-[130%] md:object-center"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
        <track kind="captions" />
      </video>
      {/* Dynamic overlay for parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background"
        style={{ opacity: 0.15 }}
      />
      {/* Gradient: extended smooth fade on mobile, softer on desktop */}
      <div className="absolute inset-0 hidden bg-gradient-to-b from-black/10 via-black/20 to-black/80 md:block" />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      {/* Side gradient for desktop readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
    </div>
  );
}
