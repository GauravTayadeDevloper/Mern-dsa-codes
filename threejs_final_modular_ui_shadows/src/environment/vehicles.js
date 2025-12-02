import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function createVehicles(scene) {
    const loader = new GLTFLoader();

    loader.load("https://threejs.org/examples/models/gltf/Car.glb", (gltf) => {
        const car = gltf.scene;

        car.scale.set(0.5, 0.5, 0.5);
        car.traverse(o => o.castShadow = true);

        for (let i = 0; i < 6; i++) {
            const c = car.clone();
            c.position.set(20 + i * 8, 0, -40);
            scene.add(c);
        }
    });
}
