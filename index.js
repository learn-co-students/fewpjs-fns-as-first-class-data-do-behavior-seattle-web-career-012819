/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  let str = string.split(":")
  str = parseInt(str[0])
  if(str < 12) {
    return "Good Morning"
  } else if (str < 17){
    return "Good Afternoon"
  } else if (str > 17){
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").textContent = string;
}
