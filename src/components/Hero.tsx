import { projects } from "@/data/projects";

export function Hero() {
  const liveCount = projects.filter((p) => p.url && !p.wip).length;
  const wipCount = projects.filter((p) => p.wip).length;

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--color-muted)]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
          いばらき
        </h1>
        <p className="mt-6 text-lg text-[var(--color-muted)] sm:text-xl">
          思いついたものを、AI と一緒に片っ端から形にしています。
          パズルやRPGのゲーム、ポケモン GO の道具、ふたりで使うアプリまで。
        </p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          公開中 {liveCount} 個
          {wipCount > 0 && <> ・ 開発中 {wipCount} 個</>}
        </p>
      </div>
    </section>
  );
}
