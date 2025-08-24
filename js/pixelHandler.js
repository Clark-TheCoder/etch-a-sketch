export default class Pixel {
  constructor(height, width) {
    this.pixel = document.createElement("div");
    this.pixel.style.height = height + "px";
    this.pixel.style.width = width + "px";
    this.pixel.classList.add("pixel");
  }

  getPixel() {
    return this.pixel;
  }
}
