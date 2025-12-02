import * as THREE from "three";

export function createClouds(scene) {
    const texture = new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cloud10.png"
    );

    const clouds = [];

    for (let i = 0; i < 20; i++) {
        const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({ map: texture, transparent: true })
        );

        sprite.position.set(
            (Math.random() - 0.5) * 500,
            100 + Math.random() * 30,
            (Math.random() - 0.5) * 500
        );

        sprite.scale.set(150, 75, 1);

        scene.add(sprite);
        clouds.push(sprite);
    }

    return function update(delta) {
        clouds.forEach(c => {
            c.position.x += delta * 2;
            if (c.position.x > 300) c.position.x = -300;
        });
    };
}
