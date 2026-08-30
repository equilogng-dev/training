import Link from "next/link";

interface CtaBandProps {
  kicker: string;
  heading: React.ReactNode;
  lead: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  secondaryTel?: boolean;
}

const btnDarkLg: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: "var(--font-oswald), sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontSize: 17,
  lineHeight: 1,
  padding: "18px 34px",
  borderRadius: 4,
  border: "1px solid #000",
  background: "#000",
  color: "#f4f3ef",
  whiteSpace: "nowrap",
  cursor: "pointer",
  textDecoration: "none",
};

export function CtaBand({
  kicker,
  heading,
  lead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryTel,
}: CtaBandProps) {
  return (
    <section
      style={{
        background: "#f5c518",
        color: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "34%",
          height: "100%",
          background:
            "repeating-linear-gradient(-45deg,#f5c518 0 14px,#0a0a0a 14px 28px)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,6vw,80px) 28px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: 13,
            letterSpacing: "0.22em",
            color: "#000",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          {kicker}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "clamp(30px,4.2vw,52px)",
            lineHeight: 1,
            margin: "0 0 0",
            color: "#000",
            maxWidth: "20ch",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: "clamp(18px,1.5vw,21px)",
            color: "rgba(0,0,0,0.72)",
            margin: "18px 0 30px",
          }}
        >
          {lead}
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href={primaryHref} style={btnDarkLg}>
            {primaryLabel}
          </Link>
          {secondaryTel ? (
            <a
              href={secondaryHref}
              style={{
                ...btnDarkLg,
                background: "transparent",
                color: "#000",
                borderColor: "rgba(0,0,0,0.3)",
              }}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              style={{
                ...btnDarkLg,
                background: "transparent",
                color: "#000",
                borderColor: "rgba(0,0,0,0.3)",
              }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
