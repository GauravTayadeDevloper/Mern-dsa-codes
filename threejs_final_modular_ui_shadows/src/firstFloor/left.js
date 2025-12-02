import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function firstFloorLeft(group) {

    // ---------- FLOOR SLAB 1 ----------
    {
        const geometry = new THREE.BoxGeometry(18.0, 0.01, 10);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-6, 4, 6);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- FLOOR SLAB 2 ----------
    {
        const geometry = new THREE.BoxGeometry(17.0, 0, 9.99);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-5.5, 8, 6);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- BIG BLOCK (8x3.99x9.99) ----------
    {
        const geometry = new THREE.BoxGeometry(8, 3.99, 9.99);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-5.5, 10, 6);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- FIRST FLOOR WASHROOM ----------
    {
        const geometry = new THREE.BoxGeometry(2, 4, 2);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2, 6, -4);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- FIRST FLOOR LAB ----------
    {
        const geometry = new THREE.BoxGeometry(17, 4, 6);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-5.5, 6, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }
}
