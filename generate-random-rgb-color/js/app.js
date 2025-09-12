// Random RGB Generator Function
function rgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function newGenerateColor() {
  const rgbCode = rgbColor();

  const colorBox = document.getElementById("color-box");
  colorBox.style.backgroundColor = rgbCode;

  const colorCode = document.getElementById("color-code");
  colorCode.innerText = rgbCode;
}

newGenerateColor();

// Copy Button Functionality
document.getElementById("copy-btn").addEventListener("click", function () {
  const rgbColorCode = document.getElementById("color-code");
  const createElementInput = document.createElement("input");
  document.body.appendChild(createElementInput);
  createElementInput.value = rgbColorCode.innerText;

  createElementInput.select();
  document.execCommand("copy");
  document.body.removeChild(createElementInput);
  alert("Color Copied Successfully");
});
