import type { Metadata } from "next"
import Nav from "@/components/a0/Nav"
import Footer from "@/components/a0/Footer"
import LegalCourtesy from "@/components/a0/LegalCourtesy"
import { toLang } from "@/lib/i18n"
import { legalAvisoContent } from "@/lib/i18n/content/legal-aviso"
import { buildMetadata, type LangParams } from "@/lib/seo"

const PATH = "/aviso-legal"

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = toLang((await params).lang)
  const c = legalAvisoContent[lang]
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: PATH, lang })
}

export default async function AvisoLegal({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const c = legalAvisoContent[lang]
  return (
    <>
      <Nav lang={lang} />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <LegalCourtesy note={c.courtesy} path={PATH} />
          <h1 className="display mb-12 text-foreground">{c.h1}</h1>

          <p>{c.intro}</p>

          <ul className="mt-6 space-y-1">
            {c.fields.map((f) => (
              <li key={f.k}><strong className="text-foreground">{f.k}</strong> {f.v}</li>
            ))}
          </ul>

          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground">{s.h}</h2>
              {s.p.map((t, i) => (
                <p key={i} className={i > 0 ? "mt-4" : undefined}>{t}</p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer lang={lang} />
    </>
  )
}
