import { localizedHref } from "@/lib/i18n"
import type { Courtesy } from "@/lib/i18n/content/legal-shared"

export default function LegalCourtesy({ note, path }: { note: Courtesy; path: string }) {
  if (!note) return null
  return (
    <p className="mb-10 rounded-sm border border-foreground/15 px-4 py-3 text-sm text-foreground">
      {note.before}{" "}
      <a
        href={localizedHref("es", path)}
        hrefLang="es"
        className="underline transition-colors hover:text-amber"
      >
        {note.link}
      </a>
      .
    </p>
  )
}
