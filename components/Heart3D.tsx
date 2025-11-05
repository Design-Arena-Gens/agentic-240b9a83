'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

export function Heart3D() {
  const meshRef = useRef<Mesh>(null);
  const pulseRef = useRef(0);

  // Create heart shape
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0, y + 0.5);
    shape.bezierCurveTo(x + 0, y + 0.5, x - 0.4, y + 0.9, x - 0.8, y + 0.5);
    shape.bezierCurveTo(x - 1.2, y + 0.1, x - 1.2, y - 0.3, x - 0.8, y - 0.7);
    shape.bezierCurveTo(x - 0.4, y - 1.1, x + 0, y - 1.5, x + 0, y - 1.5);
    shape.bezierCurveTo(x + 0, y - 1.5, x + 0.4, y - 1.1, x + 0.8, y - 0.7);
    shape.bezierCurveTo(x + 1.2, y - 0.3, x + 1.2, y + 0.1, x + 0.8, y + 0.5);
    shape.bezierCurveTo(x + 0.4, y + 0.9, x + 0, y + 0.5, x + 0, y + 0.5);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Heartbeat pulse animation
      pulseRef.current += 0.05;
      const pulse = Math.sin(pulseRef.current * 2) * 0.05 + 1;
      meshRef.current.scale.set(pulse, pulse, pulse);

      // Subtle rotation
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI, 0, 0]} scale={1.5}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial
        color="#ff1744"
        metalness={0.3}
        roughness={0.2}
        emissive="#ff1744"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}
