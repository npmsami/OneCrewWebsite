"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── inline SVG glyphs ─────────────────────────────────────────── */

function GlyphCurve() {
  return (
    <svg viewBox="0 0 80 48" className="inline-block h-[0.6em] w-auto align-middle opacity-60" fill="none" aria-hidden>
      <path d="M4 44 C 20 4, 60 4, 76 44" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function GlyphStar() {
  return (
    <svg viewBox="0 0 40 40" className="inline-block h-[0.55em] w-auto align-middle" fill="#FF4D00" aria-hidden>
      <path d="M20 2 L23.5 14.5 L36 14.5 L26 22 L29.5 34.5 L20 27 L10.5 34.5 L14 22 L4 14.5 L16.5 14.5 Z" />
    </svg>
  );
}

function GlyphWave() {
  return (
    <svg viewBox="0 0 100 32" className="inline-block h-[0.4em] w-auto align-middle opacity-70" fill="none" aria-hidden>
      <path d="M2 16 C 14 4, 26 28, 38 16 C 50 4, 62 28, 74 16 C 86 4, 94 24, 98 16" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function GlyphDots() {
  return (
    <svg viewBox="0 0 48 16" className="inline-block h-[0.3em] w-auto align-middle opacity-80" fill="#FF4D00" aria-hidden>
      <circle cx="8" cy="8" r="5" />
      <circle cx="24" cy="8" r="5" />
      <circle cx="40" cy="8" r="5" />
    </svg>
  );
}

function GlyphArrow() {
  return (
    <svg viewBox="0 0 56 32" className="inline-block h-[0.55em] w-auto align-middle opacity-80" fill="none" aria-hidden>
      <path d="M4 16 L48 16 M36 4 L48 16 L36 28" stroke="#FF4D00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlyphSparkle() {
  return (
    <svg viewBox="0 0 32 32" className="inline-block h-[0.6em] w-auto align-middle" fill="none" aria-hidden>
      <path d="M16 2 L17.8 13.2 L29 16 L17.8 18.8 L16 30 L14.2 18.8 L3 16 L14.2 13.2 Z" fill="#FF4D00" />
    </svg>
  );
}

function GlyphComma() {
  return (
    <svg viewBox="0 0 16 32" className="inline-block h-[0.55em] w-auto align-middle opacity-50" fill="#FF4D00" aria-hidden>
      <path d="M6 8 Q6 22, 2 28 L8 28 Q12 22, 12 8 Z" />
    </svg>
  );
}

/* ── sentence content ──────────────────────────────────────────── */

function TickerContent() {
  return (
    <>
      <span className="font-display uppercase">In every bottle</span>
      <span className="mx-[0.3em] inline-block"><GlyphComma /></span>
      <span className="mx-[0.8em] inline-block"><GlyphCurve /></span>
      <span className="font-display uppercase">discover the undeniable</span>
      <span className="mx-[0.6em] inline-block"><GlyphStar /></span>
      <span className="font-display uppercase text-[#FF4D00]">Real Magic</span>
      <span className="mx-[0.5em] inline-block"><GlyphSparkle /></span>
      <span className="font-display uppercase">of sharing pure</span>
      <span className="mx-[0.7em] inline-block"><GlyphWave /></span>
      <span className="font-display uppercase italic text-white/70">Refreshment</span>
      <span className="mx-[0.6em] inline-block"><GlyphDots /></span>
      <span className="font-display uppercase">that brings us</span>
      <span className="mx-[0.7em] inline-block"><GlyphArrow /></span>
      <span className="font-display uppercase text-[#FF4D00]">Together</span>
      <span className="ml-[0.8em] inline-block"><GlyphStar /></span>
    </>
  );
}

/* ── component ─────────────────────────────────────────────────── */

export function HorizontalTicker() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = trackWidth - viewportWidth;

      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#000000]" aria-label="Horizontal ticker">
      <div className="h-[2px] w-full bg-[#FF4D00]/30" />
      <div className="flex h-screen items-center">
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform"
          style={{ paddingInline: "6vw" }}
        >
          <div className="flex items-center gap-0 text-[9vw] leading-none text-white">
            <TickerContent />
            <span className="ml-[4vw] opacity-20">
              <TickerContent />
            </span>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#FF4D00]/30" />
    </section>
  );
}
