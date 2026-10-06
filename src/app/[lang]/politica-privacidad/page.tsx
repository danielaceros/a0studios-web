import type { Metadata } from "next"
import Nav from "@/components/a0/Nav"
import Footer from "@/components/a0/Footer"
import LegalCourtesy from "@/components/a0/LegalCourtesy"
import { toLang } from "@/lib/i18n"
import { legalPrivacidadContent } from "@/lib/i18n/content/legal-privacidad"
import { buildMetadata, type LangParams } from "@/lib/seo"

const PATH = "/politica-privacidad"
const H2 = "mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground"

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = toLang((await params).lang)
  const c = legalPrivacidadContent[lang]
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: PATH, lang })
}

export default async function PoliticaPrivacidad({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const c = legalPrivacidadContent[lang]
  return (
    <>
      <Nav lang={lang} />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <LegalCourtesy note={c.courtesy} path={PATH} />
          <h1 className="display mb-12 text-foreground">{c.h1}</h1>

          <p>{c.intro}</p>

          <h2 className={H2}>{c.controllerH}</h2>
          <ul className="space-y-1">
            {c.controller.map((f) => (
              <li key={f.k}><strong className="text-foreground">{f.k}</strong> {f.v}</li>
            ))}
          </ul>

          <h2 className={H2}>{c.dataH}</h2>
          <p>{c.dataIntro}</p>
          <ul className="mt-4 space-y-1">
            {c.data.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <h2 className={H2}>{c.purposeH}</h2>
          <ul className="space-y-1">
            {c.purpose.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <h2 className={H2}>{c.legalBasisH}</h2>
          <ul className="space-y-1">
            {c.legalBasis.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <h2 className={H2}>{c.retentionH}</h2>
          <p>{c.retention}</p>

          <h2 className={H2}>{c.rightsH}</h2>
          <ul className="space-y-1">
            {c.rights.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-4">
            {c.rightsHow}{" "}
            <a
              href="mailto:dani@a0studios.es"
              className="text-foreground underline transition-colors hover:text-amber"
            >
              dani@a0studios.es
            </a>
          </p>

          <h2 className={H2}>{c.securityH}</h2>
          <p>{c.security}</p>

          <h2 className={H2}>{c.changesH}</h2>
          <p>{c.changes}</p>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  )
}
