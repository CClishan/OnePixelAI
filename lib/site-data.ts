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
  type: "tool" | "skill";
  status: "live" | "coming-soon";
  description: string;
  href?: string;
  downloadHref?: string;
  tags: string[];
  typeLabel: string;
  actionLabel: string;
  availability: string;
  detailAvailability?: string;
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
  intro: "Designer, vibe-coding beginner.",
  heroTitle: "OnePixel AI",
  tickerText: "2026 / Created With NEW WAVE",
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
    description: "图片格式转换工具，快速处理 PNG、JPG、WEBP 与 AVIF 之间的切换。",
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
      "把网页图片改成更适合上线的 WEBP / AVIF",
      "把杂乱的来源图片统一成同一种输出格式",
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
      "它更强调结果导向而不是复杂参数，让你在尽量不牺牲观感的前提下，快速拿到更轻的图片文件。",
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
    id: "impeccable",
    name: "Impeccable",
    type: "skill",
    status: "live",
    description: "面向 AI coding 工具的设计增强 Skill，补足前端设计语言与命令体系。",
    href: "https://impeccable.style/",
    tags: ["skill"],
    typeLabel: "Skill",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "Impeccable 是一组给 AI harness 使用的设计增强 Skill，核心价值是把更专业的设计词汇、命令和反模式整理成可直接调用的能力包。",
      "它更适合希望提升页面审美、排版和前端设计表达的人，而不是单纯追求快速生成默认 UI 的工作流。",
    ],
    useCases: [
      "给 AI 生成前端时补充更专业的设计语言",
      "用成体系的命令改善排版、布局和视觉细节",
      "减少常见的 AI 前端“模板味”和通用感",
    ],
    roadmap: [
      "后续可加入 OnePixelAI 自己整理的 Skill 推荐区",
      "可扩展为带笔记、分类和标签的 Skill 索引",
    ],
  },
  {
    id: "taste-skill",
    name: "Taste Skill",
    type: "skill",
    status: "live",
    description: "强调 anti-slop frontend 的 Skill / framework，主打更有判断力的界面生成。",
    href: "https://www.tasteskill.dev/",
    tags: ["skill"],
    typeLabel: "Skill",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "Taste Skill 主张用更高要求去约束 AI 前端输出，重点强调布局、间距、交互和整体质感，避免生成千篇一律的安全方案。",
      "它更像一套带立场的前端审美框架，适合想把 AI 结果从“能用”推进到“更有品味”的工作方式。",
    ],
    useCases: [
      "约束 AI 避开常见的前端 slop 风格",
      "提升 landing page 和 showcase 页面的完成度",
      "为个人工具站建立更有辨识度的视觉标准",
    ],
    roadmap: [
      "后续可继续补充更多高质量 Skill 作为公开分享",
      "可与工具索引并列，形成 OnePixelAI 的 Skill 推荐栏目",
    ],
  },
  {
    id: "codex-agents",
    name: "Codex AGENTS.md 调教",
    type: "skill",
    status: "live",
    description:
      "给 Codex / AI coding 工具用的 AGENTS.md 提示词模版，统一角色、流程、工程约束和输出口径。",
    downloadHref: "/downloads/codex-agents-guide.md",
    tags: ["skill"],
    typeLabel: "Skill",
    actionLabel: "Download .md",
    availability: "Available download now",
    detailAvailability: "Available download now",
    detailText: [
      "这组内容不是单纯补几句系统提示，而是把 Codex 的工作方式先定住：先回到原始需求，再用更直接的中文沟通，避免空转、过度包装和跑偏执行。",
      "它同时把开发流程、工程边界、排障顺序和输出格式整理成一套可复用约束，适合想把 AI coding 从“能跑”推进到“更稳、更像同一个人做事”的使用方式。",
    ],
    useCases: [
      "给 Codex 项目补一份更有主见的 AGENTS.md 行为约束",
      "统一多次对话里的文案口径、执行节奏和问题处理方式",
      "减少 AI 在分支策略、补丁思路和输出格式上的随机性",
    ],
    roadmap: [
      "后续可继续补充适合不同项目类型的 AGENTS.md 变体",
      "可与 OnePixelAI 现有 Skill 一起整理成更完整的提示词工具箱",
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
      "PixelScan 还在开发中，目标是让卡片、主体或拍摄对象的中心稳定性判断更直接，不需要先读懂复杂参数。",
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
