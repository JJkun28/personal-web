export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: '编程与数据',
    items: ['Python（Pandas、NumPy）', 'SQL（窗口函数、CTE、Hive）', 'R（dplyr、ggplot2）'],
  },
  {
    name: '量化与统计',
    items: ['绩效指标（波动率、最大回撤、夏普 / 索提诺）', '策略回测', '机器学习', '集成学习', '深度学习'],
  },
  {
    name: 'AI 应用',
    items: ['AI Agent 工作流', 'Skills 开发', 'MCP', 'RAG', 'Qdrant 向量检索', 'Neo4j / Cypher', 'Claude Code / Cursor'],
  },
  {
    name: '可视化',
    items: ['Tableau', 'Excel'],
  },
  {
    name: '工具开发',
    items: ['Rust', 'JavaScript', 'Python 脚本与本地服务'],
  },
];
