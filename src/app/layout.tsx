import type { Metadata } from "next";
import { Archivo, Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import { siteMetadata } from "@/lib/metadata";
import { getProfessionalServiceSchema, getWebSiteSchema, getWebPageSchema, getBreadcrumbSchema, getVideoSchema } from "@/lib/structured-data";
// GrainOverlay removed per user request
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const archivo = Archivo({
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  style: ["italic"],
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair-italic",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Inline script (not Next Script) to run before ANY other JS — catches
            webkit.messageHandlers errors thrown by Instagram/TikTok iOS WebViews */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var w='webkit',m='messageHandlers';function s(e){var g=e&&(e.message||e.reason&&e.reason.message||'');if(g.indexOf(w)!==-1||g.indexOf(m)!==-1){e.preventDefault&&e.preventDefault();e.stopImmediatePropagation&&e.stopImmediatePropagation();return true;}}window.addEventListener('error',s,true);window.addEventListener('unhandledrejection',function(e){if(s(e)){e.preventDefault();}},true);})();`,
          }}
        />
        <link
          rel="preload"
          as="image"
          href="/optimized/hero-poster-v2.webp"
          type="image/webp"
        />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://api.fitnesslaunch.es" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebPageSchema()),
          }}
        />
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
        <CustomCursor />
        <SmoothScroll />
        {children}
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
