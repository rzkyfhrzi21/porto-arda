'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useFBX, Html, useProgress } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { TextureLoader } from 'three';
import type { Material, Mesh, MeshStandardMaterial } from 'three';

interface Model3DViewerProps {
  compact?: boolean;
}

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="bg-surface-container p-4 rounded-lg min-w-[200px]">
        <div className="mb-2 text-center font-mono text-xs text-on-surface-variant">
          Loading Model...
        </div>
        <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-container rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-center font-mono text-xs text-primary">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
}

function BuildingModel() {
  const fbx = useFBX('/models/concrete building.fbx');
  const texture = useLoader(TextureLoader, '/models/texture.png');

  useEffect(() => {
    fbx.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

        materials.forEach((sourceMaterial: Material) => {
          const material = sourceMaterial as MeshStandardMaterial;
          if ('map' in material) {
            material.map = texture;
            material.needsUpdate = true;
          }
        });
      }
    });
  }, [fbx, texture]);

  return <primitive object={fbx} scale={0.02} position={[0, -1.2, 0]} />;
}

export default function Model3DViewer({ compact = false }: Model3DViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="viewer-3d relative w-full h-full">
      <Canvas
        camera={{ position: compact ? [4, 2.6, 4] : [5, 3, 5], fov: compact ? 46 : 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 10, 5]} intensity={1.4} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.55} />

        <Suspense fallback={<Loader />}>
          <BuildingModel />
        </Suspense>

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={compact ? 10 : 15}
          maxPolarAngle={Math.PI / 2}
          autoRotate={autoRotate}
          autoRotateSpeed={compact ? 0.8 : 0.5}
        />

        <color attach="background" args={['#071424']} />
      </Canvas>

      {/* Overlay Controls */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={() => setAutoRotate((prev) => !prev)}
          className={`bg-surface-container/80 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
            autoRotate ? 'text-primary' : 'text-on-surface-variant'
          }`}
        >
          ⟳ Auto
        </button>
      </div>
    </div>
  );
}
