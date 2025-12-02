import * as THREE from "three";
import { addEdges } from "../common/utils.js";

export function groundFloorRight(group) {

    // ---------- LARGE RED MAIN BLOCK (commented originally) ----------
    {
        const geometry = new THREE.BoxGeometry(9.99, 3.99, 25.001);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(8, 2, -1);
        addEdges(cube, 0x000000);

        // Kept exactly as in your original file:
        // group.add(cube);
    }

    // ---------- TEACHER OFFICE 1 ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 3);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, 8);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- TEACHER OFFICE 2 ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 3);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, 4);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- TEACHER OFFICE 3 ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 3);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, 0);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- PRINCIPAL ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 3);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, -4);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- MAIN OFFICE LARGE ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 7);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, -9);
        addEdges(cube, 0x000000);
        group.add(cube);
    }

    // ---------- STORE ROOM ----------
    {
        const geometry = new THREE.BoxGeometry(6, 4, 3);
        const material = new THREE.MeshBasicMaterial({
            color: "red",
            transparent: true,
            opacity: 0.7
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(10, 2, -13);
        addEdges(cube, 0x000000);
        group.add(cube);
    }
}
