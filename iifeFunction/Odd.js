const arr = [1, 2, 4, 9, 12, 13, 20];

// Using an IIFE to filter odd numbers
const oddNumbers = (function() {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.push(arr[i]);
    }
  }
  return result;
})();

console.log("Odd Numbers:", oddNumbers); 