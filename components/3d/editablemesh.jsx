import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';
import { getColorHex } from '../data/colors';
import rotationAngles from '../data/rotationangles';

const EditableMesh = (props) => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [view, setView] = useState(0);

    useFrame((state, delta) => {
        if (!props.isAutoRotate) {
            return;
        }
        ref.current.rotation.x += delta * 0.2;
        ref.current.rotation.y += delta;
    });

    const { nodes, materials } = useGLTF('/utah_teapot.glb');

    const cycleView = (ref) => {
        setView((view + 1) % rotationAngles.length);
        console.log(ref.current.rotation);
        ref.current.rotation.setFromVector3(rotationAngles[view]);
    }

    return (
        <mesh
            {...props}
            geometry={nodes.teapot.geometry}
            morphTargetDictionary={nodes.teapot.morphTargetDictionary}
            morphTargetInfluences={nodes.teapot.morphTargetInfluences}
            ref={ref}
            scale={hovered ? 1.1 : 1}
            onClick={e => cycleView(ref)}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}>
            <meshStandardMaterial color={getColorHex(props.color)} wireframe={props.isWireframe}
            />
        </mesh >
    )
}

export default EditableMesh;