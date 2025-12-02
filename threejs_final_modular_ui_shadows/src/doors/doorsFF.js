import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function doorsFF(group) {

    function d(w, h, d, x, y, z) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mat = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        addEdges(mesh, 0x000000);
        group.add(mesh);
    }

    // REAL coordinates from your original file
    d(2, 4, 0.1, -9, 2, 10);
    d(2, 4, 0.1, -3, 2, 10);
    d(2, 4, 0.1,  1, 2, 10);
    d(2, 4, 0.1,  3, 2, 10);
    d(2, 4, 0.1, -11, 2, 10);
    d(2, 4, 0.1, -14, 2, 10);
}
