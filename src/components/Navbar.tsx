"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span className="block h-10 w-10 rounded-full border border-[var(--border)]" aria-hidden="true" />;
  }

  const isDarkTheme = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="group grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg2)] text-[var(--text)] shadow-sm transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span
        className={clsx(
          "h-4 w-4 rounded-full border transition duration-300",
          isDarkTheme
            ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_18px_rgba(77,159,255,0.55)]"
            : "border-[var(--text)] bg-transparent shadow-[inset_-5px_-5px_0_var(--text)]",
        )}
        aria-hidden="true"
      />
    </button>
  );
};

const Navbar = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDarkTheme = !isMounted || theme === "dark";

  const handleToggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed left-0 right-0 top-0 z-[100] border-b px-4 py-4 transition duration-300 sm:px-6 lg:px-10",
        isScrolled
          ? "border-[var(--border)] bg-[var(--bg)] shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <a
          href="#hero"
          className="flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          aria-label="Go to portfolio hero"
          onClick={handleCloseMenu}
        >
          <Image
            src={isDarkTheme ? "/PS-balloon-dark-2.svg" : "/PS-balloon-light-2.svg"}
            alt="PS monogram logo"
            width={72}
            height={39}
            className="h-[39px] w-[72px]"
            priority
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex list-none items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-sm font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)] transition duration-200 hover:text-[var(--text)] focus:outline-none focus-visible:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleToggleMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg2)] text-[var(--text)] transition duration-200 hover:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="flex h-4 w-4 flex-col justify-between" aria-hidden="true">
              <span
                className={clsx(
                  "h-px w-full bg-current transition duration-200",
                  isMenuOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "h-px w-full bg-current transition duration-200",
                  isMenuOpen && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "h-px w-full bg-current transition duration-200",
                  isMenuOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-4 max-w-7xl rounded-lg border border-[var(--border)] bg-[var(--bg2)] p-3 shadow-panel lg:hidden"
          >
            <ul className="grid list-none gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleCloseMenu}
                    className="flex items-center justify-between rounded-md px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:bg-[var(--bg3)] hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {link.label}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
