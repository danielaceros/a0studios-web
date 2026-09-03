interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function Accordion({ question, answer, defaultOpen = false }: AccordionProps) {
  return (
    <details open={defaultOpen} className="group border-b border-foreground/10 transition-colors duration-300 hover:bg-card">
      <summary className="flex w-full cursor-pointer items-center justify-between px-2 py-8 text-left md:px-4 [&::-webkit-details-marker]:hidden list-none">
        <span className="pr-8 font-heading text-[clamp(1.3rem,3vw,1.6rem)] uppercase tracking-wide text-foreground">
          {question}
        </span>
        <span
          className="shrink-0 font-mono text-xl text-accent/40 transition-transform duration-300 will-change-transform group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="px-2 pb-8 md:px-4">
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted">
          {answer}
        </p>
      </div>
    </details>
  );
}
