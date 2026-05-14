"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen grid grid-cols-2 px-12 items-center relative overflow-hidden"
            style={{
                background: `
          radial-gradient(ellipse 70% 70% at 10% 60%, rgba(77,159,255,0.08) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 80% 20%, rgba(77,159,255,0.04) 0%, transparent 60%)
        `,
            }}
        >
            {/* BG ghost text */}
            <span
                className="absolute bottom-0 left-0 font-bebas pointer-events-none select-none leading-none whitespace-nowrap"
                style={{
                    fontSize: "clamp(120px, 22vw, 340px)",
                    color: "transparent",
                    WebkitTextStroke: "1px #1e1e1e",
                    letterSpacing: "-0.02em",
                }}
            >
        PAUL
      </span>

            {/* LEFT */}
            <div className="relative z-10">
                <motion.div
                    {...fadeUp(0)}
                    className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase border px-3.5 py-1.5 mb-8"
                    style={{
                        color: "var(--accent)",
                        borderColor: "var(--accent)",
                        boxShadow: "0 0 20px rgba(77,159,255,0.15)",
                    }}
                >
                    <span style={{ fontSize: "0.5rem" }}>◆</span>
                    Available for work
                </motion.div>

                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-bebas leading-none"
                    style={{
                        fontSize: "clamp(64px, 9vw, 140px)",
                        letterSpacing: "-0.01em",
                        textShadow:
                            "0 0 80px rgba(77,159,255,0.3), 0 4px 40px rgba(0,0,0,0.9)",
                    }}
                >
                    Sîrbu
                    <span
                        className="block"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "2px var(--text)",
                            filter:
                                "drop-shadow(0 0 30px rgba(77,159,255,0.4)) drop-shadow(0 0 60px rgba(77,159,255,0.15))",
                        }}
                    >
            Paul Dan
          </span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.2)}
                    className="mt-7 text-[1.05rem] leading-[1.75] max-w-[420px]"
                    style={{ color: "#c0bdb5" }}
                >
                    UI/UX Designer &amp; Frontend Developer crafting{" "}
                    <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                        bold digital experiences
                    </strong>
                    . Based in Cluj-Napoca, Romania.
                </motion.p>

                <motion.div {...fadeUp(0.3)} className="mt-10 flex gap-4">
                    <a
                        href="#projects"
                        className="font-syne font-bold text-[0.85rem] tracking-[0.05em] uppercase px-8 py-3.5 transition-all duration-200"
                        style={{
                            background: "var(--accent)",
                            color: "#0a0a0a",
                            boxShadow: "0 4px 20px rgba(77,159,255,0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translate(-3px,-3px)";
                            e.currentTarget.style.boxShadow =
                                "6px 6px 0 var(--accent2), 0 4px 20px rgba(77,159,255,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translate(0,0)";
                            e.currentTarget.style.boxShadow =
                                "0 4px 20px rgba(77,159,255,0.3)";
                        }}
                    >
                        View Work
                    </a>
                    <a
                        href="/cv-paul-sirbu.pdf"
                        download
                        className="font-syne font-semibold text-[0.85rem] tracking-[0.05em] uppercase px-8 py-3.5 border transition-all duration-200"
                        style={{ borderColor: "#444", color: "var(--text)" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#444";
                            e.currentTarget.style.color = "var(--text)";
                        }}
                    >
                        ↓ Download CV
                    </a>
                </motion.div>
            </div>

            {/* RIGHT — Info card */}
            <motion.div
                {...fadeUp(0.4)}
                className="relative z-10 flex justify-end items-center"
            >
                <div
                    className="w-[340px] p-8 relative"
                    style={{
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                        boxShadow:
                            "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                >
                    {/* top accent bar */}
                    <span
                        className="absolute -top-px left-8 w-16 h-0.5"
                        style={{
                            background: "var(--accent)",
                            boxShadow: "0 0 12px rgba(77,159,255,0.6)",
                        }}
                    />

                    <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-2" style={{ color: "#777" }}>
                        Education
                    </p>

                    {/* B.Sc. */}
                    <div className="flex items-start gap-3 mb-4">
                        <p
                            className="font-bebas text-3xl leading-none shrink-0"
                            style={{ color: "var(--muted)" }}
                        >
                            B.Sc.
                        </p>
                        <div>
                            <p className="text-[0.82rem] leading-snug" style={{ color: "var(--muted)" }}>
                                Computer Science &amp; Engineering
                            </p>
                            <p className="text-[0.75rem]" style={{ color: "#555" }}>
                                Technical University of Cluj-Napoca
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        className="w-full mb-4"
                        style={{ height: "1px", background: "var(--border)" }}
                    />

                    {/* M.Sc. */}
                    <div className="flex items-start gap-3 mb-6">
                        <p
                            className="font-bebas text-3xl leading-none shrink-0"
                            style={{
                                color: "var(--accent)",
                                textShadow: "0 0 20px rgba(77,159,255,0.4)",
                            }}
                        >
                            M.Sc.
                        </p>
                        <div>
                            <p className="text-[0.82rem] leading-snug" style={{ color: "var(--muted)" }}>
                                Management &amp; Bussiness in Engineering
                            </p>
                            <p className="text-[0.75rem]" style={{ color: "#555" }}>
                                Technical University of Cluj-Napoca
                            </p>
                            <span
                                className="inline-block font-mono text-[0.6rem] tracking-[0.15em] uppercase mt-1 px-2 py-0.5 border"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                            >
                In progress
              </span>
                        </div>
                    </div>

                    <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-2" style={{ color: "#777" }}>
                        Current experience
                    </p>
                    <p className="text-[0.92rem] font-semibold mb-1" style={{ color: "var(--text)" }}>
                        Junior Developer
                    </p>
                    <p className="text-[0.82rem] mb-6" style={{ color: "var(--muted)" }}>
                        Endava
                    </p>

                    <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-3" style={{ color: "#777" }}>
                        Focus areas
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {["UI/UX", "React", "Next.js", "Frontend development"].map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-[0.68rem] px-3 py-1.5 border"
                                style={{ borderColor: "#333", color: "var(--muted)" }}
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ color: "#666" }}
            >
        <span
            className="w-px h-12"
            style={{
                background: "linear-gradient(to bottom, #555, transparent)",
                animation: "scrollLine 2s infinite",
            }}
        />
                scroll
            </motion.div>
        </section>
    );
}