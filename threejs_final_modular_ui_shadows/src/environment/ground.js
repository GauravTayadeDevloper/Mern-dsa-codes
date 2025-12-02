import * as THREE from "three";

export function createGround(scene) {
    const texture = new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
    );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(80, 80);

    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(1000, 1000),
        new THREE.MeshStandardMaterial({ map: texture })
    );

    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.position.y = -1;

    scene.add(ground);
}
