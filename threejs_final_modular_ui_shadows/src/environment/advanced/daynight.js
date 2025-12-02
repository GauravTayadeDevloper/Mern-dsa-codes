import * as THREE from "three";

export function createDayNightCycle(scene, sunLight) {
    let time = 0; // 0 → morning, 6 → noon, 12 → evening, 18 → night

    return function update(delta) {
        time += delta * 0.02; // speed of day cycle

        const angle = (time % 24) / 24 * Math.PI * 2;

        const radius = 200;

        sunLight.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0
        );

        // brighten sky during day
        const isDay = sunLight.position.y > 0;

        scene.background = new THREE.Color(isDay ? 0x87ceeb : 0x000011);
        scene.environment = scene.background;

        sunLight.intensity = isDay ? 1.1 : 0.2;
    };
}
