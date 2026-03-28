# OnePixelAI

OnePixelAI 是一个中文优先的个人工具入口页，当前聚合图片格式转换、图片压缩和开发中的居中检测工具。

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules + 全局设计变量

## 本地开发

```bash
npm install
npm run dev
```

默认访问 [http://localhost:3000](http://localhost:3000)。

## 生产构建

```bash
npm run build
npm run start
```

## 内容配置

- 站点信息在 `C:\Users\L\Documents\onepixelai\lib\site-data.ts`
- 首页交互与结构在 `C:\Users\L\Documents\onepixelai\components\home-shell.tsx`
- 样式在 `C:\Users\L\Documents\onepixelai\components\home-shell.module.css`

后续新增工具时，优先直接补充 `tools` 配置数组即可。
