let total = 0;

document.querySelector('#pumpkin').addEventListener('click', () => { performMath(0)});
document.querySelector('#dominosPizza').addEventListener('click', () => { performMath(3)});
document.querySelector('#zebra').addEventListener('click', () => { performMath(9)});
document.querySelector('#cantThinkOfAnything').addEventListener('click', () => { performMath(-2)});

function performMath(operator) {
  if (operator === 0) {
    total = 0;
  }

  total += operator;
  document.querySelector('#placeToPutResult').innerText = total;
}

// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }
