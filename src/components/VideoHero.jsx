import * as THREE from 'three'
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds, Text, useTexture, useGLTF, Point, Icosahedron, Float, TorusKnot } from '@react-three/drei'

const Scene = () => {
  const points = useRef();

  return (
    <Float>
      <points ref={points}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
      </points>
    </Float>

  )
}

const VideoHero = () => {
  return (
    <Canvas style={{ position: 'absolute' }} className="h-full -z-10" gl={{ alpha: false }} camera={{ fov: 45 }}>
      <directionalLight intensity={1} />
      <Bounds observe makedefault margin={1}>
        <Scene />
      </Bounds>
    </Canvas>
  );
};

export default VideoHero;
