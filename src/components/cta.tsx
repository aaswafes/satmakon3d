"use client";

import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { MagneticButton } from "./magnetic-button";

export function Cta() {
  const t = useT();

  return (
    <section id="cta" className="cv-auto relative py-32 sm:py-44 overflow-hidden">
      {/* cinematic gradient — flat radial-gradients instead of giant
          Gaussian-blurred divs, identical look at zero scroll cost */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(123, 92, 255, 0.18) 0%, rgba(123, 92, 255, 0.05) 45%, transparent 75%), radial-gradient(35% 35% at 20% 75%, rgba(255, 91, 170, 0.14) 0%, transparent 70%), radial-gradient(30% 30% at 80% 25%, rgba(90, 240, 201, 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/[0.06] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-mint">
            <span className="size-1.5 rounded-full bg-mint pulse-soft" />
            {t.cta.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1} as="h2" className="mt-8 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.05em] text-bone">
          {t.cta.titleA}
        </Reveal>
        <Reveal delay={0.2} as="h2" className="font-display italic-accent text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.05em] text-grad-violet">
          {t.cta.titleB}
        </Reveal>

        <Reveal delay={0.32} className="mt-10 mx-auto max-w-2xl">
          <p className="text-bone/70 text-[15px] sm:text-base leading-relaxed">{t.cta.sub}</p>
        </Reveal>

        <Reveal delay={0.42} className="mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton href="https://t.me/satmakonn_bot" variant="primary" size="lg">
              {t.cta.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton href="https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" variant="ghost" size="lg">
              {t.cta.ctaSecondary}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.56} className="mt-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-bone/40">
            {t.cta.foot}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
