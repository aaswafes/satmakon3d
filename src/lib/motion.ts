"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsap() {
  if (typeof window === "undefined") return null;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };

/** Damped spring helper for cursor / mouse follow */
export function damp(
  current: number,
  target: number,
  smoothing: number,
  delta: number,
) {
  return current + (target - current) * (1 - Math.exp(-smoothing * delta));
}

/** clamp helper */
export function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
