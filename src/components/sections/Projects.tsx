"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

const projects = [
    {
        num: "01",
        tag: "Full-Stack App",
        title: "Ecommerce\nClothing App",
        desc: "A full-featured shopping experience with dynamic product listings, user authentication, cart management, order processing, an interactive chatbot and many more — built with a modern full-stack architecture.",
        stack: ["Next JS", "JavaScript", "Spring Boot", "Java", "PostgreSQL"],
        link: "https://github.com/paultb10/Clothing-Shop",
    },
    {
        num: "02",
        tag: "Mobile AI Application",
        title: "Recipe\nFinder",
        desc: "A mobile application that leverages AI to generate personalized recipes. It provides users with 3 distinct culinary options for any dish and allows instant regeneration of new sets if they seek more inspiration.",
        stack: ["React Native", "Expo", "Gen AI", "Prompt Engineering", "API Integration"],
        link: "https://github.com/paultb10/RecipeFinder",
    },
    {
        num: "03",
        tag: "Full-Stack E-Commerce",
        title: "Pravalia lui Paul\nClothing Store",
        desc: "A scalable full-stack e-commerce solution architected with Spring Boot and React, featuring secure Stripe payment integration and real-time communication via WebSockets[cite: 11, 20, 300, 322]. The platform implements robust security protocols using Spring Security for granular role-based access control (Admin/User) and includes automated inventory management, PDF invoice generation, and XML data export capabilities[cite: 14, 289, 302, 348, 702].",
        stack: ["React", "Spring Boot", "PostgreSQL", "Stripe API", "WebSockets"],
        link: "https://github.com/LAB-PS-2024-30236/Paul_Sirbu/tree/main",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="px-12 py-[120px]" style={{ background: "var(--bg2)" }}>
            <FadeInView>
                <SectionLabel number="04" label="Projects" />
                <h2
                    className="font-bebas leading-none mb-16"
                    style={{
                        fontSize: "clamp(48px, 7vw, 100px)",
                        letterSpacing: "-0.01em",
                        textShadow: "0 4px 32px rgba(0,0,0,0.7)",
                    }}
                >
                    What I&apos;ve<br />Built
                </h2>
            </FadeInView>

            <div className="grid grid-cols-2 gap-0.5">
                {projects.map((project, i) => (
                    <FadeInView key={project.num} delay={i * 0.1}>
                        <motion.div
                            className="border p-10 relative overflow-hidden h-full"
                            style={{ background: "var(--bg3)", borderColor: "var(--border)" }}
                            whileHover={{ borderColor: "#333" }}
                        >
                            {/* hover radial glow */}
                            <motion.div
                                className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                                style={{
                                    background: "radial-gradient(circle at top right, rgba(77,159,255,0.08), transparent 70%)",
                                }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />

                            {/* ghost number */}
                            <span
                                className="absolute top-4 right-8 font-bebas leading-none pointer-events-none select-none"
                                style={{ fontSize: "5rem", color: "#1e1e1e" }}
                            >
                {project.num}
              </span>

                            <p
                                className="font-mono text-[0.65rem] tracking-[0.15em] uppercase mb-4"
                                style={{ color: "var(--accent2)" }}
                            >
                                ● {project.tag}
                            </p>
                            <h3
                                className="font-bebas text-[2.6rem] leading-none mb-4"
                                style={{
                                    color: "var(--text)",
                                    textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                                }}
                            >
                                {project.title.split("\n").map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h3>
                            <p className="text-[0.88rem] leading-[1.75] mb-7 max-w-[380px]" style={{ color: "#b0ada6" }}>
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="font-mono text-[0.65rem] px-3 py-1 border"
                                        style={{
                                            background: "rgba(77,159,255,0.1)",
                                            color: "var(--accent)",
                                            borderColor: "rgba(77,159,255,0.2)",
                                        }}
                                    >
                    {s}
                  </span>
                                ))}
                            </div>

                            {/* arrow link */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-10 right-10 w-12 h-12 flex items-center justify-center border text-xl no-underline"
                                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                                whileHover={{
                                    background: "var(--accent)",
                                    color: "#0a0a0a",
                                    borderColor: "var(--accent)",
                                    rotate: 45,
                                    boxShadow: "0 0 20px rgba(77,159,255,0.4)",
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                ↗
                            </motion.a>
                        </motion.div>
                    </FadeInView>
                ))}

                {/* Placeholder card */}
                <FadeInView delay={0.2}>
                    <div
                        className="border flex items-center justify-center flex-col gap-3 min-h-[320px]"
                        style={{ background: "#0d0d0d", borderColor: "#1a1a1a" }}
                    >
                        <span className="text-3xl opacity-20" style={{ color: "var(--accent)" }}>＋</span>
                        <span
                            className="font-mono text-[0.7rem] tracking-[0.2em] uppercase"
                            style={{ color: "#555" }}
                        >
              More coming soon
            </span>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}