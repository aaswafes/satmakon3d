"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Aurora } from "./aurora";
import { Panda } from "./panda";
import { useTheme } from "@/lib/theme-context";

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

function FallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(123,92,255,0.45) 0%, rgba(123,92,255,0.15) 40%, transparent 70%), radial-gradient(40% 40% at 75% 30%, rgba(255,91,170,0.35) 0%, transparent 70%), radial-gradient(40% 40% at 25% 70%, rgba(90,240,201,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div className="absolute inset-0 dotgrid opacity-40 mix-blend-screen" />
    </div>
  );
}

export function HeroScene() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [supported, setSupported] = useState<boolean | null>(null);
  const [crashed, setCrashed] = useState(false);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSupported(hasWebGL());

    const onResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setScale(w < 768 ? 0.7 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);

    const onLost = () => setCrashed(true);
    window.addEventListener("webglcontextlost", onLost);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("webglcontextlost", onLost);
    };
  }, []);

  // pause the canvas entirely when the hero is scrolled offscreen
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px 0px 120px 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (supported === null) return <div className="absolute inset-0 bg-ink" />;
  if (!supported || crashed) return <FallbackBackground />;

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, isMobile ? 1.25 : 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        camera={{ position: [0, 0.3, 6], fov: 38 }}
        style={{ width: "100%", height: "100%" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setCrashed(true);
          });
        }}
        fallback={<FallbackBackground />}
      >
        <color attach="background" args={[theme === "light" ? "#F5EFE2" : "#0A0A12"]} />

        <ambientLight intensity={0.55} />
        <directionalLight position={[-3, 4, 5]} intensity={1.4} color="#FFF7E8" />
        <directionalLight position={[5, -2, 3]} intensity={0.6} color="#FF8DC4" />
        <directionalLight position={[0, -5, 4]} intensity={0.3} color="#7B5CFF" />

        <Suspense fallback={null}>
          <Aurora theme={theme} />
          <Panda scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
}
