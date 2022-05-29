// Pick all buttons

const keys = document.querySelectorAll('.keys');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const clearAllButton = document.querySelector('.clearAll');
const equalButton = document.querySelector('.equal');

const display = document.querySelector('.display');


// Listen for click

keys.forEach(key => key.addEventListener('click', function(e){
  let text = e.target.textContent;
  text === 'AC' ? display.innerHTML = '' : display.innerHTML = text;
  console.log(e.target.textContent);
}))