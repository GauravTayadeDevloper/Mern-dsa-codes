import { createSky } from "./sky.js";
import { createGround } from "./ground.js";
import { createTrees } from "./trees.js";
import { createHumans } from "./humans.js";
import { createVehicles } from "./vehicles.js";
import { createRoads } from "./roads.js";

export function createEnvironment(scene, renderer, mixers) {
    createSky(scene, renderer);
    createGround(scene);
    createTrees(scene);
    createRoads(scene);
    createVehicles(scene);
    createHumans(scene, mixers);  // animated characters
}
