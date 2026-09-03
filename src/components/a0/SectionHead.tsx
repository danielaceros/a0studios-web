type Props = {
  /** Ej. "El estudio" — se muestra en cursiva, sin numerar */
  label: string;
  /** Titular en caja natural */
  title: string;
  /** Palabra en cursiva serif que cierra el titular */
  accent?: string;
  /** Texto de apoyo bajo el titular */
  lead?: string;
  className?: string;
};

export default function SectionHead({ label, title, accent, lead, className }: Props) {
  return (
    <header className={`reveal ${className ?? ""}`}>
      <p className="eyebrow">{label}</p>

      <h2 className="display mt-4 max-w-[18ch] text-foreground sm:mt-5">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="accent-italic normal-case tracking-normal">{accent}</span>
          </>
        ) : null}
      </h2>

      {lead ? (
        <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-[1.75] text-muted sm:mt-7 sm:text-[1.05rem]">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
