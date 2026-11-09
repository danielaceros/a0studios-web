// src/lib/blog-translations.ts
// Registro de traducciones del blog (lib/blog.ts = original ES). Misma clave que el slug ES;
// la URL EN usa un slug en inglés (EN_BLOG_SLUGS en lib/i18n/config.ts → /en/blog/<slug-en>); añade ahí el mapeo del post nuevo. Nuevo post → añade su traducción en un en-N.ts.
import type { BlogPost } from "@/lib/blog";
import type { Lang } from "@/lib/i18n/config";
import { enPart1 } from "@/lib/blog-translations/en-1";
import { enPart2 } from "@/lib/blog-translations/en-2";
import { enPart3 } from "@/lib/blog-translations/en-3";
import { enPart4 } from "@/lib/blog-translations/en-4";
import { enPart5 } from "@/lib/blog-translations/en-5";
import { enAuto } from "@/lib/blog-translations/en-auto";

export type BlogPostTranslation = Pick<
  BlogPost,
  | "title"
  | "description"
  | "readingTime"
  | "category"
  | "tags"
  | "keyword"
  | "excerpt"
  | "seoTitle"
  | "metaDescription"
  | "heroKicker"
  | "body"
>;

export const blogTranslations: Partial<Record<Lang, Record<string, BlogPostTranslation>>> = {
  en: { ...enPart1, ...enPart2, ...enPart3, ...enPart4, ...enPart5, ...enAuto },
};
