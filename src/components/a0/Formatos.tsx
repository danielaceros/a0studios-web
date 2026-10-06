import SectionHead from "./SectionHead";
import type { Lang } from "@/lib/i18n";
import { formatosContent } from "@/lib/i18n/content/formatos";

// Ordenado por objetivo, no por tipo de vídeo: el cliente viene a conseguir
// algo (vender, captar, crecer) y el formato se deriva de eso.

export default function Formatos({ lang }: { lang: Lang }) {
  const t = formatosContent[lang];
  return (
    <section
      id="formatos"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label={t.label}
          title={t.title}
          accent={t.accent}
          lead={t.lead}
        />

        {/* Lista editorial sobre filetes */}
        <div className="mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="rule" />
          {t.objetivos.map((o, i) => (
            <div key={o.title} className="reveal">
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-4 py-8 sm:py-10 md:grid-cols-[4rem_minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-x-10">
                <span className="index text-foreground/30 transition-colors duration-300 group-hover:text-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-3">
                  <p className="meta">{o.objetivo}</p>
                  <h3 className="font-heading text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.08] tracking-[-0.028em] text-foreground">
                    {o.title}
                  </h3>
                </div>

                <div className="col-span-2 flex flex-col gap-5 md:col-span-1 md:col-start-3">
                  <p className="prose-body max-w-[46ch] text-[0.92rem]">{o.desc}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={t.piezasAria(o.title)}>
                    {o.piezas.map((p) => (
                      <li key={p} className="badge">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rule" />
            </div>
          ))}
        </div>

        {/* Qué incluye — pares dato/apoyo, sin cajas: aire y filete */}
        <div className="reveal mt-14 grid gap-x-10 gap-y-10 sm:mt-[clamp(3.5rem,5vw,5rem)] md:grid-cols-2 xl:grid-cols-4">
          {t.incluye.map((b) => (
            <div key={b.title} className="flex flex-col gap-3.5">
              <span className="tick" aria-hidden="true" />
              <h4 className="font-heading text-[1.02rem] leading-[1.3] tracking-[-0.018em] text-foreground">
                {b.title}
              </h4>
              <p className="prose-body text-[0.89rem]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
