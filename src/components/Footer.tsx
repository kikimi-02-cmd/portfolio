export function Footer() {
  return (
    <footer className="px-6 py-12 text-sm text-[var(--color-muted)]">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} いばらき</p>
        <a
          href="https://coconala.com/services/4259077"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[var(--color-accent)]"
        >
          ココナラで相談する ↗
        </a>
      </div>
    </footer>
  );
}
