import dynamic from "next/dynamic";

import Nav from "@/components/a0/Nav";
import Hero from "@/components/a0/Hero";
import LogoStrip from "@/components/a0/LogoStrip";
import Estudio from "@/components/a0/Estudio";
import Formatos from "@/components/a0/Formatos";
import Footer from "@/components/a0/Footer";
import { getWebPageSchema, getFaqPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import { getFaqs } from "@/lib/i18n/content/faq";
import type { LangParams } from "@/lib/seo";
import { localizedHref, toLang } from "@/lib/i18n";

const Espacio = dynamic(() => import("@/components/a0/Espacio"));
const Resultados = dynamic(() => import("@/components/a0/Resultados"));
const Proceso = dynamic(() => import("@/components/a0/Proceso"));
const Precios = dynamic(() => import("@/components/a0/Precios"));
const Testimonios = dynamic(() => import("@/components/a0/Testimonios"));
const Faq = dynamic(() => import("@/components/a0/Faq"));
const Contacto = dynamic(() => import("@/components/a0/Contacto"));

// Metadata de la home: la aporta app/[lang]/layout.tsx (buildRootMetadata: título, hreflang, OG).
export default async function Home({ params }: LangParams) {
  const lang = toLang((await params).lang);
  return (
    <>
      {/* Schema propio de la home: WebPage con sus fechas reales (ya no vive
          en el layout global, que se reutilizaba tal cual en todo el blog) y
          FAQPage con las mismas preguntas/respuestas que ya se ven en #faq. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(lang)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqPageSchema(getFaqs(lang), `${SITE_URL}${localizedHref(lang, "/") === "/" ? "" : localizedHref(lang, "/")}`)),
        }}
      />
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <LogoStrip lang={lang} />
        <Estudio lang={lang} />
        <Formatos lang={lang} />
        <Resultados lang={lang} />
        <Espacio lang={lang} />
        <Proceso lang={lang} />
        <Precios lang={lang} />
        <Testimonios lang={lang} />
        <Faq lang={lang} />
        <Contacto lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
