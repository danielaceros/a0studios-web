"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  /** Delay in ms before loading the iframe (0 = load immediately when visible) */
  loadDelay?: number;
  /** Signal LoadingScreen when this iframe is ready */
  signalReady?: boolean;
};

export default function ContactFormEmbed({ className, loadDelay = 0, signalReady = false }: Props) {
  const [shouldRender, setShouldRender] = useState(loadDelay === 0);
  const containerRef = useRef<HTMLDivElement>(null);

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
      {!shouldRender && (
        <div className="flex min-h-[300px] items-center justify-center sm:min-h-[400px] md:min-h-[600px]">
          <span className="h-8 w-8 animate-spin rounded-full border border-foreground/20 border-t-foreground/60" />
        </div>
      )}
      {shouldRender && (
        <iframe
          src="https://api.fitnesslaunch.es/widget/form/sxDYj1gBgfvDh9PI9Jte"
          id="inline-sxDYj1gBgfvDh9PI9Jte"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form - The A0 Studios"
          data-layout-iframe-id="inline-sxDYj1gBgfvDh9PI9Jte"
          data-form-id="sxDYj1gBgfvDh9PI9Jte"
          title="Formulario de contacto A0 Studios"
          scrolling="no"
          suppressHydrationWarning
          onLoad={(e) => {
            (e.target as HTMLIFrameElement).style.opacity = "1";
            if (signalReady) {
              (window as unknown as Record<string, unknown>).__ghlReady = true;
              window.dispatchEvent(new Event("ghlReady"));
            }
          }}
          className="w-full border-0 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
        />
      )}
    </div>
  );
}
