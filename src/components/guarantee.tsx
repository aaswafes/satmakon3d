"use client";

import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { MagneticButton } from "./magnetic-button";

export function Guarantee() {
  const t = useT();

  return (
    <section
      id="features"
      className="cv-auto relative py-28 sm:py-40 overflow-hidden"
    >
      {/* radial glow — flat gradients, no Gaussian blur */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 50%, rgba(123, 92, 255, 0.16) 0%, rgba(123, 92, 255, 0.04) 45%, transparent 70%), radial-gradient(30% 30% at 90% 10%, rgba(255, 91, 170, 0.13) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* left: monolith */}
          <div className="lg:col-span-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/[0.08] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-violet-2">
                <span className="size-1.5 rounded-full bg-violet pulse-soft" />
                {t.features.big.tag}
              </span>
            </Reveal>

            <Reveal delay={0.08} as="h2" className="mt-7 font-display text-[clamp(2.6rem,7vw,6rem)] tracking-[-0.05em] leading-[0.92] text-bone">
              <span className="text-grad-violet">{t.features.big.titleBold}</span>
              {t.features.big.titleAfter}
            </Reveal>
            <Reveal delay={0.18} as="h2" className="font-display italic-accent text-[clamp(2.6rem,7vw,6rem)] tracking-[-0.05em] leading-[0.92] text-bone/90">
              {t.features.big.titleLine2}
            </Reveal>

            <Reveal delay={0.32} className="mt-10 max-w-xl">
              <p className="text-bone/70 text-[16px] leading-relaxed">{t.features.big.body}</p>
            </Reveal>

            <Reveal delay={0.42} className="mt-10">
              <div className="flex flex-wrap gap-2">
                {t.features.big.channels.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-bone/10 bg-ink-3/60 px-3 py-1.5 text-[12px] text-bone/75"
                  >
                    <span className="size-1 rounded-full bg-mint" />
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.55} className="mt-10">
              <MagneticButton href="#cta" variant="primary" size="lg">
                {t.cta.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </MagneticButton>
            </Reveal>
          </div>

          {/* right: timeline mini-card */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl border border-bone/10 bg-ink-2/85 p-6 inset-glow">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-bone/40">
                  <span>{t.features.big.timeline.leadArrives}</span>
                  <span>{t.features.big.timeline.aiReplies}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 items-end gap-3">
                  <div>
                    <div className="font-display text-3xl text-bone">1100+</div>
                    <div className="text-[11px] text-bone/50 mt-1">SAT</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-grad-violet">1520+</div>
                    <div className="text-[11px] text-bone/50 mt-1">SAT</div>
                  </div>
                </div>
                {/* arrow */}
                <div className="my-5 relative h-px bg-gradient-to-r from-bone/20 via-violet/60 to-magenta">
                  <span className="absolute right-0 -top-[3px] size-[7px] rounded-full bg-magenta shadow-[0_0_10px_rgba(255,91,170,0.7)]" />
                </div>
                <ul className="space-y-2 text-[12px] text-bone/65">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1 rounded-full bg-bone/40" />
                    {t.features.big.timeline.you}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1 rounded-full bg-bone/40" />
                    {t.features.big.timeline.competitors}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1 rounded-full bg-bone/40" />
                    {t.features.big.timeline.industry}
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
