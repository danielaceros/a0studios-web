import Image from "next/image";
import Link from "next/link";
import { localizedHref, type Lang } from "@/lib/i18n";
import { footerContent } from "@/lib/i18n/content/footer";
import { CONTACT_INFO, NAP, SITE_NAME, SITE_NAME_TRADEMARKED } from "@/lib/constants";

const LINK = "text-[0.875rem] font-medium tracking-[-0.005em] text-muted transition-colors hover:text-foreground";

export default function Footer({ lang }: { lang: Lang }) {
  const t = footerContent[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 pb-28 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1360px]">
        {/* Marca */}
        <Image
          src="/optimized/logo.webp"
          alt={SITE_NAME_TRADEMARKED}
          width={1257}
          height={252}
          className="h-8 w-auto object-contain sm:h-9"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-16 md:grid-cols-4">
          <div>
            <div className="rule" />
            <p className="meta pt-4">{t.sections}</p>
            <nav className="mt-5 flex flex-col gap-3" aria-label={t.footerNav}>
              {t.sectionLinks.map((i) => (
                <a key={i.h} href={i.h} className={LINK}>
                  {i.l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">{t.contact}</p>
            <div className="mt-5 flex flex-col gap-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className={`${LINK} break-words`}>
                {CONTACT_INFO.email}
              </a>
              <a
                href="https://www.instagram.com/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                @daniaceros
              </a>
              <a
                href="https://es.linkedin.com/in/daniaceros"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@daniacerxs/videos"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">{t.studio}</p>
            {/* Bloque NAP: texto plano idéntico a la ficha de Google Business Profile */}
            <address className="mt-5 flex flex-col gap-3 text-[0.875rem] font-medium not-italic leading-relaxed tracking-[-0.005em] text-muted">
              <span>{NAP.name}</span>
              <span>{NAP.address}</span>
              <a href={NAP.phoneHref} className={LINK}>
                {NAP.phone}
              </a>
              <span className="text-foreground/40">{t.oneSession}</span>
            </address>
          </div>

          <div>
            <div className="rule" />
            <p className="meta pt-4">{t.legal}</p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link href={localizedHref(lang, "/aviso-legal")} className={LINK}>
                {t.legalNotice}
              </Link>
              <Link href={localizedHref(lang, "/politica-privacidad")} className={LINK}>
                {t.privacy}
              </Link>
              <Link href={localizedHref(lang, "/politica-cookies")} className={LINK}>
                {t.cookies}
              </Link>
              <Link href={localizedHref(lang, "/blog")} className={LINK}>
                {t.blog}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta text-foreground/28">© {year} {SITE_NAME}</p>
          <p className="meta text-foreground/28">{t.established}</p>
        </div>
      </div>
    </footer>
  );
}
