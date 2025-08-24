export let selectedColour;

const quickColours = document.getElementById("quick_colours");
[...quickColours.children].forEach((child) => {
  child.addEventListener("click", (e) => {
    let value = e.target.value;
    return (selectedColour = value);
  });
});

const colourPicker = document.getElementById("colour_picker");

colourPicker.addEventListener("input", (e) => {
  return (selectedColour = e.target.value);
});
