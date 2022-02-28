// *Variables*
// Create a variable and console log the value
let blah = "blah";
console.log(blah);

// Create a variable, add 10 to it, and alert the value
let num = 8;
num += 10;
alert('num');

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(params) {
  alert(params[0] - params[1] - params[2] - params[3]);
}

// Create a function that divides one number by another and returns the remainder
function getRemainder(params) {
  return params[0] % params[1];
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNums(num1, num2) {
  if (num1 + num2 > 50) {
    alert("Jumanji");
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyNums(num1, num2, num3) {
  if (num1 * num2 * num3 % 3 === 0) {
    alert("ZEBRA");
  }
}
