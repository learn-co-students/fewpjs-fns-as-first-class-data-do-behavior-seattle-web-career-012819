/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  let [hours, minutes] = time.split(":");
  hours = Number.parseInt(hours);
  if (hours < 12) return "Good Morning";
  else if (hours > 17) return "Good Evening";
  else return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  const node = document.getElementById("greeting");
  node.textContent = message;
}
