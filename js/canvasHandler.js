const canvas = document.getElementById("canvas");
// Add event listeners to canvas element
canvas.addEventListener("click", setDrawingFunction);
canvas.addEventListener("mouseleave", resetIsDrawing);

// Get pixel input value from user
const pixelInput = document.getElementById("pixel_input");
const enterButton = document.getElementById("enter_button");
enterButton.addEventListener("click", () => {
  let numOfPixels = pixelInput.value;
  if (numOfPixels) {
    clearPixels();
    createPixels(numOfPixels);
  } else if (!numOfPixels) {
    alert("Please enter the dimentions of your canvas.");
  }
});

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

function clearPixels() {
  canvas.innerHTML = "";
}
