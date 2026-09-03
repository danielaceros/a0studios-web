"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type Consent = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  };

  return (
    <>
      {/* Tracking scripts — only load when consent is accepted */}
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

      {/* Banner */}
      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-[#0A0A0A]/95 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
              Usamos cookies para analítica y publicidad.{" "}
              <Link
                href="/politica-cookies"
                className="underline underline-offset-2 transition-colors hover:text-white"
              >
                Política de cookies
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={handleReject}
                className="rounded-sm border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                Solo esenciales
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-sm bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-background transition-colors hover:bg-accent-light"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
