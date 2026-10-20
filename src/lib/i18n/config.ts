// src/lib/i18n/config.ts
// Utilidades de locale SIN dependencias (ni React ni Next): las importan el
// proxy (proxy.ts), componentes de servidor y componentes de cliente por igual.
// Patrón idéntico al de daniaceros.com (ver I18N_GUIDE.md).

export const LOCALES = ["es", "en"] as const
export type Lang = (typeof LOCALES)[number]

/** Idioma por defecto: vive SIN prefijo en la URL (/blog). */
export const DEFAULT_LOCALE: Lang = "es"

/** Cookie que fija el idioma elegido (selector o detección automática). */
export const LOCALE_COOKIE = "NEXT_LOCALE"
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 año

/** Códigos hreflang (alternates.languages). x-default apunta a ES. */
export const HREFLANG: Record<Lang, string> = { es: "es-ES", en: "en" }

/** og:locale por idioma. */
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_US" }

/** Valor de inLanguage en JSON-LD. */
export const SCHEMA_LANGUAGE: Record<Lang, string> = { es: "es-ES", en: "en" }

/** Nombre del idioma en su propio idioma (selector). */
export const LANGUAGE_NAMES: Record<Lang, string> = { es: "Español", en: "English" }

/**
 * Idiomas del navegador que se quedan en español en la detección automática
 * (español, catalán, gallego y euskera). Cualquier otro → inglés.
 */
export const SPANISH_FAMILY_LANGUAGES = ["es", "ca", "gl", "eu"]

export function isLang(value: string | undefined | null): value is Lang {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

/** Normaliza el param `[lang]` (siempre validado por dynamicParams=false). */
export function toLang(value: string | undefined | null): Lang {
  return isLang(value) ? value : DEFAULT_LOCALE
}

/**
 * Slugs en inglés (SEO para búsquedas en inglés). Clave = ruta ESPAÑOLA, valor = ruta EN sin prefijo.
 * Las carpetas de app/[lang] siguen siendo las españolas: el proxy reescribe /en/<slug-en> → /en/<slug-es>
 * y redirige (301) /en/<slug-es> → /en/<slug-en>. El español no cambia.
 * Las rutas que no estén aquí (home, legales, /gracias, /blog) mantienen el mismo slug en ambos idiomas.
 */
export const EN_PATHS: Record<string, string> = {}

/** Slugs de artículos del blog en inglés (clave = slug ES, valor = slug EN). Solo posts con traducción EN. */
export const EN_BLOG_SLUGS: Record<string, string> = {
  "estudio-grabacion-madrid-precios": "recording-studio-madrid-prices",
  "grabar-podcast-madrid-estudio": "podcast-recording-studio-madrid",
  "como-preparar-sesion-grabacion-contenido-madrid": "prepare-content-recording-session-madrid",
  "que-es-un-rooftop-studio-contenido-marca": "rooftop-studio-brand-content",
  "grabacion-reels-madrid-que-necesitas": "record-reels-madrid",
  "podcast-con-video-contexto-visual-audio": "video-podcast-studio",
  "como-grabar-contenido-semanas-en-una-manana": "batch-record-weeks-of-content",
  "estudio-grabacion-vs-grabar-en-oficina": "recording-studio-vs-office-recording",
  "contenido-autoridad-linkedin-formatos-madrid": "linkedin-authority-video-content",
  "vsl-linkedin-estructura-duracion-como-grabarlo": "linkedin-vsl-structure-length",
  "como-hacer-un-day-in-studio-marcas-personales": "day-in-studio-personal-brands",
  "reels-verticales-empresa-ceos": "vertical-reels-companies-ceos",
  "grabacion-multicamara-podcast-que-aporta": "multicamera-podcast-recording-madrid",
  "como-usar-teleprompter-sin-parecer-robot": "use-teleprompter-naturally",
  "iluminacion-grabacion-contenido-basicos": "lighting-content-recording-basics",
  "microfonos-podcast-entrevistas-tipos": "best-microphones-podcasts-interviews",
  "grabacion-cursos-online-madrid": "record-online-courses-madrid",
  "contenido-youtube-shorts-sesion-estudio": "youtube-shorts-studio-session",
  "que-grabar-jornada-intensiva-contenido": "intensive-content-day-studio",
  "como-preparar-invitado-grabar-podcast": "prepare-podcast-guest",
  "edicion-video-rapida-vs-edicion-que-convierte": "video-editing-that-converts",
  "cuando-contratar-produccion-completa-vs-solo-grabacion": "full-production-vs-recording-only",
  "contenido-recurrente-marca-constancia": "recurring-brand-content",
  "grabacion-testimonios-casos-exito-empresa": "customer-testimonial-video-production",
  "como-optimizar-sesion-podcast-clips-redes": "podcast-clips-social-media",
  "audio-profesional-video-microfono-segun-formato": "best-microphone-for-video",
  "content-day-como-sacarle-el-maximo-partido": "content-day-guide",
  "video-corporativo-web-grabacion-estudio": "corporate-video-for-website",
  "grabacion-spots-publicitarios-estudio": "recording-ad-spots-studio",
  "fondos-decorados-grabacion-contenido": "backgrounds-sets-content-recording",
  "camara-grabar-contenido-marca": "best-camera-branded-content",
  "cobertura-audiovisual-eventos-corporativos": "corporate-event-video-coverage",
  "grabacion-contenido-ugc-marcas": "ugc-video-production-brands",
  "video-employer-branding-atraer-talento": "employer-branding-video-talent",
  "grabacion-webinars-masterclasses": "record-webinar-masterclass",
  "grabacion-videos-producto-estudio": "product-video-studio-madrid",
  "tratamiento-acustico-estudio-grabacion": "acoustic-treatment-recording-studio",
  "que-ropa-ponerte-grabar-video": "what-to-wear-on-camera",
  "guion-video-contenido-sin-sonar-a-anuncio": "video-script-not-sound-like-ad",
  "video-horizontal-vs-vertical-que-formato-usar": "horizontal-vs-vertical-video",
  "video-pitch-inversores-como-grabarlo": "investor-pitch-video",
  "video-onboarding-empleados-nuevos": "employee-onboarding-video",
  "video-explicativo-producto-como-grabarlo": "product-explainer-video",
  "video-anuncios-pago-vs-contenido-organico": "video-paid-ads-vs-organic",
  "roi-contenido-video-marca": "video-content-roi",
  "que-es-el-b-roll-video-marca": "what-is-b-roll",
  "aftermovie-evento-corporativo-como-se-produce": "corporate-event-aftermovie",
  "podcast-invitados-remoto-estudio-videollamada": "podcast-remote-guests",
  "streaming-directo-estudio-que-necesitas": "live-streaming-from-studio",
  "subtitulos-video-por-que-importan-como-se-hacen": "video-subtitles-guide",
  "locucion-voz-en-off-grabacion-estudio": "voiceover-recording-studio-madrid",
  "talking-head-video-marca-cuando-funciona": "talking-head-video-brands",
  "croma-key-cuando-grabar-fondo-verde": "green-screen-chroma-key-video",
  "duracion-ideal-video-segun-plataforma": "ideal-video-length-by-platform",
  "brief-antes-de-grabar-contenido": "creative-brief-before-recording",
  "musica-video-marca-sin-copyright": "copyright-free-music-brand-video",
  "hook-video-primeros-segundos": "video-hook-first-3-seconds",
  "color-grading-video-marca-que-es": "color-grading-video-guide",
  "como-dar-feedback-editor-video-sin-perder-tiempo": "feedback-to-video-editor",
  "que-es-un-sizzle-reel-cuando-grabarlo": "what-is-a-sizzle-reel",
  "dirigir-talento-sin-experiencia-camara": "direct-talent-no-camera-experience",
  "grabar-exteriores-vs-estudio-cuando-compensa": "outdoor-vs-studio-filming",
  "perder-miedo-camara-primera-grabacion": "overcome-fear-of-camera",
  "repurposing-video-contenido-ya-grabado": "video-repurposing",
  "documental-de-marca-que-es-cuando-grabarlo": "brand-documentary",
  "video-bienvenida-clientes-como-grabarlo": "client-welcome-video",
  "mesas-redondas-paneles-invitados-como-grabarlos": "record-roundtable-panel-discussion",
  "run-of-show-sesion-grabacion-como-planificarla": "run-of-show-recording-session",
  "como-elegir-estudio-grabacion-marca-personal": "choose-recording-studio-personal-brand",
  "kit-contenido-mensual-empresas-que-grabar": "monthly-content-kit-companies",
  "grabar-instagram-linkedin-youtube-misma-sesion": "instagram-linkedin-youtube-one-session",
  "estructurar-guion-video-corporativo-menos-5-minutos": "short-corporate-video-script",
  "video-corporativo-vs-marca-personal-produccion": "corporate-vs-personal-brand-video",
  "donde-grabar-anuncios-en-madrid": "where-to-record-ads-madrid",
  "donde-grabar-vsl-en-madrid": "where-to-record-vsl-madrid",
  "estudio-grabar-contenido-organico-madrid": "studio-organic-content-madrid",
  "estudio-grabacion-redes-sociales-madrid": "recording-studio-social-media-madrid",
  "mejor-estudio-spots-publicitarios-madrid": "best-studio-commercials-madrid",
  "estudio-grabacion-direccion-marketing-madrid": "recording-studio-marketing-direction-madrid",
  "alquiler-estudio-horas-grabar-anuncios-madrid": "rent-recording-studio-hourly-madrid",
  "estudio-grabacion-madrid-centro-founders-marcas": "recording-studio-central-madrid-founders",
  "diferencia-alquilar-estudio-contratar-direccion-contenido": "rent-studio-vs-content-direction",
  "grabacion-contenido-clinicas-consultas": "clinic-video-content-madrid",
  "making-of-publicidad-que-es-para-que-sirve": "advertising-making-of-video",
  "filmmaker-madrid-como-elegir-contratar": "hire-filmmaker-madrid",
  "produccion-de-video-madrid-fases-que-incluye": "video-production-madrid-phases",
  "estudio-para-grabar-anuncios-en-madrid": "studio-to-shoot-ads-madrid",
  "video-para-reuniones-comerciales-que-grabar": "video-for-sales-meetings",
  "video-landing-page-formato-duracion-que-convierte": "landing-page-video",
  "contenido-todo-el-ano-un-solo-evento-corporativo": "a-year-of-content-from-one-event",
  "dirigir-entrevista-que-no-se-note-el-guion": "how-to-direct-a-video-interview",
  "grabacion-contenido-founders-antes-primera-sesion": "content-recording-for-founders",
  "plan-contenido-trimestral-una-sola-sesion-grabacion": "quarterly-content-plan-one-session",
  "preguntas-estudio-grabacion-antes-de-reservar": "questions-to-ask-a-recording-studio",
  "preparar-lanzamiento-producto-grabar-estudio": "product-launch-studio-shoot",
}

const EN_PATH_TO_ES: Record<string, string> = Object.fromEntries([
  ...Object.entries(EN_PATHS).map(([es, en]) => [en, es]),
  ...Object.entries(EN_BLOG_SLUGS).map(([es, en]) => [`/blog/${en}`, `/blog/${es}`]),
])

/** Ruta ES (sin prefijo, sin query) → ruta EN con slug en inglés. Sin mapeo: la misma. */
export function toEnPath(esPath: string): string {
  const direct = EN_PATHS[esPath]
  if (direct) return direct
  const blog = esPath.match(/^\/blog\/([^/]+)$/)
  const blogSlug = blog?.[1] ? EN_BLOG_SLUGS[blog[1]] : undefined
  return blogSlug ? `/blog/${blogSlug}` : esPath
}

/** Ruta EN (slug en inglés) → ruta ES de la carpeta real. Sin mapeo: la misma. */
export function toEsPath(enPath: string): string {
  return EN_PATH_TO_ES[enPath] ?? enPath
}

/** ¿Es una ruta EN con slug español que debe redirigir (301) al slug inglés? */
export function enRedirectTarget(enPath: string): string | null {
  const target = toEnPath(enPath)
  return target !== enPath ? target : null
}

/**
 * Href interno localizado. `path` es SIEMPRE la ruta española sin prefijo
 * ("/", "/blog", "/#contacto", "/blog/slug?x=1").
 *   localizedHref("es", "/blog")       → "/blog"
 *   localizedHref("en", "/blog")       → "/en/blog"
 *   localizedHref("en", "/")           → "/en"
 *   localizedHref("en", "/#contacto")  → "/en#contacto"
 * URLs externas (https:, mailto:, tel:, #ancla) se devuelven tal cual.
 */
export function localizedHref(lang: Lang, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  if (lang === DEFAULT_LOCALE) return path
  const match = path.match(/^([^?#]*)(.*)$/)
  const rawPathname = match?.[1] ?? path
  const suffix = match?.[2] ?? ""
  const pathname = lang === "en" ? toEnPath(rawPathname) : rawPathname
  return `/${lang}${pathname === "/" ? "" : pathname}${suffix}`
}

/**
 * Quita el prefijo de idioma de un pathname.
 *   "/en/blog" → { lang: "en", path: "/blog" }
 *   "/es"      → { lang: "es", path: "/" }   (rutas internas reescritas)
 *   "/blog"    → { lang: null, path: "/blog" }
 */
export function stripLocale(pathname: string): { lang: Lang | null; path: string } {
  const segments = pathname.split("/")
  const first = segments[1]
  if (isLang(first)) {
    const rest = `/${segments.slice(2).join("/")}`
    const clean = rest === "/" ? "/" : rest.replace(/\/$/, "") || "/"
    // En EN la URL visible lleva slug inglés; la ruta "lógica" es siempre la española.
    return { lang: first, path: first === "en" ? toEsPath(clean) : clean }
  }
  return { lang: null, path: pathname || "/" }
}

/** Misma página en otro idioma: "/en/blog" + "es" → "/blog". */
export function switchLocalePath(pathname: string, target: Lang): string {
  return localizedHref(target, stripLocale(pathname).path)
}
