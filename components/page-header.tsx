import Link from "next/link";

interface PageHeaderProps {
  crumb: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({ crumb, title, lead, children }: PageHeaderProps) {
  return (
    <section
      style={{
        padding: "clamp(54px,7vw,96px) 0 clamp(36px,4vw,52px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        position: "relative",
      }}
    >
      {/* Left hazard stripe */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background: "repeating-linear-gradient(-45deg,#f5c518 0 14px,#0a0a0a 14px 28px)",
        }}
      />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: 12.5,
            color: "#8e8e88",
            letterSpacing: "0.05em",
            marginBottom: 20,
          }}
        >
          <Link href="/" style={{ color: "inherit" }}>
            Home
          </Link>
          {" / "}
          {crumb}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "clamp(38px,5.5vw,72px)",
            lineHeight: 0.96,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "clamp(18px,1.5vw,21px)",
            color: "#c7c6c0",
            maxWidth: "62ch",
            marginTop: 20,
            marginBottom: 0,
          }}
        >
          {lead}
        </p>
        {children}
      </div>
    </section>
  );
}
