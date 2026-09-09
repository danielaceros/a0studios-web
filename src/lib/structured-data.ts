import { SITE_URL, SITE_NAME, SITE_NAME_TRADEMARKED } from "./constants";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    // Marca registrada: aquí sí lleva ® — es el campo que identifica la
    // entidad de negocio (Organization/LocalBusiness), no un título de
    // página ni copy corrido.
    name: SITE_NAME_TRADEMARKED,
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
      streetAddress: "Calle Ronda de Atocha, 16, 7ºC",
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
                "@type": "UnitPriceSpecification",
                priceCurrency: "EUR",
                price: "200",
                valueAddedTaxIncluded: false,
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitText: "sesión",
                },
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
                // Presupuesto a medida — sin precio fijo publicado.
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
                // Presupuesto a medida — sin precio fijo publicado.
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
      ],
    },
    // NOTA SEO (9-sep-2026): las reviews de más abajo SÍ son legítimas para schema —
    // vienen de la ficha real de Google Business Profile (a nombre antiguo
    // "Rooftop Content Studio", ver alternateName arriba), verificables por
    // terceros en Google Maps. Sustituyen a los 2 testimonios propios que se
    // habían quitado antes por ser "self-serving" (no venían de ninguna
    // plataforma externa) y suponer riesgo de manual action.
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mónica López vozmediano" },
        reviewBody:
          "Ha sido una experiencia increíble, me he sentido muy cómoda desde el principio con Dani. La verdad es que lo ha hecho todo muy fácil y después de 4 horas me llevo contenido para meses. Una de las acciones que más pereza me da hacer en casa y de esta forma he ahorrado mucho tiempo y procrastinación. Gracias Dani por todo y muy muy recomendado ❤️",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Geko Marketing" },
        reviewBody:
          "Muuuuuy agradecidos con el lugar y sobre todo con Dani. Un chico encantador, con un equipazo y súper generoso. Sin duda volveremos pronto a grabar contenido en el estudio. Gracias a todos 🫡…",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos Galán" },
        reviewBody:
          "De lo más económico que he encontrado en Madrid. Me salvó la grabación. Estaba de paso por Madrid y tenía que grabar. Di con este estudio y fue todo un acierto. Dani estuvo súper involucrado con el proyecto desde el primer momento. Un gustazo de profesional, atento a cada detalle y siempre buscando que el resultado quedara lo mejor posible. Además el equipo que puso era de calidad y la ubicación no puede ser mejor. Lo recomendaría sin dudar.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Javier Bascón" },
        reviewBody:
          "Una combinación de profesionalidad y tecnología a la altura de los mejores estudios",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    // Ratings reales de la ficha de Google Business Profile "Rooftop Content
    // Studio - Estudio de Grabación" (5,0 · 4 reseñas). Recalcular si cambia
    // el total en Google.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/daniaceros",
      "https://es.linkedin.com/in/daniaceros",
      "https://www.youtube.com/@daniacerxs/videos",
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
    name: "A0Studios — Tu Contenido. Tu Marca. Un Día. Madrid",
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
    name: "A0Studios - Showreel",
    description:
      "Portfolio de producciones audiovisuales realizadas en A0Studios, estudio de grabación premium en Madrid.",
    thumbnailUrl: `${SITE_URL}/optimized/og-image.jpg`,
    uploadDate: "2024-01-01",
    duration: "PT30S",
    contentUrl: `${SITE_URL}/video/corr.mp4`,
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

/**
 * FAQPage JSON-LD reutilizable — recibe las preguntas/respuestas que ya
 * existen visualmente en la página (home: FAQS de constants.ts; posts de
 * blog: los bloques `{ type: "faq" }` de cada post) y las serializa tal
 * cual, sin inventar contenido nuevo.
 */
export function getFaqPageSchema(
  faqs: readonly { readonly question: string; readonly answer: string }[],
  pageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BlogPosting JSON-LD por post, con las fechas reales del propio artículo
 * (no las de la home). Sustituye al WebPage genérico que antes se
 * reutilizaba sin cambios en las ~65 entradas del blog.
 */
export function getBlogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    url,
    image: `${SITE_URL}/optimized/og-image.jpg`,
    inLanguage: "es",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@id": `${SITE_URL}/#founder`,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}
