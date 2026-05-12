"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { cn } from "@/lib/cn";

type Tag = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
};

/* One shared IntersectionObserver across every Reveal on the page. */
type Subscriber = (visible: boolean) => void;
let sharedObserver: IntersectionObserver | null = null;
const subscribers = new WeakMap<Element, Subscriber>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = subscribers.get(entry.target);
          if (cb) {
            cb(true);
            sharedObserver?.unobserve(entry.target);
            subscribers.delete(entry.target);
          }
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  return sharedObserver;
}

/**
 * Soft enter — fade up with a tiny lift. No overflow mask, no clip-path,
 * no filter. Single element so the GPU only touches one layer per Reveal.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      setVisible(true);
      return;
    }
    subscribers.set(el, setVisible);
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      subscribers.delete(el);
    };
  }, []);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ease ${delay}s, transform 0.55s var(--ease-out-expo) ${delay}s`,
  };

  switch (as) {
    case "span":
      return (
        <span ref={ref as React.RefObject<HTMLSpanElement>} className={cn(className)} style={style}>
          {children}
        </span>
      );
    case "p":
      return (
        <p ref={ref as React.RefObject<HTMLParagraphElement>} className={cn(className)} style={style}>
          {children}
        </p>
      );
    case "h1":
      return (
        <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)} style={style}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)} style={style}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)} style={style}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)} style={style}>
          {children}
        </h4>
      );
    default:
      return (
        <div ref={ref} className={cn(className)} style={style}>
          {children}
        </div>
      );
  }
}
