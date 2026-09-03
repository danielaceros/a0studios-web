import Image from "next/image";

export default function LogoStrip() {
  return (
    <section aria-label="Clientes" className="border-y border-white/10 py-7 sm:py-9">
      <p className="label mb-6 text-center text-foreground/35">Han grabado aquí</p>

      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="marquee-track items-center gap-16 sm:gap-24">
          {[0, 1].map((copy) => (
            <Image
              key={copy}
              src="/optimized/logos-banner.png"
              alt={copy === 0 ? "FIFA, IFEMA, Cinesa y Cámara de Comercio de Madrid" : ""}
              aria-hidden={copy === 1}
              width={1200}
              height={56}
              className="h-7 w-auto max-w-none opacity-45 brightness-0 invert sm:h-9"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
