import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

type InfoRow = {
  label: string;
  value: string;
};

type Strength = {
  title: string;
  description: string;
};

const infoRows: InfoRow[] = [
  { label: "Location", value: "Cluj-Napoca, Romania" },
  { label: "Education", value: "B.Sc. Computer Science + M.Sc. Engineering Management" },
  { label: "Languages", value: "Romanian, English, German" },
  { label: "Focus", value: "Frontend engineering, UI/UX, full-stack, practical AI" },
  { label: "Tools", value: "Figma, IntelliJ, WebStorm, Jira, Git" },
];

const strengths: Strength[] = [
  {
    title: "Interface systems",
    description: "I turn rough ideas into clean flows, reusable UI patterns, and responsive screens that feel intentional.",
  },
  {
    title: "React delivery",
    description: "I build with modern React and Next.js, keeping components readable, accessible, and easy to evolve.",
  },
  {
    title: "AI and data fluency",
    description: "My recent work bridges frontend thinking with Data & AI training, automation, and product-oriented workflows.",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionLabel number="01" label="About" />
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h2 className="font-bebas text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9] tracking-normal text-[var(--text)]">
              Builder with a designer&apos;s eye.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I am a Computer Science graduate from the Technical University of
              Cluj-Napoca who cares about the full experience: how a product looks,
              how it behaves, how fast people understand it, and how confidently a team
              can keep improving it.
            </p>
          </div>
        </FadeInView>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.86fr)]">
          <FadeInView direction="left" delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-3">
              {strengths.map((strength, index) => (
                <article
                  key={strength.title}
                  className="min-h-56 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 font-bebas text-3xl leading-none text-[var(--text)]">
                    {strength.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-[var(--accent)] bg-[var(--bg2)] px-6 py-5 text-lg leading-8 text-[var(--text)]">
              I create interfaces that work clearly, move smoothly, and leave enough
              personality for people to remember them.
            </blockquote>
          </FadeInView>

          <FadeInView direction="right" delay={0.2}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 shadow-panel">
              <div className="border-b border-[var(--border)] pb-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Profile snapshot
                </p>
                <p className="mt-3 text-2xl font-bold leading-8 text-[var(--text)]">
                  UI/UX Designer, Frontend & Full-stack Developer
                </p>
              </div>

              <dl className="divide-y divide-[var(--border)]">
                {infoRows.map((row) => (
                  <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-semibold leading-6 text-[var(--text)]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-2 rounded-lg border border-[var(--accent3)] bg-[rgba(77,255,203,0.06)] px-4 py-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent3)]">
                  Frontend, UI/UX and full-stack focus
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default About;
