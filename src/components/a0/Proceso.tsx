import SectionHead from "./SectionHead";
import { PROCESO } from "@/lib/constants";

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead label="El proceso" title="Cómo" accent="funciona" />

        {/* Cuatro tiempos sobre un mismo filete continuo */}
        <div className="reveal mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="rule" />
          <div className="grid-open grid-open--2 grid-open--4 grid md:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((step) => (
              <div
                key={step.step}
                className="group flex flex-col gap-4 py-8 pr-8 sm:py-10"
              >
                <span className="figure text-[clamp(2.4rem,5vw,3.4rem)] text-foreground/15 transition-colors duration-500 group-hover:text-foreground/35">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-[1.05rem] leading-[1.28] tracking-[-0.02em] text-foreground sm:text-[1.12rem]">
                  {step.title}
                </h3>
                <p className="prose-body max-w-[36ch] text-[0.89rem]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
