import HomeShell from "@/components/home-shell";
import { siteConfig, tools } from "@/lib/site-data";

export default function Home() {
  return <HomeShell siteConfig={siteConfig} tools={tools} />;
}
