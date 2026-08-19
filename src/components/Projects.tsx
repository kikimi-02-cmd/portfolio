import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.name}
              className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-[var(--color-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.url || p.noteUrl) && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      開く ↗
                    </a>
                  )}
                  {p.noteUrl && (
                    <a
                      href={p.noteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                    >
                      note ↗
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
