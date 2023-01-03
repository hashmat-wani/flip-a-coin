let heads = 0,
  tails = 0;
// let tails = 0;
const coin = document.querySelector(".coin"),
  flipBtn = document.querySelector("#flip-button"),
  resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});
function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton() {
  flipBtn.disabled = true;
  flipBtn.style.cursor = "no-drop";
  setTimeout(function () {
    flipBtn.disabled = false;
    flipBtn.style.cursor = "pointer";
  }, 3000);
}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
