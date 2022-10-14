const GRID = document.querySelector("[data-grid]");
const slider = document.querySelector("[data-slider]");
const screenValue = document.querySelector("[data-slider-value]");
const reset = document.querySelector("[data-reset]");

// put slider value
slider.addEventListener("input", () => {
  // slider initialization value
  let val = slider.value;
  screenValue.textContent = val;
});

// create default grid value
function createDefaultGrid() {
  // 16 x 16 = 256 grid value
  for (let i = 0; i < 256; i++) {
    // create div element
    const div = document.createElement("div");
    // adding class to div
    div.classList.add("border");
    div.classList.add("border-black");
    div.classList.add("bg-white");
    // add black bg moouseover
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    // add child to GRID
    GRID.appendChild(div);
  }
}

// create reset color button
reset.addEventListener("click", () => {
  // the cell
  let cell = GRID.children;
  for (let i = 0; i <= GRID.children.length; i++)
    [(cell[i].style.backgroundColor = "white")];
});

createDefaultGrid();
