const MARQUEE_COPY =
  "He filmado para FIFA, IFEMA y Cinesa · Ahora te toca a ti · Ático en Madrid centro · ";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-t border-border/50 py-4 sm:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(0.8rem,1.5vw,0.95rem)] uppercase tracking-[0.25em] text-foreground/15 sm:tracking-[0.4em]"
          >
            {MARQUEE_COPY}
          </span>
        ))}
      </div>
    </div>
  );
}
