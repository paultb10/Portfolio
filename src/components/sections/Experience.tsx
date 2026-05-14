"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

const experiences = [
    {
        company: "Endava · Cluj-Napoca",
        role: "Junior Developer",
        desc: "Selected for a hands-on Data & AI training program focused on enterprise clients.\n• Developing and optimizing data pipelines and machine learning models.\n• Collaborating with cross-functional teams to build cloud-based AI applications and translate technical data into business impact.",
        date: "Feb 2026 — present",
    },
  {
    company: "Betfair Romania Development · Cluj-Napoca",
    role: "Frontend Bootcamp",
    desc: "Intensive frontend development programme focused on modern web technologies and best practices in a professional environment.",
    date: "Oct 2024 — Dec 2024",
  },
  {
    company: "Lasting Software · Timișoara",
    role: "Software Engineer Intern — Flex-Space",
    desc: "Contributed to frontend development of the Flex-Space product, building responsive UI components and refining user experience flows.",
    date: "15 Jul 2024 — 30 Aug 2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-12 py-[120px]">
      <FadeInView>
        <SectionLabel number="03" label="Experience" />
        <h2
          className="font-bebas leading-none mb-16"
          style={{
            fontSize: "clamp(48px, 7vw, 100px)",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 32px rgba(0,0,0,0.7)",
          }}
        >
          Where I&apos;ve<br />Worked
        </h2>
      </FadeInView>

      <div className="flex flex-col gap-0.5">
        {experiences.map((exp, i) => (
          <FadeInView key={exp.role} delay={i * 0.1}>
            <motion.div
              whileHover={{ backgroundColor: "var(--bg3)" }}
              className="border grid gap-6 items-start px-10 py-9 relative overflow-hidden"
              style={{
                background: "var(--bg2)",
                borderColor: "var(--border)",
                gridTemplateColumns: "1fr auto",
              }}
            >
              {/* left accent bar */}
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-0"
                style={{ background: "var(--accent)", boxShadow: "0 0 12px rgba(77,159,255,0.5)" }}
                whileHover={{ width: 3 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <p
                  className="font-mono text-[0.7rem] tracking-[0.15em] uppercase mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.company}
                </p>
                <h3
                  className="font-bebas text-[1.9rem] leading-none mb-3"
                  style={{
                    color: "var(--text)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  {exp.role}
                </h3>
                <p className="text-[0.88rem] leading-[1.7]" style={{ color: "#b0ada6" }}>
                  {exp.desc}
                </p>
              </div>
              <div
                className="font-mono text-[0.65rem] tracking-[0.1em] pt-1 whitespace-nowrap"
                style={{ color: "#777" }}
              >
                {exp.date}
              </div>
            </motion.div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
