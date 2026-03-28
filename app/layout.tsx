import type { Metadata } from "next";
import { Fira_Code, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "OnePixelAI — Tools",
  description: "OnePixelAI 的工具入口页，聚合图片工具、设计实验与 AI 制作项目。",
};

const bootScript = `
try {
  var key = 'onepixelai-boot-seen';
  var storage = window.localStorage;
  if (!storage.getItem(key)) {
    document.documentElement.classList.add('boot-pending');
    window.__ONEPIXELAI_BOOT__ = true;
    storage.setItem(key, '1');
  }
} catch (error) {
  window.__ONEPIXELAI_BOOT__ = false;
}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${syne.variable} ${firaCode.variable}`}>
      <body>
        <Script id="onepixelai-boot" strategy="beforeInteractive">
          {bootScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
