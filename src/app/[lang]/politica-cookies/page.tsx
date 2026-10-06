import type { Metadata } from "next"
import Nav from "@/components/a0/Nav"
import Footer from "@/components/a0/Footer"
import LegalCourtesy from "@/components/a0/LegalCourtesy"
import { toLang } from "@/lib/i18n"
import { legalCookiesContent } from "@/lib/i18n/content/legal-cookies"
import { buildMetadata, type LangParams } from "@/lib/seo"

const PATH = "/politica-cookies"
const H2 = "mb-4 mt-14 font-heading text-[1.35rem] tracking-[-0.028em] text-foreground"

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = toLang((await params).lang)
  const c = legalCookiesContent[lang]
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: PATH, lang })
}

export default async function PoliticaCookies({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const c = legalCookiesContent[lang]
  return (
    <>
      <Nav lang={lang} />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
        <article className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted sm:text-base">
          <LegalCourtesy note={c.courtesy} path={PATH} />
          <h1 className="display mb-12 text-foreground">{c.h1}</h1>

          <p>{c.intro}</p>

          <h2 className={H2}>{c.whatH}</h2>
          <p>{c.what}</p>

          <h2 className={H2}>{c.typesH}</h2>
          <ul className="mt-4 space-y-2">
            {c.types.map((t) => (
              <li key={t.k}><strong className="text-foreground">{t.k}</strong> {t.v}</li>
            ))}
          </ul>

          <h2 className={H2}>{c.thirdH}</h2>
          <p>{c.third}</p>
          <ul className="mt-4 space-y-1">
            {c.thirdList.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <h2 className={H2}>{c.manageH}</h2>
          <p>{c.manage}</p>
          <ul className="mt-4 space-y-2">
            {c.browsers.map((b) => (
              <li key={b.n}><a href={b.u} target="_blank" rel="noopener noreferrer" className="text-foreground underline transition-colors hover:text-amber">{b.n}</a></li>
            ))}
          </ul>

          <h2 className={H2}>{c.consentH}</h2>
          <p>{c.consent}</p>

          <h2 className={H2}>{c.updateH}</h2>
          <p>{c.update}</p>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  )
}
