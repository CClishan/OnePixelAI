# OnePixelAI

`OnePixelAI` 是一个中文优先的单页入口站，用来承载个人介绍、图片工具索引与 Skill 分享。

当前内容包含：

- `PixelTurn`：图片格式转换
- `PixelSmall`：图片压缩
- `PixelScan`：卡牌居中度检测（开发中）
- `Impeccable` / `Taste Skill`：外部 Skill 分享入口

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules

## 本地开发

```bash
npm install
npm run dev
```

默认访问 [http://127.0.0.1:3000](http://127.0.0.1:3000)。

## 生产构建

```bash
npm run build
npm run start
```

## 关键文件

- 站点内容配置：`/lib/site-data.ts`
- 首页结构与交互：`/components/home-shell.tsx`
- 首页样式：`/components/home-shell.module.css`
- 全局样式与 token：`/app/globals.css`

## 部署

推荐直接部署到 Vercel：

1. 导入当前 GitHub 仓库
2. Framework Preset 选择 `Next.js`
3. 保持默认构建命令与输出设置
4. 部署完成后绑定自定义域名（如果有）
