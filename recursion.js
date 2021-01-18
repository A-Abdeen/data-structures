const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

// Add base case
numSum = (numbers) => {
  if (numbers.length === 1) {
    return numbers[0];
  }
  // Add reculsive case
  else {
    return (
      numbers[numbers.length - 1] + sum(number.slice(0, number.length - 1))
    );
  }
};
console.log(numSum());
