const colorsLibrary = {
  purple: "rgba(241,63,247,1)",
  green: "rgba(0,253,81,1)",
  ble: "rgba(0,254,255)",
  grey: "darkgrey"
}

Object.keys(colorsLibrary).forEach((colorId) => {
  if (!document.getElementById(colorId)) {
    console.error(`Element with id: ${colorId} does not exist.`);
    return;
  }
    document.getElementById(colorId).onclick = changeBackground;
})

function changeBackground() {
  let bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = colorsLibrary[this.id];
  bodyEl.style.color = "white";
}

// document.getElementById('purple').onclick = partyPurple;
// document.getElementById('green').onclick = partyGreen;
// document.getElementById('blue').onclick = partyBlue;
// document.getElementById('grey').onclick = partyGrey;


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
//   document.querySelector('body').style.color = 'white';
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
//   document.querySelector('body').style.color = 'white';
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
//   document.querySelector('body').style.color = 'white';
// }

// function partyGrey() {
//   document.querySelector('body').style.backgroundColor = 'darkgrey';
//   document.querySelector('body').style.color = 'white';
// }
