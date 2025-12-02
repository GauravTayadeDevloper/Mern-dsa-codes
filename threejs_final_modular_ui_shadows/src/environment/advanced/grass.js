import * as THREE from "three";

export function createWindyGrass(scene) {
    const inst = 20000;

    const geometry = new THREE.PlaneGeometry(0.5, 2);
    const material = new THREE.MeshLambertMaterial({
        color: 0x228b22,
        side: THREE.DoubleSide
    });

    const grass = new THREE.InstancedMesh(geometry, material, inst);
    grass.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const dummy = new THREE.Object3D();

    for (let i = 0; i < inst; i++) {
        dummy.position.set(
            (Math.random() - 0.5) * 300,
            0,
            (Math.random() - 0.5) * 300
        );
        dummy.rotation.y = Math.random() * Math.PI;
        dummy.updateMatrix();
        grass.setMatrixAt(i, dummy.matrix);
    }

    scene.add(grass);

    return function update(time) {
        material.uniforms = {};
        grass.rotation.y = Math.sin(time * 0.1) * 0.05;
    };
}
