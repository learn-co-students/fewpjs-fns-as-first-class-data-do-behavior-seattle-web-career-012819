/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let h = parseInt((time.split(':')[0]))
  if (h<12) {
    return 'Good Morning'
  }
  else if ((h>12) && (h<17)) {
    return "Good Afternoon"
  }
  else {return "Good Evening"}
}
/* Write your implementation of greet() */
function displayMessage(greet) {
  document.getElementById("greeting").textContent = greet;
}
/* Write your implementation of displayMessage() */
