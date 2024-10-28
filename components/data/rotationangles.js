import * as THREE from "three";

const rotationAngles = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, Math.PI * 0.5, 0),
    new THREE.Vector3(0, Math.PI, 0),
    new THREE.Vector3(0, Math.PI * 1.5, 0),
    new THREE.Vector3(Math.PI * 0.5, 0, 0),
    new THREE.Vector3(Math.PI, 0, 0),
    new THREE.Vector3(Math.PI * 1.5, 0, 0),
    new THREE.Vector3(0, 0, Math.PI * 0.5),
    new THREE.Vector3(0, 0, Math.PI, 0),
    new THREE.Vector3(0, 0, Math.PI * 1.5),
];

export default rotationAngles;
