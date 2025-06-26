import Game from "../Game.js";

export default class WateringPot {
  constructor() {
    this.game = new Game();
    this.scene = this.game.scene;
    this.resources = this.game.resource;
    this.resource = this.resources.items.waterPot;

    this.setModel();
  }

  setModel() {
    this.items = this.resource.scene;
    this.items.scale.set(0.2, 0.2, 0.2);
    this.items.rotation.y = 2;
    this.scene.add(this.items);
  }
}
