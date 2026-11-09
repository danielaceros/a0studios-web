import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { buildRootMetadata } from "@/lib/metadata";
import { LOCALES, toLang } from "@/lib/i18n";

// Solo "es" y "en" existen: cualquier otro valor de [lang] da 404 (app/global-not-found.tsx).
// Las fichas [slug] del blog reactivan dynamicParams para sí mismas.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type LayoutParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  return buildRootMetadata(toLang((await params).lang));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & LayoutParams) {
  const lang = toLang((await params).lang);
  return <RootDocument lang={lang}>{children}</RootDocument>;
}
