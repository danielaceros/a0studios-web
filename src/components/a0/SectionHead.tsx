type Props = {
  /** Ej. "El estudio" — etiqueta de sección, en Manrope trackeado */
  label: string;
  /** Titular en caja natural */
  title: string;
  /** Palabra en cursiva serif que cierra el titular (acento de marca) */
  accent?: string;
  /** Texto de apoyo — en escritorio cae a la columna derecha */
  lead?: string;
  className?: string;
};

/**
 * Cabecera de sección — cabecera editorial de "hoja de rodaje".
 *
 * Todas las secciones cuelgan del mismo filete de 1 px con la marca de
 * encuadre y la etiqueta a la izquierda. Debajo, el titular ocupa la columna
 * ancha y el texto de apoyo cae a la derecha alineado al pie del titular:
 * así se compone la línea de base en vez de dejar medio viewport vacío.
 */
export default function SectionHead({ label, title, accent, lead, className }: Props) {
  return (
    <header className={`reveal ${className ?? ""}`}>
      <div className="rule" />
      <div className="flex items-center gap-3 pt-4">
        <span className="tick" aria-hidden="true" />
        <p className="meta">{label}</p>
      </div>

      <div
        className={`mt-9 sm:mt-11 ${
          lead
            ? "grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end lg:gap-14"
            : ""
        }`}
      >
        <h2 className="display max-w-[16ch] text-foreground">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="accent-italic normal-case tracking-normal">{accent}</span>
            </>
          ) : null}
        </h2>

        {lead ? <p className="lead max-w-[44ch] lg:pb-2">{lead}</p> : null}
      </div>
    </header>
  );
}
