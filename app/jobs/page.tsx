"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";

const mono: React.CSSProperties = { fontFamily: "var(--font-ibm-plex-mono), monospace" };

const JOBS = [
  {
    cc: "NG", cat: ["local"],
    title: "Mobile Crane Operator",
    location: "Apapa Port, Lagos", type: "Full-time", tag: "local",
  },
  {
    cc: "NG", cat: ["local"],
    title: "Reach Stacker Operator",
    location: "Onne Terminal, Rivers", type: "Contract", tag: "local",
  },
  {
    cc: "NG", cat: ["local"],
    title: "Excavator Operator",
    location: "Abuja (FCT)", type: "Full-time", tag: "local",
  },
  {
    cc: "NG", cat: ["local"],
    title: "Forklift Operator",
    location: "Benin City, Edo", type: "Full-time", tag: "local",
  },
  {
    cc: "CA", cat: ["foreign", "visa"],
    title: "Heavy Equipment Operator — Canada",
    location: "Alberta", type: "Full-time", tag: "visa",
  },
  {
    cc: "AU", cat: ["foreign", "visa"],
    title: "Crane Operator — Australia",
    location: "Western Australia", type: "FIFO", tag: "visa",
  },
  {
    cc: "NZ", cat: ["foreign", "visa"],
    title: "Excavator Operator — New Zealand",
    location: "Auckland", type: "Full-time", tag: "visa",
  },
  {
    cc: "UK", cat: ["foreign", "visa"],
    title: "Telehandler / Forklift Operator — U.K.",
    location: "Manchester", type: "Full-time", tag: "visa",
  },
  {
    cc: "UK", cat: ["foreign"],
    title: "HGV / Class A Truck Driver — U.K.",
    location: "Birmingham", type: "Full-time", tag: "foreign",
  },
];

const FILTERS = [
  { key: "all", label: "All roles" },
  { key: "local", label: "Local · Nigeria" },
  { key: "foreign", label: "Foreign" },
  { key: "visa", label: "Visa sponsorship" },
];

const TagStyle: Record<string, React.CSSProperties> = {
  local: {
    background: "rgba(245,197,24,0.12)",
    borderColor: "rgba(245,197,24,0.40)",
    color: "#f5c518",
  },
  visa: {
    background: "rgba(92,201,139,0.12)",
    borderColor: "rgba(92,201,139,0.40)",
    color: "#5cc98b",
  },
  foreign: {
    background: "transparent",
    borderColor: "rgba(255,255,255,0.16)",
    color: "#c7c6c0",
  },
};

const TAG_LABELS: Record<string, string> = {
  local: "Local",
  visa: "Visa sponsored",
  foreign: "Foreign",
};

export default function JobsPage() {
  const [active, setActive] = useState("all");

  const visible = JOBS.filter((j) => active === "all" || j.cat.includes(active));

  return (
    <PageLayout>
      <PageHeader
        crumb="Job Board"
        title="Job Board"
        lead="Operator vacancies sourced through our recruiter network — local roles across Nigeria and foreign positions with visa sponsorship. Equilog recommends top-performing trainees to companies actively screening operators."
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          {/* Filter chips */}
          <div className="reveal" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: 14,
                  padding: "9px 18px",
                  borderRadius: 40,
                  border: `1px solid ${active === key ? "#f5c518" : "rgba(255,255,255,0.16)"}`,
                  background: active === key ? "#f5c518" : "transparent",
                  color: active === key ? "#000" : "#c7c6c0",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {visible.length === 0 ? (
              <p style={{ ...mono, color: "#8e8e88", textAlign: "center", padding: "50px 0" }}>
                No roles in this category right now — check back soon.
              </p>
            ) : (
              visible.map((job, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    background: "#141416",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 4,
                    padding: "20px 24px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      ...mono,
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.06em",
                      width: 46,
                      height: 46,
                      borderRadius: 4,
                      background: "#1b1b1e",
                      border: "1px solid rgba(255,255,255,0.16)",
                      display: "grid",
                      placeItems: "center",
                      color: "#f5c518",
                      flexShrink: 0,
                    }}
                  >
                    {job.cc}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald), sans-serif",
                        fontWeight: 600,
                        fontSize: 19,
                        lineHeight: 1.08,
                        marginBottom: 4,
                        textTransform: "none",
                      }}
                    >
                      {job.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px 16px",
                        ...mono,
                        fontSize: 12.5,
                        color: "#8e8e88",
                        alignItems: "center",
                      }}
                    >
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span
                        style={{
                          ...mono,
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          padding: "5px 9px",
                          borderRadius: 3,
                          border: "1px solid",
                          ...TagStyle[job.tag],
                        }}
                      >
                        {TAG_LABELS[job.tag]}
                      </span>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }} className="job-apply">
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
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
                        textDecoration: "none",
                      }}
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Employer CTA */}
          <div
            className="reveal"
            style={{
              marginTop: 34,
              background: "#141416",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 4,
              padding: "clamp(26px,3vw,40px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "clamp(20px,2.4vw,26px)",
                  lineHeight: 1.08,
                  marginBottom: 6,
                }}
              >
                Are you a recruiter or employer?
              </h3>
              <p style={{ color: "#8e8e88", fontSize: 15, margin: 0 }}>
                Tell us the operators you need — we&apos;ll recommend our best-performing,
                certified candidates for screening.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
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
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Post a vacancy
            </Link>
          </div>

          <p style={{ ...mono, marginTop: 20, fontSize: 12.5, color: "#6a6a64" }}>
            Listings are illustrative and refreshed regularly. Equilog recommends candidates
            for screening and selection; we are not a human-resources recruiter.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 620px) {
          .job-apply { width: 100%; }
          .job-apply a { width: 100%; justify-content: center; }
        }
      `}</style>
    </PageLayout>
  );
}
