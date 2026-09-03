import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const LINK = "text-[0.875rem] font-medium tracking-[-0.005em] text-muted transition-colors hover:text-foreground";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 pb-28 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1360px]">
        {/* Marca */}
        <Image
          src="/optimized/logo.webp"
          alt="A0 Studios"
          width={1257}
          height={252}
          className="h-8 w-auto object-contain sm:h-9"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-16 md:grid-cols-4">
          <div>
            <div className="rule" />
            <p className="meta pt-4">Secciones</p>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Pie de página">
              {[
                { l: "El estudio", h: "#estudio" },
                { l: "El espacio", h: "#espacio" },
                { l: "Precios", h: "#precios" },
              ].map((i) => (
                <a key={i.h} href={i.h} className={LINK}>
                  {i.l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">Contacto</p>
            <div className="mt-5 flex flex-col gap-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className={`${LINK} break-words`}>
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className={LINK}>
                {CONTACT_INFO.phone}
              </a>
              <a
                href="https://www.instagram.com/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                @daniaceros
              </a>
            </div>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">Estudio</p>
            <div className="mt-5 flex flex-col gap-3 text-[0.875rem] font-medium leading-relaxed tracking-[-0.005em] text-muted">
              <span>Ronda de Atocha 16</span>
              <span>Planta 7 · 28012 Madrid</span>
              <span className="text-foreground/40">Una sesión al día</span>
            </div>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">Legal</p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link href="/aviso-legal" className={LINK}>
                Aviso legal
              </Link>
              <Link href="/politica-privacidad" className={LINK}>
                Privacidad
              </Link>
              <Link href="/politica-cookies" className={LINK}>
                Cookies
              </Link>
              <Link href="/blog" className={LINK}>
                Blog
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta text-foreground/28">© {year} A0 Studios</p>
          <p className="meta text-foreground/28">Madrid · Est. 2025</p>
        </div>
      </div>
    </footer>
  );
}
