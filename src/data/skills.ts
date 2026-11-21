export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'AI 应用',
    items: ['Claude Code', 'Codex', 'Hooks 集成', 'AI 辅助像素动画'],
  },
  {
    name: '开发',
    items: ['Rust', 'Win32 API', 'TypeScript', 'Astro'],
  },
  {
    name: '数据',
    items: ['Python', 'Pandas', 'SQL / MySQL', 'Tableau', 'Plotly'],
  },
];
