import { OrbitControls, RenderTexture, useFBX, useTexture } from '@react-three/drei'
import * as THREE from "three";
import ComputerScreen from './computerscreen';

function setupMaterials(fbx) {
    const [tower_texture, monitor_texture, keyboard_texture] = useTexture([
        '/computer-model/textures/tower_diffuse.png',
        '/computer-model/textures/monitor_diffuse.png',
        '/computer-model/textures/keyboard_diffuse.png',
    ]);

    // Relates submesh name to diffuse texture
    const diffuseMapping = {
        tower: tower_texture,
        keyboard: keyboard_texture,
        monitor_case: monitor_texture,
        cables: keyboard_texture,
    };

    console.log('loading meshes');
    // Apply material to each submesh
    fbx.children.forEach((mesh) => {
        if (Object.keys(diffuseMapping).includes(mesh.name)) {
            mesh.material = new THREE.MeshToonMaterial({
                map: diffuseMapping[mesh.name],
            });
        }
    });
}

function setupWireframe(fbx) {
    const material = new THREE.MeshStandardMaterial({
        wireframe: true,
    });
    fbx.children.forEach((mesh) => {
        mesh.material = material;
    });
}

const ComputerMesh = ({ position = [0, 0, 0], isWireframe = false, children }) => {
    const computerModel = useFBX('/computer-model/computer.fbx');

    if (isWireframe) {
        setupWireframe(computerModel);
    }
    else {
        setupMaterials(computerModel);
    }

    return (
        <>
            <primitive object={computerModel} scale={0.02} position={position} />
            <ComputerScreen position={position}>
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        {children}
                    </RenderTexture>
                </meshStandardMaterial>
                <OrbitControls enableZoom={false} enablePan={false} />
            </ComputerScreen>
        </>
    );
}

export default ComputerMesh;