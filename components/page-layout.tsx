import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#0c0c0d", color: "#f4f3ef", minHeight: "100vh" }}>
      <RevealObserver />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
