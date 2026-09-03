import { FAQS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#0e0e0e] px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            07 · FAQ
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Preguntas Frecuentes.
          </h2>
        </ScrollReveal>

        <div className="mt-14 sm:mt-20">
          <ScrollReveal delay={0.16}>
            <div className="border-t border-foreground/10">
              {FAQS.map((faq, i) => (
                <Accordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.24}>
          <div className="mt-12 text-center sm:mt-16">
            <p className="mb-6 text-base text-muted sm:text-[1.05rem]">
              ¿Listo para empezar? Presupuesto personalizado en menos de 1 hora.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
            >
              Pide tu Presupuesto →
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
