import SectionHead from "./SectionHead";
import { FAQS } from "@/lib/constants";

export default function Faq() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead label="Preguntas frecuentes" title="Lo que suele" accent="preguntarse" />

        <div className="mt-14 sm:mt-20">
          <div className="rule" />
          {FAQS.map((faq, i) => (
            <details key={faq.question} className="reveal group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 sm:py-9 [&::-webkit-details-marker]:hidden">
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="label shrink-0 text-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-[clamp(1.1rem,2.4vw,1.7rem)] leading-[1.2] tracking-tight text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-lg leading-none text-foreground/40 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-9 sm:pl-[calc(5rem+0.5rem)]">
                <p className="max-w-[70ch] text-[0.95rem] leading-[1.85] text-muted sm:text-[1rem]">
                  {faq.answer}
                </p>
              </div>
              <div className="rule" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
