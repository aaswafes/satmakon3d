"use client";

import { useEffect, useRef } from "react";
import { useT } from "@/lib/locale-context";
import { ensureGsap } from "@/lib/motion";
import { Reveal } from "./reveal-text";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const t = useT();

  useEffect(() => {
    const tools = ensureGsap();
    if (!tools) return;
    const { gsap, ScrollTrigger } = tools;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return; // mobile = vertical stack, no horizontal pin

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * 0.4}`,
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative md:h-screen md:overflow-hidden"
    >
      {/* mobile: vertical stack */}
      <div className="md:hidden mx-auto max-w-3xl px-6 py-24 space-y-10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] leading-[1] text-bone">
            {t.process.titleA}
          </h2>
          <h2 className="font-display italic-accent text-4xl text-grad-violet">
            {t.process.titleB}
          </h2>
          <p className="mt-4 text-bone/60">{t.process.sub}</p>
        </div>
        {t.process.steps.map((s, i) => (
          <div key={i} className="rounded-3xl border border-bone/10 bg-ink-2 p-6 inset-glow">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-violet-2">
              {s.chip}
            </span>
            <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-bone">
              {s.title}
            </h3>
            <p className="mt-3 text-bone/65 text-[14px] leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      {/* desktop: horizontal sticky scroll */}
      <div className="hidden md:flex h-full items-center">
        <div ref={trackRef} className="flex h-full items-center will-change-transform pl-[10vw]">
          {/* intro panel */}
          <div className="shrink-0 w-[80vw] max-w-[640px] pr-16 pl-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
              {t.process.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[clamp(3rem,6.5vw,5.5rem)] tracking-[-0.05em] leading-[0.92] text-bone">
              {t.process.titleA}
            </h2>
            <h2 className="font-display italic-accent text-[clamp(3rem,6.5vw,5.5rem)] tracking-[-0.05em] leading-[0.92] text-grad-violet">
              {t.process.titleB}
            </h2>
            <p className="mt-7 text-bone/60 max-w-md text-[15px] leading-relaxed">
              {t.process.sub}
            </p>
            <div className="mt-10 flex items-center gap-2 text-bone/40 text-[11px] font-mono uppercase tracking-[0.28em]">
              <span>{t.hero.scroll}</span>
              <span className="block h-px w-12 bg-bone/30" />
            </div>
          </div>

          {/* step panels */}
          {t.process.steps.map((s, i) => (
            <div
              key={i}
              className="shrink-0 w-[78vw] max-w-[640px] mr-8 lg:mr-16"
            >
              <div className="relative rounded-[28px] border border-bone/10 bg-ink-2/92 p-10 lg:p-14 min-h-[60vh] inset-glow overflow-hidden">
                {/* step number */}
                <div className="absolute -top-8 -right-6 font-display text-[16rem] leading-none tracking-[-0.08em] text-bone/[0.04] select-none pointer-events-none">
                  {i + 1}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-violet-2">
                  {s.chip}
                </span>
                <h3 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.2rem)] tracking-[-0.04em] leading-[1.02] text-bone max-w-md">
                  {s.title}
                </h3>
                <p className="mt-6 text-bone/70 text-[15px] leading-relaxed max-w-md">{s.body}</p>

                {/* visual flourish per step */}
                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-bone/20 to-transparent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-bone/40">
                    {t.process.step} {String(i + 1).padStart(2, "0")} / 03
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* tail spacer */}
          <div className="shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  );
}
