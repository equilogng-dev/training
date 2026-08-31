"use client";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-ibm-plex-mono), monospace",
};

const inputStyle: React.CSSProperties = {
  background: "#0c0c0d",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 4,
  color: "#f4f3ef",
  fontFamily: "inherit",
  fontSize: 16,
  padding: "13px 15px",
  width: "100%",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  ...mono,
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#8e8e88",
};

const TYPES = [
  "Prospective trainee",
  "Experienced operator (certification)",
  "Employer — operator training",
  "Employer — talent acquisition",
  "Feedback / complaint",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    msg: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Enter a valid email.";
    if (!form.type) errs.type = "Please select.";
    if (!form.msg.trim()) errs.msg = "Please add a message.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k])
        setErrors((err) => {
          const n = { ...err };
          delete n[k];
          return n;
        });
    };

  return (
    <PageLayout>
      <PageHeader
        crumb="Contact"
        title="Get in Touch"
        lead="Admissions, corporate training, certification or talent acquisition — reach the right desk below, or send us a message and we'll get back to you."
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 36,
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div
              className="reveal"
              style={{
                background: "#141416",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 4,
                padding: "clamp(26px,3vw,40px)",
              }}
            >
              {submitted ? (
                <p
                  style={{ color: "#5cc98b", ...mono, fontSize: 14, margin: 0 }}
                >
                  ✓ Thanks — your message has been noted. We&apos;ll be in
                  touch. (Demo form — no data sent.)
                </p>
              ) : (
                <>
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
                    Send a message
                  </h3>
                  <p
                    style={{
                      color: "#8e8e88",
                      fontSize: 14,
                      margin: "0 0 20px",
                    }}
                  >
                    We typically respond within one business day.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: "grid", gap: 18 }}
                    noValidate
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 18,
                      }}
                      className="form-row"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 7,
                        }}
                      >
                        <label style={labelStyle}>
                          Name <span style={{ color: "#f5c518" }}>*</span>
                        </label>
                        <input
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Your name"
                          required
                          style={{
                            ...inputStyle,
                            borderColor: errors.name
                              ? "#e06b5b"
                              : "rgba(255,255,255,0.16)",
                          }}
                        />
                        {errors.name && (
                          <span
                            style={{
                              ...mono,
                              color: "#e89a8e",
                              fontSize: 12.5,
                            }}
                          >
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 7,
                        }}
                      >
                        <label style={labelStyle}>Phone</label>
                        <input
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="0803 000 0000"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                      }}
                    >
                      <label style={labelStyle}>
                        Email <span style={{ color: "#f5c518" }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@email.com"
                        style={{
                          ...inputStyle,
                          borderColor: errors.email
                            ? "#e06b5b"
                            : "rgba(255,255,255,0.16)",
                        }}
                      />
                      {errors.email && (
                        <span
                          style={{ ...mono, color: "#e89a8e", fontSize: 12.5 }}
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                      }}
                    >
                      <label style={labelStyle}>
                        I&apos;m reaching out as{" "}
                        <span style={{ color: "#f5c518" }}>*</span>
                      </label>
                      <select
                        value={form.type}
                        onChange={set("type")}
                        style={{
                          ...inputStyle,
                          borderColor: errors.type
                            ? "#e06b5b"
                            : "rgba(255,255,255,0.16)",
                        }}
                      >
                        <option value="">Select…</option>
                        {TYPES.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                      {errors.type && (
                        <span
                          style={{ ...mono, color: "#e89a8e", fontSize: 12.5 }}
                        >
                          {errors.type}
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                      }}
                    >
                      <label style={labelStyle}>
                        Message <span style={{ color: "#f5c518" }}>*</span>
                      </label>
                      <textarea
                        value={form.msg}
                        onChange={set("msg")}
                        rows={5}
                        placeholder="How can we help?"
                        style={{
                          ...inputStyle,
                          borderColor: errors.msg
                            ? "#e06b5b"
                            : "rgba(255,255,255,0.16)",
                          resize: "vertical",
                        }}
                      />
                      {errors.msg && (
                        <span
                          style={{ ...mono, color: "#e89a8e", fontSize: 12.5 }}
                        >
                          {errors.msg}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        fontFamily: "var(--font-oswald), sans-serif",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontSize: 17,
                        padding: "18px 34px",
                        borderRadius: 4,
                        border: "1px solid #f5c518",
                        background: "#f5c518",
                        color: "#0a0a0a",
                        cursor: "pointer",
                      }}
                    >
                      Send message →
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact details */}
            <div className="reveal">
              {[
                {
                  content: (
                    <div
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                          background: "#1b1b1e",
                          border: "1px solid rgba(255,255,255,0.16)",
                          display: "grid",
                          placeItems: "center",
                          color: "#f5c518",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          style={{ width: 19, height: 19 }}
                        >
                          <path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            ...mono,
                            fontSize: 11,
                            letterSpacing: "0.10em",
                            textTransform: "uppercase",
                            color: "#8e8e88",
                            marginBottom: 8,
                          }}
                        >
                          Call / Chat
                        </div>
                        <a
                          href="tel:08088212999"
                          style={{
                            fontFamily: "var(--font-oswald), sans-serif",
                            fontWeight: 600,
                            fontSize: 22,
                            color: "#f4f3ef",
                            letterSpacing: "0.01em",
                          }}
                        >
                          0808 882 1299
                        </a>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "General enquiries",
                  value: "info@equilog.com.ng",
                  href: "mailto:info@equilog.com.ng",
                },
                {
                  label: "Corporate / Employer desk",
                  value: "training@equilog.com.ng",
                  href: "mailto:training@equilog.com.ng",
                },
                {
                  label: "Feedback & complaints",
                  value: "support@equilog.com.ng",
                  href: "mailto:support@equilog.com.ng",
                },
                {
                  content: (
                    <div
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                          background: "#1b1b1e",
                          border: "1px solid rgba(255,255,255,0.16)",
                          display: "grid",
                          placeItems: "center",
                          color: "#f5c518",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          style={{ width: 19, height: 19 }}
                        >
                          <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            ...mono,
                            fontSize: 11,
                            letterSpacing: "0.10em",
                            textTransform: "uppercase",
                            color: "#8e8e88",
                            marginBottom: 8,
                          }}
                        >
                          Branches
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontFamily: "var(--font-oswald), sans-serif",
                            fontSize: 18,
                            textTransform: "uppercase",
                            letterSpacing: "0.03em",
                          }}
                        >
                          Lagos · Abuja · Benin
                        </p>
                      </div>
                    </div>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#141416",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 4,
                    padding: 26,
                    marginBottom: 16,
                  }}
                >
                  {"content" in item ? (
                    item.content
                  ) : (
                    <>
                      <div
                        style={{
                          ...mono,
                          fontSize: 11,
                          letterSpacing: "0.10em",
                          textTransform: "uppercase",
                          color: "#8e8e88",
                          marginBottom: 8,
                        }}
                      >
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        style={{
                          fontFamily: "var(--font-oswald), sans-serif",
                          fontWeight: 600,
                          fontSize: 22,
                          color: "#f4f3ef",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.value}
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employers section */}
      <section
        style={{
          padding: "clamp(64px,8vw,120px) 0",
          background: "#141416",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="reveal"
            style={{ maxWidth: 720, marginBottom: "clamp(34px,4vw,52px)" }}
          >
            <span className="eq-kicker">For Employers</span>
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
              How our corporate desk helps
            </h2>
            <p
              style={{
                fontSize: "clamp(18px,1.5vw,21px)",
                color: "#c7c6c0",
                marginTop: 16,
              }}
            >
              Contact our corporate desk at{" "}
              <a
                href="mailto:training@equilog.com.ng"
                style={{ color: "#f5c518" }}
              >
                training@equilog.com.ng
              </a>{" "}
              for details.
            </p>
          </div>

          <div
            className="reveal emp-grid"
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
            {[
              {
                n: "i",
                title: "Operator Training",
                desc: "Train a single hire or a full crew across any equipment class, on schedules that fit your operations.",
              },
              {
                n: "ii",
                title: "Certification",
                desc: "Certify and licence existing personnel under globally recognised IADC, OSHA and HardHat standards.",
              },
              {
                n: "iii",
                title: "Talent Acquisition",
                desc: "Tell us the operators you need and we'll recommend vetted, certified candidates for screening.",
              },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                style={{ background: "#141416", padding: "32px 26px" }}
              >
                <div
                  style={{
                    ...mono,
                    fontSize: 13,
                    color: "#f5c518",
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 19,
                    lineHeight: 1.08,
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#8e8e88", fontSize: 14.5, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 840px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .emp-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 620px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
