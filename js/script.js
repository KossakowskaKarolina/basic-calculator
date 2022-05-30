// Pick all buttons

const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const clearAllButton = document.querySelector('.clearAll');
const equalButton = document.querySelector('.equal');

const display = document.querySelector('.display');


// Define variables

let equation = [];
let firstNumber = [];
let firstNumberShow;
let secondNumber = [];
let secondNumberShow;
let result;


// Clean variables above

function clearAll(){
  equation.length = 0;
  firstNumber.length = 0;
  secondNumber.length = 0;
  secondNumberShow = undefined;
}


// Listen for click on numbers

numberButtons.forEach(number => number.addEventListener('click', function(e){
  let text = e.target.textContent; // shows what was clicked

  if(equation.length === 0){
    firstNumber.push(text);
    firstNumberShow = firstNumber.join('');
    display.innerHTML = firstNumberShow;
  } else {
    secondNumber.push(text);
    secondNumberShow = secondNumber.join('');
    display.innerHTML = secondNumberShow;
  }
}))


// Listen for click on operators

operatorButtons.forEach(operator => operator.addEventListener('click', function(e){
  if(firstNumberShow){
    equation.push(firstNumberShow);
    equation.push(e.target.textContent);
  }
}))


// Listen for click on equal button - make actual operation

equalButton.addEventListener('click', function(e){
  equation.push(secondNumberShow);
  result = equation.join('');
  display.innerHTML = eval(result);
  clearAll();
  firstNumberShow = eval(result);
})


// Listen for click on allClear button - reset calculator

clearAllButton.addEventListener('click', function(e){
  clearAll();
  firstNumberShow = undefined;
  display.innerHTML = '0';
})