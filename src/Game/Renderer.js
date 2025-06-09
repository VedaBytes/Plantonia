import * as THREE from "three/webgpu";
import Game from "./Game.js";

export default class Renderer {
  constructor() {
    this.game = new Game();
    this.canvas = this.game.canvas;
    this.scene = this.game.scene;
    this.camera = this.game.camera.instance;
    this.sizes = this.game.sizes;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGPURenderer({
      canvas: this.canvas,
      antialise: true,
    });
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#211d20");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.instance.renderAsync(this.scene, this.camera);
  }
}
