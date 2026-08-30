"use client";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";

const mono: React.CSSProperties = { fontFamily: "var(--font-ibm-plex-mono), monospace" };

const DB: Record<string, { name: string; course: string; issued: string; body: string; status: string }> = {
  "EQL-CRN-24-0917": { name: "Chidi Okafor", course: "Crane Operator Training", issued: "17 Sep 2024", body: "IADC · HardHat", status: "Active" },
  "EQL-FLT-23-4412": { name: "Aisha Bello", course: "Forklift Operator Training", issued: "02 Nov 2023", body: "OSHA · HardHat", status: "Active" },
  "EQL-RST-24-0088": { name: "Emeka Nwosu", course: "Reach Stacker Training", issued: "21 Mar 2024", body: "IADC · OSHA", status: "Active" },
};

type Result = { ok: true; id: string; rec: typeof DB[string] } | { ok: false; id: string };

export default function VerifyPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function run(id: string) {
    const key = id.trim().toUpperCase();
    if (!key) return;
    const rec = DB[key];
    setResult(rec ? { ok: true, id: key, rec } : { ok: false, id: key });
  }

  return (
    <PageLayout>
      <PageHeader
        crumb="Verify Certificate"
        title={<>Verify a<br />Certificate</>}
        lead="Confirm that an Equilog certificate is genuine. Enter the certificate ID printed on the document to check its status, holder and course."
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <div
              style={{
                background: "#141416",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 4,
                padding: "clamp(26px,3vw,40px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <label
                  style={{
                    ...mono,
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8e8e88",
                  }}
                >
                  Certificate ID
                </label>
                <form
                  onSubmit={(e) => { e.preventDefault(); run(certId); }}
                  style={{ display: "flex", gap: 12 }}
                  className="verify-form"
                >
                  <input
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g. EQL-CRN-24-0917"
                    autoComplete="off"
                    style={{
                      flex: 1,
                      background: "#0c0c0d",
                      border: "1px solid rgba(255,255,255,0.16)",
                      borderRadius: 4,
                      color: "#f4f3ef",
                      fontFamily: "inherit",
                      fontSize: 16,
                      padding: "13px 15px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontSize: 15,
                      padding: "13px 22px",
                      borderRadius: 4,
                      border: "1px solid #f5c518",
                      background: "#f5c518",
                      color: "#0a0a0a",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Verify
                  </button>
                </form>
              </div>

              <p style={{ ...mono, fontSize: 12.5, color: "#8e8e88", marginTop: 14 }}>
                Try a sample:{" "}
                {["EQL-CRN-24-0917", "EQL-FLT-23-4412", "EQL-RST-24-0088"].map((s, i) => (
                  <span key={s}>
                    <b
                      style={{ color: "#f5c518", cursor: "pointer" }}
                      onClick={() => { setCertId(s); run(s); }}
                    >
                      {s}
                    </b>
                    {i < 2 && " · "}
                  </span>
                ))}
              </p>

              {/* Result */}
              {result && (
                <div
                  style={{
                    marginTop: 24,
                    borderRadius: 4,
                    padding: 26,
                    ...(result.ok
                      ? { background: "rgba(92,201,139,0.08)", border: "1px solid rgba(92,201,139,0.45)" }
                      : { background: "rgba(224,107,91,0.08)", border: "1px solid rgba(224,107,91,0.45)" }),
                    animation: "eq-fade 0.3s cubic-bezier(0.2,0.7,0.2,1)",
                  }}
                >
                  {result.ok ? (
                    <>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-oswald), sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          fontSize: 14,
                          padding: "6px 12px",
                          borderRadius: 40,
                          marginBottom: 18,
                          background: "rgba(92,201,139,0.14)",
                          color: "#5cc98b",
                          border: "1px solid rgba(92,201,139,0.5)",
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.6">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Verified — Genuine
                      </span>
                      {[
                        ["Certificate ID", result.id],
                        ["Holder", result.rec.name],
                        ["Course", result.rec.course],
                        ["Issued", result.rec.issued],
                        ["Certifying body", result.rec.body],
                        ["Status", result.rec.status],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 16,
                            padding: "11px 0",
                            borderBottom: "1px solid rgba(255,255,255,0.10)",
                            fontSize: 15,
                          }}
                        >
                          <span style={{ ...mono, color: "#8e8e88", fontSize: 13 }}>{k}</span>
                          <span style={k === "Status" ? { color: "#5cc98b" } : {}}>{v}</span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-oswald), sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          fontSize: 14,
                          padding: "6px 12px",
                          borderRadius: 40,
                          marginBottom: 18,
                          background: "rgba(224,107,91,0.14)",
                          color: "#e89a8e",
                          border: "1px solid rgba(224,107,91,0.5)",
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.6">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                        Not found
                      </span>
                      <p style={{ margin: 0, color: "#c7c6c0" }}>
                        No certificate matches{" "}
                        <b style={{ ...mono, color: "#f4f3ef" }}>{result.id}</b>. Check the ID
                        and try again, or contact{" "}
                        <a href="mailto:support@equilog.com.ng" style={{ color: "#f5c518" }}>
                          support@equilog.com.ng
                        </a>
                        .
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <p
              style={{
                ...mono,
                fontSize: 12.5,
                color: "#8e8e88",
                marginTop: 18,
                textAlign: "center",
              }}
            >
              Can&apos;t find your certificate? Email{" "}
              <a href="mailto:support@equilog.com.ng" style={{ color: "#f5c518" }}>
                support@equilog.com.ng
              </a>{" "}
              with your full name and course.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 520px) {
          .verify-form { flex-direction: column; }
        }
      `}</style>
    </PageLayout>
  );
}
