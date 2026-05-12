"use client";

import { useLocale } from "@/lib/locale-context";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex items-center rounded-full border border-bone/10 bg-ink/80 p-0.5">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={cn(
            "px-3 py-1 text-[11px] font-mono tracking-wider rounded-full transition-colors",
            locale === l
              ? "bg-bone text-ink"
              : "text-bone/60 hover:text-bone",
          )}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
