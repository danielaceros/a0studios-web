import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { LOCALES, HREFLANG, localizedHref, type Lang } from "@/lib/i18n";

type Entry = {
  path: string;
  lastModified: Date;
  changeFrequency: "monthly" | "yearly" | "weekly";
  priority: number;
};

// Cada ruta sale una vez por idioma con alternates hreflang (es-ES, en, x-default → ES).
function urlFor(lang: Lang, path: string) {
  const href = localizedHref(lang, path);
  return href === "/" ? SITE_URL : `${SITE_URL}${href}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: Entry[] = [
    { path: "/", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { path: "/aviso-legal", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { path: "/politica-privacidad", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { path: "/politica-cookies", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { path: "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...getAllPosts().map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return entries.flatMap(({ path, ...rest }) =>
    LOCALES.map((lang) => ({
      url: urlFor(lang, path),
      ...rest,
      alternates: {
        languages: {
          [HREFLANG.es]: urlFor("es", path),
          [HREFLANG.en]: urlFor("en", path),
          "x-default": urlFor("es", path),
        },
      },
    }))
  );
}
