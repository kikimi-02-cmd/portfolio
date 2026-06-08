import { projects, type Category, type Project } from "@/data/projects";

const groups: { category: Category; label: string }[] = [
  { category: "Game", label: "Games" },
  { category: "Tool", label: "Tools" },
  { category: "Couple", label: "For Couples" },
  { category: "Communication", label: "Communication" },
];

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold">{p.name}</h3>
        {p.url && (
          <span
            aria-hidden
            className="shrink-0 text-[var(--color-muted)] transition group-hover:text-[var(--color-accent)]"
          >
            ↗
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{p.description}</p>
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
    </>
  );

  const className =
    "group block h-full rounded-lg border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10";

  return p.url ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function Projects() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
        <div className="mt-8 space-y-12">
          {groups.map(({ category, label }) => {
            const items = projects.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  {label}
                </h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {items.map((p) => (
                    <li key={p.name}>
                      <ProjectCard p={p} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
