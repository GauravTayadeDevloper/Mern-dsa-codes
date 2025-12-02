import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";

// IMPORT ALL MODULES
import { createEnvironment } from "./environment/environment.js";
import { createAdvancedEnvironment } from "./environment/advanced/advanced.js";

import { groundFloorLeft } from "./groundFloor/left.js";
import { groundFloorRight } from "./groundFloor/right.js";

import { firstFloorLeft } from "./firstFloor/left.js";
import { firstFloorRight } from "./firstFloor/right.js";

import { windowsFF } from "./windows/windowsFF.js";
import { windowsSF } from "./windows/windowsSF.js";

import { doorsFF } from "./doors/doorsFF.js";

import { stairsSM } from "./stairs/stairSM.js";
import { stairs10 } from "./stairs/stairs10.js";
import { stairs20 } from "./stairs/stairs20.js";
import { stairs110 } from "./stairs/stairs110.js";
import { stairs220 } from "./stairs/stairs220.js";

import { createWalls } from "./common/walls.js";
import { createTubes } from "./common/tubes.js";
import { createLabels } from "./common/textLabels.js";

// MIXERS FOR ANIMATED HUMAN MODELS
const mixers = [];

// ------------------------------------------------------------
//  SCENE SETUP
// ------------------------------------------------------------
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// CAMERA ------------------------------------------------------
export const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);
camera.position.set(20, 25, 60);

// RENDERER ----------------------------------------------------
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

// ORBIT CONTROLS ----------------------------------------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// ------------------------------------------------------------
//  LIGHTING + SHADOWS  (IMPORTANT: Must come BEFORE advanced env)
// ------------------------------------------------------------
const sun = new THREE.DirectionalLight(0xffffff, 1.2);
sun.position.set(50, 80, 50);
sun.castShadow = true;

sun.shadow.mapSize.width = 2048;
sun.shadow.mapSize.height = 2048;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 500;

scene.add(sun);

// Ambient fill light
scene.add(new THREE.AmbientLight(0xffffff, 0.30));

// SHADOW-RECEIVING GROUND -------------------------------------
{
    const geo = new THREE.PlaneGeometry(300, 300);
    const mat = new THREE.MeshStandardMaterial({ color: 0xdddddd });

    const ground = new THREE.Mesh(geo, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;

    scene.add(ground);
}

// ------------------------------------------------------------
//  CREATE ADVANCED ENVIRONMENT (NOW sun exists → no errors!)
// ------------------------------------------------------------
const adv = createAdvancedEnvironment(scene, renderer, camera);

// ------------------------------------------------------------
//   GROUPS – toggle visibility via UI
// ------------------------------------------------------------
export const groups = {
    groundFloor: new THREE.Group(),
    firstFloor: new THREE.Group(),
    windows: new THREE.Group(),
    doors: new THREE.Group(),
    stairs: new THREE.Group(),
    walls: new THREE.Group(),
    tubes: new THREE.Group(),
    labels: new THREE.Group(),
};

Object.values(groups).forEach(g => scene.add(g));

// ------------------------------------------------------------
//  BASIC ENVIRONMENT (grass, trees, roads, cars, humans)
// ------------------------------------------------------------
createEnvironment(scene, renderer, mixers);

// ------------------------------------------------------------
//  LOAD ALL MODULES INTO THEIR GROUPS
// ------------------------------------------------------------

// Ground Floor
groundFloorLeft(groups.groundFloor);
groundFloorRight(groups.groundFloor);

// First Floor
firstFloorLeft(groups.firstFloor);
firstFloorRight(groups.firstFloor);

// Windows
windowsFF(groups.windows);
windowsSF(groups.windows);

// Doors
doorsFF(groups.doors);

// Stairs
stairsSM(groups.stairs);
stairs10(groups.stairs);
stairs20(groups.stairs);
stairs110(groups.stairs);
stairs220(groups.stairs);

// Walls + Tubes + Labels
createWalls(groups.walls);
createTubes(groups.tubes);
createLabels(groups.labels);

// ------------------------------------------------------------
//  GUI (UI PANEL)
// ------------------------------------------------------------
const gui = new GUI();

const toggles = {
    groundFloor: true,
    firstFloor: true,
    windows: true,
    doors: true,
    stairs: true,
    walls: true,
    tubes: true,
    labels: true,
    shadows: true,

    resetCamera: () => {
        camera.position.set(20, 25, 60);
        controls.target.set(0, 0, 0);
        controls.update();
    }
};

// UI CHECKBOXES
gui.add(toggles, "groundFloor").name("Ground Floor").onChange(v => groups.groundFloor.visible = v);
gui.add(toggles, "firstFloor").name("First Floor").onChange(v => groups.firstFloor.visible = v);
gui.add(toggles, "windows").name("Windows").onChange(v => groups.windows.visible = v);
gui.add(toggles, "doors").name("Doors").onChange(v => groups.doors.visible = v);
gui.add(toggles, "stairs").name("Stairs").onChange(v => groups.stairs.visible = v);
gui.add(toggles, "walls").name("Walls").onChange(v => groups.walls.visible = v);
gui.add(toggles, "tubes").name("Tubes").onChange(v => groups.tubes.visible = v);
gui.add(toggles, "labels").name("Labels").onChange(v => groups.labels.visible = v);
gui.add(toggles, "shadows").name("Shadows").onChange(v => renderer.shadowMap.enabled = v);
gui.add(toggles, "resetCamera").name("Reset Camera");

// ------------------------------------------------------------
//  HANDLE RESIZE
// ------------------------------------------------------------
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ------------------------------------------------------------
//  RENDER LOOP
// ------------------------------------------------------------
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.elapsedTime;

    // Advanced environment updates (Day-Night, Clouds, Birds, Fountain)
    adv.updates.forEach(u => u(delta, time));

    // Human animation mixers
    mixers.forEach(m => m.update(delta));

    // Post-processing effects
    adv.composer.render();

    // Orbit controls smoothing
    controls.update();
}

animate();
