import Pixel from "./pixelHandler.js";

export default class Canvas {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas);
    this.canDraw = false;
  }

  getCanvas() {
    return this.canvas;
  }

  setCanvas(newCanvas) {
    this.canvas = document.getElementById(newCanvas);
    return this.canvas;
  }

  createPixels(num) {
    // Clear the canvas
    this.getCanvas().innerHTML = "";
    // Create a new canvas
    let totalPixels = num ** 2;

    let canvasHeight = this.getCanvas().clientHeight;
    let canvasWidth = this.getCanvas().clientWidth;

    let pixelHeight = canvasHeight / num;
    let pixelWidth = canvasWidth / num;

    // Dynamically create pixels and append to canvas
    for (let i = 0; i < totalPixels; i++) {
      const pixel = new Pixel(pixelHeight, pixelWidth);
      this.getCanvas().appendChild(pixel.getPixel());
    }
  }

  toggleDrawing() {
    this.canDraw = !this.canDraw;
    console.log(this.canDraw);
    return this.canDraw;
  }

  getCanDraw() {
    return this.canDraw;
  }

  setCanDraw(status) {
    return (this.canDraw = status);
  }
}
