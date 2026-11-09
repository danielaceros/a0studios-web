import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPosts, hasPostTranslation } from "@/lib/blog";
import { LOCALES, HREFLANG, localizedHref, type Lang } from "@/lib/i18n";

type Entry = {
  path: string;
  lastModified: Date;
  changeFrequency: "monthly" | "yearly" | "weekly";
  priority: number;
  /** Idiomas en los que existe la página (por defecto todos). */
  langs?: readonly Lang[];
};

// Cada ruta sale una vez por idioma con alternates hreflang (es-ES, en, x-default → ES).
function urlFor(lang: Lang, path: string) {
  const href = localizedHref(lang, path);
  return href === "/" ? SITE_URL : `${SITE_URL}${href}`;
}

// lastmod REAL (antes todo salía con la fecha del build, y Google acaba ignorando un lastmod que no es fiable).
// Actualizar HOME_UPDATED al cambiar el contenido de la home y LEGAL_UPDATED al cambiar los textos legales.
const HOME_UPDATED = new Date("2026-10-06");
const LEGAL_UPDATED = new Date("2026-09-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const newestPost = new Date(
    Math.max(...posts.map((p) => new Date(p.updatedAt ?? p.publishedAt).getTime()))
  );
  const entries: Entry[] = [
    { path: "/", lastModified: HOME_UPDATED, changeFrequency: "monthly", priority: 1 },
    { path: "/aviso-legal", lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { path: "/politica-privacidad", lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { path: "/politica-cookies", lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { path: "/blog", lastModified: newestPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      // Solo los idiomas en los que el post está traducido (sin traducción no hay /en indexable ni hreflang).
      langs: LOCALES.filter((l) => hasPostTranslation(post.slug, l)),
    })),
  ];

  return entries.flatMap(({ path, langs = LOCALES, ...rest }) =>
    langs.map((lang) => ({
      url: urlFor(lang, path),
      ...rest,
      ...(langs.length > 1
        ? {
            alternates: {
              languages: {
                [HREFLANG.es]: urlFor("es", path),
                [HREFLANG.en]: urlFor("en", path),
                "x-default": urlFor("es", path),
              },
            },
          }
        : {}),
    }))
  );
}
