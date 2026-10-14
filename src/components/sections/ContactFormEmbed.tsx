"use client";

import { useEffect, useRef, useState } from "react";
import FormOriginBeacon from "@/components/analytics/FormOriginBeacon";
import { ghlFormSrc } from "@/lib/analytics";
import type { Lang } from "@/lib/i18n";
import { contactFormContent } from "@/lib/i18n/content/contactForm";

type Props = {
  className?: string;
  /** Delay in ms before loading the iframe (0 = load immediately when visible) */
  loadDelay?: number;
  /** Signal LoadingScreen when this iframe is ready */
  signalReady?: boolean;
  lang?: Lang;
};

export default function ContactFormEmbed({ className, loadDelay = 0, signalReady = false, lang = "es" }: Props) {
  const [shouldRender, setShouldRender] = useState(loadDelay === 0);
  // El src se calcula en cliente (lleva las UTM y el origen de la página), así que el iframe no se pinta
  // hasta tenerlo: si no, el servidor renderizaría una URL sin params y la hidratación no cuadraría.
  const [formSrc, setFormSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFormSrc(ghlFormSrc());
  }, []);

  useEffect(() => {
    if (shouldRender || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          observer.disconnect();
          if (loadDelay > 0) {
            setTimeout(() => setShouldRender(true), loadDelay);
          } else {
            setShouldRender(true);
          }
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldRender, loadDelay]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {/* Guarda el origen del lead antes de que GHL redirija a /gracias. */}
      <FormOriginBeacon />
      {!(shouldRender && formSrc) && (
        // Misma altura que el iframe: si la silueta midiera menos, al cargar el formulario la
        // página daría un salto (CLS) justo en la sección de contacto.
        <div className="flex min-h-[600px] items-center justify-center">
          <span className="h-8 w-8 animate-spin rounded-full border border-foreground/20 border-t-foreground/60" />
        </div>
      )}
      {shouldRender && formSrc && (
        <iframe
          src={formSrc}
          id="inline-sxDYj1gBgfvDh9PI9Jte"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form - The A0Studios"
          data-layout-iframe-id="inline-sxDYj1gBgfvDh9PI9Jte"
          data-form-id="sxDYj1gBgfvDh9PI9Jte"
          title={contactFormContent[lang].iframeTitle}
          scrolling="no"
          suppressHydrationWarning
          onLoad={(e) => {
            (e.target as HTMLIFrameElement).style.opacity = "1";
            if (signalReady) {
              (window as unknown as Record<string, unknown>).__ghlReady = true;
              window.dispatchEvent(new Event("ghlReady"));
            }
          }}
          // 600px FIJOS en todos los tamaños, no escalados por breakpoint.
          //
          // El formulario de GHL mide 600px de alto SIEMPRE: es una medida suya, no responsive, y su
          // contenido ocupa 563px. Con `scrolling="no"`, lo que sobresalga del iframe no se puede ver ni
          // alcanzar. Las alturas de antes (400px en móvil, 500px hasta 768px) recortaban 163px y 63px:
          // en móvil se veían nombre, teléfono y medio email — el textarea y el botón de enviar quedaban
          // fuera, así que NO SE PODÍA ENVIAR EL FORMULARIO desde un teléfono.
          //
          // No se puede resolver escuchando al iframe: este formulario solo emite ["iframeLoaded"], nunca
          // manda su altura, así que no hay nada que sincronizar. Si algún día se añaden campos en GHL,
          // hay que subir este número a mano.
          className="w-full border-0 min-h-[600px]"
        />
      )}
    </div>
  );
}
