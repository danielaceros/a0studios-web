import SectionHead from "./SectionHead";
import { PROCESO } from "@/lib/constants";

export default function Proceso() {
  return (
    <section id="proceso" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead num="05" label="Proceso" title="Cómo" accent="funciona" />

        <div className="mt-14 grid gap-3 sm:mt-20 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROCESO.map((step) => (
            <div
              key={step.step}
              className="reveal glass glass-hover flex flex-col gap-5 rounded-2xl p-7 sm:p-8"
            >
              <span className="font-heading text-[clamp(2.6rem,6vw,4rem)] leading-none tracking-tight text-white/18">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-[1.05rem] uppercase leading-[1.2] tracking-tight text-foreground sm:text-[1.15rem]">
                {step.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.75] text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
