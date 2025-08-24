export let selectedColour;

const quickColours = document.getElementById("quick_colours");
[...quickColours.children].forEach((child) => {
  child.addEventListener("click", (e) => {
    let value = e.target.value;
    setColour(value);
  });
});

function setColour(value) {
  return (selectedColour = value);
}
