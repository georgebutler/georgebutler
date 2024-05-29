import { Canvas } from "@react-three/fiber";

export default function Hero() {
    return (
        <Canvas resize={{ debounce: 0 }} style={{ position: 'absolute' }} className="h-full -z-10">
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}