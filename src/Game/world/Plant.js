import Game from "../Game.js";

export default class Plant {
  constructor() {
    this.game = new Game();
    this.scene = this.game.scene;
    this.resources = this.game.resource;
    this.resource = this.resources.items.plantModel;

    this.setModel();
  }

  setModel() {
    this.items = this.resource.scene;
    this.items.scale.set(0.5, 0.5, 0.5);
    this.scene.add(this.items);
  }
}
