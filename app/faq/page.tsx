"use client";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

const FAQS = [
  {
    q: "Are crane, forklift, reach stacker and truck-driving training all in one programme?",
    a: "No. Each machine is different, with its own procedures — so every course is taught and registered for separately.",
  },
  {
    q: "What does the training cost?",
    a: "Costs vary by course. Crane ₦650,000 · Excavator ₦550,000 · Reach Stacker ₦750,000 · Truck Driving ₦750,000 · Basic Rigging ₦400,000 · Forklift ₦250,000. Register online for ₦20,000 off, or call our customer-care line for a price specific to your chosen course.",
  },
  {
    q: "How long is each course?",
    a: null,
    list: [
      "Forklift — 4 weeks",
      "Excavator — 10 weeks",
      "Truck Driving — 8 weeks",
      "Reach Stacker — custom",
      "Crane — 8 weeks",
      "Basic Rigging — 2 weeks",
      "Wheel / Pay Loader — 4 weeks",
    ],
  },
  {
    q: "Where are the practical training locations?",
    a: null,
    list: [
      "Forklift — Classic Terminal, by Ojo Barracks",
      "Excavator — Agboju",
      "Reach Stacker — Jojo Terminal, opp. Ojo Barracks · 2nd Rainbow, Oshodi-Apapa Expressway",
      "Truck Driving — Ibeju-Lekki",
      "Crane — Jojo Terminal, opp. Ojo Barracks",
      "Pay Loader — Mainland, Agboju",
    ],
  },
  {
    q: "What days does training run?",
    a: "Mondays, Wednesdays and Fridays.",
  },
  {
    q: "Where are your branches?",
    a: "We operate in three locations — Lagos, Abuja and Benin.",
  },
  {
    q: "Do you provide employment after training?",
    a: "We offer job assistance. Companies and recruiters regularly contact us for operators, and we recommend our best-performing candidates for their screening and selection. Note that Equilog recommends candidates — we are not a human-resources recruiter and do not directly recruit on behalf of companies.",
  },
  {
    q: "Do you provide accommodation for students?",
    a: "We don't provide accommodation directly, but we work with estate agents who can arrange accommodation for trainees during the programme.",
  },
  {
    q: "What certification do you award?",
    a: "Our certification is globally recognised, issued under:",
    list: [
      "IADC — International Association of Drilling Contractors (USA)",
      "OSHA — Occupational Safety and Health Administration (U.K.)",
      "HardHat Training Institute (Canada · Spain · USA)",
    ],
  },
  {
    q: "I'm an experienced operator without a certificate — can I be certified?",
    a: "Yes. Experienced operators take a short fresher course — online, physical or in-class — after which we issue your certification.",
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <PageLayout>
      <PageHeader
        crumb="FAQ"
        title={
          <>
            Frequently Asked
            <br />
            Questions
          </>
        }
        lead="Everything you need to know about training, costs, certification and what happens after you graduate."
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 28px" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  background: "#141416",
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: 0,
                    color: "#f4f3ef",
                    cursor: "pointer",
                    padding: "22px 24px",
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(17px,2vw,21px)",
                    textTransform: "none",
                    letterSpacing: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: 13,
                      color: "#f5c518",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ flex: 1 }}>{faq.q}</span>
                  {/* Plus/minus icon */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      position: "relative",
                      marginLeft: "auto",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        width: 16,
                        height: 2,
                        background: "#f5c518",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        width: 2,
                        height: 16,
                        background: "#f5c518",
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%,-50%) scaleY(${isOpen ? 0 : 1})`,
                        transition:
                          "transform 0.25s cubic-bezier(0.2,0.7,0.2,1)",
                      }}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 24px 60px",
                      color: "#c7c6c0",
                      fontSize: 16,
                    }}
                  >
                    {faq.a && (
                      <p style={{ margin: faq.list ? "0 0 8px" : 0 }}>
                        {faq.a}
                      </p>
                    )}
                    {faq.list && (
                      <ul style={{ margin: "0.4em 0", paddingLeft: 18 }}>
                        {faq.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        kicker="★ Still have questions?"
        heading="Our team is one call away."
        lead="Reach us for anything we haven't covered here."
        primaryLabel="Call 0808 882 1299"
        primaryHref="tel:08088212999"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </PageLayout>
  );
}
