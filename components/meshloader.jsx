import { useLoader } from '@react-three/fiber'
import { useFBX, useTexture } from '@react-three/drei'
import * as THREE from "three";

function setupMaterials(fbx) {
    const [face_texture, hair_texture, outfit_texture, skin_texture, face_alpha] = useTexture([
        '/lain-model/textures/face_diffuse.png',
        '/lain-model/textures/hair_diffuse.png',
        '/lain-model/textures/outfit_diffuse.png',
        '/lain-model/textures/skin_diffuse.png',
        '/lain-model/textures/face_alpha.png',
    ]);

    // Relates submesh name to diffuse texture
    const diffuseMapping = {
        base_mesh001: skin_texture,
        face_texture003: face_texture,
        face_texture004: face_texture,
        outfit: outfit_texture,
        base_hair: hair_texture,
    };

    // Relates submesh name to alpha texture
    const alphaMapping = {
        face_texture003: face_alpha,
        face_texture004: face_alpha,
    }

    // Apply material to each submesh
    fbx.children.forEach((mesh) => {
        if (Object.keys(diffuseMapping).includes(mesh.name)) {
            let hasAlphaMap = !!alphaMapping[mesh.name];
            mesh.material = new THREE.MeshToonMaterial({
                map: diffuseMapping[mesh.name],
                alphaMap: hasAlphaMap ? alphaMapping[mesh.name] : null,
                transparent: hasAlphaMap,
            });
        }
    });
}

function setupWireframe(fbx) {
    const material = new THREE.MeshStandardMaterial({
        wireframe: true
    });
    fbx.children.forEach((mesh) => {
        mesh.material = material;
    });
}

const MeshLoader = ({ isWireframe = false }) => {
    const fbx = useFBX('/lain-model/Lain_v3.fbx')

    if (isWireframe) {
        setupWireframe(fbx);
    }
    else {
        setupMaterials(fbx);
    }

    return (
        <primitive object={fbx} scale={0.035} position={[0, -3.5, 0]} />
    );
}

export default MeshLoader;