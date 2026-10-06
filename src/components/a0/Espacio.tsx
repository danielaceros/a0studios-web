import SectionHead from "./SectionHead";
import BtsMarquee from "./BtsMarquee";
import { NAP } from "@/lib/constants";
import type { Lang } from "@/lib/i18n";
import { espacioContent } from "@/lib/i18n/content/espacio";

export default function Espacio({ lang }: { lang: Lang }) {
  const t = espacioContent[lang];
  return (
    <section
      id="espacio"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label={t.head.label}
          title={t.head.title}
          accent={t.head.accent}
          lead={t.head.lead}
        />

        {/* Carrusel ambiental de BTS — 100% pasivo, sin interacción (ver BtsMarquee) */}
        <div className="reveal mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <BtsMarquee lang={lang} />
        </div>

        {/* Ficha de ubicación — datos sobre filetes, como una hoja de rodaje */}
        <div className="reveal panel mt-10 flex flex-col gap-8 px-6 py-8 sm:mt-12 sm:px-10 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="meta">{t.whereLabel}</p>
            <p className="mt-4 font-heading text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.03em] text-foreground">
              {NAP.streetAddress}
            </p>
            <div className="mt-6 flex flex-col gap-0 sm:max-w-[30rem]">
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">{t.neighborhood}</span>
                <span className="data">{t.neighborhoodValue}</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">{t.metro}</span>
                <span className="data">{t.metroValue}</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">{t.rail}</span>
                <span className="data">{t.railValue}</span>
              </div>
              <div className="rule" />
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-fit shrink-0"
          >
            {t.maps}
          </a>
        </div>
      </div>
    </section>
  );
}
