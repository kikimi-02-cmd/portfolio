import { projects } from "@/data/projects";

export function Hero() {
  const liveCount = projects.filter((p) => p.url).length;

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--color-muted)]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
          いばらき
        </h1>
        <p className="mt-6 text-lg text-[var(--color-muted)] sm:text-xl">
          AI と一緒に、ゲームや暮らしの小さなツールを個人開発しています。
        </p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          現在 {liveCount} 個のアプリを公開中。
        </p>
      </div>
    </section>
  );
}
