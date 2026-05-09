"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { cn } from "@/lib/cn";

const PHOTOS = [
  "/students/15-mark.jpg",
  "/students/14-taisiia.jpg",
  "/students/4-madiyar.jpg",
];

export function Testimonials() {
  const t = useT();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % t.testimonials.quotes.length);
    }, 6500);
    return () => clearInterval(id);
  }, [t.testimonials.quotes.length]);

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-magenta/8 blur-[160px] -z-10" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
              {t.testimonials.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08} as="h2" className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-bone">
            {t.testimonials.titleA}
          </Reveal>
          <Reveal delay={0.16} as="h2" className="font-display italic-accent text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-grad-violet">
            {t.testimonials.titleB}
          </Reveal>
        </div>

        <div className="relative mt-16 min-h-[360px]">
          {t.testimonials.quotes.map((q, i) => {
            const photo = PHOTOS[i] ?? PHOTOS[0];
            return (
              <article
                key={i}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  active === i
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-6 pointer-events-none",
                )}
                aria-hidden={active !== i}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="relative size-44 sm:size-56 rounded-full overflow-hidden border border-bone/10 inset-glow">
                      <Image
                        src={photo}
                        alt={q.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 224px, 176px"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.18] tracking-[-0.02em] text-bone/95">
                      <span className="text-magenta italic-accent">"</span>
                      {q.quote}
                      <span className="text-magenta italic-accent">"</span>
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <span className="font-mono text-[12px] uppercase tracking-wider text-bone">
                        {q.name}
                      </span>
                      <span className="block h-px w-8 bg-bone/30" />
                      <span className="text-[12px] text-bone/55">{q.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* dots */}
        <div className="mt-12 flex justify-center gap-2">
          {t.testimonials.quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                active === i ? "w-10 bg-bone" : "w-3 bg-bone/20 hover:bg-bone/40",
              )}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
