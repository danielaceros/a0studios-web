import Link from "next/link";
import type { Metadata } from "next";
import LeadAttribution from "@/components/analytics/LeadAttribution";

export const metadata: Metadata = {
  // Sin el sufijo "| A0Studios": lo añade el template de src/lib/metadata.ts y salía duplicado.
  title: "Gracias",
  description: "Gracias por contactarnos. Te respondemos en menos de 1 hora.",
  robots: { index: false, follow: false },
};

const EMAIL = "dani@a0studios.es";
const PHONE = "+34 711 25 54 96";
const WHATSAPP = `https://wa.me/34711255496?text=${encodeURIComponent(
  "Hola Dani, acabo de enviaros el formulario de A0Studios y es urgente."
)}`;

export default function GraciasPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 py-20 text-center">
      {/* Dispara el evento `Lead` del píxel si se llega aquí desde el formulario (no en visitas directas). */}
      <LeadAttribution />
      <p className="meta">Mensaje enviado</p>
      <h1 className="display mt-7 text-foreground">
        Gracias<span className="accent-italic">.</span>
      </h1>
      <p className="lead mt-8 max-w-md">
        Hemos recibido tu mensaje. Te respondemos hoy con fecha disponible.
      </p>

      {/* Contacto directo: solo después del lead, para quien no pueda esperar la respuesta. */}
      <div className="mt-12 w-full max-w-md text-left">
        <p className="text-[0.9rem] leading-relaxed text-muted">
          ¿Es urgente? Escríbeme directamente y lo vemos ahora.
        </p>
        <div className="mt-5 flex flex-col">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[48px] items-center gap-3 border-t border-line text-foreground transition-opacity duration-300 hover:opacity-70"
          >
            <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent transition-all duration-300 group-hover:w-6" />
            <span className="font-mono text-[12px] sm:text-[13px]">WhatsApp · {PHONE}</span>
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

      <Link href="/" className="btn btn-outline mt-11">
        Volver al inicio
      </Link>
    </main>
  );
}
