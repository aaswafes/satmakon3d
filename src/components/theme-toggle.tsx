"use client";

import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="relative inline-flex size-8 items-center justify-center rounded-full border border-bone/10 bg-ink/60 text-bone/70 hover:text-bone hover:border-bone/25 transition-colors duration-300"
    >
      {/* sun (visible in dark mode — click to go light) */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute transition-all duration-500"
        style={{
          opacity: isLight ? 0 : 1,
          transform: `rotate(${isLight ? 90 : 0}deg) scale(${isLight ? 0.5 : 1})`,
        }}
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* moon (visible in light mode — click to go dark) */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute transition-all duration-500"
        style={{
          opacity: isLight ? 1 : 0,
          transform: `rotate(${isLight ? 0 : -90}deg) scale(${isLight ? 1 : 0.5})`,
        }}
        aria-hidden
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
