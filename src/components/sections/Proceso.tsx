"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESO } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Proceso() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    let timeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMobile(window.innerWidth < 1024), 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveStep(i);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isMobile]);

  const currentPaso = PROCESO[activeStep] || PROCESO[0];

  // Mobile: stacked layout
  if (isMobile) {
    return (
      <section id="proceso" className="px-5 py-24 sm:px-8 sm:py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              06 · PROCESO
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="mt-6 max-w-4xl font-heading text-[clamp(1.8rem,7vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
              De la Idea al Contenido en 4 Pasos.
            </h2>
          </ScrollReveal>

          <div className="mt-12 flex flex-col sm:mt-16">
            {PROCESO.map((paso, i) => (
              <ScrollReveal key={paso.step} delay={i * 0.08}>
                <div className="group grid border-t border-border py-10 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-2">
                    <span className="font-mono text-[11px] text-accent/60">
                      {String(paso.step).padStart(2, "0")} / 04
                    </span>
                  </div>
                  <div className="mt-2 md:col-span-4 md:mt-0">
                    <h3 className="font-heading text-[clamp(1.5rem,4vw,2rem)] uppercase tracking-wide text-foreground">
                      {paso.title}
                    </h3>
                  </div>
                  <div className="mt-3 md:col-span-6 md:col-start-7 md:mt-0">
                    <p className="max-w-md text-base leading-[1.75] text-muted">
                      {paso.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border" />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center sm:mt-16">
              <a
                href="#contacto"
                className="inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
              >
                Cu&eacute;ntame tu proyecto →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll
  return (
    <section id="proceso" className="relative">
      {/* Section header */}
      <div className="px-5 pb-0 pt-28 sm:px-8 lg:px-12 lg:pt-32 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              06 · PROCESO
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="mt-6 max-w-4xl font-heading text-[clamp(1.8rem,7vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
              De la Idea al Contenido en 4 Pasos.
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Sticky scroll container */}
      <div
        className="relative mt-16 lg:mt-24"
        style={{ height: `${PROCESO.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto flex w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            {/* Left column: sticky content */}
            <div className="min-w-0 flex-[55] pr-8">
              {/* Progress dots */}
              <div className="mb-10 flex items-center gap-6">
                {PROCESO.map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="h-2 w-2 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i === activeStep ? "#FFFFFF" : "#333",
                        transform: i === activeStep ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                    {i < PROCESO.length - 1 && (
                      <div className="h-px w-8 bg-border" />
                    )}
                  </div>
                ))}
              </div>

              {/* Step counter */}
              <p className="mb-4 font-mono text-[13px] text-accent">
                {String(activeStep + 1).padStart(2, "0")} / {String(PROCESO.length).padStart(2, "0")}
              </p>

              {/* Title */}
              <h3
                key={`title-${activeStep}`}
                className="font-heading text-[clamp(2.5rem,4vw,3.5rem)] uppercase leading-[0.9] text-foreground"
                style={{ animation: "procesoFadeIn 0.4s ease-out" }}
              >
                {currentPaso.title}
              </h3>

              {/* Description */}
              <p
                key={`desc-${activeStep}`}
                className="mt-6 max-w-lg text-[1.05rem] leading-[1.8] text-muted"
                style={{ animation: "procesoFadeIn 0.4s ease-out 0.05s both" }}
              >
                {currentPaso.description}
              </p>
            </div>

            {/* Right column: large decorative number */}
            <div className="flex min-w-0 flex-[45] items-center justify-center">
              <span
                key={`num-${activeStep}`}
                className="select-none font-heading leading-none text-foreground/[0.03]"
                style={{
                  fontSize: "clamp(12rem, 20vw, 22rem)",
                  animation: "procesoNumIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {String(activeStep + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Invisible scroll triggers */}
        <div className="absolute inset-0">
          {PROCESO.map((_, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className="h-screen"
            />
          ))}
        </div>
      </div>

      {/* CTA after steps */}
      <div className="px-5 pb-28 sm:px-8 lg:px-12 lg:pb-32 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <a
            href="#contacto"
            className="inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
          >
            Cu&eacute;ntame tu proyecto →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes procesoFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes procesoNumIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
