export function Hero() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--color-muted)]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
          いばらき
        </h1>
        <p className="mt-6 text-lg text-[var(--color-muted)] sm:text-xl">
          AI と一緒に個人開発しています。
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href="https://note.com/ai_ibaraki"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-1.5 transition hover:bg-white/10"
          >
            note ↗
          </a>
        </div>
      </div>
    </section>
  );
}
