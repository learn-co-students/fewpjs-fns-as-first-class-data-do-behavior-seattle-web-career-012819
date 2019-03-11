function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let hour = parseInt((time.split(':')[0]), 10)
  if (hour < 12) {return "Good Morning"} else if ((hour > 12) && (hour < 17)) {return "Good Afternoon"} else {return "Good Evening"}
}

function displayMessage(greet) {
  let greetingField = document.getElementById("greeting")
  greetingField.textContent = greet;
}
