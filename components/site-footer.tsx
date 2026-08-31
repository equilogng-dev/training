import Link from "next/link";

const LogoSVG = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}
  >
    <path d="M3 17h2l1-4h7l2 4h6" />
    <circle cx="7" cy="19" r="1.6" />
    <circle cx="17" cy="19" r="1.6" />
    <path d="M13 13V8h5l2 5" />
  </svg>
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Hazard bar */}
      <div className="eq-hazard" style={{ height: 8 }} />

      <footer
        style={{
          background: "#141416",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "64px 0 0",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="foot-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 1.3fr",
              gap: 40,
            }}
          >
            {/* Brand col */}
            <div>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 11,
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 3,
                    background: "#f5c518",
                    display: "grid",
                    placeItems: "center",
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  <LogoSVG />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Equilog
                  <small
                    style={{
                      display: "block",
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 8.5,
                      fontWeight: 500,
                      letterSpacing: "0.32em",
                      color: "#8e8e88",
                      textTransform: "uppercase",
                      marginTop: 2,
                    }}
                  >
                    Technical Services
                  </small>
                </span>
              </Link>
              <p
                style={{
                  fontSize: 15,
                  color: "#8e8e88",
                  margin: "16px 0 20px",
                }}
              >
                Nigeria&apos;s heavy-equipment operator training centre.
                Globally recognised certification, real machines, real
                worksites.
              </p>
              {/* Socials */}
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                {[
                  {
                    href: "https://facebook.com/equilogng",
                    label: "Facebook",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ width: 18, height: 18 }}
                      >
                        <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14v-1c0-.6.3-1 1-1z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://instagram.com/equilog_ng",
                    label: "Instagram",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: 18, height: 18 }}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: "#",
                    label: "LinkedIn",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ width: 18, height: 18 }}
                      >
                        <path
                          d="M6.5 8.5V18M6.5 5.5v.01M11 18v-5c0-1.5 1-2.5 2.5-2.5S16 11.5 16 13v5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: "https://youtube.com/@equilogtechnicalservices",
                    label: "YouTube",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ width: 18, height: 18 }}
                      >
                        <path d="M21 8.5c-.2-1.3-.8-2-2-2.2C17 6 12 6 12 6s-5 0-7 .3c-1.2.2-1.8.9-2 2.2C2.8 10 2.8 12 2.8 12s0 2 .2 3.5c.2 1.3.8 2 2 2.2C7 18 12 18 12 18s5 0 7-.3c1.2-.2 1.8-.9 2-2.2.2-1.5.2-3.5.2-3.5s0-2-.2-3.5zM10 15V9l5 3z" />
                      </svg>
                    ),
                  },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid rgba(255,255,255,0.16)",
                      borderRadius: 4,
                      display: "grid",
                      placeItems: "center",
                      color: "#c7c6c0",
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Courses col */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  textTransform: "uppercase",
                  fontSize: 14,
                  letterSpacing: "0.10em",
                  color: "#8e8e88",
                  margin: "0 0 18px",
                }}
              >
                Courses
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {[
                  "Crane Operator",
                  "Excavator",
                  "Forklift",
                  "Reach Stacker",
                  "Truck Driving",
                  "All courses →",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/courses"
                      style={{ color: "#c7c6c0", fontSize: 15 }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company col */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  textTransform: "uppercase",
                  fontSize: 14,
                  letterSpacing: "0.10em",
                  color: "#8e8e88",
                  margin: "0 0 18px",
                }}
              >
                Company
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {[
                  ["Certification", "/certification"],
                  ["Job Board", "/jobs"],
                  ["Verify Certificate", "/verify"],
                  ["Gallery", "/gallery"],
                  ["FAQ", "/faq"],
                  ["Contact & Employers", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{ color: "#c7c6c0", fontSize: 15 }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact col */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  textTransform: "uppercase",
                  fontSize: 14,
                  letterSpacing: "0.10em",
                  color: "#8e8e88",
                  margin: "0 0 18px",
                }}
              >
                Get in touch
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {[
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: 17, height: 17 }}
                      >
                        <path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z" />
                      </svg>
                    ),
                    content: (
                      <a
                        href="tel:08088212999"
                        style={{ color: "#c7c6c0", fontSize: 14.5 }}
                      >
                        0808 882 1299
                      </a>
                    ),
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: 17, height: 17 }}
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    ),
                    content: (
                      <a
                        href="mailto:info@equilog.com.ng"
                        style={{ color: "#c7c6c0", fontSize: 14.5 }}
                      >
                        info@equilog.com.ng
                      </a>
                    ),
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: 17, height: 17 }}
                      >
                        <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    ),
                    content: (
                      <span style={{ color: "#c7c6c0", fontSize: 14.5 }}>
                        Lagos · Abuja · Benin
                      </span>
                    ),
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: 17, height: 17 }}
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 9h18M8 3v4M16 3v4" />
                      </svg>
                    ),
                    content: (
                      <span style={{ color: "#c7c6c0", fontSize: 14.5 }}>
                        Training: Mon · Wed · Fri
                      </span>
                    ),
                  },
                ].map(({ icon, content }, i) => (
                  <li key={i} style={{ display: "flex", gap: 10 }}>
                    <span
                      style={{ color: "#f5c518", flexShrink: 0, marginTop: 3 }}
                    >
                      {icon}
                    </span>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
              marginTop: 54,
              padding: "22px 0",
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap" as const,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 12.5,
              color: "#6a6a64",
            }}
          >
            <span>
              © {year} Equilog Technical Services. All rights reserved.
            </span>
            <span>
              IADC · OSHA · HARDHAT — globally recognised certification
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 980px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 34px !important; }
        }
        @media (max-width: 620px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
