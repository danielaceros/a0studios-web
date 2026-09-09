// Material real para "El espacio": BTS del ático (carrusel ambiental,
// pasivo) + Resultados finales ya editados (Reels / Ads / VSL, sección
// aparte con lightbox). Alojado en el store de Vercel Blob dedicado de
// este proyecto (a0studios-media), bajo el prefijo formatos/ para no
// mezclarlo con formatos/portfolio/.
const BLOB_BASE = "https://dhhlvt4j8kklwk3i.public.blob.vercel-storage.com/formatos";

export type FormatoOrientation = "horizontal" | "vertical";
export type FormatoKind = "photo" | "video";
export type FormatoSource = "bts" | "resultado";
export type ResultadoCategory = "reel" | "ad" | "vsl";

export type FormatoItem = {
  id: string;
  kind: FormatoKind;
  orientation: FormatoOrientation;
  source: FormatoSource;
  /** Solo en items de resultado — a qué pestaña pertenece (Reels/Ads/VSL). */
  category?: ResultadoCategory;
  src: string;
  poster?: string;
  alt: string;
};

export const FORMATOS_ITEMS: FormatoItem[] = [
  // --- BTS: dron ---
  {
    id: "bts-dron-1",
    kind: "video",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-dron-1.mp4`,
    poster: `${BLOB_BASE}/bts/bts-dron-1-poster.jpg`,
    alt: "Vista aérea con dron del ático de A0Studios",
  },
  {
    id: "bts-dron-2",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-dron-2.mp4`,
    poster: `${BLOB_BASE}/bts/bts-dron-2-poster.jpg`,
    alt: "Vista aérea vertical con dron de la terraza",
  },
  {
    id: "bts-dron-3",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-dron-3.mp4`,
    poster: `${BLOB_BASE}/bts/bts-dron-3-poster.jpg`,
    alt: "Vista aérea vertical con dron del edificio",
  },
  {
    id: "bts-dron-4",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-dron-4.mp4`,
    poster: `${BLOB_BASE}/bts/bts-dron-4-poster.jpg`,
    alt: "Vista aérea vertical con dron del skyline de Madrid",
  },
  // --- BTS: set / grabación ---
  {
    id: "bts-set-1",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-1.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-1-poster.jpg`,
    alt: "Detrás de cámaras en una sesión de grabación en A0Studios",
  },
  {
    id: "bts-set-2",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-2.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-2-poster.jpg`,
    alt: "Preparando el set antes de grabar",
  },
  {
    id: "bts-foto-1",
    kind: "photo",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-foto-1.webp`,
    alt: "Foto del set de grabación en A0Studios",
  },
  {
    id: "bts-set-3",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-3.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-3-poster.jpg`,
    alt: "Equipo técnico ajustando la cámara en sesión",
  },
  {
    id: "bts-set-4",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-4.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-4-poster.jpg`,
    alt: "Grabación en curso en el ático",
  },
  {
    id: "bts-foto-2",
    kind: "photo",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-foto-2.webp`,
    alt: "Foto del ático durante una sesión de grabación",
  },
  {
    id: "bts-set-5",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-5.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-5-poster.jpg`,
    alt: "Detrás de cámaras, dirección de la sesión",
  },
  {
    id: "bts-set-6",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-6.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-6-poster.jpg`,
    alt: "Momento de la grabación en el set de podcast",
  },
  {
    id: "bts-set-7",
    kind: "video",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-7.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-7-poster.jpg`,
    alt: "Plano general del set durante la grabación",
  },
  {
    id: "bts-foto-3",
    kind: "photo",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-foto-3.webp`,
    alt: "Foto del espacio de A0Studios entre tomas",
  },
  {
    id: "bts-set-8",
    kind: "video",
    orientation: "vertical",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-8.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-8-poster.jpg`,
    alt: "Detrás de cámaras, ajuste de luces",
  },
  {
    id: "bts-set-9",
    kind: "video",
    orientation: "horizontal",
    source: "bts",
    src: `${BLOB_BASE}/bts/bts-set-9.mp4`,
    poster: `${BLOB_BASE}/bts/bts-set-9-poster.jpg`,
    alt: "Plano amplio del ático durante la sesión",
  },
  // --- Resultado final editado: Ads (verticales) ---
  {
    id: "resultado-vertical-ad-1",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "ad",
    src: `${BLOB_BASE}/resultados/resultado-vertical-ad-1.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-vertical-ad-1-poster.jpg`,
    alt: "Anuncio vertical editado, resultado final de una sesión en A0Studios",
  },
  {
    id: "resultado-vertical-ad-2",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "ad",
    src: `${BLOB_BASE}/resultados/resultado-vertical-ad-2.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-vertical-ad-2-poster.jpg`,
    alt: "Segundo anuncio vertical editado, resultado final",
  },
  // --- Resultado final editado: VSL (horizontal) ---
  {
    id: "resultado-vsl-horizontal",
    kind: "video",
    orientation: "horizontal",
    source: "resultado",
    category: "vsl",
    src: `${BLOB_BASE}/resultados/resultado-vsl-horizontal.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-vsl-horizontal-poster.jpg`,
    alt: "VSL horizontal editado, resultado final grabado en A0Studios",
  },
  // --- Resultado final editado: Reels (verticales) ---
  {
    id: "resultado-reel-1",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-1.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-1-poster.jpg`,
    alt: "Reel publicado, resultado final editado",
  },
  {
    id: "resultado-reel-2",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-2.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-2-poster.jpg`,
    alt: "Reel publicado, resultado final editado",
  },
  {
    id: "resultado-reel-3",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-3.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-3-poster.jpg`,
    alt: "Reel publicado, resultado final editado",
  },
  {
    id: "resultado-reel-4",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-4.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-4-poster.jpg`,
    alt: "Reel de clienta grabado en A0Studios, resultado final editado",
  },
  {
    id: "resultado-reel-5",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-5.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-5-poster.jpg`,
    alt: "Reel de clienta grabado en A0Studios, resultado final editado",
  },
  {
    id: "resultado-reel-6",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-6.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-6-poster.jpg`,
    alt: "Reel de marca grabado en A0Studios, resultado final editado",
  },
  {
    id: "resultado-reel-7",
    kind: "video",
    orientation: "vertical",
    source: "resultado",
    category: "reel",
    src: `${BLOB_BASE}/resultados/resultado-reel-7.mp4`,
    poster: `${BLOB_BASE}/resultados/resultado-reel-7-poster.jpg`,
    alt: "Reel de marca grabado en A0Studios, resultado final editado",
  },
];

/** Todos los items de BTS, para el carrusel ambiental de #espacio. */
export const BTS_ITEMS: FormatoItem[] = FORMATOS_ITEMS.filter((item) => item.source === "bts");

/** Items de resultado final para la categoría pedida (Reels/Ads/VSL). */
export function getResultadosByCategory(category: ResultadoCategory): FormatoItem[] {
  return FORMATOS_ITEMS.filter((item) => item.source === "resultado" && item.category === category);
}
