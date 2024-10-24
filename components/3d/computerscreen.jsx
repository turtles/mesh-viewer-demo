/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

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
                position={[0.21, -0.275, -.55]}
                scale={2}
            >
                {props.children}
            </mesh>
        </group>
    )
}

useGLTF.preload('/computer-model/monitor_screen.glb')

