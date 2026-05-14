interface SectionLabelProps {
  number: string;
  label: string;
  centered?: boolean;
}

export default function SectionLabel({ number, label, centered }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-5 font-mono text-[0.65rem] tracking-[0.25em] uppercase ${
        centered ? "justify-center" : ""
      }`}
      style={{ color: "var(--accent)" }}
    >
      {number} — {label}
      {!centered && (
        <span
          className="flex-1 max-w-[60px] h-px"
          style={{
            background: "var(--accent)",
            boxShadow: "0 0 8px rgba(77,159,255,0.4)",
          }}
        />
      )}
    </div>
  );
}
