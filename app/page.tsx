"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/* ─── Reveal-on-scroll hook ─── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Shared style helpers ─── */
const EASE = "cubic-bezier(0.2,0.7,0.2,1)";

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: "var(--font-oswald), sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontSize: 15,
  lineHeight: 1,
  borderRadius: 4,
  border: "1px solid transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

const btnPrimary: React.CSSProperties = {
  ...btnBase,
  padding: "15px 26px",
  background: "#f5c518",
  color: "#0a0a0a",
  borderColor: "#f5c518",
};

const btnPrimaryLg: React.CSSProperties = {
  ...btnPrimary,
  padding: "18px 34px",
  fontSize: 17,
};

const btnGhost: React.CSSProperties = {
  ...btnBase,
  padding: "15px 26px",
  background: "transparent",
  color: "#f4f3ef",
  borderColor: "rgba(255,255,255,0.16)",
};

const btnGhostLg: React.CSSProperties = {
  ...btnGhost,
  padding: "18px 34px",
  fontSize: 17,
};

const btnDarkLg: React.CSSProperties = {
  ...btnBase,
  padding: "18px 34px",
  fontSize: 17,
  background: "#000",
  color: "#f4f3ef",
  borderColor: "#000",
};

const sectionPadding: React.CSSProperties = {
  paddingTop: "clamp(64px,8vw,120px)",
  paddingBottom: "clamp(64px,8vw,120px)",
};

const wrap: React.CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "0 28px",
};

const kicker: React.CSSProperties = {
  fontFamily: "var(--font-oswald), sans-serif",
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: 13,
  letterSpacing: "0.22em",
  color: "#f5c518",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 18,
};

/* ─── Course cards data ─── */
const COURSES = [
  {
    code: "CRN-08",
    img: "/img/doc07.jpeg",
    alt: "Crane operator training",
    title: "Crane Operator",
    desc: "Intensive hands-on training in safe, productive mobile-crane operation — theory plus heavy practical hours.",
    duration: "8",
    price: "₦650,000",
    href: "/courses#crane",
  },
  {
    code: "EXC-10",
    img: "/img/doc12.jpeg",
    alt: "Excavator training",
    title: "Excavator Operator",
    desc: "Best-practice safety and performance: controls, maintenance, written test and live operating experience.",
    duration: "10",
    price: "₦550,000",
    href: "/courses#excavator",
  },
  {
    code: "FLT-04",
    img: "/img/doc03.jpeg",
    alt: "Forklift training",
    title: "Forklift Operator",
    desc: "Lift and move loads safely using centre-of-gravity and stability principles for warehouses and yards.",
    duration: "4",
    price: "₦250,000",
    href: "/courses#forklift",
  },
  {
    code: "RST-06",
    img: "/img/doc15.jpeg",
    alt: "Reach stacker training",
    title: "Reach Stacker",
    desc: "Container-handler operation — starting, shutting down and procedures. On-site or certification-only routes.",
    duration: "Custom",
    price: "₦750,000",
    href: "/courses#reach-stacker",
  },
];

/* ─── Page ─── */
export default function Home() {
  useReveal();

  return (
    <div
      style={{ background: "#0c0c0d", color: "#f4f3ef", minHeight: "100vh" }}
    >
      <SiteHeader />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/img/hero.jpg"
            alt="Mobile crane operator training on a Lagos worksite"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "grayscale(0.15) contrast(1.05)",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,rgba(9,9,10,.97) 0%,rgba(9,9,10,.9) 42%,rgba(9,9,10,.55) 78%,rgba(9,9,10,.7) 100%)",
            }}
          />
        </div>

        <div
          style={{
            ...wrap,
            position: "relative",
            zIndex: 2,
            paddingTop: "clamp(70px,11vw,150px)",
            paddingBottom: "clamp(56px,8vw,96px)",
          }}
        >
          <span className="eq-kicker" style={kicker}>
            Nigeria&apos;s Heavy-Equipment Training Centre
          </span>

          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "clamp(40px,6.4vw,86px)",
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Operate the
            <br />
            machines that
            <br />
            <span style={{ color: "#f5c518" }}>build nations.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(18px,1.5vw,21px)",
              color: "#c7c6c0",
              maxWidth: "62ch",
              margin: "26px 0 34px",
            }}
          >
            Hands-on operator training on real cranes, excavators, forklifts and
            reach stackers — backed by globally recognised certification that
            gets you hired, in Nigeria and abroad.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/register" style={btnPrimaryLg}>
              Enrol in a course <span>→</span>
            </Link>
            <Link href="/courses" style={btnGhostLg}>
              View all courses
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "wrap",
              marginTop: 54,
              paddingTop: 30,
              borderTop: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {[
              ["8", "Operator courses"],
              ["3", "Global certifications"],
              ["3", "Branches nationwide"],
              ["100%", "Hands-on practical"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(34px,4vw,46px)",
                    color: "#f5c518",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#8e8e88",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginTop: 6,
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERT STRIP ─── */}
      <section
        style={{
          padding: "clamp(48px,5vw,72px) 0",
          background: "#141416",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={wrap}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: 12.5,
              letterSpacing: "0.16em",
              color: "#8e8e88",
              textTransform: "uppercase",
              marginBottom: 22,
              textAlign: "center",
            }}
          >
            Certification recognised by
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {[
              {
                seal: "IADC",
                name: "IADC",
                sub: "Intl. Assoc. of Drilling Contractors — USA",
              },
              {
                seal: "OSHA",
                name: "OSHA",
                sub: "Occupational Safety & Health — U.K.",
              },
              {
                seal: "HHT",
                name: "HardHat",
                sub: "Training Institute — Canada · Spain · USA",
              },
            ].map(({ seal, name, sub }) => (
              <div
                key={seal}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#1b1b1e",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  padding: "18px 22px",
                  flex: 1,
                  minWidth: 240,
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "#1b1b1e",
                    border: "2px solid #f5c518",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    color: "#f5c518",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {seal}
                </span>
                <div>
                  <b
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                      display: "block",
                      fontSize: 16,
                    }}
                  >
                    {name}
                  </b>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#8e8e88",
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES PREVIEW ─── */}
      <section style={sectionPadding}>
        <div style={wrap}>
          <div
            className="reveal"
            style={{ maxWidth: 720, marginBottom: "clamp(34px,4vw,52px)" }}
          >
            <span className="eq-kicker">Featured Courses</span>
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
              Train on the equipment
              <br />
              employers are hiring for.
            </h2>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))",
              gap: 22,
            }}
          >
            {COURSES.map((course) => (
              <article
                key={course.code}
                className="reveal course-card"
                style={{
                  background: "#161618",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: `border-color 0.2s, transform 0.2s ${EASE}`,
                }}
              >
                {/* Card image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/10",
                    overflow: "hidden",
                    background: "#1b1b1e",
                  }}
                >
                  <Image
                    src={course.img}
                    alt={course.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      background: "rgba(10,10,11,0.82)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      color: "#f5c518",
                      padding: "5px 9px",
                      borderRadius: 3,
                    }}
                  >
                    {course.code}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 10.5,
                      fontWeight: 600,
                      background: "#f5c518",
                      color: "#000",
                      padding: "5px 8px",
                      borderRadius: 3,
                      letterSpacing: "0.04em",
                    }}
                  >
                    ₦20K OFF
                  </span>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "22px 22px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "clamp(20px,2.4vw,26px)",
                      lineHeight: 1.08,
                      marginBottom: 10,
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "#c7c6c0",
                      fontSize: 15,
                      lineHeight: 1.55,
                      marginBottom: 18,
                      flex: 1,
                    }}
                  >
                    {course.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        fontSize: 11.5,
                        color: "#c7c6c0",
                        background: "#1b1b1e",
                        border: "1px solid rgba(255,255,255,0.10)",
                        padding: "5px 9px",
                        borderRadius: 3,
                      }}
                    >
                      <b style={{ color: "#f4f3ef", fontWeight: 600 }}>
                        {course.duration}
                      </b>{" "}
                      {course.duration === "Custom" ? "duration" : "weeks"}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        fontSize: 11.5,
                        color: "#c7c6c0",
                        background: "#1b1b1e",
                        border: "1px solid rgba(255,255,255,0.10)",
                        padding: "5px 9px",
                        borderRadius: 3,
                      }}
                    >
                      Theory + Practical
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      paddingTop: 16,
                      borderTop: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-oswald), sans-serif",
                          fontWeight: 600,
                          fontSize: 24,
                        }}
                      >
                        {course.price}
                      </span>
                      <small
                        style={{
                          display: "block",
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          fontSize: 10.5,
                          color: "#8e8e88",
                          fontWeight: 400,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginTop: 1,
                        }}
                      >
                        per trainee
                      </small>
                    </div>
                    <Link
                      href={course.href}
                      style={{
                        fontFamily: "var(--font-oswald), sans-serif",
                        textTransform: "uppercase",
                        fontSize: 14,
                        letterSpacing: "0.05em",
                        color: "#f5c518",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                      }}
                    >
                      Details <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 38 }}>
            <Link href="/courses" style={btnGhostLg}>
              See all 8 courses <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY EQUILOG ─── */}
      <section
        style={{
          ...sectionPadding,
          background: "#141416",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={wrap}>
          <div
            className="reveal"
            style={{ maxWidth: 720, marginBottom: "clamp(34px,4vw,52px)" }}
          >
            <span className="eq-kicker">Why Equilog</span>
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
              Real machines. Real worksites.
              <br />
              Certification that travels.
            </h2>
          </div>

          <div
            className="reveal feat-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 1,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    style={{ width: 42, height: 42 }}
                  >
                    <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
                title: "Globally recognised",
                text: "Certificates issued under IADC, OSHA and HardHat — accepted by employers and recruiters worldwide.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    style={{ width: 42, height: 42 }}
                  >
                    <path d="M3 17h2l1-4h7l2 4h6" />
                    <circle cx="7" cy="19" r="1.7" />
                    <circle cx="17" cy="19" r="1.7" />
                    <path d="M13 13V8h5l2 5" />
                  </svg>
                ),
                title: "Hands-on practical",
                text: "Every course pairs classroom theory with real operating hours on actual cranes, excavators and stackers.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    style={{ width: 42, height: 42 }}
                  >
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3.5 19c.5-3 2.8-4.5 5.5-4.5S14 16 14.5 19" />
                    <path d="M16 11l2 2 3.5-3.5" />
                  </svg>
                ),
                title: "Job assistance",
                text: "Top-performing trainees are recommended to companies and recruiters actively screening operators.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    style={{ width: 42, height: 42 }}
                  >
                    <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
                title: "Branches nationwide",
                text: "Train in Lagos, Abuja or Benin with dedicated practical sites for each class of equipment.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                style={{
                  background: "#141416",
                  padding: "34px 28px",
                }}
              >
                <div style={{ color: "#f5c518", marginBottom: 18 }}>{icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 19,
                    lineHeight: 1.08,
                    marginBottom: 9,
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#8e8e88", fontSize: 15, margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPLIT: Equilog Method ─── */}
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
          {/* Image */}
          <div
            style={{ position: "relative", minHeight: 380, overflow: "hidden" }}
          >
            <Image
              src="/img/mastery.jpg"
              alt="Excavator and haul truck on a practical training site"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Body */}
          <div style={{ padding: "clamp(40px,5vw,72px)" }}>
            <span className="eq-kicker">The Equilog Method</span>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "clamp(30px,4.2vw,52px)",
                lineHeight: 1,
                margin: "0 0 22px",
              }}
            >
              Theory in the classroom,
              <br />
              mastery in the seat.
            </h2>
            <p
              style={{
                fontSize: "clamp(18px,1.5vw,21px)",
                color: "#c7c6c0",
                maxWidth: "62ch",
                marginBottom: 26,
              }}
            >
              We don&apos;t teach operators from a textbook alone. Multimedia
              theory and interactive discussion lead into supervised practical
              sessions on live equipment — so you graduate confident, certified
              and ready for the job site.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 30px",
                display: "grid",
                gap: 14,
              }}
            >
              {[
                "Multimedia theory, written assessment & safety standards",
                "Supervised hands-on operation on real machines",
                "Inspection, maintenance & pre-operation checks",
                "Certification & licence presentation",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "#f5c518",
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    0{i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/gallery" style={btnGhost}>
              See training in action <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EMPLOYERS ─── */}
      <section style={sectionPadding}>
        <div style={wrap}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 4,
              overflow: "hidden",
              background: "#141416",
            }}
            className="split-layout"
          >
            <div style={{ padding: "clamp(40px,5vw,72px)" }}>
              <span className="eq-kicker">For Employers</span>
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
                Build a workforce
                <br />
                that&apos;s certified &amp; safe.
              </h2>
              <p
                style={{
                  fontSize: "clamp(18px,1.5vw,21px)",
                  color: "#c7c6c0",
                  maxWidth: "62ch",
                  marginBottom: 28,
                }}
              >
                Need to certify your personnel, train a crew of operators, or
                acquire vetted talent? Our corporate desk connects you with the
                solution to deliver real value on site.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" style={btnPrimary}>
                  Talk to our corporate desk
                </Link>
                <Link href="/certification" style={btnGhost}>
                  Certification
                </Link>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                minHeight: 380,
                overflow: "hidden",
              }}
            >
              <Image
                src="/img/doc02.jpeg"
                alt="Corporate training session at Equilog"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        style={{
          background: "#f5c518",
          color: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hazard stripe overlay */}
        <div
          className="eq-hazard"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "34%",
            height: "100%",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            ...wrap,
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
            ★ Limited Offer
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "clamp(30px,4.2vw,52px)",
              lineHeight: 1,
              margin: 0,
              color: "#000",
              maxWidth: "16ch",
            }}
          >
            Register online today and save ₦20,000.
          </h2>
          <p
            style={{
              fontSize: "clamp(18px,1.5vw,21px)",
              color: "rgba(0,0,0,0.72)",
              margin: "18px 0 30px",
            }}
          >
            New batches enrol on Mondays, Wednesdays and Fridays. Not sure which
            programme fits you? Call our team for a free guide.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/register" style={btnDarkLg}>
              Register now <span>→</span>
            </Link>
            <a
              href="tel:08088212999"
              style={{
                ...btnDarkLg,
                background: "transparent",
                color: "#000",
                borderColor: "rgba(0,0,0,0.3)",
              }}
            >
              Call 0808 8821 2999
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        .eq-kicker::before {
          content: "";
          width: 26px;
          height: 2px;
          background: #f5c518;
          flex-shrink: 0;
        }
        .course-card:hover {
          border-color: rgba(255,255,255,0.16) !important;
          transform: translateY(-3px) !important;
        }
        @media (max-width: 980px) {
          .split-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 620px) {
          .feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
