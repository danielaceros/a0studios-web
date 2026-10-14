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
        <div className="flex min-h-[740px] items-center justify-center sm:min-h-[680px]">
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
          // Sin scroll interno: con los altos de abajo sobra sitio, y activarlo pintaba una barra gris
          // permanente dentro del panel aunque el contenido cupiera. Quedaba como un fallo visual.
          scrolling="no"
          suppressHydrationWarning
          onLoad={(e) => {
            (e.target as HTMLIFrameElement).style.opacity = "1";
            if (signalReady) {
              (window as unknown as Record<string, unknown>).__ghlReady = true;
              window.dispatchEvent(new Event("ghlReady"));
            }
          }}
          // MÁS ALTO EN MÓVIL QUE EN ESCRITORIO, que es al revés de lo que parece lógico: el alto que
          // necesita el formulario de GHL depende de lo ANCHO que sea. Cuanto más estrecho, más envuelven
          // las etiquetas y los textos de ayuda, y más crece hacia abajo.
          //
          // MEDIR SIEMPRE AQUÍ DENTRO, NO EN EL FORMULARIO SUELTO. Abriendo la URL del widget en una
          // pestaña salen ~563px, pero ahí el `clamp(..., 4.5vw, ...)` del padding de la hoja de estilos
          // de GHL se resuelve contra el ancho de la VENTANA, no contra el del iframe, y da un resultado
          // distinto. Medido embebido de verdad: ~607px con el panel a 438px (escritorio, cuando la
          // sección pasa a dos columnas) y ~650px con el panel a 360px (móvil pequeño).
          //
          // Esa confusión costó dos intentos fallidos: 600px parecía de sobra y en realidad cortaba el
          // botón de enviar en móvil Y en escritorio. Los valores de abajo dejan ~70px de margen en los
          // dos casos. Mismo patrón que daniaceros.com, que usa 790px en móvil y 760 en md.
          //
          // El iframe no puede auto-ajustarse: este formulario solo emite ["iframeLoaded"] y nunca manda
          // su altura. Si se añaden campos en GHL, hay que subir estos números a mano.
          className="w-full border-0 min-h-[740px] sm:min-h-[680px]"
        />
      )}
    </div>
  );
}
