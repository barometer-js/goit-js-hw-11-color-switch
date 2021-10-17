const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DELAY = 1000;
let intervalId = null;

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
};

refs.startBtn.addEventListener("click", changeBodyColor);

refs.stopBtn.addEventListener("click", stopChangeBodyColor);

// * Click on the start
// * Add in-line style and change body color
function changeBodyColor() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  intervalId = setInterval(() => {
    console.log("body color is changed");
    refs.body.style.backgroundColor = "#4CAF50";
  }, DELAY);
}

// * Stop change body color
function stopChangeBodyColor() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
  console.log("Stop change body color");
  refs.stopBtn.disabled = true;
}
