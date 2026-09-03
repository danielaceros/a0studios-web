import SectionHead from "./SectionHead";
import { FAQS } from "@/lib/constants";

export default function Faq() {
  return (
    <section
      id="faq"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead label="Preguntas frecuentes" title="Lo que suele" accent="preguntarse" />

        <div className="mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="rule" />
          {FAQS.map((faq, i) => (
            <details key={faq.question} className="reveal group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 sm:py-8 [&::-webkit-details-marker]:hidden">
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="index shrink-0 text-foreground/30 transition-colors duration-300 group-hover:text-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading max-w-[46ch] text-[clamp(1.05rem,2.1vw,1.5rem)] leading-[1.25] tracking-[-0.025em] text-foreground">
                    {faq.question}
                  </h3>
                </div>

                {/* Cruz dibujada con dos filetes — sin glifo ni fuente extra */}
                <span
                  aria-hidden="true"
                  className="relative mt-2 block h-3 w-3 shrink-0"
                >
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/45 transition-colors duration-300 group-open:bg-foreground" />
                  <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-foreground/45 transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <div className="pb-8 sm:pl-[calc(4rem+0.75rem)]">
                <p className="max-w-[68ch] text-[0.94rem] leading-[1.85] text-muted sm:text-[0.98rem]">
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
