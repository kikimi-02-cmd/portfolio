// 広告着地用ランディングページ。
// 設定はすべて環境変数。コードを触らずに Vercel のダッシュボードから差し替える。
// 手順は docs/automation-ads-plan.md §6 を参照。
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const THANKS_URL = SITE_URL ? `${SITE_URL}/automation/thanks` : "";
const FORM_READY = FORM_ENDPOINT !== "" && THANKS_URL !== "";

const CASES = [
  {
    title: "毎月のExcel / CSV集計",
    body: "複数のファイルを開いて、コピペして、合計して、グラフにする。ここを全部自動にします。文字化けするCSVも扱えます。",
    before: "月4時間",
    after: "0分",
  },
  {
    title: "フォーム受付のあとの作業",
    body: "問い合わせが来たら、台帳に転記して、確認メールを送って、担当に共有する。受付から先を自動で流します。",
    before: "1件15分",
    after: "0分",
  },
  {
    title: "定型書類の作成",
    body: "見積書・請求書・報告書を、毎回テンプレートから手で作っている作業。入力1回で出力まで通します。",
    before: "1件20分",
    after: "1分",
  },
];

const FAQ = [
  {
    q: "作り方を教えてもらうことはできますか？",
    a: "この窓口ではやっていません。教える講座ではなく、動くものを作って納品するサービスです。納品後にご自身で編集できるよう、手順書は必ずお渡しします。",
  },
  {
    q: "何のツールで作りますか？",
    a: "お使いの環境に合わせます。Googleスプレッドシート / Google Apps Script / Notion / Excel / 簡単なWebアプリなど。新しいツールの契約が必要になる提案は、事前に必ずお伝えします。",
  },
  {
    q: "診断だけで終わってもいいですか？",
    a: "構いません。診断書には「自動化すべき箇所」と「あえて手作業に残すべき箇所」を書きます。それを持って他社に依頼していただいても問題ありません。",
  },
  {
    q: "なぜ安いのですか？",
    a: "一人で受けているので営業費と管理費がかかりません。そのかわり同時に1件しかお受けできません。",
  },
  {
    q: "契約書は交わせますか？",
    a: "はい。業務委託契約書と秘密保持契約書をご用意できます。",
  },
];

function CTA({ label = "無料で相談する" }: { label?: string }) {
  return (
    <a
      href="#form"
      className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-8 py-4 text-base font-bold text-white transition hover:bg-neutral-700 sm:w-auto"
    >
      {label}
    </a>
  );
}

export default function AutomationPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
      {/* ヒーロー */}
      <section>
        <p className="text-sm font-bold tracking-wide text-neutral-500">
          一人でやっている事業の方へ
        </p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
          その手作業、
          <br />
          2週間で終わらせます。
        </h1>
        <p className="mt-5 text-base leading-relaxed text-neutral-700">
          毎月かならず発生する繰り返し作業を、自動化して納品します。
          <strong className="font-bold text-neutral-900">
            作り方は教えません。作って渡します。
          </strong>
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-neutral-200 p-4">
            <dt className="text-xs font-bold text-neutral-500">まず診断</dt>
            <dd className="mt-1 text-2xl font-black">5万円</dd>
            <dd className="text-xs text-neutral-500">1週間・診断書1枚</dd>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4">
            <dt className="text-xs font-bold text-neutral-500">実装する場合</dt>
            <dd className="mt-1 text-2xl font-black">15万円〜</dd>
            <dd className="text-xs text-neutral-500">2週間・手順書つき</dd>
          </div>
        </dl>

        <div className="mt-7">
          <CTA />
          <p className="mt-3 text-xs text-neutral-500">
            相談は無料です。金額は診断をご依頼いただく段階で確定します。
          </p>
        </div>
      </section>

      {/* 証拠 */}
      <section className="mt-14 rounded-xl bg-neutral-50 p-6">
        <h2 className="text-lg font-black">自分用に27個つくって、毎日動かしています</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          受託のために勉強した技術ではありません。自分の生活と仕事を回すために作って、
          実際に毎日動かしているものがあります。
        </p>
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
          <li className="flex gap-3">
            <span aria-hidden className="font-black text-neutral-400">01</span>
            <span>
              録音した音声を自動で文字起こしし、要点を構造化して検索できる形で蓄積する仕組み。
              フォルダに置くだけで、毎日無人で走ります。
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="font-black text-neutral-400">02</span>
            <span>
              金融機関のCSV（文字化けするタイプ）を取り込み、店名から費目を自動で振り分け、
              重複を除いて月次集計するダッシュボード。数年分を運用中です。
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="font-black text-neutral-400">03</span>
            <span>
              ログイン・権限管理・決済・AI応答まで備えたWebアプリ。本番稼働しています。
            </span>
          </li>
        </ul>
      </section>

      {/* よくある型 */}
      <section className="mt-14">
        <h2 className="text-xl font-black">よくご依頼いただく3つの型</h2>
        <div className="mt-6 space-y-5">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-neutral-200 p-5"
            >
              <h3 className="font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {c.body}
              </p>
              <p className="mt-3 text-sm font-bold">
                <span className="text-neutral-400 line-through">{c.before}</span>
                <span aria-hidden className="mx-2 text-neutral-400">→</span>
                <span>{c.after}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-neutral-600">
          ここに当てはまらない作業でも構いません。
          「毎月やっているが、正直やりたくない作業」であれば一度ご相談ください。
        </p>
      </section>

      {/* 進め方 */}
      <section className="mt-14">
        <h2 className="text-xl font-black">進め方</h2>
        <ol className="mt-6 space-y-5">
          <li className="border-l-2 border-neutral-900 pl-5">
            <p className="text-sm font-bold">1. 30分の聞き取り（無料）</p>
            <p className="mt-1 text-sm text-neutral-700">
              いまの作業手順を伺います。オンラインで結構です。
              可能であれば、実際のファイルを1ヶ月分だけ見せてください。
            </p>
          </li>
          <li className="border-l-2 border-neutral-900 pl-5">
            <p className="text-sm font-bold">2. 診断書をお渡し（5万円・1週間）</p>
            <p className="mt-1 text-sm text-neutral-700">
              「自動化すべき箇所」と「あえて手作業に残すべき箇所」、
              想定の削減時間、実装した場合の費用と期間を1枚にまとめます。
            </p>
          </li>
          <li className="border-l-2 border-neutral-900 pl-5">
            <p className="text-sm font-bold">3. やるかどうかを決めていただく</p>
            <p className="mt-1 text-sm text-neutral-700">
              実装する場合は15万円〜・2週間。手順書をつけてお渡しするので、
              あとはご自身で運用できます。
            </p>
          </li>
        </ol>
      </section>

      {/* 正直に */}
      <section className="mt-14 rounded-xl border border-neutral-900 p-6">
        <h2 className="text-lg font-black">先にお伝えしておきます</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
          <li>
            ・<strong className="font-bold text-neutral-900">平日の日中は動けません。</strong>
            ご連絡は当日の夜までに必ずお返しします。打ち合わせは平日夜か土日でお願いしています。
          </li>
          <li>・同時にお受けできるのは1件までです。お待ちいただく場合があります。</li>
          <li>・大規模なシステム開発、既存システムの保守引き継ぎはお受けしていません。</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-xl font-black">よくある質問</h2>
        <div className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-bold marker:content-none">
                <span aria-hidden className="mr-2 text-neutral-400 group-open:hidden">
                  ＋
                </span>
                <span aria-hidden className="mr-2 hidden text-neutral-400 group-open:inline">
                  −
                </span>
                {f.q}
              </summary>
              <p className="mt-3 pl-6 text-sm leading-relaxed text-neutral-700">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* フォーム */}
      <section id="form" className="mt-14 scroll-mt-6">
        <h2 className="text-xl font-black">相談する（無料）</h2>
        <p className="mt-2 text-sm text-neutral-600">
          いただいた内容を読んでから返信します。営業のご連絡は一切しません。
        </p>

        {!FORM_READY && (
          <p className="mt-6 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
            設定待ち: 環境変数 <code>NEXT_PUBLIC_FORM_ENDPOINT</code> と{" "}
            <code>NEXT_PUBLIC_SITE_URL</code>{" "}
            が未設定のため、フォームはまだ送信できません。
            <strong className="font-bold">この表示が出ている状態で広告を配信しないこと。</strong>
          </p>
        )}

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="mt-6 space-y-5"
        >
          <input type="hidden" name="_next" value={THANKS_URL} />
          <input type="hidden" name="_subject" value="自動化LP からの相談" />
          {/* スパム対策 */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              お名前
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none focus:border-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none focus:border-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-bold">
              どんな事業をされていますか
            </label>
            <input
              id="business"
              name="business"
              type="text"
              required
              placeholder="例：一人で税理士事務所をやっています"
              className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="task" className="block text-sm font-bold">
              自動化したい作業
            </label>
            <textarea
              id="task"
              name="task"
              required
              rows={4}
              placeholder="例：毎月、5つの銀行のCSVを開いて手で集計しています"
              className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="hours" className="block text-sm font-bold">
              その作業に、月どれくらい時間がかかっていますか
            </label>
            <input
              id="hours"
              name="hours"
              type="text"
              required
              placeholder="例：月4時間くらい"
              className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-neutral-900 px-8 py-4 text-base font-bold text-white transition hover:bg-neutral-700"
          >
            送信する
          </button>
          <p className="text-xs text-neutral-500">
            いただいた情報はご相談への回答以外に使いません。第三者に提供しません。
          </p>
        </form>
      </section>

      <footer className="mt-16 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
        <p>個人事業主・一人社長向けの業務自動化サービス</p>
      </footer>
    </main>
  );
}
