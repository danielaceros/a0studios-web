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
        <div className="flex min-h-[700px] items-center justify-center sm:min-h-[600px]">
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
          // Red de seguridad, igual que en daniaceros.com: si algún día el contenido vuelve a pasarse
          // del alto, el usuario puede desplazarse dentro del iframe en vez de quedarse sin botón.
          // Con las alturas de abajo no llega a hacer falta, pero no cuesta nada tenerlo.
          scrolling="yes"
          suppressHydrationWarning
          onLoad={(e) => {
            (e.target as HTMLIFrameElement).style.opacity = "1";
            if (signalReady) {
              (window as unknown as Record<string, unknown>).__ghlReady = true;
              window.dispatchEvent(new Event("ghlReady"));
            }
          }}
          // MÁS ALTO EN MÓVIL QUE EN ESCRITORIO, que es justo al revés de lo que parece lógico.
          //
          // El alto que necesita el formulario de GHL depende de lo ANCHO que sea: cuanto más estrecho,
          // más envuelven las etiquetas y los textos de ayuda, y más crece hacia abajo. Medido sobre el
          // formulario real: ~563px con el panel a 438px de ancho (escritorio, que es cuando la sección
          // pasa a dos columnas) y ~650px con el panel a 360px (un móvil pequeño).
          //
          // Por eso 600px servía en escritorio pero NO en móvil: ahí el botón de enviar se quedaba
          // cortado fuera del iframe y el formulario no se podía enviar, que es donde cae la mayoría del
          // tráfico de anuncios. Mismo patrón que daniaceros.com, que ya usa 790px en móvil y 760 en md.
          //
          // El iframe no puede auto-ajustarse: este formulario solo emite ["iframeLoaded"] y nunca manda
          // su altura. Si se añaden campos en GHL, hay que subir estos números a mano.
          className="w-full border-0 min-h-[700px] sm:min-h-[600px]"
        />
      )}
    </div>
  );
}
