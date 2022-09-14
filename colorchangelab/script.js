const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];
// ===== CHALLENGE =====
const btn = document.querySelector("#generate-color");
const ul = document.querySelector("#color-list");
const colorBody = document.querySelector("body");
const resetBtn = document.querySelector("#start-over");

// 1. Create A Function (generate)

// Function should get a random color from the COLORS_ARRAY
function generate() {
  let randomColor =
    COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  // Create a li element
  const li = document.createElement("li");
  // Add the color name to the li text
  li.textContent = randomColor;
  // Append the li to the ul
  ul.appendChild(li);
  li.style.backgroundColor = randomColor;
}

// Set the background color of the li to the random color
btn.addEventListener("click", generate);
// 2. Create Function (reset)
// Should remove all li children from the ul.
resetBtn.addEventListener("click", function () {
  while (ul.childNodes.length > 0) {
    ul.childNodes[0].remove();
  }
});

// Should set background color to white.
