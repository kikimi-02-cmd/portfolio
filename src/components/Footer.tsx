export function Footer() {
  return (
    <footer className="px-6 py-12 text-sm text-[var(--color-muted)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} いばらき</p>
        <div className="flex gap-4">
          <a
            href="https://note.com/ai_ibaraki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-fg)]"
          >
            note (個人)
          </a>
          <a
            href="https://note.com/honnex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-fg)]"
          >
            note (HonneX)
          </a>
        </div>
      </div>
    </footer>
  );
}
