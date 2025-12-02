import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function windowsSF(group) {

    function w(wi, hi, di, x, y, z) {
        const geo = new THREE.BoxGeometry(wi, hi, di);
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

    // EXACT from your original windowssf() function:
    w(0.5, 4, 10, -10, 10, 6);
    w(0.5, 4, 10, -11, 10, 6);
}
