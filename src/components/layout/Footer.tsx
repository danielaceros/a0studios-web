import Link from "next/link";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] px-5 pb-12 pt-10 sm:px-8 sm:pt-12 md:px-10 lg:px-12 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 pt-0 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              Navegación
            </p>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1.5 -my-1.5 font-mono text-[12px] text-foreground/40 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              Contacto
            </p>
            <div className="mt-6 flex flex-col gap-3 font-mono text-[12px] text-foreground/40">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="py-1.5 -my-1.5 break-words transition-colors hover:text-foreground"
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="py-1.5 -my-1.5 transition-colors hover:text-foreground"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href="https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 -my-1.5 break-words transition-colors hover:text-foreground"
              >
                Calle Ronda de Atocha, 16, Madrid
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              Equipo
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <p className="font-mono text-[12px] text-foreground/60">
                Daniel Acero
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
                Founder & Filmmaker
              </p>
              <p className="font-mono text-[10px] text-muted">
                FIFA &middot; IFEMA &middot; Cinesa &middot; C&aacute;mara de Comercio
              </p>
              <a
                href="https://www.instagram.com/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 -my-1.5 font-mono text-[12px] text-foreground/40 transition-colors hover:text-accent"
              >
                @daniaceros
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
              Legal
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              <Link href="/aviso-legal" className="py-1.5 -my-1.5 font-mono text-[12px] text-foreground/40 transition-colors hover:text-foreground">
                Aviso Legal
              </Link>
              <Link href="/politica-privacidad" className="py-1.5 -my-1.5 font-mono text-[12px] text-foreground/40 transition-colors hover:text-foreground">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="py-1.5 -my-1.5 font-mono text-[12px] text-foreground/40 transition-colors hover:text-foreground">
                Política de Cookies
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-foreground/[0.06] pt-6 md:mt-12 md:pt-8">
          <p className="text-center font-mono text-[10px] tracking-[0.1em] text-foreground/20">
            &copy; {currentYear} A0 Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
