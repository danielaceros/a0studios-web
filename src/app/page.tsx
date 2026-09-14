import dynamic from "next/dynamic";

import Nav from "@/components/a0/Nav";
import Hero from "@/components/a0/Hero";
import LogoStrip from "@/components/a0/LogoStrip";
import Estudio from "@/components/a0/Estudio";
import Formatos from "@/components/a0/Formatos";
import Footer from "@/components/a0/Footer";
import { getWebPageSchema, getFaqPageSchema } from "@/lib/structured-data";
import { FAQS, SITE_URL } from "@/lib/constants";

const Espacio = dynamic(() => import("@/components/a0/Espacio"));
const Resultados = dynamic(() => import("@/components/a0/Resultados"));
const Proceso = dynamic(() => import("@/components/a0/Proceso"));
const Precios = dynamic(() => import("@/components/a0/Precios"));
const Testimonios = dynamic(() => import("@/components/a0/Testimonios"));
const Faq = dynamic(() => import("@/components/a0/Faq"));
const Contacto = dynamic(() => import("@/components/a0/Contacto"));

export default function Home() {
  return (
    <>
      {/* Schema propio de la home: WebPage con sus fechas reales (ya no vive
          en el layout global, que se reutilizaba tal cual en todo el blog) y
          FAQPage con las mismas preguntas/respuestas que ya se ven en #faq. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqPageSchema(FAQS, SITE_URL)),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Estudio />
        <Formatos />
        <Resultados />
        <Espacio />
        <Proceso />
        <Precios />
        <Testimonios />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
