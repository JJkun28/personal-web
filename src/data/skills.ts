// 首页顶部的技能卡片。每张卡：小图标 + 技能名 + 一两句「具体会什么」+ 工具标签 + 用到它的项目。
// icon 可选值见 src/components/Skills.astro 里的 icons；projects 填 projects.ts 里的 slug。

export type SkillIcon = 'code' | 'database' | 'chart' | 'scatter' | 'agent' | 'tool';

export interface Skill {
  icon: SkillIcon;
  name: string;
  en: string;
  desc: string;
  items: string[];
  projects?: string[];
}

// 顺序就是首页显示的顺序：最想让人先看到的放前面
export const skills: Skill[] = [
  {
    icon: 'code',
    name: 'Python 数据处理',
    en: 'Python',
    desc: '用 Pandas / NumPy 清洗和分析数据；用 openpyxl 直接生成带公式、图表、可逐格核对的 Excel 报表。',
    items: ['Pandas', 'NumPy', 'openpyxl'],
    projects: ['fund-performance-eval'],
  },
  {
    icon: 'chart',
    name: '量化绩效与回测',
    en: 'Quant',
    desc: '计算年化收益、波动率、最大回撤、夏普 / 索提诺 / 卡玛，以及超额收益、跟踪误差、信息比率；做策略回测。',
    items: ['绩效指标', '超额分析', '策略回测'],
    projects: ['fund-performance-eval'],
  },
  {
    icon: 'scatter',
    name: '统计建模与可视化',
    en: 'Statistics',
    desc: '用 R 做数据整理和统计图；机器学习、集成学习与深度学习建模；用 Tableau 和 Excel 做可视化。',
    items: ['R（dplyr、ggplot2）', '机器学习', 'Tableau'],
  },
  {
    icon: 'agent',
    name: 'AI Agent 开发',
    en: 'AI Agent',
    desc: '开发 Agent Skills、MCP 和 Claude Code hooks，把业务流程交给 agent；搭建 RAG（Qdrant 向量检索、Neo4j 图谱）。',
    items: ['Agent Skills', 'MCP', 'RAG', 'Claude Code'],
    projects: ['fund-performance-eval', 'claude-pet'],
  },
  {
    icon: 'database',
    name: 'SQL 查询',
    en: 'SQL',
    desc: '熟练使用窗口函数和 CTE 写多层统计查询，在 Hive 上做业务数据的汇总与分析。',
    items: ['窗口函数', 'CTE', 'Hive'],
  },
  {
    icon: 'tool',
    name: '工具开发',
    en: 'Tooling',
    desc: '用 Rust + Win32 写轻量的原生桌面程序，用 JavaScript 写浏览器端功能，用 Python 写本地脚本和服务。',
    items: ['Rust', 'JavaScript', 'Python'],
    projects: ['claude-pet', 'root-trace'],
  },
];
