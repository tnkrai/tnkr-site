import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress, Grid } from "@react-three/drei";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const geometry = useLoader(STLLoader, url);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    wireframe: false,
  }); // Blue color
  return (
    <mesh geometry={geometry} material={material} scale={[0.1, 0.1, 0.1]}>
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[15, 20, 5]} angle={0.3} />
      <Grid infiniteGrid={true} />
      <mesh receiveShadow position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </>
  );
}

interface STLViewerProps {
  urls: string[];
}

export default function STLViewer({ urls }: STLViewerProps) {
  return (
    <Canvas shadowMap camera={{ position: [5, 5, 5], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <Scene />
        {urls.map((url, index) => (
          <Model key={index} url={url} />
        ))}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
