/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const positionOffset = [0.21, 2 - .275, -.55];

export default function ComputerScreen(props) {
    const { nodes, materials } = useGLTF('/computer-model/monitor_screen.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="monitor_screen"
                castShadow
                receiveShadow
                geometry={nodes.monitor_screen.geometry}
                morphTargetDictionary={nodes.monitor_screen.morphTargetDictionary}
                morphTargetInfluences={nodes.monitor_screen.morphTargetInfluences}
                position={positionOffset}
                scale={2}
            >
                {props.children}
            </mesh>
        </group>
    )
}

useGLTF.preload('/computer-model/monitor_screen.glb')
