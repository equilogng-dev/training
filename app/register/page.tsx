"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";

const mono: React.CSSProperties = { fontFamily: "var(--font-ibm-plex-mono), monospace" };

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

const STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River",
  "Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano",
  "Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo",
  "Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara",
];

const COURSES = [
  "Crane Operator","Excavator Operator","Forklift Operator","Reach Stacker",
  "Basic Rigging","Commercial Truck Driving","Wheel Loader Operator","Safety in Construction",
];

type FormData = {
  fullname: string;
  dob: string;
  sex: string;
  tel: string;
  email: string;
  address: string;
  state: string;
  course: string;
  courseType: string;
  branch: string;
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>({
    fullname: "", dob: "", sex: "", tel: "", email: "",
    address: "", state: "", course: "", courseType: "", branch: "Lagos",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [success, setSuccess] = useState<{ name: string; ref: string } | null>(null);

  function validate() {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullname.trim()) errs.fullname = "Please enter your full name.";
    if (!form.dob) errs.dob = "Please enter your date of birth.";
    if (!form.sex) errs.sex = "Please select.";
    if (!form.tel.trim() || form.tel.replace(/\D/g, "").length < 7) errs.tel = "Please enter a valid phone number.";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.address.trim()) errs.address = "Please enter your address.";
    if (!form.state) errs.state = "Please select your state.";
    if (!form.course) errs.course = "Please choose a course.";
    if (!form.courseType) errs.courseType = "Please select a course type.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess({
        name: form.fullname.trim().split(" ")[0] || "trainee",
        ref: "EQL-" + Math.floor(100000 + Math.random() * 900000),
      });
    }
  }

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((err) => { const n = { ...err }; delete n[k]; return n; });
  };

  const Field = ({ id, label, required, error, children }: {
    id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
  }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label htmlFor={id} style={labelStyle}>
        {label} {required && <span style={{ color: "#f5c518" }}>*</span>}
      </label>
      {children}
      {error && <span style={{ ...mono, color: "#e89a8e", fontSize: 12.5 }}>{error}</span>}
    </div>
  );

  return (
    <PageLayout>
      <PageHeader
        crumb="Register"
        title="Register Online"
        lead={
          <>
            Reserve your seat in the next batch and automatically claim{" "}
            <strong style={{ color: "#f5c518" }}>₦20,000 off</strong> your course. New batches
            start Mondays, Wednesdays and Fridays.
          </>
        }
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="reg-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 40, alignItems: "start" }}
          >
            {/* Form card */}
            <div
              className="reveal"
              style={{
                background: "#141416",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 4,
                padding: "clamp(26px,3vw,40px)",
              }}
            >
              {success ? (
                <div style={{ textAlign: "center", padding: 20 }}>
                  <div
                    style={{
                      width: 78,
                      height: 78,
                      borderRadius: "50%",
                      background: "rgba(92,201,139,0.12)",
                      border: "2px solid #5cc98b",
                      display: "grid",
                      placeItems: "center",
                      margin: "0 auto 22px",
                      color: "#5cc98b",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "clamp(30px,4.2vw,52px)",
                      lineHeight: 1,
                      margin: "0 0 10px",
                    }}
                  >
                    Registration received
                  </h2>
                  <p style={{ color: "#8e8e88", maxWidth: "42ch", margin: "0 auto" }}>
                    Thank you, <strong style={{ color: "#f4f3ef" }}>{success.name}</strong>. Our
                    admissions team will call you to confirm your seat and payment. Your ₦20,000
                    online discount is locked in.
                  </p>
                  <div
                    style={{
                      ...mono,
                      fontSize: 15,
                      background: "#0c0c0d",
                      border: "1px solid rgba(255,255,255,0.16)",
                      borderRadius: 4,
                      padding: "12px 18px",
                      display: "inline-block",
                      margin: "18px 0",
                      color: "#f5c518",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {success.ref}
                  </div>
                  <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link
                      href="/courses"
                      style={{
                        display: "inline-flex",
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
                      Browse courses
                    </Link>
                    <button
                      onClick={() => { setSuccess(null); setForm({ fullname: "", dob: "", sex: "", tel: "", email: "", address: "", state: "", course: "", courseType: "", branch: "Lagos" }); setErrors({}); }}
                      style={{
                        display: "inline-flex",
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
                        cursor: "pointer",
                      }}
                    >
                      Register another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "clamp(20px,2.4vw,26px)",
                      lineHeight: 1.08,
                      marginBottom: 4,
                    }}
                  >
                    Trainee details
                  </h3>
                  <p style={{ color: "#8e8e88", fontSize: 14, margin: "0 0 6px" }}>
                    Fields marked <span style={{ color: "#f5c518" }}>*</span> are required.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18, marginTop: 18 }} noValidate>
                    <Field id="fullname" label="Full name" required error={errors.fullname}>
                      <input id="fullname" value={form.fullname} onChange={set("fullname")} placeholder="e.g. Chidi Okafor" style={{ ...inputStyle, borderColor: errors.fullname ? "#e06b5b" : "rgba(255,255,255,0.16)" }} />
                    </Field>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-row">
                      <Field id="dob" label="Date of birth" required error={errors.dob}>
                        <input id="dob" type="date" value={form.dob} onChange={set("dob")} style={{ ...inputStyle, borderColor: errors.dob ? "#e06b5b" : "rgba(255,255,255,0.16)" }} />
                      </Field>
                      <Field id="sex" label="Sex" required error={errors.sex}>
                        <select id="sex" value={form.sex} onChange={set("sex")} style={{ ...inputStyle, borderColor: errors.sex ? "#e06b5b" : "rgba(255,255,255,0.16)" }}>
                          <option value="">Select…</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </Field>
                    </div>

                    <Field id="tel" label="Phone number" required error={errors.tel}>
                      <input id="tel" type="tel" value={form.tel} onChange={set("tel")} placeholder="e.g. 0803 000 0000" style={{ ...inputStyle, borderColor: errors.tel ? "#e06b5b" : "rgba(255,255,255,0.16)" }} />
                    </Field>

                    <Field id="email" label="Email address" error={errors.email}>
                      <input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" style={{ ...inputStyle, borderColor: errors.email ? "#e06b5b" : "rgba(255,255,255,0.16)" }} />
                    </Field>

                    <Field id="address" label="Residential address" required error={errors.address}>
                      <input id="address" value={form.address} onChange={set("address")} placeholder="Street, area, city" style={{ ...inputStyle, borderColor: errors.address ? "#e06b5b" : "rgba(255,255,255,0.16)" }} />
                    </Field>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-row">
                      <Field id="state" label="State" required error={errors.state}>
                        <select id="state" value={form.state} onChange={set("state")} style={{ ...inputStyle, borderColor: errors.state ? "#e06b5b" : "rgba(255,255,255,0.16)" }}>
                          <option value="">Select state…</option>
                          {STATES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </Field>
                      <Field id="course" label="Course" required error={errors.course}>
                        <select id="course" value={form.course} onChange={set("course")} style={{ ...inputStyle, borderColor: errors.course ? "#e06b5b" : "rgba(255,255,255,0.16)" }}>
                          <option value="">Select course…</option>
                          {COURSES.map((c) => <option key={c}>{c}</option>)}
                        </select>
                      </Field>
                    </div>

                    <Field id="courseType" label="Course type" required error={errors.courseType}>
                      <select id="courseType" value={form.courseType} onChange={set("courseType")} style={{ ...inputStyle, borderColor: errors.courseType ? "#e06b5b" : "rgba(255,255,255,0.16)" }}>
                        <option value="">Select type…</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Refresher">Refresher</option>
                      </select>
                    </Field>

                    <Field id="branch" label="Preferred branch">
                      <select id="branch" value={form.branch} onChange={set("branch")} style={inputStyle}>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Benin</option>
                      </select>
                    </Field>

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
                        marginTop: 8,
                      }}
                    >
                      Submit registration →
                    </button>

                    <p style={{ ...mono, color: "#8e8e88", fontSize: 12, margin: "4px 0 0" }}>
                      By submitting you agree to be contacted by our admissions team. This is a
                      demo form — no data is sent.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside
              className="reveal reg-side"
              style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 18 }}
            >
              {/* Promo card */}
              <div
                style={{
                  background: "#f5c518",
                  color: "#000",
                  border: "1px solid #f5c518",
                  borderRadius: 4,
                  padding: 26,
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
                  ★ Online Offer
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 21,
                    margin: "0 0 6px",
                    color: "#000",
                  }}
                >
                  ₦20,000 OFF
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, color: "rgba(0,0,0,0.75)" }}>
                  Applied automatically to any operator course when you register online.
                </p>
              </div>

              {/* What's included */}
              <div
                style={{
                  background: "#141416",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  padding: 26,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 21,
                    margin: "0 0 14px",
                  }}
                >
                  What&apos;s included
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                  {[
                    "Multimedia theory & written assessment",
                    "Supervised practical on real machines",
                    "Globally recognised certificate & licence",
                    "Job-recommendation to recruiters",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 11, fontSize: 14.5, color: "#c7c6c0" }}>
                      <span style={{ color: "#f5c518", flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div
                style={{
                  background: "#141416",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  padding: 26,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 21,
                    margin: "0 0 10px",
                  }}
                >
                  Need help?
                </h3>
                <p style={{ color: "#8e8e88", fontSize: 14.5, margin: "0 0 14px" }}>
                  Call our team for a free programme guide.
                </p>
                <a
                  href="tel:08088212999"
                  style={{
                    display: "block",
                    textAlign: "center",
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
                  0808 8821 2999
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .reg-grid { grid-template-columns: 1fr !important; }
          .reg-side { position: static !important; flex-direction: column-reverse; }
        }
        @media (max-width: 620px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
