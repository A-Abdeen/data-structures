const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

// Flatten array using flat

const fNum = numbers.flat(7);

// Add base case
sum = (fNum) => {
  if (fNum.length === 1) {
    return fNum[0];
  }
  // Add reculsive case
  else {
    return fNum[fNum.length - 1] + sum(fNum.slice(0, fNum.length - 1));
  }
};

console.log(sum(fNum));
