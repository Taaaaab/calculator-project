const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function([...array1]) {
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial;
};

const multiply = function([...array1]) {
  const initialValue = 1;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue
  );
  return sumWithInitial;
};

const power = function([...array1]) {
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => Math.pow(previousValue , currentValue)
  );
  return sumWithInitial;
};

const factorial = function(num) {
	if (num < 0)
  return -1;

  else if (num === 0)
  return 1;

  else {
    return (num * factorial(num - 1));
  }
}

console.log(add(2, 2));
console.log(subtract(10, 2));
console.log(sum([10, 5]));
console.log(multiply([10, 5]));
console.log(power([8, 2]));
console.log(factorial(10));
