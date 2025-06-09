import Game from "../Game.js";

export default class Flowers {
  constructor() {
    this.game = new Game();
    this.scene = this.game.scene;
    this.resources = this.game.resource;
    this.resource = this.resources.items.purplePlant;
    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.position.y = 1.05;
    this.scene.add(this.model);
  }
}
