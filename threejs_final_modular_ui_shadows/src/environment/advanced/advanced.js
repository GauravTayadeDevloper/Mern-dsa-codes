import { createDayNightCycle } from "./daynight.js";
import { createClouds } from "./clouds.js";
import { createBirds } from "./birds.js";
// import { createWindyGrass } from "./grass.js";
import { createFountain } from "./fountain.js";
import { createAmbientSound } from "./sound.js";
import { createEffects } from "./effects.js";

export function createAdvancedEnvironment(scene, renderer, camera) {
    const sunLight = scene.children.find(obj => obj.type === "DirectionalLight");

    const updates = [];

    updates.push(createDayNightCycle(scene, sunLight));
    updates.push(createClouds(scene));
    updates.push(createBirds(scene));
    // updates.push(createWindyGrass(scene));
    updates.push(createFountain(scene));
    createAmbientSound(camera);

    const composer = createEffects(renderer, scene, camera);

    return { updates, composer };
}
