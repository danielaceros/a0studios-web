import { SITE_URL, SITE_NAME } from "./constants";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: "Rooftop Content Studio",
    description:
      "El estudio de Dani Acero — filmmaker de IFEMA, Cinesa y la Cámara de Comercio de Madrid. Graba podcast, reels y contenido corporativo en un ático en Madrid centro con equipo y dirección incluidos.",
    url: SITE_URL,
    telephone: "+34711255496",
    email: "dani@a0studios.es",
    foundingDate: "2024-01-01",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/optimized/logo-brand.jpg`,
      width: 1573,
      height: 604,
    },
    image: [
      `${SITE_URL}/optimized/og-image.jpg`,
      `${SITE_URL}/optimized/studio-1.webp`,
      `${SITE_URL}/optimized/studio-2.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Ronda de Atocha, 16",
      addressLocality: "Madrid",
      addressRegion: "Madrid",
      postalCode: "28012",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4072,
      longitude: -3.6992,
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Transferencia bancaria, Tarjeta de crédito",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Daniel Acero",
      jobTitle: "Founder & Filmmaker",
      url: "https://www.daniaceros.com",
      sameAs: [
        "https://www.instagram.com/daniaceros",
        "https://www.daniaceros.com",
      ],
      knowsAbout: [
        "Producción audiovisual",
        "Filmmaking",
        "Contenido para redes sociales",
        "Videografía profesional",
        "Dirección creativa",
        "Producción de contenido para marcas",
        "Grabación de podcast",
        "Edición de vídeo",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sesiones de grabación a medida",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Solo Grabación",
          description:
            "Ático privado con equipo técnico, cámaras, sonido profesional y teleprompter. Sales con los brutos del día.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Solo Grabación",
              description:
                "Ático privado con equipo técnico, cámaras, sonido profesional y teleprompter. Sales con los brutos del día.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Grabación + Edición",
          description:
            "Grabación con filmmaker y dirección creativa, edición profesional, subtítulos y entrega en 24-48h.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Grabación + Edición",
              description:
                "Grabación con filmmaker y dirección creativa, edición profesional, subtítulos y entrega en 24-48h.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Producción Completa",
          description:
            "Grabación, edición, estrategia de contenido y distribución multiplataforma. Servicio integral a medida.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Producción Completa",
              description:
                "Grabación, edición, estrategia de contenido y distribución multiplataforma. Servicio integral a medida.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Guillermo" },
        reviewBody:
          "En tres horas grabamos contenido para todo el equipo. Volveremos.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Almudena" },
        reviewBody: "El espacio es super comodo. Cinco estrellas.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    sameAs: [
      "https://www.instagram.com/daniaceros",
    ],
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    serviceType: "Producción audiovisual y grabación de contenido digital",
    knowsLanguage: ["es"],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Estudio de contenido en un ático en Madrid. Graba podcast, reels, YouTube y cursos con look auténtico y calidad de producción.",
    inLanguage: "es",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "A0 Studios — Tu Contenido. Tu Marca. Un Día. Madrid",
    description:
      "El estudio de Dani Acero — filmmaker de IFEMA, Cinesa y la Cámara de Comercio de Madrid. Graba podcast, reels y contenido corporativo en un ático en Madrid centro con equipo y dirección incluidos.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "es",
    datePublished: "2025-09-01",
    dateModified: "2026-03-20",
    author: {
      "@id": `${SITE_URL}/#founder`,
    },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
    ],
  };
}


export function getVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "A0 Studios - Showreel",
    description:
      "Portfolio de producciones audiovisuales realizadas en A0 Studios, estudio de grabación premium en Madrid.",
    thumbnailUrl: `${SITE_URL}/optimized/og-image.jpg`,
    uploadDate: "2024-01-01",
    duration: "PT30S",
    contentUrl: `${SITE_URL}/video/corr.mp4`,
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}
