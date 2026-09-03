"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Script from "next/script";

export default function CTA() {

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 bg-[#0D0D0D] sm:scroll-mt-32"
    >
      <div className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Left column */}
            <div className="lg:sticky lg:top-[130px]">
              <ScrollReveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent">
                  09 · CONTACTO
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h2 className="mt-6 font-heading text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.85] text-foreground sm:mt-8">
                  Pide tu Presupuesto.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="mt-6 max-w-[400px] text-base leading-[1.75] text-muted sm:text-[1.05rem] sm:leading-[1.8]">
                  Cuéntame qué necesitas y te respondo en menos de 1 hora.
                </p>
              </ScrollReveal>

              {/* Contact details */}
              <ScrollReveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
                  {[
                    { text: "hola@a0studios.es", href: "mailto:hola@a0studios.es", label: "Escríbeme directamente" },
                    { text: "+34 711 25 54 96", href: "tel:+34711255496" },
                  ].map((item) => (
                    <div key={item.text} className="flex flex-col gap-1">
                      {"label" in item && item.label && (
                        <p className="ml-7 text-sm text-muted sm:ml-9">{item.label}</p>
                      )}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="h-px w-4 shrink-0 bg-accent sm:w-5" aria-hidden="true" />
                        <a
                          href={item.href}
                          className="font-mono text-[12px] text-muted transition-colors duration-300 hover:text-foreground sm:font-sans sm:text-[14px]"
                        >
                          {item.text}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — form */}
            <ScrollReveal delay={0.12}>
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-3 right-4 z-20 bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background sm:right-6">
                  Presupuesto en 1h
                </div>

                {/* GHL Form embed */}
                <div className="rounded-[4px] border border-foreground/[0.08] bg-[#0A0A0A]" style={{ minHeight: 500, width: "100%" }}>
                  <iframe
                    src="https://api.fitnesslaunch.es/widget/form/sxDYj1gBgfvDh9PI9Jte"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: 0, minHeight: 500 }}
                    id="inline-sxDYj1gBgfvDh9PI9Jte"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form - The A0 Studios"
                    data-height="487"
                    data-layout-iframe-id="inline-sxDYj1gBgfvDh9PI9Jte"
                    data-form-id="sxDYj1gBgfvDh9PI9Jte"
                    title="Form - The A0 Studios"
                    scrolling="no"
                  />
                  <Script
                    src="https://api.fitnesslaunch.es/js/form_embed.js"
                    strategy="afterInteractive"
                  />
                </div>
                <p className="mt-3 text-center font-mono text-[11px] text-muted/60">
                  Sin compromiso. Respuesta en menos de 1 hora.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Location bar — integrated below */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 flex flex-col items-start gap-4 border-t border-foreground/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                <span className="font-mono text-[12px] text-muted">
                  Calle Ronda de Atocha, 16, Madrid — Metro Atocha Renfe (5 min)
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Calle+Ronda+de+Atocha+16+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors duration-300 hover:text-accent-light"
              >
                Ver en Google Maps →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
