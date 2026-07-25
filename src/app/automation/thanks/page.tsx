import type { Metadata } from "next";

// Google 広告のコンバージョン計測用。docs/automation-ads-plan.md §6 の手順で実IDに差し替える。
// 未設定のあいだ gtag は存在しないため、下のスクリプトは何もしない (エラーにもならない)。
const CONVERSION_SEND_TO = "AW-XXXXXXXXX/YYYYYYYYYYYYYYY";

export const metadata: Metadata = {
  title: "送信しました | 業務自動化のご相談",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="text-2xl font-black">送信しました</h1>
      <p className="mt-5 text-base leading-relaxed text-neutral-700">
        ありがとうございます。内容を読んでから返信します。
        <br />
        平日の日中は動けないため、<strong className="font-bold text-neutral-900">当日の夜まで</strong>
        にお返事します。
      </p>
      <p className="mt-5 text-sm leading-relaxed text-neutral-600">
        もし2日たっても返信が届かない場合は、迷惑メールフォルダをご確認ください。
      </p>
      <a
        href="/automation"
        className="mt-10 inline-block text-sm font-bold underline underline-offset-4"
      >
        ページに戻る
      </a>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
              window.gtag('event', 'conversion', { send_to: '${CONVERSION_SEND_TO}' });
              window.gtag('event', 'generate_lead', { currency: 'JPY', value: 50000 });
            }
          `,
        }}
      />
    </main>
  );
}
