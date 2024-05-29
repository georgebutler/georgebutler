import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Grid, PerspectiveCamera, Stars } from '@react-three/drei';
import { Vector3 } from 'three';

export default function Hero() {
    return (
        <Canvas style={{ position: 'absolute' }} className="h-full -z-10">
            <PerspectiveCamera makeDefault position={new Vector3(0, 0, 1000)}/>
            <Stars />
            <Grid followCamera={true} infiniteGrid={true}/>
        </Canvas>
    );
}