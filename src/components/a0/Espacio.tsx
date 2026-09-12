import SectionHead from "./SectionHead";
import BtsMarquee from "./BtsMarquee";

export default function Espacio() {
  return (
    <section
      id="espacio"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="El espacio"
          title="Dónde se"
          accent="graba"
          lead="Un ático en Madrid centro con terraza, sala y set de podcast, a cinco minutos andando de Atocha. Una sola sesión al día, así que ese día es solo tuyo."
        />

        {/* Carrusel ambiental de BTS — 100% pasivo, sin interacción (ver BtsMarquee) */}
        <div className="reveal mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <BtsMarquee />
        </div>

        {/* Ficha de ubicación — datos sobre filetes, como una hoja de rodaje */}
        <div className="reveal panel mt-10 flex flex-col gap-8 px-6 py-8 sm:mt-12 sm:px-10 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="meta">Dónde estamos</p>
            <p className="mt-4 font-heading text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.03em] text-foreground">
              Ronda de Atocha 16 · Planta 7
            </p>
            <div className="mt-6 flex flex-col gap-0 sm:max-w-[30rem]">
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Barrio</span>
                <span className="data">Madrid centro</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Metro</span>
                <span className="data">Atocha Renfe (L1) · 5 min</span>
              </div>
              <div className="rule" />
              <div className="flex items-baseline justify-between gap-6 py-3">
                <span className="meta">Cercanías</span>
                <span className="data">Atocha · 5 min</span>
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
            Abrir en Maps
          </a>
        </div>
      </div>
    </section>
  );
}
