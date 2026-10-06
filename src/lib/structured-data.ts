import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, NAP } from "./constants";
import { localizedHref, SCHEMA_LANGUAGE, type Lang } from "./i18n/config";
import { siteContent } from "./i18n/content/site";
import { testimoniosContent } from "./i18n/content/testimonios";

// Textos del schema por idioma (el español es el original, sin cambios).
const T = {
  es: {
    offerCatalogName: "Grabación de contenido a medida en un estudio boutique",
    offerCatalogDescription:
      "Presupuesto a medida según lo que necesites grabar, con dos opciones: llave en mano o solo grabación. Una única sesión al día.",
    turnkey: "Llave en mano",
    turnkeyDesc:
      "Guion, grabación dirigida en el estudio y edición: te llevas las piezas editadas, subtituladas y listas para publicar en 24-48h.",
    recordingOnly: "Solo grabación",
    recordingOnlyDesc:
      "Guion, estudio con equipo completo y dirección durante la grabación: te llevas los brutos del día.",
    payment: "Transferencia bancaria, Tarjeta de crédito",
    knowsAbout: [
      "Producción audiovisual",
      "Filmmaking",
      "Contenido para redes sociales",
      "Videografía profesional",
      "Dirección creativa",
      "Producción de contenido para marcas",
      "Grabación de podcast",
      "Edición de vídeo",
      "Publicidad en Meta Ads",
      "Funnels de venta",
      "Guion de anuncios y VSL",
      "SEO y posicionamiento en buscadores de IA",
    ],
    siteDescription:
      "Estudio de grabación de contenido en Madrid centro: anuncios, VSLs, reels y podcast que convierten, en un ático con una única sesión al día.",
    home: "Inicio",
    videoDescription:
      "Showreel de A0Studios, estudio de grabación de contenido en Madrid: anuncios, VSLs, reels y podcast.",
  },
  en: {
    offerCatalogName: "Custom content recording in a boutique studio",
    offerCatalogDescription:
      "A custom quote based on what you need to record, with two options: turnkey or recording only. One session per day.",
    turnkey: "Turnkey",
    turnkeyDesc:
      "Script, directed recording in the studio and editing: you get edited, subtitled pieces ready to publish within 24-48h.",
    recordingOnly: "Recording only",
    recordingOnlyDesc:
      "Script, a fully equipped studio and direction during the shoot: you take home the day's raw footage.",
    payment: "Bank transfer, Credit card",
    knowsAbout: [
      "Video production",
      "Filmmaking",
      "Social media content",
      "Professional videography",
      "Creative direction",
      "Brand content production",
      "Podcast recording",
      "Video editing",
      "Meta Ads advertising",
      "Sales funnels",
      "Ad and VSL scriptwriting",
      "SEO and AI search visibility",
    ],
    siteDescription:
      "Content recording studio in central Madrid: ads, VSLs, Reels and podcasts that convert, in a penthouse with a single session per day.",
    home: "Home",
    videoDescription:
      "A0Studios showreel, a content recording studio in Madrid: ads, VSLs, Reels and podcasts.",
  },
} as const;

function pageUrl(lang: Lang, path = "/") {
  const href = localizedHref(lang, path);
  return href === "/" ? SITE_URL : `${SITE_URL}${href}`;
}

// Presupuesto a medida según entregables: las dos opciones se publican sin
// precio (PriceSpecification solo con la moneda), como en la versión anterior.
function buildOffer(name: string, description: string, lang: Lang) {
  return {
    "@type": "Offer",
    name,
    description,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
    },
    availability: "https://schema.org/InStock",
    url: `${pageUrl(lang)}#precios`,
  };
}

export function getProfessionalServiceSchema(lang: Lang = "es") {
  const t = T[lang];
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    // Nombre, dirección, teléfono y web = NAP canónico, idéntico a la ficha
    // de Google Business Profile (sin ®). "Rooftop Content Studio" es el
    // nombre anterior del negocio.
    name: NAP.name,
    alternateName: "Rooftop Content Studio",
    description: lang === "es" ? SITE_DESCRIPTION : siteContent.en.home.ogDescription,
    url: NAP.url,
    telephone: NAP.phone,
    email: "dani@a0studios.es",
    foundingDate: "2024-01-01",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/optimized/logo-brand.jpg`,
      width: 1573,
      height: 604,
    },
    image: [
      `${SITE_URL}/optimized/og-a0studios.jpg`,
      `${SITE_URL}/optimized/studio-1.webp`,
      `${SITE_URL}/optimized/studio-2.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.locality,
      addressRegion: "Madrid",
      postalCode: NAP.postalCode,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4072,
      longitude: -3.6992,
    },
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: t.payment,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
      // Domingo cerrado: Google lo interpreta con opens y closes a 00:00.
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
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
      knowsAbout: [...t.knowsAbout],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.offerCatalogName,
      description: t.offerCatalogDescription,
      itemListElement: [
        buildOffer(t.turnkey, t.turnkeyDesc, lang),
        buildOffer(t.recordingOnly, t.recordingOnlyDesc, lang),
      ],
    },
    // NOTA SEO (28-sep-2026): las reviews de más abajo tienen que coincidir
    // exactamente con los testimonios en vídeo visibles en la sección
    // #testimonios de la home (ver TESTIMONIOS en
    // src/components/a0/Testimonios.tsx) — Google exige que el review
    // schema refleje contenido visible en la página. Antes había 4 reviews
    // (Mónica López, Geko Marketing, Carlos Galán, Javier Bascón) que no
    // correspondían a ningún testimonio real mostrado en la web — una de
    // ellas describía el estudio como "lo más económico", lo cual además
    // contradice el posicionamiento boutique/premium sin precios públicos.
    // Si se añaden o cambian testimonios en Testimonios.tsx, actualizar
    // este array en el mismo cambio.
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Javi" },
        reviewBody: testimoniosContent[lang].items[0].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Narro Machetti" },
        reviewBody: testimoniosContent[lang].items[1].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Guillermo" },
        reviewBody: testimoniosContent[lang].items[2].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos Niño" },
        reviewBody: testimoniosContent[lang].items[3].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Alexandra" },
        reviewBody: testimoniosContent[lang].items[4].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Almudena" },
        reviewBody: testimoniosContent[lang].items[5].quote,
        inLanguage: SCHEMA_LANGUAGE[lang],
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    // Ratings agregados a partir de los 6 testimonios reales mostrados en
    // #testimonios (todos 5 estrellas). Recalcular si cambia el número de
    // testimonios en Testimonios.tsx.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/a0.studios/",
      "https://www.instagram.com/daniaceros",
      "https://es.linkedin.com/in/daniaceros",
      "https://www.youtube.com/@daniacerxs/videos",
    ],
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    knowsLanguage: ["es", "en"],
    availableLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
  };
}

export function getWebSiteSchema(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: T[lang].siteDescription,
    inLanguage: SCHEMA_LANGUAGE[lang],
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function getWebPageSchema(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl(lang)}#webpage`,
    url: pageUrl(lang),
    name: siteContent[lang].home.title,
    description: lang === "es" ? SITE_DESCRIPTION : siteContent.en.home.ogDescription,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: SCHEMA_LANGUAGE[lang],
    datePublished: "2025-09-01",
    dateModified: "2026-09-15",
    author: {
      "@id": `${SITE_URL}/#founder`,
    },
  };
}

export function getBreadcrumbSchema(
  lang: Lang = "es",
  trail: ReadonlyArray<{ name: string; path: string }> = []
) {
  const items = [{ name: T[lang].home, path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(lang, item.path),
    })),
  };
}


export function getVideoSchema(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "A0Studios - Showreel",
    description: T[lang].videoDescription,
    thumbnailUrl: `${SITE_URL}/optimized/og-a0studios.jpg`,
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
}, lang: Lang = "es") {
  const url = pageUrl(lang, `/blog/${post.slug}`);
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
    image: `${SITE_URL}/optimized/og-a0studios.jpg`,
    inLanguage: SCHEMA_LANGUAGE[lang],
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
