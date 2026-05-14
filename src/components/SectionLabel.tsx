import clsx from "clsx";

type SectionLabelProps = {
  number: string;
  label: string;
  centered?: boolean;
};

const SectionLabel = ({ number, label, centered = false }: SectionLabelProps) => {
  return (
    <div
      className={clsx(
        "mb-5 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--accent)]",
        centered && "justify-center",
      )}
    >
      <span>{number}</span>
      <span className="h-px w-8 bg-[var(--accent)] shadow-[0_0_12px_rgba(77,159,255,0.45)]" />
      <span>{label}</span>
      {!centered && (
        <span className="hidden h-px max-w-20 flex-1 bg-[var(--accent)] opacity-40 sm:block" />
      )}
    </div>
  );
};

export default SectionLabel;
