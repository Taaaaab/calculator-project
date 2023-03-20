const screenDisplay = document.querySelector(".screen") as HTMLDivElement;
const buttons = document.querySelectorAll("button");

let calculation: any[] = [];
let accumulativeCalculation: string;

function calculate(button: HTMLButtonElement) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;

    console.log(calculation);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

export {};
