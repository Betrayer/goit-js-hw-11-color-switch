"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const min = 0;
const max = colors.length -1;
const startButt = document.querySelector('button[data-action="start"]');
const stopButt = document.querySelector('button[data-action="stop"]');
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(color) {
  document.body.style.background = color;
}

startButt.addEventListener("click", () => {
  timerId = setInterval(() => {
    changeBackground(colors[randomIntegerFromInterval(min, max)]);
  }, 1000);
  startButt.disabled = true;
});

stopButt.addEventListener("click", () => {
  clearInterval(timerId);
  startButt.disabled = false;
});
