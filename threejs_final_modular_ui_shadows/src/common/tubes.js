import * as THREE from "three";
export function createTubes(group) {
    const points = [
        new THREE.Vector3(5, 1.5, 20),
        new THREE.Vector3(4, 1.5, 3.5),
        new THREE.Vector3(4, 1.5, 3.5),
        new THREE.Vector3(-14, 1.5, 4),
        new THREE.Vector3(-13, 1.5, 4),
        new THREE.Vector3(4, 1.5, 4),
        new THREE.Vector3(4, 1.5, 4.5),
        new THREE.Vector3(4, 1.5, -13),
        new THREE.Vector3(6, 1.5, -12),
        new THREE.Vector3(7, 2, -11.8),
        new THREE.Vector3(8, 2.3, -11.9),
        new THREE.Vector3(11, 2.3, -11.9),
        new THREE.Vector3(13, 2.6, -11.9),
        new THREE.Vector3(12.7, 2.8, -11.7),
        new THREE.Vector3(12.4, 3, -11.8),
        new THREE.Vector3(12.4, 3.2, -11.9),
        new THREE.Vector3(12.3, 3.3, -11.4),
        new THREE.Vector3(12.3, 3.4, -11.2),
        new THREE.Vector3(11.3, 3.4, -11.2),
        new THREE.Vector3(10.5, 3.8, -11.1),
        new THREE.Vector3(8.5, 4.5, -11.1),
        new THREE.Vector3(6, 5, -11.1),
        new THREE.Vector3(5.3, 5.5, -11.1),
        new THREE.Vector3(5, 6, -11)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeometry = new THREE.TubeGeometry(curve, 150, 0.1, 8, false);
    const tubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    group.add(tube);
}