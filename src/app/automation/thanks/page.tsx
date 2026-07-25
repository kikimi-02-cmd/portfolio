import type { Metadata } from "next";

// Google 広告のコンバージョン計測。環境変数で設定する (コードは触らない)。
//   NEXT_PUBLIC_GOOGLE_ADS_ID              例) AW-123456789
//   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL 例) AbC-D_efGhIjKlMnO
// 両方そろったときだけコンバージョンを送出する。未設定なら何もしない。
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
const LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";
const SEND_TO = ADS_ID && LABEL ? `${ADS_ID}/${LABEL}` : "";

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
        平日の日中は動けないため、
        <strong className="font-bold text-neutral-900">当日の夜まで</strong>
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

      {SEND_TO && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', { send_to: '${SEND_TO}', value: 50000, currency: 'JPY' });
              }
            `,
          }}
        />
      )}
    </main>
  );
}
