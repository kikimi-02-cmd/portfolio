export type Project = {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "ポケモジ",
    description: "ポケモンの名前をカタカナで当てるワードパズル。",
    tags: ["Next.js", "Game"],
  },
  {
    name: "ai-nazonazo",
    description: "AI と一緒に遊ぶなぞなぞアプリ。",
    tags: ["Next.js", "AI"],
  },
  {
    name: "honnex",
    description: "書籍・読書関連の Web サービス。",
    tags: ["Next.js", "Supabase"],
  },
];
