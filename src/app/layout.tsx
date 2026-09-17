import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { siteMetadata } from "@/lib/metadata";
import { getProfessionalServiceSchema, getWebSiteSchema, getBreadcrumbSchema, getVideoSchema } from "@/lib/structured-data";
// GrainOverlay removed per user request
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Dos familias en toda la web y ni una más:
// Manrope para todo (incluidos los datos técnicos que antes iban en mono)
// y Playfair Display Italic como acento de marca.
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  style: ["italic"],
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair-italic",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Inline script (not Next Script) to run before ANY other JS — catches
            webkit.messageHandlers errors thrown by Instagram/TikTok iOS WebViews */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var w='webkit',m='messageHandlers';function s(e){var g=e&&(e.message||e.reason&&e.reason.message||'');if(g.indexOf(w)!==-1||g.indexOf(m)!==-1){e.preventDefault&&e.preventDefault();e.stopImmediatePropagation&&e.stopImmediatePropagation();return true;}}window.addEventListener('error',s,true);window.addEventListener('unhandledrejection',function(e){if(s(e)){e.preventDefault();}},true);})();`,
          }}
        />
        {/* Un único preload de la poster del Hero (LCP) — antes había dos
            <link rel="preload"> idénticos para este mismo recurso. */}
        <link
          rel="preload"
          as="image"
          href="/optimized/hero-poster-v3.webp"
          type="image/webp"
        />
        {/* Preconnect a Firebase Storage retirado (9-sep-2026): los vídeos de
            portfolio ya no dependen de ese storage (ver src/data/projects.ts,
            devolvía 402 por facturación) — el preconnect era dead weight. */}
        <link rel="preconnect" href="https://api.daniaceros.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17976589112"
          strategy="lazyOnload"
        />
        <Script id="google-ads-gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17976589112');
            gtag('config', 'G-5RBDKSDEZQ');
          `}
        </Script>
        {/* Píxel de Meta de A0Studios. Vivía dentro de CookieConsent y solo cargaba si aceptaban el banner,
            mientras Google Ads/GA4 cargaban siempre: incoherente dentro de la propia web y, sobre todo,
            distinto de daniaceros.com. Decisión de Dani (17-sep-2026): las dos webs igual, sin gate. */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProfessionalServiceSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
        {/* El WebPage schema (con datePublished/dateModified propios) ya no
            va aquí a nivel global — se aplicaba idéntico a la home y a los
            ~65 posts del blog. Ahora vive en cada page.tsx: la home tiene el
            suyo (WebPage) y cada post de blog el suyo (BlogPosting), con sus
            fechas reales. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getVideoSchema()),
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
