const container = document.querySelector('#container');
const display = document.querySelector('#display');
let displayNum = [0];
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
                        display.textContent = `${displayNum}+`;
                      });
                    
                      const btnSub = document.querySelector('#btnSub');
                      btnSub.addEventListener('click', () => {
                          operator = '-';
                          display.textContent = `${displayNum}-`;
                        });

                        const btnMulti = document.querySelector('#btnMulti');
                        btnMulti.addEventListener('click', () => {
                          operator = '*';
                          display.textContent = `${displayNum}*`;
                        });


                        const btnDiv = document.querySelector('#btnDiv');
                        btnDiv.addEventListener('click', () => {
                          operator = '/';
                          display.textContent = `${displayNum}/`;
                        });

                    const btnE = document.querySelector('#btnE');
                    btnE.addEventListener('click', () => {
                      operate()
                        display.textContent = `${displayNum}`;
                      });
                      
                      const btnC = document.querySelector('#btnC');
                      btnC.addEventListener('click', () => {
                        displayNum =[0];
                          display.textContent = `${displayNum}`;
                        });                        

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator (+, -, *, /)
// and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    if (operator === '+' || operator === 'add') {
        return add(num1, num2);
    }
    else if (operator === '-' || operator === 'subtract') {
        return subtract(num1, num2);
    }
    else if (operator === '*' || operator === 'multiply') {
        return multiply(num1, num2);
    }
    else if (operator === '/' || operator === 'divide') {
        return divide(num1, num2);
    }
    
}

console.log(operate("+",5,10));
console.log(operate("/",21,7));
console.log(operate("multiply",5,10));