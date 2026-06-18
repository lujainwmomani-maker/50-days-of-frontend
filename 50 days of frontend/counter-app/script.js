let count = 0;
const countNumber = document.getElementById("count");

const plusTenBtn = document.getElementById("plusTen");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const minusTenBtn = document.getElementById("minusTen");

function updateCounter() {
  countNumber.textContent = count;
}

increaseBtn.addEventListener("click", function () {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", function () {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

plusTenBtn.addEventListener("click", function () {
  count += 10;
  updateCounter();
});

minusTenBtn.addEventListener("click", function () {
  count -= 10;
  updateCounter();
});
