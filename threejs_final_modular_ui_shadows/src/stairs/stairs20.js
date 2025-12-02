import * as THREE from "three";

export function stairs20(group) {

    const geometry = new THREE.BoxGeometry(0.98, 0.4, 1);
    const material = new THREE.MeshBasicMaterial({ color: "blue" });

    const parent = new THREE.Group();

    for (let i = 0; i < 6; i++) {
        const step = new THREE.Mesh(geometry, material);
        step.position.set(12.5 - (i * 1), 6 + (i * 0.4), 11);
        parent.add(step);
    }

    group.add(parent);
}
