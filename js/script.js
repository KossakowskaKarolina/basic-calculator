// Pick all buttons

const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const clearAllButton = document.querySelector('.clearAll');
const equalButton = document.querySelector('.equal');

const display = document.querySelector('.display');


// Define variables

let firstNumber ='';
let secondNumber = '';
let opsButton = '';

// Clean variables above

function cleanAll(){
  firstNumber ='';
  secondNumber = '';
  opsButton = '';
}

// Do the actual math operation

function mathIt(num1, ops, num2){
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  if (ops === '+'){
    return num1 + num2;
  } else if (ops === '-'){
    return num1 - num2;
  } else if (ops === '*'){
    return num1 * num2;
  } else if (ops === '/'){
    return num1 / num2;
  }
}


// Listen for click on numbers

numberButtons.forEach(number => number.addEventListener('click', function(e){
  let text = e.target.textContent; // shows what was clicked

  if(opsButton === ''){
    firstNumber += text;
    display.innerHTML = firstNumber;
  } else {
    secondNumber += text;
    display.innerHTML = secondNumber;
  }
}))


// Listen for click on operators

operatorButtons.forEach(operator => operator.addEventListener('click', function(e){
  opsButton = e.target.textContent;
}))


// Listen for click on equal button

equalButton.addEventListener('click', function(e){

  // If something was not clicked - reset calculator and prevent Nan
  if(firstNumber === '' || opsButton === '' || secondNumber === '') {
    cleanAll();
    display.innerHTML = 'Oops, try again!';
  } else {
      let result = mathIt(firstNumber, opsButton, secondNumber);
      display.innerHTML = result;
      secondNumber = '';
      firstNumber = result;
  }
})


// Listen for click on allClear button - reset calculator

clearAllButton.addEventListener('click', function(e){
  cleanAll();
  display.innerHTML = '0';
})