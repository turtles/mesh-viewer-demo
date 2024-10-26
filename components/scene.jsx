import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import ComputerMesh from './computermesh';

function Scene(props) {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
            <Suspense fallback={null}>
                <ComputerMesh isWireframe={false}>
                    <color attach="background" args={['blue']} />
                </ComputerMesh>
            </Suspense>
        </Canvas >);
}

export default Scene;