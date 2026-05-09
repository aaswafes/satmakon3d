"use client";

import { useT } from "@/lib/locale-context";
import { Reveal } from "./reveal-text";
import { cn } from "@/lib/cn";

function Card({
  tag,
  title,
  body,
  className,
  children,
}: {
  tag: string;
  title: string;
  body: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-bone/10 bg-ink-2/70 p-6 sm:p-8 inset-glow transition-colors duration-500 hover:border-bone/20",
        className,
      )}
    >
      <div className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 size-[140%] rounded-full bg-violet/10 blur-[120px]" />
      </div>
      <div className="relative z-10 flex h-full flex-col gap-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-bone/40">
          {tag}
        </span>
        <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.03em] leading-[1.05] text-bone">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-bone/65 max-w-md">{body}</p>
        {children}
      </div>
    </div>
  );
}

/* tiny visual flourishes per card — built inline */

function MakonAiViz() {
  return (
    <div className="mt-auto pt-8">
      <div className="flex items-end gap-1.5 h-20">
        {[0.4, 0.6, 0.5, 0.78, 0.65, 0.92, 0.7, 0.85, 0.95, 0.88].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-violet/30 to-violet"
            style={{ height: `${h * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-bone/40 uppercase tracking-wider">
        <span>0</span>
        <span>800</span>
      </div>
    </div>
  );
}

function GroupViz() {
  return (
    <div className="mt-auto pt-8 flex -space-x-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="size-12 rounded-full border-2 border-ink-2 grid place-items-center text-[12px] font-mono"
          style={{
            background:
              i === 0
                ? "linear-gradient(135deg, #7B5CFF, #FF5BAA)"
                : "linear-gradient(135deg, #1A1A26, #2A2A36)",
            color: i === 0 ? "#FFF7E8" : "#7B7B85",
          }}
        >
          {i === 0 ? "T" : "·"}
        </div>
      ))}
    </div>
  );
}

function ScoreViz() {
  return (
    <div className="mt-auto pt-8 space-y-3">
      {[
        { l: "Math", v: "98%" },
        { l: "Reading", v: "94%" },
        { l: "Writing", v: "92%" },
      ].map((row) => (
        <div key={row.l}>
          <div className="flex items-center justify-between text-[11px] font-mono text-bone/55 mb-1">
            <span>{row.l}</span>
            <span className="text-bone">{row.v}</span>
          </div>
          <div className="h-[3px] rounded-full bg-bone/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet via-magenta to-mint"
              style={{ width: row.v }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function EssayViz() {
  return (
    <div className="mt-auto pt-8 relative">
      <div className="rounded-xl border border-bone/10 bg-ink/50 p-4 font-mono text-[11px] text-bone/60 leading-relaxed">
        <span className="block text-bone">Why Stanford?</span>
        <span className="block mt-2">
          Growing up in <span className="bg-violet/30 text-bone">Tashkent</span>, I learned that
        </span>
        <span className="block">
          <span className="bg-magenta/25 text-bone">curiosity</span> doesn't need a passport...
        </span>
      </div>
    </div>
  );
}

function ApViz() {
  return (
    <div className="mt-auto pt-8 grid grid-cols-2 gap-2">
      {["Calc", "Phys", "Chem", "CS"].map((t) => (
        <div
          key={t}
          className="rounded-xl border border-bone/10 bg-ink/40 px-3 py-3 flex items-center justify-between"
        >
          <span className="font-mono text-[11px] text-bone/60">{t}</span>
          <span className="font-display text-2xl text-grad-violet leading-none">5</span>
        </div>
      ))}
    </div>
  );
}

export function FeaturesBento() {
  const t = useT();
  const f = t.features;

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-bone/40">
              {f.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08} as="h2" className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-bone">
            {f.titleA}
          </Reveal>
          <Reveal delay={0.16} as="h2" className="font-display italic-accent text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.04em] leading-[1] text-grad-violet">
            {f.titleB}
          </Reveal>
          <Reveal delay={0.28} className="mt-6">
            <p className="text-bone/60 text-base leading-relaxed">{f.sub}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(220px,auto)]">
          {/* small group — 3 col */}
          <Reveal className="md:col-span-3 h-full">
            <Card tag={f.qualifies.tag} title={f.qualifies.title} body={f.qualifies.body} className="h-full">
              <GroupViz />
            </Card>
          </Reveal>

          {/* makon.ai — 3 col */}
          <Reveal delay={0.08} className="md:col-span-3 h-full">
            <Card tag={f.books.tag} title={f.books.title} body={f.books.body} className="h-full">
              <MakonAiViz />
            </Card>
          </Reveal>

          {/* essay — 4 col */}
          <Reveal delay={0.16} className="md:col-span-4 h-full">
            <Card tag={f.languages.tag} title={f.languages.title} body={f.languages.body} className="h-full">
              <EssayViz />
            </Card>
          </Reveal>

          {/* score — 2 col */}
          <Reveal delay={0.24} className="md:col-span-2 h-full">
            <Card tag={f.memory.tag} title={f.memory.title} body={f.memory.body} className="h-full">
              <ScoreViz />
            </Card>
          </Reveal>

          {/* AP — 6 col */}
          <Reveal delay={0.32} className="md:col-span-6 h-full">
            <Card tag={f.dfy.tag} title={f.dfy.title} body={f.dfy.body} className="h-full">
              <ApViz />
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
