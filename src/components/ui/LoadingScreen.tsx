"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const disposeRef = useRef<(() => void) | null>(null);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  // Skip loading screen entirely for search engine bots
  const isBot =
    typeof navigator !== "undefined" &&
    /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

  /* ── Remove pre-loader overlay once React hydrates ── */
  useEffect(() => {
    document.getElementById("pre-loader")?.remove();
  }, []);

  /* ── Ready logic (window.load + GHL) ── */
  useEffect(() => {
    const start = Date.now();
    const isMobile = window.innerWidth < 768;
    const minTime = isMobile ? 1200 : 800;

    let windowLoaded = document.readyState === "complete";
    let ghlReady =
      !isMobile || !!(window as unknown as Record<string, unknown>).__ghlReady;
    let exited = false;

    const tryExit = () => {
      if (exited || !windowLoaded || !ghlReady) return;
      exited = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minTime - elapsed);
      setTimeout(() => setPhase("exiting"), remaining);
    };

    const onLoad = () => {
      windowLoaded = true;
      tryExit();
    };
    const onGhl = () => {
      ghlReady = true;
      tryExit();
    };

    if (!windowLoaded)
      window.addEventListener("load", onLoad, { once: true });

    // Hard timeout: never block user for more than 2 seconds
    const hardTimeout = setTimeout(() => {
      windowLoaded = true;
      ghlReady = true;
      tryExit();
    }, 2000);

    if (isMobile && !ghlReady) {
      window.addEventListener("ghlReady", onGhl, { once: true });
      const fallback = setTimeout(() => {
        ghlReady = true;
        tryExit();
      }, 1500);
      return () => {
        window.removeEventListener("load", onLoad);
        window.removeEventListener("ghlReady", onGhl);
        clearTimeout(fallback);
        clearTimeout(hardTimeout);
      };
    }

    tryExit();
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(hardTimeout);
    };
  }, []);

  /* ── Progress bar animation (HTML-driven, 2s linear) ── */
  useEffect(() => {
    if (phase !== "loading") return;
    const start = performance.now();
    const duration = 800;
    let raf: number;

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${t})`;
      }
      if (counterRef.current) {
        counterRef.current.textContent = String(Math.round(t * 100)).padStart(2, "0");
      }
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  /* ── Three.js background scene ── */
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // Skip Three.js on slow connections or reduced-motion
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const isSlow = conn?.saveData || ["slow-2g", "2g"].includes(conn?.effectiveType ?? "");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isSlow || prefersReduced) return;

    let disposed = false;

    const init = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const isMobile = window.innerWidth < 768;
      const w = window.innerWidth;
      const h = window.innerHeight;

      /* Renderer */
      const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: false });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x080808, 1);
      renderer.domElement.style.display = "block";
      container.appendChild(renderer.domElement);

      /* Scene */
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x080808, 0.04);

      /* Camera */
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(0, 1.5, 7);
      camera.lookAt(0, 0.5, 0);

      /* Tracking for cleanup — use any[] to avoid THREE namespace type issues */
      const geos: { dispose(): void }[] = [];
      const mats: { dispose(): void }[] = [];

      const geo = <T extends { dispose(): void }>(g: T) => { geos.push(g); return g; };
      const mat = <T extends { dispose(): void }>(m: T) => { mats.push(m); return m; };

      /* ── Lighting ── */
      scene.add(new THREE.AmbientLight(0x111111, 0.4));

      const keyLight = new THREE.SpotLight(0xffffff, 2);
      keyLight.position.set(4, 6, 4);
      keyLight.angle = Math.PI / 5;
      keyLight.penumbra = 0.4;
      keyLight.target.position.set(0, 0, 0);
      scene.add(keyLight, keyLight.target);

      const amberLight = new THREE.SpotLight(0xffffff, 1);
      amberLight.position.set(-5, 2, 3);
      amberLight.angle = Math.PI / 4;
      amberLight.penumbra = 0.6;
      amberLight.target.position.set(0, 0, 0);
      scene.add(amberLight, amberLight.target);

      if (!isMobile) {
        const backLight = new THREE.SpotLight(0x334466, 0.5);
        backLight.position.set(0, -2, -5);
        backLight.target.position.set(0, 0, 0);
        scene.add(backLight, backLight.target);
      }

      /* ── Cinema camera model ── */
      const cameraGroup = new THREE.Group();

      /* Body */
      const bodyMat = mat(new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8, roughness: 0.2 }));
      const body = new THREE.Mesh(geo(new THREE.BoxGeometry(2.5, 1.6, 1.8)), bodyMat);
      cameraGroup.add(body);

      /* Lens barrel */
      const lensMat = mat(new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.1 }));
      const lens = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.5, 0.55, 0.8, 32)), lensMat);
      lens.rotation.z = Math.PI / 2;
      lens.position.set(1.65, 0, 0);
      cameraGroup.add(lens);

      /* Lens glass (amber reflection) */
      const glassMat = mat(new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.3,
        metalness: 0.5,
        roughness: 0.2,
      }));
      const glass = new THREE.Mesh(geo(new THREE.SphereGeometry(0.3, 16, 16)), glassMat);
      glass.position.set(1.65, 0, 0);
      cameraGroup.add(glass);

      /* Viewfinder */
      const viewfinder = new THREE.Mesh(geo(new THREE.BoxGeometry(0.6, 0.3, 0.4)), bodyMat);
      viewfinder.position.set(-0.2, 1.0, -0.1);
      cameraGroup.add(viewfinder);

      /* Film reels */
      const reelMat = mat(new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.3 }));
      const spokeMat = mat(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.3 }));
      const spokeGeo = geo(new THREE.BoxGeometry(0.03, 0.38, 0.02));

      for (const side of [-1, 1]) {
        const reel = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.45, 0.45, 0.15, 32)), reelMat);
        reel.rotation.x = Math.PI / 2;
        reel.position.set(-0.4, 1.15, side * 0.85);
        cameraGroup.add(reel);

        /* Spokes */
        for (let s = 0; s < 8; s++) {
          const spoke = new THREE.Mesh(spokeGeo, spokeMat);
          spoke.rotation.x = Math.PI / 2;
          spoke.rotation.y = (s * Math.PI) / 4;
          spoke.position.copy(reel.position);
          cameraGroup.add(spoke);
        }
      }

      /* Tripod */
      const legMat = mat(new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6, roughness: 0.3 }));
      const legGeo = geo(new THREE.CylinderGeometry(0.03, 0.05, 2.5, 8));

      const legAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
      const legTilt = 0.35; // ~20 degrees

      /* Mount block */
      const mount = new THREE.Mesh(geo(new THREE.BoxGeometry(0.3, 0.15, 0.3)), bodyMat);
      mount.position.set(0, -0.88, 0);
      cameraGroup.add(mount);

      legAngles.forEach((a) => {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(
          Math.sin(a) * 0.4,
          -0.88 - 1.15,
          Math.cos(a) * 0.4
        );
        leg.rotation.x = Math.cos(a) * legTilt;
        leg.rotation.z = -Math.sin(a) * legTilt;
        cameraGroup.add(leg);
      });

      cameraGroup.position.set(0, 0.5, 0);
      scene.add(cameraGroup);

      /* ── Dust particles (desktop) ── */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let particles: any = null;
      if (!isMobile) {
        const count = 150;
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const r = 2 + Math.random() * 6;
          pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
          pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
          pos[i * 3 + 2] = r * Math.cos(phi);
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geos.push(pGeo);
        const pMat = mat(new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.015,
          transparent: true,
          opacity: 0.2,
        }));
        particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);
      }

      /* ── Animation ── */
      const rotSpeed = isMobile ? 0.002 : 0.004;
      const clock = new THREE.Clock();

      const animate = () => {
        if (disposed) return;
        rafRef.current = requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        cameraGroup.rotation.y += rotSpeed;
        cameraGroup.position.y = 0.5 + Math.sin(t * 0.5) * 0.1;

        if (particles) {
          particles.rotation.y += 0.0008;
          particles.rotation.x += 0.0003;
        }

        renderer.render(scene, camera);
      };
      animate();

      /* Resize */
      const onResize = () => {
        const rw = window.innerWidth;
        const rh = window.innerHeight;
        camera.aspect = rw / rh;
        camera.updateProjectionMatrix();
        renderer.setSize(rw, rh);
      };
      window.addEventListener("resize", onResize);

      /* Dispose */
      disposeRef.current = () => {
        disposed = true;
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener("resize", onResize);
        geos.forEach((g) => g.dispose());
        mats.forEach((m) => m.dispose());
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    init();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      disposeRef.current?.();
    };
  }, []);

  /* ── Phase transitions ── */
  useEffect(() => {
    if (phase === "loading") {
      document.body.style.overflow = "hidden";
    }
    if (phase === "exiting") {
      disposeRef.current?.();
      disposeRef.current = null;

      const timer = setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done" || isBot) return null;

  const isExiting = phase === "exiting";
  const isMobileSSR = typeof window !== "undefined" && window.innerWidth < 768;
  const canvasOpacity = isMobileSSR ? 0.2 : 0.35;

  return (
    <>
      {/* Top half (split reveal) */}
      <div
        className="fixed inset-x-0 top-0 z-[9999] bg-[#080808]"
        style={{
          height: "50vh",
          transform: isExiting ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />

      {/* Bottom half (split reveal) */}
      <div
        className="fixed inset-x-0 bottom-0 z-[9999] bg-[#080808]"
        style={{
          height: "50vh",
          transform: isExiting ? "translateY(100%)" : "translateY(0)",
          transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />

      {/* Layer 1: Three.js canvas (ambient background) */}
      <div
        ref={canvasRef}
        className="fixed inset-0 z-[10000]"
        style={{
          opacity: isExiting ? 0 : canvasOpacity,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Layer 2: HTML content (protagonist) */}
      <div
        className="pointer-events-none fixed inset-0 z-[10001] flex flex-col items-center justify-center"
        style={{
          opacity: isExiting ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: 0,
            transform: "scale(0.95)",
            animation: "ls-fade-in 0.5s ease-out 0.1s forwards",
          }}
        >
          <Image
            src="/optimized/logo.webp"
            alt="A0 Studios"
            width={1257}
            height={252}
            className="h-8 w-auto object-contain sm:h-10"
          />
        </div>

        {/* Studio name */}
        <p
          className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent/70"
          style={{
            opacity: 0,
            animation: "ls-fade-in 0.4s ease-out 0.25s forwards",
          }}
        >
          Content Studio · Madrid
        </p>

        {/* Progress bar + counter */}
        <div
          className="mt-8 flex flex-col items-center gap-3"
          style={{
            opacity: 0,
            animation: "ls-fade-in 0.3s ease-out 0.35s forwards",
          }}
        >
          <div className="h-px w-[80px] bg-[#1a1a1a] sm:w-[120px]">
            <div
              ref={progressBarRef}
              className="h-full origin-left bg-accent"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <span
            ref={counterRef}
            className="font-mono text-[10px] tabular-nums text-accent/40"
          >
            00
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ls-fade-in {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
