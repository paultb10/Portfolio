"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

const socials = [
  { label: "GitHub", href: "https://github.com/paultb10" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paul-sirbu-24a6a9255/" },
  { label: "+40 722 850 830", href: "tel:+40722850830" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-12 py-[120px] text-center relative overflow-hidden">
      {/* ghost bg text */}
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bebas pointer-events-none whitespace-nowrap leading-none"
        style={{
          fontSize: "clamp(80px, 15vw, 220px)",
          color: "transparent",
          WebkitTextStroke: "1px #1a1a1a",
        }}
      >
        CONTACT
      </span>

      <FadeInView>
        <SectionLabel number="05" label="Contact" centered />
        <h2
          className="font-bebas leading-none mb-6"
          style={{
            fontSize: "clamp(48px, 7vw, 100px)",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 32px rgba(0,0,0,0.7)",
          }}
        >
          Let&apos;s Work<br />Together
        </h2>

        <p
          className="text-[1rem] leading-[1.75] max-w-[480px] mx-auto mb-8 relative z-10"
          style={{ color: "#b0ada6" }}
        >
          Looking for a passionate frontend developer &amp; UI/UX designer? I&apos;m open
          to new opportunities, freelance projects, and collaborations.
        </p>

        <motion.a
          href="mailto:sirbupaul05@gmail.com"
          className="font-bebas inline-block mb-12 no-underline relative z-10"
          style={{
            fontSize: "clamp(28px, 3.5vw, 52px)",
            letterSpacing: "0.02em",
            color: "var(--text)",
          }}
          whileHover={{
            color: "var(--accent)",
            textShadow: "0 0 40px rgba(77,159,255,0.4)",
          }}
          transition={{ duration: 0.2 }}
        >
          sirbupaul05@gmail.com
        </motion.a>

        <div className="flex justify-center gap-4 relative z-10">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="font-mono text-[0.7rem] tracking-[0.15em] uppercase px-5 py-2.5 border no-underline transition-all duration-200"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              whileHover={{
                color: "var(--text)",
                borderColor: "var(--text)",
              }}
            >
              {s.label}
            </motion.a>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
