"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  dictionaries,
  type Dictionary,
  type Locale,
} from "./i18n";

const STORAGE_KEY = "satmakon.locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<Ctx | null>(null);

function isValidLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    let initial: Locale = DEFAULT_LOCALE;
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const fromUrl = url.searchParams.get("lang");
      if (isValidLocale(fromUrl)) {
        initial = fromUrl;
      } else {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (isValidLocale(stored)) {
          initial = stored;
        } else {
          const navLang = window.navigator.language?.slice(0, 2).toLowerCase();
          if (isValidLocale(navLang)) initial = navLang;
        }
      }
    }
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, l);
      } catch {}
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider />");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
