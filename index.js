/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let split = time.split(":")
  let parsed = parseInt(split)
  if (parsed <= 12) {
    return "Good Morning"
  } else if (parsed >=12 && parsed <= 18){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").textContent = message;
}