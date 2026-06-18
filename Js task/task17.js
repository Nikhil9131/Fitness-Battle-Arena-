const numbers = [10, 20, 30, 40];

const sum = numbers.reduce(
  (total, num) => total + num,
  0
);

console.log(sum);