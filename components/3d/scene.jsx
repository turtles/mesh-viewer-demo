import React, { Suspense, useLayoutEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { clamp } from "three/src/math/MathUtils.js";
import { PerspectiveCamera } from '@react-three/drei';
import ComputerMesh from './computermesh';
import EditableMesh from './editablemesh';

const zoomMin = 3;
const zoomMax = 15;

const Scene = (props) => {
    const [zoom, setZoom] = useState(5);
    const [aspect, setAspect] = useState(1);


    const onWheel = (e) => {
        setZoom(clamp(zoom + e.deltaY * 0.005, zoomMin, zoomMax));
    }
    const updateAspect = () => {
        setAspect(window.innerWidth / window.innerHeight);
    }

    const getAspectFromWindowSize = () => {
        useLayoutEffect(() => {
            window.addEventListener('resize', updateAspect);
            updateAspect();
            return () => window.removeEventListener('resize', updateAspect);
        }, []);
        return aspect;
    }

    return (
        <Canvas
            onWheel={onWheel}>
            <PerspectiveCamera makeDefault manual aspect={getAspectFromWindowSize()} position={[0, 0.2, 3.5]} />
            <ambientLight intensity={Math.PI / 3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
            <Suspense fallback={null}>
                <ComputerMesh
                    position={[0, -1, 0]}
                    isWireframe={false}>
                    <color attach="background" args={['blue']} />
                    <ambientLight intensity={Math.PI / 3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                    <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, zoom]} />
                    <EditableMesh color={props.color.name}
                        isWireframe={props.isWireframe}
                        isAutoRotate={props.isAutoRotate}
                        setIsAutoRotate={props.setIsAutoRotate} />
                </ComputerMesh>
            </Suspense>
        </Canvas >);
}

export default Scene;