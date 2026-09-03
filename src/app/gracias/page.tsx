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
      <p className="meta">Mensaje enviado</p>
      <h1 className="display mt-7 text-foreground">
        Gracias<span className="accent-italic">.</span>
      </h1>
      <p className="lead mt-8 max-w-md">
        Hemos recibido tu mensaje. Te respondemos hoy con fecha disponible.
      </p>
      <Link href="/" className="btn btn-outline mt-11">
        Volver al inicio
      </Link>
    </main>
  );
}
