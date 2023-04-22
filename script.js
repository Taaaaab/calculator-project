// Calculator Project

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let userInputNum = [];

let storedInputNum = [];

let operator = null;

function operate(operator, userInputNum, storedInputNum) {
  console.log(`operator ${operator}`);
  console.log(`storedNum ${storedInputNum}`);
  console.log(`userInputNum ${userInputNum}`);
  if (operator == '+') {
    return add(storedInputNum, userInputNum);
  } else if (operator == '-') {
    return subtract(storedInputNum, userInputNum);
  } else if (operator == '*') {
    return multiply(storedInputNum, userInputNum);
  } else if (operator == '/') {
    if (userInputNum === 0 || storedInputNum === 0) {
      return "Can't / by 0";
    }
    return Number(divide(storedInputNum, userInputNum).toFixed(6));
  }
}

const btn9 = document.querySelector('#btn9');
const btn8 = document.querySelector('#btn8');
const btn7 = document.querySelector('#btn7');
const btn6 = document.querySelector('#btn6');
const btn5 = document.querySelector('#btn5');
const btn4 = document.querySelector('#btn4');
const btn3 = document.querySelector('#btn3');
const btn2 = document.querySelector('#btn2');
const btn1 = document.querySelector('#btn1');
const btn0 = document.querySelector('#btn0');
const decimal = document.querySelector('#decimal');
const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');
const btnEquals = document.querySelector('#equals');
const btnClear = document.querySelector('#clear');
const btnBackspace = document.querySelector('#backspace');
const screen = document.querySelector('.screen');

const handler = (e) => {
  const key = e.key;
  if (!key.match(/^[0-9]$/)) return;

  e.preventDefault();
  document.getElementById(`btn${key}`).click();
};

document.addEventListener('keypress', handler);

btn9.addEventListener('click', () => {
  userInputNum.push(9);
  screen.textContent = userInputNum.join('');
});

btn8.addEventListener('click', () => {
  userInputNum.push(8);
  screen.textContent = userInputNum.join('');
});

btn7.addEventListener('click', () => {
  userInputNum.push(7);
  screen.textContent = userInputNum.join('');
});

btn6.addEventListener('click', () => {
  userInputNum.push(6);
  screen.textContent = userInputNum.join('');
});

btn5.addEventListener('click', () => {
  userInputNum.push(5);
  screen.textContent = userInputNum.join('');
});

btn4.addEventListener('click', () => {
  userInputNum.push(4);
  screen.textContent = userInputNum.join('');
});

btn3.addEventListener('click', () => {
  userInputNum.push(3);
  screen.textContent = userInputNum.join('');
});

btn2.addEventListener('click', () => {
  userInputNum.push(2);
  screen.textContent = userInputNum.join('');
});

btn1.addEventListener('click', () => {
  userInputNum.push(1);
  screen.textContent = userInputNum.join('');
});

btn0.addEventListener('click', () => {
  userInputNum.push(0);
  screen.textContent = userInputNum.join('');
});

decimal.addEventListener('click', () => {
  const found = userInputNum.find((element) => element === '.');
  if (found) return;
  userInputNum.push('.');
  screen.textContent = userInputNum.join('');
});

btnAdd.addEventListener('click', () => {
  if (operator == null) {
    operator = '+';
    storedInputNum.push(userInputNum.join(''));
    userInputNum = [];
    screen.textContent = '_';
  } else if (operator == '+' || userInputNum.length === 0) {
    return;
  } else {
    let total = operate(
      operator,
      parseInt(userInputNum.join('')),
      parseInt(storedInputNum)
    );
    storedInputNum = [total];
    screen.textContent = storedInputNum;

    userInputNum = [];
    operator = '+';
  }
});

btnSubtract.addEventListener('click', () => {
  if (operator == null) {
    operator = '-';
    storedInputNum.push(userInputNum.join(''));
    userInputNum = [];
    screen.textContent = '_';
  } else if (operator == '-' || userInputNum.length === 0) {
    return;
  } else {
    let total = operate(
      operator,
      parseInt(userInputNum.join('')),
      parseInt(storedInputNum)
    );
    storedInputNum = [total];
    screen.textContent = storedInputNum;

    userInputNum = [];
    operator = '-';
  }
});

btnMultiply.addEventListener('click', () => {
  if (operator == null) {
    operator = '*';
    storedInputNum.push(userInputNum.join(''));
    userInputNum = [];
    screen.textContent = '_';
  } else if (operator == '*' || userInputNum.length === 0) {
    return;
  } else {
    let total = operate(
      operator,
      parseInt(userInputNum.join('')),
      parseInt(storedInputNum)
    );
    storedInputNum = [total];
    screen.textContent = storedInputNum;

    userInputNum = [];
    operator = '*';
  }
});

btnDivide.addEventListener('click', () => {
  if (operator == null) {
    operator = '/';
    storedInputNum.push(userInputNum.join(''));
    userInputNum = [];
    screen.textContent = '_';
  } else if (operator == '/' || userInputNum.length === 0) {
    return;
  } else {
    let total = operate(
      operator,
      parseInt(userInputNum.join('')),
      parseInt(storedInputNum)
    );
    storedInputNum = [total];
    screen.textContent = storedInputNum;

    userInputNum = [];
    operator = '/';
  }
});

btnClear.addEventListener('click', () => {
  operator = null;
  userInputNum = [];
  storedInputNum = [];
  screen.textContent = '_';
});

btnBackspace.addEventListener('click', () => {
  if (userInputNum.length != 0) {
    userInputNum.pop();
    console.log(userInputNum);
    screen.textContent = userInputNum.join('');
  }
});

btnEquals.addEventListener('click', () => {
  if (
    operator == null ||
    storedInputNum.length === 0 ||
    userInputNum.length === 0
  ) {
    return;
  } else if (operator != null) {
    console.log(userInputNum);
    let total = operate(
      operator,
      parseInt(userInputNum.join('')),
      parseInt(storedInputNum)
    );
    storedInputNum = [total];
    screen.textContent = storedInputNum;
    operator = null;
    userInputNum = [];
  }
});
