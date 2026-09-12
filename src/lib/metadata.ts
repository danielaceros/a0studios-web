import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Estudio de Grabación de Contenido en Madrid`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Estudio boutique de grabación de contenido en Madrid para grabar anuncios, VSLs, reels y podcast que convierten. Con equipo y dirección. Una sesión al día.",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Estudio de grabación de contenido que convierte en Madrid`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/optimized/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Estudio de grabación de contenido que convierte en Madrid`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Estudio de grabación de contenido que convierte en Madrid`,
    description: SITE_DESCRIPTION,
    images: ["/optimized/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
};
