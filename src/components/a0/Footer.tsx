import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 pb-28 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        {/* Wordmark grande */}
        <div className="flex items-end justify-between gap-6">
          <p className="font-heading text-[clamp(2.6rem,11vw,9rem)] uppercase leading-[0.8] tracking-[-0.03em] text-white/12">
            A0 Studios
          </p>
          <Image
            src="/optimized/logo.webp"
            alt=""
            aria-hidden="true"
            width={1257}
            height={252}
            className="mb-2 h-6 w-auto shrink-0 object-contain opacity-40 sm:h-8"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:mt-16 md:grid-cols-4">
          <div>
            <p className="label text-foreground/35">Secciones</p>
            <nav className="mt-5 flex flex-col gap-2.5" aria-label="Pie de página">
              {[
                { l: "El estudio", h: "#estudio" },
                { l: "El espacio", h: "#espacio" },
                { l: "Precios", h: "#precios" },
              ].map((i) => (
                <a key={i.h} href={i.h} className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                  {i.l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="label text-foreground/35">Contacto</p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a href={`mailto:${CONTACT_INFO.email}`} className="break-words font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                {CONTACT_INFO.phone}
              </a>
              <a
                href="https://www.instagram.com/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-muted transition-colors hover:text-foreground"
              >
                @daniaceros
              </a>
            </div>
          </div>

          <div>
            <p className="label text-foreground/35">Estudio</p>
            <div className="mt-5 flex flex-col gap-2.5 font-mono text-[12px] leading-relaxed text-muted">
              <span>Ronda de Atocha 16</span>
              <span>Planta 7 · 28012 Madrid</span>
              <span className="text-foreground/40">Una sesión al día</span>
            </div>
          </div>

          <div>
            <p className="label text-foreground/35">Legal</p>
            <nav className="mt-5 flex flex-col gap-2.5">
              <Link href="/aviso-legal" className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                Aviso legal
              </Link>
              <Link href="/politica-privacidad" className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                Privacidad
              </Link>
              <Link href="/politica-cookies" className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                Cookies
              </Link>
              <Link href="/blog" className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
                Blog
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="label !tracking-[0.2em] text-foreground/25">© {year} A0 Studios</p>
          <p className="label !tracking-[0.2em] text-foreground/25">Madrid · Est. 2025</p>
        </div>
      </div>
    </footer>
  );
}
