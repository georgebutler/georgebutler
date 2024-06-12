import React, { useEffect, useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { useVideoTexture, shaderMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
uniform sampler2D map;

uniform float width;
uniform float height;
uniform float nearClipping, farClipping;

uniform float pointSize;
uniform float zOffset;

varying vec2 vUv;

const float XtoZ = 1.11146; // tan( 1.0144686 / 2.0 ) * 2.0;
const float YtoZ = 0.83359; // tan( 0.7898090 / 2.0 ) * 2.0;

void main() {

  vUv = vec2( position.x / width, position.y / height );

  vec4 color = texture2D( map, vUv );
  float depth = ( color.r + color.g + color.b ) / 3.0;

  // Projection code by @kcmic

  float z = ( 1.0 - depth ) * (farClipping - nearClipping) + nearClipping;

  vec4 pos = vec4(
    ( position.x / width - 0.5 ) * z * XtoZ,
    ( position.y / height - 0.5 ) * z * YtoZ,
    - z + zOffset,
    1.0);

  gl_PointSize = pointSize;
  gl_Position = projectionMatrix * modelViewMatrix * pos;

}
`;

const fragmentShader = `
uniform sampler2D map;

varying vec2 vUv;

void main() {

  vec4 color = texture2D( map, vUv );
  gl_FragColor = vec4( color.r, color.g, color.b, 0.2 );

}
`;

const VideoShaderMaterial = shaderMaterial(
  {
    map: null,
    width: 640,
    height: 480,
    nearClipping: 1,
    farClipping: 3000,
    pointSize: 2,
    zOffset: 1500,
  },
  vertexShader,
  fragmentShader
);

extend({ VideoShaderMaterial });

const PointCloud = () => {
  const meshRef = useRef();
  const videoTexture = useVideoTexture('/textures/kinect.mp4', { start: true, muted: true });

  useEffect(() => {
    const width = 640;
    const height = 480;

    const vertices = new Float32Array(width * height * 3);
    for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j++) {
      vertices[i] = j % width;
      vertices[i + 1] = Math.floor(j / width);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    if (meshRef.current) {
      meshRef.current.geometry = geometry;
      meshRef.current.material.uniforms.map.value = videoTexture;
    }
  }, [videoTexture]);

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <videoShaderMaterial
        attach="material"
        transparent
        blending={THREE.AdditiveBlending}
        depthTest={false}
        depthWrite={false}
      />
    </points>
  );
};

const VideoHero = () => {
  return (
    <Canvas style={{ position: 'absolute' }} className="h-full -z-10" camera={{ position: [0, 0, 1200], fov: 50, far: 3000 }}>
      <PointCloud />
    </Canvas>
  );
};

export default VideoHero;
