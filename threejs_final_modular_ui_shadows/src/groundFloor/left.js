import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function groundFloorLeft(group) {

    // ---------- MAIN BLUE BLOCK ----------
    {
        const geometry = new THREE.BoxGeometry(17.99, 3.99, 9.99);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-6, 2, 6);
        addEdges(cube, 0x000000);

        // It was commented in your original, I keep this same behavior:
        // group.add(cube);
    }

    // ---------- WASHROOM RIGHT ----------
    {
        const geometry = new THREE.BoxGeometry(2, 4, 2);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2, 2, 0);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- WASHROOM LEFT ----------
    {
        const geometry = new THREE.BoxGeometry(2, 4, 2);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2, 2, -4);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- HOD OFFICE ----------
    {
        const geometry = new THREE.BoxGeometry(4, 4, 6);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(1, 2, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- CLASS ROOM ----------
    {
        const geometry = new THREE.BoxGeometry(9, 4, 6);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-5.5, 2, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- LIBRARY ----------
    {
        const geometry = new THREE.BoxGeometry(3, 4, 6);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-11.5, 2, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- READING ROOM ----------
    {
        const geometry = new THREE.BoxGeometry(2, 4, 6);
        const material = new THREE.MeshBasicMaterial({
            color: "blue",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-14, 2, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }
}
