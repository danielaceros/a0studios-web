// app/global-not-found.tsx (experimental.globalNotFound en next.config.ts)
// 404 para URLs que no casan con ninguna ruta. Con el layout raíz dentro de app/[lang], Next no tiene
// un layout único con el que componer el 404, así que este archivo monta el documento raíz.
// Es estático y no conoce el idioma: texto en español e inglés.
import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import { buildRootMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildRootMetadata("es"),
  title: "404 · Página no encontrada | A0Studios",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es">
      <main className="flex min-h-svh flex-col items-center justify-center px-8 py-20 text-center">
        <p className="meta">404</p>
        <h1 className="display mt-7 text-foreground">Página no encontrada</h1>
        <p className="lead mt-6 max-w-md">Page not found. La página que buscas no existe o se ha movido.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-outline">Volver al inicio</Link>
          <Link href="/en" className="btn btn-outline">Back to home (EN)</Link>
        </div>
      </main>
    </RootDocument>
  );
}
