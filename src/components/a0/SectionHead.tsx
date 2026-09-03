type Props = {
  /** Ej. "03" */
  num: string;
  /** Ej. "TRABAJOS" */
  label: string;
  /** Parte en mayúsculas del titular */
  title: string;
  /** Palabra en cursiva serif que cierra el titular */
  accent?: string;
  /** Texto de apoyo bajo el titular */
  lead?: string;
  className?: string;
};

export default function SectionHead({ num, label, title, accent, lead, className }: Props) {
  return (
    <header className={`reveal ${className ?? ""}`}>
      <p className="label">
        {num} <span className="mx-1 opacity-40">·</span> {label}
      </p>

      <h2 className="display mt-5 max-w-[16ch] text-foreground sm:mt-7">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="accent-italic normal-case tracking-normal">{accent}</span>
          </>
        ) : null}
      </h2>

      {lead ? (
        <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-[1.75] text-muted sm:mt-8 sm:text-[1.05rem]">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
