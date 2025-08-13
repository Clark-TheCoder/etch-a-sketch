const canvas = document.getElementById("canvas");
canvas.addEventListener("click", setDrawingFunction);
canvas.addEventListener("mouseleave", resetIsDrawing);

function createPixels(input) {
  let totalPixels = input ** 2;

  // Seperated the height and width values of the dimentions of both the canvas
  // and the pixels incase the grid is not perfectly square in future
  let canvasHeight = canvas.clientHeight;
  let canvasWidth = canvas.clientWidth;

  let pixelHeight = canvasHeight / input;
  let pixelWidth = canvasWidth / input;

  // Dynamically create pixels and append to canvas
  for (let i = 0; i < totalPixels; i++) {
    let pixel = document.createElement("div");
    pixel.style.height = pixelHeight + "px";
    pixel.style.width = pixelWidth + "px";
    pixel.classList.add("pixel"); // general styling
    pixel.addEventListener("mouseover", draw);
    canvas.appendChild(pixel);
  }
}

createPixels(10); //test
