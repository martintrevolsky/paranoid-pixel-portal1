import { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Plane, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Water shader
const WaterMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.2),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      float wave = sin(pos.x * 2.0 + uTime) * 0.1
                + sin(pos.y * 2.0 + uTime) * 0.1;
      vWave = wave;
      pos.z += wave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment shader
  `
    varying vec2 vUv;
    varying float vWave;
    uniform vec3 uColor;

    void main() {
      float wave = vWave * 0.2;
      vec3 color = mix(uColor, vec3(0.0, 0.2, 0.4), wave + 0.5);
      gl_FragColor = vec4(color, 0.8);
    }
  `
);

extend({ WaterMaterial });

function Water() {
  const ref = useRef<any>();
  const waterRef = useRef<any>();

  useFrame((state) => {
    const { clock } = state;
    if (waterRef.current) {
      waterRef.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <Plane ref={ref} args={[10, 10, 100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      {/* @ts-ignore */}
      <waterMaterial ref={waterRef} attach="material" transparent />
    </Plane>
  );
}

export default function WaterBackground() {
  return (
    <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#0a0a0a' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Water />
      </Canvas>
    </div>
  );
} 