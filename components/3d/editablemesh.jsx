import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';
import { getColorHex } from '../data/colors';
import rotationAngles from '../data/rotationangles';
import * as THREE from "three";

const EditableMesh = ({ color, skew, wavyFrequency = 10, isWavy, isExtruded, isWireframe, isAutoRotate, setIsAutoRotate }) => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [view, setView] = useState(0);
    const { nodes, materials } = useGLTF('/utah_teapot.glb');
    const basePositions = useMemo(() => [...nodes.teapot.geometry.attributes.position.array], []);

    useFrame((state, delta) => {
        if (isAutoRotate) {
            ref.current.rotation.x += delta;
            ref.current.rotation.y += delta;
        }
        let transform = new THREE.Matrix4();
        transform.compose(ref.current.position, ref.current.quaternion, ref.current.scale);
        ref.current.matrix.makeShear(ref.current.skew * 5, 0, 0, 0, 0, 0).multiply(transform);
    });


    const cycleView = (ref) => {
        setView((view + 1) % rotationAngles.length);
        ref.current.rotation.setFromVector3(rotationAngles[view]);
        setIsAutoRotate(false);
    }

    const ResetGeometry = () => {
        const { array } = nodes.teapot.geometry.attributes.position;
        const len = array.length;
        for (let i = 0; i < len; ++i) {
            array[i] = basePositions[i];
        }
        nodes.teapot.geometry.attributes.position.needsUpdate = true;
    }

    const Wavy = (amplitude, frequency) => {
        const { array } = nodes.teapot.geometry.attributes.position;
        const len = array.length;
        let vertex = new THREE.Vector3;
        for (let i = 0; i < len; i += 3) {
            vertex.set(basePositions[i], basePositions[i + 1], basePositions[i + 2]);
            array[i + 1] = vertex.y + amplitude * Math.sin(vertex.x * frequency);
        }
        nodes.teapot.geometry.attributes.position.needsUpdate = true;
    }

    const ExtrudeX = (amount) => {
        const { array } = nodes.teapot.geometry.attributes.position;
        const len = array.length;
        let averageX = 0;
        for (let i = 0; i < len; i += 3) {
            averageX += basePositions[i];
        }
        averageX /= (len / 3);

        for (let i = 0; i < len; i += 3) {
            if (basePositions[i] < averageX) {
                array[i] = basePositions[i] - amount;
            } else {
                array[i] = basePositions[i] + amount;
            }
        }
        nodes.teapot.geometry.attributes.position.needsUpdate = true;
    }

    ResetGeometry();
    if (isWavy) {
        Wavy(0.1, wavyFrequency);
    }
    if (isExtruded) {
        ExtrudeX(0.5);
    }

    return (
        <mesh
            geometry={nodes.teapot.geometry}
            ref={ref}
            scale={hovered ? 1.1 : 1}
            matrixAutoUpdate={false}
            onClick={e => cycleView(ref)}
            onPointerOver={e => setHovered(true)}
            onPointerOut={e => setHovered(false)}
            skew={skew}
            isWavy={isWavy}
            isExtruded={isExtruded}
            wavyFrequency={wavyFrequency}
        >
            <meshStandardMaterial color={getColorHex(color)} wireframe={isWireframe} />
        </mesh >
    )
}

export default EditableMesh;