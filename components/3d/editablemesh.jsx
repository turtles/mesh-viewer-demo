import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';
import { getColorHex } from '../data/colors';

const EditableMesh = (props) => {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.2;
        ref.current.rotation.y += delta;
        // ref.current.rotation.z += delta;
    });

    const { nodes, materials } = useGLTF('/utah_teapot.glb');

    return (
        <mesh
            {...props}
            geometry={nodes.teapot.geometry}
            morphTargetDictionary={nodes.teapot.morphTargetDictionary}
            morphTargetInfluences={nodes.teapot.morphTargetInfluences}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <meshStandardMaterial color={hovered ? 'hotpink' : getColorHex(props.color)}
                wireframe={props.isWireframe}
            />
        </mesh>
    )
}

export default EditableMesh;