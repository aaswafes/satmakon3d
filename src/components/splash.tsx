"use client";

import { useEffect, useState } from "react";

/**
 * Full-bleed splash that covers the page while fonts, JS chunks, and
 * the R3F canvas all wake up behind it. Lifts when:
 *   - document.fonts is ready
 *   - window has fired the load event
 *   - a minimum dwell of 700ms has elapsed (so it doesn't flash)
 *
 * Once hidden, fades out over ~600ms and is removed from the DOM.
 */
export function Splash() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const MIN_DWELL = 700;
    const start = performance.now();

    const fontsReady: Promise<unknown> =
      typeof document !== "undefined" && document.fonts?.ready
        ? document.fonts.ready
        : Promise.resolve();

    const windowReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") return resolve();
      window.addEventListener("load", () => resolve(), { once: true });
    });

    Promise.all([fontsReady, windowReady]).then(() => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_DWELL - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    });
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const id = window.setTimeout(() => setRemoved(true), 700);
    return () => window.clearTimeout(id);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
      style={{
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 0.6s var(--ease-out-expo)",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="relative inline-flex size-7 items-center justify-center rounded-full bg-bone">
          <span className="size-2 rounded-full bg-ink" />
        </span>
        <span className="font-display text-xl tracking-tight text-bone">
          SAT Makon
        </span>
      </div>

      <div className="mt-7 h-px w-48 overflow-hidden rounded-full bg-bone/10">
        <div
          className="h-full origin-left bg-gradient-to-r from-violet via-magenta to-mint"
          style={{
            animation: "splash-grow 1.6s var(--ease-out-expo) forwards",
            width: "100%",
          }}
        />
      </div>

      <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.28em] text-bone/40">
        Loading
      </div>
    </div>
  );
}
