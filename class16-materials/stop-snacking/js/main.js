//Create a function that grabs the number of snacks from the input and tells you to stop that many times
const myBtn = document.getElementById('help');
let stops = document.getElementById('stops');
myBtn.addEventListener('click', snackNum);
function snackNum() {
  let inputVal = Number(document.querySelector('input').value);
  stops.innerText = '';
  for(let i = 0; i < inputVal; i++) {
    stops.innerText += " STOP";
    console.log("stop");
  }
}
