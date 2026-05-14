import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

const info = [
  { key: "Location", val: "Cluj-Napoca, Romania 🇷🇴" },
  { key: "Education", val: "B.Sc. CS & Engineering · M.Sc. Management & Business Engineering (in progress)" },
  { key: "Languages", val: "Romanian · English · German" },
  { key: "Focus", val: "Frontend and UI/UX Design" },
  { key: "Tools", val: "Figma · InteliJ · Webstorm" },
];

export default function About() {
  return (
    <section id="about" className="px-12 py-[120px]">
      <FadeInView>
        <SectionLabel number="01" label="About" />
        <h2
          className="font-bebas leading-none mb-16"
          style={{
            fontSize: "clamp(48px, 7vw, 100px)",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 32px rgba(0,0,0,0.7)",
          }}
        >
          Who I<br />Am
        </h2>
      </FadeInView>

      <div className="grid grid-cols-2 gap-20 items-start">
        <FadeInView delay={0.1} direction="left">
          <div>
            <p className="text-[1.05rem] leading-[1.8] mb-5" style={{ color: "#b8b5ae" }}>
              I&apos;m a{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                Computer Science Graduate
              </strong>{" "}
              at Technical University of Cluj-Napoca with a deep passion for the
              intersection of design and technology. I believe great software should
              be as beautiful as it is functional.
            </p>
            <p className="text-[1.05rem] leading-[1.8]" style={{ color: "#b8b5ae" }}>
              My journey into UI/UX and frontend development has shaped how I think
              about digital products — with{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                creativity, precision, and user empathy
              </strong>{" "}
              at the core of every decision.
            </p>
            <blockquote
              className="mt-10 p-6"
              style={{
                borderLeft: "2px solid var(--accent)",
                background: "rgba(77,159,255,0.04)",
              }}
            >
              <p className="font-syne italic text-[1.1rem] leading-relaxed" style={{ color: "var(--text)" }}>
                &ldquo;I create interfaces that not only work flawlessly but leave a lasting impression.&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeInView>

        <FadeInView delay={0.2} direction="right">
          <div className="pt-20">
            {info.map((row, i) => (
              <div
                key={row.key}
                className="flex justify-between items-baseline py-4"
                style={{
                  borderBottom: i < info.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span className="font-mono text-[0.7rem] tracking-[0.1em] uppercase" style={{ color: "#777" }}>
                  {row.key}
                </span>
                <span className="text-[0.92rem] font-medium" style={{ color: "var(--text)" }}>
                  {row.val}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-baseline pt-4">
              <span className="font-mono text-[0.7rem] tracking-[0.1em] uppercase" style={{ color: "#777" }}>
                Status
              </span>
              <span className="text-[0.92rem] font-medium" style={{ color: "var(--accent3)" }}>
                ● Open to opportunities
              </span>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
