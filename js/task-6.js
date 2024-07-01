function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const conrols = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const createButton = controls.querySelector("button[data-create]");
const oxes = document.getElementById("boxes");

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }
  boxes.append(...elements);
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = "";
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
});
