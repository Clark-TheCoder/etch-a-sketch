let isDrawing = false;

function setDrawingFunction() {
  isDrawing = !isDrawing;
  console.log(isDrawing);
  return isDrawing;
}

function resetIsDrawing() {
  console.log(isDrawing);
  return (isDrawing = false);
}

function draw(e) {
  if (isDrawing === true) {
    e.target.style.background = selectedColour;
  }
}
