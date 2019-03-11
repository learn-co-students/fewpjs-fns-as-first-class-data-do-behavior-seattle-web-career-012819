/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const intTime = parseInt(time,10)
 if (intTime < 12) {
   return 'Good Morning';
 } else if (intTime > 17) {
   return 'Good Evening';
 } else {
   return 'Good Afternoon';
 }
}

function displayMessage(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerHTML = string
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
