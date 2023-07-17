document.addEventListener("DOMContentLoaded", function() {
let numbers = document.querySelectorAll('.number');

let equalButton = document.querySelector('.equal');
let decimalButton = document.querySelector('.decimal');
let clearButton = document.querySelector('.clear')

let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');

let previousValueElement = document.querySelector('#previousValue');
let currentValueElement = document.querySelector('#currentValue');


let num1;
let operator;
let num2;

let previousValue = '';
let currentValue = '';


let add = function(num1, num2){
    return num1 + num2;
}

let subtract = function(num1, num2){
    return num1 - num2;
}

let multiply = function(num1, num2){
    return num1 * num2;
}

let divide = function(num1, num2){
    return num1 / num2;
}

let operate = function(num1, operator, num2) {
    if(operator === '+'){
        return add(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if(operator === '*'){
        return multiply(num1, num2);
    }else if(operator === '/'){
            return divide(num1, num2);
        }
    };

numbers.forEach(function(number) {
        number.addEventListener('click', function(e) {
          currentValue += e.target.textContent;
          currentValueElement.textContent = currentValue;
        });
    });

clearButton.addEventListener('click', function(e) {
    currentValue = '';
    currentValueElement.textContent = '';
    previousValue = '';
    previousValueElement.textContent = '';
});

addButton.addEventListener('click', function(e){
    previousValue = currentValue;
    previousValueElement.textContent = previousValue;
    currentValue = '';
    currentValueElement.textContent = currentValue;
    operator = '+';
    
})

subtractButton.addEventListener('click', function(e){
    previousValue = currentValue;
    previousValueElement.textContent = previousValue;
    currentValue = '';
    currentValueElement.textContent = currentValue;
    operator = '-';
})

multiplyButton.addEventListener('click', function(e){
    previousValue = currentValue;
    previousValueElement.textContent = previousValue;
    currentValue = '';
    currentValueElement.textContent = currentValue;
    operator = '*';
});

divideButton.addEventListener('click', function(e){
    previousValue = currentValue;
    previousValueElement.textContent = previousValue;
    currentValue = '';
    currentValueElement.textContent = currentValue;
    operator = '/';
});

equalButton.addEventListener('click', function(e){
    num1 = parseFloat(previousValue);
    num2 = parseFloat(currentValue);

    let result = operate(num1, operator, num2);
    currentValue = result.toString();
    currentValueElement.textContent = currentValue;
    previousValueElement.textContent = '';
    });
});
