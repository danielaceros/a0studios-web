import Link from "next/link";
import Navbar from "@/components/a0/Nav";
import Footer from "@/components/a0/Footer";
import { DEFAULT_LOCALE, localizedHref, type Lang } from "@/lib/i18n";
import { siteContent } from "@/lib/i18n/content/site";

// not-found no recibe params: se resuelve en español (el idioma por defecto); la UI ofrece volver al blog.
export default function BlogNotFound() {
  const lang: Lang = DEFAULT_LOCALE;
  const t = siteContent[lang].blog;
  return (
    <>
      <Navbar lang={lang} />
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 pt-32 pb-20">
        <div className="max-w-xl text-center">
          <p className="meta">{t.notFoundKicker}</p>
          <h1 className="display mt-5 text-foreground">
            {t.notFoundTitle}
          </h1>
          <p className="lead mt-6">
            {t.notFoundLead}
          </p>
          <div className="mt-8">
            <Link href={localizedHref(lang, "/blog")} className="btn btn-outline">
              {t.notFoundCta}
            </Link>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
