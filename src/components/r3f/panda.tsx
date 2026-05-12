"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

/* -------------------------------------------------------------------
 * 3-step toon gradient texture — gives the cartoon-shaded panda look
 * ------------------------------------------------------------------- */
function useToonGradient() {
  return useMemo(() => {
    // 3-stop grayscale ramp (RGBA bytes)
    const data = new Uint8Array([
      90, 90, 90, 255,
      170, 170, 170, 255,
      255, 255, 255, 255,
    ]);
    const tex = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }, []);
}

/* -------------------------------------------------------------------
 * Eye component — sclera + pupil that tracks cursor (clamped)
 * ------------------------------------------------------------------- */
function Eye({
  position,
  flip = false,
  toon,
}: {
  position: [number, number, number];
  flip?: boolean;
  toon: THREE.Texture;
}) {
  const pupilRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!pupilRef.current) return;
    // R3F pointer = normalized -1..1
    const px = state.pointer.x * 0.18;
    const py = state.pointer.y * 0.12;
    // damped lerp
    pupilRef.current.position.x = THREE.MathUtils.lerp(
      pupilRef.current.position.x,
      px,
      0.08,
    );
    pupilRef.current.position.y = THREE.MathUtils.lerp(
      pupilRef.current.position.y,
      py,
      0.08,
    );
  });

  return (
    <group position={position}>
      {/* black eye patch (squashed oval, sits on face) */}
      <mesh position={[flip ? 0.04 : -0.04, -0.02, 0]} scale={[0.62, 0.78, 0.32]}>
        <sphereGeometry args={[0.55, 18, 18]} />
        <meshToonMaterial color="#0A0A12" gradientMap={toon} />
      </mesh>

      {/* sclera (white, slightly recessed into the patch) */}
      <mesh position={[0, 0, 0.18]}>
        <sphereGeometry args={[0.27, 18, 18]} />
        <meshToonMaterial color="#FFF7E8" gradientMap={toon} />
      </mesh>

      {/* pupil — tracks cursor */}
      <group ref={pupilRef} position={[0, 0, 0.34]}>
        <mesh>
          <sphereGeometry args={[0.2, 18, 18]} />
          <meshToonMaterial color="#0A0A12" gradientMap={toon} />
        </mesh>
        {/* large highlight (top-right) */}
        <mesh position={[0.07, 0.08, 0.14]}>
          <sphereGeometry args={[0.07, 14, 14]} />
          <meshBasicMaterial color="#FFFFFF" toneMapped={false} />
        </mesh>
        {/* tiny secondary highlight */}
        <mesh position={[-0.05, -0.06, 0.16]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

/* -------------------------------------------------------------------
 * The Panda
 * ------------------------------------------------------------------- */
export function Panda({ scale = 1 }: { scale?: number }) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const wavingPaw = useRef<THREE.Group>(null);
  const toon = useToonGradient();

  /* idle bob + head sway tied to time + cursor */
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      root.current.position.y = Math.sin(t * 1.1) * 0.06;
    }
    if (head.current) {
      const targetX = -state.pointer.y * 0.12;
      const targetY = state.pointer.x * 0.16;
      head.current.rotation.x = THREE.MathUtils.lerp(
        head.current.rotation.x,
        targetX,
        0.06,
      );
      head.current.rotation.y = THREE.MathUtils.lerp(
        head.current.rotation.y,
        targetY,
        0.06,
      );
      head.current.rotation.z = Math.sin(t * 0.7) * 0.02;
    }
  });

  /* paw wave — gsap timeline on mount, looping with pauses */
  useEffect(() => {
    if (!wavingPaw.current) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6 });
    tl.fromTo(
      wavingPaw.current.rotation,
      { z: -0.2 },
      { z: -0.55, duration: 0.45, ease: "power2.inOut" },
    )
      .to(wavingPaw.current.rotation, {
        z: -0.05,
        duration: 0.45,
        ease: "power2.inOut",
      })
      .to(wavingPaw.current.rotation, {
        z: -0.55,
        duration: 0.45,
        ease: "power2.inOut",
      })
      .to(wavingPaw.current.rotation, {
        z: -0.25,
        duration: 0.5,
        ease: "power2.out",
      });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <group ref={root} scale={scale} position={[0, -0.3, 0]}>
      {/* ------------------------- BODY ------------------------- */}
      <group position={[0, -1.55, 0]}>
        {/* black outer body — rounded blob */}
        <mesh position={[0, 0, 0]} scale={[1.55, 1.45, 1.25]}>
          <sphereGeometry args={[1, 22, 22]} />
          <meshToonMaterial color="#16161E" gradientMap={toon} />
        </mesh>

        {/* gray belly patch — slightly forward */}
        <mesh position={[0, -0.05, 0.7]} scale={[1.05, 1.05, 0.55]}>
          <sphereGeometry args={[0.85, 22, 22]} />
          <meshToonMaterial color="#C7C2BA" gradientMap={toon} />
        </mesh>

        {/* belly button (tiny dark dimple) */}
        <mesh position={[0, -0.55, 1.18]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshToonMaterial color="#1A1A22" gradientMap={toon} />
        </mesh>
      </group>

      {/* ------------------------- LEFT PAW (resting) ------------------------- */}
      <group position={[-1.05, -1.7, 0.85]} rotation={[0, 0, 0.35]}>
        <RoundedBox args={[0.55, 0.5, 0.55]} radius={0.22} smoothness={2}>
          <meshToonMaterial color="#0E0E18" gradientMap={toon} />
        </RoundedBox>
      </group>

      {/* ------------------------- RIGHT PAW (waving) ------------------------- */}
      <group ref={wavingPaw} position={[1.4, -0.3, 0.4]} rotation={[0, 0, -0.25]}>
        {/* upper arm */}
        <mesh position={[0.22, -0.1, 0]} rotation={[0, 0, -0.35]} scale={[0.55, 0.85, 0.55]}>
          <sphereGeometry args={[0.5, 18, 18]} />
          <meshToonMaterial color="#16161E" gradientMap={toon} />
        </mesh>
        {/* paw end */}
        <group position={[0.6, 0.55, 0.05]}>
          <RoundedBox args={[0.6, 0.62, 0.45]} radius={0.22} smoothness={2}>
            <meshToonMaterial color="#0E0E18" gradientMap={toon} />
          </RoundedBox>
          {/* paw pads (cream beans on palm) */}
          <mesh position={[0, -0.05, 0.25]} scale={[0.7, 0.5, 0.4]}>
            <sphereGeometry args={[0.18, 14, 14]} />
            <meshToonMaterial color="#F4EBDD" gradientMap={toon} />
          </mesh>
          <mesh position={[-0.18, 0.18, 0.25]} scale={[0.32, 0.32, 0.3]}>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshToonMaterial color="#F4EBDD" gradientMap={toon} />
          </mesh>
          <mesh position={[0.18, 0.18, 0.25]} scale={[0.32, 0.32, 0.3]}>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshToonMaterial color="#F4EBDD" gradientMap={toon} />
          </mesh>
          <mesh position={[0, 0.25, 0.25]} scale={[0.3, 0.3, 0.3]}>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshToonMaterial color="#F4EBDD" gradientMap={toon} />
          </mesh>
        </group>
      </group>

      {/* ------------------------- HEAD (with cursor tilt) ------------------------- */}
      <group ref={head} position={[0, 0.4, 0]}>
        {/* head shape — slightly squished sphere */}
        <mesh scale={[1.5, 1.4, 1.4]}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshToonMaterial color="#FFF7E8" gradientMap={toon} />
        </mesh>

        {/* ears */}
        <group position={[-1.05, 0.95, 0]} rotation={[0, 0, -0.15]}>
          <mesh scale={[0.55, 0.55, 0.5]}>
            <sphereGeometry args={[0.6, 18, 18]} />
            <meshToonMaterial color="#0E0E18" gradientMap={toon} />
          </mesh>
          {/* inner ear (cream) */}
          <mesh position={[0, 0, 0.18]} scale={[0.32, 0.32, 0.18]}>
            <sphereGeometry args={[0.5, 14, 14]} />
            <meshToonMaterial color="#3A2A2E" gradientMap={toon} />
          </mesh>
        </group>
        <group position={[1.05, 0.95, 0]} rotation={[0, 0, 0.15]}>
          <mesh scale={[0.55, 0.55, 0.5]}>
            <sphereGeometry args={[0.6, 18, 18]} />
            <meshToonMaterial color="#0E0E18" gradientMap={toon} />
          </mesh>
          <mesh position={[0, 0, 0.18]} scale={[0.32, 0.32, 0.18]}>
            <sphereGeometry args={[0.5, 14, 14]} />
            <meshToonMaterial color="#3A2A2E" gradientMap={toon} />
          </mesh>
        </group>

        {/* eyes */}
        <Eye position={[-0.55, 0.15, 1.18]} toon={toon} />
        <Eye position={[0.55, 0.15, 1.18]} flip toon={toon} />

        {/* nose */}
        <mesh position={[0, -0.25, 1.32]} scale={[1.1, 0.85, 0.85]}>
          <sphereGeometry args={[0.11, 14, 14]} />
          <meshToonMaterial color="#1A1A22" gradientMap={toon} />
        </mesh>

        {/* tiny mouth / chin shadow */}
        <mesh position={[0, -0.5, 1.28]} rotation={[0.3, 0, 0]} scale={[0.18, 0.04, 0.04]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshToonMaterial color="#1A1A22" gradientMap={toon} />
        </mesh>

        {/* cheek blush — subtle pink */}
        <mesh position={[-0.85, -0.18, 1.05]} scale={[0.18, 0.12, 0.04]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshToonMaterial color="#FFC2D6" gradientMap={toon} transparent opacity={0.55} />
        </mesh>
        <mesh position={[0.85, -0.18, 1.05]} scale={[0.18, 0.12, 0.04]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshToonMaterial color="#FFC2D6" gradientMap={toon} transparent opacity={0.55} />
        </mesh>
      </group>
    </group>
  );
}
