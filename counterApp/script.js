//1. Create a new variable called 'total' and assign it the div with the id of 'total'

const total = document.getElementById("total");

//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2,multiplyBy5, divideBy5)

const addBtn = document.querySelector("#add");

const subtractBtn = document.querySelector("#subtract");

const multiplyBy2Btn = document.querySelector("#mult2");

const divideBy2Btn = document.querySelector("#div2");

const multiplyBy5Btn = document.querySelector("#mult5");

const divideBy5Btn = document.querySelector("#div5");

const resetBtn = document.querySelector("#reset");

// Example:
function add() {
  console.log(total.textContent); //update the value of the total variable textContent
  total.textContent = Number(total.textContent) + 1; // use an alert to alert the user
  //grab the value of total, make it a number then add to it
}

function subtract() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) - 1;
}
function mult2() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 2;
}
function div2() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 2;
}
function mult5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 5;
}
function div5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 5;
}

function reset() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 0;
}
//3. Attach Functions to Buttons
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBy2Btn.addEventListener("click", mult2);
divideBy2Btn.addEventListener("click", div2);
multiplyBy5Btn.addEventListener("click", mult5);
divideBy5Btn.addEventListener("click", div5);
resetBtn.addEventListener("click", reset);
