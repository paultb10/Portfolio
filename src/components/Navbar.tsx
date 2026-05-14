"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-14 h-7" />;

  const isDark = theme === "dark";

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
      setIsAnimating(false);
    }, 300);
  };

  return (
      <button
          onClick={handleToggle}
          aria-label="Toggle theme"
          className="relative w-14 h-7 rounded-full transition-all duration-500 overflow-hidden"
          style={{
            background: isDark
                ? "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%)"
                : "linear-gradient(135deg, #87ceeb 0%, #ffd580 100%)",
            border: isDark ? "1px solid rgba(100,130,255,0.3)" : "1px solid rgba(255,180,50,0.4)",
            boxShadow: isDark
                ? "0 0 12px rgba(80,100,255,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 0 12px rgba(255,200,50,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
      >
        {/* Stars (dark mode) */}
        <AnimatePresence>
          {isDark && (
              <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
              >
                {[
                  { top: "20%", left: "18%", size: 1.5 },
                  { top: "55%", left: "25%", size: 1 },
                  { top: "30%", left: "35%", size: 1 },
                ].map((star, i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}
              </motion.div>
          )}
        </AnimatePresence>

        {/* Clouds (light mode) */}
        <AnimatePresence>
          {!isDark && (
              <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
              >
            <span
                className="absolute rounded-full bg-white opacity-70"
                style={{ top: "25%", left: "10%", width: 10, height: 5 }}
            />
                <span
                    className="absolute rounded-full bg-white opacity-50"
                    style={{ top: "50%", left: "20%", width: 7, height: 4 }}
                />
              </motion.div>
          )}
        </AnimatePresence>

        {/* Sliding knob — moon or sun */}
        <motion.div
            layout
            animate={{ x: isDark ? 2 : 30 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-[3px] w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: isDark
                  ? "linear-gradient(135deg, #c8d8ff 0%, #8899ee 100%)"
                  : "linear-gradient(135deg, #ffe066 0%, #ffaa00 100%)",
              boxShadow: isDark
                  ? "0 0 8px rgba(150,170,255,0.7), 0 2px 4px rgba(0,0,0,0.4)"
                  : "0 0 12px rgba(255,200,0,0.8), 0 2px 6px rgba(200,100,0,0.3)",
            }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
                <motion.svg
                    key="moon"
                    width="10" height="10" viewBox="0 0 24 24"
                    fill="rgba(20,20,60,0.7)"
                    initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
            ) : (
                <motion.svg
                    key="sun"
                    width="11" height="11" viewBox="0 0 24 24"
                    fill="none" stroke="rgba(160,80,0,0.8)" strokeWidth="2.5"
                    initial={{ rotate: 30, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -30, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                >
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !mounted || theme === "dark";

  return (
      <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-[100] px-12 py-6 flex justify-between items-center transition-all duration-300 ${
              scrolled ? "border-b backdrop-blur-md" : "border-b border-transparent"
          }`}
          style={{
            background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
            borderColor: scrolled ? "var(--border)" : "transparent",
          }}
      >
        <a href="#" className="no-underline flex items-center" aria-label="PS Home">
          <Image
              src={isDark ? "/PS-balloon-dark-2.svg" : "/PS-balloon-light-2.svg"}
              alt="PS Logo"
              width={72}
              height={39}
              priority
          />
        </a>

        <ul className="flex gap-8 list-none items-center">
          {links.map((link) => (
              <li key={link.href}>
                <a
                    href={link.href}
                    className="font-mono text-xs tracking-widest uppercase no-underline relative group transition-colors duration-200"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                  <span
                      className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "var(--accent)" }}
                  />
                </a>
              </li>
          ))}

          {mounted && (
              <li>
                <ThemeToggle />
              </li>
          )}
        </ul>
      </motion.nav>
  );
}