export type SocialLink = {
  label: string;
  href?: string;
};

export type ToolImage = {
  src: string;
  alt: string;
  label: string;
};

export type ToolItem = {
  id: string;
  name: string;
  type: "tool";
  status: "live" | "coming-soon";
  description: string;
  href?: string;
  tags: string[];
  typeLabel: string;
  actionLabel: string;
  availability: string;
  detailText: string[];
  useCases: string[];
  roadmap: string[];
  images?: ToolImage[];
};

export type SiteConfig = {
  siteName: string;
  intro: string;
  heroTitle: string;
  tickerText: string;
  footerText: string;
  footerNote: string;
  socialLinks: SocialLink[];
};

export const siteConfig: SiteConfig = {
  siteName: "OnePixelAI",
  intro: "Designer, Vibe Coding beginner.",
  heroTitle: "OnePixel AI",
  tickerText: "2026 · Created With NEW WAVE",
  footerText: "© 2026 OnePixelAI",
  footerNote: "GitHub / X",
  socialLinks: [
    {
      label: "CClishan (@GitHub)",
      href: "https://github.com/CClishan",
    },
    {
      label: "0xkoroo (@X)",
      href: "https://x.com/0xkoroo",
    },
  ],
};

export const tools: ToolItem[] = [
  {
    id: "pixelturn",
    name: "PixelTurn",
    type: "tool",
    status: "live",
    description: "图片格式转换工具，快速处理 PNG、JPG、WEBP 与 AVIF。",
    href: "https://pixelturn-web.vercel.app/",
    tags: ["tool"],
    typeLabel: "Tool",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "PixelTurn 面向轻量图片处理场景，把格式切换这一步做得更快、更干净，适合设计交付、网页素材整理和临时导出。",
      "整体体验保持单点工具的直接感：上传、选择目标格式、得到结果，不需要复杂设置也能完成高频任务。",
    ],
    useCases: [
      "网页图片改成更适合上线的 WEBP / AVIF",
      "把杂乱的来源图片统一为同一输出格式",
      "在设计交付前快速做一轮资源整理",
    ],
    roadmap: [
      "补充更多输出格式与批量处理能力",
      "继续打磨队列反馈和处理状态可视化",
    ],
    images: [
      {
        src: "/previews/pixelturn.jpeg",
        alt: "PixelTurn screenshot",
        label: "Live screenshot",
      },
    ],
  },
  {
    id: "pixelsmall",
    name: "PixelSmall",
    type: "tool",
    status: "live",
    description: "图片压缩工具，降低体积并尽量保留可用画质。",
    href: "https://pixelsmall.vercel.app/",
    tags: ["tool"],
    typeLabel: "Tool",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "PixelSmall 聚焦图片体积控制，适合网页发布、作品集上传和日常分享前的最后一步压缩整理。",
      "它更强调结果导向而不是复杂参数，让你在尽量不牺牲观感的情况下，迅速拿到更轻的图片文件。",
    ],
    useCases: [
      "作品集、博客和落地页图片上线前减重",
      "社交媒体封面与展示图的快速压缩",
      "批量素材准备阶段的体积控制",
    ],
    roadmap: [
      "补充更明确的压缩强度提示",
      "探索压缩前后对比与批量导出体验",
    ],
    images: [
      {
        src: "/previews/pixelsmall.jpeg",
        alt: "PixelSmall screenshot",
        label: "Live screenshot",
      },
    ],
  },
  {
    id: "pixelscan",
    name: "PixelScan",
    type: "tool",
    status: "coming-soon",
    description: "卡牌居中度检测工具，帮助快速判断构图是否偏移。",
    tags: ["in-progress"],
    typeLabel: "In Progress",
    actionLabel: "Coming soon",
    availability: "In development",
    detailText: [
      "PixelScan 还在开发中，目标是让卡牌、主体或拍摄对象的中心稳定性判断更直接，不需要先读懂复杂参数。",
      "它会处在设计判断和轻量检测之间：不是做厚重的图像分析平台，而是提供快速可用的构图反馈。",
    ],
    useCases: [
      "卡牌、海报或产品图的中心稳定性检查",
      "拍摄完成后快速判断主体是否偏左或偏右",
      "为自动裁切和对齐提供基础检测能力",
    ],
    roadmap: [
      "完成第一版检测逻辑与偏移标记",
      "加入更清晰的阈值说明和结果反馈",
    ],
    images: [
      {
        src: "/previews/pixelscan.svg",
        alt: "PixelScan concept preview",
        label: "Concept preview",
      },
    ],
  },
];
