"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

type Project = {
  number: string;
  tag: string;
  title: string;
  description: string;
  outcomes: string[];
  stack: string[];
  link: string;
  spanClass: string;
  visualClass: string;
};

const projects: Project[] = [
  {
    number: "01",
    tag: "Full-stack commerce",
    title: "Ecommerce Clothing App",
    description:
      "A full-featured shopping experience with dynamic product listings, authentication, cart management, order processing, and an interactive chatbot.",
    outcomes: ["End-to-end shopping flow", "Spring Boot API integration", "AI-assisted customer interaction"],
    stack: ["Next.js", "JavaScript", "Spring Boot", "Java", "PostgreSQL"],
    link: "https://github.com/paultb10/Clothing-Shop",
    spanClass: "lg:col-span-7",
    visualClass:
      "bg-[radial-gradient(circle_at_22%_18%,rgba(77,159,255,0.36),transparent_30%),linear-gradient(135deg,var(--bg4),var(--bg2))]",
  },
  {
    number: "02",
    tag: "Mobile AI app",
    title: "Recipe Finder",
    description:
      "A mobile application that generates personalized recipes and lets users quickly regenerate new culinary options when they want more inspiration.",
    outcomes: ["Prompt-led recipe generation", "Three-option result flow", "React Native mobile UI"],
    stack: ["React Native", "Expo", "Generative AI", "Prompt engineering", "API integration"],
    link: "https://github.com/paultb10/RecipeFinder",
    spanClass: "lg:col-span-5",
    visualClass:
      "bg-[radial-gradient(circle_at_80%_20%,rgba(77,255,203,0.26),transparent_32%),linear-gradient(135deg,var(--bg3),var(--bg2))]",
  },
  {
    number: "03",
    tag: "Secure e-commerce",
    title: "Pravalia lui Paul Clothing Store",
    description:
      "A scalable e-commerce platform with role-based access, Stripe payments, automated inventory workflows, PDF invoices, XML export, and real-time WebSocket features.",
    outcomes: ["Role-based admin and user flows", "Payments and invoices", "Inventory and export automation"],
    stack: ["React", "Spring Boot", "PostgreSQL", "Stripe API", "WebSockets"],
    link: "https://github.com/LAB-PS-2024-30236/Paul_Sirbu/tree/main",
    spanClass: "lg:col-span-12",
    visualClass:
      "bg-[radial-gradient(circle_at_18%_25%,rgba(255,77,109,0.25),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(77,159,255,0.2),transparent_34%),linear-gradient(135deg,var(--bg3),var(--bg2))]",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-[var(--bg2)] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionLabel number="04" label="Projects" />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-bebas text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9] tracking-normal text-[var(--text)]">
              Selected work with real product surface.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              These projects show the range I want my portfolio to communicate:
              commerce UX, full-stack systems, mobile AI concepts, and practical integrations.
            </p>
          </div>
        </FadeInView>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {projects.map((project, index) => (
            <FadeInView key={project.number} delay={index * 0.08} className={project.spanClass}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group grid h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg3)] shadow-sm transition duration-200 hover:border-[var(--accent)] lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className={clsx("relative min-h-64 p-6", project.visualClass)}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.24))]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white">
                        {project.tag}
                      </span>
                      <span className="font-bebas text-7xl leading-none text-white/20">
                        {project.number}
                      </span>
                    </div>
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/65">
                        Case signal
                      </p>
                      <p className="mt-2 max-w-xs font-bebas text-4xl leading-none text-white">
                        {project.outcomes[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] tracking-normal text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {project.description}
                  </p>

                  <ul className="mt-6 grid gap-3">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3 text-sm leading-6 text-[var(--text)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent3)]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(77,159,255,0.25)] bg-[rgba(77,159,255,0.08)] px-3 py-1.5 font-mono text-[0.65rem] text-[var(--accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-3 rounded-md border border-[var(--border)] px-5 py-2.5 font-syne text-sm font-bold uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg3)]"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    View repository
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
