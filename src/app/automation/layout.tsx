import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "その手作業、2週間で終わらせます | 個人事業主のための業務自動化",
  description:
    "一人でやっている事業の「毎月やっている作業」を自動化して納品します。作り方は教えません。作って渡します。まず診断5万円（1週間・診断書1枚）から。",
  robots: { index: true, follow: true },
  openGraph: {
    title: "その手作業、2週間で終わらせます",
    description:
      "個人事業主・一人社長向け。毎月の繰り返し作業を自動化して納品します。診断5万円から。",
    type: "website",
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">{children}</div>
  );
}
