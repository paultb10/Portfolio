const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
          © 2026 Sîrbu Paul Dan
        </p>
        <a
          href="#hero"
          className="w-fit font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          aria-label="Back to top"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
