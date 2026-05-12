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

/* One shared IntersectionObserver across every Reveal on the page —
 * lighter than allocating an observer per instance, and the callback
 * fires fewer times during a fast scroll. */
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
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );
  return sharedObserver;
}

/**
 * Masked clip-path reveal — text rises from below as it enters viewport.
 * Animates opacity + transform only (no filter, no per-element observer).
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

  const wrapperClass = cn("overflow-hidden", className);
  const innerStyle: CSSProperties = {
    transform: visible ? "translateY(0)" : "translateY(110%)",
    opacity: visible ? 1 : 0,
    transition: `transform 0.9s var(--ease-out-expo) ${delay}s, opacity 0.7s ease ${delay}s`,
  };
  const inner = (
    <span className="block will-change-transform" style={innerStyle}>
      {children}
    </span>
  );

  switch (as) {
    case "span":
      return (
        <span ref={ref as React.RefObject<HTMLSpanElement>} className={wrapperClass}>
          {inner}
        </span>
      );
    case "p":
      return (
        <p ref={ref as React.RefObject<HTMLParagraphElement>} className={wrapperClass}>
          {inner}
        </p>
      );
    case "h1":
      return (
        <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={wrapperClass}>
          {inner}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={ref as React.RefObject<HTMLHeadingElement>} className={wrapperClass}>
          {inner}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={ref as React.RefObject<HTMLHeadingElement>} className={wrapperClass}>
          {inner}
        </h3>
      );
    case "h4":
      return (
        <h4 ref={ref as React.RefObject<HTMLHeadingElement>} className={wrapperClass}>
          {inner}
        </h4>
      );
    default:
      return (
        <div ref={ref} className={wrapperClass}>
          {inner}
        </div>
      );
  }
}
