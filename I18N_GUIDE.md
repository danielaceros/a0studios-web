# I18N_GUIDE — a0studios.es (ES + EN)

Mismo patrón que daniaceros.com. **El español no cambia**: sin prefijo (`/`, `/blog`); inglés bajo `/en` con los mismos slugs.

| Pieza | Archivo |
| --- | --- |
| Rutas | `src/app/[lang]/…` (`dynamicParams=false` en el layout; `blog/[slug]` lo reactiva) |
| Documento HTML + tracking + JSON-LD | `src/components/RootDocument.tsx` (lo monta `[lang]/layout.tsx` y `global-not-found.tsx`) |
| Proxy (rewrite `/…`→`/es/…`, `/es`→301, autodetección) | `src/proxy.ts` (**en `src/`**, porque la app vive en `src/app`) |
| Config de locale | `src/lib/i18n/config.ts` (`localizedHref`, `stripLocale`, `switchLocalePath`, `HREFLANG`…) |
| Textos por sección | `src/lib/i18n/content/<seccion>.ts` → `const es = {…}; const en: typeof es = {…}` |
| FAQ | ES = `FAQS` en `src/lib/constants.ts`; EN = `getFaqs("en")` en `content/faq.ts` (misma longitud) |
| SEO | `src/lib/seo.ts` (`buildMetadata`, hreflang), `src/lib/metadata.ts` (`buildRootMetadata`), `src/lib/structured-data.ts` (todas las funciones reciben `lang`) |
| Sitemap | `src/app/sitemap.ts` (cada ruta × idioma + alternates) |
| Blog | `src/lib/blog.ts` (ES) + `src/lib/blog-translations/en-N.ts` (EN, misma clave = slug) |

## Detección automática (`src/proxy.ts`)
Solo en la primera visita a una URL sin prefijo, si no hay cookie `NEXT_LOCALE`, es una carga de documento, no es bot y hay `Accept-Language`: si el idioma preferido no es `es/ca/gl/eu` → 307 a `/en/…` + cookie. Con cookie se respeta siempre (el selector ES|EN del Nav la fija con `persistLocale`). El formulario GHL redirige siempre a `/gracias`: con cookie `en` el proxy lo manda a `/en/gracias`.

## Añadir contenido
- **Post nuevo:** añádelo en `blog.ts` (ES) y su traducción en el último `blog-translations/en-N.ts` con la misma clave. Sin traducción, `/en/blog/<slug>` muestra el texto español: tradúcelo siempre.
- **Texto nuevo en un componente:** `es` primero, `en` después (TypeScript obliga).
- **Página nueva:** colgarla de `app/[lang]/…`, `generateMetadata` con `buildMetadata({ path: "/ruta-es", lang })` y añadirla a `sitemap.ts`.
- **Otro idioma:** añadir a `LOCALES`, `HREFLANG`, `OG_LOCALE`, `LANGUAGE_NAMES`, un objeto por idioma en cada `content/*.ts`, `blog-translations`, y `SPANISH_FAMILY_LANGUAGES` / `detectLocale` en el proxy.
