"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Sapforce-style volumetric light rays. We fake them with elongated,
 * low-opacity additive planes coming diagonally from upper right.
 * Bloom postprocessing will make them feel volumetric.
 */
export function Rays() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.z = -0.5 + Math.sin(t * 0.2) * 0.04;
  });

  const rays = [
    { x: 4, y: 2, w: 0.6, h: 18, color: "#7B5CFF", op: 0.25 },
    { x: 5, y: 3, w: 0.35, h: 16, color: "#FF5BAA", op: 0.22 },
    { x: 3, y: 1.5, w: 0.45, h: 18, color: "#9B82FF", op: 0.2 },
    { x: 6, y: 2.5, w: 0.25, h: 14, color: "#FF8DC4", op: 0.18 },
    { x: 2, y: 1, w: 0.3, h: 16, color: "#5AF0C9", op: 0.12 },
  ];

  return (
    <group ref={group} position={[0, 0, -2]}>
      {rays.map((r, i) => (
        <mesh
          key={i}
          position={[r.x, r.y, 0]}
          rotation={[0, 0, 0]}
          scale={[r.w, r.h, 1]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            color={r.color}
            transparent
            opacity={r.op}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
