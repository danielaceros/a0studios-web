// src/lib/i18n/index.ts
// Punto de entrada único: `import { localizedHref, toLang, type Lang } from "@/lib/i18n"`.
// Los textos de cada sección viven junto a su componente en src/lib/i18n/content/<seccion>.ts
// con la forma `const es = {...}; const en: typeof es = {...}` (clave que falte = error de TypeScript).
export * from "./config"

/** format("Hola {name}", { name: "Ana" }) → "Hola Ana" */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
