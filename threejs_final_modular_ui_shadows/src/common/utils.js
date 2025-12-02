import * as THREE from "three";
export function addEdges(mesh, color = 0x000000) {
    const edges = new THREE.EdgesGeometry(mesh.geometry);
    const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: color })
    );
    mesh.add(line);
}