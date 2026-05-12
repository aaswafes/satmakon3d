"use client";

import dynamic from "next/dynamic";
import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { MagneticButton } from "./magnetic-button";

const HeroScene = dynamic(
  () => import("./r3f/scene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* full-bleed 3D canvas */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>

      {/* static CSS vignette — replaces the postFX Vignette pass for zero per-frame cost */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[6] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(10, 10, 18, 0.55) 100%)",
        }}
      />

      {/* dot grid overlay for texture */}
      <div className="absolute inset-0 -z-[5] dotgrid opacity-30 pointer-events-none" />

      {/* radial fade so the bottom of canvas blends into ink */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink pointer-events-none"
      />

      {/* foreground content */}
      <div className="relative mx-auto max-w-6xl w-full px-6 pt-32 pb-16 text-center pointer-events-none">
        {/* eyebrow */}
        <Reveal as="div" className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-bone/10 bg-ink/75 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-bone/70">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
            </span>
            {t.hero.badge}
          </span>
        </Reveal>

        {/* headline — line 1 above panda */}
        <Reveal as="h1" delay={0.05} className="font-display text-balance text-[clamp(2.4rem,6.5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-bone">
          {t.hero.titleA}
        </Reveal>

        {/* spacer so panda has room — panda center sits in this gap */}
        <div className="h-[42vh] min-h-[300px] sm:h-[46vh]" />

        {/* headline — italic accent below panda */}
        <Reveal as="h1" delay={0.18} className="font-display italic-accent text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-grad-violet -mt-4">
          {t.hero.titleB}
        </Reveal>

        {/* subtext */}
        <Reveal as="p" delay={0.28} className="mx-auto mt-8 max-w-xl text-pretty text-[15px] sm:text-base text-bone/70 leading-relaxed">
          {t.hero.sub.before}{" "}
          <span className="text-bone font-medium">{t.hero.sub.bold}</span>
          {t.hero.sub.after}
        </Reveal>

        {/* CTAs */}
        <Reveal as="div" delay={0.4} className="mt-10">
          <div className="pointer-events-auto inline-flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton href="#cta" variant="primary" size="lg">
              {t.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton href="#process" variant="ghost" size="lg">
              {t.hero.ctaSecondary}
            </MagneticButton>
          </div>
        </Reveal>

        {/* trust line */}
        <Reveal as="p" delay={0.55} className="mt-10 text-[10px] font-mono uppercase tracking-[0.28em] text-bone/40">
          {t.hero.trust}
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-bone/40">
          <span className="text-[9px] font-mono uppercase tracking-[0.32em]">{t.hero.scroll}</span>
          <div className="h-7 w-px bg-gradient-to-b from-bone/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
