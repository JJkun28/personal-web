// 加新项目：在 projects 数组里加一条即可，越靠前显示越靠前。
// 缩略图放到 public/images/，image.src 写 images/文件名（不要以 / 开头，本地双击打开时才能显示）。

export interface Project {
  title: string;
  subtitle?: string;
  desc: string;
  tags: string[];
  image: { src: string; alt: string; pixel?: boolean };
  href: string;
  linkLabel: string;
  note?: string;
}

export const projects: Project[] = [
  {
    title: 'Root Trace 族谱 · 建谱向导',
    subtitle: '开源贡献 · huhuper/Root-Trace',
    desc: '给一个完全在本地运行的族谱工具加了「建族谱向导」：从「我」开始逐代追问录入亲属，自动推算称谓，草稿自动保存，最后一键生成 PDF 族谱。另外写了只监听本机的 Python 启动器，负责保存数据和照片，并拦截跨站请求。',
    tags: ['JavaScript', 'Python', '开源贡献'],
    image: { src: 'images/root-trace.svg', alt: '族谱关系图示意' },
    href: 'https://github.com/huhuper/Root-Trace',
    linkLabel: 'GitHub',
    note: '原项目作者 huhuper，向导功能的两个 PR 已合并',
  },
  {
    title: 'Claude 桌宠',
    subtitle: 'claude-pet',
    desc: '跟着 Claude Code 实时切换动作的 Windows 桌面宠物。通过 hooks 接收会话事件，思考、工作、等待各有动画；双击可以直接给 Claude 发消息。纯 Rust + Win32，单个 exe 约 0.7 MB，运行时内存约 12 MB。',
    tags: ['Rust', 'Win32', 'Claude Code hooks'],
    image: { src: 'images/claude-pet.png', alt: '蓝发小女仆桌宠', pixel: true },
    href: 'https://github.com/JJkun28/claude-pet',
    linkLabel: 'GitHub',
    note: '女仆动画素材来自 dsh-pet（github.com/PC2005-cloud/dsh-pet）',
  },
];

// 像素桌宠合集：一张大卡片，鼠标移上去展开。最好保持 3 只，数量变了要检查展开后的间距。
export interface Pet {
  name: string;
  en: string;
  image: string;
  href: string;
}

export const pets = {
  title: '像素桌宠合集',
  subtitle: '收录于 awesome-codex-pet',
  desc: '用 AI 辅助绘制的像素动画桌宠，每只都有待机、移动、工作等多个动画状态，已收录进社区图鉴 codexpet.top。',
  tags: ['AI 辅助像素动画', 'Codex Pet'],
  note: 'AI 辅助同人作品，角色版权归原作方',
  items: [
    {
      name: '振翼发',
      en: 'Flutter Mane',
      image: 'images/flutter-mane.png',
      href: 'https://codexpet.top/pets/flutter-mane--jjkun28',
    },
    {
      name: '鬼马史魁克',
      en: 'Ghost Squeak',
      image: 'images/ghost-squeak.png',
      href: 'https://codexpet.top/pets/ghost-squeak--jjkun28',
    },
    {
      name: '臭臭斯派克',
      en: 'Stinky Spike',
      image: 'images/stinky-spike.png',
      href: 'https://codexpet.top/pets/stinky-spike--jjkun28',
    },
  ] as Pet[],
};
