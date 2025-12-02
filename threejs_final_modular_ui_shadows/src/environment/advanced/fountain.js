import { Water } from "three/addons/objects/Water.js";
import * as THREE from "three";

export function createFountain(scene) {
    const waterGeometry = new THREE.CircleGeometry(15, 64);

    const water = new Water(waterGeometry, {
        color: 0x5599ff,
        scale: 1,
        flowDirection: new THREE.Vector2(1, 1),
        textureWidth: 1024,
        textureHeight: 1024
    });

    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -0.5, 50);

    scene.add(water);

    return function update(delta) {
        water.material.uniforms['time'].value += delta;
    };
}
