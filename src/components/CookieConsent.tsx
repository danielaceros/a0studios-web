"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type Consent = "accepted" | "rejected" | null;

function Switch({
  on,
  disabled,
  onToggle,
  label,
}: {
  on: boolean;
  disabled?: boolean;
  onToggle?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={onToggle}
      className="switch"
      data-on={on}
      data-disabled={disabled}
    >
      <span className="switch-thumb" />
    </button>
  );
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const save = (accepted: boolean) => {
    const value: Consent = accepted ? "accepted" : "rejected";
    localStorage.setItem("cookie-consent", value);
    setConsent(value);
    setVisible(false);
  };

  return (
    <>
      {/* Clarity — solo con consentimiento aceptado.
          El píxel de Meta ya NO vive aquí: se carga siempre desde src/app/layout.tsx, igual que
          Google Ads/GA4 y que daniaceros.com, para que los dos píxeles midan lo mismo. */}
      {consent === "accepted" && (
        <>
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vn26qy7r7m");
            `}
          </Script>
        </>
      )}

      {/* Panel de cookies — tarjeta de ajustes, no barra */}
      {visible && (
        <div className="panel-raised fixed bottom-5 left-4 z-[200] flex max-h-[min(50svh,230px)] w-[calc(100%-2rem)] max-w-[352px] flex-col overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:bottom-7 sm:left-7">
          <div className="min-h-0 overflow-y-auto p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden="true" />
              <p className="meta">Cookies</p>
            </div>
            <h3 className="mt-3 font-heading text-[1.15rem] leading-tight tracking-[-0.028em] text-foreground">
              Ajustes de privacidad
            </h3>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
              Usamos cookies para analítica y publicidad.{" "}
              <Link href="/politica-cookies" className="text-foreground underline underline-offset-2">
                Política de cookies
              </Link>
            </p>

            <div className="mt-5 flex flex-col">
              <div className="flex items-center justify-between border-t border-line py-3.5">
                <div className="pr-4">
                  <p className="text-[0.85rem] font-medium text-foreground">Necesarias</p>
                  <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                    Imprescindibles para que la web funcione.
                  </p>
                </div>
                <Switch on disabled label="Cookies necesarias, siempre activas" />
              </div>

              <div className="flex items-center justify-between border-t border-line py-3.5">
                <div className="pr-4">
                  <p className="text-[0.85rem] font-medium text-foreground">Analítica y publicidad</p>
                  <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                    Nos ayudan a medir visitas y mejorar la web.
                  </p>
                </div>
                <Switch on={functional} onToggle={() => setFunctional((v) => !v)} label="Cookies de analítica y publicidad" />
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-3 border-t border-line p-5 pt-4 sm:p-6 sm:pt-5">
            <button type="button" onClick={() => save(false)} className="btn btn-ghost btn-sm">
              Solo esenciales
            </button>
            <button type="button" onClick={() => save(functional)} className="btn btn-solid btn-sm flex-1">
              Guardar preferencias
            </button>
          </div>
        </div>
      )}
    </>
  );
}
