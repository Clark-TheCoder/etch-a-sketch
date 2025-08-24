import Canvas from "./canvasHandler.js";
import { selectedColour } from "./colourHandler.js";

let canvas = new Canvas("canvas");

// Add eventlistener to toggle the var which dictates if the users can draw or not
canvas.canvas.addEventListener("click", () => canvas.toggleDrawing());
canvas.canvas.addEventListener("mouseleave", () => canvas.setCanDraw(false));

function populateCanvas() {
  const pixelInput = document.getElementById("pixel_input");
  const enterButton = document.getElementById("enter_button");
  enterButton.addEventListener("click", () => {
    if (!pixelInput.value || pixelInput.value > 100 || pixelInput.value < 0) {
      alert("Please enter the dimensions of your canvas between 1-100.");
    } else {
      canvas.createPixels(pixelInput.value);
    }
  });
}
populateCanvas();

// Add eventlistener to each pixel
canvas.getCanvas().addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) {
    if (canvas.getCanDraw()) {
      draw(e.target, selectedColour);
    }
  }
});

function draw(pixel, colour) {
  console.log(colour);
  if (!selectedColour) {
    console.log("no selected color.");
  } else {
    pixel.style.backgroundColor = colour;
  }
}
