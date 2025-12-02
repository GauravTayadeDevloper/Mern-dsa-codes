import * as THREE from "three";
import { addEdges } from "./utils.js";
export function createWalls(group) {
    const geometry = new THREE.BoxGeometry(30, 1, 30);
    const material = new THREE.MeshBasicMaterial({ color: "green" });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -0.5, -3);
    addEdges(mesh, 0x000000);
    group.add(mesh);
}