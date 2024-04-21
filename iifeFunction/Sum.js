const numbers = [1, 2, 3, 4];

// Using an IIFE to find the sum of all numbers
const sum = (function() {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
})();

console.log("Sum of all numbers:", sum); 