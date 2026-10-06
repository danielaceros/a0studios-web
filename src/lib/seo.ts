import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import {
  DEFAULT_LOCALE,
  HREFLANG,
  OG_LOCALE,
  localizedHref,
  toLang,
  type Lang,
} from "@/lib/i18n";

const OG_IMAGE = "/optimized/og-a0studios.jpg";

/**
 * hreflang de una ruta. `path` = ruta española sin prefijo.
 * { "es-ES": "/blog", en: "/en/blog", "x-default": "/blog" }
 */
export function buildLanguageAlternates(path: string): Record<string, string> {
  return {
    [HREFLANG.es]: localizedHref("es", path),
    [HREFLANG.en]: localizedHref("en", path),
    "x-default": localizedHref(DEFAULT_LOCALE, path),
  };
}

type BuildMetadataArgs = {
  title: string;
  description: string;
  /** Ruta ESPAÑOLA sin prefijo ("/blog"). El prefijo /en lo añade buildMetadata. */
  path: string;
  lang: Lang;
  /** Sin hreflang (p. ej. página que solo existe en un idioma) */
  noAlternates?: boolean;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Título OG/Twitter si debe ser distinto del <title> (sin template). */
  ogTitle?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  lang,
  noAlternates = false,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  ogTitle,
}: BuildMetadataArgs): Metadata {
  const localizedPath = localizedHref(lang, path);
  const url = `${SITE_URL}${localizedPath === "/" ? "" : localizedPath}`;
  const shareTitle = ogTitle ?? title;
  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      ...(noAlternates || noIndex ? {} : { languages: buildLanguageAlternates(path) }),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type,
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[lang === "es" ? "en" : "es"]],
      url,
      siteName: SITE_NAME,
      title: shareTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: shareTitle }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export type LangParams = { params: Promise<{ lang: string }> };

/** generateMetadata para páginas bajo app/[lang] sin params propios. */
export function localizedMetadata(args: (lang: Lang) => Omit<BuildMetadataArgs, "lang">) {
  return async function generateMetadata({ params }: LangParams): Promise<Metadata> {
    const lang = toLang((await params).lang);
    return buildMetadata({ ...args(lang), lang });
  };
}
