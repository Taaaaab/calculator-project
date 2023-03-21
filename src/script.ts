const screenDisplay = document.querySelector(".screen") as Element | null;
const buttons = document.querySelectorAll(
  "button"
) as NodeListOf<HTMLButtonElement>;

let calculation: any[] = [];
let accumulativeCalculation: string;

function calculate(button: HTMLButtonElement) {
  if (screenDisplay?.textContent) {
    const value: string | null = button.textContent;
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
}

buttons.forEach((button: HTMLButtonElement) =>
  button.addEventListener("click", () => calculate(button))
);

export {};
