"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";

function CountUp({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  const t = useT();

  const numbers = [
    { value: 300, suffix: "+", labelKey: 0 },
    { value: 30, suffix: "%", labelKey: 1 },
    { value: 1600, suffix: "", labelKey: 2 },
  ];

  return (
    <section className="cv-auto relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
              {t.stats.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08} as="h2" className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-bone">
            {t.stats.titleA}
          </Reveal>
          <Reveal delay={0.16} as="h2" className="font-display italic-accent text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-grad-violet">
            {t.stats.titleB}
          </Reveal>
          <Reveal delay={0.28} className="mt-6">
            <p className="text-bone/60 text-base leading-relaxed">{t.stats.sub}</p>
          </Reveal>
        </div>

        {/* paw print divider */}
        <div className="my-14 flex justify-center gap-3 opacity-30">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="size-2 rounded-full bg-bone"
              style={{ opacity: 0.2 + i * 0.16 }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/[0.06] rounded-3xl overflow-hidden border border-bone/[0.06] inset-glow">
          {t.stats.cards.map((card, i) => (
            <div
              key={i}
              className="bg-ink-2 p-8 sm:p-10 flex flex-col gap-6 min-h-[280px]"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-bone/40">
                {card.label}
              </span>
              <div className="font-display text-[clamp(3.2rem,6vw,5rem)] leading-[0.9] tracking-[-0.05em] text-grad-cream">
                <CountUp to={numbers[i].value} suffix={numbers[i].suffix} />
              </div>
              <p className="text-bone/70 text-[15px] leading-relaxed">
                <span className="text-bone font-medium">{card.highlight}</span>{" "}
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
