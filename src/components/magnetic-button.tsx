"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const base = cn(
    "magnet relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
    "transition-colors duration-300",
    size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm",
    variant === "primary"
      ? "bg-bone text-ink hover:bg-cream"
      : "bg-transparent text-bone border border-bone/15 hover:border-bone/30 hover:bg-bone/[0.04]",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={base}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={base}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
