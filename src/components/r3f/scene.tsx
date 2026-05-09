"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { Aurora } from "./aurora";
import { Rays } from "./rays";
import { Panda } from "./panda";

/**
 * Quick probe — returns true only if the browser will actually give us
 * a WebGL context. Some setups (broken GPU sandbox, hardware accel off)
 * will throw a runtime error otherwise and crash the whole page.
 */
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

/* CSS-only fallback — runs when WebGL is unavailable. Keeps the hero
 * looking intentional (gradient + grain) instead of a blank canvas
 * or crash overlay. */
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
  const [supported, setSupported] = useState<boolean | null>(null);
  const [crashed, setCrashed] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSupported(hasWebGL());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onResize = () => {
      setScale(window.innerWidth < 768 ? 0.7 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);

    // Listen for a webgl context loss event globally — if the browser
    // kills the GPU process mid-session, fall back gracefully.
    const onLost = () => setCrashed(true);
    window.addEventListener("webglcontextlost", onLost);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("webglcontextlost", onLost);
    };
  }, []);

  if (supported === null) return <div className="absolute inset-0 bg-ink" />;
  if (!supported || crashed) return <FallbackBackground />;

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
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
      <color attach="background" args={["#0A0A12"]} />

      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 4, 5]} intensity={1.4} color="#FFF7E8" />
      <directionalLight position={[5, -2, 3]} intensity={0.6} color="#FF8DC4" />
      <directionalLight position={[0, -5, 4]} intensity={0.3} color="#7B5CFF" />

      <Suspense fallback={null}>
        <Aurora />
        <Rays />
        <Panda scale={scale} />
      </Suspense>

      {!reduced && (
        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.7}
            mipmapBlur
          />
          <ChromaticAberration
            offset={new THREE.Vector2(0.0008, 0.0008)}
            radialModulation={false}
            modulationOffset={0}
          />
          <Vignette
            eskil={false}
            offset={0.2}
            darkness={0.6}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
