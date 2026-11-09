// Textos de metadatos y blog (UI de las páginas bajo app/[lang]) que no pertenecen a ningún componente.
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const es = {
  home: {
    title: `${SITE_NAME} — Estudio de Grabación de Contenido en Madrid`,
    description:
      "Estudio boutique de grabación de contenido en Madrid para grabar anuncios, VSLs, reels y podcast que convierten. Con equipo y dirección. Una sesión al día.",
    ogTitle: `${SITE_NAME} — Estudio de grabación de contenido que convierte en Madrid`,
    ogDescription: SITE_DESCRIPTION,
  },
  blog: {
    metaTitle: "Blog",
    metaDescription:
      "Artículos sobre estudios de grabación, contenido para marcas, reels, podcast y producción audiovisual en Madrid.",
    kicker: "Blog",
    h1: "Blog de creación de contenido en Madrid",
    lead:
      "Guías, comparativas y artículos sobre estudios de grabación, reels, podcast, contenido de marca y producción audiovisual en Madrid.",
    readMore: "Leer artículo",
    notFoundKicker: "Blog",
    notFoundTitle: "Artículo no encontrado",
    notFoundLead: "Este post no existe o todavía no está listo. Vuelve al índice del blog y seguimos.",
    notFoundCta: "Ir al blog",
  },
  post: {
    by: "Por",
    updated: "Actualizado",
    role: "Founder & Filmmaker",
    ctaKicker: "Pedir presupuesto",
    ctaTitle: "Si quieres grabar contenido premium en Madrid, hablemos",
    ctaLead:
      "Podemos plantear desde una sesión ágil de reels hasta una jornada de producción completa con edición y entrega.",
    ctaButton: "Pedir Presupuesto",
    back: "Volver al blog",
  },
  notFound: { title: "404 · Página no encontrada", h1: "Página no encontrada", cta: "Volver al inicio" },
};

const en: typeof es = {
  home: {
    title: `${SITE_NAME} — Content Recording Studio in Madrid`,
    description:
      "Boutique content recording studio in Madrid for ads, VSLs, Reels and podcasts that convert. Full crew and creative direction. One session per day.",
    ogTitle: `${SITE_NAME} — Content recording studio that converts, in Madrid`,
    ogDescription:
      "A0Studios (pronounced Acero Studios) is a boutique content recording studio in central Madrid, directed by Dani Acero: ads, VSLs, Reels and podcasts built to convert. One session per day and a custom quote.",
  },
  blog: {
    metaTitle: "Blog",
    metaDescription:
      "Articles on recording studios, brand content, Reels, podcasts and video production in Madrid.",
    kicker: "Blog",
    h1: "Content creation blog from Madrid",
    lead:
      "Guides, comparisons and articles on recording studios, Reels, podcasts, brand content and video production in Madrid.",
    readMore: "Read article",
    notFoundKicker: "Blog",
    notFoundTitle: "Article not found",
    notFoundLead: "This post doesn't exist or isn't ready yet. Head back to the blog index and we'll pick it up from there.",
    notFoundCta: "Go to the blog",
  },
  post: {
    by: "By",
    updated: "Updated",
    role: "Founder & Filmmaker",
    ctaKicker: "Get a quote",
    ctaTitle: "If you want to record premium content in Madrid, let's talk",
    ctaLead:
      "From a quick Reels session to a full production day with editing and delivery, we can scope it to fit.",
    ctaButton: "Get a Quote",
    back: "Back to the blog",
  },
  notFound: { title: "404 · Page not found", h1: "Page not found", cta: "Back to home" },
};

export const siteContent = { es, en };
