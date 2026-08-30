import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-ibm-plex-mono), monospace",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: "var(--font-oswald), sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontSize: 15,
  padding: "15px 26px",
  borderRadius: 4,
  border: "1px solid #f5c518",
  background: "#f5c518",
  color: "#0a0a0a",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: "var(--font-oswald), sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontSize: 15,
  padding: "15px 26px",
  borderRadius: 4,
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "#f4f3ef",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

const BODIES = [
  {
    seal: "IADC",
    name: "IADC",
    reg: "United States",
    desc: "International Association of Drilling Contractors — a globally respected authority for operator competence in demanding industrial environments.",
  },
  {
    seal: "OSHA",
    name: "OSHA",
    reg: "United Kingdom",
    desc: "Occupational Safety and Health Administration standards — the benchmark for safe working practice that employers worldwide look for.",
  },
  {
    seal: "HHT",
    name: "HardHat Training Institute",
    reg: "Canada · Spain · USA",
    desc: "Internationally delivered operator and safety certification trusted across construction, logistics and heavy industry.",
  },
];

const PATHS = [
  {
    n: "01",
    title: "Fresh trainee",
    desc: "Complete any operator course end-to-end — theory, practical and assessment — and receive your certification and licence on success.",
  },
  {
    n: "02",
    title: "Experienced operator",
    desc: "Already operating but without a certificate? Take a short fresher course — online, physical or in-class — and we'll certify you.",
  },
  {
    n: "03",
    title: "Employer / corporate",
    desc: "Certify a whole crew. Our corporate desk arranges group certification and licensing aligned to your site requirements.",
  },
];

export default function CertificationPage() {
  return (
    <PageLayout>
      <PageHeader
        crumb="Certification"
        title="Certification & Licensing"
        lead="Certification from an industry expert can make a huge impact in your quest to become a global player. Whether you're an employer certifying your personnel, or an experienced operator who needs a globally recognised certification — Equilog is the pathway that connects you to the solution."
      />

      {/* Certification bodies */}
      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div className="reveal" style={{ maxWidth: 720, marginBottom: "clamp(34px,4vw,52px)" }}>
            <span className="eq-kicker">Globally Recognised</span>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "clamp(30px,4.2vw,52px)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Certified under three
              <br />
              international authorities
            </h2>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {BODIES.map(({ seal, name, reg, desc }) => (
              <div
                key={seal}
                style={{
                  background: "#141416",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
                className="cert-body-card"
              >
                <span
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "2px solid #f5c518",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    color: "#f5c518",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {seal}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 20,
                    lineHeight: 1.08,
                    margin: 0,
                  }}
                >
                  {name}
                </h3>
                <p style={{ ...mono, fontSize: 12, color: "#8e8e88", margin: 0, letterSpacing: "0.04em" }}>
                  {reg}
                </p>
                <p style={{ color: "#c7c6c0", fontSize: 15, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <p
            style={{
              ...mono,
              textAlign: "center",
              marginTop: 28,
              color: "#f5c518",
              letterSpacing: "0.06em",
            }}
          >
            Our certification is globally recognised.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section
        style={{
          padding: "clamp(64px,8vw,120px) 0",
          background: "#141416",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div className="reveal" style={{ maxWidth: 720, marginBottom: "clamp(34px,4vw,52px)" }}>
            <span className="eq-kicker">Pathways</span>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "clamp(30px,4.2vw,52px)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Three ways to get certified
            </h2>
          </div>

          <div
            className="reveal paths-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {PATHS.map(({ n, title, desc }) => (
              <div key={n} style={{ background: "#141416", padding: "34px 28px" }}>
                <div
                  style={{
                    ...mono,
                    fontSize: 13,
                    color: "#f5c518",
                    fontWeight: 600,
                    marginBottom: 14,
                  }}
                >
                  {n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 20,
                    lineHeight: 1.08,
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#8e8e88", fontSize: 15, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced operator split */}
      <section
        style={{
          background: "#141416",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="split-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "stretch",
          }}
        >
          <div style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
            <Image
              src="/img/doc10.jpeg"
              alt="Operators receiving certificates"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ padding: "clamp(40px,5vw,72px)" }}>
            <span className="eq-kicker">For Experienced Operators</span>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "clamp(30px,4.2vw,52px)",
                lineHeight: 1,
                margin: "0 0 20px",
              }}
            >
              No certificate yet?
              <br />
              We&apos;ll get you licensed.
            </h2>
            <p
              style={{
                fontSize: "clamp(18px,1.5vw,21px)",
                color: "#c7c6c0",
                maxWidth: "62ch",
                marginBottom: 26,
              }}
            >
              If you&apos;re a skilled operator without formal certification, you don&apos;t have
              to start from scratch. Undertake a focused fresher course — online, in person, or
              in class — and earn a globally recognised certificate that proves your competence to
              any employer.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" style={btnPrimary}>Start a fresher course</Link>
              <Link href="/verify" style={btnGhost}>Verify a certificate</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        kicker="★ Talk to us"
        heading="Let's connect you with the right certification."
        lead="Call or email and we'll help you serve your needs."
        primaryLabel="Call 0808 8821 2999"
        primaryHref="tel:08088212999"
        secondaryLabel="info@equilog.com.ng"
        secondaryHref="mailto:info@equilog.com.ng"
        secondaryTel
      />

      <style>{`
        @media (max-width: 840px) {
          .cert-body-card { grid-column: span 1; }
          .paths-grid { grid-template-columns: 1fr !important; }
          .split-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .cert-body-card:not(:first-child) { grid-column: span 1; }
        }
        @media (max-width: 840px) {
          div[class="cert-body-card"] { display: flex; }
        }
      `}</style>
    </PageLayout>
  );
}
