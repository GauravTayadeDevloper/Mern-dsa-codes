import * as THREE from "three";

export function stairs10(group) {

    const geometry = new THREE.BoxGeometry(0.98, 0.4, 1);
    const material = new THREE.MeshBasicMaterial({ color: "blue" });

    const parent = new THREE.Group();

    for (let i = 0; i < 6; i++) {
        const step = new THREE.Mesh(geometry, material);
        step.position.set(7.5 + (i * 1), 4 + (i * 0.4), 10);
        parent.add(step);
    }

    group.add(parent);
}
