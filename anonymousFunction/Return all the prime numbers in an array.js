const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define a function to check if a number is prime
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

// Filter prime numbers from the array
const primeNumbers = numbers.filter(isPrime);

console.log("Prime Numbers:", primeNumbers);
