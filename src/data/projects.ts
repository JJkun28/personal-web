// 加新项目：在 projects 数组里加一条即可。首页项目区是一块拼图，按数组顺序排：
//   第 1 个最大（左上），第 2 个右上，第 3、4 个在最下面一行（鼠标移到第 4 个上它会展开、把第 3 个挤小，
//   第 3 个被挤小时改显示它的 squeezeCover）。
// 每个项目会生成一个详情页 projects/<slug>.html，slug 只用小写字母、数字和连字符。
// cover 是封面：首页拼图上的背景图，也是详情页最上面的第一张图；
// showcase 是成品效果图，放在标题下、正文前；gallery 是正文后面的配图；details 是详情页的长介绍，一段一个字符串。
// 图片放到 public/images/，src 写 images/文件名（不要以 / 开头，本地双击打开时才能显示）。

// 写了 title 时图下说明靠左、带小标题；half: true 的图两张并排（适合竖版的页面截图）
export interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  half?: boolean;
  pixel?: boolean;
  width?: number;
  height?: number;
}

export interface Cover {
  src: string;
  alt: string;
  // cover：铺满裁切（默认）；contain：完整显示，空白处用 bg 填
  fit?: 'cover' | 'contain';
  position?: string;
  bg?: string;
  pixel?: boolean;
  width?: number;
  height?: number;
}

// 横排精灵图（一行 frames 帧，每帧 width × height），按 durations（毫秒）逐帧播放
export interface Sprite {
  src: string;
  frames: number;
  width: number;
  height: number;
  durations: number[];
}

export interface Pet {
  name: string;
  en: string;
  image: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  details: string[];
  tags: string[];
  cover?: Cover;
  // 最下面一行左边那块被右边挤小时显示的动画（逐帧精灵图）
  squeezeCover?: Sprite & { alt: string };
  // 两组配图各自上方的小标题，比如「最终效果」「建谱向导页面」
  showcaseTitle?: string;
  showcase?: ProjectImage[];
  galleryTitle?: string;
  gallery?: ProjectImage[];
  // 桌宠合集专用：拼图上并排显示这几只，详情页逐只列出
  pets?: Pet[];
  href?: string;
  linkLabel?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'fund-performance-eval',
    title: '基金绩效评估 Skill',
    subtitle: 'fund-performance-eval',
    summary: '一个 Agent Skill：把基金净值表交给 agent，一句话生成可以逐格核对的绩效评估 Excel。',
    details: [
      '把基金净值 .xlsx 交给 Claude Code 等支持 Agent Skills 的 agent，说一句「算一下绩效」，就能拿到一份可以直接发给同事的绩效评估工作簿。单个文件和整个文件夹都能处理，批量时另出一份汇总表。',
      '指标包括区间与年化收益、波动率、最大回撤（含回撤起止日期和修复天数）、夏普 / 卡玛 / 索提诺。给一个基准文件，还会算几何或算术超额、跟踪误差、信息比率和超额最大回撤。所有指标都写成 Excel 公式，改了净值，数字会一起更新。',
      '自动识别日、周、月频，分别按 252、52、12 年化，周频的私募净值不会把夏普算高。输出文件已存在或正被 Excel 打开时会先停下，不会覆盖。',
    ],
    tags: ['Python', 'openpyxl', 'Agent Skills', '基金绩效'],
    cover: {
      src: 'images/projects/fund-cover.webp',
      alt: '深色代码窗口里的年化收益函数，旁边是 Excel 文件图标',
      bg: '#0b1222',
      width: 1600,
      height: 900,
    },
    gallery: [
      {
        src: 'images/projects/fund-sheet.png',
        width: 1266,
        height: 332,
        alt: '单只产品的绩效评估 sheet：数据区、指标表和净值曲线',
        caption: '单只产品：数据区、指标表和净值曲线（示例数据）',
      },
      {
        src: 'images/projects/fund-benchmark.png',
        width: 1505,
        height: 332,
        alt: '产品与基准对比 sheet：超额指标和三条曲线',
        caption: '和基准对比：超额指标，以及产品、基准、超额三条曲线',
      },
    ],
    href: 'https://github.com/JJkun28/fund-performance-eval',
    linkLabel: 'GitHub',
    note: '测试用真实 Excel 和 LibreOffice 重算公式，逐项对比 Python 结果',
  },
  {
    slug: 'root-trace',
    title: 'Root Trace 族谱 · 建谱向导',
    subtitle: '开源贡献 · huhuper/Root-Trace',
    summary: '给一个在本地运行的族谱工具加了「建族谱向导」，从「我」开始逐代录入，最后一键生成 PDF。',
    details: [
      'Root Trace 是 huhuper 写的族谱编辑器，完全在本地浏览器里运行。我给它加了「建族谱向导」：从「我」开始逐代追问父母、配偶和子女，按关系自动推算称谓，草稿自动保存，填完一键生成 PDF 族谱。',
      '另外写了一个只监听本机的 Python 启动器，负责保存族谱数据和照片，并拦截跨站请求，防止别的网页改动本地数据。',
    ],
    tags: ['JavaScript', 'Python', '开源贡献'],
    cover: {
      src: 'images/projects/root-trace-cover.webp',
      alt: 'Root Trace 建谱向导：从「我」往上连到父母和祖辈的关系图',
      position: '60% center',
      bg: '#1c1c1c',
      width: 1600,
      height: 900,
    },
    showcaseTitle: '最终效果',
    showcase: [
      {
        src: 'images/projects/root-trace-graph.webp',
        width: 1209,
        height: 396,
        alt: '三代人的家族关系图：族长和配偶连到长子，长子和配偶再连到两个子女，每人旁边写着称谓',
        title: '家族关系图',
        caption:
          '录入的人自动连成一张关系网：夫妻连到同一个节点，再分出子女，每个人旁边显示照片和称谓。之后还可以在图上点「+」补人、改资料。',
      },
      {
        src: 'images/projects/root-trace-pdf-cover.webp',
        width: 1075,
        height: 1521,
        alt: 'PDF 族谱封面：锅氏族谱，下面写着祖训',
        title: 'PDF 族谱 · 封面',
        caption: '封面印上姓氏、始祖和祖训。',
        half: true,
      },
      {
        src: 'images/projects/root-trace-pdf-person.webp',
        width: 1075,
        height: 1521,
        alt: 'PDF 族谱第 1 世成员页：照片、姓名、称谓、生日、农历生日、生肖和生平',
        title: 'PDF 族谱 · 成员页',
        caption: '每位成员单独一页，按世代排列：照片、称谓、生辰、生肖、生平。',
        half: true,
      },
    ],
    galleryTitle: '建谱向导页面',
    gallery: [
      {
        src: 'images/projects/root-trace-wizard-start.webp',
        width: 1152,
        height: 624,
        alt: '建族谱向导的欢迎页，说明会从「你」开始一代一代地问',
        title: '欢迎页',
        caption:
          '向导从「你」开始一代一代地问：往上问父母、祖辈，往下问配偶、子女、孙辈，兄弟姐妹一家也会问到。知道多少填多少，任何一页都能跳过。',
      },
      {
        src: 'images/projects/root-trace-wizard-me.webp',
        width: 1148,
        height: 826,
        alt: '向导第一步：填写「我」的姓名、性别和照片',
        title: '逐人填写',
        caption:
          '每个人一张卡片，只有姓名必填，照片可以直接上传。称谓按关系自动推算（外曾祖母、儿媳、侄子……），草稿随时自动保存。',
      },
    ],
    href: 'https://github.com/huhuper/Root-Trace',
    linkLabel: 'GitHub',
    note: '原项目作者 huhuper，向导功能的两个 PR 已合并',
  },
  {
    slug: 'claude-pet',
    title: 'Claude 桌宠',
    subtitle: 'claude-pet',
    summary: '跟着 Claude Code 实时切换动作的 Windows 桌面宠物，纯 Rust 编写，单个 exe 不到 1 MB。',
    details: [
      '通过 Claude Code 的 hooks 接收会话事件：你发消息时它在思考，Claude 调用工具时它在忙，需要你确认权限时它会提醒你，做完了会庆祝。终端里的 claude 和桌面版的 Code 标签页都能用。',
      '双击桌宠可以直接给 Claude 桌面版的会话发消息，托盘图标随时显示或隐藏。自带三个形象，右键就能换；想用自己的形象，在 pets 文件夹里放几张按状态命名的 GIF 就行，不用写配置。',
      '纯 Rust + Win32 实现，单个 exe 不到 1 MB，运行时内存约 12 MB，免安装，不依赖 Python 或 Node。',
    ],
    tags: ['Rust', 'Win32', 'Claude Code hooks'],
    cover: {
      src: 'images/projects/claude-pet-cover.webp',
      alt: '三个桌宠形象随 Claude Code 状态切换动作',
      fit: 'contain',
      bg: '#faf7f2',
      pixel: true,
      width: 720,
      height: 212,
    },
    squeezeCover: {
      src: 'images/ghost-squeak-review-row.png',
      alt: '鬼马史魁克举着灯笼翻看文件',
      frames: 6,
      width: 173,
      height: 141,
      durations: [450, 300, 110, 350, 110, 450],
    },
    gallery: [
      {
        src: 'images/projects/claude-pet-menu.webp',
        width: 640,
        height: 825,
        alt: '右键桌宠弹出的菜单：当前状态、和 Claude 说话、动作预览、大小、换宠物、hooks 设置等',
        title: '右键菜单',
        caption:
          '右键桌宠就能打开。最上面显示当前状态和进行中的会话数，「和 Claude 说话」可以直接给桌面版的会话发消息。中间几组能挨个播放每段动画，调大小、换宠物、设置置顶和开机自启。下面一组管 hooks：一键接入 Claude Code、查看事件日志、换完 GIF 后重新加载。选「隐藏」后，下次在 Claude Code 里发消息它会自己出来。',
      },
    ],
    href: 'https://github.com/JJkun28/claude-pet',
    linkLabel: 'GitHub',
    note: '女仆动画素材来自 dsh-pet（github.com/PC2005-cloud/dsh-pet）',
  },
  {
    slug: 'pixel-pets',
    title: '像素桌宠合集',
    subtitle: '收录于 awesome-codex-pet',
    summary: '用 AI 辅助绘制的像素动画桌宠，已收录进社区图鉴 codexpet.top。',
    details: [
      '用 AI 辅助绘制的像素动画桌宠，每只都有待机、移动、工作等多个动画状态，已收录进社区图鉴 codexpet.top。点下面的桌宠可以打开它的图鉴页。',
    ],
    tags: ['AI 辅助像素动画', 'Codex Pet'],
    pets: [
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
    ],
    note: 'AI 辅助同人作品，角色版权归原作方',
  },
];
