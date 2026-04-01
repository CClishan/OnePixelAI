export type SocialLink = {
  label: string;
  href?: string;
};

export type ToolImage = {
  src: string;
  alt: string;
  label: string;
};

export type DetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type DetailHighlight = {
  label: string;
  value: string;
  note: string;
};

export type DetailToken = {
  name: string;
  value: string;
  usage: string;
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
  detailStyle?: "default" | "style-2";
  detailText: string[];
  useCases: string[];
  roadmap: string[];
  detailSections?: DetailSection[];
  detailHighlights?: DetailHighlight[];
  detailTokens?: DetailToken[];
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
  },
  {
    id: "pixelheic",
    name: "Pixel HEIC",
    type: "tool",
    status: "live",
    description: "HEIC 图片转换工具，快速把 Apple 设备图片处理成更通用的输出格式。",
    href: "https://pixel-heic.vercel.app/",
    tags: ["tool"],
    typeLabel: "Tool",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "Pixel HEIC 聚焦 HEIC 这类高频但兼容性不统一的图片格式，把 iPhone 或其他 Apple 设备导出的图片更直接地转换成常用格式。",
      "它延续 OnePixelAI 轻工具的思路：减少额外设置，优先把格式兼容问题快速解决，适合发图、交付和网页素材整理前的一步处理。",
    ],
    useCases: [
      "把 iPhone 拍摄的 HEIC 图片改成更通用的 JPG / PNG",
      "处理跨平台传图时的格式兼容问题",
      "给网页上传、设计交付和资料归档提前做一轮转换",
    ],
    roadmap: [
      "补充更多导出格式与批量转换体验",
      "继续打磨上传反馈、进度状态和结果整理方式",
    ],
  },
  {
    id: "pixeldownload",
    name: "PixelDownload",
    type: "tool",
    status: "live",
    description: "网页资源下载工具，帮助更轻量地提取和整理页面中的可下载内容。",
    href: "https://pixeldownload-web.vercel.app/",
    tags: ["tool"],
    typeLabel: "Tool",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "PixelDownload 面向网页资源获取和整理场景，重点是把下载动作做得更直观、更集中，减少在页面里反复手动处理的来回操作。",
      "它更适合需要快速保存、提取或整理在线素材的人，用更轻的工具形态完成原本分散的下载步骤。",
    ],
    useCases: [
      "快速提取并下载网页中的图片或资源内容",
      "整理灵感采集、参考素材和轻量网页资产",
      "减少重复手动保存资源时的碎片操作",
    ],
    roadmap: [
      "继续补充更多资源识别和批量处理能力",
      "优化下载队列、结果管理和导出体验",
    ],
  },
  {
    id: "pixelkb",
    name: "pixelKB",
    type: "tool",
    status: "live",
    description: "知识库工具项目，用更轻的方式整理、沉淀和调用个人内容资产。",
    href: "https://github.com/CClishan/pixelKB",
    tags: ["tool"],
    typeLabel: "Tool",
    actionLabel: "Open",
    availability: "Available now",
    detailText: [
      "pixelKB 面向个人知识整理和内容资产沉淀场景，把分散的信息、资料和记录收拢成更容易查找与复用的工具形态。",
      "它适合继续扩展 OnePixelAI 在轻工具之外的内容管理方向，让知识整理也保持同样直接、清爽的使用感。",
    ],
    useCases: [
      "整理个人资料、笔记和常用内容片段",
      "把零散信息沉淀成更可检索、更可复用的知识资产",
      "为后续内容生产或 AI 使用准备结构化素材",
    ],
    roadmap: [
      "继续补充知识组织、检索和调用体验",
      "探索与现有工具体系联动的内容工作流",
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
    id: "pixel-family-design-language",
    name: "Pixel 家族设计语言（AI友好版）",
    type: "skill",
    status: "live",
    description:
      "把 PixelSmall / PixelTurn 这一套家族风格整理成 AI 读得懂的设计系统文档，方便后续同系列工具稳定复用。",
    downloadHref: "/downloads/pixel-family-design-language.md",
    tags: ["experience"],
    typeLabel: "Experience",
    actionLabel: "Download .md",
    availability: "Available download now",
    detailAvailability: "Available download now",
    detailStyle: "style-2",
    detailText: [
      "这份文档把 Pixel 家族的设计语言从“感觉像”整理成“可执行规则”，让人和 AI 都能按同一套外壳继续做新工具，而不是每次重新摸索。",
      "它重点不是讲品牌故事，而是沉淀可复用的产品骨架、视觉令牌、组件语义、禁忌项和 agent 执行规则，适合继续扩展图片、PDF 和批处理类轻工具。",
    ],
    useCases: [
      "给同系列新工具建立稳定外壳，而不是每次重新设计",
      "让 AI 在做 Pixel 家族页面时有明确的布局、组件和 token 依据",
      "把设计决策从口头偏好沉淀成可维护的工程文档",
    ],
    roadmap: [
      "继续补充新组件验证后的家族规则和落地案例",
      "把未来新工具的共性模块继续回写进这份设计文档",
    ],
    detailHighlights: [
      {
        label: "文档角色",
        value: "设计侧 AGENTS.md",
        note: "不是展示稿，而是给人类和 agent 共读的家族设计契约。",
      },
      {
        label: "适用范围",
        value: "多工具共壳",
        note: "覆盖图片压缩、格式转换、PDF 处理、批量导出等同系列轻工具。",
      },
      {
        label: "视觉气质",
        value: "精准 / 克制 / 稳定",
        note: "明亮纸白、轻边框、柔阴影、少动效，优先可信和连续使用感。",
      },
      {
        label: "核心价值",
        value: "AI 可执行",
        note: "把氛围、token、组件语义和禁忌项一起落成结构化文本。",
      },
    ],
    detailSections: [
      {
        title: "文档定位",
        paragraphs: [
          "这份 DESIGN.md 被定义为设计侧的 AGENTS.md。它不负责讲营销故事，而是负责告诉后续的工具页面应该长什么样、哪些结构不能乱动、哪些模块可以替换。",
          "当没有明确参考站时，这份文档优先于临时口头描述；当单个工具业务不同，也优先保持家族外壳稳定，只更换模块内容。",
        ],
      },
      {
        title: "核心结论",
        bullets: [
          "让 agent 读懂设计语言，不能只说“做得像 PixelTurn 一点”。",
          "Figma 对人类够用，但对 agent 不够直接，必须把颜色、字号、圆角和组件语义写成文本。",
          "这是一份活文档，家族视觉进化时需要一起更新。",
          "既要写氛围，也要写 token、层级、结构和禁忌项。",
        ],
      },
      {
        title: "稳定骨架",
        bullets: [
          "桌面端固定三段：Header、Left Workspace、Right Configuration。",
          "内部默认走 12 栏网格，左侧工作区更宽，右侧配置区更稳。",
          "移动端不是缩小桌面版，而是改成 Header、Dropzone、信息卡、Queue、Configuration、底部悬浮操作栏的阅读顺序。",
        ],
      },
      {
        title: "视觉氛围与禁忌",
        bullets: [
          "主基调是明亮、偏纸白、中高对比，但不做纯黑纯白硬碰硬。",
          "情绪应该冷静、专业、像被长期维护的浏览器轻工具家族。",
          "禁止炫彩渐变主视觉、暗黑霓虹、大面积玻璃拟态、卡片套卡片和过多 hover 特效。",
        ],
      },
      {
        title: "组件与 Agent 规则",
        bullets: [
          "Header、LocaleSwitch、Dropzone、QueueList、SettingsPanel、SegmentedControl、RangeControl 和 MobileFabBar 都属于家族级稳定资产。",
          "先保骨架，再换业务；先复用现有组件，再谈新的视觉语言。",
          "移动端必须单独检查，中英双语也必须同时成立。",
        ],
      },
    ],
    detailTokens: [
      {
        name: "App Background",
        value: "#FDFDFD",
        usage: "页面总背景，保持纸白和轻工具气质。",
      },
      {
        name: "Panel Background",
        value: "rgba(255,255,255,0.96)",
        usage: "主卡片、配置卡和队列卡的基础表面。",
      },
      {
        name: "Border Default",
        value: "#E5E5E5",
        usage: "主边框与模块分隔，轻但有结构。",
      },
      {
        name: "Text Primary",
        value: "#1D1D1F",
        usage: "主标题和主信息内容。",
      },
      {
        name: "Accent Ink",
        value: "#171717",
        usage: "激活态、主按钮、当前选中项。",
      },
      {
        name: "Success",
        value: "#238057",
        usage: "只用于真实成功信息，不参与装饰。",
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
