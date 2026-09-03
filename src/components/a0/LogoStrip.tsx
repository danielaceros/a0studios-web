import Image from "next/image";

export default function LogoStrip() {
  return (
    <section aria-label="Clientes" className="border-y border-line py-8 sm:py-10">
      <div className="mx-auto mb-7 flex max-w-[1360px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <span className="tick" aria-hidden="true" />
        <p className="meta">Han grabado aquí</p>
      </div>

      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="marquee-track items-center gap-10 sm:gap-12">
          {/* 6 copias: a cualquier ancho de pantalla (incluidos monitores ultrawide)
              siempre hay contenido cubriendo el viewport, así el loop nunca muestra hueco. */}
          {[0, 1, 2, 3, 4, 5].map((copy) => (
            <Image
              key={copy}
              src="/optimized/logos-banner-trim.png"
              alt={copy === 0 ? "FIFA, IFEMA, Cinesa y Cámara de Comercio de Madrid" : ""}
              aria-hidden={copy !== 0}
              width={894}
              height={81}
              className="h-7 w-auto max-w-none opacity-40 brightness-0 invert sm:h-8"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
