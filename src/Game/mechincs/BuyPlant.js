export default class Button {
  constructor(buttonClassName) {
    this.element = document.querySelector(`.${buttonClassName}`);
    if (!this.element) {
      throw new Error(
        `Button element with class '${buttonClassName}' not found`
      );
    }
  }

  onClick(callback) {
    this.element.addEventListener("click", callback);
  }

  setText(text) {
    this.element.textContent = text;
  }

  disable() {
    this.element.disabled = true;
  }

  enable() {
    this.element.disabled = false;
  }
}
