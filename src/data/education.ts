// 教育经历：首页「项目」下面的卡片，按时间从新到旧排。
// 每张卡两行：第一行中文（学校 · 专业学位 · 时间），第二行英文（字小一点）。
// image 可选：鼠标移到卡片上时，照片作为卡片背景从下往上滚进来，移开后继续往上滚走。
// 卡片是 16:9，照片也用 16:9（现在是 1600×900 webp），整张照片正好铺满卡片。
// 照片放到 public/images/education/，src 不要以 / 开头；照片比例不是 16:9 时，position 调露出的位置。

export interface Education {
  school: string;
  degree: string;
  schoolEn: string;
  degreeEn: string;
  start: string;
  end: string;
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
}

export const education: Education[] = [
  {
    school: '哥伦比亚大学',
    degree: '应用统计硕士',
    schoolEn: 'Columbia University',
    degreeEn: 'Master of Science, Applied Statistics',
    start: '2025.09',
    end: '2026.12',
    image: {
      src: 'images/education/columbia.webp',
      alt: '哥伦比亚大学图书馆前的 Alma Mater 雕像',
      position: 'center 20%',
    },
  },
  {
    school: '加州大学戴维斯分校',
    degree: '统计数据科学本科',
    schoolEn: 'University of California, Davis',
    degreeEn: 'Bachelor of Science, Statistical Data Science',
    start: '2022.08',
    end: '2025.06',
    image: {
      src: 'images/education/davis.webp',
      alt: '蓝天下印着 UC Davis 的水塔',
    },
  },
];
