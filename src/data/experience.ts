// 实习经历：只写行业，不写公司名；内容比简历概括一些。越靠前越新。

export interface Experience {
  role: string;
  org: string; // 行业描述，不写公司名
  place: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: '量化分析实习生',
    org: '私募基金',
    place: '上海',
    period: '2026.07 – 2026.08',
    points: [
      '参与 AI Agent 的开发与优化，把基金绩效分析流程做成可复用的 Skills，支持自动化的绩效汇总和多基金对比。',
      '参与期货和指数增强方向的量化策略研究，负责数据处理、交易信号与风控逻辑的优化，以及历史回测评估。',
    ],
  },
  {
    role: '数据运营实习生',
    org: '游戏公司',
    place: '上海',
    period: '2026.06',
    points: [
      '用 Python 和 AI IDE 做玩家行为专题分析，完成玩家分群和关卡行为整理。',
      '梳理业务数据表、建立数据字典，让 AI 辅助分析能准确理解字段和口径。',
    ],
  },
  {
    role: '计量组实习生',
    org: '芯片公司',
    place: '上海',
    period: '2023.07 – 2023.08',
    points: [
      '用 R 对芯片测试数据做统计分析，把分箱筛选流程沉淀为团队的标准作业流程。',
      '用 Python 写测试日志解析脚本，自动整理数据并生成趋势图，加快异常初筛。',
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    school: '哥伦比亚大学',
    degree: '应用统计 · 硕士',
    period: '2025.09 – 2026.12',
  },
  {
    school: '加州大学戴维斯分校',
    degree: '统计（统计数据科学）· 本科，辅修数学',
    period: '2022.08 – 2025.06',
    detail: 'GPA 3.95 / 4.00，荣誉毕业',
  },
];
