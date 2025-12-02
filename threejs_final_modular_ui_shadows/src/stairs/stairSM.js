import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function stairsSM(group) {

    function step(w, h, d, x, y, z) {
        const g = new THREE.BoxGeometry(w, h, d);
        const m = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.position.set(x, y, z);
        addEdges(mesh, 0x000000);
        group.add(mesh);
    }

    // EXACT ORIGINAL SMALL STAIRS
    step(3, 1,   0.5, 5, -0.5, 12.25);
    step(3, 0.7, 0.5, 5, -0.65, 12.75);
    step(3, 0.5, 0.5, 5, -0.75, 13.25);
}
