"use client";

import { useState } from "react";
import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { cn } from "@/lib/cn";

export function Faq() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
              {t.faq.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08} as="h2" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] tracking-[-0.04em] leading-[1.04] text-bone">
            {t.faq.title}
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-bone/[0.08] border-y border-bone/[0.08]">
          {t.faq.items.map((q, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "group w-full text-left py-6 transition-colors duration-300",
                  isOpen ? "" : "hover:bg-bone/[0.02]",
                )}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/35 shrink-0 w-8 sm:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={cn(
                          "font-display text-lg sm:text-xl tracking-[-0.02em] leading-snug transition-colors duration-300",
                          isOpen ? "text-bone" : "text-bone/85 group-hover:text-bone",
                        )}
                      >
                        {q.q}
                      </h3>
                      <span
                        className={cn(
                          "shrink-0 size-7 rounded-full border border-bone/20 grid place-items-center transition-all duration-500",
                          isOpen ? "rotate-45 bg-bone text-ink border-bone" : "text-bone/60",
                        )}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isOpen ? "320px" : "0",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p className="pt-4 pr-8 text-bone/65 text-[14px] leading-relaxed">{q.a}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
