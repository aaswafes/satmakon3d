"use client";

import { useT } from "@/lib/locale-context";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 border-t border-bone/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        {/* big wordmark */}
        <div className="font-display text-[clamp(4.4rem,16vw,15rem)] leading-[0.85] tracking-[-0.07em] text-grad-cream pb-12 select-none">
          SAT&nbsp;MAKON.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-t border-bone/[0.08] pt-12">
          <div className="md:col-span-4">
            <p className="text-bone/70 text-[14px] leading-relaxed max-w-sm">{t.footer.blurb}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-bone/10 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-bone/55">
              <span className="size-1.5 rounded-full bg-mint" />
              {t.footer.location}
            </div>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          {t.footer.cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.24em] text-bone/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-bone/75 hover:text-bone transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.24em] text-bone/40 mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2.5 text-[13px] text-bone/75">
              <li>
                <a href="tel:+998555111600" className="hover:text-bone transition-colors">
                  +998 55 511 16 00
                </a>
              </li>
              <li>
                <a href="https://t.me/satmakonn_bot" className="hover:text-bone transition-colors">
                  @satmakonn_bot
                </a>
              </li>
              <li>
                <a href="https://t.me/sat_makon_uz" className="hover:text-bone transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sat_makon_uz" className="hover:text-bone transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@sat_makon_uz" className="hover:text-bone transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-bone/40">
          <span>© {year} SAT MAKON · {t.footer.copyright}</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-bone/80 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-bone/80 transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
