import Game from "../Game.js";
import Lights from "./Lights.js";
import BluePot from "./BluePot.js";
import Plant from "./Plant.js";
import plantData from "../plantData.js";
import Button from "../mechincs/BuyPlant.js";

export default class World {
  constructor() {
    this.game = new Game();
    this.resource = this.game.resource;
    this.scene = this.game.scene;
    console.log(plantData);
    this.plants = [];
    this.buyButton = new Button("button-buy");

    console.log(this.plants);
    this.resource.on("ready", () => {
      this.lights = new Lights();
      this.BluePot = new BluePot(this.game);
      this.buyButton.onClick(() => {
        this.buyPlant(plantData[0]);
      });
    });
  }
  buyPlant(plant) {
    const newPlant = new Plant(plant);
    this.plants.push(newPlant);
  }

  update() {}
}
