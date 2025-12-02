import * as THREE from "three";

export function createRoads(scene) {
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x2b2b2b });
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

    const road = new THREE.Mesh(
        new THREE.BoxGeometry(200, 0.2, 20),
        roadMat
    );
    road.position.set(0, -0.9, 30);
    road.receiveShadow = true;
    scene.add(road);

    const line = new THREE.Mesh(
        new THREE.BoxGeometry(150, 0.21, 0.5),
        lineMat
    );
    line.position.set(0, -0.89, -30);
    scene.add(line);
}
