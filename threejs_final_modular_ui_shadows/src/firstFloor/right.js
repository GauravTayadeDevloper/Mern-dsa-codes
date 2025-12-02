import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function firstFloorRight(group) {

    function slab(w, h, d, x, y, z) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mat = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        addEdges(mesh, 0x000000);
        group.add(mesh);
    }

    // ---------- FLOOR SLABS ----------
    slab(4.0, 0.1, 25.01, 5, 4, -1);
    slab(4.0, 0.1, 18,    5, 12, -4.5);
    slab(9.99, 0.1, 25.0, 8, 8,  -1);
    slab(6,    4,   18,  10, 10, -4.5);
    slab(6,    2.99, 2.99, 10, 9.5, 10);

    // ---------- ROOMS ----------
    function room(w, h, d, x, y, z) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mat = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        addEdges(mesh, 0x000000);
        group.add(mesh);
    }

    // EXACT PLACEMENT FROM YOUR ORIGINAL FILE
    room(5.99, 3.99, 2.99, 10, 10, -9);
    room(5.99, 3.99, 2.99, 10, 10, -13);
}
