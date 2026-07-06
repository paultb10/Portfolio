"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

type SkillGroup = {
  code: string;
  title: string;
  summary: string;
  tags: string[];
};

const skillGroups: SkillGroup[] = [
  {
    code: "FE",
    title: "Frontend",
    summary: "Modern interfaces with typed, maintainable React architecture.",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML", "CSS", "Tailwind"],
  },
  {
    code: "UX",
    title: "Product design",
    summary: "User flows, responsive layouts, prototypes, and visual systems.",
    tags: ["UI/UX", "Figma", "Prototyping", "Design systems", "Interaction design"],
  },
  {
    code: "AI",
    title: "AI workflow",
    summary: "Practical automation and prompt-driven product experiments.",
    tags: ["Generative AI", "OpenAI API", "Prompt engineering", "LLM integration", "Custom GPTs", "n8n"],
  },
  {
    code: "BE",
    title: "Backend & data",
    summary: "Enough backend depth to collaborate across the full product surface.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "PL/SQL", "ETL"],
  },
  {
    code: "OP",
    title: "Delivery",
    summary: "Comfortable in collaborative teams with product, design, and engineering rituals.",
    tags: ["Agile", "Scrum", "Jira", "Miro", "Git", "GitHub Copilot"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 bg-[var(--bg2)] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionLabel number="02" label="Skills" />
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <h2 className="font-bebas text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9] tracking-normal text-[var(--text)]">
              The toolkit behind the polish.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              My strongest lane is the intersection: frontend that respects design,
              design that understands implementation, and AI/data work that can become
              a real feature instead of a demo.
            </p>
          </div>
        </FadeInView>

        <div className="mt-16 grid gap-4 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <FadeInView
              key={group.title}
              delay={index * 0.08}
              className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group h-full rounded-xl border border-[var(--border)] bg-[var(--bg3)] p-6 shadow-sm transition duration-200 hover:border-[var(--accent)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                      {group.code}
                    </p>
                    <h3 className="mt-4 font-bebas text-4xl leading-none text-[var(--text)]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg2)] font-mono text-xs text-[var(--muted)] transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{group.summary}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[0.65rem] text-[var(--muted)] transition duration-200 group-hover:border-[rgba(77,159,255,0.35)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
