import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import MeshLoader from './meshloader';
import { OrbitControls } from '@react-three/drei'

function Scene(props) {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
            <Suspense fallback={null}>
                <MeshLoader isWireframe={false} />
            </Suspense>
            <OrbitControls />
        </Canvas >);
}

export default Scene;