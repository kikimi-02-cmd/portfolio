export type Project = {
  name: string;
  description: string;
  url?: string;
  noteUrl?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "HonneX",
    description: "コトバに悩む人のためのコミュニケーションアプリ。",
    url: "https://honnex.app",
    noteUrl: "https://note.com/honnex",
    tags: ["Web", "Communication"],
  },
  {
    name: "ポケモジ",
    description: "ポケモンの名前をカタカナで当てるワードパズル。",
    url: "https://pokemoji.vercel.app",
    tags: ["Web", "Game"],
  },
  {
    name: "ポケGO 個体値チェッカー",
    description: "100%CP 一覧 & IV 計算ツール。",
    url: "https://pokego-iv-0320.vercel.app",
    tags: ["Web", "Tool"],
  },
  {
    name: "PokeGO MyEvent",
    description: "ポケモン GO 当日イベントのダッシュボード。",
    url: "https://pokego-myevent.vercel.app",
    tags: ["Web", "Tool"],
  },
  {
    name: "Rogue Tower Offence",
    description: "進軍オートバトル × ローグライトの放置 RPG。",
    url: "https://roguetoweroffence.vercel.app",
    tags: ["Game", "PWA"],
  },
  {
    name: "和ディフェンス物語",
    description: "詰将棋 × 和風タワーディフェンス。",
    url: "https://grouthtowerdefense.vercel.app",
    tags: ["Web", "Game"],
  },
  {
    name: "Mine Rogue",
    description: "マインスイーパー × ローグライク。",
    url: "https://mine-rogue.vercel.app",
    tags: ["Web", "Game"],
  },
  {
    name: "ふたり旅プランナー",
    description: "カップル・夫婦のための旅行プラン作成ツール。",
    url: "https://futari-trip.vercel.app",
    tags: ["Web", "Couple"],
  },
  {
    name: "ふたりの記念日",
    description: "カップル・夫婦の記念日カウントダウン。",
    url: "https://futari-kinenbi.vercel.app",
    tags: ["Web", "Couple"],
  },
];
