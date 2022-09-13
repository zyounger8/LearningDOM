const reset = () => {
  console.log("Clicked!!!"); //can console log for testing to see if the button is being called
};

const randNum = () => {
console.log(Math.floor(Math.random() *255))

// DOM Property Event Listener
const btn = document.getElementById('reset-btn2')
btn.onclick = reset // set it to the reset function

//DOM Method
const btn3 = document.querySelector('#reset-btn3')
// need to call the method
btn3.addEventListener('click', reset) // pass the name of the event we are listening to and the name of the callback function - benefit we can add multiple functions - I want to listen for __ and call for ___ - 
btn3.addEventListener('click', randNum) //does not override it just adds another event listener to it
btn3.addEventListener('click', function() {
    console.log('third function') // an anonymous function 
})
// we are not executing right away, we are going to listen for the user to click on it and then it will run