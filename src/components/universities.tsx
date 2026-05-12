"use client";

import Image from "next/image";
import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";

const LOGO_FILES = [
  { src: "/unis/harvard.png", name: "Harvard" },
  { src: "/unis/stanford.png", name: "Stanford" },
  { src: "/unis/yale.png", name: "Yale" },
  { src: "/unis/princeton.png", name: "Princeton" },
  { src: "/unis/cambridge.png", name: "Cambridge" },
  { src: "/unis/brown.png", name: "Brown" },
];

const WORDMARKS = ["MIT", "CORNELL", "BERKELEY", "NYU"];

export function Universities() {
  const t = useT();

  // build a long sequence to loop seamlessly
  const items = [
    ...LOGO_FILES.map((l) => ({ kind: "logo" as const, ...l })),
    ...WORDMARKS.map((w) => ({ kind: "word" as const, text: w })),
  ];
  const doubled = [...items, ...items];

  return (
    <section className="cv-auto relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
            {t.unis.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08} className="mt-3 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] tracking-[-0.03em] text-bone">
            {t.unis.title}
          </h2>
        </Reveal>
      </div>

      {/* gradient masks */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />

        <div className="flex w-max marquee-slow gap-16 sm:gap-24 items-center">
          {doubled.map((it, i) =>
            it.kind === "logo" ? (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center h-14 sm:h-16 opacity-60 hover:opacity-100 transition-opacity duration-500"
              >
                <Image
                  src={it.src}
                  alt={it.name}
                  width={140}
                  height={64}
                  className="h-full w-auto object-contain brightness-0 invert"
                  priority={i < 6}
                />
              </div>
            ) : (
              <div
                key={i}
                className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.02em] text-bone/50 hover:text-bone/90 transition-colors duration-500 whitespace-nowrap"
              >
                {it.text}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
