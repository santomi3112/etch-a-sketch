const grid = document.querySelector("[data-grid]");
const slider = document.querySelector("[data-slider]");
const screenValue = document.querySelector("[data-slider-value]");

// put slider value
slider.addEventListener("input", () => {
  // slider initialization value
  let val = document.querySelector("[data-slider]").value;
  screenValue.textContent = val;
});
