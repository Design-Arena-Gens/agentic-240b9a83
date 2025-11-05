'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Heart3D } from './Heart3D';

export default function HeartScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #1e3a8a, #581c87)' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Heart3D />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
