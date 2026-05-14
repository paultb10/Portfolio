"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

const groups = [
    {
        icon: "⚡",
        title: "Frontend",
        tags: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML", "CSS", "Tailwind"],
    },
    {
        icon: "🛠️",
        title: "Backend & DB",
        tags: ["Java", "Spring Boot", "PostgresSQL", "PL/SQL"],
    },
    {
        icon: "🤖",
        title: "AI & Automation",
        tags: [
            "Python",
            "Custom GPTs",
            "ETL",
            "Generative AI",
            "Prompt Engineering",
            "LLM Integration",
            "OpenAI API"
        ],
    },
    {
        icon: "🎨",
        title: "Design",
        tags: ["UI/UX Design", "Figma", "Prototyping", "Design Systems"],
    },
    {
        icon: "⚙️",
        title: "Tools & Methodology",
        tags: ["Agile", "Scrum", "Jira", "Miro", "Git", "GitHub Copilot"],
    },
];

export default function Skills() {
  return (
    <section id="skills" className="px-12 py-[120px]" style={{ background: "var(--bg2)" }}>
      <FadeInView>
        <SectionLabel number="02" label="Skills" />
        <h2
          className="font-bebas leading-none mb-16"
          style={{
            fontSize: "clamp(48px, 7vw, 100px)",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 32px rgba(0,0,0,0.7)",
          }}
        >
          What I<br />Know
        </h2>
      </FadeInView>

      <div className="grid grid-cols-3 gap-0.5">
        {groups.map((group, i) => (
          <FadeInView key={group.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ borderColor: "rgba(77,159,255,0.4)" }}
              className="p-9 border relative overflow-hidden h-full"
              style={{ background: "var(--bg3)", borderColor: "var(--border)" }}
            >
              {/* gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, transparent 60%, rgba(77,159,255,0.04))" }}
              />
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3
                className="font-bebas text-2xl tracking-wider mb-5"
                style={{
                  color: "var(--accent)",
                  textShadow: "0 0 20px rgba(77,159,255,0.3)",
                }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ borderColor: "var(--accent3)", color: "var(--accent3)" }}
                    className="font-mono text-[0.68rem] tracking-wider px-3 py-1.5 border cursor-default"
                    style={{ borderColor: "#333", color: "var(--muted)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
