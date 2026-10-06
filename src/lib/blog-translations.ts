// src/lib/blog-translations.ts
// Registro de traducciones del blog (lib/blog.ts = original ES). Misma clave que el slug ES;
// el slug EN es el mismo (/en/blog/<slug-es>). Nuevo post → añade su traducción en un en-N.ts.
import type { BlogPost } from "@/lib/blog";
import type { Lang } from "@/lib/i18n/config";
import { enPart1 } from "@/lib/blog-translations/en-1";
import { enPart2 } from "@/lib/blog-translations/en-2";
import { enPart3 } from "@/lib/blog-translations/en-3";
import { enPart4 } from "@/lib/blog-translations/en-4";

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
  en: { ...enPart1, ...enPart2, ...enPart3, ...enPart4 },
};
