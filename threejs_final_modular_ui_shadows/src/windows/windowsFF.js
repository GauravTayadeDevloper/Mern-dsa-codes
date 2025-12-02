import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function windowsFF(group) {

    function w(wi, hi, di, x, y, z) {
        const geo = new THREE.BoxGeometry(wi, hi, di);
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

    // EXACT from your original windowsff()
    w(0.08, 4, 10, -15, 2, 6);
    w(0.08, 4, 10, -14, 6, 6);
    w(0.08, 8, 0.4,  3,  4, 11.25);
    w(18,   4, 0.08, -6, 2, 1);
    w(17,   4, 0.08, -5.5, 6, 1);
}
