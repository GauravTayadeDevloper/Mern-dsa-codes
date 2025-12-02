import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function createTrees(scene) {
    const loader = new GLTFLoader();

    loader.load("https://assets.babylonjs.com/meshes/Tree.glb", (gltf) => {
        const tree = gltf.scene;

        tree.scale.set(4, 4, 4);
        tree.traverse((obj) => obj.castShadow = true);

        // scatter trees around campus
        for (let i = 0; i < 40; i++) {
            const t = tree.clone();
            const angle = Math.random() * Math.PI * 2;
            const radius = 100 + Math.random() * 150;

            t.position.x = Math.cos(angle) * radius;
            t.position.z = Math.sin(angle) * radius;
            t.position.y = -1;

            scene.add(t);
        }
    });
}
