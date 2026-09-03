import { BENEFICIOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#0e0e0e] px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:tracking-[0.4em]">
            02 · BENEFICIOS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Lo que te Llevas.
          </h2>
        </ScrollReveal>

        {/* Editorial list with hover effects */}
        <div className="mt-14 flex flex-col sm:mt-16 lg:mt-20">
          {BENEFICIOS.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.06}>
              <div className="group grid border-t border-border px-3 py-8 transition-colors duration-300 hover:bg-card sm:px-0 md:grid-cols-12 md:gap-8 md:py-12 md:px-4">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Title */}
                <div className="mt-1 md:col-span-4 md:mt-0">
                  <h3 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] uppercase tracking-wide text-foreground">
                    {b.title}
                  </h3>
                </div>
                {/* Description */}
                <div className="mt-3 md:col-span-5 md:col-start-6 md:mt-0">
                  <p className="max-w-lg text-base leading-[1.8] text-muted sm:text-[1.05rem]">
                    {b.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden items-center justify-end md:col-span-1 md:col-start-12 md:flex">
                  <span className="translate-x-0 font-mono text-lg text-muted opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent group-hover:opacity-100">
                    &rarr;
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-6 text-center sm:mt-16">
            <a
              href="#contacto"
              className="inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
            >
              Graba Conmigo →
            </a>
            <p className="mt-2 text-xs text-muted">
              Sin compromiso · Respuesta en menos de 1h
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
