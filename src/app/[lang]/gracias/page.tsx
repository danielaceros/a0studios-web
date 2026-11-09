import Link from "next/link";
import type { Metadata } from "next";
import LeadAttribution from "@/components/analytics/LeadAttribution";
import { localizedHref, toLang } from "@/lib/i18n";
import { graciasContent } from "@/lib/i18n/content/gracias";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = toLang(raw);
  const t = graciasContent[lang];
  return {
    // Sin el sufijo "| A0Studios": lo añade el template de src/lib/metadata.ts y salía duplicado.
    title: t.metaTitle,
    description: t.metaDescription,
    // noindex: solo canonical propio (sin hreflang heredado de la home).
    alternates: { canonical: lang === "es" ? "/gracias" : "/en/gracias" },
    robots: { index: false, follow: false },
  };
}

const EMAIL = "dani@a0studios.es";
const PHONE = "+34 711 25 54 96";

export default async function GraciasPage({ params }: Props) {
  const lang = toLang((await params).lang);
  const t = graciasContent[lang];
  const WHATSAPP = `https://wa.me/34711255496?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 py-20 text-center">
      {/* Dispara el evento `Lead` del píxel si se llega aquí desde el formulario (no en visitas directas). */}
      <LeadAttribution />
      <p className="meta">{t.sent}</p>
      <h1 className="display mt-7 text-foreground">
        {t.thanks}<span className="accent-italic">.</span>
      </h1>
      <p className="lead mt-8 max-w-md">{t.received}</p>

      {/* Contacto directo: solo después del lead, para quien no pueda esperar la respuesta. */}
      <div className="mt-12 w-full max-w-md text-left">
        <p className="text-[0.9rem] leading-relaxed text-muted">{t.urgent}</p>
        <div className="mt-5 flex flex-col">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[48px] items-center gap-3 border-t border-line text-foreground transition-opacity duration-300 hover:opacity-70"
          >
            <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent transition-all duration-300 group-hover:w-6" />
            <span className="font-mono text-[12px] sm:text-[13px]">{t.whatsappLabel} · {PHONE}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex min-h-[48px] items-center gap-3 border-t border-line text-foreground transition-opacity duration-300 hover:opacity-70"
          >
            <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent transition-all duration-300 group-hover:w-6" />
            <span className="font-mono text-[12px] sm:text-[13px]">{EMAIL}</span>
          </a>
        </div>
      </div>

      <Link href={localizedHref(lang, "/")} className="btn btn-outline mt-11">
        {t.back}
      </Link>
    </main>
  );
}
