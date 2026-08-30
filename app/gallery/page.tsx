"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PageLayout } from "@/components/page-layout";
import { PageHeader } from "@/components/page-header";

const PHOTOS = [
  { src: "/img/doc06.jpeg", cap: "Crane training — practical session" },
  { src: "/img/doc03.jpeg", cap: "Forklift training — Hyster practical" },
  { src: "/img/doc10.jpeg", cap: "Certificate presentation" },
  { src: "/img/doc12.jpeg", cap: "Excavator training — CAT 325B" },
  { src: "/img/doc07.jpeg", cap: "Crane operator training" },
  { src: "/img/doc15.jpeg", cap: "Reach stacker — Konecranes" },
  { src: "/img/doc05.jpeg", cap: "Classroom theory session" },
  { src: "/img/doc09.jpeg", cap: "Graduating trainees" },
  { src: "/img/doc14.jpeg", cap: "Excavator & haul — site practical" },
  { src: "/img/doc17.jpeg", cap: "Reach stacker training group" },
  { src: "/img/doc02.jpeg", cap: "Basic rigging — theory" },
  { src: "/img/doc08.jpeg", cap: "Crane training group" },
  { src: "/img/doc16.jpeg", cap: "Reach stacker trainee" },
  { src: "/img/doc13.jpeg", cap: "Excavator operation" },
  { src: "/img/doc11.jpeg", cap: "Certificate presentation" },
  { src: "/img/doc20.jpeg", cap: "Team Equilog" },
  { src: "/img/doc18.jpeg", cap: "Industry partners" },
  { src: "/img/doc19.jpeg", cap: "Team Equilog" },
];

export default function GalleryPage() {
  const [lboxOpen, setLboxOpen] = useState(false);
  const [lboxIdx, setLboxIdx] = useState(0);

  const open = (i: number) => { setLboxIdx(i); setLboxOpen(true); };
  const close = () => setLboxOpen(false);
  const prev = useCallback(() => setLboxIdx((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() => setLboxIdx((i) => (i + 1) % PHOTOS.length), []);

  useEffect(() => {
    if (!lboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lboxOpen, prev, next]);

  return (
    <PageLayout>
      <PageHeader
        crumb="Gallery"
        title="Gallery"
        lead="Real training, real machines, real graduates. A look inside Equilog's classrooms, practical sites and certificate presentations."
      />

      <section style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="reveal gallery-grid"
            style={{ columns: 3, columnGap: 16 }}
          >
            {PHOTOS.map((photo, i) => (
              <figure
                key={i}
                onClick={() => open(i)}
                style={{
                  breakInside: "avoid",
                  margin: "0 0 16px",
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#141416",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.cap}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "30px 14px 12px",
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    color: "#fff",
                    background: "linear-gradient(transparent,rgba(0,0,0,0.85))",
                    textTransform: "uppercase",
                  }}
                >
                  {photo.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(8,8,9,0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 26,
              background: "none",
              border: 0,
              color: "#fff",
              fontSize: 38,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#fff",
              width: 52,
              height: 52,
              borderRadius: "50%",
              fontSize: 26,
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
            }}
          >
            ‹
          </button>
          <Image
            src={PHOTOS[lboxIdx].src}
            alt={PHOTOS[lboxIdx].cap}
            width={1200}
            height={800}
            style={{
              maxWidth: "92vw",
              maxHeight: "86vh",
              objectFit: "contain",
              border: "1px solid rgba(255,255,255,0.16)",
              width: "auto",
              height: "auto",
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#fff",
              width: 52,
              height: 52,
              borderRadius: "50%",
              fontSize: 26,
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
            }}
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) { .gallery-grid { columns: 2 !important; } }
        @media (max-width: 620px) { .gallery-grid { columns: 1 !important; } }
      `}</style>
    </PageLayout>
  );
}
