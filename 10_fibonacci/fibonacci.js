// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.

const fibonacci = function (num) {
  if (num < 0) {
    return `OOPS`;
  } else if (num === 0 || num === `0`) {
    return 0;
  } else {
    let arr = [0, 1];

    for (let i = 1; i <= num - 2; i++) {
      const fib = arr.reduce((acc, curr) => {
        return acc + curr;
      });
      arr.push(fib);
      arr.splice(0, 1);
    }

    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
};

// Do not edit below this line
module.exports = fibonacci;
