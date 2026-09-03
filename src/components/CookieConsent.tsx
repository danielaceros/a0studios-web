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
      {/* Tracking scripts — solo se cargan con consentimiento aceptado */}
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
          <Script id="meta-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '900204272395673');
              fbq('track', 'PageView');
            `}
          </Script>
        </>
      )}

      {/* Panel de cookies — tarjeta de ajustes, no barra */}
      {visible && (
        <div className="glass fixed bottom-5 left-4 z-[200] w-[calc(100%-2rem)] max-w-[360px] rounded-2xl p-5 sm:bottom-7 sm:left-7 sm:p-6">
          <p className="label text-foreground/45">Cookies</p>
          <h3 className="mt-2 font-heading text-[1.15rem] leading-tight tracking-tight text-foreground">
            Ajustes de privacidad
          </h3>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
            Usamos cookies para analítica y publicidad.{" "}
            <Link href="/politica-cookies" className="text-foreground underline underline-offset-2">
              Política de cookies
            </Link>
          </p>

          <div className="mt-5 flex flex-col gap-1">
            <div className="flex items-center justify-between border-t border-white/10 py-3">
              <div className="pr-4">
                <p className="text-[0.85rem] text-foreground">Necesarias</p>
                <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                  Imprescindibles para que la web funcione.
                </p>
              </div>
              <Switch on disabled label="Cookies necesarias, siempre activas" />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 py-3">
              <div className="pr-4">
                <p className="text-[0.85rem] text-foreground">Analítica y publicidad</p>
                <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                  Nos ayudan a medir visitas y mejorar la web.
                </p>
              </div>
              <Switch on={functional} onToggle={() => setFunctional((v) => !v)} label="Cookies de analítica y publicidad" />
            </div>
          </div>

          <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">
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
