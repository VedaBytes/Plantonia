import * as THREE from "three";
import Sizes from "./utils/Sizes.js";
import Renderer from "./Renderer.js";
import Camera from "./Camera.js";
import Time from "./utils/Time.js";
import World from "./world/World.js";
import Resources from "./utils/Resources.js";

let instance = null;

export default class Game {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.scene = new THREE.Scene();
    this.resource = new Resources();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.time = new Time();
    this.world = new World();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
