import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF, Point } from '@react-three/drei'

function Carla(props) {
  const { scene } = useGLTF('/assets/carla-draco.glb')
  return <primitive object={scene} {...props} />
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/assets/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/assets/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      George Butler
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/assets/SurfaceImperfections003_1K_var1.jpg', '/assets/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}

const VideoHero = () => {
  return (
    <Canvas style={{ position: 'absolute' }} className="h-full -z-10" gl={{ alpha: false }} camera={{ position: [0, 1, 4], fov: 45 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Points
  limit={1000} // Optional: max amount of items (for calculating buffer size)
  range={1000} // Optional: draw-range
>
  <pointsMaterial vertexColors />
  <Point position={[1, 2, 3]} color="red" />
</Points>
    </Canvas>
  );
};

export default VideoHero;
