import * as THREE from "three";
import Game from "../Game.js";
import Flowers from "./Flower.js";
import Lights from "./Lights.js";
import BluePot from "./BluePot.js";

export default class World {
  constructor() {
    this.game = new Game();
    this.resource = this.game.resource;
    this.scene = this.game.scene;

    this.resource.on("ready", () => {
      this.lights = new Lights();
      this.FlowerPurple = new Flowers();
      this.BluePot = new BluePot(this.game);
    });
  }

  update() {}
}
