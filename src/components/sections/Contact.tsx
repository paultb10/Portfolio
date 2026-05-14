"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/FadeInView";
import SectionLabel from "@/components/SectionLabel";

type ContactLink = {
  label: string;
  href: string;
  detail: string;
};

const contactLinks: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/paultb10", detail: "Projects and code" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-sirbu-24a6a9255/",
    detail: "Professional profile",
  },
  { label: "Phone", href: "tel:+40722850830", detail: "+40 722 850 830" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute left-1/2 top-12 h-72 w-[min(42rem,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,159,255,0.16),transparent_68%)] blur-2xl" />

      <FadeInView className="relative z-10 mx-auto max-w-5xl text-center">
        <SectionLabel number="05" label="Contact" centered />
        <h2 className="font-bebas text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.86] tracking-normal text-[var(--text)]">
          Let&apos;s build something people remember.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          I am interested in frontend, UI/UX, and full-stack roles where polished
          interfaces and reliable product thinking matter.
        </p>

        <motion.a
          href="mailto:sirbupaul05@gmail.com"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-10 inline-flex max-w-full items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-center font-bebas text-[clamp(1.9rem,5vw,4.6rem)] leading-none tracking-normal text-[#050505] shadow-glow transition duration-200 hover:bg-[var(--accent3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          aria-label="Send email to Paul Sirbu"
        >
          <span className="break-all sm:break-normal">sirbupaul05@gmail.com</span>
        </motion.a>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4 text-left transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
              aria-label={`Open ${link.label}`}
            >
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                {link.label}
              </span>
              <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{link.detail}</span>
            </a>
          ))}
        </div>
      </FadeInView>
    </section>
  );
};

export default Contact;
