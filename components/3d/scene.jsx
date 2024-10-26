import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';
import ComputerMesh from './computermesh';
import EditableMesh from './editablemesh';
import { useState } from 'react';
import { clamp } from "three/src/math/MathUtils.js";

const zoomMin = 3;
const zoomMax = 15;

class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.state = { zoom: 5 };
    }

    onWheel(e) {
        this.setState({ zoom: clamp(this.state.zoom + e.deltaY * 0.005, zoomMin, zoomMax) });
    }

    render() {
        return (
            <Canvas onWheel={this.onWheel.bind(this)} >
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0.2, 3.5]} />

                <ambientLight intensity={Math.PI / 3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                <Suspense fallback={null}>
                    <ComputerMesh
                        position={[0, -1, 0]}
                        isWireframe={false}>
                        <color attach="background" args={['blue']} />
                        <ambientLight intensity={Math.PI / 3} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, this.state.zoom]} />
                        <EditableMesh isWireframe={this.props.isWireframe} />
                    </ComputerMesh>
                </Suspense>
            </Canvas >);
    }
}

export default Scene;