export type Category = "Game" | "Tool" | "Couple" | "Communication";

export type Project = {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  category: Category;
  tags: string[];
};

export const projects: Project[] = [
  // --- Games ---
  {
    name: "ポケモジ",
    description: "ポケモンの名前をカタカナで当てるワードパズル。",
    url: "https://pokemoji.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },
  {
    name: "Mine Rogue",
    description: "マインスイーパー × ローグライク。盤面クリアごとにスキルを獲得。",
    url: "https://mine-rogue.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },
  {
    name: "Rogue Tower Offence",
    description: "進軍オートバトル × ローグライトの放置 RPG。",
    url: "https://roguetoweroffence.vercel.app",
    category: "Game",
    tags: ["Game", "PWA"],
  },
  {
    name: "和ディフェンス物語",
    description: "詰将棋 × 和風タワーディフェンス。",
    url: "https://grouthtowerdefense.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },
  {
    name: "AIなぞなぞ",
    description: "オリジナルなぞなぞに挑戦。デイリー問題とやりこみ要素つき。",
    url: "https://ai-nazonazo.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },
  {
    name: "AIダンジョン",
    description: "選択肢でストーリーが分岐するテキストアドベンチャー RPG。",
    url: "https://ai-dungeon-coral.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },
  {
    name: "脱出ゲーム",
    description: "クリック＆謎解きで部屋を脱出する全 5 ステージの脱出ゲーム。",
    url: "https://escape-room-omega-cyan.vercel.app",
    category: "Game",
    tags: ["Web", "Game"],
  },

  // --- Tools ---
  {
    name: "ポケGO 個体値チェッカー",
    description: "100%CP 一覧 & IV 計算ツール。",
    url: "https://pokego-iv-0320.vercel.app",
    category: "Tool",
    tags: ["Web", "Tool"],
  },
  {
    name: "PokeGO MyEvent",
    description: "ポケモン GO 当日イベントのダッシュボード。",
    url: "https://pokego-myevent.vercel.app",
    category: "Tool",
    tags: ["Web", "Tool"],
  },

  // --- Couple ---
  {
    name: "ふたり旅プランナー",
    description: "カップル・夫婦のための旅行プラン作成ツール。",
    url: "https://futari-trip.vercel.app",
    category: "Couple",
    tags: ["Web", "Couple"],
  },
  {
    name: "ふたりの記念日",
    description: "カップル・夫婦の記念日カウントダウン。",
    url: "https://futari-kinenbi.vercel.app",
    category: "Couple",
    tags: ["Web", "Couple"],
  },

  // --- Communication ---
  {
    name: "HonneX",
    description: "会話を一人で振り返るための内省ツール。表と裏の二視点で分析。",
    url: "https://honnex.app",
    category: "Communication",
    tags: ["Web", "Communication"],
  },
];
