//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let agesUnder = {
  16: "you can not drive",
  18: "you can't hate from outside the club, because you can't even get in.",
  21: "you cannot drink",
  25: "you cannot rent cars affordably",
  30: "you can not rent fancy cars affordably"
}

function printAgeMessage(age) {
  let result;
  if (age < 16) {
    result = agesUnder[16];
  } else if (age < 18) {
    result = agesUnder[18];
  } else if (age < 21) {
    result = agesUnder[21];
  } else if (age < 25) {
    result = agesUnder[25];
  } else if (age < 30) {
    result = agesUnder[30];
  } else {
    result = "there is nothing left to look forward to";
  }
  return result;
}

let ageInputVal;
//--- Harder
const h1Element = document.querySelector('h1');
//On click of the h1
h1Element.addEventListener('click', () => {
  //Take the value from the input
  ageInputVal = Number(document.getElementById('danceDanceRevolution').value);
  //Place the result of the conditional in the paragraph
  document.querySelector('p').innerHTML = printAgeMessage(ageInputVal);
});