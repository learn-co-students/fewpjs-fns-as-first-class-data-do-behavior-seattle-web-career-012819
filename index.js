/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
 
  const hour = parseInt(timeString);
  console.log("this is hour",hour)

  if (hour < 12){
    return "Good Morning";
  } 
  if (hour > 17){
    return "Good Evening";
  }else{
    return "Good Afternoon";
  }}
  
  function displayMessage(word){
    greeting = document.getElementById('greeting')
    greeting.textContent = word 
  }
  

