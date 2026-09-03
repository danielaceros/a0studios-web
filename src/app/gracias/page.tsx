import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gracias | A0 Studios",
  description: "Gracias por contactarnos. Te respondemos en menos de 1 hora.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
        ( Mensaje enviado )
      </p>
      <h1 className="mt-8 font-heading text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.85] text-foreground">
        Gracias.
      </h1>
      <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
        Hemos recibido tu mensaje. Te respondemos hoy con fecha disponible.
      </p>
      <Link
        href="/"
        className="mt-12 rounded-full border border-foreground/60 px-12 py-4 font-heading text-xl uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
