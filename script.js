const container = document.querySelector('#container');
const display = document.querySelector('#display');
let displayNum = [0];
let displayNumPrev = [0];
let operator = '';

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    displayNum +=[9];
    display.textContent = `${displayNum}`;
  });

  const btn8 = document.querySelector('#btn8');
  btn8.addEventListener('click', () => {
    displayNum +=[8];
    display.textContent = `${displayNum}`;
    });

    const btn7 = document.querySelector('#btn7');
    btn7.addEventListener('click', () => {
        displayNum +=[7];
        display.textContent = `${displayNum}`;
      });

      const btn6 = document.querySelector('#btn6');
      btn6.addEventListener('click', () => {
        displayNum +=[6];
          display.textContent = `${displayNum}`;
        });

        const btn5 = document.querySelector('#btn5');
        btn5.addEventListener('click', () => {
            displayNum +=[5];
            display.textContent = `${displayNum}`;
          });

          const btn4 = document.querySelector('#btn4');
          btn4.addEventListener('click', () => {
            displayNum +=[4];
              display.textContent = `${displayNum}`;
            });      
            
            const btn3 = document.querySelector('#btn3');
            btn3.addEventListener('click', () => {
                displayNum +=[3];
                display.textContent = `${displayNum}`;
              });      
              
              const btn2 = document.querySelector('#btn2');
              btn2.addEventListener('click', () => {
                displayNum +=[2];
                  display.textContent = `${displayNum}`;
                });         
                
                const btn1 = document.querySelector('#btn1');
                btn1.addEventListener('click', () => {
                    displayNum +=[1];
                    display.textContent = `${displayNum}`;
                  });
                  
                  const btn0 = document.querySelector('#btn0');
                  btn0.addEventListener('click', () => {
                    displayNum +=[0];
                      display.textContent = `${displayNum}`;
                    });
                    
                    const btnAdd = document.querySelector('#btnAdd');
                    btnAdd.addEventListener('click', () => {
                        operator = '+';
                        displayNumPrev = displayNum;
                        displayNum = [0];
                        display.textContent = `${displayNumPrev} + ${displayNum}`;
                      });
                    
                      const btnSub = document.querySelector('#btnSub');
                      btnSub.addEventListener('click', () => {
                          operator = '-';
                          displayNumPrev = displayNum;
                          displayNum = [0];
                          display.textContent = `${displayNumPrev} - ${displayNum}`;
                        });

                        const btnMulti = document.querySelector('#btnMulti');
                        btnMulti.addEventListener('click', () => {
                          operator = '*';
                          displayNumPrev = displayNum;
                          displayNum = [0];
                          display.textContent = `${displayNumPrev} * ${displayNum}`;
                        });


                        const btnDiv = document.querySelector('#btnDiv');
                        btnDiv.addEventListener('click', () => {
                          operator = '/';
                          displayNumPrev = displayNum;
                          displayNum = [0];
                          display.textContent = `${displayNumPrev} / ${displayNum}`;
                        });

                    const btnE = document.querySelector('#btnE');
                    btnE.addEventListener('click', () => {
                      console.log(operator);
                      console.log(displayNumPrev);
                      check();
                      });
                      
                      const btnC = document.querySelector('#btnC');
                      btnC.addEventListener('click', () => {
                        displayNum =[0];
                        displayNumPrev =[0];
                        operator = '';
                        display.textContent = `${displayNum}`;
                        });    

function check() {
  if (operator === '') {
    display.textContent = 'Must use an operator first';
  } else if (displayNum === NaN || displayNum === Infinity) {
    display.textContent = 'Error'; 
  } else operate(operator, displayNumPrev, displayNum);
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator (+, -, *, /)
// and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
  let num1Int = parseInt(num1);
  let num2Int = parseInt(num2);
     if (operator === '+') {      
        displayNum = add(num1Int, num2Int);
        display.textContent = `${displayNum}`;
    } else if (operator === '-') {
        displayNum = subtract(num1Int, num2Int);
        display.textContent = `${displayNum}`;
    } else if (operator === '*') {
        displayNum = multiply(num1Int, num2Int);
        display.textContent = `${displayNum}`;
    } else if (operator === '/' && num1Int === 0 || num2Int === 0) {
        display.textContent = 'Cannot divide by 0';
    } else if (operator === '/') {
        displayNum = divide(num1Int, num2Int); 
        display.textContent = `${displayNum}`;
    }
}
