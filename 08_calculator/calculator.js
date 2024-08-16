const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => {
    return acc * num;
  }, 1);
};

const power = function (num, power) {
  // return num ** power;
  return Math.pow(num, power);
};

const factorial = function (num) {
  // if (num === 0 || num === 1) {
  //   return 1;
  // } else {
  //   let factorial = num;

  //   for (let i = num - 1; i > 0; i--) {
  //     factorial *= i;
  //   }
  //   return factorial;
  // }
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log(`hello`);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
