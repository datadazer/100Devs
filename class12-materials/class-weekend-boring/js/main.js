document.querySelector('#check').addEventListener('click', check)

function check() {
  let message = "Not a valid day of the week!";
  const day = document.querySelector('#day').value.toLowerCase();
  const dayAnswers = {
    monday: 'boring',
    tuesday: 'class',
    wednesday: 'boring',
    thursday: 'class',
    friday: 'boring',
    saturday: 'weekend',
    sunday: 'weekend'
  }

  //Conditionals go here
  if (dayAnswers.hasOwnProperty(day)) {
    message = dayAnswers[day];
  }
  
  document.querySelector('#placeToSee').innerText = message;
}
