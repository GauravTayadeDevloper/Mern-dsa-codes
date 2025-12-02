import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

export function createLabels(group) {

    const loader = new FontLoader();

    loader.load("fonts/helvetiker_regular.typeface.json", (font) => {

        function label(text, x, y, z, rotY = 0) {
            const geo = new TextGeometry(text, {
                font,
                size: -0.1,
                depth: -0.3,
                height: -0.1
            });

            const mat = new THREE.MeshPhongMaterial({ color: "black" });
            const mesh = new THREE.Mesh(geo, mat);

            mesh.position.set(x, y, z);
            mesh.rotation.y = rotY;

            group.add(mesh);
        }

        // ALL REAL LABELS FROM YOUR FILE
        label("Placement Cell", 7, 6, -9.5, Math.PI / 2);
        label("Computer Lab", -14, 2, 5, Math.PI / 2);
        label("OFFICE", 6, 6, -12, Math.PI / 2);

        label("Teacher Room", 10, 2, 8);
        label("Teacher Room", 10, 2, 4);
        label("Teacher Room", 10, 2, 0);

        label("Principal", 10, 2, -4);
        label("Office", 10, 2, -9);

        label("Store Room", 10, 2, -13);

        label("Class Room", -5.5, 2, 8);
        label("Library", -11.5, 2, 8);
        label("Reading Room", -14, 2, 8);

        label("Washroom", 2, 2, 0);
        label("Washroom", 2, 2, -4);

        label("Class Room", -5.5, 10, 6);

        label("First Floor Lab", -5.5, 6, 8);

        label("Washroom", 2, 6, -4);
    });
}
