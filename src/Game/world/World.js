import Game from "../Game.js";
import Lights from "./Lights.js";
import Plant from "./Plant.js";
import BackGround from "./Background/BackGround.js";
import plantData from "../plantData.js";
import WateringPot from "./WateringPot.js";

export default class World {
  constructor() {
    this.game = new Game();
    this.scene = this.game.scene;
    this.resource = this.game.resource;
    console.log(plantData);
    this.plants = [];

    console.log(this.plants);
    this.resource.on("ready", () => {
      this.lights = new Lights();
      this.background = new BackGround();
      this.watering = new WateringPot();
      this.plant = new Plant();
    });
  }

  update() {}
}
