import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';
import ComputerMesh from './computermesh';
import EditableMesh from './editablemesh';

function Scene(props) {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
            <Suspense fallback={null}>
                <ComputerMesh isWireframe={false}>
                    <color attach="background" args={['blue']} />
                    <ambientLight intensity={Math.PI / 3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                    <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                    <EditableMesh />
                </ComputerMesh>
            </Suspense>
        </Canvas >);
}

export default Scene;