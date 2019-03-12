/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = time.split(":")[0];
  if (hour < 12) {
      return "Good Morning";
  } else if (hour < 17) {
      return "Good Afternoon";
  } else { 
      return "Good Evening";
  }
}

function displayMessage(arg) {
  document.getElementById("greeting").textContent = arg
}
// The greet() function
// The greet function should take one argument, 
// a String which specifies the 24-hour time in the format HH:MM.

// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
// The displayMessage() function
// The displayMessage function should take one argument, a String.

// When the function runs it should update the text inside the 
// #greeting node with the content of the first argument.

// It does not return anything.

// NOTE: The value returned from the <input> will be of type String. 
// You’ll need to take the String of the 24 hour time and covert it to a number. 
// The split() function and the parseInt() functions should help.