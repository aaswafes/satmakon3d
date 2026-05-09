"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/locale-context";
import { LanguageSwitcher } from "./language-switcher";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/cn";

export function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: t.nav.product },
    { href: "#process", label: t.nav.howItWorks },
    { href: "#testimonials", label: t.nav.results },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500",
          scrolled ? "" : "",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500",
            scrolled ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : "bg-transparent",
          )}
        >
          {/* logo */}
          <a href="#top" className="flex items-center gap-2 pl-2">
            <span className="relative inline-flex size-7 items-center justify-center rounded-full bg-bone">
              <span className="size-2 rounded-full bg-ink" />
            </span>
            <span className="font-display text-lg tracking-tight text-bone">
              SAT Makon
            </span>
          </a>

          {/* center links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] text-bone/70 hover:text-bone transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* right */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <MagneticButton href="#cta" variant="primary" size="md">
              {t.nav.bookAudit}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  );
}
