"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroStat = {
  value: string;
  label: string;
};

type FocusItem = {
  label: string;
  value: string;
};

const heroStats: HeroStat[] = [
  { value: "03", label: "Featured projects" },
  { value: "2026", label: "Endava AI internship" },
  { value: "UI/UX", label: "Design-first builds" },
];

const focusItems: FocusItem[] = [
  { label: "Target roles", value: "Frontend, UI/UX and full-stack" },
  { label: "Recent", value: "Junior Developer at Endava" },
  { label: "Base", value: "Cluj-Napoca, Romania" },
];

const heroTags = ["React", "Next.js", "TypeScript", "Spring Boot", "Full-stack", "UI systems", "AI workflows"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[var(--bg)] px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pb-14"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(77,159,255,0.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(255,77,109,0.14),transparent_24%),linear-gradient(135deg,var(--bg)_0%,var(--bg2)_54%,var(--bg)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[var(--bg)] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
        <div className="max-w-4xl">
          <motion.div
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg2)] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)] shadow-panel"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent3)] shadow-[0_0_16px_rgba(77,255,203,0.7)]" />
            Frontend, UI/UX and full-stack roles
          </motion.div>

          <motion.p
            {...fadeUp(0.05)}
            className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent)]"
          >
            Portfolio / Product-minded builder
          </motion.p>

          <motion.h1
            {...fadeUp(0.12)}
            className="max-w-5xl font-bebas text-[clamp(4.1rem,11vw,9rem)] leading-[0.82] tracking-normal text-[var(--text)]"
          >
            Sirbu Paul
            <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--text)]">
              Dan
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            I design and build polished React experiences where interface craft,
            frontend engineering, and practical AI workflows meet in one product-ready system.
          </motion.p>

          <motion.div
            {...fadeUp(0.28)}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-6 py-3 text-center font-syne text-sm font-bold uppercase tracking-[0.08em] text-[#050505] shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
              aria-label="View selected projects"
            >
              View selected work
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href="/Sirbu%20Paul%20Dan.pdf"
              download="Sirbu-Paul-Dan-CV.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[var(--border)] bg-[var(--bg2)] px-6 py-3 text-center font-syne text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
              aria-label="Download Paul Sirbu CV"
            >
              Download CV
              <span aria-hidden="true">PDF</span>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.36)}
            className="mt-8 grid gap-3 border-y border-[var(--border)] py-4 sm:grid-cols-3"
            aria-label="Portfolio highlights"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-bebas text-4xl leading-none text-[var(--text)]">{stat.value}</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          {...fadeUp(0.28)}
          className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:justify-self-end"
          aria-label="Portfolio summary"
        >
          <div className="absolute -inset-5 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(77,159,255,0.12),transparent_44%,rgba(77,255,203,0.1))] opacity-80 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-panel">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                Profile snapshot
              </p>
              <span className="rounded-full border border-[var(--accent3)] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--accent3)]">
                Open to work
              </span>
            </div>

            <div className="grid min-h-[360px] grid-rows-[auto_1fr_auto] p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-bebas text-5xl leading-none text-[var(--text)]">
                    UI/UX
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Frontend + full-stack developer
                  </p>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--bg3)]">
                  <Image
                    src="/PS-balloon-dark-2.svg"
                    alt=""
                    width={56}
                    height={31}
                    className="h-[31px] w-14 opacity-90"
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {focusItems.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 rounded-lg border border-[var(--border)] bg-[var(--bg3)] px-4 py-3"
                  >
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[var(--text)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[0.65rem] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
