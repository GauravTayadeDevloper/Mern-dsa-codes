import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

export function createSky(scene, renderer) {
    const loader = new RGBELoader();

    loader.load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/sky_clear_02_2k.hdr",
        (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.background = texture;
        }
    );
}
