import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function createHumans(scene, mixerArray) {
    const loader = new GLTFLoader();

    loader.load("https://models.babylonjs.com/CesiumMan/CesiumMan.glb", (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.3, 1.3, 1.3);
        model.castShadow = true;

        const mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        mixerArray.push(mixer);

        model.position.set(10, 0, -20);
        scene.add(model);

        // clone more students
        for (let i = 0; i < 7; i++) {
            const clone = model.clone();
            clone.position.set(
                (Math.random() - 0.5) * 120,
                0,
                (Math.random() - 0.5) * 120
            );
            scene.add(clone);
        }
    });
}
