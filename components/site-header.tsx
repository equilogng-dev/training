"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  ["Courses", "/courses"],
  ["Certification", "/certification"],
  ["Jobs", "/jobs"],
  ["Gallery", "/gallery"],
  ["Verify", "/verify"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* Promo bar */}
      <div
        style={{
          background: "#f5c518",
          color: "#0a0a0a",
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "13.5px",
          fontWeight: 500,
          textAlign: "center",
          padding: "9px 16px",
          letterSpacing: "0.01em",
          position: "relative",
          zIndex: 60,
        }}
      >
        <span style={{ fontWeight: 700 }}>★</span>{" "}
        <strong>NEW BATCH ENROLLING</strong> — Register online &amp; get{" "}
        <strong>₦20,000 OFF</strong> any operator course.{" "}
        <Link
          href="/register"
          style={{ textDecoration: "underline", textUnderlineOffset: 2, fontWeight: 600 }}
        >
          Claim discount →
        </Link>
      </div>

      {/* Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(12,12,13,0.86)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            height: 68,
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}
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
                boxShadow: "0 0 0 3px rgba(245,197,24,0.15)",
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

          {/* Desktop nav links */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 5, marginLeft: "auto" }}
            className="hidden-mobile-nav"
          >
            {NAV.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontSize: 14.5,
                  letterSpacing: "0.05em",
                  color: isActive(href) ? "#f5c518" : "#c7c6c0",
                  padding: "9px 13px",
                  borderRadius: 4,
                  transition: "color 0.15s",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/register"
            className="nav-register-cta"
            style={{
              marginLeft: 8,
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
              cursor: "pointer",
            }}
          >
            Register Now
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-nav-toggle"
            aria-label="Menu"
            style={{
              display: "none",
              marginLeft: "auto",
              background: "none",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 4,
              width: 42,
              height: 38,
              color: "#f4f3ef",
              cursor: "pointer",
              placeItems: "center",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, margin: "auto", display: "block" }}>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
            }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "min(82vw, 340px)",
              background: "#141416",
              borderLeft: "1px solid rgba(255,255,255,0.10)",
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
              style={{
                alignSelf: "flex-end",
                background: "none",
                border: 0,
                color: "#f4f3ef",
                fontSize: 30,
                cursor: "pointer",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              ×
            </button>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                textTransform: "uppercase",
                fontSize: 20,
                letterSpacing: "0.04em",
                padding: "13px 8px",
                borderBottom: "1px solid rgba(255,255,255,0.10)",
                color: pathname === "/" ? "#f5c518" : "#c7c6c0",
              }}
            >
              Home
            </Link>
            {NAV.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  textTransform: "uppercase",
                  fontSize: 20,
                  letterSpacing: "0.04em",
                  padding: "13px 8px",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  color: isActive(href) ? "#f5c518" : "#c7c6c0",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
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
              }}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .hidden-mobile-nav { display: none !important; }
          .nav-register-cta { display: none !important; }
          .mobile-nav-toggle { display: grid !important; }
        }
      `}</style>
    </>
  );
}
