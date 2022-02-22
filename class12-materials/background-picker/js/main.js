let bodyEl = document.querySelector('body');
const possibleColors = {
  purple: "rgba(241,63,247,1)",
  green: "rgba(0,253,81,1)",
  blue: "rgba(0,254,255)",
  grey: "darkgrey"
}

Object.keys(possibleColors).forEach((possibleColor) => {
  document.getElementById(possibleColor).onclick = changeBackground;
})

function changeBackground() {
  bodyEl.style.backgroundColor = possibleColors[this.id];
  bodyEl.style.color = "white";
}
