import * as THREE from "three";
import Game from "../Game";

export default class Raycaster {
  constructor() {
    this.game = new Game();
    this.scene = this.game.scene;
    this.sizes = this.game.sizes;
    this.camera = this.game.camera.instance;

    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.mouseMoved = false;

    this.currentIntersect = null; // store currently hovered object
    this.originalColor = null; // store original color

    this.setMouseMove();
  }

  setMouseMove() {
    window.addEventListener("mousemove", event => {
      this.mouseMoved = true;
      this.pointer.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.pointer.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }

  update() {
    if (!this.mouseMoved) return;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );

    if (intersects.length) {
      const intersected = intersects[0].object;

      // Check if it's a new object
      if (this.currentIntersect !== intersected) {
        // Restore previous object's color
        if (this.currentIntersect && this.originalColor) {
          this.currentIntersect.material.color.copy(this.originalColor);
        }

        // Save new object and its original color
        if (intersected.material && intersected.material.color) {
          this.currentIntersect = intersected;
          this.originalColor = intersected.material.color.clone();
          intersected.material.color.set(0xff0000);
        }
      }
    } else {
      // Mouse left all objects
      if (this.currentIntersect && this.originalColor) {
        this.currentIntersect.material.color.copy(this.originalColor);
        this.currentIntersect = null;
        this.originalColor = null;
      }
    }
  }
}
