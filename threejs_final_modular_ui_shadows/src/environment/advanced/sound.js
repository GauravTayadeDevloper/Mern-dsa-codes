import * as THREE from "three";

export function createAmbientSound(camera) {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load(
        "https://cdn.pixabay.com/audio/2021/08/04/audio_450b37bb76.mp3",
        (buffer) => {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.4);
            sound.play();
        }
    );
}
