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
    console.log("draw");
    e.target.style.background = "pink";
  }
}
