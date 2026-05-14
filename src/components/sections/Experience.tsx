"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  date: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Endava",
    location: "Cluj-Napoca",
    role: "Junior Developer",
    date: "Feb 2026 - May 2026",
    highlights: [
      "Selected for a hands-on Data & AI training program focused on enterprise clients.",
      "Developed and optimized data pipelines, machine learning workflows, and cloud-based AI applications.",
      "Collaborated with cross-functional teams to translate technical data into business impact.",
    ],
  },
  {
    company: "Betfair Romania Development",
    location: "Cluj-Napoca",
    role: "Frontend Bootcamp",
    date: "Oct 2024 - Dec 2024",
    highlights: [
      "Completed an intensive frontend development program in a professional engineering environment.",
      "Practiced modern web foundations, responsive UI implementation, and maintainable frontend patterns.",
    ],
  },
  {
    company: "Lasting Software",
    location: "Timisoara",
    role: "Software Engineer Intern - Flex-Space",
    date: "Jul 2024 - Aug 2024",
    highlights: [
      "Contributed to frontend development for the Flex-Space product.",
      "Built responsive UI components and refined user experience flows with production constraints in mind.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionLabel number="03" label="Experience" />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="font-bebas text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9] tracking-normal text-[var(--text)]">
              Where craft met real constraints.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Each role added a different layer: product UI implementation, professional
              frontend practice, and a stronger bridge into enterprise AI and data work.
            </p>
          </div>
        </FadeInView>

        <div className="mt-16 grid gap-4">
          {experiences.map((experience, index) => (
            <FadeInView key={`${experience.company}-${experience.role}`} delay={index * 0.08}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition duration-200 hover:border-[var(--accent)] sm:p-7 lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-8"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-[var(--accent)] transition duration-300 group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <div className="mb-5 lg:mb-0">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {experience.company}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{experience.location}</p>
                </div>

                <div>
                  <h3 className="font-bebas text-4xl leading-none text-[var(--text)]">
                    {experience.role}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent3)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)] lg:mt-1 lg:whitespace-nowrap">
                  {experience.date}
                </p>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
