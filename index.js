/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(arg) {
  document.getElementById("greeting").textContent = arg;
}

function greet(somethingProbably) {
  const num = parseInt(somethingProbably, 10);
  if ( num < 12){ 
    return "Good Morning"
  }
  if ( num > 17){ 
    return "Good Evening"
  }
  else return "Good Afternoon"
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
