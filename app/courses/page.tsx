import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

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

const COURSES = [
  {
    id: "crane",
    code: "CRN-08",
    disc: true,
    img: "/img/doc07.jpeg",
    imgAlt: "Crane operator training",
    title: "Crane Operator Training",
    desc: "An intensive, hands-on programme that builds a genuine understanding of correct crane operation — improving both safety and productivity. Trainees graduate more knowledgeable, competent and confident, and receive certification on successful completion.",
    cost: "₦650,000",
    duration: "8 Weeks",
    format: "Theory + Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "excavator",
    code: "EXC-10",
    disc: true,
    img: "/img/doc12.jpeg",
    imgAlt: "Excavator operator training",
    title: "Excavator Operator Training",
    desc: "Operators learn the best safety and performance practices: current health-and-safety standards, proper operating techniques and preventative maintenance. The course combines classroom theory, an interactive video session, a written test and hands-on operating experience.",
    cost: "₦550,000",
    duration: "10 Weeks",
    format: "Theory + Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "forklift",
    code: "FLT-04",
    disc: true,
    img: "/img/doc03.jpeg",
    imgAlt: "Forklift operator training",
    title: "Forklift Operator Training",
    desc: "Build the skills to operate forklifts used across construction sites, warehouses and distribution centres. Trainees master safe lifting based on centre-of-gravity and stability principles, core operator safety rules, hazardous-condition awareness and safe traffic patterns.",
    cost: "₦250,000",
    duration: "4 Weeks",
    format: "Theory + Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "reach-stacker",
    code: "RST-06",
    disc: true,
    img: "/img/doc15.jpeg",
    imgAlt: "Reach stacker / container handler training",
    title: "Reach Stacker Training",
    desc: "Accredited reach-stacker and container-handler training, with operator certificates and licences. Learners master starting, shutting down and full operating procedures. On-site training and certification-only routes are available — apply and start any time.",
    cost: "₦750,000",
    duration: "Custom",
    format: "Theory / Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "rigging",
    code: "RIG-02",
    disc: false,
    img: "/img/doc02.jpeg",
    imgAlt: "Basic rigging training session",
    title: "Basic Rigging",
    desc: "Covers the general safety rules of crane rigging, communicating effectively with crane operators, and selecting and correctly using slings and hooks. Trainees also work through hitch configurations riggers rely on — including the Choke Hitch and Double Choke Hitch.",
    cost: "₦400,000",
    duration: "2 Weeks",
    format: "Theory + Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "truck-driving",
    code: "TRK-08",
    disc: true,
    img: null,
    imgAlt: "Commercial truck driving",
    title: "Commercial Truck Driving",
    desc: "Classroom theory plus hands-on experience leading toward a Class A commercial driver's licence. Students learn the core skills of a safe, professional truck driver — including turns with a trailer, shifting a 10-speed manual semi, yard skills and pre-trip inspection.",
    cost: "₦750,000",
    duration: "8 Weeks",
    format: "Class A CDL",
    prereq: "Prerequisite — basic education, basic driving skill & fitness",
  },
  {
    id: "wheel-loader",
    code: "WHL-04",
    disc: true,
    img: null,
    imgAlt: "Wheel loader operator",
    title: "Wheel Loader Operator",
    desc: "An eLearning-led course introducing new operators to wheel-loader safety, machine controls, maintenance, inspection and operating procedures — and a refresher for experienced hands. Available on any web-connected device with engaging activities, full narration and HD video.",
    cost: "On Request",
    duration: "4 Weeks",
    format: "eLearning + Practical",
    prereq: "Prerequisite — basic education, mental & physical fitness",
  },
  {
    id: "safety",
    code: "SAF-01",
    disc: false,
    img: "/img/doc05.jpeg",
    imgAlt: "Safety in construction classroom session",
    title: "Safety in Construction",
    desc: "A focused programme on hazard awareness, site safety standards and safe working practices for construction environments — ideal for new entrants and crews that need to align with recognised health-and-safety expectations on the job site.",
    cost: "On Request",
    duration: "Custom",
    format: "Theory",
    prereq: "Prerequisite — basic education",
  },
];

const LOCATIONS = [
  { equipment: "Forklift", location: "Classic Terminal, by Ojo Barracks" },
  { equipment: "Excavator", location: "Agboju, Lagos" },
  { equipment: "Crane", location: "Jojo Terminal, opp. Ojo Barracks" },
  {
    equipment: "Reach Stacker",
    location: "Jojo Terminal · 2nd Rainbow, Oshodi-Apapa Expressway",
  },
  { equipment: "Truck Driving", location: "Ibeju-Lekki, Lagos" },
  { equipment: "Pay Loader", location: "Mainland, Agboju" },
];

const mono: React.CSSProperties = {
  fontFamily: "var(--font-ibm-plex-mono), monospace",
};

export default function CoursesPage() {
  return (
    <PageLayout>
      <PageHeader
        crumb="Courses"
        title="Operator Courses"
        lead="Eight hands-on programmes across cranes, earth-moving and material-handling equipment. Every course blends multimedia theory with supervised practical hours and ends in globally recognised certification."
      >
        <div
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 26 }}
        >
          <Link href="/register" style={btnPrimary}>
            Register &amp; save ₦20,000
          </Link>
          <a href="tel:08088212999" style={btnGhost}>
            Free programme guide
          </a>
        </div>
      </PageHeader>

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          {COURSES.map((course, i) => {
            const even = i % 2 === 1;
            return (
              <article
                key={course.id}
                id={course.id}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#141416",
                  marginBottom: 26,
                  scrollMarginTop: 120,
                }}
              >
                {/* Media */}
                <div
                  style={{
                    position: "relative",
                    minHeight: 340,
                    overflow: "hidden",
                    order: even ? 2 : 0,
                    background: "#1b1b1e",
                  }}
                  className="course-media"
                >
                  {course.img ? (
                    <Image
                      src={course.img}
                      alt={course.imgAlt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "repeating-linear-gradient(45deg,#161618 0 11px,#1b1b1e 11px 22px)",
                        display: "grid",
                        placeItems: "center",
                        color: "#6a6a64",
                        ...mono,
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: 20,
                      }}
                    >
                      {course.imgAlt} — photo coming soon
                    </div>
                  )}
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "clamp(28px,3.4vw,46px)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        ...mono,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#f5c518",
                        border: "1px solid rgba(255,255,255,0.16)",
                        padding: "5px 9px",
                        borderRadius: 3,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {course.code}
                    </span>
                    {course.disc && (
                      <span
                        style={{
                          ...mono,
                          fontSize: 11,
                          fontWeight: 600,
                          background: "#f5c518",
                          color: "#000",
                          padding: "5px 9px",
                          borderRadius: 3,
                        }}
                      >
                        ★ ₦20,000 OFF
                      </span>
                    )}
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "clamp(26px,3vw,38px)",
                      lineHeight: 1,
                      margin: "0 0 14px",
                    }}
                  >
                    {course.title}
                  </h2>

                  <p
                    style={{
                      color: "#c7c6c0",
                      fontSize: 15.5,
                      marginBottom: 0,
                    }}
                  >
                    {course.desc}
                  </p>

                  {/* Specs */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 1,
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: 4,
                      overflow: "hidden",
                      margin: "22px 0 26px",
                    }}
                    className="c-specs-grid"
                  >
                    {[
                      ["Cost", course.cost],
                      ["Duration", course.duration],
                      ["Format", course.format],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        style={{ background: "#0c0c0d", padding: "14px 16px" }}
                      >
                        <div
                          style={{
                            ...mono,
                            fontSize: 10.5,
                            letterSpacing: "0.10em",
                            textTransform: "uppercase",
                            color: "#8e8e88",
                            marginBottom: 5,
                          }}
                        >
                          {k}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-oswald), sans-serif",
                            fontWeight: 600,
                            fontSize: 20,
                          }}
                        >
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/register" style={btnPrimary}>
                      Register <span>→</span>
                    </Link>
                    <span style={{ ...mono, fontSize: 13, color: "#8e8e88" }}>
                      {course.prereq}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Practical locations */}
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
            <span
              style={{
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
              }}
              className="eq-kicker"
            >
              Practical Sites
            </span>
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
              Where you&apos;ll train
            </h2>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
              gap: 22,
            }}
          >
            {LOCATIONS.map(({ equipment, location }) => (
              <div
                key={equipment}
                style={{
                  background: "#141416",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  padding: "clamp(26px,3vw,40px)",
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <span
                    style={{
                      ...mono,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#f5c518",
                      border: "1px solid rgba(255,255,255,0.16)",
                      padding: "5px 9px",
                      borderRadius: 3,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {equipment}
                  </span>
                </div>
                <p style={{ margin: 0, color: "#c7c6c0" }}>{location}</p>
              </div>
            ))}
          </div>

          <p
            style={{
              ...mono,
              color: "#8e8e88",
              marginTop: 22,
              fontSize: 13,
            }}
          >
            Training days — Mondays, Wednesdays &amp; Fridays · Branches in
            Lagos, Abuja &amp; Benin
          </p>
        </div>
      </section>

      <CtaBand
        kicker="★ Not sure which course?"
        heading="Call us for a free programme guide."
        lead="We'll help you pick the right machine, timeline and certification for your goals."
        primaryLabel="Call 0808 882 1299"
        primaryHref="tel:08088212999"
        secondaryLabel="Register online"
        secondaryHref="/register"
      />

      <style>{`
        @media (max-width: 840px) {
          article[id] { grid-template-columns: 1fr !important; }
          .course-media { order: 0 !important; min-height: 240px !important; }
          .c-specs-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
