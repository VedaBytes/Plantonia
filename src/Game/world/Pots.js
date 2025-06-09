export default class Pots {
  constructor(potModelName, game) {
    this.game = game;
    this.potModelName = potModelName;
    this.scene = this.game.scene;
    this.resources = this.game.resource.items[potModelName];

    this.setModel();
  }

  setModel() {
    this.model = this.resources.scene;
    this.scene.add(this.model);
  }
}
