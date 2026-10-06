import ContactFormEmbed from "@/components/sections/ContactFormEmbed";
import { CONTACT_INFO, NAP } from "@/lib/constants";
import type { Lang } from "@/lib/i18n";
import { contactoContent } from "@/lib/i18n/content/contacto";

const FICHA: { key: "email" | "phone" | "studio"; value: string; href: string; external: boolean }[] = [
  {
    key: "email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    external: false,
  },
  {
    key: "phone",
    value: CONTACT_INFO.phone,
    href: CONTACT_INFO.phoneHref,
    external: false,
  },
  {
    key: "studio",
    value: NAP.address,
    href: "https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid",
    external: true,
  },
];

export default function Contacto({ lang }: { lang: Lang }) {
  const t = contactoContent[lang];
  return (
    <section
      id="contacto"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16 xl:gap-24">
          {/* Izquierda */}
          <div className="reveal lg:sticky lg:top-32 lg:self-start">
            <div className="rule" />
            <div className="flex items-center gap-3 pt-4">
              <span className="tick" aria-hidden="true" />
              <p className="meta">{t.label}</p>
            </div>

            <h2 className="display mt-9 max-w-[13ch] text-foreground sm:mt-11">
              {t.titleLead}{" "}
              <span className="accent-italic normal-case tracking-normal">{t.accent}</span>
            </h2>

            <p className="lead mt-7 max-w-[40ch]">{t.lead}</p>

            {/* Ficha de contacto: etiqueta izquierda, dato derecha, filete entre medias */}
            <div className="mt-11 max-w-[34rem]">
              <div className="rule" />
              {FICHA.map((row) => (
                <div key={row.key}>
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-baseline justify-between gap-6 py-4 transition-colors"
                  >
                    <span className="meta">{t[row.key]}</span>
                    <span className="data transition-colors group-hover:text-foreground/60">
                      {row.value}
                    </span>
                  </a>
                  <div className="rule" />
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal relative">
            <span className="badge badge-solid absolute -top-3 right-5 z-20">
              {t.badge}
            </span>
            <div className="panel overflow-hidden">
              <ContactFormEmbed loadDelay={0} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
