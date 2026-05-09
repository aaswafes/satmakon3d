"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/cn";

type Tag = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
};

/**
 * Masked clip-path reveal — text rises from below as it enters viewport.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const wrapperClass = cn("overflow-hidden", className);
  const innerStyle: CSSProperties = {
    transform: visible ? "translateY(0)" : "translateY(110%)",
    opacity: visible ? 1 : 0,
    filter: visible ? "blur(0)" : "blur(6px)",
    transition: `transform 1s var(--ease-out-expo) ${delay}s, opacity 0.8s ease ${delay}s, filter 0.8s ease ${delay}s`,
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
