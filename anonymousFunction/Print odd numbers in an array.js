const arr = [1, 2, 4, 9, 12, 13, 20];

// Using an anonymous function to filter odd numbers
const oddNumbers = arr.filter((num) => num % 2 === 1);
console.log("Odd Numbers:", oddNumbers);