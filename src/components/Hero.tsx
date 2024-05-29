import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Vector3, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points, Material, type NormalBufferAttributes, type Object3DEventMap } from 'three';
import { useRef, useMemo } from 'react';

function PointGrid() {
    const pointsRef = useRef<Points<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);
    
    const gridPoints = useMemo(() => {
        const points = [];
        const size = 10;
        const divisions = 20;

        for (let i = -size; i <= size; i += size / divisions) {
            for (let j = -size; j <= size; j += size / divisions) {
                points.push(i, j, 0);
            }
        }

        return new Float32BufferAttribute(points, 3);
    }, []);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        pointsRef.current.rotation.y = time * 0.1;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attach="attributes-position" {...gridPoints} />
            </bufferGeometry>
            <pointsMaterial attach="material" color="white" size={0.2} />
        </points>
    );
}

export default function Hero() {
    return (
        <Canvas style={{ position: 'absolute' }} className="h-full -z-10">
            <PerspectiveCamera makeDefault position={new Vector3(0, 0, 50)} />
            <PointGrid />
        </Canvas>
    );
}
