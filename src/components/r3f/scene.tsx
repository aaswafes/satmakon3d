"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { Aurora } from "./aurora";
import { Rays } from "./rays";
import { Panda } from "./panda";

export function HeroScene() {
  const [reduced, setReduced] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onResize = () => {
      setScale(window.innerWidth < 768 ? 0.7 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.3, 6], fov: 38 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#0A0A12"]} />

      {/* lighting — illustration-grade rim/key */}
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
          <Vignette eskil={false} offset={0.2} darkness={0.6} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
