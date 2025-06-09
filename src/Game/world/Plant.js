import Game from "../Game.js";

export default class Plant {
  constructor(plantdata) {
    this.game = new Game();
    this.plantData = plantdata;
    this.scene = this.game.scene;
    this.resources = this.game.resource;
    this.resource = this.resources.items[this.plantData.modelName];

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.position.y = 1.05;
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);
  }

  update() {
    this.growth += this.plantData.growthSpeed;
    const scale = 1 + this.growth;
    this.model.scale.set(scale, scale, scale);
  }

  water() {
    this.growth += 0.1;
  }

  remove() {
    this.scene.remove(this.model);
  }
}
