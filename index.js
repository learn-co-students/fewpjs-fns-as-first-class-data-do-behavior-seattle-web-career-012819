/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(message) {
  document.getElementById("greeting").textContent = message;
}
/* Write your implementation of greet() */
function greet(timestring) {
  const time = parseInt(timestring, 10);
    if ( time < 12) return "Good Morning"
    if ( time > 17) return "Good Evening"
    return "Good Afternoon"
  }
/* Write your implementation of displayMessage() */
