"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "rgba(255, 247, 232, 0.6)";
    };
    const onLeave = () => {
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.borderColor = "rgba(255, 247, 232, 0.3)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="hidden md:block fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-bone pointer-events-none"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="hidden md:block fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2 size-7 rounded-full border border-bone/30 pointer-events-none transition-[width,height,border-color] duration-300 ease-out"
      />
    </>
  );
}
