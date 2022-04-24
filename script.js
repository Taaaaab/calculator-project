const container = document.querySelector('#container');
const display = document.querySelector('#display');
let displayNum = 0;

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    let displayNum = 9;
    const display9 = document.createElement('div');
    display9.textContent = `${displayNum}`;
    display.appendChild(display9);
  });

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator (+, -, *, /)
// and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    if (operator === "+" || operator === "add") {
        return add(num1, num2);
    }
    else if (operator === "-" || operator === "subtract") {
        return subtract(num1, num2);
    }
    else if (operator === "*" || operator === "multiply") {
        return multiply(num1, num2);
    }
    else if (operator === "/" || operator === "divide") {
        return divide(num1, num2);
    }
    
}

console.log(operate("+",5,10));
console.log(operate("/",21,7));
console.log(operate("multiply",5,10));