// 加新项目：在数组里加一条即可，越靠前显示越靠前。
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
    title: 'Claude 桌宠',
    subtitle: 'claude-pet',
    desc: '跟着 Claude Code 实时切换动作的 Windows 桌面宠物。通过 hooks 接收会话事件，思考、工作、等待各有动画；双击可以直接给 Claude 发消息。纯 Rust + Win32，单个 exe 约 0.7 MB，运行时内存约 12 MB。',
    tags: ['Rust', 'Win32', 'Claude Code hooks'],
    image: { src: 'images/claude-pet.png', alt: '蓝发小女仆桌宠', pixel: true },
    href: 'https://github.com/JJkun28/claude-pet',
    linkLabel: 'GitHub',
    note: '女仆动画素材来自 dsh-pet（github.com/PC2005-cloud/dsh-pet）',
  },
  {
    title: '振翼发',
    subtitle: 'Flutter Mane',
    desc: '会左右飘行、从黑水潭探头、戴红色圆墨镜翻书、发射紫色光球的像素桌宠，共 9 个动画状态。已收录进 awesome-codex-pet。',
    tags: ['AI 辅助像素动画', 'Codex Pet'],
    image: { src: 'images/flutter-mane.png', alt: '振翼发像素桌宠', pixel: true },
    href: 'https://codexpet.top/pets/flutter-mane--jjkun28',
    linkLabel: 'codexpet.top',
    note: 'AI 辅助同人作品，角色版权归原作方',
  },
  {
    title: '鬼马史魁克',
    subtitle: 'Ghost Squeak',
    desc: '白色液态幽灵，身缠蓝灰锁链和金色幽灵锁。V2 版本有 9 个动画状态和 16 个全身朝向。已收录进 awesome-codex-pet。',
    tags: ['AI 辅助像素动画', 'Codex Pet'],
    image: { src: 'images/ghost-squeak.png', alt: '鬼马史魁克像素桌宠', pixel: true },
    href: 'https://codexpet.top/pets/ghost-squeak--jjkun28',
    linkLabel: 'codexpet.top',
    note: 'AI 辅助同人作品，角色版权归原作方',
  },
  {
    title: '臭臭斯派克',
    subtitle: 'Stinky Spike',
    desc: '以荒野乱斗中斯派克的皮肤为原型的像素桌宠，V2 完整动画帧。已收录进 awesome-codex-pet。',
    tags: ['AI 辅助像素动画', 'Codex Pet'],
    image: { src: 'images/stinky-spike.png', alt: '臭臭斯派克像素桌宠', pixel: true },
    href: 'https://codexpet.top/pets/stinky-spike--jjkun28',
    linkLabel: 'codexpet.top',
    note: 'AI 辅助同人作品，角色版权归原作方',
  },
];
