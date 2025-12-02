import * as THREE from "three";

export function createBirds(scene) {
    const birds = [];

    for (let i = 0; i < 10; i++) {
        const bird = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 2),
            new THREE.MeshBasicMaterial({ color: 0x333333 })
        );
        bird.rotation.z = Math.PI / 2;

        bird.position.set(
            -100 + Math.random() * 200,
            40 + Math.random() * 30,
            -100 + Math.random() * 200
        );

        scene.add(bird);
        birds.push(bird);
    }

    return function update(delta) {
        birds.forEach(b => {
            b.position.x += delta * 20;
            if (b.position.x > 150) b.position.x = -150;
        });
    };
}
