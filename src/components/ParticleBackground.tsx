import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

const ParticleCount = 200;
const ParticleSize = 0.02;

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const positions = new Float32Array(ParticleCount * 3);
  const colors = new Float32Array(ParticleCount * 3);

  useEffect(() => {
    // Generate random positions
    for (let i = 0; i < ParticleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Generate random colors
      colors[i * 3] = Math.random() * 0.5 + 0.5; // R
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5; // G
      colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B
    }

    if (particlesRef.current) {
      const geometry = particlesRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      particlesRef.current.rotation.x = time * 0.1;
      particlesRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={ParticleSize}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
} 